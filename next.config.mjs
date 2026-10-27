import path from "node:path";

/** @type {import('next').NextConfig} */
export default {
  images: { formats: ["image/avif", "image/webp"] },
  webpack(config) {
    config.resolve.alias["@"] = path.resolve(process.cwd());
    return config;
  },
};
