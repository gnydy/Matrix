import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'VeganLeaf Kitchen | Restaurant System Template',
  description: 'Plant-based restaurant storefront with subscriptions and impact UI',
  keywords: ['restaurant website', 'restaurant system', 'online ordering', 'table reservation', 'kitchen dashboard', 'Next.js template'],
  openGraph: { title: 'VeganLeaf Kitchen', description: 'Plant-based restaurant storefront with subscriptions and impact UI', type: 'website' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
