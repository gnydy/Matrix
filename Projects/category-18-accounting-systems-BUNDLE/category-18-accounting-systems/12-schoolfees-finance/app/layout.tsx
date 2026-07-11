import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SchoolFees Finance',
  description: 'Tuition payments and student balances.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
