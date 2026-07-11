import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FactoryMaterials MRP',
  description: 'Production materials and reservation board.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
