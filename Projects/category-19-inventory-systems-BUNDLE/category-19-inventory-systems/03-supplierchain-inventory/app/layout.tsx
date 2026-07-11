import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SupplierChain Inventory',
  description: 'Supplier orders and restock management.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
