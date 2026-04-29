'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { X } from 'lucide-react';
import EyebrowLabel from '@/components/ui/EyebrowLabel';
import AnimatedReveal from '@/components/ui/AnimatedReveal';
import Card from '@/components/ui/Card';

function Avatar({ member }) {
  const [failed, setFailed] = useState(false);

  if (!member.image || failed) {
    return (
      <div
        aria-hidden="true"
        className="flex h-full w-full items-center justify-center bg-primary-100"
      >
        <span className="font-heading text-primary-700 select-none text-4xl md:text-5xl">
          {member.initials}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={member.image}
      alt={`Portrait of ${member.name}`}
      fill
      className="object-cover object-top"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 480px"
      onError={() => setFailed(true)}
    />
  );
}

function MemberCard({ member, isOpen, onToggle }) {
  const panelId = `bio-panel-${member.slug}`;

  return (
    <article
      className={`group relative flex h-full overflow-hidden rounded-lg border bg-surface-card transition-colors duration-300 ${
        isOpen
          ? 'border-accent-600 shadow-md'
          : 'border-neutral-200 hover:border-accent-600/40'
      }`}
    >
      {isOpen && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[3px] bg-accent-600"
        />
      )}

      <div className="flex w-full flex-col md:flex-row">
        <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden bg-primary-50 md:aspect-auto md:w-[40%] md:min-h-[220px]">
          <Avatar member={member} />
        </div>

        <div className="flex flex-1 flex-col p-5 md:p-6">
          <div className="mb-3">
            <h3 className="font-heading text-primary-950 mb-1.5 text-xl md:text-2xl leading-tight">
              {member.name}
            </h3>
            <p className="text-[0.65rem] uppercase tracking-[0.22em] text-accent-700 font-semibold">
              {member.title}
            </p>
          </div>

          <p className="text-neutral-700 text-sm leading-relaxed line-clamp-2">
            {member.shortBio}
          </p>

          <div className="mt-auto pt-4">
            <button
              type="button"
              onClick={onToggle}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-accent-700 transition-colors hover:text-accent-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-600 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-card rounded-sm"
            >
              {isOpen ? 'Close' : 'Read bio'}
              <span
                aria-hidden="true"
                className={`transition-transform duration-300 ease-out ${
                  isOpen ? 'rotate-90' : 'group-hover:translate-x-0.5'
                }`}
              >
                ›
              </span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

function DetailPanel({ member, onClose, reduceMotion }) {
  return (
    <motion.div
      id={`bio-panel-${member.slug}`}
      role="region"
      aria-label={`Full bio for ${member.name}`}
      initial={reduceMotion ? false : { height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
      transition={{
        height: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
        opacity: { duration: 0.3, ease: 'easeOut' },
      }}
      className="overflow-hidden"
    >
      <div className="relative mt-6 lg:mt-8 rounded-lg border border-accent-600/30 bg-primary-50/60 p-6 md:p-10">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close bio"
          className="absolute top-4 right-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-neutral-300 bg-surface-card text-neutral-700 transition-colors hover:border-accent-600 hover:text-accent-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-600 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-50"
        >
          <X size={16} aria-hidden="true" />
        </button>

        <motion.div
          initial={reduceMotion ? false : { y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.35, ease: 'easeOut', delay: 0.1 }}
          className="max-w-3xl pr-10"
        >
          <p className="text-[0.65rem] uppercase tracking-[0.22em] text-accent-700 font-semibold mb-2">
            {member.title}
          </p>
          <h3 className="font-heading text-primary-950 text-2xl md:text-3xl leading-tight mb-5">
            {member.name}
          </h3>
          <div className="space-y-4 text-sm md:text-[0.95rem] leading-relaxed text-neutral-700">
            {member.bio.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          {member.credentials?.length > 0 && (
            <div className="mt-8 border-t border-neutral-300/70 pt-5">
              <p className="text-[0.65rem] uppercase tracking-[0.22em] text-neutral-500 font-semibold mb-3">
                Credentials
              </p>
              <ul className="space-y-1.5 text-xs leading-relaxed text-neutral-500">
                {member.credentials.map((credential) => (
                  <li key={credential} className="flex gap-2">
                    <span
                      aria-hidden="true"
                      className="mt-1.5 block h-px w-3 shrink-0 bg-neutral-400"
                    />
                    <span>{credential}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}

function AssociateCard({ member }) {
  return (
    <Card padding="lg" className="h-full">
      <div
        aria-hidden="true"
        className="w-14 h-14 rounded-full bg-primary-100 flex items-center justify-center mb-5 shrink-0"
      >
        <span className="font-heading text-lg text-primary-700 select-none">
          {member.initials}
        </span>
      </div>
      <div>
        <h3 className="text-primary-900 mb-0.5">{member.name}</h3>
        <p className="text-accent-600 text-sm font-medium mb-3">{member.title}</p>
        <p className="text-neutral-600 text-sm leading-relaxed">{member.bio[0]}</p>
      </div>
    </Card>
  );
}

function chunk(list, size) {
  if (size <= 1) return list.map((item) => [item]);
  const rows = [];
  for (let i = 0; i < list.length; i += size) rows.push(list.slice(i, i + size));
  return rows;
}

export default function TeamSection({ team }) {
  const [openSlug, setOpenSlug] = useState(null);
  const [cols, setCols] = useState(2);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const update = () => setCols(mq.matches ? 2 : 1);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  const core = team.filter((m) => !m.isAssociate);
  const associates = team.filter((m) => m.isAssociate && m.isActive !== false);
  const rows = chunk(core, cols);

  const openMember = core.find((m) => m.slug === openSlug) || null;

  const handleToggle = (slug) => {
    setOpenSlug((current) => (current === slug ? null : slug));
  };

  return (
    <>
      <AnimatedReveal>
        <EyebrowLabel>Our team</EyebrowLabel>
        <h2 className="mt-4 mb-4 max-w-xl">
          Practitioners who understand your world.
        </h2>
        <p className="text-neutral-600 max-w-2xl mb-12 leading-relaxed">
          Every member of the Innovia team brings deep sector knowledge and genuine experience
          working with creative, project-based businesses. We are advisors who have spent careers
          in this industry, not generalists parachuted in.
        </p>
      </AnimatedReveal>

      <div className="space-y-6 lg:space-y-8">
        {rows.map((row, rowIndex) => {
          const rowHasOpen = row.some((m) => m.slug === openSlug);
          return (
            <div key={`row-${rowIndex}`}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                {row.map((member, i) => (
                  <AnimatedReveal key={member.slug} delay={i * 0.08}>
                    <MemberCard
                      member={member}
                      isOpen={openSlug === member.slug}
                      onToggle={() => handleToggle(member.slug)}
                    />
                  </AnimatedReveal>
                ))}
              </div>

              <AnimatePresence initial={false} mode="wait">
                {rowHasOpen && openMember && (
                  <DetailPanel
                    key={openMember.slug}
                    member={openMember}
                    onClose={() => setOpenSlug(null)}
                    reduceMotion={!!prefersReducedMotion}
                  />
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {associates.length > 0 && (
        <div className="mt-20 md:mt-24 border-t border-neutral-200 pt-16 md:pt-20">
          <AnimatedReveal>
            <EyebrowLabel>Associated Network</EyebrowLabel>
            <h3 className="mt-4 mb-4 font-heading text-primary-950 text-2xl md:text-3xl max-w-2xl leading-tight">
              Specialists, on call.
            </h3>
            <p className="text-neutral-600 max-w-2xl mb-10 leading-relaxed">
              Specialised expertise brought in for specific domain challenges and niche requirements.
            </p>
          </AnimatedReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {associates.map((member, i) => (
              <AnimatedReveal key={member.slug} delay={i * 0.08}>
                <AssociateCard member={member} />
              </AnimatedReveal>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
