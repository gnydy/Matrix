import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SaaSRoadmap Center | Roadmap & Feature Request Platforms',
  description: 'SaaSRoadmap Center template for Roadmap & Feature Request Platforms.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
