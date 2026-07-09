import { prisma, Prisma } from '@allinall/database';
import { checkRateLimit, jsonError, jsonOk } from '@/lib/api-utils';

const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const CUID_RE = /^c[a-z0-9]{24}$/i;

function isSessionId(value: string): boolean {
  return UUID_RE.test(value) || CUID_RE.test(value);
}
const EVENT_TYPE_RE = /^[a-z][a-z0-9_]{0,63}$/;

export async function POST(request: Request) {
  const limited = checkRateLimit(request, 'public:events', 200, 60 * 60 * 1000);
  if (limited) return limited;

  try {
    const body = (await request.json()) as {
      sessionId?: string;
      type?: string;
      path?: string | null;
      metadata?: Record<string, unknown> | null;
    };

    if (!body.sessionId || !isSessionId(body.sessionId)) {
      return jsonError('sessionId غير صالح', 400);
    }
    if (!body.type || !EVENT_TYPE_RE.test(body.type)) {
      return jsonError('نوع الحدث غير صالح', 400);
    }

    const session = await prisma.visitorSession.findUnique({
      where: { id: body.sessionId },
      select: { id: true },
    });
    if (!session) return jsonError('جلسة غير موجودة', 404);

    const safePath = body.path?.slice(0, 500) ?? null;
    const metadata = body.metadata
      ? (JSON.parse(JSON.stringify(body.metadata)) as Prisma.InputJsonValue)
      : undefined;

    await prisma.siteEvent.create({
      data: {
        sessionId: body.sessionId,
        type: body.type,
        path: safePath,
        metadata,
      },
    });

    await prisma.visitorSession.update({
      where: { id: body.sessionId },
      data: { lastSeenAt: new Date() },
    });

    return jsonOk({ ok: true });
  } catch {
    return jsonError('تعذر تسجيل الحدث', 500);
  }
}
