import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MarketPilot Campaign OS | SaaS Platform Template",
  description: "A campaign operating system for teams that ship marketing with discipline.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
