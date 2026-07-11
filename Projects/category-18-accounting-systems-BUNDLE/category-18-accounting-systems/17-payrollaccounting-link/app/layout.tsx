import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PayrollAccounting Link',
  description: 'Payroll journal and salary liabilities.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
