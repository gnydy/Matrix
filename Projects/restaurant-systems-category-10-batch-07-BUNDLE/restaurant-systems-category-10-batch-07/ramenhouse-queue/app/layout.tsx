import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'RamenHouse Queue | Restaurant System Template',
  description: 'Queue-based restaurant website with waitlist and kitchen ticketing',
  keywords: ['restaurant website', 'restaurant system', 'online ordering', 'table reservation', 'kitchen dashboard', 'Next.js template'],
  openGraph: { title: 'RamenHouse Queue', description: 'Queue-based restaurant website with waitlist and kitchen ticketing', type: 'website' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
