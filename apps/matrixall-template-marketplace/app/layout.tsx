import "../styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MatrixAll Template Marketplace",
  description: "Professional marketplace for software templates, dashboards, systems, SaaS, AI tools, and business websites."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
