import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'People Payroll ERP',
  description: 'Employee records, attendance, payroll cycle, leaves and performance control desk',
  openGraph: {
    title: 'People Payroll ERP',
    description: 'Employee records, attendance, payroll cycle, leaves and performance control desk',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
