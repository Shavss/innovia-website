import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import AnimatedReveal from '@/components/ui/AnimatedReveal';
import EyebrowLabel from '@/components/ui/EyebrowLabel';
import Image from 'next/image';


export default function AboutPreview() {
  return (
    <SectionWrapper background="light" aria-labelledby="about-preview-heading">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16 lg:gap-24">
        <div className="md:col-span-7">
          <AnimatedReveal>
            <EyebrowLabel tone="accent">About</EyebrowLabel>
            <h2
              id="about-preview-heading"
              className="mt-2 max-w-xl text-primary-950 [font-size:clamp(2rem,4vw,3rem)] [line-height:1.05] [letter-spacing:-0.02em]"
            >
              This is <span className="italic text-accent-700">Innovia.</span>
            </h2>
          </AnimatedReveal>

          <AnimatedReveal delay={0.1}>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-neutral-700 md:text-lg">
             For 20 years, we have worked alongside architecture, engineering and design practices globally. We are a specialized management consultancy that focuses on the professional practices and companies that create our built environment, bringing the rigour of management consulting to an industry that rarely gets either the attention or the specialism it deserves.
            </p>
          </AnimatedReveal>

          <AnimatedReveal delay={0.2}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-700 md:text-lg">
             Our work sits at the intersection of strategy, people and operations. We develop tailored solutions and help our clients achieve their strategic goals and meet complex challenges, from day-to-day operations through succession, growth, restructuring and long-term transformation, translating ambition into durable, quietly effective organisations.

            </p>
          </AnimatedReveal>

          <AnimatedReveal delay={0.3}>
            <Link
              href="/team"
              className="group mt-10 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-primary-900 transition-colors hover:text-accent-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-600 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-light"
            >
              Learn more
              <ArrowRight
                size={16}
                aria-hidden="true"
                className="transition-transform duration-300 ease-out group-hover:translate-x-1"
              />
            </Link>
          </AnimatedReveal>
        </div>

        <div className="md:col-span-5">
          <AnimatedReveal delay={0.15} direction="left">
            <div className="relative mx-auto aspect-[3/4] w-full max-w-sm">
              <div
                aria-hidden="true"
                className="absolute left-0 top-0 h-full w-[3px] bg-accent-700"
              />
              <div
                aria-hidden="true"
                className="absolute left-6 top-10 h-[82%] w-px bg-neutral-300"
              />
              <div className="relative h-full pl-10 pr-2 pt-10">
                <p className="font-[family-name:var(--font-heading)] text-[0.7rem] uppercase tracking-[0.32em] text-neutral-500">
                  Placeholder for an image
                </p>
                <p className="mt-8 font-[family-name:var(--font-heading)] text-[clamp(3.5rem,8vw,5.5rem)] leading-[0.85] tracking-tight text-primary-900">
                  IP
                </p>
                <p className="mt-6 max-w-[18ch] font-[family-name:var(--font-heading)] italic text-lg text-neutral-700">
                  Innovia Partners — management consulting for the creative
                  professions.
                </p>
                <div className="absolute bottom-6 right-2 flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.32em] text-neutral-500">
                  <span className="h-px w-8 bg-neutral-400" />
                  Image
                </div>
              </div>
            </div>
          </AnimatedReveal>
        </div>
      </div>
    </SectionWrapper>
  );
}
