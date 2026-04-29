import Link from 'next/link';
import { ArrowRight, Users, Compass, Cpu } from 'lucide-react';
import AnimatedReveal from '@/components/ui/AnimatedReveal';
import EyebrowLabel from '@/components/ui/EyebrowLabel';
import Button from '@/components/ui/Button';
import SectionWrapper from '@/components/ui/SectionWrapper';
import ServiceAccordion from '@/components/sections/services/ServiceAccordion';
import { slugifyTitle } from '@/lib/slugify';
import services from '@/data/services';

export const metadata = {
  title: 'People & Processes — Innovia Partners',
  description:
    'Build the teams, structures, and workflows that sustain high performance. Compensation, career pathways, project delivery, and leadership development for architecture and engineering practices.',
};

const service = services.find((s) => s.slug === 'people-processes');

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
    icon: Cpu,
    name: 'Technology',
    summary:
      'From digital maturity to BIM, the tools and data strategy that let the practice work smarter.',
    href: '/services/technology',
  },
];

function LatticePattern() {
  const cols = 9;
  const rows = 5;
  const stepX = 1200 / (cols - 1);
  const stepY = 600 / (rows - 1);
  const nodes = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      nodes.push({ x: c * stepX, y: r * stepY, r, c });
    }
  }

  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 h-full w-full text-accent-400"
      viewBox="0 0 1200 600"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* faint orthogonal grid */}
      <g stroke="currentColor" strokeWidth="0.6" opacity="0.18">
        {Array.from({ length: rows }).map((_, r) => (
          <line
            key={`h-${r}`}
            x1="0"
            y1={r * stepY}
            x2="1200"
            y2={r * stepY}
          />
        ))}
        {Array.from({ length: cols }).map((_, c) => (
          <line
            key={`v-${c}`}
            x1={c * stepX}
            y1="0"
            x2={c * stepX}
            y2="600"
          />
        ))}
      </g>

      {/* triangulated mesh — diagonals connecting neighbours */}
      <g stroke="currentColor" strokeWidth="0.9" opacity="0.42">
        {nodes.map((n) => {
          const right = nodes.find((m) => m.r === n.r && m.c === n.c + 1);
          const downRight = nodes.find(
            (m) => m.r === n.r + 1 && m.c === n.c + 1,
          );
          const downLeft = nodes.find(
            (m) => m.r === n.r + 1 && m.c === n.c - 1,
          );
          return (
            <g key={`m-${n.r}-${n.c}`}>
              {right && (
                <line x1={n.x} y1={n.y} x2={right.x} y2={right.y} />
              )}
              {downRight && (
                <line
                  x1={n.x}
                  y1={n.y}
                  x2={downRight.x}
                  y2={downRight.y}
                />
              )}
              {downLeft && (
                <line
                  x1={n.x}
                  y1={n.y}
                  x2={downLeft.x}
                  y2={downLeft.y}
                />
              )}
            </g>
          );
        })}
      </g>

      {/* nodes */}
      <g fill="currentColor" opacity="0.65">
        {nodes.map((n) => (
          <circle
            key={`n-${n.r}-${n.c}`}
            cx={n.x}
            cy={n.y}
            r={(n.r + n.c) % 5 === 0 ? 3.2 : 1.6}
          />
        ))}
      </g>

      {/* anchor ring — a single highlighted node in the lower-left */}
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.55"
      >
        <circle cx={2 * stepX} cy={3 * stepY} r="22" />
        <circle cx={2 * stepX} cy={3 * stepY} r="44" />
      </g>
    </svg>
  );
}

export default function PeopleProcessesPage() {
  return (
    <main>
      {/* HERO */}
      <section
        aria-labelledby="people-hero-heading"
        className="relative flex min-h-svh items-center overflow-hidden bg-primary-900 text-neutral-100"
      >
        <div aria-hidden="true" className="absolute inset-0 opacity-[0.18]">
          <LatticePattern />
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
                Services · People &amp; Processes Stream
              </EyebrowLabel>
              <span className="hidden items-center gap-3 text-[0.65rem] font-medium uppercase tracking-[0.22em] text-neutral-400 md:flex">
                <Users size={13} strokeWidth={1.5} aria-hidden="true" />
                Stream 02 / 03
              </span>
            </div>
          </AnimatedReveal>

          <AnimatedReveal delay={0.1}>
            <h1
              id="people-hero-heading"
              className="max-w-4xl text-white [font-size:clamp(2.25rem,5.5vw,4.75rem)] [line-height:1] [letter-spacing:-0.025em]"
            >
              People &amp;{' '}
              <span className="italic text-accent-300">Processes.</span>
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
              Six workstreams · the people &amp; processes catalogue
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
                A practice is the sum of the people inside it and the
                systems that connect them. Get either wrong and the work
                suffers in ways no strategy can mask.
              </p>
            </AnimatedReveal>
            <AnimatedReveal delay={0.1}>
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-neutral-700 md:text-lg">
                We work with leaders to align how people are hired,
                developed, paid, and led with how the firm actually
                delivers its work. Six workstreams sit beneath that
                work&mdash;each drawn on as the practice needs it.
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
                Talent is the asset every practice depends on, and the one
                most easily lost. The firms that keep it are the ones that
                build the structure to deserve it.
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
                The people &amp; processes catalogue
              </EyebrowLabel>
            </div>
            <span className="hidden text-[0.65rem] uppercase tracking-[0.28em] text-neutral-500 md:block">
              Six workstreams
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
              01 / 03 &middot; 03 / 03
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
              Ready to invest in your people and processes?
            </h2>
            <p className="mt-6 leading-relaxed text-primary-200">
              A short, frank conversation is often enough to surface where
              the operational backbone of the firm needs work. We would be
              glad to have it.
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
