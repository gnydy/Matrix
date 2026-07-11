import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Pizzeria Pulse POS Web | Restaurant System Template',
  description: 'Pizza ordering storefront with operations dashboard',
  keywords: ['restaurant website', 'restaurant system', 'online ordering', 'table reservation', 'kitchen dashboard', 'Next.js template'],
  openGraph: { title: 'Pizzeria Pulse POS Web', description: 'Pizza ordering storefront with operations dashboard', type: 'website' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
