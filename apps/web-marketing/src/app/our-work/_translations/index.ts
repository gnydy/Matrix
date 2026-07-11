import { ourWorkAr } from './ar';
import { ourWorkEn } from './en';

export type OurWorkLocale = 'ar' | 'en';

export function getOurWorkTranslation(locale: OurWorkLocale) {
  return locale === 'en' ? ourWorkEn : ourWorkAr;
}