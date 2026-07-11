import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'EnterpriseRoadmap View | Roadmap & Feature Request Platforms',
  description: 'EnterpriseRoadmap View template for Roadmap & Feature Request Platforms.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
