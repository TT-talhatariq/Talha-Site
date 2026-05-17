import Link from 'next/link';
import React from 'react';

export function UpworkProblemSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 py-16 lg:py-24">
      <div className="container mx-auto max-w-3xl px-4">
        <h2 className="mb-10 text-center text-3xl font-bold text-gray-900 lg:text-4xl">
          You&apos;ve Sent Dozens of Proposals.
          <br />
          <span className="text-orange-500">Here&apos;s Why They Get Ignored.</span>
        </h2>
        <div className="space-y-6 text-lg leading-relaxed text-gray-700">
          <p>Most freelancers on Upwork do the exact same thing:</p>
          <ul className="space-y-3 border-l-2 border-blue-200 pl-4">
            <li>Set up a profile that lists skills instead of selling outcomes.</li>
            <li>Send the same generic proposal to every job and hope one sticks.</li>
            <li>Drop the price to compete — and still hear nothing back.</li>
          </ul>
          <p>And then they reach one of three conclusions:</p>
          <p className="font-semibold text-gray-900">
            &quot;Clients don&apos;t hire from Pakistan.&quot;
            <br />
            &quot;Upwork is too saturated now.&quot;
            <br />
            &quot;I need reviews before anyone will hire me.&quot;
          </p>
          <p className="font-semibold text-gray-900">Here&apos;s what&apos;s actually true:</p>
          <p>
            Clients don&apos;t filter by country — they filter by profile quality. A weak
            profile from the US loses to a strong profile from Pakistan every time.
          </p>
          <p>
            The freelancers winning $1,000–$4,000 projects right now don&apos;t have better
            skills than you. Their profile and their proposals are simply doing a job
            yours aren&apos;t.
          </p>
          <p className="rounded-xl border border-orange-200 bg-orange-50/80 p-4 font-semibold text-gray-900">
            You don&apos;t need a cheaper price. You need a profile and a proposal that make
            the client stop scrolling.
          </p>
        </div>
      </div>
    </section>
  );
}

export function UpworkOutcomeSection() {
  const outcomes = [
    'A profile photo, title, and overview that read like a $1,000+ freelancer — not a beginner.',
    'A portfolio that proves results, even if you don\'t have paid clients yet.',
    'A job-scoring habit so you stop wasting Connects on roles that were never going to hire you.',
    'A repeatable proposal formula — hook, proof, plan, one clear next step — that gets replies in 48 hours.',
    'Premium packages and a price floor, so you never race to the bottom again.',
    'A clear path from your first win to a Top Rated badge and a steady $4,000+/month.',
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 py-16 text-white lg:py-20">
      <div className="container mx-auto max-w-3xl px-4 text-center">
        <h2 className="mb-6 text-3xl font-bold lg:text-4xl">
          By the End of This Course,
          <br />
          <span className="text-orange-400">You Will Have —</span>
        </h2>
        <ul className="mt-8 space-y-3 border-l-2 border-orange-400/50 pl-4 text-left text-lg leading-relaxed text-slate-200">
          {outcomes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="mt-8 font-semibold text-orange-300">
          Not theory. A profile that&apos;s live and proposals that are out — within your
          first week.
        </p>
      </div>
    </section>
  );
}

interface UpworkFinalCtaSectionProps {
  checkoutHref?: string;
}

export function UpworkFinalCtaSection({
  checkoutHref = '/checkout-upwork',
}: UpworkFinalCtaSectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 py-16 text-white lg:py-24">
      <div className="container mx-auto max-w-3xl px-4 text-center">
        <h2 className="mb-6 text-2xl font-bold lg:text-4xl">
          Every Week You Wait Is Another Week of Proposals Into Silence
        </h2>
        <p className="mb-10 text-lg leading-relaxed text-slate-300">
          The system is built. The Proposal Playbook is ready. The AI Proposal Generator
          is included. The only variable is whether you decide to fix your Upwork today.
        </p>
        <Link
          href={checkoutHref}
          className="mb-8 inline-flex items-center justify-center rounded-full bg-orange-500 px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-orange-600"
        >
          ENROLL NOW — PKR 1,997
        </Link>
        <ul className="mb-6 space-y-2 text-left text-sm text-slate-300">
          <li>✓ The Upwork Client System (6 Modules)</li>
          <li>✓ The Proposal Playbook (real proposals that won real clients)</li>
          <li>✓ AI Upwork Proposal Generator</li>
          <li>✓ Ask Me Directly — personal proposal &amp; profile feedback</li>
          <li>✓ 700+ Remote Worker Community</li>
          <li>✓ Lifetime Access + All Future Updates</li>
        </ul>
        <p className="text-sm text-slate-400">
          Secure Checkout · 7-Day Refund · Lifetime Access
        </p>
      </div>
    </section>
  );
}
