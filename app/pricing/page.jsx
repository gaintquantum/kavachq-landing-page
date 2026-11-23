import { notFound } from "next/navigation";

// Pricing is intentionally unpublished for now. The implementation remains in
// this directory so it can be reviewed and restored later without exposing a
// crawlable URL. To publish it, replace this file with the commented block below,
// then add /pricing back to the navigation, footer, sitemap and llms.txt.
//
// import { pageMetadata } from "@/lib/seo";
//
// export { default } from "./pricing";
//
// export const metadata = pageMetadata({
//   title: "PQC Assessment Pricing",
//   description:
//     "Indicative KAVACHQ pricing for post-quantum readiness assessment, cryptographic discovery and migration planning. Final scope is confirmed before contract.",
//   path: "/pricing",
// });

export const metadata = {
  title: "Pricing unavailable",
  robots: { index: false, follow: false },
};

export default function PricingPage() {
  notFound();
}
