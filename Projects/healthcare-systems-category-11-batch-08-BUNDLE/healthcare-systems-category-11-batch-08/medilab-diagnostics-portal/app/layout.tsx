import './globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'MediLab Diagnostics Portal | Healthcare System UI Template',
  description: 'MediLab Diagnostics Portal is a polished healthcare frontend template for Labs, imaging centers, blood test providers.',
  keywords: ['healthcare template', 'clinic dashboard', 'medical UI', 'Next.js', 'Tailwind CSS'],
  openGraph: {
    title: 'MediLab Diagnostics Portal',
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
