import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PremiumApp Design System',
  description: 'Reusable mobile components showcase.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
