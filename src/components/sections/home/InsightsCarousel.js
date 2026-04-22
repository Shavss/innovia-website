'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useReducedMotion } from 'framer-motion';
import AnimatedReveal from '@/components/ui/AnimatedReveal';
import EyebrowLabel from '@/components/ui/EyebrowLabel';
import InsightCard from '@/components/ui/InsightCard';
import news from '@/data/news';

function getVisibleCount(width) {
  if (width >= 1024) return 3;
  if (width >= 640) return 2;
  return 1;
}

export default function InsightsCarousel() {
  const items = [...news]
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, 6);

  const [visible, setVisible] = useState(3);
  const [index, setIndex] = useState(0);
  const trackRef = useRef(null);
  const touchStartX = useRef(null);
  const touchDeltaX = useRef(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const onResize = () => {
      const next = getVisibleCount(window.innerWidth);
      setVisible(next);
      setIndex((i) => Math.min(i, Math.max(0, items.length - next)));
    };
    onResize();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [items.length]);

  const maxIndex = Math.max(0, items.length - visible);
  const canPrev = index > 0;
  const canNext = index < maxIndex;

  const goPrev = useCallback(() => {
    setIndex((i) => Math.max(0, i - 1));
  }, []);
  const goNext = useCallback(() => {
    setIndex((i) => Math.min(maxIndex, i + 1));
  }, [maxIndex]);

  const onKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      goPrev();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      goNext();
    }
  };

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  };
  const onTouchMove = (e) => {
    if (touchStartX.current == null) return;
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };
  const onTouchEnd = () => {
    if (touchStartX.current == null) return;
    const delta = touchDeltaX.current;
    const threshold = 40;
    if (delta > threshold) goPrev();
    else if (delta < -threshold) goNext();
    touchStartX.current = null;
    touchDeltaX.current = 0;
  };

  const slideWidthPct = 100 / visible;
  const translate = -(index * slideWidthPct);

  return (
    <section
      aria-labelledby="insights-heading"
      className="bg-surface-light"
    >
      <div className="mx-auto max-w-[1200px] px-container-x py-section-y">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <AnimatedReveal>
            <EyebrowLabel tone="accent">Journal</EyebrowLabel>
            <h2
              id="insights-heading"
              className="mt-2 text-primary-950 [font-size:clamp(2rem,4vw,3rem)] [line-height:1.05] [letter-spacing:-0.02em]"
            >
              Latest insights.
            </h2>
          </AnimatedReveal>

          <AnimatedReveal delay={0.1}>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={goPrev}
                disabled={!canPrev}
                aria-label="Previous insight"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 bg-surface-card text-primary-900 transition-all duration-200 hover:border-accent-600 hover:text-accent-700 disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-600 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-light"
              >
                <ArrowLeft size={18} aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={goNext}
                disabled={!canNext}
                aria-label="Next insight"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 bg-surface-card text-primary-900 transition-all duration-200 hover:border-accent-600 hover:text-accent-700 disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-600 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-light"
              >
                <ArrowRight size={18} aria-hidden="true" />
              </button>
            </div>
          </AnimatedReveal>
        </div>

        <div
          className="mt-12 focus-visible:outline-none"
          tabIndex={0}
          role="region"
          aria-roledescription="carousel"
          aria-label="Latest insights"
          onKeyDown={onKeyDown}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div className="-mx-3 -my-4 overflow-x-clip px-3 py-4">
            <div
              ref={trackRef}
              className="flex"
              style={{
                transform: `translateX(${translate}%)`,
                transition: reduceMotion
                  ? 'none'
                  : 'transform 500ms cubic-bezier(0.22, 0.61, 0.36, 1)',
              }}
            >
              {items.map((item, i) => {
                const isActive = i >= index && i < index + visible;
                return (
                  <div
                    key={item.slug}
                    className="shrink-0 px-3"
                    style={{ width: `${slideWidthPct}%` }}
                    aria-hidden={!isActive}
                  >
                    <AnimatedReveal delay={i * 0.05}>
                      <InsightCard item={item} isActive={isActive} />
                    </AnimatedReveal>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center gap-2" role="tablist" aria-label="Select insight group">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => {
            const active = i === index;
            return (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={active}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-[3px] rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-600 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-light ${
                  active
                    ? 'w-10 bg-accent-700'
                    : 'w-6 bg-neutral-300 hover:bg-neutral-400'
                }`}
              />
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/news"
            className="group inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-primary-900 transition-colors hover:text-accent-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-600 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-light"
          >
            All insights
            <ArrowRight
              size={14}
              aria-hidden="true"
              className="transition-transform duration-300 ease-out group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
