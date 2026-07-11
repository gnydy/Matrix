import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Hospital Ops ERP',
  description: 'Patient flow, departments, billing, stock, claims and resource allocation',
  openGraph: {
    title: 'Hospital Ops ERP',
    description: 'Patient flow, departments, billing, stock, claims and resource allocation',
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
