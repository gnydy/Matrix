import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SupportNest Helpdesk | SaaS Platform Template",
  description: "A support desk built around speed, clarity, and escalation control.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
