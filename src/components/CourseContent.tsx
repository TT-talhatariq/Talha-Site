'use client';

import React, { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia(query);
    const onChange = (e: MediaQueryListEvent) => setMatches(e.matches);
    setMatches(mql.matches);
    mql.addEventListener('change', onChange);
    return () => mql.removeEventListener('change', onChange);
  }, [query]);

  return matches;
}

export interface CourseModule {
  number: string;
  title: string;
  subtitle?: string;
  items: string[];
  /** default = checkmark left of each line. stacked-with-separator = title, then centered ✅ between items (like a vertical checklist). */
  itemsLayout?: 'default' | 'stacked-with-separator';
  image: string;
  imageAlt: string;
  bgGradient: string;
}

interface CourseContentProps {
  modules: CourseModule[];
  preLabel?: string;
  heading?: React.ReactNode;
  subheading?: string;
  midCtaLabel?: string;
  midCtaHref?: string;
  /** Text under the mid-page CTA (e.g. guarantee line). */
  midCtaFinePrint?: string;
}

const CourseContent = ({
  modules,
  preLabel,
  heading,
  subheading,
  midCtaLabel,
  midCtaHref = '/checkout-web-dev',
  midCtaFinePrint = 'Instant access · Lifetime · 30-Day First Client Guarantee',
}: CourseContentProps) => {
  const isLg = useMediaQuery('(min-width: 1024px)');
  const [openIndices, setOpenIndices] = useState<Set<number>>(() => new Set([0]));

  const toggleModule = (index: number) => {
    if (isLg) return;
    setOpenIndices((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  const isModuleOpen = (index: number) => isLg || openIndices.has(index);

  const defaultHeading = (
    <>
      Course <span className="text-orange-500">Curriculum</span>
    </>
  );

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-white via-orange-50/20 to-blue-50/30 py-4 lg:py-24"
      id="curriculum"
    >
      <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-gradient-to-bl from-blue-200/30 via-blue-100/20 to-transparent mix-blend-multiply blur-3xl filter opacity-40"></div>
      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-orange-200/30 via-orange-100/20 to-transparent mix-blend-multiply blur-3xl filter opacity-40"></div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mb-16 text-center">
          {preLabel ? (
            <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-orange-600">
              {preLabel}
            </p>
          ) : null}
          <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
            {heading ?? defaultHeading}
          </h2>
          {subheading ? (
            <p className="mx-auto max-w-2xl text-base text-gray-600">{subheading}</p>
          ) : null}
        </div>

        <div className="container mx-auto space-y-12">
          {modules.map((module, index) => {
            const open = isModuleOpen(index);
            const panelId = `course-module-panel-${index}`;

            return (
              <div
                key={index}
                className={`${module.bgGradient} rounded-3xl border border-white/50 p-4 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-[1.01] hover:shadow-xl lg:p-8`}
              >
                <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-12">
                  <div className="space-y-6 lg:w-1/2">
                    <button
                      type="button"
                      id={`course-module-trigger-${index}`}
                      className="mb-2 flex w-full items-start gap-3 rounded-xl text-left outline-none ring-offset-2 focus-visible:ring-2 focus-visible:ring-orange-500 lg:mb-6 lg:pointer-events-none lg:cursor-default"
                      onClick={() => toggleModule(index)}
                      aria-expanded={open}
                      aria-controls={panelId}
                    >
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 text-lg font-bold text-white shadow-lg">
                        {module.number}
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-xl font-bold text-gray-900 lg:text-3xl">
                          Module {module.number}: {module.title}
                        </h3>
                      </div>
                      <div
                        className="mt-1 flex flex-shrink-0 flex-col items-center gap-0.5 lg:hidden"
                        aria-hidden
                      >
                        <svg
                          className={`h-5 w-5 text-orange-500 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2.5}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                        <span className="text-[10px] font-semibold uppercase tracking-wide text-orange-500">
                          {open ? 'Hide' : 'Show'}
                        </span>
                      </div>
                    </button>

                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={`course-module-trigger-${index}`}
                      className={`grid grid-cols-1 gap-4 ${open ? '' : 'hidden lg:grid'}`}
                    >
                      {module.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="flex items-start space-x-3 lg:ml-12"
                        >
                          <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded">
                            ✅
                          </div>
                          <span className="text-base leading-snug text-gray-700">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div
                    className={`flex justify-center lg:w-1/2 ${open ? 'flex' : 'hidden lg:flex'}`}
                  >
                    <div className="relative w-full max-w-lg lg:max-w-xl">
                      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-blue-400/30 via-blue-300/20 to-transparent opacity-60 blur-sm"></div>
                      <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-orange-400/20 via-orange-300/15 to-transparent opacity-40 blur-md"></div>

                      <div className="relative aspect-video overflow-hidden rounded-2xl border border-gray-200/50 bg-white shadow-xl backdrop-blur-sm">
                        <Image
                          src={module.image}
                          alt={module.imageAlt}
                          className="h-full w-full object-cover"
                          width={700}
                          height={500}
                        />
                      </div>

                      <div className="animation-delay-1000 absolute -top-3 -left-3 h-4 w-4 animate-pulse rounded-full bg-gradient-to-br from-blue-400 to-purple-400 opacity-40"></div>
                      <div className="absolute -right-3 -bottom-3 h-6 w-6 animate-pulse rounded-full bg-gradient-to-br from-orange-400 to-red-400 opacity-30"></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {midCtaLabel ? (
          <div className="mt-16 flex justify-center">
            <Link
              href={midCtaHref}
              className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-4 text-center text-base font-bold text-white shadow-lg transition hover:bg-blue-700"
            >
              {midCtaLabel}
            </Link>
            <p className="sr-only">{midCtaFinePrint?.replace(/·/g, '.')}</p>
          </div>
        ) : null}
        {midCtaLabel && midCtaFinePrint ? (
          <p className="mt-4 text-center text-sm text-gray-500">
            {midCtaFinePrint}
          </p>
        ) : null}
      </div>
    </section>
  );
};

export default CourseContent;
