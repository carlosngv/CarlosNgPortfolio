"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { PostCard } from "@/components/blog/PostCard";
import type { PostMeta } from "@/lib/blog/types";

interface BlogPreviewSectionProps {
  posts: PostMeta[];
}

export function BlogPreviewSection({ posts }: BlogPreviewSectionProps) {
  const { t } = useLanguage();

  return (
    <SectionContainer id="blog">
      <AnimatedSection>
        <div className="flex items-end justify-between mb-16">
          <h2 className="text-section-heading" style={{ color: "var(--text-primary)" }}>
            {t("blog.heading")}
          </h2>
          <Link
            href="/blog"
            className="flex items-center gap-1.5 text-nav-link transition-opacity hover:opacity-60 mb-1"
            style={{ color: "var(--text-muted)" }}
          >
            {t("blog.viewAll")}
            <ArrowRight size={14} />
          </Link>
        </div>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((post, i) => (
          <AnimatedSection key={post.slug} delay={0.1 * i}>
            <PostCard post={post} />
          </AnimatedSection>
        ))}
      </div>
    </SectionContainer>
  );
}
