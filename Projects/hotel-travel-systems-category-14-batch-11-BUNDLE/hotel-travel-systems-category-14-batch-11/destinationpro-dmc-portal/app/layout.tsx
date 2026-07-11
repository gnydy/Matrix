import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "DestinationPro DMC Portal | Hotel & Travel Template",
  description: "Destination management portal for agencies handling trips, vendors, and itineraries.",
  keywords: ["hotel template", "travel booking", "Next.js", "Tailwind", "booking system", "guest portal"],
  openGraph: { title: "DestinationPro DMC Portal", description: "Destination management portal for agencies handling trips, vendors, and itineraries.", type: "website" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
