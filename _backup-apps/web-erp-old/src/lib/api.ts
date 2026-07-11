import { getToken } from './auth';

function apiBase() {
  return process.env.MATRIX_API_URL ?? process.env.NEXT_PUBLIC_API_URL ?? 'http://127.0.0.1:4000';
}

export async function erpFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const token = await getToken();
  const res = await fetch(`${apiBase()}/api/v1${path}`, {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...init?.headers,
    },
    cache: 'no-store',
  });
  const json = (await res.json()) as { ok?: boolean; data?: T; error?: string };
  if (!res.ok || !json.ok) {
    throw new Error(json.error ?? `خطأ API: ${res.status}`);
  }
  return json.data as T;
}
