import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Campus Admin ERP',
  description: 'Admissions, classes, student fees, teachers, attendance and academic operations',
  openGraph: {
    title: 'Campus Admin ERP',
    description: 'Admissions, classes, student fees, teachers, attendance and academic operations',
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
