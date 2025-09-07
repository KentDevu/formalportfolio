import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable experimental features for better performance
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },
  
  // Image optimization for better performance
  images: {
    formats: ['image/webp', 'image/avif'],
  },
};

export default nextConfig;
