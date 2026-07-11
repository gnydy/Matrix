import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'APIConnector Directory | Integrations Platforms',
  description: 'APIConnector Directory template for Integrations Platforms.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
