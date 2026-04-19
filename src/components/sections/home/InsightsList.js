import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import AnimatedReveal from '@/components/ui/AnimatedReveal';
import EyebrowLabel from '@/components/ui/EyebrowLabel';
import Badge from '@/components/ui/Badge';
import news from '@/data/news';

function formatDate(iso) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

export default function InsightsList() {
  const items = [...news]
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, 3);

  const extraTagPool = ['Practice', 'Leadership', 'Operations', 'Growth', 'Culture', 'Research'];
  const tagsFor = (item, idx) => {
    const extras = [
      extraTagPool[idx % extraTagPool.length],
      extraTagPool[(idx + 2) % extraTagPool.length],
    ];
    return [item.category, ...extras];
  };

  return (
    <section
      aria-labelledby="insights-heading"
      className="bg-surface-light"
    >
      <div className="mx-auto max-w-[1200px] px-container-x py-section-y">
        <AnimatedReveal>
          <EyebrowLabel tone="accent">Journal</EyebrowLabel>
          <h2
            id="insights-heading"
            className="mt-2 text-primary-950 [font-size:clamp(2rem,4vw,3rem)] [line-height:1.05] [letter-spacing:-0.02em]"
          >
            Latest insights.
          </h2>
        </AnimatedReveal>

        <AnimatedReveal delay={0.1}>
          <ol className="mt-14 border-t border-neutral-300/80 md:mt-20">
            {items.map((item, i) => {
              const tags = tagsFor(item, i);
              return (
                <li
                  key={item.slug}
                  className="border-b border-neutral-300/80"
                >
                  <Link
                    href={`/news/${item.slug}`}
                    className="group relative grid grid-cols-1 gap-6 py-8 md:grid-cols-[auto_1fr_auto] md:items-baseline md:gap-10 md:py-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-600 focus-visible:ring-offset-4 focus-visible:ring-offset-surface-light"
                  >
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute left-0 top-0 h-px w-0 bg-accent-700 motion-safe:transition-[width] motion-safe:duration-500 motion-safe:ease-out group-hover:w-full group-focus-visible:w-full"
                    />

                    <div className="flex items-center gap-4 text-[0.65rem] uppercase tracking-[0.26em] text-neutral-500 md:flex-col md:items-start md:gap-3 md:pt-2 md:text-[0.7rem]">
                      <span
                        aria-hidden="true"
                        className="font-[family-name:var(--font-heading)] text-sm tracking-normal text-primary-900 md:text-base"
                      >
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <time dateTime={item.date} className="tabular-nums">
                        {formatDate(item.date)}
                      </time>
                      <div className="flex flex-wrap items-center gap-1.5 md:hidden">
                        {tags.map((t) => (
                          <Badge
                            key={t}
                            variant="neutral"
                            className="!text-[0.6rem] !px-2.5 !py-0.5 !tracking-[0.18em]"
                          >
                            {t}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="max-w-3xl">
                      <h3 className="font-[family-name:var(--font-heading)] text-primary-950 [font-size:clamp(1.35rem,2.4vw,1.9rem)] [line-height:1.15] [letter-spacing:-0.01em] motion-safe:transition-colors motion-safe:duration-300 group-hover:text-accent-700">
                        {item.title}
                      </h3>
                      <p className="mt-3 max-w-2xl text-[0.95rem] leading-relaxed text-neutral-700 md:mt-4">
                        {item.excerpt}
                      </p>
                    </div>

                    <div className="hidden md:flex md:items-center md:gap-4 md:pt-2">
                      <div className="flex max-w-[220px] flex-wrap justify-end gap-1.5">
                        {tags.map((t) => (
                          <Badge
                            key={t}
                            variant="neutral"
                            className="!text-[0.6rem] !px-2.5 !py-0.5 !tracking-[0.18em]"
                          >
                            {t}
                          </Badge>
                        ))}
                      </div>
                      <ArrowUpRight
                        size={18}
                        aria-hidden="true"
                        strokeWidth={1.5}
                        className="text-neutral-400 motion-safe:transition-all motion-safe:duration-300 motion-safe:ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-700"
                      />
                    </div>
                  </Link>
                </li>
              );
            })}
          </ol>
        </AnimatedReveal>

        <div className="mt-14 flex justify-center">
          <Link
            href="/news"
            className="group inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-primary-900 transition-colors hover:text-accent-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-600 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-light"
          >
            All insights
            <ArrowRight
              size={14}
              aria-hidden="true"
              className="transition-transform duration-300 ease-out group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
