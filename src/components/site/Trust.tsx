import { useLang } from "@/i18n/LanguageProvider";
import { MonoLabel, OutlineLink, PlusMark, Reveal } from "./primitives";
import portrait from "@/assets/portrait-hani.png";

export function Clients() {
  const { t } = useLang();

  if (!t.clients.heading) return null;

  return (
    <section className="border-t border-hairline bg-background">
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 border-x border-hairline lg:grid-cols-12">
          <div className="relative border-b border-hairline bg-gradient-to-br from-secondary/40 to-background/70 p-6 sm:p-8 lg:col-span-5 lg:border-b-0 lg:border-e lg:p-12">
            <PlusMark className="-end-[6px] -top-[6px] text-muted-foreground" />
            <h2 className="headline text-[clamp(1.8rem,4vw,3.6rem)]">{t.clients.heading}</h2>
            <p className="mt-8 max-w-md text-sm leading-relaxed text-muted-foreground">{t.clients.statement}</p>

            <div className="mt-12 flex items-center gap-4 border-t border-hairline pt-8">
              <img
                src={portrait}
                alt=""
                aria-hidden="true"
                loading="lazy"
                width={1000}
                height={1300}
                className="h-12 w-12 rounded-full object-cover"
              />
              <div>
                <p className="text-sm text-foreground">{t.clients.miniName}</p>
                <MonoLabel className="mt-1">{t.clients.miniRole}</MonoLabel>
              </div>
            </div>

            <OutlineLink href="#contact" className="mt-10">
              {t.clients.book} →
            </OutlineLink>
          </div>

          <ul className="lg:col-span-7">
            {t.clients.list.map((c, i) => (
              <Reveal
                as="li"
                key={c.name}
                delay={i * 40}
                className="group flex flex-col items-start justify-between gap-3 border-b border-hairline px-6 py-6 transition-colors duration-300 hover:bg-secondary sm:flex-row sm:items-baseline sm:gap-6 sm:px-8 lg:px-12"
              >
                <span className="headline text-[clamp(1.1rem,2.2vw,1.9rem)] text-foreground">{c.name}</span>
                <MonoLabel className="shrink-0 transition-colors group-hover:text-accent">{c.year}</MonoLabel>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function Awards() {
  const { t } = useLang();
  return (
    <section className="bg-background">
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 border-x border-t border-hairline lg:grid-cols-12">
          <Reveal className="border-b border-hairline p-6 sm:p-8 lg:col-span-5 lg:border-b-0 lg:border-e lg:p-12">
            <h2 className="headline text-[clamp(1.8rem,4vw,3.6rem)]">{t.awards.heading}</h2>
          </Reveal>
          <ul className="lg:col-span-7">
            {t.awards.items.map((a, i) => (
              <Reveal
                as="li"
                key={a.name}
                delay={i * 60}
                className="flex flex-col items-start justify-between gap-3 border-b border-hairline px-6 py-7 sm:flex-row sm:items-baseline sm:px-8 lg:px-12"
              >
                <span className="text-base text-foreground">{a.name}</span>
                <MonoLabel>{a.note}</MonoLabel>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal className="border-x border-hairline px-6 py-14 sm:px-8 sm:py-16 lg:px-12">
          <h3 className="headline text-[clamp(1.6rem,4vw,3.2rem)]">{t.awards.storiesHeading}</h3>
        </Reveal>

        <ul className="grid grid-cols-1 border-x border-t border-hairline md:grid-cols-3">
          {t.awards.stories.map((s, i) => (
            <Reveal
              as="li"
              key={s.title}
              delay={i * 70}
              className="group relative border-b border-hairline p-6 transition-colors duration-300 hover:bg-secondary sm:p-8 md:[&:not(:last-child)]:border-e"
            >
              <PlusMark className="-end-[6px] -top-[6px] text-muted-foreground" />
              <MonoLabel>{s.meta}</MonoLabel>
              <p className="headline mt-10 text-[clamp(1.1rem,1.8vw,1.5rem)]">{s.title}</p>
              <span className="label-mono mt-10 block text-muted-foreground transition-colors group-hover:text-accent">→</span>
            </Reveal>
          ))}
        </ul>

        <Reveal className="flex justify-center border-x border-b border-hairline px-6 py-12 sm:px-8 sm:py-14">
          <OutlineLink href="#contact">{t.awards.readMore} →</OutlineLink>
        </Reveal>
      </div>
    </section>
  );
}

export function Faq() {
  const { t } = useLang();
  return (
    <section id="faq" className="bg-background">
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 md:px-10">
        <Reveal className="border-x border-hairline px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-12 lg:py-24">
          <h2 className="headline mx-auto max-w-4xl text-[clamp(2rem,6vw,6rem)]">{t.faq.heading}</h2>
        </Reveal>

        <div className="border-x border-t border-hairline">
          {t.faq.items.map((item, i) => (
            <FaqRow key={item.q} index={i} question={item.q} answer={item.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqRow({ index, question, answer }: { index: number; question: string; answer: string }) {
  const id = `faq-panel-${index}`;
  return (
    <details className="group border-b border-hairline">
      <summary
        className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-6 transition-colors duration-300 hover:bg-secondary sm:gap-8 sm:px-8 sm:py-7 lg:px-12 [&::-webkit-details-marker]:hidden"
        aria-controls={id}
      >
        <span className="flex items-baseline gap-6">
          <span className="label-mono text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>
          <span className="text-[clamp(1rem,1.8vw,1.4rem)] leading-snug text-foreground">{question}</span>
        </span>
        <span aria-hidden="true" className="shrink-0 text-xl text-accent transition-transform duration-300 group-open:rotate-45">
          +
        </span>
      </summary>
      <div
        id={id}
        className="grid grid-rows-[1fr] px-4 pb-6 ps-4 text-sm leading-relaxed text-muted-foreground sm:px-8 sm:pb-8 sm:ps-8 lg:px-12 lg:ps-[7.5rem]"
      >
        <p className="max-w-2xl">{answer}</p>
      </div>
    </details>
  );
}
