import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RouteWise Delivery Cloud | SaaS Platform Template",
  description: "Route operations for businesses that cannot afford blind delivery movement.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
