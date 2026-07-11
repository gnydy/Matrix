import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DocSprint Knowledge Base | SaaS Platform Template",
  description: "Documentation designed like a product: fast search, clean structure, and feedback loops.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
