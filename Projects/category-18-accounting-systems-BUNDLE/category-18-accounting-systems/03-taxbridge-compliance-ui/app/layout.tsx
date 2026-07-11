import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TaxBridge Compliance UI',
  description: 'Tax overview, VAT mock and filing status.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
