import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'GrillMaster Smokehouse | Restaurant System Template',
  description: 'Smokehouse website with pickup, catering, and pitmaster operations',
  keywords: ['restaurant website', 'restaurant system', 'online ordering', 'table reservation', 'kitchen dashboard', 'Next.js template'],
  openGraph: { title: 'GrillMaster Smokehouse', description: 'Smokehouse website with pickup, catering, and pitmaster operations', type: 'website' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
