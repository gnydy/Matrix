import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TableOps Fine Dining System | Restaurant System Template',
  description: 'Premium reservation-first restaurant website with dining room intelligence',
  keywords: ['restaurant website', 'restaurant system', 'online ordering', 'table reservation', 'kitchen dashboard', 'Next.js template'],
  openGraph: { title: 'TableOps Fine Dining System', description: 'Premium reservation-first restaurant website with dining room intelligence', type: 'website' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
