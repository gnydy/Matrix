'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { withBasePath } from '@/lib/base-path';
import { adminRoleLabels } from '@/lib/labels';

type User = {
  id: string;
  email: string;
  name: string;
  role: string;
  active: boolean;
};

type Props = { initialUsers: User[] };

const roles = Object.keys(adminRoleLabels);

export function UsersAdminPanel({ initialUsers }: Props) {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState('sales');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function addUser(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');
    const res = await fetch(withBasePath('/api/users'), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, name, role }),
    });
    const data = (await res.json()) as { error?: string };
    setLoading(false);
    if (!res.ok) {
      setError(data.error ?? 'فشل الإضافة');
      return;
    }
    setEmail('');
    setName('');
    router.refresh();
  }

  return (
    <form onSubmit={addUser} className="stat-card grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <div>
        <label className="mb-1.5 block text-sm font-medium">الاسم</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="field-input"
          required
        />
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium">البريد</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="field-input"
          dir="ltr"
          required
        />
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium">الدور</label>
        <select value={role} onChange={(e) => setRole(e.target.value)} className="field-input">
          {roles.map((r) => (
            <option key={r} value={r}>
              {adminRoleLabels[r]}
            </option>
          ))}
        </select>
      </div>
      <div className="flex items-end">
        <button type="submit" disabled={loading} className="btn-primary w-full">
          {loading ? '…' : 'إضافة مستخدم'}
        </button>
      </div>
      {error && <p className="text-sm text-warning sm:col-span-2 lg:col-span-4">{error}</p>}
      {initialUsers.length <= 1 && (
        <p className="text-xs text-muted sm:col-span-2 lg:col-span-4">
          المستخدمون المضافون يظهرون للتخطيط — ربط الدخول الكامل يأتي مع Auth API (المرحلة A).
        </p>
      )}
    </form>
  );
}
