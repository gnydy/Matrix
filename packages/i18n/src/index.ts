import { ar } from './marketing/ar';
import { en } from './marketing/en';
import { getMessages, type Locale, type Messages } from './messages';

export type { Locale, Messages };

const marketingContent = { ar, en } as const;

export type MarketingContent = (typeof marketingContent)[Locale];
export type PlanId = (typeof ar.plans)[number]['id'];

export function getMarketingContent(locale: Locale): MarketingContent {
  return marketingContent[locale];
}

export { getMessages };

export function suggestPlanId(moduleCount: number, sizeId: string): PlanId {
  if (moduleCount >= 6 || sizeId === 'enterprise') return 'custom';
  if (moduleCount <= 2) return 'essential';
  if (moduleCount <= 3) return 'starter';
  if (moduleCount <= 5) return 'growth';
  if (moduleCount <= 7) return 'business';
  return 'enterprise';
}

export function getPlanById(id: PlanId, locale: Locale = 'ar') {
  return getMarketingContent(locale).plans.find((p) => p.id === id)!;
}

export { ar, en };
