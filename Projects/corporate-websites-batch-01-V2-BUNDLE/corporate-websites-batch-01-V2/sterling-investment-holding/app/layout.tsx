import type { Metadata } from "next";
import "./globals.css";
import { site } from "../data/site";

export const metadata: Metadata = { title: `${site.name} | Corporate Website Template`, description: site.idea };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
