import { useLang } from "@/i18n/LanguageProvider";
import { MonoLabel, PlusMark, Reveal } from "./primitives";
import portrait from "@/assets/portrait-hani.png";
import heroPyramids from "@/assets/hero-pyramids.jpg";

export function Hero() {
  const { t } = useLang();
  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-background text-foreground">
      <img
        src={heroPyramids}
        alt="The Giza pyramids at golden dusk"
        width={1920}
        height={1088}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/55 to-black/30" />

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-4 pb-12 pt-24 sm:px-6 sm:pb-16 sm:pt-28 md:px-10 md:pb-20 md:pt-32">
        <Reveal className="max-w-3xl min-w-0 text-start">
          <span className="label-mono block text-white/70">{t.hero.role}</span>
          <h1 className="headline mt-4 max-w-full break-words text-[clamp(2.6rem,10vw,8rem)] leading-[0.92] text-white [overflow-wrap:anywhere]">
            {t.hero.first}
            <br />
            {t.hero.last}
          </h1>
          
          <p className="mt-6 max-w-xl break-words text-base leading-relaxed text-white/80 [overflow-wrap:anywhere] md:text-lg">{t.hero.tagline}</p>
        </Reveal>

        <div className="mt-12 border-t border-white/20 pt-5">
          <span className="label-mono text-white/70">{t.hero.scroll} ↓</span>
        </div>
      </div>
    </section>
  );
}



export function Profile() {
  const { t } = useLang();

  return (
    <section id="about" className="border-t border-hairline bg-background">
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 gap-8 border-x border-y border-hairline p-6 sm:gap-10 sm:p-8 lg:grid-cols-12 lg:gap-16 lg:p-12">
          <Reveal className="min-w-0 lg:col-span-7">
            <MonoLabel className="text-accent">{t.profile.aboutLabel}</MonoLabel>
            <p className="mt-10 max-w-2xl break-words text-[clamp(1.1rem,1.7vw,1.5rem)] leading-relaxed text-white font-bold [overflow-wrap:anywhere]">
              {t.profile.aboutBody}
            </p>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-5">
            <div className="group relative overflow-hidden border border-hairline">
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
      </div>
    </section>
  );
}


export function Metrics() {
  const { t } = useLang();
  return (
    <section className="bg-background">
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 md:px-10">
        <Reveal className="border-x border-hairline px-6 py-16 sm:px-8 sm:py-20 lg:px-12">
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
