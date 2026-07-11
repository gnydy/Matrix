import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PurchaseOrder Desk',
  description: 'PO creation and approval dashboard.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
