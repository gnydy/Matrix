import { ar } from './ar';
import { en } from './en';

export type SiteLocale = 'ar' | 'en';

export const siteCopy = {
  ar,
  en,
} as const;

export function getSiteCopy(locale: SiteLocale) {
  return locale === 'en' ? en : ar;
}

export function getDirection(locale: SiteLocale) {
  return locale === 'en' ? 'ltr' : 'rtl';
}