// app/sitemap.js  ->  served at https://kavachq.com/sitemap.xml
const siteUrl = "https://kavachq.com";

// List ONLY pages that actually exist. A sitemap pointing at 404s hurts trust.
// Add each new public page here (about, guides, tools...).
const routes = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  // { path: "/pricing", priority: 0.9, changeFrequency: "monthly" },
  { path: "/demo", priority: 0.8, changeFrequency: "monthly" },
  { path: "/faqs", priority: 0.8, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.7, changeFrequency: "monthly" },
];

export default function sitemap() {
  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${siteUrl}${path}`,
    changeFrequency,
    priority,
  }));
}