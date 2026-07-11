import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HireLane Recruitment Suite | SaaS Platform Template",
  description: "A hiring cockpit that turns candidate chaos into visible pipeline movement.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
