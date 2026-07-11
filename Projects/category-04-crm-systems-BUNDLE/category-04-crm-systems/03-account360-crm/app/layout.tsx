import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Account360 CRM | CRM Systems',
  description: 'Account360 CRM template for CRM Systems.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
