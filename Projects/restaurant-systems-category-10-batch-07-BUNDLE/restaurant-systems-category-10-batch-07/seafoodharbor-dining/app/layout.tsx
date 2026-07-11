import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SeafoodHarbor Dining | Restaurant System Template',
  description: 'Coastal seafood website with fresh-catch menu and table booking',
  keywords: ['restaurant website', 'restaurant system', 'online ordering', 'table reservation', 'kitchen dashboard', 'Next.js template'],
  openGraph: { title: 'SeafoodHarbor Dining', description: 'Coastal seafood website with fresh-catch menu and table booking', type: 'website' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
