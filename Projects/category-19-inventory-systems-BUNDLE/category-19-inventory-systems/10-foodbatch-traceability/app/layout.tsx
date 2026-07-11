import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FoodBatch Traceability',
  description: 'Batch, expiry and supplier trace mock.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
