import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'IntegrationMonitoring OS | Integrations Platforms',
  description: 'IntegrationMonitoring OS template for Integrations Platforms.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
