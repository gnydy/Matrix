import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ColdStorage Inventory',
  description: 'Temperature-sensitive stock dashboard.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
