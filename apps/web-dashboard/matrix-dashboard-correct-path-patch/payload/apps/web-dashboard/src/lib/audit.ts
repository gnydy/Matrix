import { prisma } from '@allinall/database';
import { getRequestIp, safeJson, sha256 } from './security';

export async function recordAudit(input: {
  actorId?: string | null;
  action: string;
  entityType: string;
  entityId?: string | null;
  beforeData?: unknown;
  afterData?: unknown;
  result?: 'success' | 'failure' | 'denied';
  failureReason?: string;
  requestHeaders?: Headers;
}) {
  try {
    await prisma.matrixAuditLog.create({
      data: {
        actorId: input.actorId || null,
        action: input.action,
        entityType: input.entityType,
        entityId: input.entityId || null,
        beforeData: safeJson(input.beforeData) as never,
        afterData: safeJson(input.afterData) as never,
        result: input.result || 'success',
        failureReason: input.failureReason?.slice(0, 1000),
        ipHash: input.requestHeaders ? sha256(getRequestIp(input.requestHeaders)) : null,
        userAgent: input.requestHeaders?.get('user-agent')?.slice(0, 500),
        correlationId: input.requestHeaders?.get('x-request-id')?.slice(0, 128),
      },
    });
  } catch (error) {
    console.error('Matrix audit write failed', error);
  }
}
