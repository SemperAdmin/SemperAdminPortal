import type { NextConfig } from "next";

const basePathEnv = process.env.NEXT_PUBLIC_BASE_PATH;
const basePath = basePathEnv && basePathEnv.length > 0 ? basePathEnv : undefined;

const nextConfig: NextConfig = {
  basePath,
  assetPrefix: basePath,
  output: "export",
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
