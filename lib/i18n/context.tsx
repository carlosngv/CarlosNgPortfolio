"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import { en, type TranslationKeys } from "./translations/en";
import { es } from "./translations/es";
import type { Language } from "./types";

type Translations = typeof en;

interface LanguageContextValue {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: TranslationKeys) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>("en");

  useEffect(() => {
    const stored = localStorage.getItem("portfolio-lang") as Language | null;
    if (stored === "en" || stored === "es") {
      setLangState(stored);
    } else {
      const browserLang = navigator.language.toLowerCase().startsWith("es")
        ? "es"
        : "en";
      setLangState(browserLang);
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("portfolio-lang", newLang);
  };

  const translations: Record<Language, Record<TranslationKeys, string>> = {
    en: en as Record<TranslationKeys, string>,
    es: es as Record<TranslationKeys, string>,
  };

  const t = (key: TranslationKeys): string => {
    return translations[lang][key] as string;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
