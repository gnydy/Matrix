import type { Metadata } from 'next';
import { PageHero } from '@/components/ui/page-hero';
import { Section } from '@/components/ui/section';
import { getLocale } from '@/i18n/get-locale';
import { getContent } from '@/lib/content';

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const meta = getContent(locale).pages.terms.meta;
  return { title: meta.title, description: meta.description };
}

export default async function TermsPage() {
  const locale = await getLocale();
  const c = getContent(locale);
  const p = c.pages.terms;

  return (
    <>
      <PageHero title={p.hero.title} compact />
      <Section>
        <article className="prose-legal mx-auto max-w-3xl">
          <p className="text-sm text-muted mb-8">{p.lastUpdated}</p>

          {p.sections.map((section) => (
            <div key={section.title}>
              <h2>{section.title}</h2>
              {'body' in section &&
                (section.body === null ? (
                  <p>
                    {c.site.email} · {c.site.phone}
                  </p>
                ) : (
                  <p>{section.body}</p>
                ))}
              {'bullets' in section && section.bullets && (
                <ul>
                  {section.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </article>
      </Section>
    </>
  );
}
