import { ourWorkAr } from './our-work.ar';
import { ourWorkEn } from './our-work.en';

export type OurWorkLocale = 'ar' | 'en';

export function getOurWorkCopy(locale: OurWorkLocale) {
  return locale === 'en' ? ourWorkEn : ourWorkAr;
}

export function getOurWorkProject(locale: OurWorkLocale, slug: string) {
  return getOurWorkCopy(locale).projects.find((project) => project.slug === slug);
}