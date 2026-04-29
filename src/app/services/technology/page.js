import Link from 'next/link';
import { ArrowRight, Cpu, Compass, Users } from 'lucide-react';
import AnimatedReveal from '@/components/ui/AnimatedReveal';
import EyebrowLabel from '@/components/ui/EyebrowLabel';
import Button from '@/components/ui/Button';
import SectionWrapper from '@/components/ui/SectionWrapper';
import ServiceAccordion from '@/components/sections/services/ServiceAccordion';
import { slugifyTitle } from '@/lib/slugify';
import services from '@/data/services';

export const metadata = {
  title: 'Technology & Digital Transformation — Innovia Partners',
  description:
    'Adopt the tools and systems that modernise operations and unlock data-driven decisions. Digital strategy, BIM, knowledge management and data governance for architecture and engineering practices.',
};

const service = services.find((s) => s.slug === 'technology');

const serviceAnchors = service.subServices.map((sub, i) => ({
  mark: String(i + 1).padStart(2, '0'),
  label: sub.title,
  href: `#sub-${slugifyTitle(sub.title)}`,
}));

const relatedServices = [
  {
    icon: Compass,
    name: 'Strategy, Growth & Change',
    summary:
      'The vision, the moves, and the discipline to follow through. Where the practice is going and how it will get there.',
    href: '/services/strategy',
  },
  {
    icon: Users,
    name: 'People & Processes',
    summary:
      'The operational backbone of how work flows, how people grow, and how the firm leads itself through change.',
    href: '/services/people-processes',
  },
];

function CircuitPattern() {
  // Concentric arcs anchored bottom-right + a circuit-trace grid + binary-style ticks.
  // Different visual family from Strategy (no full circles spanning the canvas)
  // and from People (no triangulated mesh).
  const traceY = [60, 140, 220, 300, 380, 460, 540];
  const verticals = [120, 260, 420, 560, 700, 860, 1020];
  const nodes = [
    { x: 260, y: 140 },
    { x: 420, y: 300 },
    { x: 700, y: 220 },
    { x: 860, y: 460 },
    { x: 1020, y: 380 },
    { x: 560, y: 540 },
    { x: 120, y: 380 },
  ];

  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 h-full w-full text-accent-400"
      viewBox="0 0 1200 600"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* horizontal data rails */}
      <g stroke="currentColor" strokeWidth="0.7" opacity="0.22">
        {traceY.map((y, i) => (
          <line key={`h-${i}`} x1="0" y1={y} x2="1200" y2={y} />
        ))}
      </g>

      {/* vertical traces */}
      <g
        stroke="currentColor"
        strokeWidth="0.9"
        opacity="0.4"
        strokeLinecap="square"
      >
        {verticals.map((x, i) => (
          <line
            key={`v-${i}`}
            x1={x}
            y1={i % 2 === 0 ? 0 : 60}
            x2={x}
            y2={i % 2 === 0 ? 540 : 600}
          />
        ))}
      </g>

      {/* stepped traces — circuit-board feel */}
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="1.1"
        opacity="0.55"
        strokeLinecap="square"
        strokeLinejoin="miter"
      >
        <polyline points="0,460 260,460 260,300 700,300 700,220 1020,220 1020,60 1200,60" />
        <polyline points="0,140 120,140 120,380 420,380 420,540 860,540 860,460 1200,460" />
        <polyline points="0,300 60,300 60,540 360,540 360,380 560,380" />
        <polyline points="700,600 700,460 920,460 920,300 1100,300 1100,140 1200,140" />
      </g>

      {/* concentric arcs — bottom-right anchor (digital pulse) */}
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.32"
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <circle
            key={`arc-${i}`}
            cx="1100"
            cy="540"
            r={80 + i * 60}
            strokeDasharray="2 6"
          />
        ))}
      </g>

      {/* binary-style ticks along the top */}
      <g fill="currentColor" opacity="0.45">
        {Array.from({ length: 60 }).map((_, i) => {
          const x = i * 20 + 4;
          const isOne = (i * 7) % 11 < 5;
          return (
            <rect
              key={`bit-${i}`}
              x={x}
              y={isOne ? 14 : 22}
              width="2"
              height={isOne ? 14 : 6}
            />
          );
        })}
      </g>

      {/* highlighted nodes — concentric ring around each */}
      <g>
        {nodes.map((n, i) => (
          <g key={`node-${i}`}>
            <circle
              cx={n.x}
              cy={n.y}
              r="14"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.8"
              opacity="0.5"
            />
            <circle
              cx={n.x}
              cy={n.y}
              r="3.5"
              fill="currentColor"
              opacity="0.75"
            />
          </g>
        ))}
      </g>

      {/* a brighter pulse node */}
      <g>
        <circle
          cx="1100"
          cy="540"
          r="6"
          fill="currentColor"
          opacity="0.85"
        />
        <circle
          cx="1100"
          cy="540"
          r="22"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.6"
        />
      </g>
    </svg>
  );
}

export default function TechnologyPage() {
  return (
    <main>
      {/* HERO */}
      <section
        aria-labelledby="technology-hero-heading"
        className="relative flex min-h-svh items-center overflow-hidden bg-primary-900 text-neutral-100"
      >
        <div aria-hidden="true" className="absolute inset-0 opacity-[0.18]">
          <CircuitPattern />
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 80% 70% at 22% 45%, rgba(0,0,0,0.55), transparent 72%)',
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 hidden w-px bg-gradient-to-b from-transparent via-primary-700/60 to-transparent md:block"
        />

        <div className="relative mx-auto w-full max-w-[1200px] px-container-x pt-28 pb-20 md:pt-32 md:pb-24">
          <AnimatedReveal>
            <div className="mb-10 flex items-end justify-between gap-6 border-b border-primary-700/60 pb-5 md:mb-14">
              <EyebrowLabel
                tone="accentOnDark"
                size="md"
                className="!mb-0 text-[0.7rem] md:text-xs"
              >
                Services · Technology Stream
              </EyebrowLabel>
              <span className="hidden items-center gap-3 text-[0.65rem] font-medium uppercase tracking-[0.22em] text-neutral-400 md:flex">
                <Cpu size={13} strokeWidth={1.5} aria-hidden="true" />
                Stream 03 / 03
              </span>
            </div>
          </AnimatedReveal>

          <AnimatedReveal delay={0.1}>
            <h1
              id="technology-hero-heading"
              className="max-w-4xl text-white [font-size:clamp(2.25rem,5.5vw,4.75rem)] [line-height:1] [letter-spacing:-0.025em]"
            >
              Technology &amp;{' '}
              <span className="italic text-accent-300">Digital</span>{' '}
              Transformation.
            </h1>
          </AnimatedReveal>

          <AnimatedReveal delay={0.25}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-primary-200 md:text-xl">
              {service.shortDescription}
            </p>
          </AnimatedReveal>

          <AnimatedReveal delay={0.4}>
            <div className="mt-10 flex items-center gap-4 text-[0.65rem] uppercase tracking-[0.28em] text-neutral-400 md:mt-14">
              <span className="h-px w-10 bg-accent-400/70" />
              Five workstreams · the technology catalogue
            </div>
          </AnimatedReveal>
        </div>
      </section>

      {/* PREAMBLE */}
      <SectionWrapper background="light">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          <aside className="order-2 md:order-1 md:col-span-4">
            <AnimatedReveal delay={0.15}>
              <EyebrowLabel tone="accent">Jump to a workstream</EyebrowLabel>
              <ol className="mt-4 space-y-3 border-l border-neutral-300 pl-5">
                {serviceAnchors.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="group flex items-baseline gap-4 text-sm text-neutral-700 transition-colors hover:text-accent-700 focus-visible:outline-none focus-visible:text-accent-700"
                    >
                      <span className="w-5 font-mono text-[0.7rem] uppercase tracking-widest text-accent-700">
                        {item.mark}
                      </span>
                      <span className="flex-1 group-hover:underline underline-offset-4 decoration-accent-600/60">
                        {item.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ol>
            </AnimatedReveal>
          </aside>

          <div className="order-1 md:order-2 md:col-span-8">
            <AnimatedReveal>
              <p className="max-w-2xl font-heading text-2xl leading-snug text-primary-950 md:text-[2rem]">
                Technology adopted without intent becomes overhead.
                Adopted with purpose, it compounds&mdash;quietly, in the
                background of every project.
              </p>
            </AnimatedReveal>
            <AnimatedReveal delay={0.1}>
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-neutral-700 md:text-lg">
                We help practices make digital decisions that fit their
                culture and their work. From the strategic frame down to
                BIM, data, and the vendors you ultimately choose. Five
                workstreams sit beneath that work&mdash;each drawn on as
                the practice needs it.
              </p>
            </AnimatedReveal>
          </div>
        </div>
      </SectionWrapper>

      {/* PULL QUOTE */}
      <section className="relative overflow-hidden bg-primary-900 text-neutral-100">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-accent-700 opacity-15 blur-3xl"
        />
        <div className="relative mx-auto max-w-[1200px] px-container-x py-section-y">
          <AnimatedReveal>
            <div className="relative mx-auto max-w-3xl">
              <span
                aria-hidden="true"
                className="absolute -left-2 -top-10 font-heading text-[7rem] leading-none text-accent-300/40 md:-left-10 md:-top-14 md:text-[9rem]"
              >
                &ldquo;
              </span>
              <blockquote className="font-heading text-2xl leading-snug text-white md:text-[2.25rem] md:leading-[1.15]">
                Digital maturity is not the tools you have bought. It is
                the decisions your firm can make, repeatedly, because the
                data is there to support them.
              </blockquote>
              <footer className="mt-10 flex items-center gap-4 text-[0.7rem] uppercase tracking-[0.28em] text-neutral-400">
                <span className="h-px w-12 bg-accent-400/60" />
                A working principle
              </footer>
            </div>
          </AnimatedReveal>
        </div>
      </section>

      {/* CATALOGUE */}
      <SectionWrapper
        background="light"
        id="engagement"
        className="scroll-mt-24"
      >
        <AnimatedReveal>
          <div className="flex items-end justify-between gap-6 border-b border-neutral-300 pb-5">
            <div className="flex items-baseline gap-5">
              <span
                aria-hidden="true"
                className="font-heading text-[2.25rem] italic leading-none text-accent-700 md:text-[3rem]"
              >
                §
              </span>
              <EyebrowLabel tone="accent" className="!mb-0">
                The technology catalogue
              </EyebrowLabel>
            </div>
            <span className="hidden text-[0.65rem] uppercase tracking-[0.28em] text-neutral-500 md:block">
              Five workstreams
            </span>
          </div>
        </AnimatedReveal>

        <div className="mt-10 grid grid-cols-1 gap-12 md:mt-16 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-4">
            <AnimatedReveal>
              <h2 className="text-primary-950 [font-size:clamp(2rem,3.6vw,3rem)] [line-height:1.02] [letter-spacing:-0.015em]">
                What the work{' '}
                <span className="italic text-accent-700">actually</span>{' '}
                involves.
              </h2>
              <p className="mt-6 max-w-sm text-base leading-relaxed text-neutral-700 md:text-[1.0625rem]">
                Every engagement is shaped to the firm. Most contain some
                combination of the following, sequenced to where the
                practice is and what it is trying to reach.
              </p>
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-neutral-500">
                Open any workstream to read what it covers.
              </p>
            </AnimatedReveal>
          </div>
          <div className="md:col-span-8">
            <AnimatedReveal delay={0.1}>
              <ServiceAccordion subServices={service.subServices} />
            </AnimatedReveal>
          </div>
        </div>
      </SectionWrapper>

      {/* RELATED STREAMS */}
      <SectionWrapper
        background="light"
        className="border-t border-neutral-200"
      >
        <AnimatedReveal>
          <div className="flex items-end justify-between gap-6">
            <div>
              <EyebrowLabel tone="accent">Continue reading</EyebrowLabel>
              <h2 className="mt-2 text-primary-950 [font-size:clamp(1.75rem,3vw,2.25rem)] [line-height:1.1] [letter-spacing:-0.01em]">
                The other two streams.
              </h2>
            </div>
            <span className="hidden text-[0.7rem] uppercase tracking-[0.28em] text-neutral-500 md:block">
              01 / 03 &middot; 02 / 03
            </span>
          </div>
        </AnimatedReveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-2 md:gap-8">
          {relatedServices.map((s, i) => {
            const Icon = s.icon;
            return (
              <AnimatedReveal key={s.name} delay={i * 0.1}>
                <Link
                  href={s.href}
                  className="group relative flex h-full flex-col rounded-lg border border-neutral-200 bg-surface-card p-8 transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-1 hover:border-accent-600/50 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-600 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-light md:p-10"
                >
                  <div
                    aria-hidden="true"
                    className="absolute left-0 top-0 h-10 w-[3px] bg-accent-700 transition-all duration-300 group-hover:h-16"
                  />
                  <div className="mb-8 inline-flex h-12 w-12 items-center justify-center rounded-full border border-primary-200 text-primary-800 transition-colors duration-300 group-hover:border-accent-600 group-hover:text-accent-700">
                    <Icon size={22} strokeWidth={1.5} aria-hidden="true" />
                  </div>
                  <h3 className="text-primary-950 [font-size:1.6rem] [line-height:1.1] [letter-spacing:-0.01em]">
                    {s.name}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-neutral-700">
                    {s.summary}
                  </p>
                  <span className="mt-10 inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-primary-900 transition-colors group-hover:text-accent-700">
                    Explore {s.name}
                    <ArrowRight
                      size={14}
                      aria-hidden="true"
                      className="transition-transform duration-300 ease-out group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              </AnimatedReveal>
            );
          })}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper
        background="dark"
        as="section"
        className="relative overflow-hidden"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 -right-40 h-[30rem] w-[30rem] rounded-full bg-accent-700 opacity-20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 -left-32 h-[24rem] w-[24rem] rounded-full bg-primary-600 opacity-15 blur-3xl"
        />
        <div className="relative mx-auto max-w-2xl text-center">
          <AnimatedReveal>
            <EyebrowLabel tone="accentOnDark">Begin</EyebrowLabel>
            <h2 className="mt-4 text-white [font-size:clamp(1.75rem,3vw,2.5rem)] [line-height:1.1] [letter-spacing:-0.01em]">
              Considering a digital transformation?
            </h2>
            <p className="mt-6 leading-relaxed text-primary-200">
              A short, frank conversation is often enough to surface where
              the practice would benefit most from a focused digital move.
              We would be glad to have it.
            </p>
            <div className="mt-10 flex justify-center">
              <Button size="lg" onDark href="/contact">
                Start the conversation <ArrowRight size={14} />
              </Button>
            </div>
          </AnimatedReveal>
        </div>
      </SectionWrapper>
    </main>
  );
}
