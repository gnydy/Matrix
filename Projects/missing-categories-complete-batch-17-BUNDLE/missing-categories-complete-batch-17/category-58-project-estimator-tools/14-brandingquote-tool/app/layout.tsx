import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'BrandingQuote Tool | Project Estimator Tools',
  description: 'BrandingQuote Tool template for Project Estimator Tools.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
