import {
  furtherStage,
  type LeadCourse,
  type LeadPayload,
  type LeadStage,
  normalizeWhatsapp,
} from '@/lib/leads';

/**
 * Decides WHEN a checkout visit is sent to /api/leads. Plain TypeScript with
 * injectable timers and transport so it can be tested without a browser.
 *
 * Why it is shaped this way (every request is a Supabase call, so fewer is
 * better, but a lead lost is worse):
 *  - details wait for 1s of silence, so typing is one request, not one per key
 *  - nothing is sent until the WhatsApp number is valid
 *  - an identical payload is never sent twice
 *  - one request in flight at a time; edits made meanwhile collapse into one
 *    follow-up, so the newest values always win and nothing queues up
 *  - stage changes (screenshot, failed check, enrolled) skip the wait, because
 *    the buyer may be about to leave the page
 *  - flush() lets the page push a pending save on blur / tab hide / unload
 *  - a hard cap per page visit stops a bug or a bot from looping forever
 */

export type SendLead = (payload: LeadPayload) => Promise<boolean>;

export interface LeadFields {
  name: string;
  email: string;
  whatsapp: string;
}

interface Options {
  sessionId: string;
  course: LeadCourse;
  send: SendLead;
  debounceMs?: number;
  maxSends?: number;
}

export class LeadSaver {
  private fields: LeadFields = { name: '', email: '', whatsapp: '' };
  private stage: LeadStage = 'details';
  private timer: ReturnType<typeof setTimeout> | null = null;
  private inFlight = false;
  private dirty = false;
  private lastSent = '';
  private sends = 0;
  private disposed = false;

  private readonly debounceMs: number;
  private readonly maxSends: number;

  constructor(private readonly opts: Options) {
    this.debounceMs = opts.debounceMs ?? 1000;
    this.maxSends = opts.maxSends ?? 25;
  }

  /** Typing: remember the values and save after the buyer pauses. */
  update(fields: LeadFields) {
    this.fields = fields;
    if (this.timer) clearTimeout(this.timer);
    this.timer = setTimeout(() => void this.flush(), this.debounceMs);
  }

  /** Move the stage forward and save straight away. Never goes backwards. */
  advance(stage: LeadStage) {
    this.stage = furtherStage(this.stage, stage);
    return this.flush();
  }

  /** Save now if there is something new to save. */
  async flush(): Promise<void> {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
    }
    if (this.disposed) return;

    const whatsapp = normalizeWhatsapp(this.fields.whatsapp);
    if (!whatsapp) return;

    const payload: LeadPayload = {
      sessionId: this.opts.sessionId,
      name: this.fields.name.trim(),
      whatsapp,
      email: this.fields.email.trim(),
      course: this.opts.course,
      stage: this.stage,
    };
    const signature = JSON.stringify(payload);
    if (signature === this.lastSent) return;

    if (this.inFlight) {
      this.dirty = true;
      return;
    }
    if (this.sends >= this.maxSends) return;

    this.inFlight = true;
    this.sends += 1;
    try {
      if (await this.opts.send(payload)) this.lastSent = signature;
    } catch {
      // Saving is best-effort; checkout must never notice.
    } finally {
      this.inFlight = false;
    }

    if (this.dirty) {
      this.dirty = false;
      await this.flush();
    }
  }

  /** Stop timers. Does not send; call flush() first if the page is leaving. */
  dispose() {
    this.disposed = true;
    if (this.timer) clearTimeout(this.timer);
    this.timer = null;
  }
}
