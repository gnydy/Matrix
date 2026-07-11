import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `${site.name} | ${site.domain}`,
  description: site.useCase,
  keywords: [site.domain, "booking system", "appointment booking", "Next.js", "Tailwind CSS", "MatrixAll template"],
  openGraph: {
    title: `${site.name} | ${site.domain}`,
    description: site.positioning,
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
