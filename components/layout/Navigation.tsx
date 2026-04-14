"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/i18n/context";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { MobileMenu } from "./MobileMenu";
import type { TranslationKeys } from "@/lib/i18n/translations/en";

const navLinks: { href: string; key: TranslationKeys }[] = [
  { href: "/#about", key: "nav.about" },
  { href: "/#experience", key: "nav.experience" },
  { href: "/#projects", key: "nav.projects" },
  // { href: "/blog", key: "nav.blog" },
  { href: "/#contact", key: "nav.contact" },
];

export function Navigation() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-shadow duration-300"
      style={{
        backgroundColor: "var(--bg-primary)",
        borderBottom: "1px solid var(--border-subtle)",
        boxShadow: scrolled ? "var(--shadow-outline-ring)" : "none",
      }}
    >
      <nav className="mx-auto max-w-5xl px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-display text-[22px] tracking-tight transition-opacity hover:opacity-70"
          style={{ color: "var(--text-primary)" }}
        >
          Carlos Ng
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map(({ href, key }) => (
            <li key={key}>
              <Link
                href={href}
                className="text-nav-link transition-colors hover:opacity-80"
                style={{ color: "var(--text-secondary)" }}
              >
                {t(key)}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          <LanguageToggle />
          <ThemeToggle />
          {/* Get in touch — black pill CTA */}
          <Link
            href="/#contact"
            className="hidden lg:flex items-center px-4 h-9 rounded-full text-nav-link font-medium transition-opacity hover:opacity-75"
            style={{
              backgroundColor: "var(--text-primary)",
              color: "var(--bg-primary)",
            }}
          >
            {t("nav.hire")}
          </Link>
          {/* Mobile hamburger */}
          <div className="lg:hidden">
            <MobileMenu links={navLinks} />
          </div>
        </div>
      </nav>
    </header>
  );
}
