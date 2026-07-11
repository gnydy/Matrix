import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ProductDiscovery Hub | Roadmap & Feature Request Platforms',
  description: 'ProductDiscovery Hub template for Roadmap & Feature Request Platforms.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
