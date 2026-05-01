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
      {/* HERO + PRINCIPLES — single dark composition */}
      <SectionWrapper
        background="dark"
        as="section"
        className="relative overflow-hidden pt-[var(--header-height)] lg:min-h-screen lg:flex lg:items-center"
        innerClassName="w-full"
      >
        <div
          aria-hidden="true"
          className="absolute -top-32 -right-32 w-[28rem] h-[28rem] rounded-full blur-3xl opacity-20 bg-accent-700 pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 -left-40 h-[32rem] w-[32rem] rounded-full bg-primary-400 opacity-10 blur-3xl"
        />

        <div className="relative">
          {/* Heading */}
          <div className="max-w-3xl">
            <AnimatedReveal>
              <EyebrowLabel tone="accentOnDark">Our Approach</EyebrowLabel>
              <h1 className="text-white mt-4 mb-6">
                How <span className="italic text-accent-300">we</span> work.
              </h1>
            </AnimatedReveal>
          </div>

          {/* Principles grid */}
          <ol className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-10 md:gap-y-14">
            {principles.map((p, i) => (
              <AnimatedReveal key={p.title} delay={0.05 + i * 0.08}>
                <li className="relative pt-7 md:pt-8 border-t border-white/15">
                  <span
                    aria-hidden="true"
                    className="absolute -top-px left-0 h-px w-12 bg-accent-400"
                  />
                  <span className="block font-mono text-[0.7rem] uppercase tracking-[0.22em] text-accent-300 mb-3">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h2 className="text-white [font-size:clamp(1.25rem,2vw,1.625rem)] [line-height:1.2] [letter-spacing:-0.01em] mb-3">
                    {p.title}
                  </h2>
                  <p className="text-primary-200 text-sm md:text-[0.95rem] leading-relaxed max-w-prose">
                    {p.body}
                  </p>
                </li>
              </AnimatedReveal>
            ))}
          </ol>
        </div>
      </SectionWrapper>

      {/* HOW AN ENGAGEMENT UNFOLDS — vertical timeline */}
      <SectionWrapper
        as="section"
        background="light"
        className="border-t border-neutral-200 lg:min-h-screen lg:flex lg:items-center"
        innerClassName="w-full"
      >
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

      {/* CTA */}
      <SectionWrapper background="dark" as="section" className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute -bottom-40 -left-40 w-[32rem] h-[32rem] rounded-full blur-3xl opacity-10 bg-primary-400 pointer-events-none"
        />
        <div className="relative mx-auto max-w-2xl text-center">
          <AnimatedReveal>
            <EyebrowLabel tone="accentOnDark">Begin</EyebrowLabel>
            <h2 className="text-white mt-4 mb-6">
              Ready to start?
            </h2>
            <p className="text-primary-200 mb-10 leading-relaxed">
              A short, frank conversation is often enough to surface the shape
              of what comes next.
            </p>
            <Button size="lg" onDark href="/contact">
              Start a conversation <ArrowRight size={14} />
            </Button>
          </AnimatedReveal>
        </div>
      </SectionWrapper>
    </main>
  );
}
