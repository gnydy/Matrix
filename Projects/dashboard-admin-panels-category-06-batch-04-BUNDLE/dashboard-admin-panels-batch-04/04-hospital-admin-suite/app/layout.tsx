import type { Metadata } from "next";
import "./globals.css";
import { dashboard } from "@/data/dashboard";

export const metadata: Metadata = {
  title: `${dashboard.name} | Dashboard & Admin Panel Template`,
  description: dashboard.desc,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
