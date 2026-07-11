import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ExpenseGuard Finance Desk',
  description: 'Expense review and approval workspace.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
