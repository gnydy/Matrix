import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ContentCraft AI Studio | SaaS Platform Template",
  description: "An AI writing studio where prompts, outputs, templates, and approvals live together.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
