import { ArrowRight } from 'lucide-react';
import EyebrowLabel from '@/components/ui/EyebrowLabel';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Divider from '@/components/ui/Divider';
import SectionWrapper from '@/components/ui/SectionWrapper';
import AnimatedReveal from '@/components/ui/AnimatedReveal';

export const metadata = {
  title: 'Careers — Innovia Partners',
  description:
    'Join the Innovia Partners team. We look for curious, rigorous people who want to do meaningful work with architecture and engineering practices.',
};

const pillars = [
  {
    label: 'Meaningful work',
    body: 'Every engagement matters to the people running the practice we are advising. We solve real problems with real consequences, not hypothetical exercises.',
  },
  {
    label: 'Deep sector focus',
    body: 'You will develop genuine expertise in an industry that rewards depth. Architecture and engineering consulting is a specialization, not a generalist posting.',
  },
  {
    label: 'Small team, big impact',
    body: 'Innovia is intentionally small. Everyone on the team has direct client exposure from day one, and your contributions are visible and valued.',
  },
  {
    label: 'Continuous learning',
    body: 'We invest in professional development, credentials, and the time to think carefully about problems. You will leave every engagement having learned something new.',
  },
];

export default function Careers() {
  return (
    <main>
      {/* Hero */}
      <SectionWrapper background="dark" as="section" className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute -top-32 -right-32 w-[28rem] h-[28rem] rounded-full blur-3xl opacity-20 bg-accent-700 pointer-events-none"
        />
        <div className="relative max-w-3xl">
          <AnimatedReveal>
            <EyebrowLabel tone="accentOnDark">Careers</EyebrowLabel>
            <h1 className="text-white mt-4 mb-6">
              Build your career where the work is real.
            </h1>
            <p className="text-primary-200 text-lg leading-relaxed max-w-2xl">
              We are a small, focused team of management consultants dedicated to architecture,
              design and engineering practices. If you are curious, rigorous, and want to do work
              that genuinely helps people, we would like to hear from you.
            </p>
          </AnimatedReveal>
        </div>
      </SectionWrapper>

      {/* Why join */}
      <SectionWrapper as="section">
        <AnimatedReveal>
          <EyebrowLabel>Why Innovia</EyebrowLabel>
          <h2 className="mt-4 mb-4 max-w-xl">A place where your work makes a difference.</h2>
          <p className="text-neutral-600 max-w-2xl mb-12 leading-relaxed">
            We are not a traditional consulting firm. We are a close-knit team with a deep
            commitment to a single sector, and we hire people who share that commitment.
          </p>
        </AnimatedReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {pillars.map(({ label, body }, i) => (
            <AnimatedReveal key={label} delay={i * 0.07}>
              <Card padding="lg" className="h-full">
                <h3 className="text-primary-900 mb-3">{label}</h3>
                <p className="text-neutral-600 leading-relaxed">{body}</p>
              </Card>
            </AnimatedReveal>
          ))}
        </div>
      </SectionWrapper>

      <Divider variant="fade" className="mx-container-x opacity-60" />

      {/* Open roles */}
      <SectionWrapper as="section">
        <AnimatedReveal>
          <EyebrowLabel>Open roles</EyebrowLabel>
          <h2 className="mt-4 mb-4 max-w-xl">Current opportunities.</h2>
        </AnimatedReveal>

        <AnimatedReveal delay={0.1}>
          <Card padding="lg" className="mt-6 text-center py-16 border-dashed">
            <p className="text-neutral-500 text-sm uppercase tracking-[0.16em] mb-4 font-medium">
              No open positions at this time
            </p>
            <p className="text-neutral-600 leading-relaxed max-w-md mx-auto mb-8">
              We do not always have open positions listed, but we are always interested in
              exceptional people. If you believe your background aligns with what we do, we
              encourage you to reach out directly.
            </p>
            <Button href="/contact" size="md">
              Send us your details <ArrowRight size={14} />
            </Button>
          </Card>
        </AnimatedReveal>
      </SectionWrapper>

      {/* What we look for */}
      <SectionWrapper background="dark" as="section" className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute -bottom-40 -left-40 w-[32rem] h-[32rem] rounded-full blur-3xl opacity-10 bg-primary-400 pointer-events-none"
        />
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          <AnimatedReveal>
            <EyebrowLabel tone="accentOnDark">What we look for</EyebrowLabel>
            <h2 className="text-white mt-4 mb-6">The profile of an Innovia consultant.</h2>
            <p className="text-primary-200 leading-relaxed mb-4">
              Our consultants come from a range of backgrounds, including architecture, engineering,
              business, and finance. What they share is intellectual rigour, genuine curiosity about
              how organizations work, and an ability to earn the trust of senior leaders under
              pressure.
            </p>
            <p className="text-primary-200 leading-relaxed">
              We value written and verbal communication that is clear, direct, and respectful.
              We work across Canada, the United States, and internationally, so comfort with
              different cultural and professional contexts is an advantage.
            </p>
          </AnimatedReveal>
          <AnimatedReveal delay={0.1}>
            <ul className="space-y-5 mt-2 md:mt-12">
              {[
                'MBA or equivalent postgraduate credential, or equivalent experience',
                'Strong analytical and financial modelling skills',
                'Comfort with ambiguity and complex, multi-stakeholder environments',
                'Genuine interest in the architecture and engineering sector',
                'Excellent written and verbal communication skills',
                'Bilingualism (English/French) is an asset',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-400 shrink-0"
                  />
                  <span className="text-primary-200 text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </AnimatedReveal>
        </div>
      </SectionWrapper>
    </main>
  );
}
