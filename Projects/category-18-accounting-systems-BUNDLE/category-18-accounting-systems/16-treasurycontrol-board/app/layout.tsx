import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TreasuryControl Board',
  description: 'Bank accounts and liquidity operations.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
