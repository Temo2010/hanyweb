import { useEffect, useState } from "react";
import { Instagram } from "lucide-react";
import { useLang } from "@/i18n/LanguageProvider";
import { languages } from "@/i18n/content";
import { cn } from "@/lib/utils";

export function Nav() {
  const { t, lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#cairo", label: t.nav.explore },
    { href: "#tours", label: t.nav.tours },
    { href: "#reviews", label: t.nav.reviews },
    { href: "#faq", label: t.nav.faq },
  ];

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-500",
        scrolled
          ? "border-hairline bg-black/95 text-white shadow-[0_10px_30px_rgba(0,0,0,0.28)] backdrop-blur-md"
          : "border-hairline bg-black text-white shadow-[0_10px_24px_rgba(0,0,0,0.16)]",
      )}
    >
      <nav aria-label="Main" className="mx-auto flex w-full max-w-[1600px] flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 md:flex-nowrap md:px-10">
        <a href="#top" className="label-mono truncate text-white">
          {t.hero.first}&nbsp;{t.hero.last}
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="label-mono text-white/75 transition-colors duration-300 hover:text-white">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap items-center justify-end gap-2 sm:gap-3">
          <a
            href="https://instagram.com/hani.ezzat"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-2.5 py-2 text-xs text-white transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-accent-foreground sm:px-3 sm:text-sm"
          >
            <Instagram size={16} />
            Instagram
          </a>

          <div className="flex flex-wrap items-center border border-white/15" role="group" aria-label="Language">
            {languages.map((l) => (
              <button
                key={l.code}
                type="button"
                onClick={() => setLang(l.code)}
                aria-pressed={lang === l.code}
                className={cn(
                  "label-mono px-3 py-2 transition-colors duration-300",
                  lang === l.code ? "bg-white text-black" : "text-white/75 hover:text-white",
                )}
              >
                {l.label}
              </button>
            ))}
          </div>
          <a
            href="#contact"
            className="label-mono hidden border border-white/15 px-4 py-2 text-white transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-accent-foreground md:inline-flex"
          >
            {t.nav.book}
          </a>
        </div>
      </nav>
    </header>
  );
}
