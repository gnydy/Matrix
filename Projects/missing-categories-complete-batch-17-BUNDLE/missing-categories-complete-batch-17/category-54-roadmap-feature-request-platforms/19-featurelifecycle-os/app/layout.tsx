import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'FeatureLifecycle OS | Roadmap & Feature Request Platforms',
  description: 'FeatureLifecycle OS template for Roadmap & Feature Request Platforms.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
