"use client";

import Link from "next/link";
import { Code2, Globe } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-12 px-6"
      style={{
        borderTop: "1px solid var(--border-subtle)",
        backgroundColor: "var(--bg-primary)",
      }}
    >
      <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-display text-lg" style={{ color: "var(--text-primary)" }}>
            Carlos Ng
          </p>
          <p className="text-caption mt-1" style={{ color: "var(--text-muted)" }}>
            © {year} · {t("footer.rights")}
          </p>
        </div>

        <div className="flex items-center gap-5">
          <Link
            href="https://github.com/carlosngv"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-opacity hover:opacity-60"
            style={{ color: "var(--text-muted)" }}
          >
            <Code2 size={18} />
          </Link>
          <Link
            href="https://linkedin.com/in/carlosngv"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-opacity hover:opacity-60"
            style={{ color: "var(--text-muted)" }}
          >
            <Globe size={18} />
          </Link>
        </div>

      </div>
    </footer>
  );
}
