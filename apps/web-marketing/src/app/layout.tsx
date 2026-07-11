import type { Metadata, Viewport } from 'next';
import { IBM_Plex_Sans_Arabic } from 'next/font/google';
import { SiteFooterLoader } from '@/components/layout/site-footer-loader';
import { SiteHeaderLoader } from '@/components/layout/site-header-loader';
import { ContactNowButton } from '@/components/layout/contact-now-button';
import { VisitorTracker } from '@/components/analytics/visitor-tracker';
import { ThemeScript } from '@/components/theme/theme-script';
import { MatrixChat } from '@/components/chat/matrix-chat';
import { getLocale } from '@/i18n/get-locale';
import { site } from '@/lib/content';
import './globals.css';

const sans = IBM_Plex_Sans_Arabic({
  subsets: ['arabic', 'latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? site.url;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Matrix â€” AllInAll ERP',
    template: '%s | Matrix',
  },
  description:
    'Ù…Ù†ØµØ© ERP Ø¹Ø±Ø¨ÙŠØ© Ù…ØªÙƒØ§Ù…Ù„Ø© â€” Ù…Ø­Ø§Ø³Ø¨Ø©ØŒ Ù…Ø®Ø²ÙˆÙ†ØŒ Ù…Ø¨ÙŠØ¹Ø§ØªØŒ Ù…ÙˆØ§Ø±Ø¯ Ø¨Ø´Ø±ÙŠØ©. SaaS Ø£Ùˆ Ù†Ø´Ø± Ù…Ø®ØµØµ Ù„Ù„Ø´Ø±ÙƒØ§Øª Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©.',
  keywords: ['ERP', 'Matrix', 'AllInAll', 'Ù…Ø­Ø§Ø³Ø¨Ø©', 'Ù…Ø®Ø²ÙˆÙ†', 'SaaS', 'Ù†Ø¸Ø§Ù… Ù…Ø­Ø§Ø³Ø¨ÙŠ'],
  openGraph: {
    title: 'Matrix â€” AllInAll ERP',
    description: 'Ù†Ø¸Ø§Ù… Ø¥Ø¯Ø§Ø±Ø© Ø£Ø¹Ù…Ø§Ù„ Ù…ØªÙƒØ§Ù…Ù„ Ù„Ù„Ø´Ø±ÙƒØ§Øª Ø§Ù„Ø¹Ø±Ø¨ÙŠØ©',
    url: site.url,
    locale: 'ar_EG',
    type: 'website',
    siteName: 'Matrix â€” AllInAll',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Matrix â€” AllInAll ERP' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Matrix â€” AllInAll ERP',
    description: 'Ù…Ù†ØµØ© ERP Ø¹Ø±Ø¨ÙŠØ© Ù…ØªÙƒØ§Ù…Ù„Ø© â€” Ù…Ø­Ø§Ø³Ø¨Ø©ØŒ Ù…Ø®Ø²ÙˆÙ†ØŒ Ù…Ø¨ÙŠØ¹Ø§ØªØŒ Ù…ÙˆØ§Ø±Ø¯ Ø¨Ø´Ø±ÙŠØ©',
    images: ['/og.png'],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8fafc' },
    { media: '(prefers-color-scheme: dark)', color: '#020617' },
  ],
};

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const locale = await getLocale();
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className={`${sans.variable} min-h-screen bg-background font-sans text-foreground antialiased`}>
        <VisitorTracker />
        <SiteHeaderLoader />
        <main>{children}</main>
        <SiteFooterLoader />
        <ContactNowButton variant="floating" />
        <MatrixChat />
      </body>
    </html>
  );
}


