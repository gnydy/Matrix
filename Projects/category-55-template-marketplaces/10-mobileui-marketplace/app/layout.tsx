import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'MobileUI Marketplace | Template Marketplaces',
  description: 'MobileUI Marketplace template for Template Marketplaces.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
