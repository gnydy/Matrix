import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'StreetFood Market OS | Restaurant System Template',
  description: 'Vendor-style street food marketplace UI',
  keywords: ['restaurant website', 'restaurant system', 'online ordering', 'table reservation', 'kitchen dashboard', 'Next.js template'],
  openGraph: { title: 'StreetFood Market OS', description: 'Vendor-style street food marketplace UI', type: 'website' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
