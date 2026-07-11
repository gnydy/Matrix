import type { Metadata } from 'next';
import '../styles/globals.css';
import { site } from '@/data/site';

export const metadata: Metadata = {
  title: `${site.name} | Education Platform Template`,
  description: site.description,
  keywords: ['Next.js', 'LMS', 'Education Platform', 'Student Dashboard', 'Teacher Dashboard', 'Tailwind CSS'],
  openGraph: {
    title: site.name,
    description: site.description,
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
