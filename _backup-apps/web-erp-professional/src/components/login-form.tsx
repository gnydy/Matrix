'use client';

import { FormEvent, useState } from 'react';

export function LoginForm() {
  const [email, setEmail] = useState('admin@matrix.local');
  const [password, setPassword] = useState('Admin@2030');
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
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), password }),
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
    <main className="login-screen">
      <section className="login-card">
        <div className="login-intro">
          <p className="eyebrow">Matrix ERP Professional</p>
          <h1>واجهة ERP مكتبية احترافية لإدارة شركتك بالكامل</h1>
          <p>
            النسخة تدعم الدخول الحقيقي عبر API. وفي بيئة التطوير، إذا كان الـ API غير جاهز، يمكن الدخول التجريبي بنفس بيانات الأدمن حتى تختبر الواجهة.
          </p>
          <div className="compact-list" style={{ marginTop: 24 }}>
            <span>HR & Payroll</span>
            <span>Financial Accounting</span>
            <span>Supply Chain</span>
            <span>Sales & CRM</span>
          </div>
        </div>

        <form onSubmit={submit} className="login-form-panel">
          <div>
            <p className="eyebrow">تسجيل الدخول</p>
            <h2 style={{ margin: 0, fontSize: 26 }}>دخول النظام</h2>
          </div>

          {error ? <div className="alert-danger">{error}</div> : null}

          <label className="form-label">
            البريد الإلكتروني
            <input className="field-input" type="email" value={email} onChange={(event) => setEmail(event.target.value)} required autoComplete="email" />
          </label>

          <label className="form-label">
            كلمة المرور
            <div style={{ display: 'flex', gap: 8 }}>
              <input className="field-input" type={showPassword ? 'text' : 'password'} value={password} onChange={(event) => setPassword(event.target.value)} required autoComplete="current-password" />
              <button className="btn-secondary" type="button" onClick={() => setShowPassword((value) => !value)}>
                {showPassword ? 'إخفاء' : 'إظهار'}
              </button>
            </div>
          </label>

          <button className="btn-primary" type="submit" disabled={loading}>
            {loading ? 'جاري الدخول...' : 'دخول إلى ERP'}
          </button>

          <p style={{ margin: 0, color: '#94a3b8', lineHeight: 1.7, fontSize: 13 }}>
            بيانات التطوير: admin@matrix.local / Admin@2030
          </p>
        </form>
      </section>
    </main>
  );
}

export default LoginForm;
