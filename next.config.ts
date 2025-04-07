import type { NextConfig } from "next";

module.exports = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
        pathname: '/images/**',
      }
    ],
  },
}
