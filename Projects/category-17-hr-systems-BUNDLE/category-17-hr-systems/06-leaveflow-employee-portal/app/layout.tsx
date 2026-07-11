import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LeaveFlow Employee Portal',
  description: 'Leave requests, balances, and approval queue.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
