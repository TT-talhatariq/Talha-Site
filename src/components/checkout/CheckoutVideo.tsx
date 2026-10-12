'use client';

import { useState } from 'react';

/**
 * Shows only a thumbnail until tapped, so the YouTube player (~1MB) never
 * loads for buyers on slow mobile data who do not watch it.
 */
export default function CheckoutVideo({
  videoId,
  title,
}: {
  videoId: string;
  title: string;
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="mb-6 rounded-2xl overflow-hidden border border-gray-200 bg-black shadow-lg">
      {playing ? (
        <iframe
          className="aspect-video w-full"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="relative block w-full aspect-video group"
          aria-label={`Play video: ${title}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element -- YouTube thumbnail */}
          <img
            src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-90"
            loading="lazy"
          />
          <span className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-black/30">
            <span className="w-16 h-16 rounded-full bg-white/95 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <svg viewBox="0 0 24 24" className="w-7 h-7 text-blue-600 ml-1" fill="currentColor" aria-hidden>
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            <span className="text-white font-semibold text-sm drop-shadow">
              {title}
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
