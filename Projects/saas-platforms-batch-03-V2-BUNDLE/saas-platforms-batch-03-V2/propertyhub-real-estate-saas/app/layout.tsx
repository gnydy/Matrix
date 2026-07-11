import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PropertyHub Real Estate SaaS | SaaS Platform Template",
  description: "A real estate operating platform built around inventory, viewings, and deal movement.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
