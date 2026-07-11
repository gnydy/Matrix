import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'WebsiteCost Calculator | Project Estimator Tools',
  description: 'WebsiteCost Calculator template for Project Estimator Tools.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
