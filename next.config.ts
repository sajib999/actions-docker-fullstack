import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable standalone output for Docker
  output: "standalone",

  // Optimize for production
  swcMinify: true,

  // Enable experimental features if needed
  experimental: {
    // Add any experimental features here
  },

  // Environment variables that should be available on the client side
  env: {
    // Add your environment variables here
  },

  // Image optimization config (optional)
  images: {
    // Configure image domains if using next/image
    domains: [],
  },
};

export default nextConfig;
