import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SaaSCostImpact | ROI Calculator Pages',
  description: 'SaaSCostImpact template for ROI Calculator Pages.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
