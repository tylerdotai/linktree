import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/linktree",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
