import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Contact the KAVACHQ by GAINT team in Hyderabad about cryptographic discovery, quantum risk and planning your post-quantum cryptography migration.",
  path: "/contact",
});

export default function ContactLayout({ children }) {
  return children;
}
