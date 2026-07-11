import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'FintechImpact Calc | ROI Calculator Pages',
  description: 'FintechImpact Calc template for ROI Calculator Pages.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
