import type { NextConfig } from "next";

const githubPages = process.env.GITHUB_PAGES === "true";
const githubBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: githubPages ? "export" : undefined,
  basePath: githubPages ? githubBasePath : undefined,
  assetPrefix: githubPages ? githubBasePath : undefined,
  trailingSlash: githubPages,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
