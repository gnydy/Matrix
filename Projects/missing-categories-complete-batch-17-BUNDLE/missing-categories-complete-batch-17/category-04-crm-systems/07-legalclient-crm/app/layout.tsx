import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'LegalClient CRM | CRM Systems',
  description: 'LegalClient CRM template for CRM Systems.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
