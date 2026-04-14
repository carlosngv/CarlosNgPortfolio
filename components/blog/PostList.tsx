import { PostCard } from "./PostCard";
import type { PostMeta } from "@/lib/blog/types";

interface PostListProps {
  posts: PostMeta[];
}

export function PostList({ posts }: PostListProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
