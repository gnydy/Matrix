import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'FoodTruck RouteBoard | Restaurant System Template',
  description: 'Mobile food brand website with route, preorder, and stock UX',
  keywords: ['restaurant website', 'restaurant system', 'online ordering', 'table reservation', 'kitchen dashboard', 'Next.js template'],
  openGraph: { title: 'FoodTruck RouteBoard', description: 'Mobile food brand website with route, preorder, and stock UX', type: 'website' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
