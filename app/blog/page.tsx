import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { PostList } from "@/components/blog/PostList";
import { getAllPosts } from "@/lib/blog/posts";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Carlos Ng",
  description: "Articles about full stack development, TypeScript, design systems, and more.",
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <>
      <Navigation />
      <main className="pt-16">
        <section className="py-24 px-6" style={{ backgroundColor: "var(--bg-primary)" }}>
          <div className="mx-auto max-w-5xl">
            <h1
              className="text-section-heading mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              Blog
            </h1>
            <p
              className="text-body mb-16 max-w-xl"
              style={{ color: "var(--text-secondary)" }}
            >
              Writing about full stack development, design systems, TypeScript patterns, and
              the occasional side project.
            </p>
            <PostList posts={posts} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
