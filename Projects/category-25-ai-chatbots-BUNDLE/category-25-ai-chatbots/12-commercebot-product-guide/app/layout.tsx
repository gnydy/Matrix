import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CommerceBot Product Guide',
  description: 'E-commerce recommendation chat assistant.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
