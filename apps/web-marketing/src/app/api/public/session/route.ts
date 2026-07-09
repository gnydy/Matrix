import { prisma } from '@allinall/database';
import { checkRateLimit, jsonError, jsonOk } from '@/lib/api-utils';

const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const CUID_RE = /^c[a-z0-9]{24}$/i;

function isSessionId(value: string): boolean {
  return UUID_RE.test(value) || CUID_RE.test(value);
}

export async function POST(request: Request) {
  const limited = checkRateLimit(request, 'public:session', 40, 60 * 60 * 1000);
  if (limited) return limited;

  try {
    const body = (await request.json()) as {
      visitorId?: string;
      referrer?: string | null;
      locale?: string | null;
    };

    if (!body.visitorId || !UUID_RE.test(body.visitorId)) {
      return jsonError('visitorId غير صالح', 400);
    }

    const userAgent = request.headers.get('user-agent')?.slice(0, 512) ?? null;
    const referrer = body.referrer?.slice(0, 2000) ?? null;
    const locale = body.locale?.slice(0, 16) ?? null;

    const session = await prisma.visitorSession.create({
      data: {
        visitorId: body.visitorId,
        referrer,
        locale,
        userAgent,
        isActive: true,
      },
    });

    return jsonOk({ sessionId: session.id });
  } catch {
    return jsonError('تعذر إنشاء الجلسة', 500);
  }
}

export async function PATCH(request: Request) {
  const limited = checkRateLimit(request, 'public:session:patch', 120, 60 * 60 * 1000);
  if (limited) return limited;

  try {
    const body = (await request.json()) as { sessionId?: string };
    if (!body.sessionId || !isSessionId(body.sessionId)) {
      return jsonError('sessionId غير صالح', 400);
    }

    await prisma.visitorSession.update({
      where: { id: body.sessionId },
      data: { lastSeenAt: new Date(), isActive: true },
    });

    return jsonOk({ ok: true });
  } catch {
    return jsonError('تعذر تحديث الجلسة', 500);
  }
}
