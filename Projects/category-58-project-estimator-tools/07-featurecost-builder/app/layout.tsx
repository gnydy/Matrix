import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'FeatureCost Builder | Project Estimator Tools',
  description: 'FeatureCost Builder template for Project Estimator Tools.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
