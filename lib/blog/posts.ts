import { connectToDatabase } from "@/lib/db/mongodb";
import { PostModel } from "./models/Post";
import type { Post, PostMeta } from "./types";

interface GetAllPostsOptions {
  limit?: number;
  tag?: string;
}

export async function getAllPosts(options?: GetAllPostsOptions): Promise<PostMeta[]> {
  await connectToDatabase();

  const query = options?.tag ? { tags: options.tag } : {};
  const docs = await PostModel.find(query)
    .sort({ date: -1 })
    .select("-content -contentEs -__v")
    .limit(options?.limit ?? 0)
    .lean();

  return docs.map(({ _id, createdAt, updatedAt, ...meta }) => meta as PostMeta);
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  await connectToDatabase();

  const doc = await PostModel.findOne({ slug }).select("-__v").lean();
  if (!doc) return null;

  const { _id, createdAt, updatedAt, ...post } = doc;
  return post as Post;
}

export async function getAllSlugs(): Promise<string[]> {
  await connectToDatabase();

  const docs = await PostModel.find().select("slug").lean();
  return docs.map((d) => d.slug);
}

export async function getAllTags(): Promise<string[]> {
  await connectToDatabase();

  const tags = await PostModel.distinct("tags");
  return (tags as string[]).sort();
}

export async function createPost(data: Post): Promise<Post> {
  await connectToDatabase();

  const doc = await PostModel.create(data);
  const { _id, __v, createdAt, updatedAt, ...post } = doc.toObject();
  return post as Post;
}

export async function updatePost(slug: string, data: Partial<Post>): Promise<Post | null> {
  await connectToDatabase();

  const doc = await PostModel.findOneAndUpdate({ slug }, data, { new: true })
    .select("-__v")
    .lean();
  if (!doc) return null;

  const { _id, createdAt, updatedAt, ...post } = doc;
  return post as Post;
}

export async function deletePost(slug: string): Promise<boolean> {
  await connectToDatabase();

  const result = await PostModel.deleteOne({ slug });
  return result.deletedCount === 1;
}
