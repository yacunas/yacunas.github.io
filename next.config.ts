import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export for GitHub Pages (username.github.io)
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
