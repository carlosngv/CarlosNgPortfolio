import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DB = process.env.MONGODB_DB ?? "portfolio-blog";

export const isDatabaseConfigured = Boolean(MONGODB_URI);

// Reuse connection across hot reloads in development
declare global {
  // eslint-disable-next-line no-var
  var _mongoose: { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null };
}

const cached = global._mongoose ?? { conn: null, promise: null };
global._mongoose = cached;

export async function connectToDatabase(): Promise<typeof mongoose> {
  if (!MONGODB_URI) {
    throw new Error("Database is not configured. Please define MONGODB_URI in .env.local");
  }

  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(`${MONGODB_URI}/${MONGODB_DB}`);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
