import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'StockPilot Warehouse',
  description: 'Warehouse product catalog and movement control.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
