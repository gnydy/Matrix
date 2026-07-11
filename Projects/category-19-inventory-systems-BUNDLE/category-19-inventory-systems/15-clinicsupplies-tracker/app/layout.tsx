import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ClinicSupplies Tracker',
  description: 'Medical supplies and department requests.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
