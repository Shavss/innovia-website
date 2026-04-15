'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import Navigation from './navigation';
import MobileMenu from './mobile-menu';

export function Logo({ onDark = false, className = '' }) {
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

export function LangSwitch({ lang, setLang, onDark = false, className = '' }) {
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

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 border-b transition-[background-color,backdrop-filter,border-color,box-shadow] duration-300 ${headerBg}`}
      >
        <div className="max-w-[1200px] mx-auto px-container-x">
          <div className="flex items-center justify-between h-16 md:h-20 gap-6">
            <Logo />

            <Navigation pathname={pathname} />

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

      <MobileMenu
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        pathname={pathname}
        lang={lang}
        setLang={setLang}
      />
    </>
  );
}
