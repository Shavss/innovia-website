import { ArrowRight } from 'lucide-react';
import EyebrowLabel from '@/components/ui/EyebrowLabel';
import Button from '@/components/ui/Button';
import Divider from '@/components/ui/Divider';
import SectionWrapper from '@/components/ui/SectionWrapper';
import AnimatedReveal from '@/components/ui/AnimatedReveal';
import TeamSection from '@/components/sections/about/TeamSection';
import team from '@/data/team';

export const metadata = {
  title: 'About — Innovia Partners',
  description:
    'For over 20 years, Innovia Partners has advised the world\'s most ambitious architecture, design and engineering practices on strategy, growth, and lasting value.',
};

const values = [
  {
    label: 'Long-term thinking',
    body: 'We build relationships that span decades, not engagements. The decisions we help clients make today are designed to hold up over the long term.',
  },
  {
    label: 'Sector depth',
    body: 'Architecture and engineering are not like other industries. We have spent 20 years developing deep fluency in how these practices work, fail, and thrive.',
  },
  {
    label: 'Honest counsel',
    body: 'We tell clients what they need to hear, not what they want to hear. Trust is the most important thing we can offer, and we do not compromise it.',
  },
  {
    label: 'Implementation, not just advice',
    body: 'Strategy without execution is just a document. We stay involved to ensure the plans we help create actually get implemented.',
  },
];

const stats = [
  { value: '20+', label: 'Years of helping our clients grow and succeed' },
  { value: '360°', label: 'Expertise and knowledge in all business pillars' },
  { value: '200+', label: 'Results-oriented projects with small, medium and large firms' },
  { value: '100+', label: 'Clients in Canada, the United States and Europe' },
];

export default function About() {
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
            <EyebrowLabel tone="accentOnDark">About Innovia Partners</EyebrowLabel>
            <h1 className="text-white mt-4 mb-6">
              Confidence in change, built over two decades.
            </h1>
            <p className="text-primary-200 text-lg leading-relaxed mb-10 max-w-2xl">
              We are a management consultancy dedicated exclusively to architecture, design and engineering practices.
              Since 2003, we have helped ambitious firms build the systems, strategies and structures that create lasting value.
              We understand that for those committed to their craft, the professional journey is also personal.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" onDark href="/contact">
                Start a conversation
              </Button>
              <Button variant="ghost" size="lg" onDark href="/services">
                Our services <ArrowRight size={14} />
              </Button>
            </div>
          </AnimatedReveal>
        </div>
      </SectionWrapper>

      {/* Stats */}
      <section className="bg-accent-600">
        <div className="max-w-[1200px] mx-auto px-container-x py-12 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map(({ value, label }, i) => (
              <AnimatedReveal key={label} delay={i * 0.08}>
                <div className="text-center">
                  <span className="block font-heading text-4xl md:text-5xl text-white mb-1">
                    {value}
                  </span>
                  <span className="text-xs uppercase tracking-[0.18em] font-medium text-white/70">
                    {label}
                  </span>
                </div>
              </AnimatedReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <SectionWrapper as="section">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
          <AnimatedReveal>
            <EyebrowLabel>Our mission</EyebrowLabel>
            <h2 className="mt-4 mb-6">You do great work. Why not do more?</h2>
            <p className="text-neutral-700 leading-relaxed mb-6">
              Architecture and engineering practices are built on talent, craft, and ambition. Yet
              too many spend their energy managing the chaos of day-to-day operations rather than
              realizing their full potential. We exist to change that.
            </p>
            <p className="text-neutral-700 leading-relaxed">
              Innovia Partners works alongside firm leaders to build the financial discipline,
              organizational clarity, and strategic direction that turns great work into great
              businesses. Our clients continue to win ambitious projects, attract top talent, and
              grow sustainably because they have the systems and structures to support it.
            </p>
          </AnimatedReveal>
          <AnimatedReveal delay={0.12}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {values.map(({ label, body }) => (
                <div
                  key={label}
                  className="border-l-2 border-accent-600 pl-5 py-1"
                >
                  <h4 className="text-primary-900 mb-2">{label}</h4>
                  <p className="text-neutral-600 text-sm leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </AnimatedReveal>
        </div>
      </SectionWrapper>

      <Divider variant="fade" className="mx-container-x opacity-60" />

      {/* Team */}
      <SectionWrapper as="section">
        <TeamSection team={team} />
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper background="dark" as="section" className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute -bottom-40 -left-40 w-[32rem] h-[32rem] rounded-full blur-3xl opacity-10 bg-primary-400 pointer-events-none"
        />
        <div className="relative text-center max-w-2xl mx-auto">
          <AnimatedReveal>
            <EyebrowLabel tone="accentOnDark">Work with us</EyebrowLabel>
            <h2 className="text-white mt-4 mb-6">
              Ready to build something that lasts?
            </h2>
            <p className="text-primary-200 mb-10 leading-relaxed">
              Whether you are planning a succession, working through a strategic inflection point, or
              simply ready to run a better business, we would like to hear from you.
            </p>
            <Button size="lg" onDark href="/contact">
              Get in touch
            </Button>
          </AnimatedReveal>
        </div>
      </SectionWrapper>
    </main>
  );
}
