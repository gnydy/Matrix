import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'IndustryTemplate Shelf | Template Marketplaces',
  description: 'IndustryTemplate Shelf template for Template Marketplaces.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
