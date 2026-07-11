import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MedSync Clinic Portal | SaaS Platform Template",
  description: "A clinic portal that connects appointments, queues, patients, and operational insight.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
