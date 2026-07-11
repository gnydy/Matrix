import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Inventory Control ERP',
  description: 'Inventory movement cockpit with bins, stock alerts, suppliers and transfer requests',
  openGraph: {
    title: 'Inventory Control ERP',
    description: 'Inventory movement cockpit with bins, stock alerts, suppliers and transfer requests',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
