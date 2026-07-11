
export async function erpApi<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch('/erp/api/erp/proxy/' + path, {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      ...(init?.headers || {}),
    },
    cache: 'no-store',
  });

  const json = await response.json().catch(() => null);

  if (!response.ok || json?.ok === false) {
    throw new Error(json?.error || json?.message || 'تعذر تنفيذ العملية');
  }

  return (json?.data ?? json) as T;
}

export function field(form: FormData, key: string) {
  return String(form.get(key) || '').trim();
}

export function num(form: FormData, key: string) {
  const value = Number(form.get(key) || 0);
  return Number.isFinite(value) ? value : 0;
}

export function money(value: unknown) {
  const numberValue = Number(value || 0);
  return numberValue.toLocaleString('ar-EG', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  });
}
