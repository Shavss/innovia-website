'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import Navigation from './navigation';
import MobileMenu from './mobile-menu';
import { isDarkHeroRoute } from '@/lib/darkHeroRoutes';

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
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [lang, setLang] = useState('en');
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const THRESHOLD = 2;
    const mql = window.matchMedia('(min-width: 768px)');

    const update = () => {
      const y = window.scrollY;
      const prev = lastScrollY.current;
      const delta = y - prev;

      setScrolled(y > 12);

      if (!mql.matches) {
        setHidden(false);
      } else if (y < THRESHOLD) {
        setHidden(false);
      } else if (Math.abs(delta) >= THRESHOLD) {
        setHidden(delta > 0);
      }

      lastScrollY.current = y;
      ticking.current = false;
    };

    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      window.requestAnimationFrame(update);
    };

    lastScrollY.current = window.scrollY;
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    mql.addEventListener('change', update);
    return () => {
      window.removeEventListener('scroll', onScroll);
      mql.removeEventListener('change', update);
    };
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

  const overHero = isDarkHeroRoute(pathname) && !scrolled;

  const headerBg = overHero
    ? 'bg-transparent backdrop-blur-0 border-transparent'
    : 'bg-background/85 backdrop-blur-xl border-neutral-200/70 shadow-[0_1px_0_0_rgba(0,0,0,0.02)]';

  const hamburgerCls = overHero
    ? 'text-white hover:text-white/80'
    : 'text-primary-900 hover:text-accent-600';

  const dividerCls = overHero ? 'border-white/20' : 'border-neutral-200/80';

  return (
    <>
      <header
        style={{
          transform: hidden ? 'translateY(-100%)' : 'translateY(0)',
          transition:
            'transform 300ms ease, background-color 300ms, backdrop-filter 300ms, border-color 300ms, box-shadow 300ms',
        }}
        className={`fixed top-0 inset-x-0 z-50 border-b will-change-transform ${headerBg}`}
      >
        <div className="max-w-[1200px] mx-auto px-container-x">
          <div className="flex items-center justify-between h-14 md:h-16 gap-6">
            <Logo onDark={overHero} />

            <Navigation pathname={pathname} onDark={overHero} />

            <div className={`hidden md:flex items-center gap-4 pl-4 border-l ${dividerCls}`}>
              <LangSwitch lang={lang} setLang={setLang} onDark={overHero} />
            </div>

            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              className={`md:hidden inline-flex items-center justify-center w-11 h-11 -mr-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-600 focus-visible:ring-offset-2 focus-visible:ring-offset-background transition-colors ${hamburgerCls}`}
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
