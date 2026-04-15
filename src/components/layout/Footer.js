'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import EyebrowLabel from '@/components/ui/EyebrowLabel';
import NavLink from '@/components/ui/NavLink';
import Divider from '@/components/ui/Divider';

function LinkedinGlyph({ size = 14 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.602 0 4.268 2.37 4.268 5.455v6.288zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const exploreLinks = [
  { label: 'Who we are', href: '/about' },
  { label: 'Strategy', href: '/services/strategy' },
  { label: 'People & Processes', href: '/services/people-processes' },
  {
    label: 'Technology & Digital Transformation',
    href: '/services/technology',
  },
];

const contactItems = [
  {
    icon: Phone,
    label: '+1 (416) 518-1193',
    href: 'tel:+14165181193',
    srLabel: 'Phone',
  },
  {
    icon: Mail,
    label: 'rowley.mossop@innoviapartners.com',
    href: 'mailto:rowley.mossop@innoviapartners.com',
    srLabel: 'Email',
  },
  {
    icon: LinkedinGlyph,
    label: '/innoviapartners',
    href: 'https://www.linkedin.com/company/innoviapartners/',
    srLabel: 'LinkedIn',
    external: true,
  },
  {
    icon: MapPin,
    label: 'Toronto, ON, Canada',
    srLabel: 'Location',
  },
];

const footerEyebrowClass = 'block text-[0.65rem] tracking-[0.22em] normal-case font-normal';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-surface-dark text-primary-100 relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute -top-32 -right-32 w-[28rem] h-[28rem] rounded-full blur-3xl opacity-20 bg-accent-700 pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-40 -left-40 w-[32rem] h-[32rem] rounded-full blur-3xl opacity-10 bg-primary-400 pointer-events-none"
      />

      <div className="relative max-w-[1200px] mx-auto px-container-x">
        {/* Newsletter */}
        <section aria-labelledby="footer-newsletter" className="pt-16 md:pt-24 pb-12 md:pb-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-end">
            <div className="md:col-span-6 lg:col-span-7">
              <EyebrowLabel
                tone="accentOnDark"
                size="sm"
                as="span"
                className={`${footerEyebrowClass} uppercase`}
              >
                Stay in the loop
              </EyebrowLabel>
              <h2 id="footer-newsletter" className="text-white max-w-xl">
                Insights and commentary on what’s happening in our industry so you can stay up to
                date and continue to lead.
              </h2>
            </div>
            <form
              action="#"
              onSubmit={(e) => e.preventDefault()}
              className="md:col-span-6 lg:col-span-5"
              aria-label="Newsletter signup"
            >
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <div className="group flex items-center gap-0 border-b border-white/30 focus-within:border-accent-300 transition-colors">
                <input
                  id="footer-email"
                  type="email"
                  required
                  placeholder="you@yourpractice.com"
                  className="input-on-dark flex-1 bg-transparent py-3 text-sm tracking-wide text-white placeholder:text-primary-300/70 caret-accent-300 outline-none focus:outline-none focus-visible:outline-none focus:ring-0 focus-visible:ring-0 appearance-none"
                />
                <button
                  type="submit"
                  className="relative inline-flex items-center gap-2 py-3 pl-4 pr-1 text-[0.72rem] uppercase tracking-[0.18em] font-medium text-white hover:text-accent-300 transition-colors focus-visible:outline-none focus-visible:text-accent-300"
                >
                  <span>Subscribe</span>
                  <ArrowRight
                    size={14}
                    strokeWidth={1.75}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-focus-within:translate-x-0.5"
                  />
                </button>
              </div>
              <p className="mt-3 text-xs text-primary-300/80">
                We respect your inbox. Unsubscribe anytime.
              </p>
            </form>
          </div>
        </section>

        <Divider variant="fade" className="opacity-15" />

        {/* Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-10 md:gap-12 py-14 md:py-20">
          {/* Col 1 — Brand */}
          <div className="sm:col-span-2 md:col-span-5 md:-mt-3">
            <Link
              href="/"
              aria-label="Innovia Partners — home"
              className="inline-flex items-baseline gap-2"
            >
              <span className="font-heading text-2xl tracking-tight text-white">INNOVIA</span>
              <span className="text-xs uppercase tracking-[0.22em] font-light text-primary-300">
                Partners
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-primary-200">
              Management consultancy for the world&rsquo;s most ambitious architecture, design and
              engineering practices.
            </p>
          </div>

          <div className="sm:col-span-2 md:col-span-7 md:col-start-6 grid grid-cols-2 gap-6 md:gap-8">
            {/* Col 2 — Explore */}
            <nav aria-label="Footer" className="max-w-[11rem] md:justify-self-end">
              <EyebrowLabel
                tone="accentOnDark"
                size="sm"
                as="span"
                className={`${footerEyebrowClass} mb-5 uppercase`}
              >
                Explore
              </EyebrowLabel>
              <ul className="space-y-2.5">
                {exploreLinks.map((item) => (
                  <li key={item.href}>
                    <NavLink
                      href={item.href}
                      onDark
                      className="pb-0 font-normal normal-case tracking-normal"
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Col 3 — Contact */}
            <div>
              <EyebrowLabel
                tone="accentOnDark"
                size="sm"
                as="span"
                className={`${footerEyebrowClass} mb-5 uppercase`}
              >
                Get in touch
              </EyebrowLabel>
              <ul className="space-y-3.5">
                {contactItems.map(({ icon: Icon, label, href, external, srLabel }) => {
                  const content = (
                    <>
                      <span
                        aria-hidden="true"
                        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-white/10 text-accent-300 shrink-0 group-hover:border-accent-300/60 group-hover:text-accent-200 transition-colors"
                      >
                        <Icon size={14} strokeWidth={1.75} />
                      </span>
                      <span className="sr-only">{srLabel}:</span>
                      <span className="text-sm text-primary-100 group-hover:text-white transition-colors">
                        {label}
                      </span>
                    </>
                  );
                  return (
                    <li key={srLabel}>
                      {href ? (
                        <a
                          href={href}
                          {...(external
                            ? {
                                target: '_blank',
                                rel: 'noopener noreferrer',
                              }
                            : {})}
                          className="group inline-flex items-center gap-3 focus-visible:outline-none focus-visible:text-accent-300"
                        >
                          {content}
                        </a>
                      ) : (
                        <span className="group inline-flex items-center gap-3">{content}</span>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <small className="text-xs text-primary-300">
            © {year} Innovia Partners Ltd. All rights reserved.
          </small>
          <div className="flex items-center gap-5 text-xs text-primary-300">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
            <span className="text-primary-400/60">
              Crafted by{' '}
              <a href="#" className="text-primary-200 hover:text-accent-300 transition-colors">
                Studio Innovia
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
