import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SecurityRisk ROI | ROI Calculator Pages',
  description: 'SecurityRisk ROI template for ROI Calculator Pages.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
