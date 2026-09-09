import "./globals.css";
import Footer from "@/components/layout/Footer";
import CursorField from "@/components/layout/CursorField";
import FaqFloatingButton from "@/components/ui/FaqFloatingButton";

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
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{document.documentElement.dataset.theme=localStorage.getItem("kavachq-theme")==="light"?"light":"blue"}catch(e){document.documentElement.dataset.theme="blue"}`,
          }}
        />
      </head>
      <body>
        <CursorField />
        {children}
        <FaqFloatingButton />
        <Footer />
      </body>
    </html>
  );
}
