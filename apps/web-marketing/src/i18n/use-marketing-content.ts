'use client';

import { useEffect, useState } from 'react';
import type { Locale } from '@allinall/i18n';
import { getMarketingContent, type MarketingContent } from '@allinall/i18n';

export function useMarketingContent(): MarketingContent {
  const [content, setContent] = useState<MarketingContent>(() => getMarketingContent('ar'));

  useEffect(() => {
    const lang = document.documentElement.lang === 'en' ? 'en' : 'ar';
    setContent(getMarketingContent(lang));
  }, []);

  return content;
}

export function useLocale(): Locale {
  const [locale, setLocale] = useState<Locale>('ar');
  useEffect(() => {
    setLocale(document.documentElement.lang === 'en' ? 'en' : 'ar');
  }, []);
  return locale;
}
