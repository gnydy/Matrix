import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AssetInventory Register',
  description: 'Company assets and custody tracking.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
