import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CloudKitchen Command | Restaurant System Template',
  description: 'Multi-brand restaurant operating system UI',
  keywords: ['restaurant website', 'restaurant system', 'online ordering', 'table reservation', 'kitchen dashboard', 'Next.js template'],
  openGraph: { title: 'CloudKitchen Command', description: 'Multi-brand restaurant operating system UI', type: 'website' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
