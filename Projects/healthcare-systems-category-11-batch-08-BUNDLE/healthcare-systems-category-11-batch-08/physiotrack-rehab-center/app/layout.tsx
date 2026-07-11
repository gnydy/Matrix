import './globals.css';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'PhysioTrack Rehab Center | Healthcare System UI Template',
  description: 'PhysioTrack Rehab Center is a polished healthcare frontend template for Rehab centers and sports therapy clinics.',
  keywords: ['healthcare template', 'clinic dashboard', 'medical UI', 'Next.js', 'Tailwind CSS'],
  openGraph: {
    title: 'PhysioTrack Rehab Center',
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
