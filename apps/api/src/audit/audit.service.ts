import { Injectable } from '@nestjs/common';
import type { Prisma } from '@allinall/database';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuditService {
  constructor(private readonly prisma: PrismaService) {}

  async writeLogin(input: {
    email: string;
    success: boolean;
    userId?: string | null;
    ip?: string | null;
    userAgent?: string | null;
  }) {
    try {
      await this.prisma.loginAudit.create({
        data: {
          email: input.email,
          success: input.success,
          userId: input.userId ?? null,
          ip: input.ip ?? null,
          userAgent: input.userAgent ?? null,
        },
      });
    } catch {
      /* non-blocking */
    }
  }

  async write(input: {
    action: string;
    entity: string;
    entityId?: string | null;
    actor?: string;
    userId?: string | null;
    tenantId?: string | null;
    ip?: string | null;
    metadata?: Prisma.InputJsonValue;
  }) {
    try {
      await this.prisma.auditLog.create({
        data: {
          action: input.action,
          entity: input.entity,
          entityId: input.entityId ?? null,
          actor: input.actor ?? 'system',
          userId: input.userId ?? null,
          tenantId: input.tenantId ?? null,
          ip: input.ip ?? null,
          metadata: input.metadata ?? undefined,
        },
      });
    } catch {
      /* non-blocking */
    }
  }
}
