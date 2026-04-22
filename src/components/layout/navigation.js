'use client';

import Link from 'next/link';

export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Insights', href: '/insights' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contacts', href: '/contact' },
  ...(process.env.NODE_ENV === 'development'
    ? [{ label: 'Design System', href: '/design-system' }]
    : []),
];

export function isActive(pathname, href) {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navigation({ pathname, onDark = false }) {
  const activeCls = onDark ? 'text-white font-semibold' : 'text-primary-900 font-semibold';
  const inactiveCls = onDark
    ? 'text-white/80 hover:text-white font-medium'
    : 'text-neutral-600 hover:text-accent-600 font-medium';
  const underline = onDark ? 'bg-white' : 'bg-accent-600';

  return (
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
                  active ? activeCls : inactiveCls
                }`}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={`absolute left-0 right-0 -bottom-0.5 h-px origin-left ${underline} transition-transform duration-300 ${
                    active ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
