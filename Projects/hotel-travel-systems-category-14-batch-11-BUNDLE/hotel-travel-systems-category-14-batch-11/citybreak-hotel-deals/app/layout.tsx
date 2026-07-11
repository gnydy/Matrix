import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "CityBreak Hotel Deals | Hotel & Travel Template",
  description: "Urban hotel deals and weekend escape booking frontend.",
  keywords: ["hotel template", "travel booking", "Next.js", "Tailwind", "booking system", "guest portal"],
  openGraph: { title: "CityBreak Hotel Deals", description: "Urban hotel deals and weekend escape booking frontend.", type: "website" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
