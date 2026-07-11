import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BankingMobile Kit',
  description: 'Accounts, transfer and card screens.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
