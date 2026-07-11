import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ConstructionCost Accounting',
  description: 'Project expenses, advances and cost codes.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
