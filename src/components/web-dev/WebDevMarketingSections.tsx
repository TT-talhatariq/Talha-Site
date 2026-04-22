import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export function WebDevProblemSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 py-16 lg:py-24">
      <div className="container mx-auto max-w-3xl px-4">
        <h2 className="mb-6 text-center text-3xl font-bold text-gray-900 lg:text-4xl">
          Why Most Pakistani Developers Never Earn Online
        </h2>
        <p className="mb-10 text-center text-lg text-gray-600">
          (And It&apos;s Not What You Think)
        </p>
        <div className="space-y-6 text-lg leading-relaxed text-gray-700">
          <p>
            If you&apos;ve tried to earn online and it hasn&apos;t worked, you&apos;ve
            probably been told the problem is one of these:
          </p>
          <ul className="space-y-3">
            <li className="flex gap-2">
              <span className="text-red-500">❌</span>
              <span>&quot;Your skills aren&apos;t strong enough yet.&quot;</span>
            </li>
            <li className="flex gap-2">
              <span className="text-red-500">❌</span>
              <span>
                &quot;You need years of experience before anyone hires you.&quot;
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-red-500">❌</span>
              <span>&quot;You need a CS degree from a top university.&quot;</span>
            </li>
            <li className="flex gap-2">
              <span className="text-red-500">❌</span>
              <span>
                &quot;The market is too competitive — too many developers.&quot;
              </span>
            </li>
          </ul>
          <p>I believed every one of those. They kept me broke for a year.</p>
          <p className="font-semibold text-gray-900">Here&apos;s what&apos;s actually true:</p>
          <p>
            The developers earning $1,000–$5,000/month on Upwork and LinkedIn right
            now are not the most technically skilled people in the room.
          </p>
          <p>They know one thing most developers don&apos;t:</p>
          <p className="rounded-xl border border-orange-200 bg-orange-50/80 p-4 font-semibold text-gray-900">
            How to present, position, and sell what they already know.
          </p>
          <p>
            That&apos;s not a coding skill. It&apos;s a system. And it can be learned in 6
            weeks. That&apos;s what this course teaches.
          </p>
        </div>
      </div>
    </section>
  );
}

export function WebDevOpportunitySection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 py-16 text-white lg:py-20">
      <div className="container mx-auto max-w-3xl px-4 text-center">
        <h2 className="mb-6 text-3xl font-bold lg:text-4xl">
          This Isn&apos;t a Web Dev Bootcamp.
          <br />
          <span className="text-orange-400">It&apos;s a Dollar Income System.</span>
        </h2>
        <div className="space-y-6 text-left text-lg leading-relaxed text-slate-200">
          <p>
            There are hundreds of courses that will teach you HTML, CSS, React and NodeJs.
            Most of them will leave you with skills and zero clients.
          </p>
          <p className="font-semibold text-white">The difference with this course: it teaches you both.</p>
          <p>
            <span className="font-semibold text-white">Part 1 — The Skill:</span> Web
            development from zero to job-ready in 6 weeks. Real projects. Real
            portfolio. Not tutorial clones.
          </p>
          <p>
            <span className="font-semibold text-white">Part 2 — The System:</span> The
            9-Stream Income Blueprint — the exact 9 methods I&apos;ve used (and watched
            700+ students use) to turn web skills into PKR 80,000–400,000/month in
            online income.
          </p>
          <p>You learn both. You leave with both.</p>
          <p className="text-slate-300">
            A coding skill without an income system = an expensive hobby. An income
            system without a skill = nothing to sell.
          </p>
          <p className="font-semibold text-orange-300">
            Together: your first client within 30 days of finishing.
          </p>
        </div>
      </div>
    </section>
  );
}

export function WebDevGuaranteeSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 to-white py-16 lg:py-24">
      <div className="container mx-auto max-w-3xl px-4 text-center">
        <h2 className="mb-8 text-3xl font-bold text-gray-900 lg:text-4xl">
          The &quot;First Client in 30 Days&quot; Guarantee
        </h2>
        <div className="mb-10 space-y-5 text-left text-lg leading-relaxed text-gray-700">
          <p>
            Complete the course. Apply what&apos;s taught. If you don&apos;t land your first
            paid client within 30 days of finishing — I&apos;ll personally work with you
            1-on-1 until you do.
          </p>
          <p>
            And if that still doesn&apos;t work — you get a full refund. No forms. No
            hoops. No questions asked.
          </p>
          <p>
            I put this guarantee on the course for one reason: I&apos;ve seen this system
            work for 700+ students. The ones who follow through get results. The ones
            who don&apos;t — I&apos;d rather refund them than have them say it didn&apos;t work.
          </p>
          <p className="font-bold text-gray-900">
            You either get your first client. Or you get your money back.
            <br />
            There is no third outcome.
          </p>
        </div>
        <div className="rounded-2xl border-2 border-green-200 bg-green-50/80 p-6 text-left text-gray-800">
          <ul className="space-y-2">
            <li>✓ 30-Day First Client Guarantee</li>
            <li>✓ 7-Day No-Questions Refund (if you change your mind early)</li>
            <li>✓ Lifetime Access — no expiry on your investment</li>
            <li>✓ Direct mentor support throughout</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export function WebDevInstructorBioSection() {
  const credentials = [
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

        <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 lg:text-4xl">
          Talha Tariq
        </h2>

        <div className="flex flex-wrap justify-center gap-3">
          {credentials.map((label) => (
            <span
              key={label}
              className="rounded-full bg-slate-100 px-4 py-2 text-center text-sm text-gray-800"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

interface WebDevFinalCtaSectionProps {
  checkoutHref?: string;
}

export function WebDevFinalCtaSection({
  checkoutHref = '/checkout-web-dev',
}: WebDevFinalCtaSectionProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 py-16 text-white lg:py-24">
      <div className="container mx-auto max-w-3xl px-4 text-center">
        <h2 className="mb-6 text-2xl font-bold lg:text-4xl">
          You&apos;ve Already Spent Enough Time Watching Others Earn Online
        </h2>
        <p className="mb-10 text-lg leading-relaxed text-slate-300">
          Every week you wait is another week someone else with the same skills — or
          weaker skills — earns what you could be earning. The system is here. 700+
          students have used it. The guarantee is on the table. The only question is
          whether you&apos;re going to act on it.
        </p>
        <Link
          href={checkoutHref}
          className="mb-8 inline-flex items-center justify-center rounded-full bg-orange-500 px-8 py-4 text-lg font-bold text-white shadow-lg transition hover:bg-orange-600"
        >
          ENROLL NOW — PKR 4,497
        </Link>
        <ul className="mb-6 space-y-2 text-left text-sm text-slate-300">
          <li>✓ 6-Week Web Dev + Income System</li>
          <li>✓ The 9-Stream Income Blueprint</li>
          <li>✓ The Upwork Launch System</li>
          <li>✓ The Tech Portal — 6 AI Career Tools</li>
          <li>✓ Direct Mentor Access (first 100 students)</li>
          <li>✓ 1,000+ Student Community</li>
          <li>✓ Lifetime Access + All Future Updates</li>
        </ul>
        <p className="mb-8 text-slate-300">
          <span className="line-through">Total Value: PKR 53,000</span>{' '}
          <span className="font-bold text-white">Your Price: PKR 4,497</span>
        </p>
        <p className="text-sm text-slate-400">
          Secure Checkout · 7-Day Refund · 30-Day First Client Guarantee · Lifetime
          Access
        </p>
      </div>
    </section>
  );
}
