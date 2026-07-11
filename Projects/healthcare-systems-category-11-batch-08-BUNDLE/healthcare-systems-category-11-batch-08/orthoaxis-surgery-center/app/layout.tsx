import './globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'OrthoAxis Surgery Center | Healthcare System UI Template',
  description: 'OrthoAxis Surgery Center is a polished healthcare frontend template for Orthopedic centers and surgery clinics.',
  keywords: ['healthcare template', 'clinic dashboard', 'medical UI', 'Next.js', 'Tailwind CSS'],
  openGraph: {
    title: 'OrthoAxis Surgery Center',
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
