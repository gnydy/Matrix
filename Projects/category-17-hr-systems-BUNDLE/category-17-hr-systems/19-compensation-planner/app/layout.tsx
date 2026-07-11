import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Compensation Planner',
  description: 'Salary bands, bonuses, and review cycles.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
