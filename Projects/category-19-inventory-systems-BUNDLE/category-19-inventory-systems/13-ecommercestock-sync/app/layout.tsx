import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EcommerceStock Sync',
  description: 'Online store inventory and channel counts.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
