'use client';

import { useEffect, useState } from 'react';
import { getDirection, getSiteCopy, type SiteLocale } from './index';

export type SiteTheme = 'light' | 'dark';

function readCookie(name: string) {
  if (typeof document === 'undefined') return '';

  const row = document.cookie
    .split('; ')
    .find((item) => item.startsWith(`${name}=`));

  return row ? decodeURIComponent(row.split('=').slice(1).join('=')) : '';
}

export function readSiteLocale(): SiteLocale {
  if (typeof window === 'undefined') return 'ar';

  const value = [
    document.documentElement.lang,
    readCookie('locale'),
    readCookie('NEXT_LOCALE'),
    readCookie('matrix_locale'),
    window.localStorage.getItem('locale') || '',
    window.localStorage.getItem('lang') || '',
    window.localStorage.getItem('matrix_locale') || '',
  ]
    .join(' ')
    .toLowerCase();

  return value.includes('en') ? 'en' : 'ar';
}

export function readSiteTheme(): SiteTheme {
  if (typeof window === 'undefined') return 'dark';

  const value = [
    document.documentElement.dataset.theme || '',
    document.documentElement.className || '',
    readCookie('theme'),
    readCookie('matrix_theme'),
    window.localStorage.getItem('theme') || '',
    window.localStorage.getItem('mode') || '',
    window.localStorage.getItem('matrix_theme') || '',
  ]
    .join(' ')
    .toLowerCase();

  return value.includes('light') ? 'light' : 'dark';
}

export function useSiteSettings() {
  const [locale, setLocale] = useState<SiteLocale>('ar');
  const [theme, setTheme] = useState<SiteTheme>('dark');

  useEffect(() => {
    function sync() {
      setLocale(readSiteLocale());
      setTheme(readSiteTheme());
    }

    sync();

    const observer = new MutationObserver(sync);

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['lang', 'dir', 'class', 'data-theme'],
    });

    window.addEventListener('storage', sync);
    window.addEventListener('focus', sync);
    window.addEventListener('matrix:locale-change', sync);
    window.addEventListener('matrix:theme-change', sync);

    const timer = window.setInterval(sync, 500);

    return () => {
      observer.disconnect();
      window.removeEventListener('storage', sync);
      window.removeEventListener('focus', sync);
      window.removeEventListener('matrix:locale-change', sync);
      window.removeEventListener('matrix:theme-change', sync);
      window.clearInterval(timer);
    };
  }, []);

  return {
    locale,
    theme,
    isLight: theme === 'light',
    dir: getDirection(locale),
    copy: getSiteCopy(locale),
  };
}