import EyebrowLabel from '@/components/ui/EyebrowLabel';
import AnimatedReveal from '@/components/ui/AnimatedReveal';

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-surface-dark text-neutral-100">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-accent-700/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-32 h-[24rem] w-[24rem] rounded-full bg-primary-400/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1200px] px-container-x pt-20 pb-16 md:pt-28 md:pb-20">
        <div className="max-w-3xl">
          <AnimatedReveal>
            <EyebrowLabel tone="accentOnDark">Contact</EyebrowLabel>
            <h1 className="text-white mt-4 mb-6">
              Let&rsquo;s start a{' '}
              <span className="italic text-accent-300">conversation.</span>
            </h1>
          </AnimatedReveal>
          <AnimatedReveal delay={0.1}>
            <p className="text-primary-200 text-lg leading-relaxed max-w-2xl">
              Whether you have clarity and are ready to act, or need help
              determining the best trajectory forward, we are here to help.
            </p>
          </AnimatedReveal>
        </div>
      </div>
    </section>
  );
}
