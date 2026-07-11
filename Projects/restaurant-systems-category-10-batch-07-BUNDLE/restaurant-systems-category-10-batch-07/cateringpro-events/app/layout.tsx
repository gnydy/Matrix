import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'CateringPro Events | Restaurant System Template',
  description: 'Catering sales website with event quote and operations UI',
  keywords: ['restaurant website', 'restaurant system', 'online ordering', 'table reservation', 'kitchen dashboard', 'Next.js template'],
  openGraph: { title: 'CateringPro Events', description: 'Catering sales website with event quote and operations UI', type: 'website' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
