import { NextResponse } from "next/server";
import { getPostBySlug, updatePost, deletePost } from "@/lib/blog/posts";
import type { Post } from "@/lib/blog/types";

interface RouteParams {
  params: Promise<{ slug: string }>;
}

export async function GET(_request: Request, { params }: RouteParams) {
  try {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    return NextResponse.json(post);
  } catch (error) {
    console.error("[GET /api/blog/:slug]", error);
    return NextResponse.json({ error: "Failed to fetch post" }, { status: 500 });
  }
}

export async function PUT(request: Request, { params }: RouteParams) {
  try {
    const { slug } = await params;
    const body = (await request.json()) as Partial<Post>;

    const updated = await updatePost(slug, body);

    if (!updated) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    return NextResponse.json(updated);
  } catch (error) {
    console.error("[PUT /api/blog/:slug]", error);
    return NextResponse.json({ error: "Failed to update post" }, { status: 500 });
  }
}

export async function DELETE(_request: Request, { params }: RouteParams) {
  try {
    const { slug } = await params;
    const deleted = await deletePost(slug);

    if (!deleted) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    return NextResponse.json({ message: `Post '${slug}' deleted successfully` });
  } catch (error) {
    console.error("[DELETE /api/blog/:slug]", error);
    return NextResponse.json({ error: "Failed to delete post" }, { status: 500 });
  }
}
