const WEAK_SECRETS = new Set([
  'matrix_dev_jwt_change_me',
  'matrix_admin_change_me',
  'changeme',
  'secret',
  'jwt_secret',
]);

export function assertSecureSecretsInProduction(): void {
  if (process.env.NODE_ENV !== 'production') return;

  const jwt = process.env.JWT_SECRET ?? process.env.SESSION_SECRET ?? '';
  if (!jwt || jwt.length < 32 || WEAK_SECRETS.has(jwt)) {
    throw new Error(
      'Production requires JWT_SECRET/SESSION_SECRET — min 32 chars, not a default value.',
    );
  }
}

export function isWeakSecret(value: string | undefined): boolean {
  if (!value) return true;
  if (value.length < 16) return true;
  return WEAK_SECRETS.has(value);
}
