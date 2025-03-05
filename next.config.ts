import type { NextConfig } from "next";

//https://nextjs.org/docs/pages/api-reference/components/image#remotepatterns
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
      },
    ],
  },
};

export default nextConfig;
