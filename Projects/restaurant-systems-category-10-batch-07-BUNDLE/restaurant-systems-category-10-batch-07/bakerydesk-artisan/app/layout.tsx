import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'BakeryDesk Artisan | Restaurant System Template',
  description: 'Bakery ordering and production planning template',
  keywords: ['restaurant website', 'restaurant system', 'online ordering', 'table reservation', 'kitchen dashboard', 'Next.js template'],
  openGraph: { title: 'BakeryDesk Artisan', description: 'Bakery ordering and production planning template', type: 'website' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
