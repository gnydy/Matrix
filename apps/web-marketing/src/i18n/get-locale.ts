import { cookies } from 'next/headers';
import { defaultLocale, LOCALE_COOKIE, type Locale } from './config';

export async function getLocale(): Promise<Locale> {
  const value = (await cookies()).get(LOCALE_COOKIE)?.value;
  return value === 'en' ? 'en' : defaultLocale;
}
