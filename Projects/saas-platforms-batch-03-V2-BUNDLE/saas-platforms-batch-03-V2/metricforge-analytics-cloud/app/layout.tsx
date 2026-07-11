import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MetricForge Analytics Cloud | SaaS Platform Template",
  description: "Live intelligence boards for teams that need clean numbers before decisions.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
