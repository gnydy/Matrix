import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Factory Floor ERP',
  description: 'Production floor control with machines, work orders, materials and quality gates',
  openGraph: {
    title: 'Factory Floor ERP',
    description: 'Production floor control with machines, work orders, materials and quality gates',
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
