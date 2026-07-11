import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MultiWarehouse HQ',
  description: 'Multi-location warehouse tracking.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
