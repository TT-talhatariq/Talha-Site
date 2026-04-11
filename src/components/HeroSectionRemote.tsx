'use client';

import Link from 'next/link';
import React from 'react';

import NavBar from './NavBar';

const HeroSectionRemote = () => {
  return (
    <>
      <NavBar href="#pricing" />

      <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-orange-100/50">
        <div className="absolute top-0 left-0 h-[600px] w-[600px] animate-pulse rounded-full bg-gradient-to-br from-blue-200/40 via-blue-100/30 to-transparent mix-blend-multiply opacity-60 blur-3xl filter"></div>
        <div className="animation-delay-2000 absolute bottom-0 right-0 h-[500px] w-[500px] animate-pulse rounded-full bg-gradient-to-tl from-orange-200/50 via-orange-100/40 to-transparent mix-blend-multiply opacity-50 blur-3xl filter"></div>
        <div className="animation-delay-4000 absolute top-1/2 left-1/3 h-[400px] w-[400px] animate-pulse rounded-full bg-gradient-to-r from-purple-100/30 to-pink-100/30 mix-blend-multiply opacity-40 blur-3xl filter"></div>

        <div className="relative z-10 container mx-auto py-8">
          <div className="container mx-auto px-4 py-2 lg:py-12">
            <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:justify-between">
              <div className="w-full space-y-6 text-center lg:w-1/2 lg:text-left">
                <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
                  For Pakistani professionals with real skills
                </p>
                <h1 className="text-3xl font-bold leading-tight text-gray-900 lg:text-5xl">
                  The Reason You&apos;re Not Earning Remotely
                  <br />
                  <span className="text-orange-500">Has Nothing to Do With Your Skills</span>
                </h1>
                <p className="text-lg leading-relaxed text-gray-600 lg:text-xl">
                  It&apos;s your visibility. Your positioning. Your approach. This 6-week system
                  fixes all three and will help you land{' '}
                  <span className="font-bold text-gray-900">$1,000–$5,000/month</span>
                  {' '}
                  in remote income without leaving Pakistan.
                </p>
                <div className="flex flex-col items-center gap-3 sm:flex-row lg:items-start">
                  <Link
                    href="#pricing"
                    className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-4 text-center text-base font-bold text-white shadow-lg transition hover:bg-blue-700"
                  >
                    Start Right Now
                  </Link>
                </div>
                <p className="text-sm text-gray-500">
                  Lifetime Access · Instant Enrollment
                </p>
              </div>

              <div className="flex w-full justify-center lg:w-1/2 lg:justify-end">
                <div className="relative">
                  <div className="rounded-2xl border border-gray-200 bg-white p-1 shadow-xl">
                    <div className="overflow-hidden rounded-xl">
                      <iframe
                        width="560"
                        height="325"
                        className="aspect-video w-full rounded-lg"
                        title="Remote Work Masterclass Preview"
                        src="https://www.youtube.com/embed/AMnbOT1UAf8?autoplay=1&mute=1&modestbranding=1&rel=0&showinfo=0"
                        loading="eager"
                        allow="autoplay; encrypted-media; picture-in-picture; fullscreen; web-share; clipboard-write"
                        allowFullScreen
                        frameBorder="0"
                        referrerPolicy="strict-origin-when-cross-origin"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSectionRemote;
