import { useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { z } from "zod";
import { toast } from "sonner";
import { Instagram, Star } from "lucide-react";
import { useLang } from "@/i18n/LanguageProvider";
import { MonoLabel, OutlineLink, PlusMark, Reveal } from "./primitives";
import { cn } from "@/lib/utils";
import { fetchReviewsFromFirebase, saveReview } from "@/lib/firebase";

type Review = {
  id: string;
  name: string;
  country: string | null;
  tour: string | null;
  rating: number;
  comment: string | null;
  createdAt: string;
};

const schema = z.object({
  name: z.string().trim().min(1).max(80),
  country: z.string().trim().max(60).optional().or(z.literal("")),
  tour: z.string().trim().max(80).optional().or(z.literal("")),
  rating: z.number().int().min(1).max(5),
  comment: z.string().trim().max(1000).optional().or(z.literal("")),
});

async function fetchReviews(): Promise<Review[]> {
  return (await fetchReviewsFromFirebase()) as Review[];
}

function Stars({ value, className }: { value: number; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-1", className)} aria-hidden="true">
      {[1, 2, 3, 4, 5].map((n) => (
        <Star key={n} size={14} className={n <= value ? "fill-accent text-accent" : "text-muted-foreground"} />
      ))}
    </span>
  );
}

export function Reviews() {
  const { t } = useLang();
  const qc = useQueryClient();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const { data, isLoading, error } = useQuery({
    queryKey: ["reviews"],
    queryFn: fetchReviews,
    enabled: isClient,
    retry: false,
  });

  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [form, setForm] = useState({ name: "", country: "", tour: "", comment: "" });
  const [index, setIndex] = useState(0);

  const mutation = useMutation({
    mutationFn: async () => {
      const parsed = schema.parse({ ...form, rating });
      const reviewerDayKey = `${parsed.name.trim().toLowerCase()}::${new Date().toISOString().slice(0, 10)}`;

      await saveReview({
        name: parsed.name,
        country: parsed.country || "",
        tour: parsed.tour || "",
        rating: parsed.rating,
        comment: parsed.comment || "",
        reviewerDayKey,
      });
    },
    onSuccess: () => {
      toast.success(t.reviews.form.success);
      setForm({ name: "", country: "", tour: "", comment: "" });
      setRating(0);
      setIndex(0);
      void qc.invalidateQueries({ queryKey: ["reviews"] });
    },
    onError: (error: unknown) => {
      const message = error instanceof Error ? error.message : t.reviews.form.error;
      toast.error(message);
    },
  });

  const reviews = data ?? [];
  const average = reviews.length ? reviews.reduce((s, r) => s + r.rating, 0) / reviews.length : 0;
  const current = reviews[Math.min(index, Math.max(reviews.length - 1, 0))];

  const inputClass =
    "w-full border border-hairline bg-transparent px-4 py-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none";

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name.trim()) {
      toast.error(t.reviews.form.nameRequired);
      return;
    }
    if (!rating) {
      toast.error(t.reviews.form.ratingRequired);
      return;
    }
    mutation.mutate();
  }

  return (
    <section id="reviews" className="border-t border-hairline bg-background">
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 md:px-10">
        <Reveal className="border-x border-hairline px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-12 lg:py-24">
          <MonoLabel className="text-accent">{t.reviews.label}</MonoLabel>
          <h2 className="headline mx-auto mt-8 max-w-4xl text-[clamp(2rem,6vw,6rem)]">{t.reviews.heading}</h2>
          {error ? (
            <p className="label-mono mt-10 text-destructive">{String(error)}</p>
          ) : reviews.length > 0 ? (
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <p className="label-mono text-muted-foreground">
                {t.reviews.average}: {average.toFixed(1)} / 5 — {t.reviews.based} {reviews.length}
              </p>
              <a
                href="https://www.instagram.com/hanyezzat54"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-accent-foreground"
              >
                <Instagram size={16} />
                Instagram
              </a>
            </div>
          ) : null}
        </Reveal>

        <div className="grid grid-cols-1 border-x border-t border-hairline lg:grid-cols-12">
          {/* Featured review */}
          <div className="relative border-b border-hairline bg-gradient-to-br from-secondary/50 to-background/80 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:p-8 lg:col-span-7 lg:border-b-0 lg:border-e lg:p-14">
            <PlusMark className="-end-[6px] -top-[6px] text-muted-foreground" />
            {isLoading ? (
              <p className="label-mono text-muted-foreground">{t.reviews.loading}</p>
            ) : !current ? (
              <p className="text-lg text-muted-foreground">{t.reviews.empty}</p>
            ) : (
              <div className="flex min-h-80 flex-col justify-between gap-10">
                <div>
                  <Stars value={current.rating} />
                  <blockquote className="mt-8 text-[clamp(1.2rem,2.4vw,2rem)] leading-tight text-foreground">
                    “{current.comment || "—"}”
                  </blockquote>
                </div>

                <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center sm:gap-6">
                  <div className="flex items-center gap-4">
                    <span
                      aria-hidden="true"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-sm font-semibold text-accent-foreground"
                    >
                      {current.name.slice(0, 1).toUpperCase()}
                    </span>
                    <div>
                      <p className="text-sm text-foreground">{current.name}</p>
                      <MonoLabel className="mt-1">
                        {[current.country, current.tour].filter(Boolean).join(" · ") || "—"}
                      </MonoLabel>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <ul className="flex items-center gap-2" aria-hidden="true">
                      {reviews.slice(0, 6).map((r, i) => (
                        <li
                          key={r.id}
                          className={cn("h-1.5 w-1.5", i === index ? "bg-accent" : "bg-hairline")}
                        />
                      ))}
                    </ul>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => setIndex((i) => (i - 1 + reviews.length) % reviews.length)}
                        className="label-mono border border-hairline px-4 py-3 transition-colors hover:border-accent hover:text-accent"
                      >
                        {t.reviews.prev}
                      </button>
                      <button
                        type="button"
                        onClick={() => setIndex((i) => (i + 1) % reviews.length)}
                        className="label-mono border border-hairline px-4 py-3 transition-colors hover:border-accent hover:text-accent"
                      >
                        {t.reviews.next}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Rating form */}
          <div className="p-6 sm:p-8 lg:col-span-5 lg:p-14">
            <h3 className="headline text-[clamp(1.2rem,2vw,1.8rem)]">{t.reviews.form.title}</h3>

            <form onSubmit={submit} className="mt-10 space-y-4">
              <fieldset>
                <legend className="label-mono mb-3 text-muted-foreground">{t.reviews.form.rating}</legend>
                <div className="flex flex-wrap items-center gap-2">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <button
                      key={n}
                      type="button"
                      onClick={() => setRating(n)}
                      onMouseEnter={() => setHover(n)}
                      onMouseLeave={() => setHover(0)}
                      aria-label={`${n} ${t.reviews.form.star}`}
                      aria-pressed={rating === n}
                      className="border border-hairline p-3 transition-colors duration-200 hover:border-accent"
                    >
                      <Star
                        size={18}
                        className={n <= (hover || rating) ? "fill-accent text-accent" : "text-muted-foreground"}
                      />
                    </button>
                  ))}
                  <a
                    href="https://www.instagram.com/hanyezzat54"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-hairline text-muted-foreground transition-colors duration-200 hover:border-accent hover:text-accent"
                    aria-label="Open Instagram"
                  >
                    <Instagram size={16} />
                  </a>
                </div>
              </fieldset>

              <div>
                <label htmlFor="rv-name" className="label-mono mb-2 block text-muted-foreground">
                  {t.reviews.form.name}
                </label>
                <input
                  id="rv-name"
                  required
                  maxLength={80}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={inputClass}
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="rv-country" className="label-mono mb-2 block text-muted-foreground">
                    {t.reviews.form.country}
                  </label>
                  <input
                    id="rv-country"
                    maxLength={60}
                    value={form.country}
                    onChange={(e) => setForm({ ...form, country: e.target.value })}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="rv-tour" className="label-mono mb-2 block text-muted-foreground">
                    {t.reviews.form.tour}
                  </label>
                  <input
                    id="rv-tour"
                    maxLength={80}
                    value={form.tour}
                    onChange={(e) => setForm({ ...form, tour: e.target.value })}
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="rv-comment" className="label-mono mb-2 block text-muted-foreground">
                  {t.reviews.form.comment}
                </label>
                <textarea
                  id="rv-comment"
                  rows={4}
                  maxLength={1000}
                  value={form.comment}
                  onChange={(e) => setForm({ ...form, comment: e.target.value })}
                  className={inputClass}
                />
              </div>

              <OutlineLink type="submit" disabled={mutation.isPending} className="w-full sm:w-auto">
                {mutation.isPending ? t.reviews.form.sending : `${t.reviews.form.submit} →`}
              </OutlineLink>
            </form>
          </div>
        </div>

        {/* All reviews list */}
        {reviews.length > 1 && (
          <ul className="grid grid-cols-1 border-x border-t border-hairline sm:grid-cols-2 lg:grid-cols-3">
            {reviews.slice(0, 6).map((r, i) => (
              <Reveal as="li" key={r.id} delay={i * 50} className="border-b border-hairline p-6 sm:p-8 sm:[&:nth-child(odd)]:border-e">
                <Stars value={r.rating} />
                <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{r.comment || "—"}</p>
                <MonoLabel className="mt-6 text-foreground">
                  {r.name}
                  {r.country ? ` · ${r.country}` : ""}
                </MonoLabel>
              </Reveal>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
