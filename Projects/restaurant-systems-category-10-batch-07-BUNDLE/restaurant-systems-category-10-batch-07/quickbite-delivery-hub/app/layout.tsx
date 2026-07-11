import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'QuickBite Delivery Hub | Restaurant System Template',
  description: 'High-speed ordering system for delivery-first restaurants',
  keywords: ['restaurant website', 'restaurant system', 'online ordering', 'table reservation', 'kitchen dashboard', 'Next.js template'],
  openGraph: { title: 'QuickBite Delivery Hub', description: 'High-speed ordering system for delivery-first restaurants', type: 'website' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
