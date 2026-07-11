import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Procurement Hub ERP',
  description: 'Purchase request to vendor comparison workflow with RFQ board and approval lanes',
  openGraph: {
    title: 'Procurement Hub ERP',
    description: 'Purchase request to vendor comparison workflow with RFQ board and approval lanes',
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
