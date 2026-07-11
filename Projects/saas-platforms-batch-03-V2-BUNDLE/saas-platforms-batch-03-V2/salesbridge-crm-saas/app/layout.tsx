import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SalesBridge CRM SaaS | SaaS Platform Template",
  description: "A sales command room that makes every deal, note, and next step visible.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
