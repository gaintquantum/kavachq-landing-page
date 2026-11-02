import { Michroma } from "next/font/google";
import "./globals.css";
import SiteChrome from "@/components/layout/SiteChrome";
import MotionProvider from "@/components/layout/MotionProvider";

// Self-hosted heading font (replaces the render-blocking Google Fonts @import).
const michroma = Michroma({ weight: "400", subsets: ["latin"], display: "swap", variable: "--font-michroma" });
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
    <html lang="en" data-theme="light" className={michroma.variable}>
      <body>
        <MotionProvider>
          {children}
          <SiteChrome />
        </MotionProvider>
      </body>
    </html>
  );
}
