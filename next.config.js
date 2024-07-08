/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/next-pwa-page",
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development",
  },
};

const withPWA = require("next-pwa")({
  dest: "public",
});

module.exports = withPWA(nextConfig);
