'use client';

import { useRouter } from 'next/navigation';
import { LOCALE_COOKIE, type Locale } from '@/i18n/config';

type Props = {
  locale: Locale;
  label: string;
};

export function LanguageSwitcher({ locale, label }: Props) {
  const router = useRouter();

  function toggle() {
    const next: Locale = locale === 'ar' ? 'en' : 'ar';
    document.cookie = `${LOCALE_COOKIE}=${next};path=/;max-age=31536000;SameSite=Lax`;
    router.refresh();
  }

  return (
    <button
      type="button"
      onClick={toggle}
      className="min-h-[44px] rounded-lg border border-border px-3 py-2 text-sm font-medium text-muted transition hover:bg-background hover:text-foreground"
      aria-label={label}
    >
      {label}
    </button>
  );
}
