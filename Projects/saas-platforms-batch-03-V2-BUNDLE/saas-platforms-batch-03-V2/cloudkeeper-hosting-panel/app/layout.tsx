import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CloudKeeper Hosting Panel | SaaS Platform Template",
  description: "A hosting panel that makes infrastructure feel visible, sellable, and controlled.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
