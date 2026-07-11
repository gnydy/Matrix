'use client';

import { useMemo, useState } from 'react';
import { useSiteSettings } from '../../i18n/site/client';

type Props = {
  sourcePage: string;
  defaultRequestType?: string;
};

export function RealRequestForm({
  sourcePage,
  defaultRequestType = 'system',
}: Props) {
  const { locale, dir, isLight } = useSiteSettings();

  const [startedAt] = useState(() => Date.now());
  const [saving, setSaving] = useState(false);
  const [leadNumber, setLeadNumber] = useState('');
  const [error, setError] = useState('');

  const isAr = locale === 'ar';

  const text = useMemo(
    () =>
      isAr
        ? {
            badge: 'طلب حقيقي',
            title: 'ارسل طلبك وسيظهر مباشرة في الداشبورد.',
            description:
              'املأ البيانات، وسيتم تسجيل الطلب في قسم طلبات العملاء داخل لوحة التحكم.',
            name: 'الاسم',
            phone: 'رقم الهاتف',
            email: 'البريد الإلكتروني',
            company: 'اسم الشركة',
            requestType: 'نوع الطلب',
            service: 'الخدمة المطلوبة',
            budget: 'الميزانية المتوقعة',
            message: 'تفاصيل الطلب',
            consent: 'أوافق على التواصل معي بخصوص هذا الطلب.',
            submit: 'إرسال الطلب',
            saving: 'جاري الإرسال...',
            success: 'تم تسجيل الطلب بنجاح. رقم الطلب:',
            required: 'اكتب الاسم ورقم الهاتف على الأقل.',
          }
        : {
            badge: 'Real Request',
            title: 'Send your request and it will appear in the dashboard.',
            description:
              'Fill in the form and the request will be saved under Leads in the control center.',
            name: 'Name',
            phone: 'Phone number',
            email: 'Email',
            company: 'Company',
            requestType: 'Request type',
            service: 'Requested service',
            budget: 'Expected budget',
            message: 'Request details',
            consent: 'I agree to be contacted about this request.',
            submit: 'Send request',
            saving: 'Sending...',
            success: 'Request saved successfully. Request number:',
            required: 'Name and phone are required.',
          },
    [isAr],
  );

  const colors = {
    bg: isLight ? '#f8fafc' : '#020617',
    card: isLight ? '#ffffff' : '#0f172a',
    text: isLight ? '#0f172a' : '#e5e7eb',
    title: isLight ? '#0f172a' : '#f8fafc',
    muted: isLight ? '#64748b' : '#94a3b8',
    border: isLight ? '#e2e8f0' : 'rgba(148, 163, 184, 0.18)',
    input: isLight ? '#ffffff' : '#020617',
  };

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError('');
    setLeadNumber('');
    setSaving(true);

    const form = new FormData(event.currentTarget);

    const name = String(form.get('name') ?? '').trim();
    const phone = String(form.get('phone') ?? '').trim();

    if (!name || !phone) {
      setError(text.required);
      setSaving(false);
      return;
    }

    const payload = {
      name,
      phone,
      email: String(form.get('email') ?? '').trim(),
      company: String(form.get('company') ?? '').trim(),
      requestType: String(form.get('requestType') ?? defaultRequestType).trim(),
      service: String(form.get('service') ?? '').trim(),
      budget: String(form.get('budget') ?? '').trim(),
      message: String(form.get('message') ?? '').trim(),
      website: String(form.get('website') ?? '').trim(),
      formStartedAt: startedAt,
      page: sourcePage,
      source: 'website',
      locale,
    };

    const response = await fetch('/api/public/requests', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const json = await response.json();

    if (!json.ok) {
      setError(json.error ?? 'Failed to send request.');
      setSaving(false);
      return;
    }

    setLeadNumber(json.leadNumber);
    event.currentTarget.reset();
    setSaving(false);
  }

  return (
    <section
      lang={locale}
      dir={dir}
      style={{
        minHeight: '100vh',
        background: isLight
          ? 'linear-gradient(180deg, #f8fafc 0%, #eef4ff 100%)'
          : 'radial-gradient(circle at top right, rgba(37, 99, 235, 0.22), transparent 34rem), #020617',
        color: colors.text,
        padding: '76px 0',
      }}
    >
      <div
        style={{
          width: 'min(960px, calc(100% - 32px))',
          margin: '0 auto',
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            padding: '8px 14px',
            borderRadius: 999,
            background: isLight ? '#dbeafe' : 'rgba(37, 99, 235, 0.18)',
            color: isLight ? '#2563eb' : '#60a5fa',
            fontWeight: 900,
            marginBottom: 18,
          }}
        >
          {text.badge}
        </div>

        <h1
          style={{
            margin: 0,
            color: colors.title,
            fontSize: 'clamp(34px, 6vw, 64px)',
            lineHeight: 1.08,
            letterSpacing: '-0.05em',
          }}
        >
          {text.title}
        </h1>

        <p
          style={{
            maxWidth: 760,
            color: colors.muted,
            fontSize: 18,
            lineHeight: 1.9,
          }}
        >
          {text.description}
        </p>

        <form
          onSubmit={submit}
          style={{
            marginTop: 34,
            display: 'grid',
            gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
            gap: 14,
            padding: 24,
            borderRadius: 28,
            background: colors.card,
            border: `1px solid ${colors.border}`,
            boxShadow: isLight
              ? '0 24px 70px rgba(15, 23, 42, 0.08)'
              : '0 24px 70px rgba(0, 0, 0, 0.24)',
          }}
        >
          <input name="website" tabIndex={-1} autoComplete="off" style={{ display: 'none' }} />

          <Field label={text.name} name="name" required colors={colors} />
          <Field label={text.phone} name="phone" required colors={colors} />
          <Field label={text.email} name="email" type="email" colors={colors} />
          <Field label={text.company} name="company" colors={colors} />

          <SelectField
            label={text.requestType}
            name="requestType"
            defaultValue={defaultRequestType}
            colors={colors}
            options={[
              ['system', isAr ? 'نظام / ERP' : 'System / ERP'],
              ['website', isAr ? 'موقع احترافي' : 'Professional Website'],
              ['dashboard', isAr ? 'لوحة تحكم' : 'Dashboard'],
              ['consultation', isAr ? 'استشارة' : 'Consultation'],
            ]}
          />

          <Field label={text.budget} name="budget" colors={colors} />

          <Field
            label={text.service}
            name="service"
            colors={colors}
            full
          />

          <TextAreaField
            label={text.message}
            name="message"
            colors={colors}
          />

          <label
            style={{
              gridColumn: '1 / -1',
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              color: colors.muted,
              lineHeight: 1.7,
            }}
          >
            <input type="checkbox" required />
            <span>{text.consent}</span>
          </label>

          {error ? (
            <div
              style={{
                gridColumn: '1 / -1',
                color: '#fca5a5',
                fontWeight: 900,
              }}
            >
              {error}
            </div>
          ) : null}

          {leadNumber ? (
            <div
              style={{
                gridColumn: '1 / -1',
                padding: 14,
                borderRadius: 16,
                background: 'rgba(34, 197, 94, 0.14)',
                color: '#22c55e',
                fontWeight: 900,
              }}
            >
              {text.success} {leadNumber}
            </div>
          ) : null}

          <button
            type="submit"
            disabled={saving}
            style={{
              gridColumn: '1 / -1',
              minHeight: 54,
              border: 0,
              borderRadius: 16,
              background: '#3b82f6',
              color: 'white',
              fontWeight: 950,
              cursor: saving ? 'not-allowed' : 'pointer',
              opacity: saving ? 0.7 : 1,
            }}
          >
            {saving ? text.saving : text.submit}
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = 'text',
  required = false,
  full = false,
  colors,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  full?: boolean;
  colors: Record<string, string>;
}) {
  return (
    <label style={{ display: 'grid', gap: 8, gridColumn: full ? '1 / -1' : undefined }}>
      <span style={{ color: colors.title, fontWeight: 900 }}>{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        style={{
          minHeight: 48,
          borderRadius: 14,
          border: `1px solid ${colors.border}`,
          background: colors.input,
          color: colors.text,
          padding: '0 14px',
          outline: 'none',
        }}
      />
    </label>
  );
}

function SelectField({
  label,
  name,
  defaultValue,
  options,
  colors,
}: {
  label: string;
  name: string;
  defaultValue: string;
  options: [string, string][];
  colors: Record<string, string>;
}) {
  return (
    <label style={{ display: 'grid', gap: 8 }}>
      <span style={{ color: colors.title, fontWeight: 900 }}>{label}</span>
      <select
        name={name}
        defaultValue={defaultValue}
        style={{
          minHeight: 48,
          borderRadius: 14,
          border: `1px solid ${colors.border}`,
          background: colors.input,
          color: colors.text,
          padding: '0 14px',
          outline: 'none',
        }}
      >
        {options.map(([value, labelText]) => (
          <option key={value} value={value}>
            {labelText}
          </option>
        ))}
      </select>
    </label>
  );
}

function TextAreaField({
  label,
  name,
  colors,
}: {
  label: string;
  name: string;
  colors: Record<string, string>;
}) {
  return (
    <label style={{ display: 'grid', gap: 8, gridColumn: '1 / -1' }}>
      <span style={{ color: colors.title, fontWeight: 900 }}>{label}</span>
      <textarea
        name={name}
        rows={6}
        style={{
          borderRadius: 14,
          border: `1px solid ${colors.border}`,
          background: colors.input,
          color: colors.text,
          padding: 14,
          outline: 'none',
          resize: 'vertical',
        }}
      />
    </label>
  );
}

export default RealRequestForm;