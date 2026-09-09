/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep the development cache separate from production builds so running
  // `next build` cannot corrupt an active `next dev` server.
  distDir: process.env.NODE_ENV === "development" ? ".next-dev" : ".next",
};

module.exports = nextConfig;
