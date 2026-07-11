import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FormGrid No-Code Builder | SaaS Platform Template",
  description: "A no-code builder that turns intake forms into business workflows.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
