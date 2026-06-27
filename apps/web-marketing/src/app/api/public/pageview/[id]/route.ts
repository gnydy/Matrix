import { prisma } from '@allinall/database';
import { checkRateLimit, jsonError, jsonOk } from '@/lib/api-utils';

type Params = { params: Promise<{ id: string }> };

const CUID_RE = /^c[a-z0-9]{24}$/i;

export async function PATCH(request: Request, { params }: Params) {
  const limited = checkRateLimit(request, 'public:pageview:patch', 300, 60 * 60 * 1000);
  if (limited) return limited;

  try {
    const { id } = await params;
    if (!CUID_RE.test(id)) return jsonError('معرّف غير صالح', 400);

    const pageView = await prisma.pageView.findUnique({ where: { id } });
    if (!pageView || pageView.leftAt) return jsonOk({ ok: true });

    const leftAt = new Date();
    const durationSec = Math.max(
      0,
      Math.round((leftAt.getTime() - pageView.enteredAt.getTime()) / 1000),
    );

    await prisma.pageView.update({
      where: { id },
      data: { leftAt, durationSec },
    });

    await prisma.visitorSession.update({
      where: { id: pageView.sessionId },
      data: { lastSeenAt: leftAt, isActive: false },
    });

    return jsonOk({ ok: true });
  } catch {
    return jsonError('تعذر إغلاق الصفحة', 500);
  }
}
