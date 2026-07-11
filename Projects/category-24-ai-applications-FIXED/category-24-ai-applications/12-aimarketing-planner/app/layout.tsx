import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AIMarketing Planner',
  description: 'Campaign angle and content calendar generator.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
