'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useReducedMotion } from 'framer-motion';
import { Compass, Users, Cpu, ArrowRight } from 'lucide-react';
import AnimatedReveal from '@/components/ui/AnimatedReveal';
import EyebrowLabel from '@/components/ui/EyebrowLabel';

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);
  return isDesktop;
}

const streams = [
  {
    icon: Compass,
    name: 'Strategy',
    summary:
      'Where the practice is going, and how it gets there, from annual planning through succession and sale.',
    href: '/services/strategy',
    cta: 'Explore Strategy',
  },
  {
    icon: Users,
    name: 'People & Processes',
    summary: "TThe operational backbone of how work flows, how people grow, and how the firm leads itself through change.",
    href: '/services/people-processes',
    cta: 'Explore People & Processes',
  },
  {
    icon: Cpu,
    name: 'Technology',
    summary: 'From digital maturity to BIM, the tools and data strategy that let the practice work smarter.',
    href: '/services/technology',
    cta: 'Explore Technology',
  },
];

function CardInner({ stream }) {
  const Icon = stream.icon;
  return (
    <article className="group relative flex h-full w-full flex-col rounded-lg border border-neutral-200 bg-surface-card p-8 transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-accent-600/50 hover:shadow-xl md:p-10">
      <div
        aria-hidden="true"
        className="absolute left-0 top-0 h-10 w-[3px] bg-accent-700 transition-all duration-300 group-hover:h-16"
      />
      <div className="mb-8 inline-flex h-12 w-12 items-center justify-center rounded-full border border-primary-200 text-primary-800 transition-colors duration-300 group-hover:border-accent-600 group-hover:text-accent-700">
        <Icon size={22} strokeWidth={1.5} aria-hidden="true" />
      </div>
      <h3 className="text-primary-950 [font-size:1.6rem] [line-height:1.1] [letter-spacing:-0.01em]">
        {stream.name}
      </h3>
      <p className="mt-4 text-base leading-relaxed text-neutral-700">
        {stream.summary}
      </p>
      <Link
        href={stream.href}
        className="mt-10 inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-primary-900 transition-colors hover:text-accent-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-600 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-light"
      >
        {stream.cta}
        <ArrowRight
          size={14}
          aria-hidden="true"
          className="transition-transform duration-300 ease-out group-hover:translate-x-1"
        />
      </Link>
    </article>
  );
}

function StreamCardStatic({ stream, delay = 0 }) {
  return (
    <AnimatedReveal delay={delay}>
      <CardInner stream={stream} />
    </AnimatedReveal>
  );
}

function lerp(start, end, t) {
  if (t <= start) return 0;
  if (t >= end) return 1;
  return (t - start) / (end - start);
}

function StaticStreams() {
  return (
    <section
      aria-labelledby="service-streams-heading"
      className="bg-surface-light"
    >
      <div className="max-w-[1200px] mx-auto px-container-x py-section-y">
        <div className="max-w-2xl">
          <AnimatedReveal>
            <EyebrowLabel tone="accent">What we do</EyebrowLabel>
            <h2
              id="service-streams-heading"
              className="mt-2 text-primary-950 [font-size:clamp(2rem,4vw,3rem)] [line-height:1.05] [letter-spacing:-0.02em]"
            >
              How we work with you.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-neutral-700 md:text-lg">
              Three connected streams, tailored to your practice.
            </p>
          </AnimatedReveal>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-6 md:mt-20 md:grid-cols-3 md:gap-8">
          {streams.map((stream, i) => (
            <StreamCardStatic key={stream.name} stream={stream} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ServiceStreams() {
  const reduceMotion = useReducedMotion();
  const isDesktop = useIsDesktop();
  const pinRef = useRef(null);
  const progressBarRef = useRef(null);
  const cardRefs = useRef([]);

  const usePinned = isDesktop && !reduceMotion;

  useEffect(() => {
    if (!usePinned) return undefined;

    let frame = 0;

    const apply = () => {
      frame = 0;
      const el = pinRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const pinRange = el.offsetHeight - vh;
      if (pinRange <= 0) return;
      const scrolled = Math.max(0, Math.min(pinRange, -rect.top));
      const p = scrolled / pinRange;

      const card1T = lerp(0, 0.25, p);
      const card2T = lerp(0.25, 0.55, p);
      const card3T = lerp(0.55, 0.85, p);
      const progressT = lerp(0, 0.85, p);

      if (progressBarRef.current) {
        progressBarRef.current.style.width = `${progressT * 100}%`;
      }

      const ts = [card1T, card2T, card3T];
      for (let i = 0; i < cardRefs.current.length; i++) {
        const node = cardRefs.current[i];
        if (!node) continue;
        const t = ts[i];
        node.style.opacity = String(t);
        node.style.transform = `translate3d(0, ${(1 - t) * 40}px, 0)`;
      }
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(apply);
    };

    apply();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', apply);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', apply);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [usePinned]);

  if (!usePinned) {
    return <StaticStreams />;
  }

  return (
    <section
      ref={pinRef}
      aria-labelledby="service-streams-heading"
      className="relative bg-surface-light"
      style={{ height: '360vh' }}
    >
      <div className="sticky top-0 flex min-h-screen items-center">
        <div className="mx-auto w-full max-w-[1200px] px-container-x py-16 md:py-24">
          <div className="max-w-2xl">
            <EyebrowLabel tone="accent">What we do</EyebrowLabel>
            <h2
              id="service-streams-heading"
              className="mt-2 text-primary-950 [font-size:clamp(2rem,4vw,3rem)] [line-height:1.05] [letter-spacing:-0.02em]"
            >
              How we work with you.
            </h2>
            <p className="mt-6 text-base leading-relaxed text-neutral-700 md:text-lg">
              Three connected streams, tailored to your practice.
            </p>
          </div>

          <div className="mt-10 md:mt-14">
            <div className="h-px w-full bg-neutral-200">
              <div
                ref={progressBarRef}
                aria-hidden="true"
                className="h-px bg-accent-700"
                style={{ width: '0%', willChange: 'width' }}
              />
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:mt-14 md:grid-cols-3 md:gap-8">
            {streams.map((stream, i) => (
              <div
                key={stream.name}
                ref={(node) => {
                  cardRefs.current[i] = node;
                }}
                style={{
                  opacity: 0,
                  transform: 'translate3d(0, 40px, 0)',
                  willChange: 'opacity, transform',
                }}
                className="flex h-full"
              >
                <CardInner stream={stream} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
