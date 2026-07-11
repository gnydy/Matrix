import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'HealthyBowl Ordering | Restaurant System Template',
  description: 'Nutrition-first ordering UI with meal plans',
  keywords: ['restaurant website', 'restaurant system', 'online ordering', 'table reservation', 'kitchen dashboard', 'Next.js template'],
  openGraph: { title: 'HealthyBowl Ordering', description: 'Nutrition-first ordering UI with meal plans', type: 'website' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
