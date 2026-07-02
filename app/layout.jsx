import "./globals.css";

export const metadata = {
  title: "KAVACH-Q",
  description: "Quantum Safe Security Platform",
  icons: {
    icon: "/kavachLogo.png",
    shortcut: "/kavachLogo.png",
    apple: "/kavachLogo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
