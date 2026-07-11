'use client';

import { FormEvent, useState } from 'react';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError('');
    setLoading(true);

    try {
      const response = await fetch('/erp/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.trim(),
          password,
        }),
      });

      const json = await response.json().catch(() => null);

      if (!response.ok || json?.ok === false) {
        throw new Error(json?.error || json?.message || 'بيانات الدخول غير صحيحة');
      }

      window.location.assign('/erp');
    } catch (e) {
      setError(e instanceof Error ? e.message : 'فشل تسجيل الدخول');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'grid',
        placeItems: 'center',
        background: '#020617',
        color: '#e5e7eb',
        padding: 24,
      }}
    >
      <form
        onSubmit={submit}
        style={{
          width: '100%',
          maxWidth: 420,
          display: 'grid',
          gap: 16,
          padding: 28,
          border: '1px solid #334155',
          borderRadius: 20,
          background: '#0f172a',
        }}
      >
        <div>
          <h1 style={{ fontSize: 28, fontWeight: 800, marginBottom: 8 }}>
            تسجيل الدخول
          </h1>
          <p style={{ color: '#94a3b8', margin: 0 }}>
            أدخل البريد وكلمة المرور فقط. النظام سيحدد صلاحياتك تلقائيًا.
          </p>
        </div>

        {error ? (
          <div
            style={{
              padding: 12,
              borderRadius: 12,
              border: '1px solid #ef4444',
              color: '#fecaca',
              background: '#7f1d1d',
            }}
          >
            {error}
          </div>
        ) : null}

        <label style={{ display: 'grid', gap: 8 }}>
          <span>البريد الإلكتروني</span>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            autoComplete="email"
            placeholder="admin@matrix.local"
            style={{
              padding: 12,
              borderRadius: 12,
              border: '1px solid #475569',
              background: '#020617',
              color: '#e5e7eb',
            }}
          />
        </label>

        <label style={{ display: 'grid', gap: 8 }}>
          <span>كلمة المرور</span>

          <div style={{ display: 'flex', gap: 8 }}>
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              autoComplete="current-password"
              placeholder="كلمة المرور"
              style={{
                flex: 1,
                padding: 12,
                borderRadius: 12,
                border: '1px solid #475569',
                background: '#020617',
                color: '#e5e7eb',
              }}
            />

            <button
              type="button"
              onClick={() => setShowPassword((value) => !value)}
              style={{
                padding: '0 12px',
                borderRadius: 12,
                border: '1px solid #475569',
                background: '#111827',
                color: '#e5e7eb',
                cursor: 'pointer',
              }}
            >
              {showPassword ? 'إخفاء' : 'إظهار'}
            </button>
          </div>
        </label>

        <button
          type="submit"
          disabled={loading}
          style={{
            padding: 14,
            borderRadius: 12,
            border: 0,
            background: loading ? '#475569' : '#2563eb',
            color: 'white',
            fontWeight: 700,
            cursor: loading ? 'not-allowed' : 'pointer',
          }}
        >
          {loading ? 'جاري الدخول...' : 'دخول'}
        </button>
      </form>
    </main>
  );
}

export default LoginForm;