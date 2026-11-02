import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import SiteChrome from "@/components/layout/SiteChrome";
import MotionProvider from "@/components/layout/MotionProvider";

// Self-hosted heading font (replaces the render-blocking Google Fonts @import).
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], display: "swap", variable: "--font-space-grotesk" });
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
    <html lang="en" data-theme="light" className={spaceGrotesk.variable}>
      <body>
        <MotionProvider>
          {children}
          <SiteChrome />
        </MotionProvider>
      </body>
    </html>
  );
}
