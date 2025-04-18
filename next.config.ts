import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    domains: ["umbau-allrounder.ch"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "umbau-allrounder.ch",
        port: "",
        pathname: "/logos/**",
      },
    ],
  },
};

export default nextConfig;
