import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  // add github image domains
  images: {
    domains: ["raw.githubusercontent.com", "avatars.githubusercontent.com"],
  },
};

export default nextConfig;
