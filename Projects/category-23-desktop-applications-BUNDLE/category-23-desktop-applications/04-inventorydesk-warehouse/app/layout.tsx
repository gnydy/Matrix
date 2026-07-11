import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'InventoryDesk Warehouse',
  description: 'Warehouse desktop management UI.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
