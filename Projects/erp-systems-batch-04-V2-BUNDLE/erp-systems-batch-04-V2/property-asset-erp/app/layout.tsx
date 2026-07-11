import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Property Asset ERP',
  description: 'Property portfolio, tenants, maintenance, leases and occupancy analytics',
  openGraph: {
    title: 'Property Asset ERP',
    description: 'Property portfolio, tenants, maintenance, leases and occupancy analytics',
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
