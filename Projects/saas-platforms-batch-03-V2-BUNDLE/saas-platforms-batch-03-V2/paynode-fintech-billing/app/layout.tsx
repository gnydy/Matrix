import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PayNode Fintech Console | SaaS Platform Template",
  description: "A fintech console for payment teams that need speed with control.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
