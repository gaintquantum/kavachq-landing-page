/** @type {import('next').NextConfig} */
const nextConfig = {
  // Keep the development cache separate from production builds so running
  // `next build` cannot corrupt an active `next dev` server.
  distDir: process.env.NODE_ENV === "development" ? ".next-dev" : ".next",

  // Send www to the main domain so search engines see one copy of the site.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.kavachq.com" }],
        destination: "https://kavachq.com/:path*",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
