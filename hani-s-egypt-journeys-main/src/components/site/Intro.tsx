import { useLang } from "@/i18n/LanguageProvider";
import { MonoLabel, PlusMark, Reveal } from "./primitives";
import portrait from "@/assets/portrait-hani.jpg";
import heroCairo from "@/assets/hero-cairo.jpg";

export function Hero() {
  const { t } = useLang();
  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col bg-paper text-paper-foreground">
      <div className="relative flex flex-1 items-center justify-center px-6 py-32">
        <PlusMark className="left-6 top-24 text-paper-foreground md:left-10" />
        <PlusMark className="right-6 top-24 text-paper-foreground md:right-10" />
        <PlusMark className="bottom-24 left-6 text-paper-foreground md:left-10" />
        <PlusMark className="bottom-24 right-6 text-paper-foreground md:right-10" />

        <Reveal className="w-full text-center">
          <span className="label-mono block text-paper-muted">{t.hero.role}</span>
          <h1 className="headline mt-10 text-[clamp(2.6rem,11vw,11rem)] text-paper-foreground">
            Hani
            <br />
            Ezzat
          </h1>
          <p className="label-mono mt-10 text-paper-muted">{t.hero.tagline}</p>
        </Reveal>
      </div>

      <div className="relative border-t border-paper-border">
        <img
          src={heroCairo}
          alt="Cairo skyline of minarets and domes at dusk"
          width={1920}
          height={1080}
          className="h-[38vh] w-full object-cover md:h-[46vh]"
        />
        <span className="label-mono absolute bottom-4 left-6 text-foreground md:left-10">{t.hero.scroll} ↓</span>
      </div>
    </section>
  );
}

export function Profile() {
  const { t } = useLang();
  const facts = [
    { l: t.profile.location, v: t.profile.locationV },
    { l: t.profile.field, v: t.profile.fieldV },
    { l: t.profile.approach, v: t.profile.approachV },
    { l: t.profile.guests, v: t.profile.guestsV },
  ];

  return (
    <section id="about" className="border-t border-hairline bg-background">
      <div className="mx-auto w-full max-w-[1600px] px-6 md:px-10">
        <ul className="grid grid-cols-1 border-x border-hairline sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((f, i) => (
            <Reveal
              as="li"
              key={f.l}
              delay={i * 80}
              className="relative border-b border-hairline p-8 sm:[&:nth-child(odd)]:border-r lg:border-r lg:last:border-r-0 lg:[&:nth-child(odd)]:border-r"
            >
              <PlusMark className="-right-[6px] -top-[6px] text-muted-foreground" />
              <MonoLabel>{f.l}</MonoLabel>
              <p className="mt-6 text-lg leading-snug text-foreground">{f.v}</p>
            </Reveal>
          ))}
        </ul>

        <div className="grid grid-cols-1 gap-12 border-x border-b border-hairline p-8 lg:grid-cols-12 lg:gap-16 lg:p-12">
          <Reveal className="lg:col-span-7">
            <MonoLabel className="text-accent">{t.profile.aboutLabel}</MonoLabel>
            <h2 className="headline mt-10 text-[clamp(1.7rem,3.4vw,3.4rem)]">{t.profile.aboutHeading}</h2>
            <p className="mt-10 max-w-xl text-base leading-relaxed text-muted-foreground">{t.profile.aboutBody}</p>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-5 lg:-mt-24">
            <div className="group relative overflow-hidden border border-hairline bg-accent">
              <img
                src={portrait}
                alt={t.profile.portraitAlt}
                loading="lazy"
                width={1000}
                height={1300}
                className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />
            </div>
          </Reveal>
        </div>

        <Reveal className="border-x border-b border-hairline px-8 py-20 text-center">
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">{t.profile.statement}</p>
        </Reveal>
      </div>
    </section>
  );
}

export function Metrics() {
  const { t } = useLang();
  return (
    <section className="bg-background">
      <div className="mx-auto w-full max-w-[1600px] px-6 md:px-10">
        <Reveal className="border-x border-hairline px-8 py-20 lg:px-12">
          <h2 className="headline max-w-4xl text-[clamp(1.9rem,5vw,5rem)]">{t.metrics.heading}</h2>
        </Reveal>
        <ul className="grid grid-cols-1 border-x border-hairline sm:grid-cols-2">
          {t.metrics.items.map((m, i) => (
            <Reveal
              as="li"
              key={m.label}
              delay={i * 80}
              className="relative border-b border-t border-hairline p-10 sm:[&:nth-child(odd)]:border-r"
            >
              <PlusMark className="-right-[6px] -top-[6px] text-muted-foreground" />
              <p className="headline text-[clamp(3rem,8vw,7rem)] text-foreground">{m.value}</p>
              <MonoLabel className="mt-6">{m.label}</MonoLabel>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
