import { notFound } from "next/navigation";

// Pricing page is hidden for now. To bring it back, restore the code below and delete
// this notFound page, then uncomment Pricing in components/layout/Navbar.jsx and
// app/sitemap.js, and add it back to public/llms.txt.
//
// import { pageMetadata } from "@/lib/seo";
//
// export { default } from "./pricing";
//
// export const metadata = pageMetadata({
//   title: "Pricing",
//   description:
//     "Plans, professional services and compliance add-ons for KAVACHQ by GAINT, the quantum-safe cybersecurity and PQC migration platform.",
//   path: "/pricing",
// });

export default function PricingPage() {
  notFound();
}
