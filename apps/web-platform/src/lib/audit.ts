import { prisma } from '@allinall/database';
import type { Prisma } from '@allinall/database';
import { getSession } from '@/lib/auth';

type AuditInput = {
  action: string;
  entity: string;
  entityId?: string;
  metadata?: Prisma.InputJsonValue;
  actor?: string;
};

export async function writeAudit(input: AuditInput) {
  try {
    const session = await getSession();
    await prisma.auditLog.create({
      data: {
        action: input.action,
        entity: input.entity,
        entityId: input.entityId ?? null,
        actor: input.actor ?? session?.email ?? 'system',
        metadata: input.metadata ?? undefined,
      },
    });
  } catch {
    /* audit must not break main flow */
  }
}

export async function writeLoginAudit(
  email: string,
  success: boolean,
  ip?: string | null,
  userAgent?: string | null,
) {
  try {
    await prisma.loginAudit.create({
      data: { email, success, ip: ip ?? null, userAgent: userAgent ?? null },
    });
  } catch {
    /* ignore */
  }
}

export async function ensureSeedAdmin() {
  const email = process.env.ADMIN_EMAIL ?? 'admin@matrix.local';
  const existing = await prisma.adminUser.findUnique({ where: { email } });
  if (existing) return;
  await prisma.adminUser.create({
    data: { email, name: 'المسؤول', role: 'owner', active: true },
  });
}
