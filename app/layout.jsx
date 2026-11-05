import { DM_Mono, DM_Sans, Open_Sans, Space_Grotesk, Syne } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import SiteChrome from "@/components/layout/SiteChrome";
import MotionProvider from "@/components/layout/MotionProvider";
import { brandFull, defaultDescription, defaultTitle, ogImage, siteUrl } from "@/lib/seo";

// NOTE: 5 font families is heavy. If Open Sans / Space Grotesk are not actually
// used in globals.css or components, delete them here and from className below.
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], display: "swap", variable: "--font-space-grotesk" });
const syne = Syne({ subsets: ["latin"], weight: "700", display: "swap", variable: "--font-syne" });
const dmSans = DM_Sans({ subsets: ["latin"], weight: "700", display: "swap", variable: "--font-dm-sans" });
const dmMono = DM_Mono({ subsets: ["latin"], weight: "500", display: "swap", variable: "--font-dm-mono" });
const openSans = Open_Sans({ subsets: ["latin"], weight: "400", display: "swap", variable: "--font-open-sans" });

const companyUrl = "https://gaintclout.com";

// Primary brand without hyphen (matches how people type it). "by GAINT" keeps it
// distinguishable from the unrelated KavachQ (kavachq.in, V Innovation Labs).
const brand = "KAVACHQ";
const company = "GAINT Clout Technologies Private Limited";

// Google ignores the keywords meta tag; Bing gives it little weight. Kept short and
// relevant — the same terms are also placed in description, JSON-LD and page content,
// which is where they actually count.
const keywords = [
  // Brand
  "KAVACHQ",
  "KAVACHQ by GAINT",
  "KAVACH-Q",
  "KAVACH Q",
  "KAVACHQ GAINT",
  "GAINT Quantum",
  "GAINT Clout Technologies",
  // Location
  "post-quantum cryptography Hyderabad",
  "PQC Hyderabad",
  "quantum-safe cybersecurity Hyderabad",
  "quantum security company Hyderabad",
  "cybersecurity startup Hyderabad",
  "post-quantum cryptography India",
  "PQC migration India",
  // Product / category
  "quantum-safe cybersecurity",
  "post-quantum cryptography",
  "PQC migration",
  "quantum risk assessment",
  "cryptographic discovery",
  "cryptographic inventory",
  "CBOM",
  "crypto-agility",
  "harvest now decrypt later",
  // Standards
  "NIST PQC",
  "ML-KEM",
  "ML-DSA",
  "SLH-DSA",
];

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0D2257",
};

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s | ${brand}`,
  },
  description: defaultDescription,
  keywords,
  applicationName: brandFull,
  authors: [{ name: company, url: companyUrl }],
  creator: company,
  publisher: company,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: brandFull,
    title: defaultTitle,
    description:
      "Discover cryptographic risk, score quantum exposure, and plan post-quantum cryptography migration with KAVACHQ by GAINT.",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: "Cryptographic discovery, quantum risk scoring, and PQC migration planning — KAVACHQ by GAINT.",
    images: [ogImage.url],
    // site: "@your_handle",   // add when an official X account exists
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/kavachq-logo-256.png", type: "image/png", sizes: "256x256" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  // Uncomment with the real tokens from Search Console / Bing Webmaster Tools.
  // verification: {
  //   google: "REPLACE_WITH_GOOGLE_SEARCH_CONSOLE_TOKEN",
  //   other: { "msvalidate.01": "REPLACE_WITH_BING_TOKEN" },
  // },
  other: {
    "geo.region": "IN-TG",
    "geo.placename": "Hyderabad",
  },
  category: "Cybersecurity",
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${companyUrl}/#organization`,
      name: company,
      legalName: company,
      url: companyUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/kavachq-logo-256.png`,
        width: 256,
        height: 256,
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Knowledge City, Raidurg",
        addressLocality: "Hyderabad",
        addressRegion: "Telangana",
        addressCountry: "IN",
      },
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: "info@gaintclout.com",
        areaServed: "IN",
        availableLanguage: ["en"],
      },
      alternateName: ["GAINT Quantum", "GAINT Clout"],
      areaServed: [
        { "@type": "City", name: "Hyderabad" },
        { "@type": "State", name: "Telangana" },
        { "@type": "Country", name: "India" },
      ],
      knowsAbout: [
        "Post-quantum cryptography",
        "PQC migration",
        "Quantum-safe cybersecurity",
        "Quantum risk assessment",
        "Cryptographic inventory",
        "Cryptographic Bill of Materials (CBOM)",
        "Crypto-agility",
        "NIST FIPS 203 ML-KEM",
        "NIST FIPS 204 ML-DSA",
        "NIST FIPS 205 SLH-DSA",
      ],
      // Fill with real profiles only — these power the knowledge panel.
      sameAs: [
        // "https://www.linkedin.com/company/REPLACE",
        // "https://github.com/REPLACE",
      ],
      brand: { "@id": `${siteUrl}/#brand` },
    },
    {
      "@type": "Brand",
      "@id": `${siteUrl}/#brand`,
      name: brand,
      alternateName: ["KAVACH-Q", "KAVACH Q", brandFull],
      logo: `${siteUrl}/kavachq-logo-256.png`,
      url: siteUrl,
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: brandFull,
      alternateName: [brand, "KAVACH-Q", "KAVACH Q"],
      url: siteUrl,
      description: "Quantum-safe cybersecurity and post-quantum cryptography migration platform by GAINT Clout Technologies.",
      publisher: { "@id": `${companyUrl}/#organization` },
      inLanguage: "en-IN",
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${siteUrl}/#software`,
      name: brand,
      alternateName: [brandFull, "KAVACH-Q", "KAVACH Q"],
      applicationCategory: "SecurityApplication",
      operatingSystem: "Web",
      url: siteUrl,
      description:
        "Quantum-safe cybersecurity platform for cryptographic discovery, quantum risk scoring, post-quantum cryptography migration planning and compliance reporting.",
      publisher: { "@id": `${companyUrl}/#organization` },
      areaServed: { "@type": "Country", name: "India" },
      keywords: keywords.join(", "),
      // Rich results need BOTH offers and aggregateRating/review.
      // Add offers only with a real price; add aggregateRating only from genuine reviews.
      // offers: { "@type": "Offer", price: "0", priceCurrency: "INR", description: "Free assessment" },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en-IN"
      data-theme="light"
      className={`${spaceGrotesk.variable} ${syne.variable} ${dmSans.variable} ${dmMono.variable} ${openSans.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
        <Script src="https://www.googletagmanager.com/gtm.js?id=GTM-KBG3F8HR" strategy="afterInteractive" />
        <Script id="gtm-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());`}
        </Script>
        <MotionProvider>
          {children}
          <SiteChrome />
        </MotionProvider>
      </body>
    </html>
  );
}