import type { Locale } from '@allinall/i18n';
import { getMarketingContent, getPlanById, suggestPlanId, type PlanId } from '@allinall/i18n';

export type { PlanId };

export function getContent(locale: Locale) {
  return getMarketingContent(locale);
}

/** Default Arabic exports for metadata / legacy imports */
const ar = getMarketingContent('ar');
export const site = ar.site;
export const erpModules = ar.erpModules;
export const services = ar.services;
export const industries = ar.industries;
export const plans = ar.plans;
export const planComparison = ar.planComparison;
export const requestTypes = ar.requestTypes;
export const faqItems = ar.faqItems;
export const workflowSteps = ar.workflowSteps;
export const platformHighlights = ar.platformHighlights;

export { suggestPlanId, getPlanById };
