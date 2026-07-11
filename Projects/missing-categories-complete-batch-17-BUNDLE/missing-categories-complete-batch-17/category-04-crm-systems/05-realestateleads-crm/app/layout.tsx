import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'RealEstateLeads CRM | CRM Systems',
  description: 'RealEstateLeads CRM template for CRM Systems.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
