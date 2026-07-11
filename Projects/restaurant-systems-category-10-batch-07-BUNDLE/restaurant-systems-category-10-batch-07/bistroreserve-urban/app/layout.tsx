import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'BistroReserve Urban | Restaurant System Template',
  description: 'Urban bistro website with booking and private dining funnel',
  keywords: ['restaurant website', 'restaurant system', 'online ordering', 'table reservation', 'kitchen dashboard', 'Next.js template'],
  openGraph: { title: 'BistroReserve Urban', description: 'Urban bistro website with booking and private dining funnel', type: 'website' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
