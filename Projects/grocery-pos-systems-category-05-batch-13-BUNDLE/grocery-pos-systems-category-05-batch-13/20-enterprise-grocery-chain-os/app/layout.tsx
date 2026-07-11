import type { Metadata } from 'next';
import '../styles/globals.css';

export const metadata: Metadata = {
  title: 'Enterprise Grocery Chain OS | Grocery POS Template',
  description: 'أكبر قالب في الدفعة: نظام تشغيل واجهي لسلسلة بقالة ضخمة متعددة الفروع.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
