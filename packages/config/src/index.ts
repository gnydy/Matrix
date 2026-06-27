import { assertSecureSecretsInProduction } from '@allinall/security';

export function requireEnv(name: string, fallback?: string): string {
  const value = process.env[name] ?? fallback;
  if (!value) throw new Error(`Missing required env: ${name}`);
  return value;
}

export function getApiPort(): number {
  return Number(process.env.API_PORT ?? process.env.PORT ?? 4000);
}

export function getJwtSecret(): string {
  assertSecureSecretsInProduction();
  return requireEnv('JWT_SECRET', process.env.SESSION_SECRET ?? 'matrix_dev_jwt_change_me');
}

export function getDatabaseUrl(): string {
  return requireEnv('DATABASE_URL', 'file:./data/matrix.db');
}

export function getCorsOrigins(): string[] {
  const raw = process.env.CORS_ORIGINS;
  if (raw) return raw.split(',').map((s: string) => s.trim()).filter(Boolean);
  return [
    'http://127.0.0.1:3000',
    'http://localhost:3000',
    'http://127.0.0.1:3001',
    'http://localhost:3001',
    'http://127.0.0.1:8080',
    'http://localhost:8080',
  ];
}
