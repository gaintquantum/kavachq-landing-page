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
  async headers() {
    return [{
      source: "/:path*",
      headers: [
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        { key: "X-Frame-Options", value: "SAMEORIGIN" },
      ],
    }];
  },
};

module.exports = nextConfig;
