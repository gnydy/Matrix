import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "RailVoyage Packages | Hotel & Travel Template",
  description: "Rail vacation booking interface with routes, cabins, schedules, and trip planner.",
  keywords: ["hotel template", "travel booking", "Next.js", "Tailwind", "booking system", "guest portal"],
  openGraph: { title: "RailVoyage Packages", description: "Rail vacation booking interface with routes, cabins, schedules, and trip planner.", type: "website" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
