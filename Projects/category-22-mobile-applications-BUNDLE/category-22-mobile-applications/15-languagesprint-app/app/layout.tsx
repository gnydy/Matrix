import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LanguageSprint App',
  description: 'Language learning streaks and practice.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
