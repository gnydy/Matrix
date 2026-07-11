import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Project Cost ERP',
  description: 'Budgets, expenses, milestones, utilization and profitability tracking',
  openGraph: {
    title: 'Project Cost ERP',
    description: 'Budgets, expenses, milestones, utilization and profitability tracking',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
