import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EnterpriseBooks Command',
  description: 'Large finance operations console.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
