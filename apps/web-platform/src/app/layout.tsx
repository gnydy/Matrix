import type { Metadata } from 'next';
import { IBM_Plex_Sans_Arabic } from 'next/font/google';
import { CONTROL_CENTER_NAME, CONTROL_CENTER_TAGLINE } from '@/lib/branding';
import './globals.css';

const sans = IBM_Plex_Sans_Arabic({
  subsets: ['arabic', 'latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: {
    default: CONTROL_CENTER_NAME,
    template: `%s | ${CONTROL_CENTER_NAME}`,
  },
  description: `${CONTROL_CENTER_NAME} — ${CONTROL_CENTER_TAGLINE}`,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${sans.variable} min-h-screen antialiased`}>{children}</body>
    </html>
  );
}
