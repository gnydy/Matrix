'use client';

import { useState } from 'react';
import { useMarketingContent } from '@/i18n/use-marketing-content';

export function FaqAccordion() {
  const c = useMarketingContent();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl divide-y divide-border rounded-2xl border border-border bg-card">
      {c.faqItems.map((item, i) => (
        <div key={item.q}>
          <button
            type="button"
            className="flex w-full items-center justify-between gap-4 px-6 py-5 text-right font-medium transition hover:bg-background/50"
            aria-expanded={open === i}
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span>{item.q}</span>
            <span
              className={`shrink-0 text-primary transition-transform ${open === i ? 'rotate-180' : ''}`}
              aria-hidden
            >
              ▾
            </span>
          </button>
          {open === i && (
            <div className="px-6 pb-5 text-sm text-muted leading-relaxed">{item.a}</div>
          )}
        </div>
      ))}
    </div>
  );
}
