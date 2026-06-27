'use client';

import { FORM_STARTED_FIELD, HONEYPOT_FIELD } from '@allinall/security/bot-protection';
import { useMemo } from 'react';

/** Hidden honeypot + timing fields — bots fill / submit too fast */
export function HoneypotFields() {
  const startedAt = useMemo(() => Date.now(), []);

  return (
    <div className="pointer-events-none absolute -left-[9999px] h-0 w-0 overflow-hidden opacity-0" aria-hidden>
      <label htmlFor="website">Website</label>
      <input
        id="website"
        name={HONEYPOT_FIELD}
        type="text"
        tabIndex={-1}
        autoComplete="off"
        defaultValue=""
      />
      <input type="hidden" name={FORM_STARTED_FIELD} value={startedAt} />
    </div>
  );
}

export function readFormSecurityFields(form: HTMLFormElement): Record<string, string | number> {
  const data = new FormData(form);
  return {
    [HONEYPOT_FIELD]: String(data.get(HONEYPOT_FIELD) ?? ''),
    [FORM_STARTED_FIELD]: Number(data.get(FORM_STARTED_FIELD) ?? Date.now()),
  };
}
