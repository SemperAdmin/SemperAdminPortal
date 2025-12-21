import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/SemperAdminPortal",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com",
        port: "",
        pathname: "/vi/**/**",
      },
    ],
  },
};

export default nextConfig;
