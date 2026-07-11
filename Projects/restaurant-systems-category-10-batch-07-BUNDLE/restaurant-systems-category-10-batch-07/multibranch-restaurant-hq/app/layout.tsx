import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'MultiBranch Restaurant HQ | Restaurant System Template',
  description: 'Restaurant chain HQ website and admin dashboard template',
  keywords: ['restaurant website', 'restaurant system', 'online ordering', 'table reservation', 'kitchen dashboard', 'Next.js template'],
  openGraph: { title: 'MultiBranch Restaurant HQ', description: 'Restaurant chain HQ website and admin dashboard template', type: 'website' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
