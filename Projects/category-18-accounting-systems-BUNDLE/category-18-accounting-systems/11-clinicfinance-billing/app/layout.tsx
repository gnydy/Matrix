import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ClinicFinance Billing',
  description: 'Medical billing and claim mock dashboards.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
