'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ImageIcon } from 'lucide-react';
import Badge from '@/components/ui/Badge';
import Card from '@/components/ui/Card';

function formatDate(iso) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

function InsightCardMedia({ src, alt, category }) {
  const [errored, setErrored] = useState(false);
  const showPlaceholder = !src || errored;

  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden bg-primary-100">
      {showPlaceholder ? (
        <div
          aria-hidden="true"
          className="absolute inset-0 flex items-end justify-between bg-gradient-to-br from-primary-200 via-neutral-200 to-accent-200/60"
        >
          <div
            className="absolute inset-0 opacity-40 mix-blend-overlay"
            style={{
              backgroundImage:
                'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.6), transparent 50%), radial-gradient(circle at 80% 80%, rgba(0,0,0,0.15), transparent 55%)',
            }}
          />
          <span className="relative z-10 m-5 inline-flex items-center gap-2 rounded-full bg-surface-card/70 px-3 py-1 text-[0.6rem] uppercase tracking-[0.22em] text-primary-900 backdrop-blur-sm">
            <ImageIcon size={12} aria-hidden="true" />
            {category}
          </span>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          onError={() => setErrored(true)}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
      )}
    </div>
  );
}

export default function InsightCard({
  item,
  isActive = true,
  className = '',
}) {
  return (
    <Card
      as={Link}
      href={`/news/${item.slug}`}
      padding="lg"
      hoverable
      tabIndex={isActive ? 0 : -1}
      aria-hidden={!isActive}
      className={`h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-600 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-light ${className}`.trim()}
      media={
        <InsightCardMedia
          src={item.image}
          alt={item.title}
          category={item.category}
        />
      }
    >
      <div className="flex items-center gap-3">
        <Badge variant="subtle">{item.category}</Badge>
        <time
          dateTime={item.date}
          className="text-xs uppercase tracking-wide text-neutral-500"
        >
          {formatDate(item.date)}
        </time>
      </div>
      <h3 className="mt-4 text-primary-950 [font-size:1.35rem] [line-height:1.2] [letter-spacing:-0.01em] transition-colors group-hover:text-accent-700">
        {item.title}
      </h3>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-neutral-700">
        {item.excerpt}
      </p>
      <span className="mt-6 inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-primary-900 transition-colors group-hover:text-accent-700">
        Read more
        <ArrowRight
          size={14}
          aria-hidden="true"
          className="transition-transform duration-300 ease-out group-hover:translate-x-1"
        />
      </span>
    </Card>
  );
}
