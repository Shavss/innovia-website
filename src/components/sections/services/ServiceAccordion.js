'use client';

import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { ArrowUpRight, Circle } from 'lucide-react';
import { slugifyTitle } from '@/lib/slugify'; // ← imported, not defined here

const EASE = [0.22, 0.61, 0.36, 1];

export default function ServiceAccordion({ subServices }) {
  const [openIndex, setOpenIndex] = useState(null);
  const reduceMotion = useReducedMotion();

  return (
    <ul className="border-y border-neutral-300">
      {subServices.map((item, i) => {
        const Icon = LucideIcons[item.iconName] || Circle;
        const isOpen = openIndex === i;
        const rowId = `sub-${slugifyTitle(item.title)}`;
        const panelId = `${rowId}-panel`;

        return (
          <li
            key={item.title}
            id={rowId}
            className={`scroll-mt-24 border-t border-neutral-200 first:border-t-0 transition-colors duration-300 ${
              isOpen ? 'bg-neutral-100/60' : ''
            }`}
            style={{
              boxShadow: isOpen
                ? 'inset 3px 0 0 0 var(--accent-700)'
                : 'inset 3px 0 0 0 transparent',
              transition: 'box-shadow 300ms ease, background-color 300ms ease',
            }}
          >
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="group flex w-full items-center gap-4 py-5 pl-5 pr-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-600 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-light md:gap-6 md:py-6 md:pl-6"
            >
              <span
                aria-hidden="true"
                className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border bg-surface-card transition-colors duration-300 ${
                  isOpen
                    ? 'border-accent-600 text-accent-700'
                    : 'border-neutral-300 text-primary-800 group-hover:border-accent-600/60 group-hover:text-accent-700'
                }`}
              >
                <Icon size={18} strokeWidth={1.5} />
              </span>
              <span className="shrink-0 font-mono text-xs text-accent-700 md:text-sm">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span
                className={`flex-1 font-heading text-lg leading-snug transition-colors duration-300 md:text-xl ${
                  isOpen ? 'text-primary-950' : 'text-primary-950'
                }`}
              >
                {item.title}
              </span>
              <motion.span
                aria-hidden="true"
                animate={{ rotate: isOpen ? 135 : 0 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.35,
                  ease: EASE,
                }}
                className={`shrink-0 transition-colors duration-300 ${
                  isOpen
                    ? 'text-accent-700'
                    : 'text-neutral-400 group-hover:text-accent-700'
                }`}
              >
                <ArrowUpRight size={18} strokeWidth={1.5} />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="panel"
                  id={panelId}
                  role="region"
                  initial={
                    reduceMotion
                      ? { height: 'auto', opacity: 1 }
                      : { height: 0, opacity: 0 }
                  }
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={
                    reduceMotion
                      ? { opacity: 0 }
                      : { height: 0, opacity: 0 }
                  }
                  transition={{
                    height: {
                      duration: reduceMotion ? 0 : 0.4,
                      ease: EASE,
                    },
                    opacity: {
                      duration: reduceMotion ? 0 : 0.3,
                      ease: 'easeOut',
                      delay: reduceMotion ? 0 : 0.08,
                    },
                  }}
                  style={{ overflow: 'hidden' }}
                >
                  <div className="pb-6 pl-[4.75rem] pr-6 md:pb-8 md:pl-[5.5rem]">
                    <p className="max-w-2xl text-base leading-relaxed text-neutral-700 md:text-[1.0625rem]">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}