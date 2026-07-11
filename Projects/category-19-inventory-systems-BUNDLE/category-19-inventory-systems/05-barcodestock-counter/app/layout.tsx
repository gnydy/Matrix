import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BarcodeStock Counter',
  description: 'Barcode-first stock control UI.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
