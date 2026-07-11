import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "TripCraft Travel Agency | Hotel & Travel Template",
  description: "Modern travel agency system for selling curated trips, tours, and itineraries.",
  keywords: ["hotel template", "travel booking", "Next.js", "Tailwind", "booking system", "guest portal"],
  openGraph: { title: "TripCraft Travel Agency", description: "Modern travel agency system for selling curated trips, tours, and itineraries.", type: "website" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
