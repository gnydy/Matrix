'use client';

import { site } from '@/lib/content';
import { trackEvent } from '@/lib/analytics-client';

const contactHref = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent('مرحبًا، أريد التواصل بخصوص Matrix')}`;

type ContactNowButtonProps = {
  variant?: 'header' | 'floating' | 'menu';
  onClick?: () => void;
};

export function ContactNowButton({ variant = 'header', onClick }: ContactNowButtonProps) {
  const base =
    'inline-flex items-center justify-center font-semibold transition min-h-[44px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary';

  const styles = {
    header: `${base} rounded-xl border border-border bg-card px-4 py-2.5 text-sm hover:border-primary/40 hover:text-primary`,
    menu: `${base} w-full rounded-xl border border-border bg-card py-3 text-base hover:border-primary/40`,
    floating: `${base} fixed bottom-6 left-6 z-40 gap-2 rounded-full bg-primary px-5 py-3 text-sm text-white shadow-lg shadow-primary/30 hover:bg-primary-dark sm:bottom-8 sm:left-8`,
  };

  function handleClick() {
    void trackEvent('whatsapp_click', window.location.pathname);
    onClick?.();
  }

  return (
    <a
      href={contactHref}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={styles[variant]}
    >
      {variant === 'floating' && (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.558 4.121 1.528 5.855L0 24l6.336-1.662A11.96 11.96 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.78 9.78 0 0 1-4.986-1.364l-.357-.212-3.756.986 1.002-3.66-.233-.375A9.818 9.818 0 0 1 2.182 12c0-5.422 4.396-9.818 9.818-9.818S21.818 6.578 21.818 12 17.422 21.818 12 21.818z" />
        </svg>
      )}
      تواصل الآن
    </a>
  );
}
