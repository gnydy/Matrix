import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "SuiteDesk Hotel PMS Front | Hotel & Travel Template",
  description: "Hotel property management frontend with bookings, availability, and guest operations.",
  keywords: ["hotel template", "travel booking", "Next.js", "Tailwind", "booking system", "guest portal"],
  openGraph: { title: "SuiteDesk Hotel PMS Front", description: "Hotel property management frontend with bookings, availability, and guest operations.", type: "website" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
