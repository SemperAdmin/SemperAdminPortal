/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/SemperAdminPortal",
  assetPrefix: "/SemperAdminPortal",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;
