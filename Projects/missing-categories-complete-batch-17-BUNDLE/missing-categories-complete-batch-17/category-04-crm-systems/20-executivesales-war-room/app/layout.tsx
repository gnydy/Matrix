import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ExecutiveSales War Room | CRM Systems',
  description: 'ExecutiveSales War Room template for CRM Systems.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
