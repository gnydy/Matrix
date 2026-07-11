import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'LeadRadar CRM | CRM Systems',
  description: 'LeadRadar CRM template for CRM Systems.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
