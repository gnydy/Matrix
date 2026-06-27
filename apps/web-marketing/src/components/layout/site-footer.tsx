import Link from 'next/link';
import { site } from '@/lib/content';
import { getActiveSocialLinks } from '@/lib/social';
import { SocialLinks } from '@/components/layout/social-links';
import type { Messages } from '@/i18n/messages';

type LinkItem = { href: string; label: string };

type Props = {
  t: Messages['footer'];
  sections: {
    product: LinkItem[];
    company: LinkItem[];
    legal: LinkItem[];
  };
};

export function SiteFooter({ t, sections }: Props) {
  const social = getActiveSocialLinks();

  return (
    <footer className="mt-8 border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <p className="text-lg font-bold">Matrix</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">{t.tagline}</p>
            <div className="mt-4 space-y-1 text-sm text-muted">
              <p>
                <a
                  href={site.url}
                  className="font-medium text-primary hover:underline"
                  dir="ltr"
                >
                  {site.url.replace(/^https?:\/\//, '')}
                </a>
              </p>
              <p dir="ltr" className="text-end">
                {site.email}
              </p>
              <p dir="ltr" className="text-end">
                {site.phone}
              </p>
            </div>
            {social.length > 0 && (
              <div className="mt-5">
                <p className="mb-2 text-sm font-semibold">{t.follow}</p>
                <SocialLinks links={social} iconSize="sm" />
              </div>
            )}
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold">{t.product}</p>
            <ul className="space-y-2">
              {sections.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold">{t.company}</p>
            <ul className="space-y-2">
              {sections.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold">{t.legal}</p>
            <ul className="space-y-2">
              {sections.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-sm text-muted sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} Matrix Platform. {t.rights}
          </p>
          <p>{site.address}</p>
        </div>
      </div>
    </footer>
  );
}
