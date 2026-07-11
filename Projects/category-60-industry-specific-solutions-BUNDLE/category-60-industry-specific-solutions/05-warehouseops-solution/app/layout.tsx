import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'WarehouseOps Solution | Industry-Specific Solutions',
  description: 'WarehouseOps Solution template for Industry-Specific Solutions.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
