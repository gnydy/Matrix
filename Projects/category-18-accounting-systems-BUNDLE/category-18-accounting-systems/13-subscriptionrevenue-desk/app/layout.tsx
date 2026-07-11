import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SubscriptionRevenue Desk',
  description: 'MRR, billing cycles and failed payments.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
