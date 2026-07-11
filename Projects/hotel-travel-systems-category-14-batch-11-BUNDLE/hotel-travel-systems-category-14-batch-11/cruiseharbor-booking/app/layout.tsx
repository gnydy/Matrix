import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "CruiseHarbor Booking | Hotel & Travel Template",
  description: "Cruise package booking platform with cabins, routes, decks, and guest portal.",
  keywords: ["hotel template", "travel booking", "Next.js", "Tailwind", "booking system", "guest portal"],
  openGraph: { title: "CruiseHarbor Booking", description: "Cruise package booking platform with cabins, routes, decks, and guest portal.", type: "website" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
