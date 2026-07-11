import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SaaSKit Marketplace | Template Marketplaces',
  description: 'SaaSKit Marketplace template for Template Marketplaces.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
