import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AIData Insight Tool',
  description: 'Dataset question interface and charts.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
