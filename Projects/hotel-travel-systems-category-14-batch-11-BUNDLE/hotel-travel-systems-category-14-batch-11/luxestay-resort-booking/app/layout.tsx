import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "LuxeStay Resort Booking | Hotel & Travel Template",
  description: "Luxury resort booking platform for premium hotels and beachfront resorts.",
  keywords: ["hotel template", "travel booking", "Next.js", "Tailwind", "booking system", "guest portal"],
  openGraph: { title: "LuxeStay Resort Booking", description: "Luxury resort booking platform for premium hotels and beachfront resorts.", type: "website" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
