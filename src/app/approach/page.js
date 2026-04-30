import { ArrowRight } from 'lucide-react';
import EyebrowLabel from '@/components/ui/EyebrowLabel';
import Button from '@/components/ui/Button';
import SectionWrapper from '@/components/ui/SectionWrapper';
import AnimatedReveal from '@/components/ui/AnimatedReveal';

export const metadata = {
  title: 'Our Approach — Innovia Partners',
  description:
    'How Innovia Partners works with architecture and engineering firms. Collaborative, long-view consulting that pairs frameworks with implementation, not playbooks with proposals.',
};

const principles = [
  {
    title: 'We work with you, not for you',
    body: "Every engagement is collaborative. We don't arrive with a pre-built playbook and impose it on your practice. Your team's context, relationships, and culture shape the approach. We bring frameworks and experience, but the strategy belongs to you.",
  },
  {
    title: 'Practice-building is personal',
    body: "The commercial and creative questions facing a firm are inseparable from the human ones. A succession plan isn't just a financial transaction. A growth strategy affects every person in the practice. We understand that, and we work with that reality rather than around it.",
  },
  {
    title: 'We stay for the long view',
    body: "Many of our engagements span years. Real change in a professional practice doesn't happen in quarters. It happens over sustained commitment, course corrections, and trust built through difficult conversations. We are not interested in quick wins that don't hold.",
  },
  {
    title: 'Implementation, not just advice',
    body: "Strategy without execution is just a document. We stay involved through implementation, working alongside your leadership team to drive the change, troubleshoot obstacles, and hold the plan accountable. When the work gets hard, we don't disappear.",
  },
];

const stages = [
  {
    label: 'Conversation',
    body: 'It starts with an honest discussion about where the firm is and what it is trying to reach. No pitch decks. No proposals. Just a frank exchange.',
  },
  {
    label: 'Diagnostic',
    body: 'We assess the firm’s position: financial performance, organizational structure, strategic clarity, talent landscape. We listen more than we talk.',
  },
  {
    label: 'Direction',
    body: 'Together, we define priorities and build a plan with concrete milestones. The plan is specific enough to act on and flexible enough to adapt.',
  },
  {
    label: 'Implementation',
    body: 'We work alongside the leadership team to execute. We adjust course when needed and stay close through the difficult middle of any change.',
  },
  {
    label: 'Ongoing advisory',
    body: 'Many clients maintain a long-term relationship for periodic strategic counsel as the firm evolves. Some of our partnerships are over a decade old.',
  },
];

export default function Approach() {
  return (
    <main>
      {/* HERO — compact, dark, no architectural pattern */}
      <SectionWrapper
        background="dark"
        as="section"
        className="relative overflow-hidden pt-[var(--header-height)]"
      >
        <div
          aria-hidden="true"
          className="absolute -top-32 -right-32 w-[28rem] h-[28rem] rounded-full blur-3xl opacity-20 bg-accent-700 pointer-events-none"
        />
        <div className="relative max-w-3xl">
          <AnimatedReveal>
            <EyebrowLabel tone="accentOnDark">Our Approach</EyebrowLabel>
            <h1 className="text-white mt-4 mb-6">
              How <span className="italic text-accent-300">we</span> work.
            </h1>
            <p className="text-primary-200 text-lg leading-relaxed max-w-2xl">
              Every engagement is a partnership. We bring frameworks, but we
              never impose them.
            </p>
          </AnimatedReveal>
        </div>
      </SectionWrapper>

      {/* PRINCIPLES — editorial full-width rows */}
      <SectionWrapper as="section">
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
                Four principles
              </EyebrowLabel>
            </div>
            <span className="hidden text-[0.65rem] uppercase tracking-[0.28em] text-neutral-500 md:block">
              What we believe
            </span>
          </div>
        </AnimatedReveal>

        <ol className="mt-12 md:mt-20">
          {principles.map((p, i) => {
            const isLast = i === principles.length - 1;
            return (
              <li
                key={p.title}
                className={`grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 py-12 md:py-20 ${
                  isLast ? '' : 'border-b border-neutral-200'
                }`}
              >
                <AnimatedReveal className="md:col-span-7" delay={0}>
                  <div className="flex items-start gap-5 md:gap-7">
                    <span
                      aria-hidden="true"
                      className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-accent-700 pt-3 md:pt-5"
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h2 className="text-primary-950 [font-size:clamp(1.75rem,3.6vw,3rem)] [line-height:1.05] [letter-spacing:-0.02em]">
                      {p.title}
                    </h2>
                  </div>
                </AnimatedReveal>
                <AnimatedReveal
                  className="md:col-span-5 md:pt-3"
                  delay={0.12}
                >
                  <p className="text-neutral-700 leading-relaxed md:text-[1.0625rem] max-w-prose">
                    {p.body}
                  </p>
                </AnimatedReveal>
              </li>
            );
          })}
        </ol>
      </SectionWrapper>

      {/* HOW AN ENGAGEMENT UNFOLDS — vertical timeline */}
      <SectionWrapper as="section" background="light" className="border-t border-neutral-200">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-4">
            <AnimatedReveal>
              <EyebrowLabel tone="accent">The arc of an engagement</EyebrowLabel>
              <h2 className="mt-4 text-primary-950 [font-size:clamp(1.75rem,3vw,2.5rem)] [line-height:1.1] [letter-spacing:-0.01em]">
                How the work{' '}
                <span className="italic text-accent-700">unfolds</span>.
              </h2>
              <p className="mt-6 max-w-sm text-base leading-relaxed text-neutral-700">
                Every relationship is different, but most follow a familiar
                shape. Five stages, drawn on as the practice needs them.
              </p>
            </AnimatedReveal>
          </div>

          <div className="md:col-span-8">
            <ol>
              {stages.map((s, i) => {
                const isLast = i === stages.length - 1;
                return (
                  <AnimatedReveal key={s.label} delay={i * 0.08}>
                    <li
                      className={`grid grid-cols-[1.5rem_1fr] gap-x-5 md:gap-x-7 ${
                        isLast ? '' : 'pb-7 md:pb-10'
                      }`}
                    >
                      {/* Rail column: dot + connecting line down into the next dot */}
                      <div className="relative">
                        <span
                          aria-hidden="true"
                          className="absolute left-0 top-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-surface-light ring-1 ring-neutral-300"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-accent-600" />
                        </span>
                        {!isLast && (
                          <span
                            aria-hidden="true"
                            className="absolute left-[0.5625rem] top-7 -bottom-8 w-px bg-neutral-300 md:-bottom-12"
                          />
                        )}
                      </div>

                      {/* Content column: number / title row, then description aligned under title */}
                      <div className="grid grid-cols-[2.25rem_1fr] gap-x-4">
                        <span className="font-mono text-[0.7rem] uppercase tracking-[0.22em] text-accent-700 pt-1.5">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                        <h3 className="text-primary-950 [font-size:1.375rem] [line-height:1.15] [letter-spacing:-0.01em]">
                          {s.label}
                        </h3>
                        <p className="col-start-2 mt-4 text-neutral-700 leading-relaxed max-w-prose">
                          {s.body}
                        </p>
                      </div>
                    </li>
                  </AnimatedReveal>
                );
              })}
            </ol>
          </div>
        </div>
      </SectionWrapper>

      {/* WHAT WE ARE NOT — pull quote */}
      <section className="relative overflow-hidden bg-primary-900 text-neutral-100">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-accent-700 opacity-15 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 -left-40 h-[32rem] w-[32rem] rounded-full bg-primary-400 opacity-10 blur-3xl"
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
                We are not a large consultancy that rotates junior analysts
                through your engagement. Every conversation is with a senior
                practitioner who has spent their career in this industry. We
                don&rsquo;t sell frameworks.{' '}
                <span className="italic text-accent-300">
                  We solve problems.
                </span>{' '}
                And we don&rsquo;t leave when the work gets uncomfortable.
              </blockquote>
              <footer className="mt-10 flex items-center gap-4 text-[0.7rem] uppercase tracking-[0.28em] text-neutral-400">
                <span className="h-px w-12 bg-accent-400/60" />
                What we are not
              </footer>
            </div>
          </AnimatedReveal>
        </div>
      </section>

      {/* CTA */}
      <SectionWrapper background="light" as="section">
        <div className="mx-auto max-w-2xl text-center">
          <AnimatedReveal>
            <EyebrowLabel tone="accent">Begin</EyebrowLabel>
            <h2 className="mt-4 text-primary-950 [font-size:clamp(1.75rem,3vw,2.5rem)] [line-height:1.1] [letter-spacing:-0.01em]">
              Ready to start?
            </h2>
            <p className="mt-6 leading-relaxed text-neutral-700">
              A short, frank conversation is often enough to surface the shape
              of what comes next.
            </p>
            <div className="mt-10 flex justify-center">
              <Button size="lg" href="/contact">
                Start a conversation <ArrowRight size={14} />
              </Button>
            </div>
          </AnimatedReveal>
        </div>
      </SectionWrapper>
    </main>
  );
}
