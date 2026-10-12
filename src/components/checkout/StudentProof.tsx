'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';

/** Real screenshots, the same ones the sales pages use. */
const PROOFS = [
  {
    src: '/assets/ss1.png',
    caption: 'Got Top Rated on Upwork',
  },
  {
    src: '/ss6.png',
    caption: 'Earned 50k+ on Upwork & Fiverr',
  },
  {
    src: '/assets/ss5.png',
    caption: 'First Fiverr order: React + Tailwind',
  },
  {
    src: '/assets/ss3.png',
    caption: 'Earned $500+ teaching',
  },
  {
    src: '/assets/earnings.png',
    caption: "Talha's own balance from client work",
  },
];

const AUTO_SCROLL_MS = 3000;
/** After the buyer swipes, leave them alone for a while before moving again. */
const RESUME_AFTER_TOUCH_MS = 6000;

/** Auto-advancing row of proof cards; swipeable, pauses while touched or hovered. */
export default function StudentProof() {
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedUntil = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const timer = window.setInterval(() => {
      if (Date.now() < pausedUntil.current) return;

      const card = track.firstElementChild as HTMLElement | null;
      const step = card ? card.offsetWidth + 16 : 272;
      const atEnd =
        track.scrollLeft + track.clientWidth >= track.scrollWidth - 8;

      track.scrollTo({
        left: atEnd ? 0 : track.scrollLeft + step,
        behavior: 'smooth',
      });
    }, AUTO_SCROLL_MS);

    return () => window.clearInterval(timer);
  }, []);

  const pause = (ms: number) => {
    pausedUntil.current = Date.now() + ms;
  };

  return (
    <section className="mb-8">
      <h3 className="text-xl font-bold text-gray-900 mb-4">
        Real messages from students
      </h3>
      <div
        ref={trackRef}
        onTouchStart={() => pause(RESUME_AFTER_TOUCH_MS)}
        onMouseEnter={() => pause(Number.MAX_SAFE_INTEGER)}
        onMouseLeave={() => pause(0)}
        className="no-scrollbar -mx-4 px-4 flex gap-4 overflow-x-auto snap-x snap-mandatory lg:mx-0 lg:px-0"
      >
        {PROOFS.map((proof) => (
          <figure
            key={proof.src}
            className="snap-start flex-shrink-0 w-64 bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden"
          >
            <div className="relative h-44 bg-gray-50">
              <Image
                src={proof.src}
                alt={proof.caption}
                fill
                sizes="256px"
                loading="lazy"
                className="object-contain p-2"
              />
            </div>
            <figcaption className="px-3 py-2.5 text-sm font-semibold text-gray-800 border-t border-gray-100">
              {proof.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
