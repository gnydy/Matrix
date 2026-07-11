import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "CoastalVilla Rental Portal | Hotel & Travel Template",
  description: "Vacation villa booking platform with availability, amenities, and owner dashboard.",
  keywords: ["hotel template", "travel booking", "Next.js", "Tailwind", "booking system", "guest portal"],
  openGraph: { title: "CoastalVilla Rental Portal", description: "Vacation villa booking platform with availability, amenities, and owner dashboard.", type: "website" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
