import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'MobileApp Pricing Tool | Project Estimator Tools',
  description: 'MobileApp Pricing Tool template for Project Estimator Tools.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
