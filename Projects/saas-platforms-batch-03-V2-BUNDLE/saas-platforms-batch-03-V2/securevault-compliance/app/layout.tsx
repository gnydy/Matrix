import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SecureVault Compliance Cloud | SaaS Platform Template",
  description: "Compliance management with evidence trails and risk clarity from day one.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
