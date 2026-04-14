import { Schema, model, models, Document } from "mongoose";
import type { Post } from "../types";

export interface PostDocument extends Omit<Post, "slug">, Document {
  slug: string;
}

const PostSchema = new Schema<PostDocument>(
  {
    slug: { type: String, required: true, unique: true, index: true },
    title: { type: String, required: true },
    titleEs: { type: String, required: true },
    date: { type: String, required: true },
    excerpt: { type: String, required: true },
    excerptEs: { type: String, required: true },
    tags: { type: [String], default: [] },
    readingTime: { type: Number, required: true },
    coverImage: { type: String },
    content: { type: String, required: true },
    contentEs: { type: String, required: true },
  },
  { timestamps: true }
);

// Prevent model recompilation in dev (Next.js hot reload)
export const PostModel = models.Post ?? model<PostDocument>("Post", PostSchema);
