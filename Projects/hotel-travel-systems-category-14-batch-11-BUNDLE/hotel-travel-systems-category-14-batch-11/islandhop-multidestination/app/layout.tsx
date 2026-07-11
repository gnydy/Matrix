import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "IslandHop MultiDestination | Hotel & Travel Template",
  description: "Multi-destination island hopping planner and booking frontend.",
  keywords: ["hotel template", "travel booking", "Next.js", "Tailwind", "booking system", "guest portal"],
  openGraph: { title: "IslandHop MultiDestination", description: "Multi-destination island hopping planner and booking frontend.", type: "website" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
