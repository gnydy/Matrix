import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PharmaStock Control',
  description: 'Pharmacy inventory with expiry alerts.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
