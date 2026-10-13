/**
 * Lead capture rules shared by the checkout page (browser) and POST /api/leads
 * (server). No imports on purpose, so the unit tests can load it directly.
 */

export const LEAD_COURSES = [
  'web-dev',
  'remote-work',
  'upwork',
  'linkedin',
  'consultation',
] as const;
export type LeadCourse = (typeof LEAD_COURSES)[number];

/** How far a buyer got. A stage only ever moves up this list. */
export const LEAD_STAGES = [
  'details',
  'screenshot_uploaded',
  'verification_failed',
  'enrolled',
] as const;
export type LeadStage = (typeof LEAD_STAGES)[number];

export const STAGE_RANK: Record<LeadStage, number> = {
  details: 1,
  screenshot_uploaded: 2,
  verification_failed: 3,
  enrolled: 4,
};

/**
 * Checkout price per course in PKR, used for the recovered-revenue figure.
 * Keep in step with the totals on the checkout pages in src/pages/*.
 */
export const COURSE_PRICE_PKR: Record<LeadCourse, number> = {
  'web-dev': 3897,
  'remote-work': 3987,
  upwork: 2499,
  linkedin: 2499,
  consultation: 3499,
};

/** What the browser sends. Everything except the ids is optional-ish. */
export interface LeadPayload {
  sessionId: string;
  name: string;
  whatsapp: string;
  email: string;
  course: LeadCourse;
  stage: LeadStage;
}

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * Pakistani mobile as 923XXXXXXXXX, or null when it is not one.
 * Accepts 03XXXXXXXXX, 3XXXXXXXXX, 923XXXXXXXXX, +92 3XX…, 0092 3XX…, with any
 * spaces or dashes. A half-typed number is null, so it is never saved.
 */
export function normalizeWhatsapp(raw: unknown): string | null {
  if (typeof raw !== 'string') return null;
  let digits = raw.replace(/\D/g, '');
  if (digits.startsWith('0092')) digits = digits.slice(2);
  if (digits.length === 11 && digits.startsWith('03')) {
    digits = `92${digits.slice(1)}`;
  } else if (digits.length === 10 && digits.startsWith('3')) {
    digits = `92${digits}`;
  }
  return /^923\d{9}$/.test(digits) ? digits : null;
}

/** The email as typed, trimmed, or '' while it is still half-typed. */
export function cleanEmail(raw: unknown): string {
  if (typeof raw !== 'string') return '';
  const email = raw.trim().slice(0, 254);
  return EMAIL.test(email) ? email : '';
}

export function isLeadCourse(value: unknown): value is LeadCourse {
  return LEAD_COURSES.includes(value as LeadCourse);
}

export function isLeadStage(value: unknown): value is LeadStage {
  return LEAD_STAGES.includes(value as LeadStage);
}

/** The higher of two stages. */
export function furtherStage(a: LeadStage, b: LeadStage): LeadStage {
  return STAGE_RANK[b] > STAGE_RANK[a] ? b : a;
}

/**
 * Validate and clean a request body. Null means "do not save"; the route turns
 * that into a 400.
 */
export function parseLeadPayload(body: unknown): LeadPayload | null {
  if (typeof body !== 'object' || body === null) return null;
  const b = body as Record<string, unknown>;

  const whatsapp = normalizeWhatsapp(b.whatsapp);
  if (
    typeof b.sessionId !== 'string' ||
    !UUID.test(b.sessionId) ||
    !whatsapp ||
    !isLeadCourse(b.course) ||
    !isLeadStage(b.stage)
  ) {
    return null;
  }

  return {
    sessionId: b.sessionId.toLowerCase(),
    name: typeof b.name === 'string' ? b.name.trim().slice(0, 120) : '',
    whatsapp,
    email: cleanEmail(b.email),
    course: b.course,
    stage: b.stage,
  };
}
