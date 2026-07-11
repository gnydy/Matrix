import nodemailer from 'nodemailer';
import type { Lead, LeadSource } from '@allinall/database';

const DEFAULT_NOTIFY_EMAIL = 'omargamal3107@gmail.com';

const sourceLabels: Record<LeadSource, string> = {
  request: 'طلب نظام',
  contact: 'تواصل / استفسار',
  calculator: 'حاسبة الاحتياج',
  whatsapp: 'واتساب',
};

function siteBaseUrl() {
  return process.env.NEXT_PUBLIC_SITE_URL ?? 'https://cerulean-tartufo-5a529e.netlify.app';
}

function isSmtpConfigured() {
  return Boolean(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS);
}

function createTransporter() {
  const port = Number(process.env.SMTP_PORT ?? 587);
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port,
    secure: port === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

function buildLeadEmailHtml(lead: Lead) {
  const source = sourceLabels[lead.source] ?? lead.source;
  const modules =
    Array.isArray(lead.modules) && lead.modules.length
      ? (lead.modules as string[]).join('، ')
      : '—';

  return `
    <div dir="rtl" style="font-family: Arial, sans-serif; line-height: 1.6;">
      <h2>طلب / استفسار جديد — Matrix</h2>
      <p><strong>المرجع:</strong> ${lead.ref}</p>
      <p><strong>المصدر:</strong> ${source}</p>
      <p><strong>الاسم:</strong> ${lead.name}</p>
      <p><strong>الشركة:</strong> ${lead.company ?? '—'}</p>
      <p><strong>البريد:</strong> ${lead.email ?? '—'}</p>
      <p><strong>الهاتف:</strong> ${lead.phone ?? '—'}</p>
      <p><strong>نوع الطلب:</strong> ${lead.requestType ?? '—'}</p>
      <p><strong>الباقة:</strong> ${lead.planId ?? '—'}</p>
      <p><strong>الموديولات:</strong> ${modules}</p>
      <p><strong>الرسالة:</strong></p>
      <pre style="white-space: pre-wrap; background: #f1f5f9; padding: 12px; border-radius: 8px;">${lead.message ?? '—'}</pre>
      <p style="color: #64748b; font-size: 12px;">تم الإرسال من ${siteBaseUrl()}</p>
    </div>
  `;
}

/** إرسال إيميل عند طلب جديد — لا يوقف حفظ الطلب إذا فشل الإرسال */
export async function sendLeadNotificationEmail(lead: Lead): Promise<{ sent: boolean; reason?: string }> {
  if (!isSmtpConfigured()) {
    return { sent: false, reason: 'smtp_not_configured' };
  }

  const to = process.env.LEAD_NOTIFY_EMAIL ?? DEFAULT_NOTIFY_EMAIL;
  const from = process.env.SMTP_FROM ?? process.env.SMTP_USER!;
  const source = sourceLabels[lead.source] ?? lead.source;

  const transporter = createTransporter();

  await transporter.sendMail({
    from: `"Matrix" <${from}>`,
    to,
    replyTo: lead.email ?? undefined,
    subject: `[Matrix] ${source} — ${lead.ref} — ${lead.name}`,
    html: buildLeadEmailHtml(lead),
    text: [
      `طلب جديد: ${lead.ref}`,
      `المصدر: ${source}`,
      `الاسم: ${lead.name}`,
      `البريد: ${lead.email ?? '—'}`,
      `الهاتف: ${lead.phone ?? '—'}`,
      `الرسالة: ${lead.message ?? '—'}`,
    ].join('\n'),
  });

  return { sent: true };
}
