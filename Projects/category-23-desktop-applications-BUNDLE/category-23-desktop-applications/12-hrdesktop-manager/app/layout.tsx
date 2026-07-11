import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HRDesktop Manager',
  description: 'Desktop HR employee and payroll shell.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
