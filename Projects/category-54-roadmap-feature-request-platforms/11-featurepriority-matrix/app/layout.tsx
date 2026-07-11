import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'FeaturePriority Matrix | Roadmap & Feature Request Platforms',
  description: 'FeaturePriority Matrix template for Roadmap & Feature Request Platforms.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
