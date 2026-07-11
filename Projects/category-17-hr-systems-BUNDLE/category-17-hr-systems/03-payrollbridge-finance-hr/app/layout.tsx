import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PayrollBridge Finance HR',
  description: 'Payroll mock portal linked to finance workflows.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
