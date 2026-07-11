import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'LandingKit Store | Template Marketplaces',
  description: 'LandingKit Store template for Template Marketplaces.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
