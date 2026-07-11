import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ReceivableHub AR Console',
  description: 'A/R aging, collections and client balances.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
