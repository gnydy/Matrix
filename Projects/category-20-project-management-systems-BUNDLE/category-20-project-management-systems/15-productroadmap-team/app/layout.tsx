import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ProductRoadmap Team',
  description: 'Product features and sprint velocity.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
