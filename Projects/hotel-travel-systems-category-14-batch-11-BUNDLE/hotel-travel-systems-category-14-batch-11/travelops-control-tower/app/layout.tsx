import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "TravelOps Control Tower | Hotel & Travel Template",
  description: "Travel operations dashboard for agencies managing bookings, guests, vendors, and issues.",
  keywords: ["hotel template", "travel booking", "Next.js", "Tailwind", "booking system", "guest portal"],
  openGraph: { title: "TravelOps Control Tower", description: "Travel operations dashboard for agencies managing bookings, guests, vendors, and issues.", type: "website" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
