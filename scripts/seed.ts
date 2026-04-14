/**
 * Seed script — migrates mock posts to MongoDB.
 * Run: npx tsx scripts/seed.ts
 *
 * Requires .env.local to be present with MONGODB_URI and MONGODB_DB.
 */
import { config } from "dotenv";
import { resolve } from "path";

config({ path: resolve(process.cwd(), ".env.local") });

import mongoose from "mongoose";
import { mockPosts } from "../lib/blog/mock-posts";
import { PostModel } from "../lib/blog/models/Post";

const MONGODB_URI = process.env.MONGODB_URI!;
const MONGODB_DB = process.env.MONGODB_DB ?? "portfolio-blog";

async function seed() {
  if (!MONGODB_URI) {
    console.error("❌ MONGODB_URI is not set. Copy .env.local.example to .env.local first.");
    process.exit(1);
  }

  console.log(`🔌 Connecting to ${MONGODB_URI}/${MONGODB_DB}...`);
  await mongoose.connect(`${MONGODB_URI}/${MONGODB_DB}`);
  console.log("✅ Connected");

  const ops = mockPosts.map((post) => ({
    updateOne: {
      filter: { slug: post.slug },
      update: { $setOnInsert: post },
      upsert: true,
    },
  }));

  const result = await PostModel.bulkWrite(ops);
  console.log(`✅ Seed complete — ${result.upsertedCount} inserted, ${result.matchedCount} already existed`);

  await mongoose.disconnect();
  console.log("👋 Disconnected");
}

seed().catch((err) => {
  console.error("❌ Seed failed:", err);
  process.exit(1);
});
