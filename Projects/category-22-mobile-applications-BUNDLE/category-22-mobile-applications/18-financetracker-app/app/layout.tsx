import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FinanceTracker App',
  description: 'Budget, goals and expense charts.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
