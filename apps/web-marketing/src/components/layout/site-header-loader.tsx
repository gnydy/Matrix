import { SiteHeader } from '@/components/layout/site-header';
import { getLocale } from '@/i18n/get-locale';
import { getMessages } from '@/i18n/messages';

export async function SiteHeaderLoader() {
  const locale = await getLocale();
  const t = getMessages(locale);
  const mainNav = [
    { href: '/services', label: t.nav.services },
    { href: '/services/erp', label: t.nav.erp },
    { href: '/packages', label: t.nav.packages },
    { href: '/about', label: t.nav.about },
    { href: '/contact', label: t.nav.contact },
  ] as const;

  return <SiteHeader locale={locale} t={t} mainNav={mainNav} />;
}
