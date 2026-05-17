'use client';

import Link from 'next/link';
import React from 'react';

import NavBar from './NavBar';

const HeroSectionLinkedIn = () => {
  return (
    <>
      <NavBar href="#pricing" />

      <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-orange-100/50">
        <div className="absolute top-0 left-0 h-[600px] w-[600px] animate-pulse rounded-full bg-gradient-to-br from-blue-200/40 via-blue-100/30 to-transparent mix-blend-multiply opacity-60 blur-3xl filter"></div>
        <div className="animation-delay-2000 absolute bottom-0 right-0 h-[500px] w-[500px] animate-pulse rounded-full bg-gradient-to-tl from-orange-200/50 via-orange-100/40 to-transparent mix-blend-multiply opacity-50 blur-3xl filter"></div>
        <div className="animation-delay-4000 absolute top-1/2 left-1/3 h-[400px] w-[400px] animate-pulse rounded-full bg-gradient-to-r from-purple-100/30 to-pink-100/30 mix-blend-multiply opacity-40 blur-3xl filter"></div>

        <div className="relative z-10 container mx-auto py-8">
          <div className="container mx-auto px-4 py-8 lg:py-20">
            <div className="mx-auto flex max-w-3xl flex-col items-center space-y-6 text-center">
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
                For Pakistani professionals invisible on LinkedIn
              </p>
              <h1 className="text-3xl font-bold leading-tight text-gray-900 lg:text-5xl">
                Turn Your LinkedIn Into a
                <br />
                <span className="text-orange-500">Client &amp; Recruiter Magnet</span>
              </h1>
              <p className="text-lg leading-relaxed text-gray-600 lg:text-xl">
                A focused system to build a profile that turns views into DMs —
                and a content rhythm that brings{' '}
                <span className="font-bold text-gray-900">$3,000+/month</span>{' '}
                opportunities to you, instead of you chasing them.
              </p>
              <div className="flex flex-col items-center gap-3 sm:flex-row">
                <Link
                  href="#pricing"
                  className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-4 text-center text-base font-bold text-white shadow-lg transition hover:bg-blue-700"
                >
                  Start Right Now
                </Link>
              </div>
              <p className="text-sm text-gray-500">
                Lifetime Access · Instant Enrollment · 7-Day Refund
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSectionLinkedIn;
