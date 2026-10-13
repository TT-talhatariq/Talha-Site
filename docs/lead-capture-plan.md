# Silent Lead Capture + WhatsApp Follow-up

Goal: recover buyers who start checkout but do not finish (about 83% today),
without adding a single step to the checkout form.

Status: **built.** Capture lives in this repo (`src/app/api/leads`, `src/lib/lead*.ts`);
the table, SQL functions and the `/admin/leads` page live in the LMS repo
(`db/migrations/checkout_leads.sql`, `app/admin/leads`). Admin and sales can both open it.
Set `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` (server-only) in this site's environment.

---

## Part 1 — Capture (code)

### What we save

| Field | Notes |
|---|---|
| `session_id` | Random ID per checkout tab (kept in `sessionStorage`) |
| `name` | As typed |
| `whatsapp` | Normalized to `923XXXXXXXXX` |
| `email` | Optional at save time |
| `course` | `web-dev`, `remote-work`, `upwork`, `linkedin`, `consultation` |
| `stage` | See below |
| `created_at` / `updated_at` | Timestamps |
| `follow_up` | `pending`, `contacted`, `replied`, `recovered`, `no_response` |

### Stages (how far the buyer got)

1. `details` — filled in name + valid WhatsApp
2. `screenshot_uploaded` — chose a payment screenshot
3. `verification_failed` — AI check rejected the screenshot. **Hottest lead: they probably already paid.**
4. `enrolled` — verified and enrollment email sent

### When it saves

- About 1 second after the buyer stops typing, and when they leave a field. Never on every keystroke.
- Only once the WhatsApp number is valid. `0300…`, `+92 300…` and spaces all normalize to `923XXXXXXXXX`. Partials are ignored.
- One record per visit (upsert on `session_id`), updated in place as more fields are filled.
- The follow-up list shows one row per WhatsApp number (latest record wins), so nobody is messaged twice.
- If saving fails, the buyer never notices. Checkout keeps working.

### Where it goes

- New route `POST /api/leads` on this site: validates input, has its own rate limit (separate from OCR).
- Stores to a Supabase table `checkout_leads` (recommended: already connected, free tier is enough).
  A Google Sheet would work too but is clunkier for stages and status updates.
- The checkout component (`src/components/checkout/CheckoutPage.tsx`) calls it, so all five checkouts get it at once.

### On the form

One small line under the form: *"We may WhatsApp you about your enrollment."*
No extra step, no checkbox.

---

## Part 2 — Follow-up routine (people)

**Who:** support person, from the support WhatsApp number **0325-7367496** (the one number all buyers are sent to).

**Where they work:** a password-protected `/leads` page.

- Today's unfinished checkouts, hottest first: `verification_failed` → `screenshot_uploaded` → `details`
- One-tap WhatsApp button per row with the message prefilled
- Buttons to mark `contacted` / `replied` / `recovered` / `no_response`

### Timing and messages

| Who | When | Message |
|---|---|---|
| `verification_failed` | Within 1 hour | "Assalam o Alaikum [name]! Your payment screenshot didn't go through on the site. Send it here and we'll activate your access." |
| Everyone else, 1st | 2–4 hours after they left | "Assalam o Alaikum [name]! Saw you started enrolling in [course]. Any problem with the payment? We can guide you step by step." |
| Everyone else, 2nd | Next day | "Just checking in, [name]. Your seat in [course] is still open. Reply here if you'd like help finishing." |

Rules:

- Maximum 2 messages per person, then stop (protects the number from spam reports).
- Never message anyone in `enrolled`.

### Measuring it

Weekly: leads captured, contacted, recovered, and recovered revenue.
Compare against the checkout → purchase rate from Meta.

---

## Decisions needed

1. **Storage:** Supabase OK? Which project, or create a new one?
2. **Follow-up owner:** who does it, and is a `/leads` page fine (or a daily summary email instead)?
