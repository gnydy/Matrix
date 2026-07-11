import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BankBranch Desktop',
  description: 'Teller and customer operations desktop.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
