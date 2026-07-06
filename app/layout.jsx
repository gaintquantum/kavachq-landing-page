import "./globals.css";
import Footer from "@/components/layout/Footer";

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
    <html lang="en">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
