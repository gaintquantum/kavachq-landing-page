import "./globals.css";

export const metadata = {
  title: "KAVACH-Q",
  description: "Quantum Safe Security Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}