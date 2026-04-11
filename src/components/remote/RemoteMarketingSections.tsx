import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export function RemoteProblemSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 py-16 lg:py-24">
      <div className="container mx-auto max-w-3xl px-4">
        <h2 className="mb-10 text-center text-3xl font-bold text-gray-900 lg:text-4xl">
          You&apos;ve Probably Already Tried This.
          <br />
          <span className="text-orange-500">Here&apos;s Why It Didn&apos;t Work.</span>
        </h2>
        <div className="space-y-6 text-lg leading-relaxed text-gray-700">
          <p>Most professionals trying to get remote work do the same things:</p>
          <ul className="space-y-3 border-l-2 border-blue-200 pl-4">
            <li>
            Set up an Upwork profile. Send proposals. Hear nothing back.
            </li>
            <li>
              Update their LinkedIn. Add &quot;Open to Work.&quot; Wait weeks. No recruiter
              messages.
            </li>
            <li>
              Apply to remote job listings. no response or just rejections
            </li>
          </ul>
          <p>And then they reach one of three conclusions:</p>
          <p className="font-semibold text-gray-900">
            &quot;Pakistani applicants get filtered out.&quot;
            <br />
            &quot;The market is too saturated.&quot;
            <br />
            &quot;I don&apos;t have enough experience yet.&quot;
          </p>
          <p className="font-semibold text-gray-900">Here&apos;s what&apos;s actually true:</p>
          <p>Every one of those conclusions is wrong.</p>
          <p>
            The professionals earning $2,000–$5,000/month remotely right now don&apos;t have
            better skills than you. They don&apos;t have more experience. They don&apos;t have
            connections you lack.
          </p>
          <p className="rounded-xl border border-orange-200 bg-orange-50/80 p-4 font-semibold text-gray-900">
            They found opportunities in a smart way that you don&apos;t know yet
          </p>
        </div>
      </div>
    </section>
  );
}

export function RemoteFalseBeliefsSection() {
  const cards = [
    {
      myth: 'Pakistani applicants get filtered out before a human even sees the application.',
      truth:
        'Clients on Upwork don\'t filter by country — they filter by profile quality. A weak profile from the US loses to a strong profile from Pakistan every time. We fix your profile.',
    },
    {
      myth: 'I don\'t have enough experience. I need 2–3 more years before I\'m competitive remotely.',
      truth:
        'Remote clients and employers don\'t hire resumes — they hire demonstrated capability. This course shows you exactly how to present what you already have so that it communicates maximum value.',
    },
    {
      myth: 'The market is too saturated. There are thousands of people competing for the same jobs.',
      truth:
        'The market is saturated with average applications from people doing what everyone else does. The moment your profile and proposals are above average — you\'re not competing with thousands. You\'re competing with a handful.',
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-16 lg:py-24">
      <div className="container mx-auto max-w-5xl px-4">
        <p className="mb-2 text-center text-xs font-semibold uppercase tracking-widest text-blue-600">
          Let&apos;s Address the Three Things Holding You Back
        </p>
        <h2 className="mb-12 text-center text-2xl font-bold text-gray-900 lg:text-3xl">
          Myth vs truth
        </h2>
        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
          {cards.map((c, i) => (
            <div
              key={i}
              className="rounded-2xl border border-slate-200 bg-slate-900 p-6 text-slate-100 shadow-lg"
            >
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-orange-400">
                The myth
              </p>
              <p className="mb-4 text-sm font-medium text-white">{c.myth}</p>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-emerald-400">
                The truth
              </p>
              <p className="text-sm leading-relaxed text-slate-300">{c.truth}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function RemoteStorySection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50/40 py-16 lg:py-24">
      <div className="container mx-auto max-w-3xl px-4">
        <p className="mb-2 text-center text-xs font-semibold uppercase tracking-widest text-blue-600">
          From the instructor
        </p>
        <h2 className="mb-10 text-center text-2xl font-bold text-gray-900 lg:text-3xl">
          I Was Exactly Where You Are. Here&apos;s the Moment Everything Changed.
        </h2>
        <div className="space-y-5 text-lg leading-relaxed text-gray-700">
          <p>
            In 2022, I was a full-time software engineer at Arbisoft — one of
            Pakistan&apos;s biggest tech companies. Good job. Stable salary. In rupees.
          </p>
          <p>
            I was watching people with similar skills — sometimes weaker skills —
            earning $2,000–$4,000/month from home. Same platforms. Same experience level.
            Different results.
          </p>
          <p>
            I tried Upwork. Set up a profile the same way everyone told me to. Sent 30
            proposals in two months. Got 3 responses. Zero clients.
          </p>
          <p>
            I tried LinkedIn. Updated my headline, added skills, turned on &quot;Open to
            Work.&quot; Not a single recruiter message in 8 weeks.
          </p>
          <p>
            For a long time I thought the problem was me. Maybe my skills weren&apos;t good
            enough. Maybe Pakistani developers just don&apos;t get picked. Maybe I needed
            another year of experience.
          </p>
          <p className="font-semibold text-gray-900">
            Then I had one conversation that changed everything.
          </p>
          <p>
            I connected with a developer in Karachi earning $3,500/month on Upwork. His
            technical skills were, honestly, about the same level as mine. Maybe slightly
            below in some areas.
          </p>
          <p>I asked him what was different.</p>
          <p className="rounded-xl border border-blue-200 bg-blue-50/90 p-4 italic text-gray-800">
            &quot;Your profile is explaining what you know. Mine is explaining what I can do
            for a client. Those are completely different things.&quot;
          </p>
          <p className="font-semibold text-gray-900">
            That one sentence broke the thing I&apos;d been doing wrong for two years.
          </p>
          <p>
            I rewrote my profile. Rewrote my proposals. Changed the way I presented
            myself on LinkedIn.
          </p>
          <ul className="list-inside list-disc space-y-2 text-gray-800">
            <li>First Upwork client: 2 weeks later.</li>
            <li>Top Rated badge: 6 months after that.</li>
            <li>Fiverr Choice badge (top 1% of the entire platform): 8 months later.</li>
            <li>$50,000+ earned while holding a full-time engineering role.</li>
          </ul>
          <p className="rounded-xl border border-orange-200 bg-orange-50/80 p-4 text-lg font-semibold text-gray-900">
            I built this course to give you that one conversation — and every tactical step
            that followed it.
          </p>
          <p className="pt-4 text-right font-semibold text-gray-900">— Talha Tariq</p>
        </div>
      </div>
    </section>
  );
}

export function RemoteOpportunitySection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 py-16 text-white lg:py-20">
      <div className="container mx-auto max-w-3xl px-4 text-center">
        <h2 className="mb-6 text-3xl font-bold lg:text-4xl">
          This Isn&apos;t Job Hunting.
          <br />
          <span className="text-orange-400">This Is Positioning.</span>
        </h2>
        <div className="space-y-6 text-left text-lg leading-relaxed text-slate-200">
          <p>
            Job hunting is reactive. You apply, you wait, you hope someone picks you.
          </p>
          <p>
            Positioning is proactive. You build a profile so compelling that opportunities
            come to you — recruiter messages, client invitations, inbound DMs.
          </p>
          <p className="font-semibold text-white">The Dollar Income System teaches positioning.</p>
          <p className="font-semibold text-white">Here&apos;s what that means in practice:</p>
          <ul className="space-y-3 border-l-2 border-orange-400/50 pl-4">
            <li>Your LinkedIn profile becomes a lead magnet — not a digital resume</li>
            <li>Your Upwork proposals get responses in 48 hours — not silence for weeks</li>
            <li>Your resume clears ATS systems and gets read by humans</li>
            <li>
              Your interviews become conversations you control — not interrogations you
              survive
            </li>
          </ul>
          <p>One shift in how you present yourself. Completely different outcomes on the other side.</p>
          <p className="font-semibold text-orange-300">That&apos;s what these 6 weeks are for.</p>
        </div>
      </div>
    </section>
  );
}

export function RemoteGuaranteeSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 to-white py-16 lg:py-24">
      <div className="container mx-auto max-w-3xl px-4 text-center">
        <h2 className="mb-8 text-3xl font-bold text-gray-900 lg:text-4xl">
          The 60-Day Remote Offer Guarantee
        </h2>
        <div className="mb-10 space-y-5 text-left text-lg leading-relaxed text-gray-700">
          <p>
            Go through the course. Build your LinkedIn profile using the system. Apply using
            the Proposal Playbook. Rewrite your resume with Module 2.
          </p>
          <p>
            If you complete these steps and don&apos;t receive at least one serious interview
            invitation or client inquiry within 60 days of enrollment — I&apos;ll refund every
            rupee.
          </p>
          <p>No forms. No tricks. Just email me with proof you did the work.</p>
          <p className="font-semibold text-gray-900">Here&apos;s why I can offer this:</p>
          <p>
            800+ students have gone through this system. The students who follow the steps
            get results. The students who don&apos;t — I&apos;d honestly rather give them their money
            back than have them say the system doesn&apos;t work.
          </p>
          <p className="font-bold text-gray-900">
            You follow the system. You get an offer. Or you get your money back.
            <br />
            Those are the only two outcomes.
          </p>
        </div>
        <div className="rounded-2xl border-2 border-green-200 bg-green-50/80 p-6 text-left text-gray-800">
          <ul className="space-y-2">
            <li>
              ✓ 60-Day Remote Offer Guarantee — complete the steps, get results or get
              refunded
            </li>
            <li>✓ 7-Day No-Questions Refund — change your mind in the first week, full refund</li>
            <li>✓ Lifetime Access — your investment never expires</li>
            <li>✓ Ask Me Directly — personal feedback throughout the process</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export function RemoteInstructorBioSection() {
  const credentialTags = [
    'Founder — Ownex Labs',
    "Founder — Talha's School",
    "Upwork Top Rated (100% Job Success)",
    "Fiverr Choice (Top 1% of sellers)",
    'CTO — CollabAway (UK)',
    "Software Team Lead — CarZoomo (US)",
    "Founding Engineer — Casaidy (US)",
    "Senior Software Engineer - CarBacked (US)",
    "Senior Software Engineer - Coverage Creatives (US)",
    "Software Engineer - Arbisoft (PK)",
    "Author of 5 Books"
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 py-16 lg:py-24">
      <div className="container mx-auto max-w-3xl px-4">
        <p className="mb-8 text-center text-xs font-semibold uppercase tracking-widest text-blue-600">
          Your Instructor
        </p>

        <div className="mb-8 flex justify-center">
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">
            <Image
              src="/assets/talha.jpg"
              alt="Talha Tariq"
              width={320}
              height={400}
              className="h-[320px] w-[260px] object-cover object-center sm:h-[360px] sm:w-[288px]"
              sizes="(max-width: 640px) 260px, 288px"
              priority={false}
            />
          </div>
        </div>

        <h2 className="mb-3 text-center text-3xl font-bold text-gray-900 lg:text-4xl">
          Talha Tariq
        </h2>
        <p className="mb-1 text-center text-lg font-semibold text-gray-800">
         Full Stack AI Product Engineer
        </p>
        <p className="mb-8 text-center text-sm text-gray-600">
          Lahore, Pakistan · 4+ years · Remote-first ·{' '}
          <a
            href="https://talhatariq.io"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-blue-600 underline-offset-2 hover:underline"
          >
            talhatariq.io
          </a>
        </p>

        <p className="mb-6 text-center text-base font-semibold text-gray-900">
          Here&apos;s what I&apos;m doing now — and what I&apos;ve done in the past.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {credentialTags.map((label) => (
            <span
              key={label}
              className="max-w-prose rounded-full bg-slate-100 px-4 py-2 text-center text-sm leading-snug text-gray-800"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

interface RemoteFinalCtaSectionProps {
  checkoutHref?: string;
}

export function RemoteFinalCtaSection({
  checkoutHref = '/checkout-remote-work',
}: RemoteFinalCtaSectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 py-16 text-white lg:py-24">
      <div className="container mx-auto max-w-3xl px-4 text-center">
        <h2 className="mb-6 text-2xl font-bold lg:text-4xl">
          Every Week You Wait Is Another Week of Earning in Rupees
        </h2>
        <p className="mb-4 text-lg text-slate-300">
          While others earn in dollars — with the same skills.
        </p>
        <p className="mb-10 text-lg leading-relaxed text-slate-300">
          The system is built. The guarantee is on the table. 800+ students have already
          used it. The only variable is whether you decide to act today.
        </p>
        <Link
          href={checkoutHref}
          className="mb-8 inline-flex items-center justify-center rounded-full bg-orange-500 px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-orange-600"
        >
          ENROLL NOW
        </Link>
        <ul className="mb-6 space-y-2 text-left text-sm text-slate-300">
          <li>✓ The Dollar Income System (6 Modules)</li>
          <li>✓ The Proposal Playbook (real proposals that won real clients)</li>
          <li>✓ The Tech Portal — 6 AI Career Tools</li>
          <li>✓ Ask Me Directly (50 spots available)</li>
          <li>✓ 700+ Remote Worker Community</li>
          <li>✓ Global Job Board Database</li>
          <li>✓ Lifetime Access + All Future Updates</li>
        </ul>
        <p className="mb-8 text-slate-300">
          <span className="line-through">Total Value: PKR 59,000</span>{' '}
          <span className="font-bold text-white">Your Price: PKR 4,797</span>
        </p>
        <p className="text-sm text-slate-400">
          Secure Checkout · 7-Day Refund · 60-Day Remote Offer Guarantee · Lifetime Access
        </p>
      </div>
    </section>
  );
}
