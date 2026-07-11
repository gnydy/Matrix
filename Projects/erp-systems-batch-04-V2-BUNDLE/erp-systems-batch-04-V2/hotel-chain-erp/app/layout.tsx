import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Hotel Chain ERP',
  description: 'Rooms, bookings, housekeeping, guest accounts and revenue operations',
  openGraph: {
    title: 'Hotel Chain ERP',
    description: 'Rooms, bookings, housekeeping, guest accounts and revenue operations',
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
