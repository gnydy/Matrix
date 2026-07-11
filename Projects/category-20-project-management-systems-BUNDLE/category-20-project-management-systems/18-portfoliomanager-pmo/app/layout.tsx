import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PortfolioManager PMO',
  description: 'PMO dashboard across many projects.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
