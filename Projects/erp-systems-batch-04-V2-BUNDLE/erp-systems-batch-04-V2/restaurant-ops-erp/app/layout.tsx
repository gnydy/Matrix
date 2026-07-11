import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Restaurant Ops ERP',
  description: 'Kitchen orders, ingredients, purchases, table revenue and delivery operations',
  openGraph: {
    title: 'Restaurant Ops ERP',
    description: 'Kitchen orders, ingredients, purchases, table revenue and delivery operations',
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
