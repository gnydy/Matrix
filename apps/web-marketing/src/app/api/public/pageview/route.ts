import { prisma } from '@allinall/database';
import { checkRateLimit, jsonError, jsonOk } from '@/lib/api-utils';

const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const CUID_RE = /^c[a-z0-9]{24}$/i;

function isSessionId(value: string): boolean {
  return UUID_RE.test(value) || CUID_RE.test(value);
}

export async function POST(request: Request) {
  const limited = checkRateLimit(request, 'public:pageview', 300, 60 * 60 * 1000);
  if (limited) return limited;

  try {
    const body = (await request.json()) as {
      sessionId?: string;
      path?: string;
      title?: string | null;
    };

    if (!body.sessionId || !isSessionId(body.sessionId)) {
      return jsonError('sessionId غير صالح', 400);
    }
    if (!body.path?.trim()) return jsonError('بيانات غير مكتملة', 400);

    const session = await prisma.visitorSession.findUnique({
      where: { id: body.sessionId },
      select: { id: true },
    });
    if (!session) return jsonError('جلسة غير موجودة', 404);

    const pageView = await prisma.pageView.create({
      data: {
        sessionId: body.sessionId,
        path: body.path.trim().slice(0, 500),
        title: body.title?.slice(0, 500) ?? null,
      },
    });

    await prisma.visitorSession.update({
      where: { id: body.sessionId },
      data: { lastSeenAt: new Date(), isActive: true },
    });

    return jsonOk({ pageViewId: pageView.id });
  } catch {
    return jsonError('تعذر تسجيل الصفحة', 500);
  }
}
