import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    globalNotFound: true,
  },
  //encrypted-tbn0.gstatic.com
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "t4.ftcdn.net",
      },
    ],
  },
};

export default nextConfig;
