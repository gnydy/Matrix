import type { Metadata } from 'next';
import { IBM_Plex_Sans_Arabic } from 'next/font/google';
import { ERP_NAME, ERP_TAGLINE } from '@/lib/labels';
import './globals.css';

const sans = IBM_Plex_Sans_Arabic({
  subsets: ['arabic', 'latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: { default: ERP_NAME, template: `%s | ${ERP_NAME}` },
  description: ERP_TAGLINE,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${sans.variable} min-h-screen antialiased`}>{children}</body>
    </html>
  );
}
