import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  // Optimize for modern browsers
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Optimize images (for future use)
  images: {
    unoptimized: true, // Required for static export
  },

  // Modern JavaScript target (reduces polyfills)
  experimental: {
    // Use modern output for smaller bundles
    optimizePackageImports: ["@tabler/icons-react", "motion"],
  },
};

export default nextConfig;
