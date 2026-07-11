import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AutoParts Inventory',
  description: 'Spare parts stock and fitment catalog.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
