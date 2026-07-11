export type ResourceAction = 'read' | 'create' | 'update' | 'delete' | 'hardDelete';

const full = new Set(['customers','leads','orders','quotes','projects','payments','transactions','templates','subscriptions','tickets','settings','users','audit']);
const scopes: Record<string, Set<string>> = {
  owner: full,
  admin: full,
  sales: new Set(['customers','leads','orders','quotes','projects','templates']),
  support: new Set(['customers','projects','tickets']),
  developer: new Set(['projects','templates','tickets']),
  project_manager: new Set(['customers','orders','quotes','projects','tickets']),
  accountant: new Set(['customers','quotes','payments','transactions','subscriptions']),
  hr_manager: new Set(['users']),
  auditor: full,
  viewer: new Set<string>(),
};

export function canAccessResource(role: string, resource: string, action: ResourceAction): boolean {
  if (action === 'hardDelete') return role === 'owner';
  if (role === 'auditor' && action !== 'read') return false;
  if (role === 'viewer') return action === 'read' && resource === 'overview';
  if (role === 'admin' && resource === 'users' && action === 'delete') return false;
  return scopes[role]?.has(resource) ?? false;
}
