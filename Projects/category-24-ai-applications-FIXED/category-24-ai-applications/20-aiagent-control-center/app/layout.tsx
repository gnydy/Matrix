import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AIAgent Control Center',
  description: 'Multi-agent orchestration dashboard.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
