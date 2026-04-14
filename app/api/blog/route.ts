import { NextResponse } from "next/server";
import { getAllPosts, createPost } from "@/lib/blog/posts";
import type { Post } from "@/lib/blog/types";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const tag = searchParams.get("tag") ?? undefined;
    const limit = searchParams.get("limit") ? Number(searchParams.get("limit")) : undefined;

    const posts = await getAllPosts({ tag, limit });
    return NextResponse.json(posts);
  } catch (error) {
    console.error("[GET /api/blog]", error);
    return NextResponse.json({ error: "Failed to fetch posts" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Post;

    if (!body.slug || !body.title || !body.content) {
      return NextResponse.json(
        { error: "Missing required fields: slug, title, content" },
        { status: 400 }
      );
    }

    const post = await createPost(body);
    return NextResponse.json(post, { status: 201 });
  } catch (error: unknown) {
    if ((error as { code?: number }).code === 11000) {
      return NextResponse.json({ error: "A post with this slug already exists" }, { status: 409 });
    }
    console.error("[POST /api/blog]", error);
    return NextResponse.json({ error: "Failed to create post" }, { status: 500 });
  }
}
