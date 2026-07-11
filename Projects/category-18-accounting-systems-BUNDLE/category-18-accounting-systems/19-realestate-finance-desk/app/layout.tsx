import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'RealEstate Finance Desk',
  description: 'Property collections and maintenance costs.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
