import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
    domains: ["res.cloudinary.com/dzv6ccnjm"], // Opsional
  },
};

export default nextConfig;
