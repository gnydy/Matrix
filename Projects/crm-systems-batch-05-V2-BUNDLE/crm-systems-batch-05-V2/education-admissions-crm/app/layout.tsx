import type { Metadata } from "next";
import "../styles/globals.css";
import { crm } from "@/data/crm";

export const metadata: Metadata = {
  title: `${crm.title} | CRM Template`,
  description: crm.concept,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
