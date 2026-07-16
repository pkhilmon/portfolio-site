import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true // Required — image optimization needs a server
  },
  compiler: {
    styledComponents: true // Sanity Studio's UI runs on styled-components
  }
};

export default nextConfig;
