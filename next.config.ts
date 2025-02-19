import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
    loader: "cloudinary",
    path: "https://res.cloudinary.com/dzv6ccnjm/image/upload",
    domains: ["res.cloudinary.com"], // Opsional
  },
};

export default nextConfig;
