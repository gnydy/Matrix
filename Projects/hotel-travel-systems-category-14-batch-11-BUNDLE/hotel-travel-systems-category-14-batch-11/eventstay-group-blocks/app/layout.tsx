import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "EventStay Group Blocks | Hotel & Travel Template",
  description: "Hotel room block and event stay management frontend.",
  keywords: ["hotel template", "travel booking", "Next.js", "Tailwind", "booking system", "guest portal"],
  openGraph: { title: "EventStay Group Blocks", description: "Hotel room block and event stay management frontend.", type: "website" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
