'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Phone, ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import EyebrowLabel from '@/components/ui/EyebrowLabel';
import FormField, { inputClasses } from '@/components/ui/FormField';
import AnimatedReveal from '@/components/ui/AnimatedReveal';

function LinkedinGlyph({ size = 15 }) {
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

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="relative bg-surface-light min-h-[calc(100vh-3.5rem)] md:min-h-[calc(100vh-4rem)] flex items-center">
      <div className="w-full max-w-[1200px] mx-auto px-container-x py-section-y grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left — Form */}
        <AnimatedReveal className="lg:col-span-7">
          <EyebrowLabel>Send a message</EyebrowLabel>
          <h2 className="mb-3">Tell us about your practice.</h2>
          <p className="text-neutral-600 mb-10 max-w-lg leading-relaxed">
            Share a few details and we&rsquo;ll be in touch within two business
            days. Every conversation begins in confidence.
          </p>

          <form
            onSubmit={handleSubmit}
            noValidate
            aria-describedby="form-status"
            className="bg-surface-card border border-neutral-200 rounded-xl p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 shadow-sm"
          >
            <FormField label="Full name" htmlFor="contact-name">
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                autoComplete="name"
                placeholder="Jane Architect"
                aria-required="true"
                className={inputClasses}
              />
            </FormField>

            <FormField label="Work email" htmlFor="contact-email">
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="jane@studio.com"
                aria-required="true"
                className={inputClasses}
              />
            </FormField>

            <FormField
              label="Company / Firm name"
              htmlFor="contact-company"
              className="md:col-span-2"
            >
              <input
                id="contact-company"
                name="company"
                type="text"
                autoComplete="organization"
                placeholder="Studio name"
                className={inputClasses}
              />
            </FormField>

            <FormField
              label="How can we help?"
              htmlFor="contact-message"
              className="md:col-span-2"
            >
              <textarea
                id="contact-message"
                name="message"
                rows={6}
                required
                aria-required="true"
                placeholder="Tell us a little about where your practice is today and what you'd like to change…"
                className={`${inputClasses} resize-y`}
              />
            </FormField>

            <div className="md:col-span-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
              <p
                id="form-status"
                role="status"
                aria-live="polite"
                className={`text-sm transition-colors ${
                  submitted ? 'text-accent-700' : 'text-neutral-500'
                }`}
              >
                {submitted
                  ? 'Form submissions will be active soon.'
                  : 'We respond to all enquiries personally.'}
              </p>
              <Button type="submit" size="md">
                Send message
                <ArrowRight size={14} aria-hidden="true" />
              </Button>
            </div>
          </form>
        </AnimatedReveal>

        {/* Right — Direct contact */}
        <AnimatedReveal delay={0.15} className="lg:col-span-5 lg:sticky lg:top-24">
          <EyebrowLabel>Direct line</EyebrowLabel>
          <h2 className="mb-3">Speak with us.</h2>
          <p className="text-neutral-600 mb-8 leading-relaxed">
            For general &amp; new business inquiries, reach out to Rowley
            directly.
          </p>

          <div className="relative bg-surface-dark rounded-2xl overflow-hidden">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-20 -right-20 h-60 w-60 rounded-full bg-accent-700/20 blur-3xl"
            />
            <div className="relative flex items-center gap-5 p-6 md:p-7 border-b border-white/10">
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full ring-2 ring-accent-300/40">
                <Image
                  src="/images/team/rowley.jpg"
                  alt="Rowley Mossop"
                  fill
                  sizes="80px"
                  className="object-cover object-top"
                />
              </div>
              <div>
                <p className="font-heading text-2xl text-white leading-tight">
                  Rowley Mossop
                </p>
                <p className="text-sm text-accent-300 mt-1 tracking-wide">
                  Principal
                </p>
              </div>
            </div>

            <ul className="relative divide-y divide-white/10">
              <li>
                <a
                  href="tel:+14165181193"
                  className="group flex items-center gap-4 px-6 md:px-7 py-5 transition-colors hover:bg-white/5 focus-visible:outline-none focus-visible:bg-white/5"
                >
                  <span
                    aria-hidden="true"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-accent-300 transition-colors group-hover:border-accent-300/60 group-hover:text-accent-200"
                  >
                    <Phone size={15} strokeWidth={1.75} />
                  </span>
                  <div className="flex-1">
                    <span className="block text-[0.65rem] uppercase tracking-[0.22em] text-primary-300">
                      Phone
                    </span>
                    <span className="block text-sm text-white mt-0.5">
                      +1 (416) 518-1193
                    </span>
                  </div>
                  <ArrowRight
                    size={14}
                    aria-hidden="true"
                    className="text-primary-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent-300"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/rowley-mossop-34591b29b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 px-6 md:px-7 py-5 transition-colors hover:bg-white/5 focus-visible:outline-none focus-visible:bg-white/5"
                >
                  <span
                    aria-hidden="true"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-accent-300 transition-colors group-hover:border-accent-300/60 group-hover:text-accent-200"
                  >
                    <LinkedinGlyph size={15} />
                  </span>
                  <div className="flex-1">
                    <span className="block text-[0.65rem] uppercase tracking-[0.22em] text-primary-300">
                      LinkedIn
                    </span>
                    <span className="block text-sm text-white mt-0.5">
                      Connect with Rowley
                    </span>
                  </div>
                  <ArrowRight
                    size={14}
                    aria-hidden="true"
                    className="text-primary-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent-300"
                  />
                </a>
              </li>
            </ul>
          </div>

          <p className="mt-6 text-xs text-neutral-500 leading-relaxed">
            Conversations are always confidential. We&rsquo;ll never share your
            details with anyone outside our team.
          </p>
        </AnimatedReveal>
      </div>
    </section>
  );
}
