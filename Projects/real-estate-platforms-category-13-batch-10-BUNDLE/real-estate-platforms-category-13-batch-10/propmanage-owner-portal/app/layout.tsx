import type { Metadata } from 'next';
import '@/styles/globals.css';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: `${site.name} | Real Estate Platform Template`,
  description: site.positioning,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
