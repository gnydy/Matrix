import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ExecutiveROI Dashboard | ROI Calculator Pages',
  description: 'ExecutiveROI Dashboard template for ROI Calculator Pages.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
