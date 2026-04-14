import type { NextConfig } from "next";

const isVercel = process.env.VERCEL === "1";

const nextConfig: NextConfig = {
  // Use default output directory on Vercel; keep local workaround for WSL/NTFS.
  distDir: isVercel ? ".next" : "next-build",
};

export default nextConfig;
