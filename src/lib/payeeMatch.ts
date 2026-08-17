/**
 * Deciding whether OCR text describes a payment to one of our accounts.
 *
 * Checkout offers two destinations, and receipts look nothing alike:
 *
 *   UBL bank transfer  -> payee "Talha's School", account 2458390476065
 *   JazzCash/NayaPay/EasyPaisa -> payee "Talha Tariq", number 03257460090
 *
 * Bank apps also mask the middle of account numbers ("2458xxx6065"), so an
 * exact match on the full number is not enough on its own.
 *
 * Deliberately free of DOM and Node APIs so it can run on either side.
 */

/** UBL account 2458390476065, and the IBAN that ends with the same digits. */
const ACCOUNT_NUMBER = '2458390476065';
const ACCOUNT_PREFIX = '2458';
const ACCOUNT_SUFFIX = '6065';
const IBAN_TAIL = '90476065';

/** Wallet number 03257460090, without the leading zero so +92 forms match. */
const WALLET_NUMBER = '3257460090';
/** Enough of the wallet number to survive masking. */
const WALLET_TAIL = '7460090';

/** A masked account renders as prefix, a few filler characters, then suffix. */
const MASKED_ACCOUNT = new RegExp(
  `${ACCOUNT_PREFIX}[\\dx*•\\s-]{0,12}${ACCOUNT_SUFFIX}`,
  'i',
);

/** Either payee name is enough, but both of its words must be present. */
const NAME_FORMS = [
  ['talha', 'school'],
  ['talha', 'tariq'],
];

/** Levenshtein distance, giving up as soon as it exceeds `limit`. */
function distanceWithin(a: string, b: string, limit: number) {
  let previous = Array.from({ length: b.length + 1 }, (_, i) => i);

  for (let i = 1; i <= a.length; i++) {
    const current = [i];
    let best = i;
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      current[j] = Math.min(
        previous[j] + 1,
        current[j - 1] + 1,
        previous[j - 1] + cost,
      );
      best = Math.min(best, current[j]);
    }
    if (best > limit) return limit + 1;
    previous = current;
  }

  return previous[b.length];
}

/**
 * True when `needle` appears in `haystack` allowing a small number of OCR
 * errors — "tarlq" should still match "tariq".
 */
function includesFuzzy(haystack: string, needle: string, limit: number) {
  if (haystack.includes(needle)) return true;

  for (
    let length = needle.length - limit;
    length <= needle.length + limit;
    length++
  ) {
    if (length <= 0) continue;
    for (let start = 0; start + length <= haystack.length; start++) {
      if (distanceWithin(haystack.slice(start, start + length), needle, limit) <= limit) {
        return true;
      }
    }
  }

  return false;
}

/** Decide whether OCR text looks like a payment to one of our accounts. */
export function matchesPayee(rawText: string) {
  if (!rawText) return false;

  const text = rawText.toLowerCase();

  // Masking uses letters, so test the number patterns before stripping them.
  if (MASKED_ACCOUNT.test(text)) return true;

  const digits = text.replace(/\D/g, '');
  if (
    digits.includes(ACCOUNT_NUMBER) ||
    digits.includes(IBAN_TAIL) ||
    digits.includes(WALLET_NUMBER) ||
    digits.includes(WALLET_TAIL)
  ) {
    return true;
  }

  // Drop apostrophes so "talha's" reads as "talhas", then keep letters only.
  const letters = text.replace(/['’`]/g, '').replace(/[^a-z]/g, '');

  return NAME_FORMS.some((parts) =>
    parts.every((part) => includesFuzzy(letters, part, 1)),
  );
}
