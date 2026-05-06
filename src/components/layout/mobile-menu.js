'use client';

import Link from 'next/link';
import { X } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { navItems, isActive } from './navigation';
import { Logo, LangSwitch } from './Header';
import EyebrowLabel from '@/components/ui/EyebrowLabel';

export default function MobileMenu({ open, onClose, pathname, lang, setLang }) {
  const prefersReducedMotion = useReducedMotion();
  const overlayDuration = prefersReducedMotion ? 0 : 0.35;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-nav"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: prefersReducedMotion ? 0 : -8 }}
          transition={{ duration: overlayDuration, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[60] md:hidden bg-surface-dark text-white flex flex-col"
        >
          <div className="flex items-center justify-between h-16 px-container-x border-b border-white/10">
            <Logo onDark />
            <button
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="inline-flex items-center justify-center w-11 h-11 -mr-2 rounded-md text-white/80 hover:text-accent-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-300 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-dark transition-colors"
            >
              <X size={22} strokeWidth={1.5} />
            </button>
          </div>

          <nav aria-label="Primary mobile" className="flex-1 overflow-y-auto px-container-x py-10">
            <ul className="flex flex-col">
              {navItems.map((item, idx) => {
                const active = isActive(pathname, item.href);
                return (
                  <motion.li
                    key={item.href}
                    initial={{
                      opacity: 0,
                      y: prefersReducedMotion ? 0 : 12,
                    }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: prefersReducedMotion ? 0 : 0.35,
                      delay: prefersReducedMotion ? 0 : 0.08 + idx * 0.04,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="border-b border-white/10"
                  >
                    <Link
                      href={item.href}
                      aria-current={active ? 'page' : undefined}
                      onClick={onClose}
                      className={`group/item flex items-baseline justify-between py-5 font-heading text-3xl tracking-tight transition-colors ${
                        active ? 'text-white' : 'text-white hover:text-accent-300'
                      }`}
                    >
                      <span className="relative inline-block">
                        {item.label}
                        <span
                          aria-hidden="true"
                          className={`absolute left-0 right-0 -bottom-0.5 h-px bg-accent-400 origin-left transition-transform duration-300 ${
                            active ? 'scale-x-100' : 'scale-x-0 group-hover/item:scale-x-100'
                          }`}
                        />
                      </span>
                      <span className="text-[0.7rem] font-body uppercase tracking-[0.22em] text-primary-300">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </nav>

          <div className="px-container-x py-6 border-t border-white/10 flex items-center justify-between">
            <EyebrowLabel tone="onDark" size="sm" as="span" className="mb-0">
              Language
            </EyebrowLabel>
            <LangSwitch lang={lang} setLang={setLang} onDark />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
