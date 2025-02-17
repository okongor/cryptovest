/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: "export", // Ensures static export works correctly
    experimental: {
      appDir: true, // Ensure it's enabled if using App Router
    },
  };
  
  module.exports = nextConfig;
  