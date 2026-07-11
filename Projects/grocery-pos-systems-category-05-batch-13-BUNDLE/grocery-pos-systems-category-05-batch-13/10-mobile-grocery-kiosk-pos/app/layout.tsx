import type { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Mobile Grocery Kiosk POS | Grocery POS Template',
  description: 'قالب خفيف للكشك المتنقل أو نقطة بيع صغيرة داخل مول/شارع.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
