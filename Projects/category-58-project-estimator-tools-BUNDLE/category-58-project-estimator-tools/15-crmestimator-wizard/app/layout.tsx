import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CRMEstimator Wizard | Project Estimator Tools',
  description: 'CRMEstimator Wizard template for Project Estimator Tools.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
