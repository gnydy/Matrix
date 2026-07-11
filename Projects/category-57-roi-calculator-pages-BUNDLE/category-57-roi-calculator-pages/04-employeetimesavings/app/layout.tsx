import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'EmployeeTimeSavings | ROI Calculator Pages',
  description: 'EmployeeTimeSavings template for ROI Calculator Pages.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
