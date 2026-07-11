import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SavingsROI Calculator | ROI Calculator Pages',
  description: 'SavingsROI Calculator template for ROI Calculator Pages.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
