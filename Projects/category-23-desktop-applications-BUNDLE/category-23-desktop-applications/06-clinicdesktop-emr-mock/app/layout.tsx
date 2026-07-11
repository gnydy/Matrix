import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ClinicDesktop EMR Mock',
  description: 'Clinic desktop patient records mock.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
