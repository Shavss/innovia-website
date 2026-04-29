import Image from 'next/image';
import { MapPin } from 'lucide-react';
import EyebrowLabel from '@/components/ui/EyebrowLabel';
import AnimatedReveal from '@/components/ui/AnimatedReveal';

export default function LocationSection() {
  return (
    <section
      aria-labelledby="hq-heading"
      className="relative overflow-hidden bg-surface-dark text-neutral-100"
    >
      {/* Atmospheric map placeholder */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 40%, rgba(255,255,255,0.06), transparent 60%), ' +
            'linear-gradient(180deg, var(--primary-900) 0%, var(--primary-950) 100%)',
        }}
      />
      {/* Grid lines — subtle blueprint feel */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/4 h-[28rem] w-[28rem] rounded-full bg-accent-700/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 h-[20rem] w-[20rem] rounded-full bg-primary-400/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-[1200px] px-container-x py-section-y">
        <AnimatedReveal>
          <EyebrowLabel tone="accentOnDark">Where to find us</EyebrowLabel>
          <h2 id="hq-heading" className="text-white max-w-2xl">
            Anchored in Toronto. Working with practices everywhere.
          </h2>
        </AnimatedReveal>

        <AnimatedReveal delay={0.15}>
          <div className="relative mt-12 md:mt-16">
            {/* Map canvas */}
            <div
              role="img"
              aria-label="Map showing Innovia Partners headquarters in Toronto, Ontario, Canada"
              className="relative h-[22rem] md:h-[28rem] w-full overflow-hidden rounded-2xl border border-white/10"
            >
              {/* Map image */}
              <Image
                src="/images/contact/map_toronto.png"
                alt=""
                fill
                sizes="(min-width: 1280px) 1136px, 100vw"
                className="object-cover"
                priority={false}
              />
              {/* Dark navy colour wash — keeps grid + pin readable */}
              <div
                aria-hidden="true"
                className="absolute inset-0"
                style={{ backgroundColor: 'var(--primary-950)', opacity: 0.6 }}
              />
              {/* Faint coordinate grid */}
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage:
                    'linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)',
                  backgroundSize: '48px 48px',
                }}
              />

              {/* Centered pin with pulse */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span
                  aria-hidden="true"
                  className="absolute h-24 w-24 rounded-full bg-accent-500/20 animate-ping"
                />
                <span
                  aria-hidden="true"
                  className="absolute h-12 w-12 rounded-full bg-accent-500/30"
                />
                <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-accent-600 text-white shadow-[0_8px_30px_rgba(0,0,0,0.45)] ring-4 ring-accent-300/30">
                  <MapPin size={22} strokeWidth={2} aria-hidden="true" />
                </span>
              </div>

              {/* Coordinate label */}
              <div className="absolute top-5 right-5 text-[0.65rem] font-mono uppercase tracking-[0.22em] text-primary-200/70">
                43.6532° N · 79.3832° W
              </div>

              {/* Label card */}
              <div className="absolute bottom-5 left-5 right-5 sm:right-auto sm:max-w-sm">
                <div className="bg-surface-dark/85 backdrop-blur-md border border-white/15 rounded-xl p-5 md:p-6 shadow-[0_12px_40px_rgba(0,0,0,0.4)]">
                  <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-accent-300">
                    Innovia Partners HQ
                  </span>
                  <p className="mt-2 font-heading text-xl text-white leading-tight">
                    Toronto, Ontario
                  </p>
                  <p className="text-sm text-primary-200 mt-0.5">Canada</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}
