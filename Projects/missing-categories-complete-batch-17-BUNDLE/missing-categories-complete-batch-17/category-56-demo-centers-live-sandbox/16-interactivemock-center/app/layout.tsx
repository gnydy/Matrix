import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'InteractiveMock Center | Demo Centers & Live Sandbox',
  description: 'InteractiveMock Center template for Demo Centers & Live Sandbox.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
