import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import AnimatedReveal from '@/components/ui/AnimatedReveal';
import EyebrowLabel from '@/components/ui/EyebrowLabel';
import clients from '@/data/clients';
import stories from '@/data/stories';

function truncateToSentence(text) {
  if (!text) return '';
  const match = text.match(/^[^.!?]*[.!?]/);
  return match ? match[0].trim() : text;
}

function buildStoryTiles() {
  return stories.slice(0, 2).map((story) => ({
    quote: truncateToSentence(story.summary || story.outcome || ''),
    attribution: story.category,
    title: story.title,
    slug: story.slug,
  }));
}

function StoryTile({ quote, attribution, title, slug }) {
  return (
    <Link
      href={`/success-stories/${slug}`}
      className="group relative flex min-h-[180px] flex-col justify-between border border-accent-500/40 bg-primary-800/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-400/70 hover:bg-primary-800/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-300 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-dark md:min-h-[140px]"
    >
      <div
        aria-hidden="true"
        className="absolute -top-3 left-5 font-[family-name:var(--font-heading)] text-5xl leading-none text-accent-400/80"
      >
        &ldquo;
      </div>
      <p className="font-[family-name:var(--font-heading)] italic text-[0.95rem] leading-snug text-neutral-100 md:text-base">
        {quote}
      </p>
      <div className="mt-4 flex items-center justify-between gap-3">
        <span className="text-[0.65rem] uppercase tracking-[0.22em] text-accent-300">
          {attribution}
        </span>
        <ArrowRight
          size={14}
          aria-hidden="true"
          className="text-accent-300 transition-transform duration-300 ease-out group-hover:translate-x-1"
        />
      </div>
      <span className="sr-only">Read the {title} story</span>
    </Link>
  );
}

export default function CredibilityStrip() {
  const storyTiles = buildStoryTiles();
  const clientNames = clients.slice(0, 8);

  return (
    <section
      aria-labelledby="credibility-heading"
      className="relative overflow-hidden bg-surface-dark text-neutral-100"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary-700 to-transparent"
      />
      <div className="mx-auto max-w-[1200px] px-container-x py-section-y">
        <div className="max-w-2xl">
          <AnimatedReveal>
            <EyebrowLabel tone="accentOnDark">Selected clients</EyebrowLabel>
            <h2
              id="credibility-heading"
              className="mt-2 text-white [font-size:clamp(2rem,4vw,3rem)] [line-height:1.05] [letter-spacing:-0.02em]"
            >
              Trusted by practices we admire.
            </h2>
          </AnimatedReveal>
        </div>

        <AnimatedReveal delay={0.1}>
          <div className="mx-auto mt-14 max-w-4xl md:mt-20">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              {storyTiles.map((story) => (
                <StoryTile key={`story-${story.slug}`} {...story} />
              ))}
            </div>
          </div>
        </AnimatedReveal>

        <AnimatedReveal delay={0.15}>
          <div className="mt-16 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-b border-primary-800/60 py-8 md:mt-20 md:grid-cols-4 md:py-10">
            {clientNames.map((client) => (
              <span
                key={`client-${client.slug}`}
                className="text-center font-[family-name:var(--font-heading)] text-base leading-tight text-neutral-200/90 md:text-lg"
              >
                {client.name}
              </span>
            ))}
          </div>
        </AnimatedReveal>

        <AnimatedReveal delay={0.2}>
          <div className="mt-14 flex justify-center">
            <Link
              href="/approach"
              className="group inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.26em] text-neutral-100 transition-colors hover:text-accent-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-300 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-dark"
            >
              See how we work
              <ArrowRight
                size={14}
                aria-hidden="true"
                className="transition-transform duration-300 ease-out group-hover:translate-x-1"
              />
            </Link>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  );
}
