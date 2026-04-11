import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export interface NotForYouPoint {
  text: string;
  linkHref?: string;
  linkLabel?: string;
}

interface IsThisForYouProps {
  points: string[];
  title?: string;
  subtitle?: string;
  bottomText?: string;
  imageSrc?: string;
  imageAlt?: string;
  notForYouPoints?: Array<string | NotForYouPoint>;
  notForYouTitle?: string;
  crossSellHref?: string;
  crossSellLabel?: string;
  /** When false, hides the “Already earn $2k+/month…” footer (e.g. Remote page uses inline links). */
  showCrossSellFooter?: boolean;
}

const IsThisForYou = ({
  points,
  title = 'This is for You if',
  subtitle = "Don't miss this opportunity. You'll thank yourself.",
  bottomText = "If you're stuck, overwhelmed, or ready to finally start - this workshop is built for you. 🏆",
  imageSrc = '/assets/main.png',
  imageAlt = 'Talha Tariq - Professional Photo',
  notForYouPoints,
  notForYouTitle = 'This Is NOT For You If —',
  crossSellHref = '/remote-work',
  crossSellLabel = 'See the Remote Work Mastery course instead',
  showCrossSellFooter = true,
}: IsThisForYouProps) => {
  const showLegacyYouHighlight = title.toLowerCase().includes('this is for you if');

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/30 to-white py-16 lg:py-24">
      <div className="container relative z-10 mx-auto flex flex-col items-center px-4 lg:flex-row lg:items-start">
        <div className="space-y-8 lg:py-8">
          <div className="space-y-4">
            {subtitle ? (
              <p className="text-lg text-gray-700">
                {subtitle.includes('You&apos;ll thank yourself') ||
                subtitle.includes("You'll thank yourself") ? (
                  <>
                    Don&apos;t miss this opportunity.{' '}
                    <span className="font-bold">You&apos;ll thank yourself.</span>
                  </>
                ) : (
                  subtitle
                )}
              </p>
            ) : null}
            <h2 className="text-4xl font-bold text-gray-900 lg:text-5xl">
              {showLegacyYouHighlight ? (
                <>
                  This is for
                  <span className="relative inline-block rounded px-2 py-1 text-orange-500">
                    You
                  </span>{' '}
                  if
                </>
              ) : (
                title
              )}
            </h2>
          </div>

          <div className="space-y-4">
            {points.map((point, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded">
                  ✅
                </div>
                <p className="text-lg leading-snug tracking-tight text-gray-700">
                  {point.includes('real guidance') ? (
                    <>
                      You want <em className="italic">real guidance</em> from someone
                      who&apos;s actually done it
                    </>
                  ) : (
                    point
                  )}
                </p>
              </div>
            ))}
          </div>

          {notForYouPoints && notForYouPoints.length > 0 ? (
            <div className="space-y-4 border-t border-gray-200 pt-10">
              <h3 className="text-2xl font-bold text-gray-900">{notForYouTitle}</h3>
              <div className="space-y-4">
                {notForYouPoints.map((point, index) => {
                  if (typeof point === 'string') {
                    return (
                      <div key={index} className="flex items-start space-x-3">
                        <span className="text-red-500">❌</span>
                        <p className="text-lg leading-snug text-gray-700">{point}</p>
                      </div>
                    );
                  }
                  return (
                    <div key={index} className="flex items-start space-x-3">
                      <span className="text-red-500">❌</span>
                      <p className="text-lg leading-snug text-gray-700">
                        {point.text}{' '}
                        {point.linkHref && point.linkLabel ? (
                          <Link
                            href={point.linkHref}
                            className="font-semibold text-blue-600 underline"
                          >
                            → {point.linkLabel}
                          </Link>
                        ) : null}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : null}

          {bottomText ? (
            <div className="pt-6">
              <p className="text-xl font-semibold text-gray-900">
                {bottomText.includes('finally start') ? (
                  <>
                    If you&apos;re stuck, overwhelmed, or ready to{' '}
                    <span className="underline decoration-2 decoration-orange-500">
                      finally start
                    </span>{' '}
                    - this workshop is built for you. 🏆
                  </>
                ) : (
                  bottomText
                )}
              </p>
            </div>
          ) : null}
        </div>

        <div className="flex h-screen max-h-[600px] w-full justify-end lg:w-1/2 lg:max-h-[600px]">
          <div className="relative flex h-full w-full justify-end">
            <div className="relative flex aspect-[3/4] w-full max-w-md overflow-hidden rounded-l-2xl bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl lg:aspect-[4/5] lg:rounded-l-3xl">
              <div className="absolute -inset-1 rounded-l-2xl bg-gradient-to-br from-orange-400 via-orange-500 to-red-500 opacity-75 blur-sm lg:rounded-l-3xl"></div>
              <div className="absolute -inset-2 rounded-l-2xl bg-gradient-to-br from-orange-300 via-orange-400 to-red-400 opacity-50 blur-md lg:rounded-l-3xl"></div>
              <div className="absolute -inset-3 rounded-l-2xl bg-gradient-to-br from-orange-200 via-orange-300 to-red-300 opacity-30 blur-lg lg:rounded-l-3xl"></div>

              <div className="relative h-full w-full overflow-hidden rounded-l-2xl lg:rounded-l-3xl">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  className="h-full w-full object-cover"
                  width={500}
                  height={600}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IsThisForYou;
