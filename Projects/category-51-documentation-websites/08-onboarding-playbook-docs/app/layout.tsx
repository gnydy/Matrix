import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Onboarding Playbook Docs | Documentation Websites',
  description: 'Onboarding Playbook Docs template for Documentation Websites.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
