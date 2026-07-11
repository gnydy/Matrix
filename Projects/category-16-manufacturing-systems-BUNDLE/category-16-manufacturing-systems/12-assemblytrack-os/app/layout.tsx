import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AssemblyTrack OS | Manufacturing Systems',
  description: 'AssemblyTrack OS template for Manufacturing Systems.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
