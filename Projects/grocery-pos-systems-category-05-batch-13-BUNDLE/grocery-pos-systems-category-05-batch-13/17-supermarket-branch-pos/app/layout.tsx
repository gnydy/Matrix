import type { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Supermarket Branch POS | Grocery POS Template',
  description: 'قالب فرع سوبرماركت كامل مع كاشيرات، مخزون، تقارير، وإدارة.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
