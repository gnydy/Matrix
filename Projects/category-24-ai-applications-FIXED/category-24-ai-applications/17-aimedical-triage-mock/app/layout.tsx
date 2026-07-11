import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AIMedical Triage Mock',
  description: 'Non-diagnostic triage interface mock.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
