import { createSessionFromToken, loginViaApi } from '@/lib/auth';
import { writeAudit } from '@/lib/audit';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  let body: { email?: string; password?: string };
  try {
    body = (await request.json()) as { email?: string; password?: string };
  } catch {
    return NextResponse.json({ error: 'طلب غير صالح' }, { status: 400 });
  }

  if (!body.email || !body.password) {
    return NextResponse.json({ error: 'أدخل البريد وكلمة المرور' }, { status: 400 });
  }

  const result = await loginViaApi(body.email, body.password);

  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: 401 });
  }

  await createSessionFromToken(result.token, result.user);
  await writeAudit({
    action: 'login',
    entity: 'session',
    metadata: { email: result.user.email, userId: result.user.id },
    actor: result.user.email,
  });

  return NextResponse.json({ ok: true });
}
