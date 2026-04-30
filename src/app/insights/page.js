import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import EyebrowLabel from '@/components/ui/EyebrowLabel';
import Badge from '@/components/ui/Badge';
import Card from '@/components/ui/Card';
import Divider from '@/components/ui/Divider';
import SectionWrapper from '@/components/ui/SectionWrapper';
import AnimatedReveal from '@/components/ui/AnimatedReveal';
import news from '@/data/news';

export const metadata = {
  title: 'Insights — Innovia Partners',
  description:
    'Commentary and analysis on strategy, succession, human capital, and digital transformation for architecture and engineering practices.',
};

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-CA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function Insights() {
  const [featured, ...rest] = news;

  return (
    <main>
      {/* Header */}
      <SectionWrapper
        background="dark"
        as="section"
        className="relative overflow-hidden pt-[var(--header-height)]"
      >
        <div
          aria-hidden="true"
          className="absolute -top-32 -right-32 w-[28rem] h-[28rem] rounded-full blur-3xl opacity-20 bg-accent-700 pointer-events-none"
        />
        <div className="relative max-w-3xl">
          <AnimatedReveal>
            <EyebrowLabel tone="accentOnDark">Insights</EyebrowLabel>
            <h1 className="text-white mt-4 mb-6">
              Ideas that matter for architecture and engineering practices.
            </h1>
            <p className="text-primary-200 text-lg leading-relaxed max-w-2xl">
              Our team writes about strategy, succession, human capital, and digital transformation
              in the AEC sector. Straight talk, from people who have been in the room.
            </p>
          </AnimatedReveal>
        </div>
      </SectionWrapper>

      {/* Featured article */}
      <SectionWrapper as="section">
        <AnimatedReveal>
          <EyebrowLabel>Featured</EyebrowLabel>
        </AnimatedReveal>
        <AnimatedReveal delay={0.08}>
          <Card
            as={Link}
            href={`/news/${featured.slug}`}
            padding="lg"
            hoverable
            className="mt-6 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center"
          >
            {/* Decorative block */}
            <div
              aria-hidden="true"
              className="hidden md:block md:col-span-4 h-48 rounded-xl bg-primary-100"
            />
            <div className="md:col-span-8">
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="solid">{featured.category}</Badge>
                <time
                  dateTime={featured.date}
                  className="text-xs text-neutral-500 uppercase tracking-wide"
                >
                  {formatDate(featured.date)}
                </time>
              </div>
              <h2 className="text-primary-900 mb-3 group-hover:text-accent-700 transition-colors">
                {featured.title}
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-6">{featured.excerpt}</p>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-accent-600 group-hover:gap-3 transition-all">
                Read article <ArrowRight size={14} />
              </span>
            </div>
          </Card>
        </AnimatedReveal>
      </SectionWrapper>

      <Divider variant="fade" className="mx-container-x opacity-60" />

      {/* All articles */}
      <SectionWrapper as="section">
        <AnimatedReveal>
          <EyebrowLabel>All insights</EyebrowLabel>
        </AnimatedReveal>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((article, i) => (
            <AnimatedReveal key={article.slug} delay={i * 0.07}>
              <Card
                as={Link}
                href={`/news/${article.slug}`}
                padding="lg"
                hoverable
                className="h-full flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Badge variant="subtle">{article.category}</Badge>
                  <time
                    dateTime={article.date}
                    className="text-xs text-neutral-500 uppercase tracking-wide"
                  >
                    {formatDate(article.date)}
                  </time>
                </div>
                <h3 className="text-primary-900 mb-3 group-hover:text-accent-700 transition-colors flex-1">
                  {article.title}
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                  {article.excerpt}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-accent-600 group-hover:gap-3 transition-all mt-auto">
                  Read article <ArrowRight size={14} />
                </span>
              </Card>
            </AnimatedReveal>
          ))}
        </div>
      </SectionWrapper>
    </main>
  );
}
