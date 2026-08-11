import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { content, type Content, type Lang } from "./content";

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: Content };

const LanguageContext = createContext<Ctx | null>(null);

const STORAGE_KEY = "he-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (stored && stored in content) setLangState(stored);
  }, []);

  useEffect(() => {
    const t = content[lang];
    document.documentElement.lang = lang;
    document.documentElement.dir = t.dir;
  }, [lang]);

  const value = useMemo<Ctx>(
    () => ({
      lang,
      t: content[lang],
      setLang: (l) => {
        setLangState(l);
        window.localStorage.setItem(STORAGE_KEY, l);
      },
    }),
    [lang],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used inside LanguageProvider");
  return ctx;
}
