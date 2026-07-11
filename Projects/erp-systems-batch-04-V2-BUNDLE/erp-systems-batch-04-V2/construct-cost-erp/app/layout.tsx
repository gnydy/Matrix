import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Construct Cost ERP',
  description: 'Project costs, BOQ, site progress, equipment and subcontractor dashboard',
  openGraph: {
    title: 'Construct Cost ERP',
    description: 'Project costs, BOQ, site progress, equipment and subcontractor dashboard',
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
