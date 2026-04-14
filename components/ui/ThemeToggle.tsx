"use client";

import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className="w-8 h-8" aria-hidden="true" />;
  }

  function toggleTheme() {
    const root = document.documentElement;
    root.classList.add("theme-transitioning");
    setTheme(theme === "dark" ? "light" : "dark");
    setTimeout(() => root.classList.remove("theme-transitioning"), 500);
  }

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center w-8 h-8 rounded-full transition-opacity hover:opacity-70"
      style={{
        backgroundColor: "var(--bg-warm)",
        color: "var(--text-muted)",
        boxShadow: "var(--shadow-outline-ring)",
      }}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
}
