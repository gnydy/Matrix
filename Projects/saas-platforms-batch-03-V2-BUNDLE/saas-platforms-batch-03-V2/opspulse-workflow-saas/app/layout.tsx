import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OpsPulse Workflow OS | SaaS Platform Template",
  description: "A command center for turning manual operations into controlled automated flows.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
