import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AgencyTemplate Store | Template Marketplaces',
  description: 'AgencyTemplate Store template for Template Marketplaces.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
