'use client';

import { useRef, useMemo } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import EyebrowLabel from '@/components/ui/EyebrowLabel';

// The extracted 24x6 grid of window widths mapped to levels 1 through 7
const PATTERN = [
  [2, 5, 6, 7, 6, 5, 4, 3, 2, 2, 1, 1, 1, 2, 2, 3, 3, 2, 2, 2, 2, 2, 1, 1],
  [1, 2, 3, 4, 5, 4, 4, 3, 3, 2, 1, 2, 2, 2, 3, 3, 4, 5, 4, 3, 2, 2, 1, 1],
  [2, 2, 2, 3, 3, 2, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 5, 5, 4, 4, 4, 3, 3, 2],
  [2, 3, 3, 2, 2, 2, 3, 3, 4, 4, 5, 4, 3, 3, 4, 4, 5, 5, 4, 3, 2, 2, 1, 1],
  [2, 4, 3, 3, 3, 4, 4, 4, 5, 5, 6, 6, 5, 5, 4, 4, 3, 3, 2, 2, 1, 1, 1, 2],
  [2, 3, 3, 2, 2, 1, 1, 2, 2, 3, 4, 5, 5, 6, 6, 7, 6, 5, 4, 4, 3, 2, 1, 1],
];

// Constants keeping the exact aspect ratio of the facade
const PITCH_X = 17;
const PITCH_Y = 37;
const BAR_HEIGHT = 34;
const COLS = PATTERN[0].length;
const ROWS = PATTERN.length;

function generateBars() {
  const bars = [];

  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      const level = PATTERN[r][c];

      // Calculate width based on the level (max width is 16, leaving a 1px minimum gap)
      const width = 2 * level + 2;

      // Center the bar horizontally within its column's pitch
      const xCenter = c * PITCH_X + PITCH_X / 2;
      const x = xCenter - width / 2;
      const y = r * PITCH_Y;

      bars.push({ x, y, width, height: BAR_HEIGHT });
    }
  }

  return bars;
}

function FacadePattern() {
  const bars = useMemo(() => generateBars(), []);

  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 h-full w-full text-primary-700"
      preserveAspectRatio="none"
      // ViewBox dimensions dynamically size strictly to the 24x6 grid, trimming the bottom margin
      viewBox={`0 0 ${COLS * PITCH_X} ${ROWS * PITCH_Y - (PITCH_Y - BAR_HEIGHT)}`}
    >
      {bars.map((bar, i) => (
        <rect
          key={i}
          x={bar.x}
          y={bar.y}
          width={bar.width}
          height={bar.height}
          fill="currentColor"
        />
      ))}
    </svg>
  );
}

const EASE = [0.22, 0.61, 0.36, 1];

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const parallaxY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [0, 250],
  );

  const parallaxOpacity = useTransform(
    scrollYProgress,
    [0, 0.8],
    reduceMotion ? [1, 1] : [1, 0],
  );

  const fadeUp = (delay = 0) => ({
    initial: reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay, ease: EASE },
  });

  return (
    <section
      ref={heroRef}
      aria-labelledby="home-hero-heading"
      className="relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden bg-primary-900 text-neutral-100 md:min-h-[calc(100svh-5rem)]"
    >
      <motion.div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.50]"
        initial={reduceMotion ? { opacity: 0.50 } : { opacity: 0 }}
        animate={{ opacity: 0.50 }}
        transition={{ duration: 1.4, ease: EASE }}
        style={{ y: parallaxY }}
      >
        <FacadePattern />
      </motion.div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 75% 65% at 28% 55%, rgba(0,0,0,0.45), transparent 72%)',
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-px bg-gradient-to-b from-transparent via-primary-700/70 to-transparent md:block"
      />

      <motion.div
        className="relative mx-auto w-full max-w-[1200px] px-container-x py-section-y"
        style={{ y: parallaxY, opacity: parallaxOpacity }}
      >
        <motion.div
          {...fadeUp(0)}
          className="mb-12 flex items-end justify-between gap-6 border-b border-primary-700/60 pb-5 md:mb-16"
        >
          <EyebrowLabel
            tone="accentOnDark"
            size="md"
            className="!mb-0 text-[0.7rem] md:text-xs"
          >
            Management Consulting · Architecture &amp; AEC
          </EyebrowLabel>
          <span className="hidden text-[0.65rem] font-medium uppercase tracking-[0.22em] text-neutral-400 md:block">
            Est. 2004 &middot; Toronto
          </span>
        </motion.div>

        <motion.h1
          id="home-hero-heading"
          {...fadeUp(0)}
          className="max-w-4xl text-white [font-size:clamp(2.5rem,6vw,5.25rem)] [line-height:0.98] [letter-spacing:-0.025em]"
        >
          Ambition,
          <br />
          <span className="italic text-accent-300">made</span> operational.
        </motion.h1>

        <motion.p
          {...fadeUp(0.2)}
          className="mt-8 max-w-xl text-lg leading-relaxed text-primary-200 md:text-xl"
        >
          We help architecture, engineering and creative practices achieve their
          strategic goals and meet complex challenges.
        </motion.p>

        <motion.div
          {...fadeUp(0.4)}
          className="mt-10 flex flex-wrap items-center gap-5"
        >
          <Button href="/services" size="lg" onDark className="group">
            Explore Our Work{' '}
            <ArrowRight
              size={16}
              aria-hidden="true"
              className="transition-transform duration-300 ease-out group-hover:translate-x-1"
            />
          </Button>
          <span
            aria-hidden="true"
            className="hidden h-px w-16 bg-primary-700 sm:block"
          />
          <span className="hidden text-xs uppercase tracking-[0.24em] text-neutral-400 sm:block">
            20+ years advising world-class practices
          </span>
        </motion.div>
      </motion.div>

      <motion.div
        {...fadeUp(1.5)}
        className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex"
      >
        <motion.div
          className="flex flex-col items-center gap-3"
          style={{ y: parallaxY, opacity: parallaxOpacity }}
        >
          <span className="text-[0.6rem] uppercase tracking-[0.32em] text-neutral-400">
            Scroll
          </span>
          <span className="block h-12 w-px bg-gradient-to-b from-neutral-400/70 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}