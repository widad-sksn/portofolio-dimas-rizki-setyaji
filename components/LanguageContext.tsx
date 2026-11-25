"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { Locale, translations } from "./translations";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: typeof translations.id;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("id");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("portfolio_locale") as Locale | null;
      if (saved === "id" || saved === "en") {
        setLocaleState(saved);
      }
    } catch {
      // ignore SSR or storage restrictions
    }
  }, []);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    try {
      localStorage.setItem("portfolio_locale", l);
      document.documentElement.lang = l;
    } catch {
      // ignore
    }
  };

  const toggleLocale = () => {
    setLocale(locale === "id" ? "en" : "id");
  };

  const t = translations[locale];

  return (
    <LanguageContext.Provider value={{ locale, setLocale, toggleLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    return {
      locale: "id" as Locale,
      setLocale: () => {},
      toggleLocale: () => {},
      t: translations.id,
    };
  }
  return context;
}
