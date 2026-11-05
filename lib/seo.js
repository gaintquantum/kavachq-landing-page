// Shared SEO values used by the root layout and per-page metadata.
export const siteUrl = "https://kavachq.com";
export const brandFull = "KAVACHQ by GAINT";
export const defaultTitle = "KAVACHQ by GAINT | Quantum-Safe & PQC Migration Platform";
export const defaultDescription =
  "KAVACHQ by GAINT, Hyderabad: quantum-safe cybersecurity platform for cryptographic discovery, quantum risk scoring, PQC migration and compliance reporting.";

// Place a 1200x630 image at /public/og-kavachq.png
export const ogImage = {
  url: "/og-kavachq.png",
  width: 1200,
  height: 630,
  alt: "KAVACHQ by GAINT Clout Technologies — quantum-safe cryptography and PQC migration platform",
};

// Next.js replaces openGraph/twitter objects instead of merging them, so each page
// sets the full set. The layout's title template adds the brand to `title`.
export function pageMetadata({ title, description, path }) {
  const fullTitle = `${title} | KAVACHQ`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url: path,
      siteName: brandFull,
      title: fullTitle,
      description,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage.url],
    },
  };
}
