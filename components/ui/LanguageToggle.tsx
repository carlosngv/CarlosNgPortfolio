"use client";

import { useLanguage } from "@/lib/i18n/context";

export function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div
      className="flex items-center rounded-full overflow-hidden text-nav-link"
      style={{ boxShadow: "var(--shadow-outline-ring)" }}
    >
      <button
        onClick={() => setLang("en")}
        className="px-3 py-1 transition-colors"
        style={{
          backgroundColor: lang === "en" ? "var(--text-primary)" : "var(--bg-primary)",
          color: lang === "en" ? "var(--bg-primary)" : "var(--text-muted)",
        }}
        aria-label="Switch to English"
        aria-pressed={lang === "en"}
      >
        EN
      </button>
      <button
        onClick={() => setLang("es")}
        className="px-3 py-1 transition-colors"
        style={{
          backgroundColor: lang === "es" ? "var(--text-primary)" : "var(--bg-primary)",
          color: lang === "es" ? "var(--bg-primary)" : "var(--text-muted)",
        }}
        aria-label="Cambiar a español"
        aria-pressed={lang === "es"}
      >
        ES
      </button>
    </div>
  );
}
