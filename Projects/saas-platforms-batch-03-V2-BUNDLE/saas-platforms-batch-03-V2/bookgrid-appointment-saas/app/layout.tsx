import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BookGrid Appointment SaaS | SaaS Platform Template",
  description: "Appointment booking with operational controls behind the calendar.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
