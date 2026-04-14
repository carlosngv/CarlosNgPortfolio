import { connectToDatabase, isDatabaseConfigured } from "@/lib/db/mongodb";
import { mockPosts } from "./mock-posts";
import { PostModel } from "./models/Post";
import type { Post, PostMeta } from "./types";

interface GetAllPostsOptions {
  limit?: number;
  tag?: string;
}

export class DatabaseUnavailableError extends Error {
  constructor(message = "Database is not configured") {
    super(message);
    this.name = "DatabaseUnavailableError";
  }
}

function getMockPostMetas(options?: GetAllPostsOptions): PostMeta[] {
  const filtered = options?.tag
    ? mockPosts.filter((post) => post.tags.includes(options.tag as string))
    : mockPosts;

  const sorted = [...filtered].sort((a, b) => b.date.localeCompare(a.date));
  const limited = options?.limit ? sorted.slice(0, options.limit) : sorted;

  return limited.map(({ content, contentEs, ...meta }) => meta);
}

function isDbUnavailableError(error: unknown): boolean {
  if (!error || typeof error !== "object") return false;

  const maybeError = error as { name?: string; message?: string };
  return (
    maybeError.name === "MongooseServerSelectionError" ||
    maybeError.message?.includes("ECONNREFUSED") === true
  );
}

export async function getAllPosts(options?: GetAllPostsOptions): Promise<PostMeta[]> {
  if (!isDatabaseConfigured) {
    return getMockPostMetas(options);
  }

  try {
    await connectToDatabase();

    const query = options?.tag ? { tags: options.tag } : {};
    const docs = await PostModel.find(query)
      .sort({ date: -1 })
      .select("-content -contentEs -__v")
      .limit(options?.limit ?? 0)
      .lean();

    return docs.map(({ _id, createdAt, updatedAt, ...meta }) => meta as PostMeta);
  } catch (error) {
    if (isDbUnavailableError(error)) {
      return getMockPostMetas(options);
    }
    throw error;
  }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  if (!isDatabaseConfigured) {
    return mockPosts.find((post) => post.slug === slug) ?? null;
  }

  try {
    await connectToDatabase();

    const doc = await PostModel.findOne({ slug }).select("-__v").lean();
    if (!doc) return null;

    const { _id, createdAt, updatedAt, ...post } = doc;
    return post as Post;
  } catch (error) {
    if (isDbUnavailableError(error)) {
      return mockPosts.find((post) => post.slug === slug) ?? null;
    }
    throw error;
  }
}

export async function getAllSlugs(): Promise<string[]> {
  if (!isDatabaseConfigured) {
    return mockPosts.map((post) => post.slug);
  }

  try {
    await connectToDatabase();

    const docs = await PostModel.find().select("slug").lean();
    return docs.map((d) => d.slug);
  } catch (error) {
    if (isDbUnavailableError(error)) {
      return mockPosts.map((post) => post.slug);
    }
    throw error;
  }
}

export async function getAllTags(): Promise<string[]> {
  if (!isDatabaseConfigured) {
    const tagSet = new Set<string>();
    for (const post of mockPosts) {
      for (const tag of post.tags) {
        tagSet.add(tag);
      }
    }
    return [...tagSet].sort();
  }

  try {
    await connectToDatabase();

    const tags = await PostModel.distinct("tags");
    return (tags as string[]).sort();
  } catch (error) {
    if (isDbUnavailableError(error)) {
      const tagSet = new Set<string>();
      for (const post of mockPosts) {
        for (const tag of post.tags) {
          tagSet.add(tag);
        }
      }
      return [...tagSet].sort();
    }
    throw error;
  }
}

export async function createPost(data: Post): Promise<Post> {
  if (!isDatabaseConfigured) {
    throw new DatabaseUnavailableError("Cannot create posts without a configured database");
  }

  try {
    await connectToDatabase();

    const doc = await PostModel.create(data);
    const { _id, __v, createdAt, updatedAt, ...post } = doc.toObject();
    return post as Post;
  } catch (error) {
    if (isDbUnavailableError(error)) {
      throw new DatabaseUnavailableError("Cannot create posts while database is unavailable");
    }
    throw error;
  }
}

export async function updatePost(slug: string, data: Partial<Post>): Promise<Post | null> {
  if (!isDatabaseConfigured) {
    throw new DatabaseUnavailableError("Cannot update posts without a configured database");
  }

  try {
    await connectToDatabase();

    const doc = await PostModel.findOneAndUpdate({ slug }, data, { new: true })
      .select("-__v")
      .lean();
    if (!doc) return null;

    const { _id, createdAt, updatedAt, ...post } = doc;
    return post as Post;
  } catch (error) {
    if (isDbUnavailableError(error)) {
      throw new DatabaseUnavailableError("Cannot update posts while database is unavailable");
    }
    throw error;
  }
}

export async function deletePost(slug: string): Promise<boolean> {
  if (!isDatabaseConfigured) {
    throw new DatabaseUnavailableError("Cannot delete posts without a configured database");
  }

  try {
    await connectToDatabase();

    const result = await PostModel.deleteOne({ slug });
    return result.deletedCount === 1;
  } catch (error) {
    if (isDbUnavailableError(error)) {
      throw new DatabaseUnavailableError("Cannot delete posts while database is unavailable");
    }
    throw error;
  }
}
