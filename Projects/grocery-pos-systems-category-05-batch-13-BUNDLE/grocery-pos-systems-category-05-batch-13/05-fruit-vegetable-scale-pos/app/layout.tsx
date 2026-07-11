import type { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Fruit Scale POS | Grocery POS Template',
  description: 'كاشير خضار وفاكهة مع وزن، سعر كيلو، وخصومات نهاية اليوم.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
