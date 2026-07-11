import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Fleet Route ERP',
  description: 'Fleet dispatch, route planning, shipments, driver status and delivery SLA control',
  openGraph: {
    title: 'Fleet Route ERP',
    description: 'Fleet dispatch, route planning, shipments, driver status and delivery SLA control',
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
