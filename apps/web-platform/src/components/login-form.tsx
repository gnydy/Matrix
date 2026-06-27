'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { withBasePath } from '@/lib/base-path';

export function LoginForm() {
  const router = useRouter();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError('');

    const data = new FormData(e.currentTarget);
    const res = await fetch(withBasePath('/api/auth/login'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: data.get('email'),
        password: data.get('password'),
      }),
    });

    if (!res.ok) {
      const body = (await res.json().catch(() => ({}))) as { error?: string };
      setError(body.error ?? 'فشل تسجيل الدخول');
      setLoading(false);
      return;
    }

    router.push(withBasePath('/'));
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="mb-1.5 block text-sm font-medium" htmlFor="email">
          البريد
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="field-input"
          dir="ltr"
          defaultValue="admin@matrix.local"
        />
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium" htmlFor="password">
          كلمة المرور
        </label>
        <input id="password" name="password" type="password" required className="field-input" />
      </div>
      {error && <p className="text-sm text-danger">{error}</p>}
      <button type="submit" disabled={loading} className="btn-primary w-full">
        {loading ? 'جاري الدخول...' : 'دخول'}
      </button>
    </form>
  );
}
