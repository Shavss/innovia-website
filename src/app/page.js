import { ArrowRight, Mail } from 'lucide-react';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import Divider from '@/components/ui/Divider';
import EyebrowLabel from '@/components/ui/EyebrowLabel';
import FormField, { inputClasses } from '@/components/ui/FormField';
import NavLink from '@/components/ui/NavLink';
import ColorSwatch from '@/components/sections/designsystem/ColorSwatch';
import SurfaceSwatch from '@/components/sections/designsystem/SurfaceSwatch';
import Hero from '@/components/sections/home/Hero';

const colorScales = {
  primary: { label: 'Primary' },
  accent: { label: 'Accent' },
  neutral: { label: 'Neutral' },
};
const steps = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

const navItems = [
  { label: 'Home', active: false },
  { label: 'Services', active: true },
  { label: 'Success Stories', active: false },
  { label: 'Team', active: false },
  { label: 'News', active: false },
  { label: 'Contact', active: false },
];

export default function Home() {
  return (
    <>
      <Hero />
      <div className="max-w-[1200px] mx-auto px-container-x py-section-y">
      {/* Header */}
      <header className="mb-20">
        <EyebrowLabel>Design System</EyebrowLabel>
        <h1>Innovia Partners</h1>
        <p className="mt-6 text-neutral-600 max-w-2xl text-lg leading-relaxed">
          Typography, colour, components and layout primitives for the Innovia
          Partners website redesign. Use the palette switcher in the lower
          right to preview every element across the candidate colour
          directions.
        </p>
      </header>

      <Divider className="mb-20" />

      {/* Typography */}
      <section className="mb-20">
        <EyebrowLabel>Typography Scale</EyebrowLabel>

        <div className="space-y-8">
          {[
            { tag: 'h1', label: 'h1 — DM Serif Display', text: 'Confidence In Change.' },
            { tag: 'h2', label: 'h2 — DM Serif Display', text: 'You do great work. Why not do more?' },
            {
              tag: 'h3',
              label: 'h3 — DM Serif Display',
              text: 'Let\u2019s build the systems, processes and structures to enable long term success and increase the value of your practice.',
            },
            {
              tag: 'h4',
              label: 'h4 — DM Serif Display',
              text: 'Management consulting for architecture, engineering and project-based businesses',
            },
          ].map(({ tag: Tag, label, text }) => (
            <div key={label} className="border-b border-neutral-200 pb-8">
              <span className="text-xs text-neutral-400 font-medium tracking-wide uppercase block mb-2">
                {label}
              </span>
              <Tag>{text}</Tag>
            </div>
          ))}

          <div className="border-b border-neutral-200 pb-8">
            <span className="text-xs text-neutral-400 font-medium tracking-wide uppercase block mb-2">
              Body — Libre Franklin (16px / leading-relaxed)
            </span>
            <p className="max-w-prose">
              A founder-led practice was ready to diversify its ownership,
              implement a succession plan, expand internationally and establish
              the structure and tools for the next generation of leadership to
              succeed. Working together for over a decade, we supported the
              firm&rsquo;s transformation where it reached new levels of
              commercial success while broadening its portfolio with new,
              ambitious and creative projects of scale and impact.
            </p>
          </div>

          <div>
            <span className="text-xs text-neutral-400 font-medium tracking-wide uppercase block mb-2">
              Small — Libre Franklin (14px)
            </span>
            <small className="text-neutral-600">
              2017 Innovia Partners Ltd. All Rights Reserved
            </small>
          </div>
        </div>
      </section>

      <Divider className="mb-20" />

      {/* Color Palettes */}
      <section className="mb-20">
        <EyebrowLabel>Colour Palette</EyebrowLabel>

        {Object.entries(colorScales).map(([color, { label }]) => (
          <div key={color} className="mb-12">
            <h3 className="mb-4">{label}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-11 gap-2">
              {steps.map((step) => (
                <ColorSwatch key={step} color={color} step={step} />
              ))}
            </div>
          </div>
        ))}
      </section>

      <Divider className="mb-20" />

      {/* Surfaces */}
      <section className="mb-20">
        <EyebrowLabel>Semantic Surfaces</EyebrowLabel>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <SurfaceSwatch label="surface-light" className="bg-surface-light" />
          <SurfaceSwatch
            label="surface-dark"
            className="bg-surface-dark"
            textClass="text-white"
          />
          <SurfaceSwatch label="surface-card" className="bg-surface-card" />
        </div>
      </section>

      <Divider className="mb-20" />

      {/* Buttons */}
      <section className="mb-20">
        <EyebrowLabel>Buttons</EyebrowLabel>
        <p className="text-neutral-600 mb-10 max-w-2xl">
          Three variants — primary, secondary and ghost — each in three sizes.
          Shown on light and dark surfaces so the same component reads
          correctly in every context.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-surface-light border border-neutral-200 rounded-xl p-8">
            <EyebrowLabel tone="neutral" size="sm">On light</EyebrowLabel>
            <div className="space-y-6">
              {['primary', 'secondary', 'ghost'].map((variant) => (
                <div key={variant}>
                  <EyebrowLabel tone="neutral" size="sm" className="capitalize">
                    {variant}
                  </EyebrowLabel>
                  <div className="flex flex-wrap items-center gap-4">
                    {['sm', 'md', 'lg'].map((size) => (
                      <Button key={size} variant={variant} size={size}>
                        {variant === 'ghost' ? (
                          <>
                            Read more <ArrowRight size={14} />
                          </>
                        ) : variant === 'primary' ? (
                          'Get in Touch'
                        ) : (
                          'Learn More'
                        )}
                      </Button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-surface-dark rounded-xl p-8">
            <EyebrowLabel tone="onDark" size="sm">On dark</EyebrowLabel>
            <div className="space-y-6">
              {['primary', 'secondary', 'ghost'].map((variant) => (
                <div key={variant}>
                  <EyebrowLabel tone="onDark" size="sm" className="capitalize">
                    {variant}
                  </EyebrowLabel>
                  <div className="flex flex-wrap items-center gap-4">
                    {['sm', 'md', 'lg'].map((size) => (
                      <Button
                        key={size}
                        variant={variant}
                        size={size}
                        onDark
                      >
                        {variant === 'ghost' ? (
                          <>
                            Read more <ArrowRight size={14} />
                          </>
                        ) : variant === 'primary' ? (
                          'Get in Touch'
                        ) : (
                          'Learn More'
                        )}
                      </Button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Divider className="mb-20" />

      {/* Cards */}
      <section className="mb-20">
        <EyebrowLabel>Cards</EyebrowLabel>
        <p className="text-neutral-600 mb-10 max-w-2xl">
          Dark cards anchor case-study and editorial moments. Light cards carry
          services and supporting content. The third tile demonstrates the
          interactive hover state used on listing pages.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Dark card — composed via className override */}
          <Card
            as="article"
            padding="lg"
            className="bg-surface-dark border-transparent h-full"
          >
            <EyebrowLabel tone="accentOnDark" size="sm">
              Case Study
            </EyebrowLabel>
            <h3 className="text-white mb-3">Practice Transformation</h3>
            <p className="text-primary-200 text-sm">
              How we helped a 200-person firm restructure for sustainable
              growth and internationalisation.
            </p>
          </Card>

          {/* Light card */}
          <Card as="article" padding="lg" className="h-full">
            <EyebrowLabel size="sm">Service</EyebrowLabel>
            <h3 className="text-primary-900 mb-3">Strategy &amp; Growth</h3>
            <p className="text-neutral-700 text-sm">
              Long-term planning, market positioning, and the financial
              scaffolding that supports ambition.
            </p>
          </Card>

          {/* Hover preview */}
          <Card as="a" href="#" padding="lg" hoverable className="h-full">
            <EyebrowLabel size="sm">Insight</EyebrowLabel>
            <h3 className="text-primary-900 mb-3 group-hover:text-accent-700 transition-colors">
              The next decade of practice
            </h3>
            <p className="text-neutral-700 text-sm mb-6">
              Hover state preview: lift, shadow, border accent and link colour
              shift on the title.
            </p>
            <span className="inline-flex items-center gap-2 text-sm font-medium text-accent-600 group-hover:gap-3 transition-all">
              Read article <ArrowRight size={14} />
            </span>
          </Card>
        </div>
      </section>

      <Divider className="mb-20" />

      {/* Hero */}
      <section className="mb-20">
        <EyebrowLabel>Hero Section</EyebrowLabel>
        <p className="text-neutral-600 mb-10 max-w-2xl">
          The signature moment of every page. Eyebrow, serif headline,
          supporting paragraph and a primary plus ghost CTA, set on the dark
          primary surface.
        </p>

        <section className="bg-surface-dark rounded-2xl overflow-hidden relative">
          <div
            className="absolute -top-20 -right-20 w-80 h-80 rounded-full opacity-30 blur-3xl pointer-events-none"
            style={{ backgroundColor: 'var(--accent-700)' }}
          />
          <div className="relative px-8 py-16 md:px-16 md:py-24 max-w-4xl">
            <EyebrowLabel tone="accentOnDark">This is Innovia</EyebrowLabel>
            <h1 className="text-white mb-6">
              Confidence in change. Growth on your terms.
            </h1>
            <p className="text-primary-200 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
              For 20 years we have advised the world&rsquo;s most ambitious
              architecture, design and engineering practices on the systems,
              structures and strategies that build lasting value.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button size="lg" onDark>
                Start a conversation
              </Button>
              <Button variant="ghost" size="lg" onDark>
                See our work <ArrowRight size={14} />
              </Button>
            </div>
          </div>
        </section>
      </section>

      <Divider className="mb-20" />

      {/* Forms */}
      <section className="mb-20">
        <EyebrowLabel>Form Elements</EyebrowLabel>
        <p className="text-neutral-600 mb-10 max-w-2xl">
          Inputs used on the contact page. Focus is signalled by an accent
          border and a soft accent ring — visible in any palette.
        </p>

        <form
          action="#"
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl bg-surface-card border border-neutral-200 rounded-xl p-8"
        >
          <FormField label="Full name" htmlFor="ds-name">
            <input
              id="ds-name"
              type="text"
              placeholder="Jane Architect"
              className={inputClasses}
            />
          </FormField>

          <FormField
            label="Work email"
            htmlFor="ds-email"
            hint="We'll only use this to reply to you."
          >
            <div className="relative">
              <Mail
                size={16}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none"
              />
              <input
                id="ds-email"
                type="email"
                placeholder="jane@studio.com"
                className={`${inputClasses} pl-10`}
              />
            </div>
          </FormField>

          <FormField
            label="How can we help?"
            htmlFor="ds-message"
            className="md:col-span-2"
          >
            <textarea
              id="ds-message"
              rows={5}
              placeholder="Tell us a little about your practice and what you're looking to change…"
              className={`${inputClasses} resize-y`}
            />
          </FormField>

          <div className="md:col-span-2 flex items-center justify-between gap-4 pt-2">
            <p className="text-xs text-neutral-500">
              All fields styled to inherit the active palette.
            </p>
            <Button size="md">Send message</Button>
          </div>
        </form>
      </section>

      <Divider className="mb-20" />

      {/* Badges */}
      <section className="mb-20">
        <EyebrowLabel>Badges &amp; Tags</EyebrowLabel>
        <p className="text-neutral-600 mb-10 max-w-2xl">
          Used to label categories on news articles and success stories.
          Variants cover primary emphasis, quiet eyebrows and dark surfaces.
        </p>

        <div className="bg-surface-light border border-neutral-200 rounded-xl p-8 mb-4">
          <EyebrowLabel tone="neutral" size="sm">On light</EyebrowLabel>
          <div className="flex flex-wrap gap-3">
            <Badge variant="solid">Case Study</Badge>
            <Badge variant="subtle">Insight</Badge>
            <Badge variant="outline">Strategy</Badge>
            <Badge variant="neutral">5 min read</Badge>
            <Badge variant="dark">Operations</Badge>
          </div>
        </div>

        <div className="bg-surface-dark rounded-xl p-8">
          <EyebrowLabel tone="onDark" size="sm">On dark</EyebrowLabel>
          <div className="flex flex-wrap gap-3">
            <Badge variant="solid">Case Study</Badge>
            <Badge variant="outlineDark">Outline</Badge>
            <Badge variant="subtleDark">Subtle</Badge>
          </div>
        </div>
      </section>

      <Divider className="mb-20" />

      {/* Dividers */}
      <section className="mb-20">
        <EyebrowLabel>Dividers</EyebrowLabel>
        <p className="text-neutral-600 mb-10 max-w-2xl">
          Three rules used between sections — a hairline, a centred accent dot
          for editorial breaks, and a fading rule for soft transitions.
        </p>

        <div className="space-y-12 max-w-3xl">
          <div>
            <EyebrowLabel tone="neutral" size="sm">Hairline</EyebrowLabel>
            <Divider />
          </div>
          <div>
            <EyebrowLabel tone="neutral" size="sm">Accent dot</EyebrowLabel>
            <Divider variant="dot" />
          </div>
          <div>
            <EyebrowLabel tone="neutral" size="sm">Fade</EyebrowLabel>
            <Divider variant="fade" />
          </div>
        </div>
      </section>

      <Divider className="mb-20" />

      {/* Nav links */}
      <section className="mb-20">
        <EyebrowLabel>Navigation Links</EyebrowLabel>
        <p className="text-neutral-600 mb-10 max-w-2xl">
          Active state is marked with an accent underline and weight shift.
          Default links use neutral grey and warm to the accent on hover.
        </p>

        <div className="bg-surface-light border border-neutral-200 rounded-xl p-8 mb-4">
          <EyebrowLabel tone="neutral" size="sm">On light</EyebrowLabel>
          <nav className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {navItems.map((item) => (
              <NavLink key={item.label} active={item.active}>
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="bg-surface-dark rounded-xl p-8">
          <EyebrowLabel tone="onDark" size="sm">On dark</EyebrowLabel>
          <nav className="flex flex-wrap items-center gap-x-8 gap-y-3">
            {navItems.map((item) => (
              <NavLink key={item.label} active={item.active} onDark>
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </section>

      <Divider className="mb-20" />

      {/* Spacing */}
      <section className="mb-20">
        <EyebrowLabel>Spacing Tokens</EyebrowLabel>

        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <span className="text-sm text-neutral-500 w-32 shrink-0">
              section-y
            </span>
            <div
              className="bg-primary-100 h-4 rounded"
              style={{ width: 'var(--section-y)' }}
            />
            <span className="text-xs text-neutral-400">
              py-12 mobile / py-20 desktop
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-neutral-500 w-32 shrink-0">
              container-x
            </span>
            <div
              className="bg-primary-100 h-4 rounded"
              style={{ width: 'var(--container-x)' }}
            />
            <span className="text-xs text-neutral-400">
              px-5 mobile / px-8 desktop
            </span>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
