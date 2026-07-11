import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Aparthotel FlexStay | Hotel & Travel Template",
  description: "Aparthotel booking frontend for short and long stays with flexible rates.",
  keywords: ["hotel template", "travel booking", "Next.js", "Tailwind", "booking system", "guest portal"],
  openGraph: { title: "Aparthotel FlexStay", description: "Aparthotel booking frontend for short and long stays with flexible rates.", type: "website" }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
