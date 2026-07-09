import type { Metadata, Viewport } from 'next';
import { IBM_Plex_Sans_Arabic } from 'next/font/google';
import { SiteFooterLoader } from '@/components/layout/site-footer-loader';
import { SiteHeaderLoader } from '@/components/layout/site-header-loader';
import { ContactNowButton } from '@/components/layout/contact-now-button';
import { VisitorTracker } from '@/components/analytics/visitor-tracker';
import { ThemeScript } from '@/components/theme/theme-script';
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
    default: 'Matrix — AllInAll ERP',
    template: '%s | Matrix',
  },
  description:
    'منصة ERP عربية متكاملة — محاسبة، مخزون، مبيعات، موارد بشرية. SaaS أو نشر مخصص للشركات العربية.',
  keywords: ['ERP', 'Matrix', 'AllInAll', 'محاسبة', 'مخزون', 'SaaS', 'نظام محاسبي'],
  openGraph: {
    title: 'Matrix — AllInAll ERP',
    description: 'نظام إدارة أعمال متكامل للشركات العربية',
    url: site.url,
    locale: 'ar_EG',
    type: 'website',
    siteName: 'Matrix — AllInAll',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Matrix — AllInAll ERP' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Matrix — AllInAll ERP',
    description: 'منصة ERP عربية متكاملة — محاسبة، مخزون، مبيعات، موارد بشرية',
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
      </body>
    </html>
  );
}
