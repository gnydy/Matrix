import type { Locale } from './config';
import { getMessages as getPkgMessages } from '@allinall/i18n';

export type Messages = ReturnType<typeof getPkgMessages>;

export function getMessages(locale: Locale): Messages {
  return getPkgMessages(locale);
}
