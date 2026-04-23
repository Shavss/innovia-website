import Link from 'next/link';
import { ArrowRight, Compass, Users, Cpu } from 'lucide-react';
import AnimatedReveal from '@/components/ui/AnimatedReveal';
import EyebrowLabel from '@/components/ui/EyebrowLabel';
import Button from '@/components/ui/Button';
import SectionWrapper from '@/components/ui/SectionWrapper';
import ServiceAccordion from '@/components/sections/services/ServiceAccordion';
import { slugifyTitle } from '@/lib/slugify'; // ← single source of truth
import services from '@/data/services';

export const metadata = {
  title: 'Strategy, Growth & Change — Innovia Partners',
  description:
    'Defining where your practice is going and building the roadmap to get there. Strategic direction, growth planning and change management for architecture and engineering firms.',
};

const service = services.find((s) => s.slug === 'strategy-growth-change');

const chapters = [
  {
    numeral: 'I',
    title: 'Direction',
    body: service.longDescription[0],
  },
  {
    numeral: 'II',
    title: 'Translation',
    body: service.longDescription[1],
  },
  {
    numeral: 'III',
    title: 'Execution',
    body: service.longDescription[2],
  },
];

const tableOfContents = [
  ...chapters.map((ch, i) => ({
    mark: String(i + 1).padStart(2, '0'),
    label: ch.title,
    href: `#chapter-${ch.numeral.toLowerCase()}`,
  })),
  {
    mark: '04',
    label: 'Inside the engagement',
    href: '#engagement',
  },
];

const relatedServices = [
  {
    icon: Users,
    name: 'People & Processes',
    summary:
      'The operational backbone of how work flows, how people grow, and how the firm leads itself through change.',
    href: '/services/people-processes',
  },
  {
    icon: Cpu,
    name: 'Technology',
    summary:
      'From digital maturity to BIM, the tools and data strategy that let the practice work smarter.',
    href: '/services/technology',
  },
];

function HorizonPattern() {
  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 h-full w-full text-accent-400"
      viewBox="0 0 1200 600"
      preserveAspectRatio="xMidYMid slice"
    >
      <g fill="none" stroke="currentColor" strokeWidth="1" opacity="0.45">
        {Array.from({ length: 16 }).map((_, i) => (
          <circle key={i} cx="1080" cy="580" r={110 + i * 70} />
        ))}
      </g>
      <g stroke="currentColor" strokeWidth="1" opacity="0.22">
        <line x1="1080" y1="0" x2="1080" y2="580" />
        <line x1="0" y1="580" x2="1200" y2="580" />
        <line x1="0" y1="0" x2="1080" y2="580" />
      </g>
      <g fill="currentColor" opacity="0.55">
        <circle cx="1080" cy="580" r="3" />
      </g>
    </svg>
  );
}

export default function StrategyPage() {
  return (
    <main>
      {/* HERO */}
      <section
        aria-labelledby="strategy-hero-heading"
        className="relative flex min-h-svh items-center overflow-hidden bg-primary-900 text-neutral-100"
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.18]"
        >
          <HorizonPattern />
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
                Services · Strategy Stream
              </EyebrowLabel>
              <span className="hidden items-center gap-3 text-[0.65rem] font-medium uppercase tracking-[0.22em] text-neutral-400 md:flex">
                <Compass size={13} strokeWidth={1.5} aria-hidden="true" />
                Stream 01 / 03
              </span>
            </div>
          </AnimatedReveal>

          <AnimatedReveal delay={0.1}>
            <h1
              id="strategy-hero-heading"
              className="max-w-4xl text-white [font-size:clamp(2.25rem,5.5vw,4.75rem)] [line-height:1] [letter-spacing:-0.025em]"
            >
              Strategy,{' '}
              <span className="italic text-accent-300">Growth</span> &amp;
              Change.
            </h1>
          </AnimatedReveal>

          <AnimatedReveal delay={0.25}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-primary-200 md:text-xl">
              Defining where your practice is going and building the roadmap
              to get there.
            </p>
          </AnimatedReveal>

          <AnimatedReveal delay={0.4}>
            <div className="mt-10 flex items-center gap-4 text-[0.65rem] uppercase tracking-[0.28em] text-neutral-400 md:mt-14">
              <span className="h-px w-10 bg-accent-400/70" />
              A three-chapter read · approx. 4 min
            </div>
          </AnimatedReveal>
        </div>
      </section>

      {/* PREAMBLE — asymmetric editorial intro */}
      <SectionWrapper background="light">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          <aside className="order-2 md:order-1 md:col-span-4">
            <AnimatedReveal delay={0.15}>
              <EyebrowLabel tone="accent">On this page</EyebrowLabel>
              <ol className="mt-4 space-y-3 border-l border-neutral-300 pl-5">
                {tableOfContents.map((item) => (
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
                A practice without a strategy is not standing still. It is
                drifting&mdash;shaped by whichever opportunities happen to
                arrive at the door.
              </p>
            </AnimatedReveal>
            <AnimatedReveal delay={0.1}>
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-neutral-700 md:text-lg">
                We work with firm principals to replace reactive growth with
                deliberate intent: articulating a vision, structuring the
                moves that will get you there, and staying close through the
                change. What follows is how we think about that work.
              </p>
            </AnimatedReveal>
          </div>
        </div>
      </SectionWrapper>

      {/* CHAPTERS */}
      <section aria-label="Strategy approach" className="bg-surface-light">
        <div className="mx-auto max-w-[1200px] px-container-x pb-section-y">
          {chapters.map((ch, i) => (
            <AnimatedReveal key={ch.numeral} delay={i * 0.06}>
              <article
                id={`chapter-${ch.numeral.toLowerCase()}`}
                className="scroll-mt-24 grid grid-cols-1 gap-6 border-t border-neutral-300 py-12 md:grid-cols-12 md:gap-10 md:py-16"
              >
                <header className="md:col-span-4">
                  <span
                    aria-hidden="true"
                    className="block font-heading text-[3.5rem] italic leading-none text-accent-700 md:text-[4.5rem]"
                  >
                    {ch.numeral}.
                  </span>
                  <h2 className="mt-4 text-primary-950 [font-size:clamp(1.5rem,2.4vw,2rem)] [line-height:1.1] [letter-spacing:-0.01em]">
                    {ch.title}
                  </h2>
                </header>
                <div className="md:col-span-8">
                  <p className="max-w-2xl text-base leading-relaxed text-neutral-700 md:text-lg">
                    {ch.body}
                  </p>
                </div>
              </article>
            </AnimatedReveal>
          ))}
        </div>
      </section>

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
                The firms that thrive across cycles are not the luckiest.
                They are the ones with a plan they actually believe
                in&mdash;and the discipline to follow it.
              </blockquote>
              <footer className="mt-10 flex items-center gap-4 text-[0.7rem] uppercase tracking-[0.28em] text-neutral-400">
                <span className="h-px w-12 bg-accent-400/60" />
                A working principle
              </footer>
            </div>
          </AnimatedReveal>
        </div>
      </section>

      {/* ENGAGEMENT / INCLUDES */}
      <SectionWrapper
        background="light"
        id="engagement"
        className="scroll-mt-24"
      >
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-4">
            <AnimatedReveal>
              <EyebrowLabel tone="accent">§ Inside the engagement</EyebrowLabel>
              <h2 className="mt-4 text-primary-950 [font-size:clamp(1.75rem,3vw,2.5rem)] [line-height:1.05] [letter-spacing:-0.01em]">
                What the work{' '}
                <span className="italic text-accent-700">actually</span>{' '}
                involves.
              </h2>
              <p className="mt-6 max-w-sm text-base leading-relaxed text-neutral-700">
                Every engagement is tailored to the firm. Most contain some
                combination of the following, sequenced to suit where the
                practice is and what it is trying to reach.
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
              02 / 03
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
              Want to discuss your firm&rsquo;s strategic direction?
            </h2>
            <p className="mt-6 leading-relaxed text-primary-200">
              A short, frank conversation is often enough to surface the
              shape of what comes next. We would be glad to have it.
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
