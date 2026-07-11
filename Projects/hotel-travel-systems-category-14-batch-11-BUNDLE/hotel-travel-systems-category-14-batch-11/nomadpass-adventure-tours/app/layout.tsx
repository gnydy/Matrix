import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "NomadPass Adventure Tours | Hotel & Travel Template",
  description: "Adventure travel booking site for expeditions, hiking, diving, and guided tours.",
  keywords: ["hotel template", "travel booking", "Next.js", "Tailwind", "booking system", "guest portal"],
  openGraph: { title: "NomadPass Adventure Tours", description: "Adventure travel booking site for expeditions, hiking, diving, and guided tours.", type: "website" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
