import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AdminPanel Market | Template Marketplaces',
  description: 'AdminPanel Market template for Template Marketplaces.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
