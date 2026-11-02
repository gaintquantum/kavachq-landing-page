import "./globals.css";
import SiteChrome from "@/components/layout/SiteChrome";
import MotionProvider from "@/components/layout/MotionProvider";

export const metadata = {
  title: "KAVACH-Q",
  description: "Quantum Safe Security Platform",
  icons: {
    icon: "/KAVACH-Q%20logo%20with%20TM.png",
    shortcut: "/KAVACH-Q%20logo%20with%20TM.png",
    apple: "/KAVACH-Q%20logo%20with%20TM.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body>
        <MotionProvider>
          {children}
          <SiteChrome />
        </MotionProvider>
      </body>
    </html>
  );
}
