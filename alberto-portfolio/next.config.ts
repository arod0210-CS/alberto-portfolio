import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isGitHubPages ? "/alberto-portfolio" : "",
  assetPrefix: isGitHubPages ? "/alberto-portfolio/" : "",
};

export default nextConfig;
