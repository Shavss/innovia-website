'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import EyebrowLabel from '@/components/ui/EyebrowLabel';
import AnimatedReveal from '@/components/ui/AnimatedReveal';

const timeFormatter = new Intl.DateTimeFormat('en-CA', {
  timeZone: 'America/Toronto',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  hour12: false,
});

const dateFormatter = new Intl.DateTimeFormat('en-CA', {
  timeZone: 'America/Toronto',
  weekday: 'long',
  day: 'numeric',
  month: 'long',
});

export default function TorontoOffice() {
  const [now, setNow] = useState(null);

  useEffect(() => {
    const tick = () => setNow(new Date());
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const time = now ? timeFormatter.format(now) : '— — : — — : — —';
  const date = now ? dateFormatter.format(now) : ' ';

  return (
    <section
      aria-labelledby="toronto-heading"
      className="relative bg-surface-light text-foreground"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:min-h-[42rem]">
        {/* Image — first on mobile (top), second on desktop (right) */}
        <AnimatedReveal
          direction="left"
          className="order-1 lg:order-2 relative h-[22rem] sm:h-[28rem] lg:h-auto p-4 lg:p-8"
        >
          <div className="relative h-full w-full overflow-hidden">
            <Image
              src="/images/contact/toronto.jpg"
              alt="Toronto skyline at dusk"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-top [filter:saturate(0.65)_contrast(1.02)_brightness(0.96)]"
            />
            {/* Subtle warm wash to harmonise with cream background */}
            <div
              aria-hidden="true"
              className="absolute inset-0 mix-blend-multiply"
              style={{
                background:
                  'linear-gradient(135deg, rgba(240,237,232,0.18) 0%, rgba(14,26,45,0.06) 100%)',
              }}
            />
          </div>
        </AnimatedReveal>

        {/* Text */}
        <div className="order-2 lg:order-1 flex items-center px-container-x py-section-y lg:px-12 xl:px-20">
          <AnimatedReveal className="w-full max-w-xl">
            <EyebrowLabel>Our office</EyebrowLabel>

            <h2
              id="toronto-heading"
              className="font-heading text-foreground leading-[0.95] tracking-[-0.03em] [font-size:clamp(2.5rem,7vw,6rem)]"
            >
              Toronto
            </h2>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-12">
              <div>
                <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-accent-700">
                  Innovia Partners HQ
                </span>
                <address className="not-italic mt-3 text-base leading-relaxed text-neutral-800">
                  Toronto, Ontario
                  <br />
                  Canada
                </address>
              </div>

              <div>
                <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-accent-700">
                  Local time
                </span>
                <p
                  className="mt-3 font-heading text-3xl md:text-4xl text-foreground tabular-nums tracking-tight"
                  aria-live="off"
                  suppressHydrationWarning
                >
                  {time}
                </p>
                <p
                  className="mt-1.5 text-xs text-neutral-500 capitalize"
                  suppressHydrationWarning
                >
                  {date}
                </p>
              </div>
            </div>
          </AnimatedReveal>
        </div>
      </div>
    </section>
  );
}
