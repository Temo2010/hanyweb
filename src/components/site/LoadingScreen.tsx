import { useEffect, useState } from "react";
import { useLang } from "@/i18n/LanguageProvider";
import { cn } from "@/lib/utils";

export function LoadingScreen() {
  const { t } = useLang();
  const [fading, setFading] = useState(false);
  const [done, setDone] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setStarted(true));
    const fade = window.setTimeout(() => setFading(true), 1100);
    const hide = window.setTimeout(() => setDone(true), 1800);
    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(fade);
      window.clearTimeout(hide);
    };
  }, []);

  if (done) return null;

  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] flex flex-col justify-end overflow-hidden bg-background text-foreground transition-opacity duration-700",
        fading ? "pointer-events-none opacity-0" : "opacity-100",
      )}
    >
      <div className="mx-auto w-full max-w-[1600px] px-6 pb-14 md:px-10 md:pb-20">
        <span className="label-mono block text-accent">{t.hero.role}</span>
        <h2 className="headline mt-4 text-[clamp(2.4rem,9vw,7rem)] leading-[0.92]">
          {t.hero.first}
          <br />
          {t.hero.last}
        </h2>
        <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">{t.hero.tagline}</p>

        <div className="mt-10 h-px w-full bg-hairline">
          <div
            className="h-px bg-accent transition-[width] duration-[1100ms] ease-out"
            style={{ width: started ? "100%" : "6%" }}
          />
        </div>
      </div>
    </div>
  );
}
