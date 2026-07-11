import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FactoryShift HR Console',
  description: 'Factory shift roster and overtime control.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
