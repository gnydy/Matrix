import { Body, Controller, Post, Req } from '@nestjs/common';
import type { Request } from 'express';
import { LeadSource } from '@allinall/database';
import { createLeadSchema } from '@allinall/validation';
import { Public } from '../auth/auth.decorators';
import { AuditService } from '../audit/audit.service';
import { PrismaService } from '../prisma/prisma.service';
import { clientIp, checkBotProtection, enforceRateLimit } from '../common/security.util';

function generateRef() {
  const year = new Date().getFullYear();
  const seq = Math.floor(100000 + Math.random() * 900000);
  return `AIA-${year}-${seq}`;
}

function parseSource(value?: string): LeadSource {
  if (value === 'contact') return LeadSource.contact;
  if (value === 'calculator') return LeadSource.calculator;
  if (value === 'whatsapp') return LeadSource.whatsapp;
  return LeadSource.request;
}

@Controller('public')
export class PublicLeadsController {
  constructor(
    private readonly audit: AuditService,
    private readonly prisma: PrismaService,
  ) {}

  @Public()
  @Post('leads')
  async createLead(@Body() body: unknown, @Req() req: Request) {
    const ip = clientIp(req);
    enforceRateLimit('public:leads', ip, 8, 60 * 60 * 1000);

    if (body && typeof body === 'object') {
      const blocked = checkBotProtection(body as Record<string, unknown>);
      if (blocked) {
        return { ok: true, data: { id: 'blocked', ref: blocked.ref } };
      }
    }

    const parsed = createLeadSchema.safeParse(body);
    if (!parsed.success) {
      return { ok: false, error: 'Invalid lead payload' };
    }
    const data = parsed.data;
    try {
      const ref = generateRef();
      const lead = await this.prisma.lead.create({
        data: {
          ref,
          source: parseSource(data.source),
          name: data.name.trim(),
          company: data.company?.trim() || null,
          phone: data.phone?.trim() || null,
          email: data.email?.trim() || null,
          requestType: data.requestType || null,
          planId: data.planId || null,
          modules: data.modules ?? [],
          message: data.message?.trim() || null,
          sessionId: data.sessionId || null,
        },
      });

      if (data.sessionId) {
        await this.prisma.siteEvent.create({
          data: {
            sessionId: data.sessionId,
            type: 'lead_submitted',
            path: '/request',
            metadata: { ref: lead.ref, source: lead.source },
          },
        });
      }

      await this.audit.write({
        action: 'create',
        entity: 'lead',
        entityId: lead.id,
        actor: 'public',
        metadata: { ref: lead.ref, source: lead.source },
      });

      return { ok: true, data: { id: lead.id, ref: lead.ref } };
    } catch {
      return { ok: false, error: 'Failed to save lead' };
    }
  }
}
