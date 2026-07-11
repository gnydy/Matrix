import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Service Maintenance ERP',
  description: 'Work orders, technicians, spare parts, contracts and SLA escalation',
  openGraph: {
    title: 'Service Maintenance ERP',
    description: 'Work orders, technicians, spare parts, contracts and SLA escalation',
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
