import Link from 'next/link';
import AnimatedReveal from '@/components/ui/AnimatedReveal';

const rows = [
  {
    title: 'Our Approach',
    description:
      'Bringing our strengths, expertise and experience to the table, we work collaboratively alongside you to achieve goals.',
    href: '/approach',
  },
  {
    title: 'Our Team',
    description:
      'Our team combines practical know-how with forward-thinking strategies, ensuring a focus on outcomes that matter.',
    href: '/about#team',
  },
  {
    title: 'Join Us',
    description:
      'Join us and be part of a dynamic team where ideas transform into concrete results.',
    href: '/careers',
  },
];

function WayfindingRow({ title, description, href, isLast }) {
  return (
    <Link
      href={href}
      className={`group relative flex flex-col gap-3 py-10 transition-colors duration-300 hover:bg-white/[0.04] focus-visible:outline-none focus-visible:bg-white/[0.04] md:grid md:grid-cols-12 md:items-baseline md:gap-8 md:py-14 lg:py-16 ${
        isLast ? '' : 'border-b border-primary-800/60'
      }`}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 h-px w-0 bg-accent-400 transition-[width] duration-500 ease-out group-hover:w-full"
      />
      <h3 className="text-white [font-size:clamp(1.5rem,2.4vw,2rem)] [line-height:1.1] [letter-spacing:-0.01em] md:col-span-4 md:pr-4">
        {title}
      </h3>
      <p className="max-w-md text-base leading-relaxed text-neutral-300 md:col-span-6 md:text-[1.0625rem]">
        {description}
      </p>
      <span className="mt-2 inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-accent-300 transition-colors duration-300 group-hover:text-accent-200 md:col-span-2 md:mt-0 md:justify-end">
        Learn more
        <span
          aria-hidden="true"
          className="inline-block translate-x-0 transition-transform duration-300 ease-out group-hover:translate-x-1"
        >
          ›
        </span>
      </span>
    </Link>
  );
}

export default function Wayfinding() {
  return (
    <section
      aria-labelledby="wayfinding-heading"
      className="relative bg-surface-dark text-neutral-100"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-700 to-transparent"
      />
      <div className="mx-auto flex min-h-[100svh] max-w-[1200px] items-center px-container-x py-section-y">
        <div className="grid w-full grid-cols-1 gap-12 md:grid-cols-12 md:gap-16 lg:gap-24">
          <div className="md:col-span-5 lg:col-span-5">
            <div className="md:sticky md:top-32">
              <AnimatedReveal>
                <span
                  aria-hidden="true"
                  className="mb-8 block h-px w-12 bg-accent-400"
                />
                <h2
                  id="wayfinding-heading"
                  className="text-white [font-size:clamp(2.25rem,4.6vw,3.75rem)] [line-height:1.02] [letter-spacing:-0.025em]"
                >
                  Solving Problems,
                  <br />
                  <span className="italic text-accent-300">Together.</span>
                </h2>
              </AnimatedReveal>
            </div>
          </div>

          <div className="md:col-span-7 lg:col-span-7">
            <AnimatedReveal delay={0.1}>
              <div
                role="list"
                className="border-t border-primary-800/60"
              >
                {rows.map((row, index) => (
                  <div role="listitem" key={row.href}>
                    <WayfindingRow
                      {...row}
                      isLast={index === rows.length - 1}
                    />
                  </div>
                ))}
              </div>
            </AnimatedReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
