"use client";

import { useLanguage } from "@/lib/i18n/context";
import type { Post } from "@/lib/blog/types";

interface PostBodyProps {
  post: Post;
}

export function PostBody({ post }: PostBodyProps) {
  const { lang } = useLanguage();
  const content = lang === "es" ? post.contentEs : post.content;

  return (
    <div
      className="prose-portfolio"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}
