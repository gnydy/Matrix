import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'RealEstateBot Advisor',
  description: 'Property matching and viewing booking bot.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
