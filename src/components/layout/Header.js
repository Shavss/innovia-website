'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Insights', href: '/insights' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contacts', href: '/contact' },
];

function isActive(pathname, href) {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}

function Logo({ onDark = false, className = '' }) {
  const main = onDark ? 'text-white' : 'text-primary-900';
  const sub = onDark ? 'text-primary-200' : 'text-neutral-500';
  return (
    <Link
      href="/"
      aria-label="Innovia Partners — home"
      className={`group inline-flex items-baseline gap-2 ${className}`}
    >
      <span
        className={`font-heading text-2xl md:text-[1.6rem] tracking-tight ${main} transition-colors`}
      >
        INNOVIA
      </span>
      <span className={`text-[0.7rem] md:text-xs uppercase tracking-[0.22em] font-light ${sub}`}>
        Partners
      </span>
    </Link>
  );
}

function LangSwitch({ lang, setLang, onDark = false, className = '' }) {
  const base =
    'px-1.5 py-0.5 text-[0.7rem] font-medium tracking-[0.12em] uppercase transition-colors focus-visible:outline-none focus-visible:text-accent-600';
  const activeCls = onDark ? 'text-white' : 'text-primary-900';
  const inactiveCls = onDark
    ? 'text-primary-300 hover:text-white'
    : 'text-neutral-400 hover:text-primary-900';
  const sep = onDark ? 'text-primary-400/60' : 'text-neutral-300';
  return (
    <div role="group" aria-label="Language" className={`inline-flex items-center ${className}`}>
      <button
        type="button"
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
        className={`${base} ${lang === 'en' ? activeCls : inactiveCls}`}
      >
        EN
      </button>
      <span aria-hidden="true" className={`text-[0.65rem] ${sep}`}>
        /
      </span>
      <button
        type="button"
        onClick={() => setLang('fr')}
        aria-pressed={lang === 'fr'}
        className={`${base} ${lang === 'fr' ? activeCls : inactiveCls}`}
      >
        FR
      </button>
    </div>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState('en');
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener('keydown', onKey);
    };
  }, [menuOpen]);

  const headerBg = scrolled
    ? 'bg-background/85 backdrop-blur-xl border-neutral-200/70 shadow-[0_1px_0_0_rgba(0,0,0,0.02)]'
    : 'bg-transparent backdrop-blur-0 border-transparent';

  const overlayDuration = prefersReducedMotion ? 0 : 0.35;

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 border-b transition-[background-color,backdrop-filter,border-color,box-shadow] duration-300 ${headerBg}`}
      >
        <div className="max-w-[1200px] mx-auto px-container-x">
          <div className="flex items-center justify-between h-16 md:h-20 gap-6">
            <Logo />

            <nav aria-label="Primary" className="hidden md:flex items-center">
              <ul className="flex items-center gap-x-5 lg:gap-x-7">
                {navItems.map((item) => {
                  const active = isActive(pathname, item.href);
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        aria-current={active ? 'page' : undefined}
                        className={`relative inline-block text-[0.72rem] lg:text-[0.78rem] uppercase tracking-[0.14em] py-1.5 transition-colors focus-visible:outline-none focus-visible:text-accent-600 ${
                          active
                            ? 'text-primary-900 font-semibold'
                            : 'text-neutral-600 hover:text-accent-600 font-medium'
                        }`}
                      >
                        {item.label}
                        <span
                          aria-hidden="true"
                          className={`absolute left-0 right-0 -bottom-0.5 h-px origin-left bg-accent-600 transition-transform duration-300 ${
                            active ? 'scale-x-100' : 'scale-x-0'
                          }`}
                        />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="hidden md:flex items-center gap-4 pl-4 border-l border-neutral-200/80">
              <LangSwitch lang={lang} setLang={setLang} />
            </div>

            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              className="md:hidden inline-flex items-center justify-center w-10 h-10 -mr-2 rounded-md text-primary-900 hover:text-accent-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-600 focus-visible:ring-offset-2 focus-visible:ring-offset-background transition-colors"
            >
              <Menu size={22} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
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
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="inline-flex items-center justify-center w-10 h-10 -mr-2 rounded-md text-white/80 hover:text-accent-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-300 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-dark transition-colors"
              >
                <X size={22} strokeWidth={1.5} />
              </button>
            </div>

            <nav
              aria-label="Primary mobile"
              className="flex-1 overflow-y-auto px-container-x py-10"
            >
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
                        onClick={() => setMenuOpen(false)}
                        className={`flex items-baseline justify-between py-5 font-heading text-3xl transition-colors ${
                          active ? 'text-accent-300' : 'text-white hover:text-accent-300'
                        }`}
                      >
                        <span>{item.label}</span>
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
              <span className="text-[0.65rem] uppercase tracking-[0.22em] text-primary-300">
                Language
              </span>
              <LangSwitch lang={lang} setLang={setLang} onDark />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
