import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'DessertLab Orders | Restaurant System Template',
  description: 'Dessert ecommerce-style restaurant template with operations panel',
  keywords: ['restaurant website', 'restaurant system', 'online ordering', 'table reservation', 'kitchen dashboard', 'Next.js template'],
  openGraph: { title: 'DessertLab Orders', description: 'Dessert ecommerce-style restaurant template with operations panel', type: 'website' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
