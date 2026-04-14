"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";
import { TagBadge } from "./TagBadge";
import type { Post } from "@/lib/blog/types";

interface PostHeaderProps {
  post: Post;
}

function formatDate(dateStr: string, lang: "en" | "es"): string {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString(lang === "es" ? "es-ES" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function PostHeader({ post }: PostHeaderProps) {
  const { lang, t } = useLanguage();
  const title = lang === "es" ? post.titleEs : post.title;

  return (
    <header className="mb-12">
      {/* Back link */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-caption mb-10 transition-opacity hover:opacity-60"
        style={{ color: "var(--text-muted)" }}
      >
        <ArrowLeft size={14} />
        {t("blog.backToList")}
      </Link>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {post.tags.map((tag) => (
          <TagBadge key={tag} tag={tag} />
        ))}
      </div>

      {/* Title */}
      <h1 className="text-section-heading mb-6" style={{ color: "var(--text-primary)" }}>
        {title}
      </h1>

      {/* Meta */}
      <div className="flex items-center gap-4" style={{ color: "var(--text-muted)" }}>
        <p className="text-caption">{formatDate(post.date, lang)}</p>
        <span className="text-caption">·</span>
        <p className="text-caption">
          {post.readingTime} {t("blog.minRead")}
        </p>
      </div>

      {/* Divider */}
      <div
        className="mt-10 h-px w-full"
        style={{ backgroundColor: "var(--border-default)" }}
      />
    </header>
  );
}
