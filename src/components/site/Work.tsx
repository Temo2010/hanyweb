import { useState } from "react";
import { useLang } from "@/i18n/LanguageProvider";
import { MonoLabel, OutlineLink, PlusMark, Reveal } from "./primitives";
import ancient from "@/assets/cat-ancient.jpg";
import coptic from "@/assets/cat-coptic.jpg";
import bazaar from "@/assets/tour-bazaar.jpg";
import museum from "@/assets/tour-museum.jpg";
import nile from "@/assets/tour-nile.jpg";
import { en_tours_items, type TourCategory } from "@/i18n/content";
import { cn } from "@/lib/utils";
import { Building2, Church, Landmark, MapPinned, Moon, type LucideIcon } from "lucide-react";
const tourImages = [ancient, coptic, bazaar, museum, nile, bazaar, coptic];

type TourFilter = TourCategory | "all";

const tourCategoryOptions: TourFilter[] = ["all", "ancient", "coptic", "islamic", "modern"];

const tourCategoryIcons: Record<TourFilter, LucideIcon> = {
  all: MapPinned,
  ancient: Landmark,
  coptic: Church,
  islamic: Moon,
  modern: Building2,
};

const englishFallbackTourIndexes = new Set([
  4, 7, 12, 15, 16, 17, 18, 19, 20, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33,
]);

export function Tours() {
  const { lang, t } = useLang();
  const phoneRaw = t.contact?.phone ?? "";
  const waNumber = String(phoneRaw).replace(/\D/g, "");
  const tourItems =
    lang === "en"
      ? t.tours.items
      : [...t.tours.items, ...en_tours_items.filter((_, index) => englishFallbackTourIndexes.has(index))];

  const [activeCategory, setActiveCategory] = useState<TourFilter>("all");
  const categoryCounts = tourItems.reduce<Record<TourFilter, number>>(
    (counts, item) => {
      counts.all += 1;
      counts[item.category] += 1;
      return counts;
    },
    { all: 0, ancient: 0, coptic: 0, islamic: 0, modern: 0 },
  );
  const trips = tourItems
    .map((item, i) => ({ item, i, category: item.category }))
    .filter(({ category }) => activeCategory === "all" || category === activeCategory);

  return (
    <section id="tours" className="bg-paper text-paper-foreground">
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 md:px-10">
        <Reveal className="border-x border-paper-border px-4 py-12 text-center sm:px-6 sm:py-16 lg:px-12 lg:py-24">
          <MonoLabel className="text-accent">{t.tours.label}</MonoLabel>
          <h2 className="headline mt-6 max-w-full break-words text-[clamp(2.5rem,11vw,10rem)] leading-[0.9] [overflow-wrap:anywhere]">{t.tours.heading}</h2>
        </Reveal>

        <div className="border-x border-t border-paper-border bg-paper px-4 py-4 sm:px-6 sm:py-5 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {tourCategoryOptions.map((category) => {
              const Icon = tourCategoryIcons[category];
              const isActive = activeCategory === category;
              const label = category === "all" ? t.explore.all : t.explore.categories.find((c) => c.id === category)?.name ?? category;

              return (
                <button
                  key={category}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    "group inline-flex min-h-11 items-center gap-2 border border-paper-border bg-white/45 px-3 py-2 text-sm font-medium text-paper-muted shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:bg-background hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 sm:px-4",
                    isActive && "border-accent bg-accent text-accent-foreground shadow-[0_14px_35px_rgba(157,46,32,0.24)] hover:bg-accent hover:text-accent-foreground",
                  )}
                >
                  <Icon size={16} strokeWidth={1.8} className="shrink-0" aria-hidden="true" />
                  <span className="max-w-[10rem] truncate sm:max-w-none">{label}</span>
                  <span
                    className={cn(
                      "ms-1 inline-flex h-5 min-w-5 items-center justify-center border border-current px-1.5 text-xs leading-none opacity-75",
                      isActive && "opacity-90",
                    )}
                  >
                    {categoryCounts[category]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <ul className="grid grid-cols-1 gap-x-6 gap-y-8 border-x border-t border-paper-border px-4 py-8 sm:px-6 sm:py-10 md:grid-cols-2 md:gap-x-8 md:gap-y-12 lg:px-12 lg:py-16">
          {trips.map(({ item, i, category }, idx) => {
            const eraCat = t.explore.categories.find((c) => c.id === category);
            const waHref = `https://wa.me/${waNumber}?text=${encodeURIComponent(`${t.tours.book}: ${item.title}`)}`;
            const imageSrc = item.image ?? tourImages[i];

            return (
              <Reveal as="li" key={item.title} delay={(idx % 2) * 100} className="relative flex min-w-0 flex-col">
                <div className="overflow-hidden border border-paper-border bg-paper shadow-[0_20px_55px_rgba(0,0,0,0.14)]">
                  <img
                    src={imageSrc}
                    alt={item.alt}
                    loading="lazy"
                    width={1400}
                    height={1000}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-[1200ms] ease-out hover:scale-[1.04]"
                  />
                </div>
                <div className="mt-6 flex flex-1 flex-col border-t border-paper-border pt-5">
                  {eraCat ? <MonoLabel className="mb-3 text-accent">{eraCat.name}</MonoLabel> : null}
                  <h3 className="headline max-w-full break-words text-[clamp(1.2rem,2.2vw,2rem)] leading-tight [overflow-wrap:anywhere]">{item.title}</h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <li key={tag} className="label-mono border border-paper-border px-3 py-1.5 text-paper-muted">
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <OutlineLink href={waHref} className="mt-6 self-start">
                    {t.tours.book} â†’
                  </OutlineLink>
                </div>
              </Reveal>
            );
          })}
        </ul>

        <Reveal className="flex justify-center border-x border-y border-paper-border px-4 py-10 sm:px-6 sm:py-12 lg:py-16">
          <OutlineLink href="#contact">{t.tours.cta} â†’</OutlineLink>
        </Reveal>
      </div>
    </section>
  );
}


export function Goal() {
  const { t } = useLang();
  return (
    <section className="border-t border-hairline bg-background">
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 md:px-10">
        <Reveal className="border-x border-hairline px-4 py-16 sm:px-6 sm:py-20 lg:px-12 lg:py-24">
          <h2 className="headline max-w-4xl text-[clamp(2rem,6vw,6rem)]">{t.goal.heading}</h2>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">{t.goal.intro}</p>
          <div className="mt-12 space-y-6 max-w-3xl">
            {t.goal.body.split("\n").map((paragraph, i) => (
              <p key={i} className="text-base leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>
          <p className="mt-12 max-w-3xl text-lg leading-relaxed text-accent font-medium">{t.goal.closing}</p>
        </Reveal>
      </div>
    </section>
  );
}


export function Process() {
  const { t } = useLang();
  return (
    <section className="bg-paper text-paper-foreground">
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 md:px-10">
        <Reveal className="border-x border-t border-paper-border px-4 py-16 sm:px-6 sm:py-20 lg:px-12">
          <h2 className="headline max-w-full break-words text-[clamp(2rem,6vw,6rem)] [overflow-wrap:anywhere]">{t.process.heading}</h2>
        </Reveal>

        <div className="border-x border-t border-paper-border">
          <ol className="grid grid-cols-1 sm:grid-cols-2">
            {t.process.items.map((p, i) => (
              <Reveal
                as="li"
                key={p.title}
                delay={i * 70}
                className="relative border-b border-paper-border p-6 sm:p-8 sm:[&:nth-child(odd)]:border-e"
              >
                <PlusMark className="-end-[6px] -top-[6px] text-paper-muted" />
                <span className="label-mono text-accent">0{i + 1}</span>
                <h3 className="headline mt-8 max-w-full break-words text-[clamp(1.1rem,1.8vw,1.6rem)] [overflow-wrap:anywhere]">{p.title}</h3>
                <p className="mt-4 break-words text-sm leading-relaxed text-paper-muted [overflow-wrap:anywhere]">{p.desc}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
