
'use client';

import { FormEvent, useEffect, useMemo, useState } from 'react';
import { erpApi, field, money, num } from './erp-api';

type Account = {
  id: string;
  code?: string | null;
  name: string;
  type?: string | null;
  isActive?: boolean | null;
};

type JournalLine = {
  id?: string;
  debit?: string | number | null;
  credit?: string | number | null;
  memo?: string | null;
  account?: Account | null;
};

type JournalEntry = {
  id: string;
  ref?: string | null;
  memo?: string | null;
  status?: string | null;
  createdAt?: string | null;
  postedAt?: string | null;
  lines?: JournalLine[];
};

function accountLabel(account: Account) {
  return [account.code, account.name].filter(Boolean).join(' - ');
}

function entryDebit(entry: JournalEntry) {
  return (entry.lines ?? []).reduce((sum, line) => sum + Number(line.debit ?? 0), 0);
}

function entryCredit(entry: JournalEntry) {
  return (entry.lines ?? []).reduce((sum, line) => sum + Number(line.credit ?? 0), 0);
}

export function AccountingModuleClient() {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [entries, setEntries] = useState<JournalEntry[]>([]);
  const [showEntryForm, setShowEntryForm] = useState(false);

  const [debitAccountId, setDebitAccountId] = useState('');
  const [creditAccountId, setCreditAccountId] = useState('');
  const [amount, setAmount] = useState('');

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  async function load() {
    setLoading(true);
    setError('');

    try {
      const [accountRows, entryRows] = await Promise.all([
        erpApi<Account[]>('accounting/accounts'),
        erpApi<JournalEntry[]>('accounting/entries').catch(() => []),
      ]);

      setAccounts(accountRows);
      setEntries(entryRows);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'تعذر تحميل بيانات الحسابات');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    void load();
  }, []);

  const totals = useMemo(() => {
    const debit = entries.reduce((sum, entry) => sum + entryDebit(entry), 0);
    const credit = entries.reduce((sum, entry) => sum + entryCredit(entry), 0);

    return { debit, credit, difference: debit - credit };
  }, [entries]);

  async function addJournalEntry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formElement = event.currentTarget;
    const form = new FormData(formElement);

    const value = num(form, 'amount');
    const debitId = field(form, 'debitAccountId');
    const creditId = field(form, 'creditAccountId');
    const memo = field(form, 'memo');

    if (!debitId) {
      setError('اختر الحساب المدين');
      return;
    }

    if (!creditId) {
      setError('اختر الحساب الدائن');
      return;
    }

    if (debitId === creditId) {
      setError('لا يمكن أن يكون الحساب المدين هو نفس الحساب الدائن');
      return;
    }

    if (!value || value <= 0) {
      setError('أدخل مبلغًا صحيحًا');
      return;
    }

    setSaving(true);
    setMessage('');
    setError('');

    try {
      await erpApi('accounting/entries', {
        method: 'POST',
        body: JSON.stringify({
          memo: memo || undefined,
          lines: [
            {
              accountId: debitId,
              debit: value,
              credit: 0,
              memo: memo || undefined,
            },
            {
              accountId: creditId,
              debit: 0,
              credit: value,
              memo: memo || undefined,
            },
          ],
        }),
      });

      formElement.reset();
      setDebitAccountId('');
      setCreditAccountId('');
      setAmount('');
      setShowEntryForm(false);
      setMessage('تم حفظ القيد اليومي');
      await load();
    } catch (e) {
      setError(e instanceof Error ? e.message : 'تعذر حفظ القيد');
    } finally {
      setSaving(false);
    }
  }

  return (
    <div style={{ display: 'grid', gap: 24 }}>
      <section style={{ padding: 24, border: '1px solid #334155', borderRadius: 16, background: '#111827' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
          <div>
            <h1 style={{ fontSize: 28, fontWeight: 800, marginBottom: 8 }}>الحسابات</h1>
            <p style={{ color: '#cbd5e1', margin: 0 }}>
              إدارة دليل الحسابات والقيود اليومية ومراجعة المدين والدائن.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setShowEntryForm((value) => !value)}
            style={{ padding: '12px 16px', borderRadius: 12, border: 0, background: '#2563eb', color: 'white', fontWeight: 700, cursor: 'pointer' }}
          >
            {showEntryForm ? 'إغلاق القيد' : 'إضافة قيد يومية'}
          </button>
        </div>

        {loading ? <p style={{ marginTop: 16 }}>جاري تحميل الحسابات...</p> : null}
        {message ? <p style={{ marginTop: 16, color: '#22c55e' }}>{message}</p> : null}
        {error ? <p style={{ marginTop: 16, color: '#ef4444' }}>{error}</p> : null}

        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 16 }}>
          <strong>الحسابات: {accounts.length}</strong>
          <strong>القيود: {entries.length}</strong>
          <strong>إجمالي المدين: {money(totals.debit)}</strong>
          <strong>إجمالي الدائن: {money(totals.credit)}</strong>
          <strong style={{ color: totals.difference === 0 ? '#22c55e' : '#ef4444' }}>
            الفرق: {money(totals.difference)}
          </strong>
        </div>
      </section>

      {showEntryForm ? (
        <form onSubmit={addJournalEntry} style={{ padding: 24, border: '1px solid #334155', borderRadius: 16, background: '#111827' }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8 }}>إضافة قيد يومية</h2>

          <p style={{ color: '#94a3b8' }}>
            القيد يجب أن يكون متزنًا: نفس المبلغ في الجانب المدين والجانب الدائن.
          </p>

          <div style={{ display: 'grid', gap: 12, maxWidth: 620 }}>
            <select
              name="debitAccountId"
              required
              value={debitAccountId}
              onChange={(event) => setDebitAccountId(event.target.value)}
              style={{ padding: 12 }}
            >
              <option value="">اختر الحساب المدين</option>
              {accounts.map((account) => (
                <option key={account.id} value={account.id}>
                  {accountLabel(account)}
                </option>
              ))}
            </select>

            <select
              name="creditAccountId"
              required
              value={creditAccountId}
              onChange={(event) => setCreditAccountId(event.target.value)}
              style={{ padding: 12 }}
            >
              <option value="">اختر الحساب الدائن</option>
              {accounts.map((account) => (
                <option key={account.id} value={account.id}>
                  {accountLabel(account)}
                </option>
              ))}
            </select>

            <input
              name="amount"
              type="number"
              min="0"
              required
              value={amount}
              onChange={(event) => setAmount(event.target.value)}
              placeholder="المبلغ"
              style={{ padding: 12 }}
            />

            <input name="memo" placeholder="البيان مثال: تحصيل من عميل / شراء بضاعة / مصروف نقل" style={{ padding: 12 }} />

            <div style={{ padding: 16, border: '1px solid #475569', borderRadius: 12, background: '#0f172a' }}>
              <strong>معاينة القيد</strong>
              <div style={{ color: '#94a3b8', marginTop: 8 }}>
                مدين: {money(amount)} · دائن: {money(amount)}
              </div>
            </div>

            <button disabled={saving} style={{ padding: 12 }}>
              {saving ? 'جاري الحفظ...' : 'حفظ القيد'}
            </button>
          </div>
        </form>
      ) : null}

      <section style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}>
        <div style={{ padding: 24, border: '1px solid #334155', borderRadius: 16, background: '#111827' }}>
          <h2>دليل الحسابات</h2>

          <div style={{ display: 'grid', gap: 8, marginTop: 16 }}>
            {accounts.map((account) => (
              <div key={account.id} style={{ padding: 12, border: '1px solid #475569', borderRadius: 12 }}>
                <strong>{accountLabel(account)}</strong>
                <div style={{ color: '#94a3b8' }}>
                  النوع: {account.type || 'غير محدد'} · الحالة: {account.isActive === false ? 'موقوف' : 'نشط'}
                </div>
              </div>
            ))}

            {!accounts.length ? <p style={{ color: '#94a3b8' }}>لا توجد حسابات مسجلة.</p> : null}
          </div>
        </div>

        <div style={{ padding: 24, border: '1px solid #334155', borderRadius: 16, background: '#111827' }}>
          <h2>آخر القيود</h2>

          <div style={{ display: 'grid', gap: 8, marginTop: 16 }}>
            {entries.map((entry) => (
              <div key={entry.id} style={{ padding: 12, border: '1px solid #475569', borderRadius: 12 }}>
                <strong>{entry.ref || entry.id}</strong>
                <div style={{ color: '#94a3b8' }}>
                  {entry.memo || 'بدون بيان'} · الحالة: {entry.status || 'مسودة'}
                </div>
                <div style={{ color: '#cbd5e1', marginTop: 6 }}>
                  مدين: {money(entryDebit(entry))} · دائن: {money(entryCredit(entry))}
                </div>

                {entry.lines?.length ? (
                  <ul style={{ marginTop: 8 }}>
                    {entry.lines.map((line, index) => (
                      <li key={line.id || index}>
                        {line.account?.code || ''} {line.account?.name || 'حساب'} — مدين {money(line.debit)} — دائن {money(line.credit)}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}

            {!entries.length ? <p style={{ color: '#94a3b8' }}>لا توجد قيود مسجلة.</p> : null}
          </div>
        </div>
      </section>
    </div>
  );
}
