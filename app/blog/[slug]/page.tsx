import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { PostHeader } from "@/components/blog/PostHeader";
import { PostBody } from "@/components/blog/PostBody";
import { getPostBySlug, getAllSlugs } from "@/lib/blog/posts";

// Revalidate every 60s so new DB posts appear without a full rebuild
export const revalidate = 60;

// Serve slugs not returned by generateStaticParams dynamically
export const dynamicParams = true;

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return { title: "Post not found — Carlos Ng" };
  }

  return {
    title: `${post.title} — Carlos Ng`,
    description: post.excerpt,
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  return (
    <>
      <Navigation />
      <main className="pt-16">
        <article
          className="mx-auto max-w-2xl px-6 py-24"
          style={{ backgroundColor: "var(--bg-primary)" }}
        >
          <PostHeader post={post} />
          <PostBody post={post} />
        </article>
      </main>
      <Footer />
    </>
  );
}
