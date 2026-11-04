import { DM_Mono, DM_Sans, Open_Sans, Space_Grotesk, Syne } from "next/font/google";
import "./globals.css";
import SiteChrome from "@/components/layout/SiteChrome";
import MotionProvider from "@/components/layout/MotionProvider";

// Self-hosted heading font (replaces the render-blocking Google Fonts @import).
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], display: "swap", variable: "--font-space-grotesk" });
// Navbar fonts.
const syne = Syne({ subsets: ["latin"], weight: "700", display: "swap", variable: "--font-syne" });
const dmSans = DM_Sans({ subsets: ["latin"], weight: "700", display: "swap", variable: "--font-dm-sans" });
const dmMono = DM_Mono({ subsets: ["latin"], weight: "500", display: "swap", variable: "--font-dm-mono" });
// CTA stat values.
const openSans = Open_Sans({ subsets: ["latin"], weight: "400", display: "swap", variable: "--font-open-sans" });
export const metadata = {
  title: "KAVACH-Q",
  description: "Quantum Safe Security Platform",
  icons: {
    icon: "/kavachq-logo-256.png",
    shortcut: "/kavachq-logo-256.png",
    apple: "/kavachq-logo-256.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" className={`${spaceGrotesk.variable} ${syne.variable} ${dmSans.variable} ${dmMono.variable} ${openSans.variable}`}>
      <body>
        <MotionProvider>
          {children}
          <SiteChrome />
        </MotionProvider>
      </body>
    </html>
  );
}
