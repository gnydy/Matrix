import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "BusinessStay Corporate Travel | Hotel & Travel Template",
  description: "Corporate travel and hotel booking UI for companies and travel managers.",
  keywords: ["hotel template", "travel booking", "Next.js", "Tailwind", "booking system", "guest portal"],
  openGraph: { title: "BusinessStay Corporate Travel", description: "Corporate travel and hotel booking UI for companies and travel managers.", type: "website" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
