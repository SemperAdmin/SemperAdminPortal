import fs from "node:fs";
import path from "node:path";

// Fail fast with a clear message when content:sync has not been run.
// Static imports of src/generated/*.json will crash with an opaque
// "Cannot find module" error if these files are absent.
const GENERATED_DIR = path.join(process.cwd(), "src", "generated");
const REQUIRED_GENERATED = ["citations.json"];
for (const file of REQUIRED_GENERATED) {
  if (!fs.existsSync(path.join(GENERATED_DIR, file))) {
    throw new Error(
      `[semper-admin] Missing src/generated/${file}.\n` +
      `Run "npm run content:sync" before starting the dev server or building.\n` +
      `(This file is gitignored and must be generated locally.)`
    );
  }
}

/** @type {import('next').NextConfig} */
const BASE_PATH = "/SemperAdminPortal";

const nextConfig = {
  output: "export",
  basePath: BASE_PATH,
  assetPrefix: BASE_PATH,
  env: {
    NEXT_PUBLIC_BASE_PATH: BASE_PATH,
  },
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;
