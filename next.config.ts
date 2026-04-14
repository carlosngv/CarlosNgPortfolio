import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Work around an NTFS/WSL name-collision issue with the default .next folder.
  distDir: "next-build",
};

export default nextConfig;
