"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";
import { TagBadge } from "./TagBadge";
import type { PostMeta } from "@/lib/blog/types";

interface PostCardProps {
  post: PostMeta;
}

function formatDate(dateStr: string, lang: "en" | "es"): string {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString(lang === "es" ? "es-ES" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function PostCard({ post }: PostCardProps) {
  const { lang, t } = useLanguage();
  const title = lang === "es" ? post.titleEs : post.title;
  const excerpt = lang === "es" ? post.excerptEs : post.excerpt;

  return (
    <Link href={`/blog/${post.slug}`} className="group block h-full">
      <article
        className="flex flex-col h-full p-6 rounded-[20px] transition-shadow duration-300 group-hover:shadow-card-el"
        style={{
          backgroundColor: "var(--bg-primary)",
          boxShadow: "var(--shadow-outline-ring)",
        }}
      >
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {post.tags.slice(0, 2).map((tag) => (
            <TagBadge key={tag} tag={tag} small />
          ))}
        </div>

        {/* Title */}
        <h3 className="text-card-heading mb-3 flex-1" style={{ color: "var(--text-primary)" }}>
          {title}
        </h3>

        {/* Excerpt */}
        <p
          className="text-body-ui mb-5 line-clamp-3"
          style={{ color: "var(--text-secondary)" }}
        >
          {excerpt}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <p className="text-caption" style={{ color: "var(--text-muted)" }}>
            {formatDate(post.date, lang)} · {post.readingTime} {t("blog.minRead")}
          </p>
          <ArrowRight
            size={14}
            className="transition-transform duration-200 group-hover:translate-x-1"
            style={{ color: "var(--text-muted)" }}
          />
        </div>
      </article>
    </Link>
  );
}
