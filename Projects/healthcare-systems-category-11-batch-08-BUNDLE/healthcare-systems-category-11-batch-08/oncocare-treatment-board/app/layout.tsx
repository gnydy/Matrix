import './globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'OncoCare Treatment Board | Healthcare System UI Template',
  description: 'OncoCare Treatment Board is a polished healthcare frontend template for Cancer centers and specialty hospitals.',
  keywords: ['healthcare template', 'clinic dashboard', 'medical UI', 'Next.js', 'Tailwind CSS'],
  openGraph: {
    title: 'OncoCare Treatment Board',
    description: 'Healthcare frontend template with appointments, mock patients, reports, departments, and admin UX.',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
