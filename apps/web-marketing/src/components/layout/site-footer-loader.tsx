import { SiteFooter } from '@/components/layout/site-footer';
import { getLocale } from '@/i18n/get-locale';
import { getMessages } from '@/i18n/messages';
import { footerNav } from '@/lib/navigation';

const footerLabels = {
  ar: {
    product: ['AllInAll ERP', 'أنظمة مخصصة', 'مواقع وتطبيقات', 'الباقات', 'احسب احتياجك', 'اطلب نظامك'],
    company: ['من نحن', 'تواصل', 'الأسئلة الشائعة'],
    legal: ['الخصوصية', 'الشروط'],
  },
  en: {
    product: ['AllInAll ERP', 'Custom systems', 'Web & mobile', 'Plans', 'Needs calculator', 'Request system'],
    company: ['About', 'Contact', 'FAQ'],
    legal: ['Privacy', 'Terms'],
  },
} as const;

export async function SiteFooterLoader() {
  const locale = await getLocale();
  const t = getMessages(locale);
  const labels = footerLabels[locale];

  const product = footerNav.product.map((link, i) => ({ ...link, label: labels.product[i] ?? link.label }));
  const company = footerNav.company.map((link, i) => ({ ...link, label: labels.company[i] ?? link.label }));
  const legal = footerNav.legal.map((link, i) => ({ ...link, label: labels.legal[i] ?? link.label }));

  return (
    <SiteFooter
      t={t.footer}
      sections={{ product, company, legal }}
    />
  );
}
