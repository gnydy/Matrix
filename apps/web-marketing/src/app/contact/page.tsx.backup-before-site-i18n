import type { Metadata } from 'next';
import { ContactForm, ContactInfo } from '@/components/contact/contact-form';
import { PageHero } from '@/components/ui/page-hero';
import { getLocale } from '@/i18n/get-locale';
import { getContent } from '@/lib/content';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const meta = getContent(locale).pages.contact.meta;
  return { title: meta.title, description: meta.description };
}

export default async function ContactPage() {
  const locale = await getLocale();
  const p = getContent(locale).pages.contact;

  return (
    <>
      <PageHero title={p.hero.title} subtitle={p.hero.subtitle} compact />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <ContactInfo />
          </div>
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}
