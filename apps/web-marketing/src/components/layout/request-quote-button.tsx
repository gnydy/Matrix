'use client';

import Link from 'next/link';
import { useSiteSettings } from '../../i18n/site/client';

export function RequestQuoteButton(_props: { variant?: string }) {
  const { locale, dir, isLight } = useSiteSettings();

  const label = locale === 'ar' ? 'اطلب عرض' : 'Request a quote';

  return (
    <Link
      href="/request-system"
      aria-label={label}
      lang={locale}
      dir={dir}
      style={{
        position: 'fixed',
        left: 18,
        bottom: 18,
        zIndex: 80,
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        minHeight: 48,
        padding: '0 16px',
        borderRadius: 999,
        background: '#3b82f6',
        color: 'white',
        textDecoration: 'none',
        fontWeight: 900,
        fontSize: 15,
        boxShadow: isLight
          ? '0 16px 34px rgba(59, 130, 246, 0.32)'
          : '0 16px 34px rgba(59, 130, 246, 0.42)',
        border: '1px solid rgba(255, 255, 255, 0.18)',
      }}
    >
      <span
        aria-hidden="true"
        style={{
          width: 21,
          height: 21,
          borderRadius: 999,
          display: 'grid',
          placeItems: 'center',
          background: '#22c55e',
          color: 'white',
          fontSize: 15,
          lineHeight: 1,
          flexShrink: 0,
        }}
      >
        +
      </span>

      <span>{label}</span>
    </Link>
  );
}

export default RequestQuoteButton;