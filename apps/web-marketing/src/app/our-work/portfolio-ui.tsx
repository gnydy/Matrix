'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import type { PortfolioProject } from '../../lib/portfolio';
import { getProjectInitials } from '../../lib/portfolio';
import styles from './portfolio.module.css';

type Locale = 'ar' | 'en';
type Theme = 'light' | 'dark';

const copy = {
  ar: {
    eyebrow: 'Portfolio / أعمالنا',
    title: 'أعمال رقمية مصممة لتعرض الثقة وتحوّل الزائر إلى عميل.',
    description:
      'هنا نعرض نماذج من المشاريع التي يمكن تنفيذها: مواقع احترافية، أنظمة ERP، متاجر إلكترونية، لوحات تحكم، وحلول مخصصة للشركات.',
    published: 'مشروع منشور',
    featured: 'مشروع مميز',
    tech: 'تقنية مستخدمة',
    back: 'العودة إلى أعمالنا',
    projectDescription: 'وصف المشروع',
    problem: 'المشكلة',
    solution: 'الحل',
    results: 'النتائج',
    client: 'العميل',
    category: 'التصنيف',
    deliveredAt: 'تاريخ التنفيذ',
    services: 'الخدمات',
    technologies: 'التقنيات',
    openProject: 'فتح المشروع',
    demo: 'مشاهدة Demo',
    caseStudy: 'تحميل Case Study',
  },
  en: {
    eyebrow: 'Portfolio / Our Work',
    title: 'Digital work designed to build trust and convert visitors into leads.',
    description:
      'A selection of projects and concepts across professional websites, ERP systems, e-commerce, dashboards, and custom business solutions.',
    published: 'Published projects',
    featured: 'Featured projects',
    tech: 'Technologies used',
    back: 'Back to Our Work',
    projectDescription: 'Project Description',
    problem: 'Problem',
    solution: 'Solution',
    results: 'Results',
    client: 'Client',
    category: 'Category',
    deliveredAt: 'Delivered At',
    services: 'Services',
    technologies: 'Technologies',
    openProject: 'Open Project',
    demo: 'Watch Demo',
    caseStudy: 'Download Case Study',
  },
};

function readCookie(name: string) {
  if (typeof document === 'undefined') return '';

  const item = document.cookie
    .split('; ')
    .find((row) => row.startsWith(`${name}=`));

  return item ? decodeURIComponent(item.split('=').slice(1).join('=')) : '';
}

function detectLocale(): Locale {
  if (typeof document === 'undefined') return 'ar';

  const sources = [
    document.documentElement.lang,
    readCookie('locale'),
    readCookie('NEXT_LOCALE'),
    readCookie('matrix_locale'),
    readCookie('allinall_locale'),
    window.localStorage.getItem('locale') || '',
    window.localStorage.getItem('lang') || '',
    window.localStorage.getItem('matrix_locale') || '',
  ]
    .join(' ')
    .toLowerCase();

  return sources.includes('en') ? 'en' : 'ar';
}

function detectTheme(): Theme {
  if (typeof document === 'undefined') return 'dark';

  const html = document.documentElement;

  const sources = [
    html.dataset.theme || '',
    html.dataset.mode || '',
    html.className || '',
    readCookie('theme'),
    readCookie('matrix_theme'),
    readCookie('allinall_theme'),
    window.localStorage.getItem('theme') || '',
    window.localStorage.getItem('mode') || '',
    window.localStorage.getItem('matrix_theme') || '',
  ]
    .join(' ')
    .toLowerCase();

  if (sources.includes('light')) return 'light';
  if (sources.includes('dark')) return 'dark';

  return window.matchMedia?.('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

function useSitePreferences() {
  const [locale, setLocale] = useState<Locale>('ar');
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    function sync() {
      setLocale(detectLocale());
      setTheme(detectTheme());
    }

    sync();

    const observer = new MutationObserver(sync);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class', 'data-theme', 'data-mode', 'lang', 'dir'],
    });

    window.addEventListener('storage', sync);
    window.addEventListener('focus', sync);

    const interval = window.setInterval(sync, 700);

    return () => {
      observer.disconnect();
      window.removeEventListener('storage', sync);
      window.removeEventListener('focus', sync);
      window.clearInterval(interval);
    };
  }, []);

  return { locale, theme, isAr: locale === 'ar' };
}

function pick(project: PortfolioProject, ar: keyof PortfolioProject, en: keyof PortfolioProject, locale: Locale) {
  return String(project[locale === 'ar' ? ar : en] || project[ar] || '');
}

export function OurWorkClient({ projects }: { projects: PortfolioProject[] }) {
  const { locale, theme, isAr } = useSitePreferences();
  const t = copy[locale];

  const featured = projects.filter((project) => project.featured).length;
  const technologies = useMemo(
    () => new Set(projects.flatMap((project) => project.technologies)),
    [projects],
  );

  return (
    <main className={styles.page} data-theme={theme} dir={isAr ? 'rtl' : 'ltr'} lang={locale}>
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.eyebrow}>{t.eyebrow}</div>

          <h1 className={styles.title}>{t.title}</h1>
          <p className={styles.description}>{t.description}</p>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <strong>{projects.length}</strong>
              <span>{t.published}</span>
            </div>

            <div className={styles.stat}>
              <strong>{featured}</strong>
              <span>{t.featured}</span>
            </div>

            <div className={styles.stat}>
              <strong>{technologies.size}</strong>
              <span>{t.tech}</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.container}>
        <div className={styles.grid}>
          {projects.map((project) => (
            <Link key={project.id} href={`/our-work/${project.slug}`} className={styles.card}>
              <div className={styles.cover}>
                {project.coverImage ? (
                  <img src={project.coverImage} alt={pick(project, 'title', 'titleEn', locale)} className={styles.coverImage} />
                ) : (
                  <div className={styles.placeholder}>
                    <strong>{pick(project, 'title', 'titleEn', locale)}</strong>
                    <span>{pick(project, 'category', 'categoryEn', locale)}</span>
                  </div>
                )}

                <div className={styles.logo}>
                  {project.logoImage ? (
                    <img src={project.logoImage} alt={project.clientName} className={styles.logoImage} />
                  ) : (
                    getProjectInitials(project.clientNameEn || project.clientName)
                  )}
                </div>
              </div>

              <div className={styles.body}>
                <div className={styles.meta}>
                  <span className={styles.badge}>{pick(project, 'category', 'categoryEn', locale)}</span>
                  <span className={styles.date}>{project.deliveredAt}</span>
                </div>

                <h2 className={styles.cardTitle}>{pick(project, 'title', 'titleEn', locale)}</h2>
                <p className={styles.client}>{locale === 'ar' ? project.clientName : project.clientNameEn || project.clientName}</p>
                <p className={styles.summary}>{pick(project, 'shortDescription', 'shortDescriptionEn', locale)}</p>

                <div className={styles.tags}>
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span key={tech} className={styles.tag}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

export function ProjectDetailsClient({ project }: { project: PortfolioProject }) {
  const { locale, theme, isAr } = useSitePreferences();
  const t = copy[locale];

  const results = locale === 'ar' ? project.results : project.resultsEn;
  const services = locale === 'ar' ? project.services : project.servicesEn;

  return (
    <main className={styles.page} data-theme={theme} dir={isAr ? 'rtl' : 'ltr'} lang={locale}>
      <section className={styles.detailsHero}>
        <div className={styles.container}>
          <Link href="/our-work" className={styles.backLink}>
            {t.back}
          </Link>

          <div className={styles.cover}>
            {project.coverImage ? (
              <img src={project.coverImage} alt={pick(project, 'title', 'titleEn', locale)} className={styles.coverImage} />
            ) : (
              <div className={styles.placeholder}>
                <strong>{pick(project, 'title', 'titleEn', locale)}</strong>
                <span>{pick(project, 'category', 'categoryEn', locale)}</span>
              </div>
            )}

            <div className={styles.logo}>
              {project.logoImage ? (
                <img src={project.logoImage} alt={project.clientName} className={styles.logoImage} />
              ) : (
                getProjectInitials(project.clientNameEn || project.clientName)
              )}
            </div>
          </div>

          <h1 className={styles.title} style={{ marginTop: 28 }}>
            {pick(project, 'title', 'titleEn', locale)}
          </h1>

          <p className={styles.description}>{pick(project, 'shortDescription', 'shortDescriptionEn', locale)}</p>
        </div>
      </section>

      <section className={styles.container}>
        <div className={styles.detailsLayout}>
          <div className={styles.stack}>
            <div className={styles.panel}>
              <h2 className={styles.sectionTitle}>{t.projectDescription}</h2>
              <p className={styles.text}>{pick(project, 'fullDescription', 'fullDescriptionEn', locale)}</p>
            </div>

            <div className={styles.panel}>
              <h2 className={styles.sectionTitle}>{t.problem}</h2>
              <p className={styles.text}>{pick(project, 'problem', 'problemEn', locale)}</p>
            </div>

            <div className={styles.panel}>
              <h2 className={styles.sectionTitle}>{t.solution}</h2>
              <p className={styles.text}>{pick(project, 'solution', 'solutionEn', locale)}</p>
            </div>

            <div className={styles.panel}>
              <h2 className={styles.sectionTitle}>{t.results}</h2>
              <ul className={styles.list}>
                {results.map((result) => (
                  <li key={result}>{result}</li>
                ))}
              </ul>
            </div>
          </div>

          <aside className={styles.side}>
            <div className={styles.panel}>
              <div className={styles.infoRow}>
                <span>{t.client}</span>
                <strong>{locale === 'ar' ? project.clientName : project.clientNameEn || project.clientName}</strong>
              </div>

              <div className={styles.infoRow}>
                <span>{t.category}</span>
                <strong>{pick(project, 'category', 'categoryEn', locale)}</strong>
              </div>

              <div className={styles.infoRow}>
                <span>{t.deliveredAt}</span>
                <strong>{project.deliveredAt}</strong>
              </div>

              <div className={styles.infoRow}>
                <span>{t.services}</span>
                <strong>{services.join(' / ')}</strong>
              </div>
            </div>

            <div className={styles.panel}>
              <h2 className={styles.sectionTitle}>{t.technologies}</h2>

              <div className={styles.tags}>
                {project.technologies.map((tech) => (
                  <span key={tech} className={styles.tag}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {project.liveUrl ? (
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className={styles.linkButton}>
                {t.openProject}
              </a>
            ) : null}

            {project.demoUrl ? (
              <a href={project.demoUrl} target="_blank" rel="noreferrer" className={styles.secondaryButton}>
                {t.demo}
              </a>
            ) : null}

            {project.caseStudyUrl ? (
              <a href={project.caseStudyUrl} target="_blank" rel="noreferrer" className={styles.secondaryButton}>
                {t.caseStudy}
              </a>
            ) : null}
          </aside>
        </div>
      </section>
    </main>
  );
}