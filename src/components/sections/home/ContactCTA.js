import { ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import AnimatedReveal from '@/components/ui/AnimatedReveal';
import EyebrowLabel from '@/components/ui/EyebrowLabel';

export default function ContactCTA() {
  return (
    <section
      aria-labelledby="contact-cta-heading"
      className="relative overflow-hidden bg-surface-dark text-neutral-100"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-1/2 h-[30rem] w-[30rem] -translate-y-1/2 rounded-full bg-accent-800/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 h-[24rem] w-[24rem] translate-y-1/3 rounded-full bg-primary-700/40 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1200px] px-container-x py-[clamp(4rem,12vw,7.5rem)] text-center">
        <AnimatedReveal>
          <EyebrowLabel tone="accentOnDark">Begin the conversation</EyebrowLabel>
        </AnimatedReveal>

        <AnimatedReveal delay={0.1}>
          <h2
            id="contact-cta-heading"
            className="mx-auto max-w-4xl text-white [font-size:clamp(2.5rem,6vw,4.75rem)] [line-height:1.02] [letter-spacing:-0.025em]"
          >
            Let&rsquo;s talk about
            <br />
            <span className="italic text-accent-300">your practice.</span>
          </h2>
        </AnimatedReveal>

        <AnimatedReveal delay={0.2}>
          <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-primary-200 md:text-lg">
            Every good engagement starts with a candid conversation. Tell us
            what you&rsquo;re thinking about — we&rsquo;ll tell you how we can
            help.
          </p>
        </AnimatedReveal>

        <AnimatedReveal delay={0.3}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-5">
            <Button href="/contact" size="lg" onDark className="group">
              Get in touch
              <ArrowRight
                size={16}
                aria-hidden="true"
                className="transition-transform duration-300 ease-out group-hover:translate-x-1"
              />
            </Button>

          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}
