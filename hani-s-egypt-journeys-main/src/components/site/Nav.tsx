import { useEffect, useState } from "react";
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
        "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-500",
        scrolled ? "border-hairline bg-background/90 backdrop-blur-md" : "border-transparent bg-transparent",
      )}
    >
      <nav aria-label="Main" className="mx-auto flex w-full max-w-[1600px] items-center justify-between gap-4 px-6 py-4 md:px-10">
        <a href="#top" className="label-mono text-foreground">
          Hani&nbsp;Ezzat
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="label-mono text-muted-foreground transition-colors duration-300 hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <div className="flex items-center border border-hairline" role="group" aria-label="Language">
            {languages.map((l) => (
              <button
                key={l.code}
                type="button"
                onClick={() => setLang(l.code)}
                aria-pressed={lang === l.code}
                className={cn(
                  "label-mono px-3 py-2 transition-colors duration-300",
                  lang === l.code ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:text-foreground",
                )}
              >
                {l.label}
              </button>
            ))}
          </div>
          <a
            href="#contact"
            className="label-mono hidden border border-hairline px-4 py-2 text-foreground transition-colors duration-300 hover:border-accent hover:bg-accent hover:text-accent-foreground md:inline-flex"
          >
            {t.nav.book}
          </a>
        </div>
      </nav>
    </header>
  );
}
