import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HotelSupply Inventory',
  description: 'Hotel linens, amenities and consumables.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
