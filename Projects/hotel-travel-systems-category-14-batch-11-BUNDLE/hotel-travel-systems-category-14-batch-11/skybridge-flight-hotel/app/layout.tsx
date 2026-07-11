import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "SkyBridge Flight & Hotel | Hotel & Travel Template",
  description: "Flight-and-hotel package booking frontend for bundled travel offers.",
  keywords: ["hotel template", "travel booking", "Next.js", "Tailwind", "booking system", "guest portal"],
  openGraph: { title: "SkyBridge Flight & Hotel", description: "Flight-and-hotel package booking frontend for bundled travel offers.", type: "website" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
