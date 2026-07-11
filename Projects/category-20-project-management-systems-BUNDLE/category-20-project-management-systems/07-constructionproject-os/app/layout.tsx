import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ConstructionProject OS',
  description: 'Site stages, contractors and inspections.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
