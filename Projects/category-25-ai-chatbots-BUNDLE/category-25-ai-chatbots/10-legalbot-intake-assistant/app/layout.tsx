import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LegalBot Intake Assistant',
  description: 'Legal intake and case routing bot.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
