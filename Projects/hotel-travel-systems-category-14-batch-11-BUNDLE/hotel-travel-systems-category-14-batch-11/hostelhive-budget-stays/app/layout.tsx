import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "HostelHive Budget Stays | Hotel & Travel Template",
  description: "Hostel and budget accommodation booking frontend with shared rooms and community.",
  keywords: ["hotel template", "travel booking", "Next.js", "Tailwind", "booking system", "guest portal"],
  openGraph: { title: "HostelHive Budget Stays", description: "Hostel and budget accommodation booking frontend with shared rooms and community.", type: "website" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
