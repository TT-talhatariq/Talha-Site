'use client';

import { useCallback, useEffect, useRef } from 'react';

import { LeadSaver, type LeadFields } from '@/lib/leadSaver';
import type { LeadCourse, LeadPayload, LeadStage } from '@/lib/leads';

/** One id per checkout per tab, so refreshes and edits update the same row. */
function getSessionId(course: LeadCourse): string {
  const key = `lead-session:${course}`;
  try {
    const existing = sessionStorage.getItem(key);
    if (existing) return existing;
  } catch {
    // Storage blocked (private mode): fall through to a per-load id.
  }
  const id = crypto.randomUUID();
  try {
    sessionStorage.setItem(key, id);
  } catch {
    // Same as above.
  }
  return id;
}

/** True when the server took the lead, or will never take it (bad input). */
async function postLead(payload: LeadPayload): Promise<boolean> {
  try {
    const response = await fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      // Lets the request finish after the buyer closes the tab or navigates.
      keepalive: true,
    });
    // 5xx means "try again with the next change"; anything else is final.
    return response.status < 500;
  } catch {
    return false;
  }
}

/**
 * Silently saves a checkout visit as a lead. Returns:
 *  - track(fields): call on every change (debounced inside)
 *  - flush(): save now, e.g. when a field loses focus
 *  - advance(stage): record that the buyer got further (saves immediately)
 * Errors are swallowed; checkout never waits on or notices this.
 */
export function useLeadCapture(course: LeadCourse) {
  const saver = useRef<LeadSaver | null>(null);

  useEffect(() => {
    const instance = new LeadSaver({
      sessionId: getSessionId(course),
      course,
      send: postLead,
    });
    saver.current = instance;

    // The tab being hidden is the last reliable moment on mobile browsers.
    const onHide = () => {
      if (document.visibilityState === 'hidden') void instance.flush();
    };
    const onPageHide = () => void instance.flush();
    document.addEventListener('visibilitychange', onHide);
    window.addEventListener('pagehide', onPageHide);

    return () => {
      document.removeEventListener('visibilitychange', onHide);
      window.removeEventListener('pagehide', onPageHide);
      void instance.flush();
      instance.dispose();
      saver.current = null;
    };
  }, [course]);

  const track = useCallback(
    (fields: LeadFields) => saver.current?.update(fields),
    [],
  );
  const flush = useCallback(() => void saver.current?.flush(), []);
  const advance = useCallback(
    (stage: LeadStage) => void saver.current?.advance(stage),
    [],
  );

  return { track, flush, advance };
}
