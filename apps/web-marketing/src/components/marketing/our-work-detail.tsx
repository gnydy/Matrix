'use client';

import Image from 'next/image';
import Link from 'next/link';
import { getSiteCopy, type SiteLocale } from '../../i18n/site';
import { useSiteSettings } from '../../i18n/site/client';

type Project = {
  slug: string;
  title: string;
  client: string;
  category: string;
  logoUrl?: string;
  description: string;
  overview?: string;
  logoDescription?: string;
  challenge?: string;
  solution?: string;
  delivered?: string[];
  visualDirection?: string[];
  result?: string;
};

function palette(isLight: boolean) {
  return {
    bg: isLight ? '#f8fafc' : '#020617',
    card: isLight ? '#ffffff' : '#0f172a',
    title: isLight ? '#0f172a' : '#f8fafc',
    text: isLight ? '#334155' : '#cbd5e1',
    muted: isLight ? '#64748b' : '#94a3b8',
    border: isLight ? '#e2e8f0' : 'rgba(148, 163, 184, 0.18)',
    soft: isLight ? '#eff6ff' : 'rgba(37, 99, 235, 0.12)',
  };
}

export function OurWorkDetail({ slug }: { slug: string }) {
  const { locale, dir, isLight } = useSiteSettings();
  const copy = getSiteCopy(locale as SiteLocale);
  const c = palette(isLight);

  const projects = copy.ourWork.projects as Project[];
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <main
        lang={locale}
        dir={dir}
        style={{
          minHeight: '100vh',
          background: c.bg,
          color: c.title,
          padding: '90px 0',
        }}
      >
        <div style={{ width: 'min(960px, calc(100% - 32px))', margin: '0 auto' }}>
          <h1>{locale === 'ar' ? 'المشروع غير موجود' : 'Project not found'}</h1>
          <Link href="/our-work" style={{ color: '#3b82f6', fontWeight: 900 }}>
            {locale === 'ar' ? 'العودة إلى أعمالنا' : 'Back to Our Work'}
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main
      lang={locale}
      dir={dir}
      style={{
        minHeight: '100vh',
        background: isLight
          ? 'linear-gradient(180deg, #f8fafc 0%, #eef4ff 100%)'
          : 'radial-gradient(circle at top right, rgba(234, 179, 8, 0.14), transparent 34rem), #020617',
        color: c.text,
        padding: '86px 0',
      }}
    >
      <div style={{ width: 'min(1160px, calc(100% - 32px))', margin: '0 auto' }}>
        <Link
          href="/our-work"
          style={{
            display: 'inline-flex',
            marginBottom: 24,
            color: '#3b82f6',
            textDecoration: 'none',
            fontWeight: 900,
          }}
        >
          {locale === 'ar' ? '← العودة إلى أعمالنا' : '← Back to Our Work'}
        </Link>

        <section
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.2fr) minmax(280px, 0.8fr)',
            gap: 24,
            alignItems: 'stretch',
          }}
        >
          <div
            style={{
              padding: 30,
              borderRadius: 32,
              background: c.card,
              border: `1px solid ${c.border}`,
            }}
          >
            <span
              style={{
                display: 'inline-flex',
                padding: '8px 13px',
                borderRadius: 999,
                background: c.soft,
                color: '#3b82f6',
                fontWeight: 950,
              }}
            >
              {project.category}
            </span>

            <h1
              style={{
                margin: '18px 0 0',
                color: c.title,
                fontSize: 'clamp(38px, 6vw, 72px)',
                lineHeight: 1.05,
                letterSpacing: '-0.06em',
              }}
            >
              {project.title}
            </h1>

            <p style={{ color: c.muted, fontSize: 18, lineHeight: 1.9 }}>
              {project.description}
            </p>

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 10,
                marginTop: 18,
              }}
            >
              <Info label={locale === 'ar' ? 'العميل' : 'Client'} value={project.client} />
              <Info label={locale === 'ar' ? 'النوع' : 'Category'} value={project.category} />
            </div>
          </div>

          <div
            style={{
              padding: 24,
              borderRadius: 32,
              background: '#050505',
              border: '1px solid rgba(234, 179, 8, 0.22)',
              display: 'grid',
              placeItems: 'center',
              minHeight: 360,
              overflow: 'hidden',
            }}
          >
            {project.logoUrl ? (
              <Image
                src={project.logoUrl}
                alt={`${project.title} logo`}
                width={520}
                height={520}
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: 420,
                  objectFit: 'contain',
                  borderRadius: 24,
                }}
                priority
              />
            ) : (
              <strong style={{ color: '#f8fafc' }}>{project.title}</strong>
            )}
          </div>
        </section>

        <div
          style={{
            display: 'grid',
            gap: 22,
            marginTop: 26,
          }}
        >
          <TextBlock
            title={locale === 'ar' ? 'نظرة على المشروع' : 'Project overview'}
            text={project.overview ?? project.description}
            isLight={isLight}
          />

          {project.logoDescription ? (
            <TextBlock
              title={locale === 'ar' ? 'كيف كانت هوية اللوجو؟' : 'Logo identity'}
              text={project.logoDescription}
              isLight={isLight}
              highlight
            />
          ) : null}

          {project.challenge ? (
            <TextBlock
              title={locale === 'ar' ? 'التحدي' : 'The challenge'}
              text={project.challenge}
              isLight={isLight}
            />
          ) : null}

          {project.solution ? (
            <TextBlock
              title={locale === 'ar' ? 'الحل' : 'The solution'}
              text={project.solution}
              isLight={isLight}
            />
          ) : null}

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 18,
            }}
          >
            {project.delivered?.length ? (
              <ListBlock
                title={locale === 'ar' ? 'ما الذي يمكن عرضه في المشروع؟' : 'What can be shown in this project?'}
                items={project.delivered}
                isLight={isLight}
              />
            ) : null}

            {project.visualDirection?.length ? (
              <ListBlock
                title={locale === 'ar' ? 'الاتجاه البصري' : 'Visual direction'}
                items={project.visualDirection}
                isLight={isLight}
              />
            ) : null}
          </div>

          {project.result ? (
            <TextBlock
              title={locale === 'ar' ? 'النتيجة المستهدفة' : 'Target result'}
              text={project.result}
              isLight={isLight}
              highlight
            />
          ) : null}

          <div
            style={{
              marginTop: 8,
              padding: 30,
              borderRadius: 30,
              background: isLight
                ? 'linear-gradient(135deg, #ffffff, #eff6ff)'
                : 'linear-gradient(135deg, #0f172a, #1e3a8a)',
              border: `1px solid ${c.border}`,
              textAlign: 'center',
            }}
          >
            <h2 style={{ margin: 0, color: c.title, fontSize: 34 }}>
              {locale === 'ar'
                ? 'هل تريد عرض مشروع مشابه لبراندك؟'
                : 'Need a similar presentation for your brand?'}
            </h2>

            <p style={{ color: c.muted, lineHeight: 1.9 }}>
              {locale === 'ar'
                ? 'اطلب عرض الآن، وسنقترح عليك الشكل الأنسب حسب طبيعة شركتك وهويتك.'
                : 'Request a quote now, and we will suggest the right direction for your company and identity.'}
            </p>

            <Link
              href="/request-system"
              style={{
                minHeight: 52,
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0 24px',
                borderRadius: 15,
                background: '#3b82f6',
                color: 'white',
                textDecoration: 'none',
                fontWeight: 950,
              }}
            >
              {locale === 'ar' ? 'اطلب عرض' : 'Request a quote'}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <span
      style={{
        display: 'inline-flex',
        gap: 6,
        padding: '10px 13px',
        borderRadius: 999,
        background: 'rgba(59, 130, 246, 0.12)',
        color: '#3b82f6',
        fontWeight: 900,
      }}
    >
      <span>{label}:</span>
      <span>{value}</span>
    </span>
  );
}

function TextBlock({
  title,
  text,
  isLight,
  highlight = false,
}: {
  title: string;
  text: string;
  isLight: boolean;
  highlight?: boolean;
}) {
  const c = palette(isLight);

  return (
    <section
      style={{
        padding: 28,
        borderRadius: 28,
        background: highlight ? c.soft : c.card,
        border: `1px solid ${c.border}`,
      }}
    >
      <h2 style={{ margin: 0, color: c.title, fontSize: 32 }}>{title}</h2>
      <p style={{ margin: '14px 0 0', color: c.muted, lineHeight: 2, fontSize: 17 }}>
        {text}
      </p>
    </section>
  );
}

function ListBlock({
  title,
  items,
  isLight,
}: {
  title: string;
  items: string[];
  isLight: boolean;
}) {
  const c = palette(isLight);

  return (
    <section
      style={{
        padding: 28,
        borderRadius: 28,
        background: c.card,
        border: `1px solid ${c.border}`,
      }}
    >
      <h2 style={{ margin: 0, color: c.title, fontSize: 28 }}>{title}</h2>
      <ul style={{ margin: '16px 0 0', paddingInlineStart: 22, color: c.muted, lineHeight: 2 }}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default OurWorkDetail;