'use client';

import React from 'react';

import Link from 'next/link';

import NavBar from './NavBar';

const HeroSection = () => {
  return (
    <>
      <NavBar />

      <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-orange-100/50">
        <div className="absolute top-0 left-0 h-[600px] w-[600px] animate-pulse rounded-full bg-gradient-to-br from-blue-200/40 via-blue-100/30 to-transparent mix-blend-multiply blur-3xl filter opacity-60"></div>
        <div className="animation-delay-2000 absolute bottom-0 right-0 h-[500px] w-[500px] animate-pulse rounded-full bg-gradient-to-tl from-orange-200/50 via-orange-100/40 to-transparent mix-blend-multiply blur-3xl filter opacity-50"></div>
        <div className="animation-delay-4000 absolute top-1/2 left-1/3 h-[400px] w-[400px] animate-pulse rounded-full bg-gradient-to-r from-purple-100/30 to-pink-100/30 mix-blend-multiply blur-3xl filter opacity-40"></div>

        <div className="relative z-10 container mx-auto py-8">
          <div className="container mx-auto px-4 py-2 lg:py-12">
            <div className="flex flex-col items-center gap-10 lg:flex-row lg:justify-between lg:items-start">
              <div className="w-full space-y-6 text-center lg:w-1/2 lg:text-left">
                <p className="text-sm font-semibold leading-snug text-blue-600 sm:text-base">
                  For students and young professionals in Pakistan looking for real
                  skills.
                </p>
                <h1 className="text-3xl font-bold leading-tight text-gray-900 lg:text-5xl">
                  Learn AI-Powered <span className="text-orange-500">Web Dev</span> with{' '}
                  <span className="text-blue-600">15+ Projects</span>
                  <br />
                  and Unlock the <span className="text-orange-500">9+ Proven Methods</span>{' '}
                  to Earn at Least <span className="text-green-600">400k+</span> a Month
                </h1>
                <p className="text-lg leading-relaxed text-gray-600 lg:text-xl">
                  After learning web, in 6 weeks, you&apos;ll have the exact system go from
                 0 to $2,000+/month online.
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
                  7-Day Money Back Guarantee · Lifetime Access.
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
                        title="Web Development Masterclass Preview"
                        src="https://www.youtube.com/embed/LDZd2nud-e8?si=QEUtS01MmNk8Vq6V&start=7"
                        loading="eager"
                        allow="autoplay; encrypted-media; picture-in-picture; fullscreen; clipboard-write"
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

export default HeroSection;
