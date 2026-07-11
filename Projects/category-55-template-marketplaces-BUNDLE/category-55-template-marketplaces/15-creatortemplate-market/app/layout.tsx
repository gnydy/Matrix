import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CreatorTemplate Market | Template Marketplaces',
  description: 'CreatorTemplate Market template for Template Marketplaces.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
