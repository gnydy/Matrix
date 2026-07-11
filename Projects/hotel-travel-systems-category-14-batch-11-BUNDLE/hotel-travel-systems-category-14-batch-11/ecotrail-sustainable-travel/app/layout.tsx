import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "EcoTrail Sustainable Travel | Hotel & Travel Template",
  description: "Sustainable travel platform showing eco impact, packages, and responsible trips.",
  keywords: ["hotel template", "travel booking", "Next.js", "Tailwind", "booking system", "guest portal"],
  openGraph: { title: "EcoTrail Sustainable Travel", description: "Sustainable travel platform showing eco impact, packages, and responsible trips.", type: "website" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
