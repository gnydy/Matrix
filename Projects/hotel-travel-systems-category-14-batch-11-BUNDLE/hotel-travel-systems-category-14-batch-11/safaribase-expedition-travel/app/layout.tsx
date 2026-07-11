import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "SafariBase Expedition Travel | Hotel & Travel Template",
  description: "Safari and expedition travel platform for camps, guides, and luxury trips.",
  keywords: ["hotel template", "travel booking", "Next.js", "Tailwind", "booking system", "guest portal"],
  openGraph: { title: "SafariBase Expedition Travel", description: "Safari and expedition travel platform for camps, guides, and luxury trips.", type: "website" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
