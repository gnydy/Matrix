'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { ensureSession, getSessionId, trackEvent } from '@/lib/analytics-client';

export function VisitorTracker() {
  const pathname = usePathname();
  const pageViewId = useRef<string | null>(null);
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;
    void ensureSession();
  }, []);

  useEffect(() => {
    let cancelled = false;

    async function enterPage() {
      const sessionId = getSessionId() ?? (await ensureSession());
      if (!sessionId || cancelled) return;

      const res = await fetch('/api/public/pageview', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId,
          path: pathname,
          title: document.title,
        }),
      });

      if (res.ok) {
        const data = (await res.json()) as { pageViewId: string };
        pageViewId.current = data.pageViewId;
      }
    }

    void enterPage();

    return () => {
      cancelled = true;
      const id = pageViewId.current;
      if (id) {
        void fetch(`/api/public/pageview/${id}`, { method: 'PATCH' });
        pageViewId.current = null;
      }
    };
  }, [pathname]);

  useEffect(() => {
    const heartbeat = setInterval(() => {
      const sessionId = getSessionId();
      if (!sessionId) return;
      void fetch('/api/public/session', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sessionId }),
      });
    }, 30000);

    const onHide = () => {
      const id = pageViewId.current;
      if (id) void fetch(`/api/public/pageview/${id}`, { method: 'PATCH' });
    };

    const onFormFocus = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('form[data-track-form]')) {
        const form = target.closest('form[data-track-form]') as HTMLFormElement;
        const formId = form.dataset.trackForm;
        if (formId && !form.dataset.trackedStart) {
          form.dataset.trackedStart = '1';
          void trackEvent('form_started', window.location.pathname, { formId });
        }
      }
    };

    document.addEventListener('visibilitychange', onHide);
    window.addEventListener('pagehide', onHide);
    document.addEventListener('focusin', onFormFocus);

    return () => {
      clearInterval(heartbeat);
      document.removeEventListener('visibilitychange', onHide);
      window.removeEventListener('pagehide', onHide);
      document.removeEventListener('focusin', onFormFocus);
    };
  }, []);

  return null;
}
