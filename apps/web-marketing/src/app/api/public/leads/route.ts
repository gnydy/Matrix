import { createLeadSchema } from '@allinall/validation';
import { checkBotProtection, checkRateLimit, jsonError, jsonOk, silentLeadOk } from '@/lib/api-utils';
import { createLeadInDb } from '@/lib/create-lead';

export async function POST(request: Request) {
  const limited = checkRateLimit(request, 'public:leads', 8, 60 * 60 * 1000);
  if (limited) return limited;

  try {
    const body = (await request.json()) as Record<string, unknown>;
    const bot = checkBotProtection(body);
    if (bot && 'silent' in bot) return silentLeadOk();
    if (bot) return bot;

    const parsed = createLeadSchema.safeParse(body);
    if (!parsed.success) {
      return jsonError('بيانات الطلب غير صالحة', 400);
    }

    const lead = await createLeadInDb(parsed.data);
    return jsonOk({ ref: lead.ref, id: lead.id });
  } catch {
    return jsonError('تعذر حفظ الطلب', 500);
  }
}
