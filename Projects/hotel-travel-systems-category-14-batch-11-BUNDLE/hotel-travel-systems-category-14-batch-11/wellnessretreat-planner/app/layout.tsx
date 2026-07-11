import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "WellnessRetreat Planner | Hotel & Travel Template",
  description: "Wellness retreat booking system for yoga, spa, detox, and health programs.",
  keywords: ["hotel template", "travel booking", "Next.js", "Tailwind", "booking system", "guest portal"],
  openGraph: { title: "WellnessRetreat Planner", description: "Wellness retreat booking system for yoga, spa, detox, and health programs.", type: "website" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
