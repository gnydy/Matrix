import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LearnLoop LMS Cloud | SaaS Platform Template",
  description: "A learning SaaS that makes progress, content, and revenue visible in one place.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
