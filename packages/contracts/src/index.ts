export type Locale = 'ar' | 'en';

export type ApiOk<T> = { ok: true; data: T };
export type ApiErr = { ok: false; error: string };
export type ApiResponse<T> = ApiOk<T> | ApiErr;

export type AuthUser = {
  id: string;
  email: string;
  name: string;
  tenantId: string | null;
  roles: string[];
  permissions: string[];
};

export type LoginResponse = {
  token: string;
  user: AuthUser;
};

export type LeadSource =
  | 'request'
  | 'contact'
  | 'calculator'
  | 'whatsapp';

export type CreateLeadInput = {
  sessionId?: string | null;
  source?: LeadSource;
  name: string;
  company?: string | null;
  phone?: string | null;
  email?: string | null;
  requestType?: string | null;
  planId?: string | null;
  modules?: string[];
  message?: string | null;
};

export type CreateLeadResult = {
  id: string;
  ref: string;
};

export const OWNER_PERMISSIONS = [
  'users:read',
  'users:write',
  'roles:read',
  'leads:read',
  'leads:write',
  'customers:read',
  'customers:write',
  'quotes:read',
  'quotes:write',
  'projects:read',
  'projects:write',
  'payments:read',
  'payments:write',
  'settings:read',
  'settings:write',
  'audit:read',
] as const;

export type Permission = (typeof OWNER_PERMISSIONS)[number];
