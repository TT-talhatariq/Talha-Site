'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { type ReactNode } from 'react';

const DEFAULT_GOOGLE_MAPS_REVIEWS =
  'https://share.google/eazZVgGu4KtcOrmcU';

interface Quote {
  text: string;
  author: string;
}

interface TestimonialsProps {
  href?: string;
  /** Link to Google Maps / Google reviews. Pass empty string to hide. */
  googleMapsReviewsHref?: string;
  preHeading?: string;
  heading?: ReactNode;
  subheading?: string;
  quotes?: Quote[];
  statsBar?: string;
  /** When false, hides the screenshot grid and “Real Success Stories” block (e.g. Remote course page). */
  showSuccessStories?: boolean;
}

const Testimonials = ({
  href = '#pricing',
  googleMapsReviewsHref = DEFAULT_GOOGLE_MAPS_REVIEWS,
  preHeading,
  heading,
  subheading,
  quotes,
  statsBar,
  showSuccessStories = true,
}: TestimonialsProps) => {
  const defaultHeading = (
    <>
      Let&apos;s hear their <span className="text-orange-500">feedback ✍️</span>
    </>
  );

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-2 lg:py-12">
      <div className="absolute top-0 right-0 h-72 w-72 translate-x-36 -translate-y-36 rounded-full bg-orange-100 opacity-30 mix-blend-multiply blur-xl filter"></div>
      <div className="absolute bottom-0 left-0 h-72 w-72 -translate-x-36 translate-y-36 rounded-full bg-blue-100 opacity-30 mix-blend-multiply blur-xl filter"></div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mb-4 text-center lg:mb-16">
          <p className="mb-2 text-sm font-semibold tracking-wide text-orange-500 uppercase pt-4">
            {preHeading ?? '📸 They Took the Workshop'}
          </p>
          <h2 className="mb-2 text-4xl font-bold text-gray-900 lg:text-5xl">
            {heading ?? defaultHeading}
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-gray-600">
            {subheading ??
              "Don't take my words for it. See what other people gave as feedback."}
          </p>
        </div>

        {statsBar ? (
          <p className="mb-10 text-center text-sm font-medium text-gray-600">{statsBar}</p>
        ) : null}

        <div className="mb-16 flex w-full flex-col items-center justify-center">
          <Image src="/assets/wall.png" alt="Wall of Love" width={1600} height={1000} />
          {googleMapsReviewsHref ? (
            <div className="mt-8 w-full max-w-lg rounded-2xl border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white px-5 py-5 text-center shadow-md shadow-blue-100/80">
              <p className="mb-1 text-xs font-bold uppercase tracking-wider text-blue-700">
                Verified on Google
              </p>
              <p className="mb-4 text-sm text-gray-600">
                Read real reviews from students — same profile as on Google Maps.
              </p>
              <a
                href={googleMapsReviewsHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-base font-bold text-white shadow-lg transition hover:bg-blue-700 hover:shadow-xl sm:w-auto sm:min-w-[280px]"
              >
                <span className="text-xl" aria-hidden>
                  📍
                </span>
                <span>See 25+ reviews on Google Maps</span>
                <span className="text-sm font-normal opacity-90" aria-hidden>
                  ↗
                </span>
              </a>
            </div>
          ) : null}
        </div>

        {showSuccessStories ? (
          <div className="mt-16">
            <div className="mb-12 text-center">
              <h3 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
                Real <span className="text-orange-500">Success Stories</span> 📱
              </h3>
              <p className="mx-auto max-w-2xl text-lg text-gray-600">
                Screenshots from our students showing their actual results and achievements
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <div className="col-span-1 rounded-2xl bg-white p-4 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl lg:col-span-2">
                <div className="aspect-[3/2] overflow-hidden rounded-xl bg-gray-100">
                  <Image
                    src="/assets/ss1.png"
                    alt="Client Success Story"
                    width={600}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="rounded-2xl bg-white p-4 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="aspect-[3/4] overflow-hidden rounded-xl bg-gray-100">
                  <Image
                    src="/assets/ss3.png"
                    alt="Facebook Ads Success"
                    width={300}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="rounded-2xl bg-white p-4 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="aspect-[3/4] overflow-hidden rounded-xl bg-gray-100">
                  <Image
                    src="/assets/ss5.png"
                    alt="Upwork Success"
                    width={300}
                    height={400}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="mt-12 mb-8 text-center lg:mb-0">
              <p className="mb-6 text-lg text-gray-600">Ready to join these successful students? 🚀</p>
              <Link
                href={href}
                className="inline-block transform rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-8 py-4 font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-orange-600 hover:to-red-600"
              >
                Start Your Success Story Today
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default Testimonials;
