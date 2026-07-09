'use client';

import { withBasePath } from '@/lib/base-path';

export function LogoutButton() {
  async function logout() {
    await fetch(withBasePath('/api/auth/logout'), { method: 'POST' });
    window.location.href = withBasePath('/login');
  }

  return (
    <button type="button" onClick={logout} className="btn-ghost w-full text-danger">
      تسجيل الخروج
    </button>
  );
}
