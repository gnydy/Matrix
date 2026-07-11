import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AIImage Prompt Lab',
  description: 'Image prompt generator and gallery mock.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
