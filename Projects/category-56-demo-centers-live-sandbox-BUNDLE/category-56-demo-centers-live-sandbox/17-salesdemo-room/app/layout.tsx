import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SalesDemo Room | Demo Centers & Live Sandbox',
  description: 'SalesDemo Room template for Demo Centers & Live Sandbox.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
