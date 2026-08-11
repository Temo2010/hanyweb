import { useLang } from "@/i18n/LanguageProvider";
import { MonoLabel, OutlineLink, PlusMark, Reveal } from "./primitives";
import ancient from "@/assets/cat-ancient.jpg";
import coptic from "@/assets/cat-coptic.jpg";
import bazaar from "@/assets/tour-bazaar.jpg";
import museum from "@/assets/tour-museum.jpg";
import nile from "@/assets/tour-nile.jpg";
import desk from "@/assets/planning-desk.jpg";

const tourImages = [ancient, coptic, bazaar, museum, nile];

/** Asymmetric editorial grid: wide, half, half, wide-offset, half. */
const spans = [
  "lg:col-span-8",
  "lg:col-span-4",
  "lg:col-span-5",
  "lg:col-span-7",
  "lg:col-span-8 lg:col-start-3",
];

export function Tours() {
  const { t } = useLang();

  return (
    <section id="tours" className="border-t border-hairline bg-background">
      <div className="mx-auto w-full max-w-[1600px] px-6 md:px-10">
        <Reveal className="border-x border-hairline px-8 py-24 text-center lg:px-12">
          <MonoLabel className="text-accent">{t.tours.label}</MonoLabel>
          <h2 className="headline mt-8 text-[clamp(3rem,14vw,13rem)]">{t.tours.heading}</h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-x-10 gap-y-16 border-x border-t border-hairline px-8 py-16 lg:grid-cols-12 lg:px-12">
          {t.tours.items.map((item, i) => (
            <Reveal key={item.title} delay={(i % 2) * 100} className={`relative ${spans[i]}`}>
              <PlusMark className="-start-3 -top-4 text-muted-foreground" />
              <figure className="group">
                <div className="overflow-hidden border border-hairline">
                  <img
                    src={tourImages[i]}
                    alt={item.alt}
                    loading="lazy"
                    width={1400}
                    height={1000}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
                  />
                </div>
                <figcaption className="mt-6 flex items-start justify-between gap-6 border-t border-hairline pt-5">
                  <h3 className="headline text-[clamp(1.3rem,2.4vw,2.2rem)]">{item.title}</h3>
                  <ul className="shrink-0 text-end">
                    {item.tags.map((tag) => (
                      <li key={tag} className="label-mono text-muted-foreground">
                        {tag}
                      </li>
                    ))}
                  </ul>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal className="flex justify-center border-x border-y border-hairline px-8 py-16">
          <OutlineLink href="#contact">{t.tours.cta} →</OutlineLink>
        </Reveal>
      </div>
    </section>
  );
}

export function Services() {
  const { t } = useLang();
  const thumbs = [ancient, bazaar, coptic, nile];

  return (
    <section className="bg-paper text-paper-foreground">
      <div className="mx-auto w-full max-w-[1600px] px-6 md:px-10">
        <Reveal className="grid grid-cols-1 gap-10 border-x border-paper-border px-8 py-24 lg:grid-cols-12 lg:px-12">
          <h2 className="headline text-[clamp(2rem,5.5vw,5.5rem)] lg:col-span-7">{t.services.heading}</h2>
          <p className="text-base leading-relaxed text-paper-muted lg:col-span-4 lg:col-start-9">{t.services.intro}</p>
        </Reveal>

        <div className="grid grid-cols-1 gap-px border-x border-t border-paper-border bg-paper-border sm:grid-cols-2">
          {[museum, nile].map((src, i) => (
            <div key={i} className="group overflow-hidden bg-paper">
              <img
                src={src}
                alt={i === 0 ? "Museum gallery lit in the dark" : "Felucca on the Nile at sunset"}
                loading="lazy"
                width={1400}
                height={1000}
                className="aspect-[16/9] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />
            </div>
          ))}
        </div>

        <ol className="border-x border-t border-paper-border">
          {t.services.items.map((s, i) => (
            <Reveal
              as="li"
              key={s.title}
              delay={i * 60}
              className="relative grid grid-cols-1 items-start gap-8 border-b border-paper-border px-8 py-10 lg:grid-cols-12 lg:px-12"
            >
              <PlusMark className="-end-[6px] -top-[6px] text-paper-muted" />
              <span className="label-mono text-paper-muted lg:col-span-1">0{i + 1}</span>
              <div className="lg:col-span-4">
                <h3 className="headline text-[clamp(1.2rem,2.2vw,2rem)]">{s.title}</h3>
              </div>
              <p className="text-sm leading-relaxed text-paper-muted lg:col-span-3">{s.desc}</p>
              <ul className="flex flex-wrap gap-2 lg:col-span-2">
                {s.tags.map((tag) => (
                  <li key={tag} className="label-mono border border-paper-border px-3 py-2 text-paper-muted">
                    {tag}
                  </li>
                ))}
              </ul>
              <div className="group overflow-hidden lg:col-span-2">
                <img
                  src={thumbs[i]}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  width={1400}
                  height={1000}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Process() {
  const { t } = useLang();
  return (
    <section className="bg-paper text-paper-foreground">
      <div className="mx-auto w-full max-w-[1600px] px-6 md:px-10">
        <Reveal className="border-x border-t border-paper-border px-8 py-20 lg:px-12">
          <h2 className="headline text-[clamp(2rem,6vw,6rem)]">{t.process.heading}</h2>
        </Reveal>

        <div className="grid grid-cols-1 border-x border-t border-paper-border lg:grid-cols-12">
          <div className="group overflow-hidden border-b border-paper-border lg:col-span-5 lg:border-b-0 lg:border-e">
            <img
              src={desk}
              alt="Travel planning desk with a map of Egypt, compass and notebook"
              loading="lazy"
              width={1400}
              height={1000}
              className="h-full min-h-72 w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
            />
          </div>
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:col-span-7">
            {t.process.items.map((p, i) => (
              <Reveal
                as="li"
                key={p.title}
                delay={i * 70}
                className="relative border-b border-paper-border p-8 sm:[&:nth-child(odd)]:border-e"
              >
                <PlusMark className="-end-[6px] -top-[6px] text-paper-muted" />
                <span className="label-mono text-accent">0{i + 1}</span>
                <h3 className="headline mt-8 text-[clamp(1.1rem,1.8vw,1.6rem)]">{p.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-paper-muted">{p.desc}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
