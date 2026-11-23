import { resources, solutions } from "@/lib/publicContent";

const siteUrl = "https://kavachq.com";
const core = ["", "/solutions", "/resources", "/compliance", "/security-and-verification", "/demo", "/faqs", "/contact"];

export default function sitemap() {
  const paths = [
    ...core,
    ...Object.keys(solutions).map((slug) => `/solutions/${slug}`),
    ...Object.keys(resources).map((slug) => `/resources/${slug}`),
  ];
  return paths.map((path) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.split("/").filter(Boolean).length === 1 ? 0.8 : 0.7,
  }));
}
