import { useState } from "react";
import { useLang } from "@/i18n/LanguageProvider";
import { MonoLabel, PlusMark, Reveal } from "./primitives";
import { cn } from "@/lib/utils";
import ancient from "@/assets/cat-ancient.jpg";
import islamic from "@/assets/cat-islamic.jpg";
import coptic from "@/assets/cat-coptic.jpg";
import modern from "@/assets/cat-modern.jpg";

const images: Record<string, string> = { ancient, islamic, coptic, modern };

export function Explore() {
  const { t } = useLang();
  const [active, setActive] = useState<string>("all");

  const categories = t.explore.categories;
  const shown = active === "all" ? categories : categories.filter((c) => c.id === active);

  return (
    <section id="cairo" className="border-t border-hairline bg-background">
      <div className="mx-auto w-full max-w-[1600px] px-6 md:px-10">
        <Reveal className="border-x border-hairline px-8 py-20 lg:px-12">
          <MonoLabel className="text-accent">{t.explore.label}</MonoLabel>
          <h2 className="headline mt-10 max-w-3xl text-[clamp(2rem,6vw,6rem)]">{t.explore.heading}</h2>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">{t.explore.intro}</p>
        </Reveal>

        <div className="flex flex-wrap gap-px border-x border-t border-hairline bg-hairline">
          <button
            type="button"
            onClick={() => setActive("all")}
            aria-pressed={active === "all"}
            className={cn(
              "label-mono flex-1 bg-background px-6 py-5 transition-colors duration-300",
              active === "all" ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:text-foreground",
            )}
          >
            {t.explore.all}
          </button>
          {categories.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setActive(c.id)}
              aria-pressed={active === c.id}
              className={cn(
                "label-mono flex-1 whitespace-nowrap bg-background px-6 py-5 transition-colors duration-300",
                active === c.id ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:text-foreground",
              )}
            >
              {c.name}
            </button>
          ))}
        </div>

        <div className="border-x border-t border-hairline">
          {shown.map((c, idx) => (
            <Reveal key={c.id} delay={idx * 60} className="relative grid grid-cols-1 border-b border-hairline lg:grid-cols-12">
              <PlusMark className="-right-[6px] -top-[6px] text-muted-foreground" />

              <div className="group overflow-hidden border-b border-hairline lg:col-span-5 lg:border-b-0 lg:border-e">
                <img
                  src={images[c.id]}
                  alt={c.name}
                  loading="lazy"
                  width={1400}
                  height={1000}
                  className="h-64 w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105 lg:h-full"
                />
              </div>

              <div className="p-8 lg:col-span-7 lg:p-12">
                <h3 className="headline text-[clamp(1.5rem,3vw,2.6rem)]">{c.name}</h3>
                <p className="mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground">{c.desc}</p>

                <ul className="mt-10 grid grid-cols-1 gap-px bg-hairline sm:grid-cols-2">
                  {c.places.map((p) => (
                    <li key={p.name} className="bg-background py-4 pe-4">
                      <p className="text-base text-foreground">{p.name}</p>
                      <MonoLabel className="mt-2">{p.note}</MonoLabel>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
