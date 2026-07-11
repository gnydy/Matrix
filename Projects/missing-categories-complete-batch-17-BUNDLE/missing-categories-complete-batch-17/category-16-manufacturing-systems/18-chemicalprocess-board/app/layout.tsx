import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ChemicalProcess Board | Manufacturing Systems',
  description: 'ChemicalProcess Board template for Manufacturing Systems.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
