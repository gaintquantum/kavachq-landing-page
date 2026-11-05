import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "FAQs",
  description:
    "Answers to common questions about KAVACHQ by GAINT, quantum risk and post-quantum cryptography (PQC) migration.",
  path: "/faqs",
});

export default function FaqsLayout({ children }) {
  return children;
}
