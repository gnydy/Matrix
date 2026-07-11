import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "MedinaHajj Pilgrimage Planner | Hotel & Travel Template",
  description: "Pilgrimage travel planner for groups, hotels, transfers, and guided schedules.",
  keywords: ["hotel template", "travel booking", "Next.js", "Tailwind", "booking system", "guest portal"],
  openGraph: { title: "MedinaHajj Pilgrimage Planner", description: "Pilgrimage travel planner for groups, hotels, transfers, and guided schedules.", type: "website" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
