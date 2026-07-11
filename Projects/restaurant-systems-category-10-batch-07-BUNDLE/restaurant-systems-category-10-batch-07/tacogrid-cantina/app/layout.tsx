import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TacoGrid Cantina | Restaurant System Template',
  description: 'Vibrant restaurant ordering and events template',
  keywords: ['restaurant website', 'restaurant system', 'online ordering', 'table reservation', 'kitchen dashboard', 'Next.js template'],
  openGraph: { title: 'TacoGrid Cantina', description: 'Vibrant restaurant ordering and events template', type: 'website' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
