'use client';

import { useState } from 'react';

interface CopyableBankFieldProps {
  label: React.ReactNode;
  displayText: string;
  /** Clipboard text when different from display (e.g. IBAN without spaces) */
  copyText?: string;
}

/**
 * Facebook and Instagram in-app browsers (where most ad traffic lands) do not
 * always expose the Clipboard API, so fall back to the old execCommand path.
 */
async function copyToClipboard(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    const ok = document.execCommand('copy');
    textarea.remove();
    return ok;
  }
}

/** The whole row is one big tap target that copies the value. */
export function CopyableBankField({
  label,
  displayText,
  copyText,
}: CopyableBankFieldProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    if (await copyToClipboard(copyText ?? displayText)) {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    }
  }

  return (
    <div>
      <div className="font-semibold mb-1">{label}</div>
      <button
        type="button"
        onClick={handleCopy}
        aria-label={`Copy ${displayText}`}
        className={`w-full flex items-center justify-between gap-3 bg-white px-3 py-2.5 rounded-lg border text-left transition-colors ${
          copied
            ? 'border-green-400'
            : 'border-gray-300 hover:border-blue-400'
        }`}
      >
        <span
          className={`font-mono tracking-wide text-gray-900 min-w-0 ${
            displayText.length > 16 ? 'text-sm sm:text-lg' : 'text-lg'
          }`}
        >
          {displayText}
        </span>
        <span
          className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-semibold transition-colors ${
            copied ? 'bg-green-100 text-green-700' : 'bg-blue-50 text-blue-700'
          }`}
        >
          {copied ? (
            <>
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              Copied
            </>
          ) : (
            <>
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              Copy
            </>
          )}
        </span>
      </button>
    </div>
  );
}
