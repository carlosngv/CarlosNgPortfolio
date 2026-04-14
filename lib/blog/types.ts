export interface PostMeta {
  slug: string;
  title: string;
  titleEs: string;
  date: string; // ISO 8601: "2025-03-15"
  excerpt: string;
  excerptEs: string;
  tags: string[];
  readingTime: number; // minutes
  coverImage?: string;
}

export interface Post extends PostMeta {
  content: string; // HTML/markdown string
  contentEs: string;
}
