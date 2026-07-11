import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CycleCount Mobile Kit',
  description: 'Stocktaking screens and variance reports.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
