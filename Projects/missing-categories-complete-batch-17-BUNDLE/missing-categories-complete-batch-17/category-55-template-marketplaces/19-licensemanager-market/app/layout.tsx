import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'LicenseManager Market | Template Marketplaces',
  description: 'LicenseManager Market template for Template Marketplaces.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
