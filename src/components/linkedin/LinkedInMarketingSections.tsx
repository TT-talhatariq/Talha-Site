import Link from 'next/link';
import React from 'react';

export function LinkedInProblemSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 py-16 lg:py-24">
      <div className="container mx-auto max-w-3xl px-4">
        <h2 className="mb-10 text-center text-3xl font-bold text-gray-900 lg:text-4xl">
          Your LinkedIn Is Online.
          <br />
          <span className="text-orange-500">So Why Is Your Inbox Empty?</span>
        </h2>
        <div className="space-y-6 text-lg leading-relaxed text-gray-700">
          <p>Most professionals do the same things on LinkedIn:</p>
          <ul className="space-y-3 border-l-2 border-blue-200 pl-4">
            <li>Update the headline, add a few skills, turn on &quot;Open to Work.&quot;</li>
            <li>Connect with hundreds of people — then never speak to any of them.</li>
            <li>Wait for recruiters and clients to message. They never do.</li>
          </ul>
          <p>And then they conclude:</p>
          <p className="font-semibold text-gray-900">
            &quot;LinkedIn doesn&apos;t work for people like me.&quot;
            <br />
            &quot;You need a huge following first.&quot;
            <br />
            &quot;I&apos;m not a content person.&quot;
          </p>
          <p className="font-semibold text-gray-900">Here&apos;s what&apos;s actually true:</p>
          <p>
            Recruiters and clients don&apos;t message profiles that read like a digital
            resume. They message profiles that clearly say{' '}
            <span className="font-semibold text-gray-900">who you help and how.</span>
          </p>
          <p>
            The people getting inbound opportunities on LinkedIn don&apos;t have a bigger
            network or better luck. Their profile and their posts are doing a job yours
            simply aren&apos;t — yet.
          </p>
          <p className="rounded-xl border border-orange-200 bg-orange-50/80 p-4 font-semibold text-gray-900">
            You don&apos;t need 10,000 followers. You need a profile that converts and a
            simple, repeatable rhythm.
          </p>
        </div>
      </div>
    </section>
  );
}

export function LinkedInOutcomeSection() {
  const outcomes = [
    'A headline and About section that say exactly who you help — so the right people stop scrolling.',
    'A Featured section and profile order that turn a visit into a DM.',
    'A clear niche and positioning, so you are not just another generalist in the feed.',
    'A content system — hooks, real lessons, soft asks — that feels natural, not like bragging.',
    'The 3C rhythm: a clear message, steady posts, and conversations that turn into calls.',
    'A cold-DM and networking approach that opens doors with one angle and one ask.',
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
          A profile that works for you 24/7 — and a posting habit you can actually keep.
        </p>
      </div>
    </section>
  );
}

interface LinkedInFinalCtaSectionProps {
  checkoutHref?: string;
}

export function LinkedInFinalCtaSection({
  checkoutHref = '/checkout-linkedin',
}: LinkedInFinalCtaSectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 py-16 text-white lg:py-24">
      <div className="container mx-auto max-w-3xl px-4 text-center">
        <h2 className="mb-6 text-2xl font-bold lg:text-4xl">
          Every Week You Stay Invisible Is a Week of Missed Opportunities
        </h2>
        <p className="mb-10 text-lg leading-relaxed text-slate-300">
          The system is built. The templates are ready. The AI Profile Optimizer is
          included. The only variable is whether you decide to fix your LinkedIn today.
        </p>
        <Link
          href={checkoutHref}
          className="mb-8 inline-flex items-center justify-center rounded-full bg-orange-500 px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-orange-600"
        >
          ENROLL NOW — PKR 1,997
        </Link>
        <ul className="mb-6 space-y-2 text-left text-sm text-slate-300">
          <li>✓ The LinkedIn Magnet System (6 Modules)</li>
          <li>✓ Headline &amp; About Templates Pack</li>
          <li>✓ AI LinkedIn Profile Optimizer</li>
          <li>✓ Ask Me Directly — personal profile feedback</li>
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
