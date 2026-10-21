'use client';

import { useEffect } from 'react';

import { COURSE_PRICE_PKR, type LeadCourse } from '@/lib/leads';

/**
 * Meta Purchase, sent once per real checkout instead of on every visit to a
 * thank-you page. Checkout leaves a short-lived note in sessionStorage just
 * before it redirects; the thank-you page fires Purchase only if that note is
 * there, then deletes it. Refreshes, the back button, bookmarks and shared
 * links find no note, so they no longer count as sales.
 */

const PIXEL_ID = '792263316561861';
const STORAGE_KEY = 'purchase_pending';
/** A note older than this is from an abandoned tab, not a checkout just now. */
const MAX_AGE_MS = 10 * 60 * 1000;

const COURSE_NAMES: Record<LeadCourse, string> = {
  'web-dev': 'Web Development Masterclass',
  'remote-work': 'Remote Work Mastery',
  upwork: 'Upwork Mastery',
  linkedin: 'LinkedIn Mastery',
  consultation: 'Consultation',
};

interface PendingPurchase {
  id: string;
  course: LeadCourse;
  t: number;
}

type Fbq = (...args: unknown[]) => void;

/** Call on checkout right before redirecting to the thank-you page. */
export function markPurchasePending(course: LeadCourse) {
  try {
    const pending: PendingPurchase = {
      id: crypto.randomUUID(),
      course,
      t: Date.now(),
    };
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(pending));
  } catch {
    // Storage blocked: the sale just goes uncounted in Meta.
  }
}

/** Call on a thank-you page. Fires Purchase at most once per checkout. */
export function usePurchaseEvent(course: LeadCourse) {
  useEffect(() => {
    let pending: PendingPurchase;
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      sessionStorage.removeItem(STORAGE_KEY);
      pending = JSON.parse(raw);
    } catch {
      return;
    }

    if (pending.course !== course) return;
    if (Date.now() - pending.t > MAX_AGE_MS) return;

    // trackSingle so only the Web Dev pixel gets it, even if another is added.
    (window as unknown as { fbq?: Fbq }).fbq?.(
      'trackSingle',
      PIXEL_ID,
      'Purchase',
      {
        value: COURSE_PRICE_PKR[course],
        currency: 'PKR',
        content_name: COURSE_NAMES[course],
      },
      { eventID: pending.id },
    );
  }, [course]);
}
