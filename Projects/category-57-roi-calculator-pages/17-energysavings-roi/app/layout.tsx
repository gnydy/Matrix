import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'EnergySavings ROI | ROI Calculator Pages',
  description: 'EnergySavings ROI template for ROI Calculator Pages.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
