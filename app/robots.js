// app/robots.js  ->  served at https://kavachq.com/robots.txt
const siteUrl = "https://kavachq.com";

// AI search & assistant crawlers explicitly allowed.
const aiBots = [
  "GPTBot",            // OpenAI (training)
  "OAI-SearchBot",     // ChatGPT search
  "ChatGPT-User",      // ChatGPT browsing on user request
  "ClaudeBot",         // Anthropic
  "Claude-User",
  "Claude-SearchBot",
  "PerplexityBot",     // Perplexity
  "Perplexity-User",
  "Google-Extended",   // Gemini / Google AI
  "Applebot-Extended", // Apple Intelligence
  "Bingbot",           // Bing (feeds Copilot and ChatGPT search)
  "CCBot",             // Common Crawl (used by many models)
];

// Keep private/app areas out of every index. Edit to match your routes.
const disallow = ["/api/", "/qa-queue"];

export default function robots() {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow },
      ...aiBots.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow,
      })),
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}