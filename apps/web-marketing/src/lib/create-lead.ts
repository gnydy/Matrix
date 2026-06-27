import { LeadSource, prisma, type Prisma } from '@allinall/database';

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

export type CreateLeadPayload = {
  sessionId?: string | null;
  source?: string;
  name: string;
  company?: string | null;
  phone?: string | null;
  email?: string | null;
  requestType?: string | null;
  planId?: string | null;
  modules?: string[];
  message?: string | null;
};

export async function createLeadInDb(data: CreateLeadPayload) {
  const ref = generateRef();
  const lead = await prisma.lead.create({
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
    await prisma.siteEvent.create({
      data: {
        sessionId: data.sessionId,
        type: 'lead_submitted',
        path: '/request',
        metadata: { ref: lead.ref, source: lead.source } as Prisma.InputJsonValue,
      },
    });
  }

  return lead;
}
