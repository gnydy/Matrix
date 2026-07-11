import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'MobileFeature Board | Roadmap & Feature Request Platforms',
  description: 'MobileFeature Board template for Roadmap & Feature Request Platforms.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
