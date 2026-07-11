import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Holding Executive ERP',
  description: 'Multi-company executive ERP with KPIs, subsidiaries, financials and risk signals',
  openGraph: {
    title: 'Holding Executive ERP',
    description: 'Multi-company executive ERP with KPIs, subsidiaries, financials and risk signals',
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
