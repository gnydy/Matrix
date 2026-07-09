'use client';

import { useState } from 'react';
import { HoneypotFields, readFormSecurityFields } from '@/components/security/honeypot-fields';
import { useMarketingContent } from '@/i18n/use-marketing-content';
import { getActiveSocialLinks, socialBusinessEmail } from '@/lib/social';
import { SocialLinks } from '@/components/layout/social-links';
import { submitLead } from '@/lib/analytics-client';

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setLoading(true);
    setError('');

    try {
      await submitLead({
        source: 'contact',
        name: String(data.get('name') ?? ''),
        email: String(data.get('email') ?? ''),
        phone: null,
        company: null,
        requestType: 'support',
        message: `الموضوع: ${String(data.get('subject') ?? '')}\n\n${String(data.get('message') ?? '')}`,
        modules: [],
        ...readFormSecurityFields(form),
      });
      setSent(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'فشل الإرسال');
      setLoading(false);
    }
  }

  if (sent) {
    return (
      <div className="rounded-2xl border border-border bg-card p-8 text-center">
        <p className="text-lg font-semibold text-primary">تم إرسال رسالتك</p>
        <p className="mt-2 text-sm text-muted">سنرد عليك في أقرب وقت خلال ساعات العمل.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      data-track-form="contact"
      className="relative space-y-5 rounded-2xl border border-border bg-card p-6 sm:p-8"
    >
      <HoneypotFields />
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium" htmlFor="c-name">
            الاسم
          </label>
          <input id="c-name" name="name" required className="field-input" />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium" htmlFor="c-email">
            البريد
          </label>
          <input
            id="c-email"
            name="email"
            type="email"
            required
            className="field-input"
            dir="ltr"
          />
        </div>
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium" htmlFor="c-subject">
          الموضوع
        </label>
        <input id="c-subject" name="subject" required className="field-input" />
      </div>
      <div>
        <label className="mb-1.5 block text-sm font-medium" htmlFor="c-message">
          الرسالة
        </label>
        <textarea
          id="c-message"
          name="message"
          rows={5}
          required
          className="field-input resize-y"
        />
      </div>
      <button type="submit" disabled={loading} className="btn-primary w-full">
        {loading ? 'جاري الإرسال...' : 'إرسال'}
      </button>
      {error && <p className="text-center text-sm text-danger">{error}</p>}
    </form>
  );
}

export function ContactInfo() {
  const c = useMarketingContent();
  const social = getActiveSocialLinks();

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-border bg-card p-6">
        <h2 className="font-semibold">بيانات التواصل</h2>
        <dl className="mt-4 space-y-4 text-sm">
          <div>
            <dt className="text-muted">البريد</dt>
            <dd className="mt-1 font-medium" dir="ltr">
              <a href={`mailto:${c.site.email}`} className="hover:text-primary">
                {c.site.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-muted">بريد الأعمال</dt>
            <dd className="mt-1 font-medium" dir="ltr">
              <a href={`mailto:${socialBusinessEmail}`} className="hover:text-primary">
                {socialBusinessEmail}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-muted">الهاتف</dt>
            <dd className="mt-1 font-medium" dir="ltr">
              {c.site.phone}
            </dd>
          </div>
          <div>
            <dt className="text-muted">العنوان</dt>
            <dd className="mt-1 font-medium">{c.site.address}</dd>
          </div>
          <div>
            <dt className="text-muted">واتساب</dt>
            <dd className="mt-1">
              <a
                href={`https://wa.me/${c.site.whatsapp}`}
                className="font-medium text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                فتح المحادثة
              </a>
            </dd>
          </div>
        </dl>
      </div>

      {social.length > 0 && (
        <div className="rounded-2xl border border-border bg-card p-6">
          <h2 className="font-semibold">وسائل التواصل</h2>
          <p className="mt-2 text-sm text-muted">تابعنا للتحديثات والنصائح حول إدارة الأعمال</p>
          <SocialLinks links={social} className="mt-4" />
        </div>
      )}

      <div className="rounded-2xl border border-border bg-card p-6">
        <h2 className="font-semibold">ساعات العمل</h2>
        <p className="mt-3 text-sm text-muted">
          الأحد — الخميس · 9:00 – 18:00 (توقيت القاهرة)
        </p>
      </div>
    </div>
  );
}
