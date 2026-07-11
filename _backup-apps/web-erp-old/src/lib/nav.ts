import { ERP_MODULES } from '@allinall/erp';

export const erpNav = ERP_MODULES.map((m) => ({
  href: m.path,
  label: m.labelAr,
  key: m.key,
}));
