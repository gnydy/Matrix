import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SushiLane Omakase | Restaurant System Template',
  description: 'Minimal Japanese dining site with omakase reservations',
  keywords: ['restaurant website', 'restaurant system', 'online ordering', 'table reservation', 'kitchen dashboard', 'Next.js template'],
  openGraph: { title: 'SushiLane Omakase', description: 'Minimal Japanese dining site with omakase reservations', type: 'website' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
