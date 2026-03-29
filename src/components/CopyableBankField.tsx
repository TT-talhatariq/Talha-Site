'use client';

import { useState } from 'react';

interface CopyableBankFieldProps {
  label: React.ReactNode;
  displayText: string;
  /** Clipboard text when different from display (e.g. IBAN without spaces) */
  copyText?: string;
  valueClassName?: string;
}

export function CopyableBankField({
  label,
  displayText,
  copyText,
  valueClassName = 'bg-white px-3 py-2 rounded border text-lg',
}: CopyableBankFieldProps) {
  const [copied, setCopied] = useState(false);
  const toCopy = copyText ?? displayText;

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(toCopy);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div>
      <div className="font-semibold mb-1">{label}</div>
      <div className="flex items-stretch gap-2">
        <div
          className={`font-mono flex min-h-[2.75rem] flex-1 items-center min-w-0 ${valueClassName}`}
        >
          {displayText}
        </div>
        <button
          type="button"
          onClick={handleCopy}
          className="flex h-11 w-11 shrink-0 items-center justify-center self-center rounded-lg border border-gray-200 bg-white text-gray-600 shadow-sm transition-colors hover:bg-gray-50 hover:text-blue-600"
          aria-label={copied ? 'Copied' : 'Copy to clipboard'}
          title={copied ? 'Copied!' : 'Copy'}
        >
          {copied ? (
            <svg
              className="h-5 w-5 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          ) : (
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
