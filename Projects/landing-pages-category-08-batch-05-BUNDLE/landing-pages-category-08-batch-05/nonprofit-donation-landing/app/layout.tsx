import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `${site.name} | ${site.industry} Landing Page Template`,
  description: site.sub,
  keywords: [site.industry, "Landing Page", "Next.js", "Tailwind CSS", "Template", "Portfolio"],
  openGraph: {
    title: site.name,
    description: site.sub,
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
