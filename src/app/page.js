const colorScales = {
  primary: {
    label: 'Primary — Deep Navy',
    steps: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
  },
  accent: {
    label: 'Accent — Muted Burgundy',
    steps: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
  },
  neutral: {
    label: 'Neutral — Warm Grays',
    steps: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950],
  },
};

function ColorSwatch({ color, step }) {
  return (
    <div
      className="rounded-lg p-4 text-sm font-medium"
      style={{
        backgroundColor: `var(--${color}-${step})`,  // ← --primary-50, not --color-primary-50
        color: step >= 500 ? '#fff' : 'var(--foreground)',
      }}
    >
      <span className="block">{step}</span>
      <span className="block text-xs opacity-70 mt-1">{color}-{step}</span>
    </div>
  );
}

function SurfaceSwatch({ label, className, textClass = 'text-neutral-900' }) {
  return (
    <div className={`${className} ${textClass} rounded-lg p-6 border border-neutral-200`}>
      <span className="block font-semibold text-sm">{label}</span>
    </div>
  );
}

export default function Home() {
  return (
    <main className="max-w-[1200px] mx-auto px-container-x py-section-y">
      {/* Header */}
      <div className="mb-16">
        <p className="text-accent-600 font-semibold text-sm tracking-widest uppercase mb-4">
          Design System
        </p>
        <h1>Innovia Partners</h1>
        <p className="mt-4 text-neutral-600 max-w-2xl text-lg">
          Typography, color palette, and design tokens for the Innovia Partners
          website redesign. A management consultancy for architecture
          and AEC practices.
        </p>
      </div>

      {/* Divider */}
      <hr className="border-neutral-200 mb-16" />

      {/* Typography */}
      <section className="mb-16">
        <p className="text-accent-600 font-semibold text-sm tracking-widest uppercase mb-8">
          Typography Scale
        </p>

        <div className="space-y-8">
          <div className="border-b border-neutral-200 pb-8">
            <span className="text-xs text-neutral-400 font-medium tracking-wide uppercase block mb-2">
              h1 — DM Serif Display
            </span>
            <h1>Strategic vision for architecture practices</h1>
          </div>

          <div className="border-b border-neutral-200 pb-8">
            <span className="text-xs text-neutral-400 font-medium tracking-wide uppercase block mb-2">
              h2 — DM Serif Display
            </span>
            <h2>Transforming how firms operate and grow</h2>
          </div>

          <div className="border-b border-neutral-200 pb-8">
            <span className="text-xs text-neutral-400 font-medium tracking-wide uppercase block mb-2">
              h3 — DM Serif Display
            </span>
            <h3>Our approach to organizational change</h3>
          </div>

          <div className="border-b border-neutral-200 pb-8">
            <span className="text-xs text-neutral-400 font-medium tracking-wide uppercase block mb-2">
              h4 — DM Serif Display
            </span>
            <h4>Building sustainable competitive advantage</h4>
          </div>

          <div className="border-b border-neutral-200 pb-8">
            <span className="text-xs text-neutral-400 font-medium tracking-wide uppercase block mb-2">
              Body — Libre Franklin (16px / leading-relaxed)
            </span>
            <p className="max-w-prose">
              Innovia Partners works exclusively with architecture and AEC
              practices to unlock their full potential. We combine deep industry
              knowledge with rigorous strategic thinking to help firms navigate
              growth, succession, and operational transformation. Our consultants
              have led practices themselves — we don&apos;t just advise, we understand.
            </p>
          </div>

          <div>
            <span className="text-xs text-neutral-400 font-medium tracking-wide uppercase block mb-2">
              Small — Libre Franklin (14px)
            </span>
            <small className="text-neutral-600">
              Trusted by leading architecture firms across the UK and Europe
              since 2005.
            </small>
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="border-neutral-200 mb-16" />

      {/* Color Palettes */}
      <section className="mb-16">
        <p className="text-accent-600 font-semibold text-sm tracking-widest uppercase mb-8">
          Color Palette
        </p>

        {Object.entries(colorScales).map(([color, { label, steps }]) => (
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

      {/* Divider */}
      <hr className="border-neutral-200 mb-16" />

      {/* Surfaces */}
      <section className="mb-16">
        <p className="text-accent-600 font-semibold text-sm tracking-widest uppercase mb-8">
          Semantic Surfaces
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <SurfaceSwatch
            label="surface-light"
            className="bg-surface-light"
          />
          <SurfaceSwatch
            label="surface-dark"
            className="bg-surface-dark"
            textClass="text-white"
          />
          <SurfaceSwatch
            label="surface-card"
            className="bg-surface-card"
          />
        </div>
      </section>

      {/* Divider */}
      <hr className="border-neutral-200 mb-16" />

      {/* Accent Usage Examples */}
      <section className="mb-16">
        <p className="text-accent-600 font-semibold text-sm tracking-widest uppercase mb-8">
          Accent Usage
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* CTA Button */}
          <div>
            <h4 className="mb-4">Call to Action</h4>
            <div className="space-y-3">
              <button className="bg-accent-600 hover:bg-accent-700 text-white px-8 py-3 rounded-md font-medium text-sm tracking-wide transition-colors">
                Get in Touch
              </button>
              <br />
              <button className="border border-accent-600 text-accent-600 hover:bg-accent-600 hover:text-white px-8 py-3 rounded-md font-medium text-sm tracking-wide transition-colors">
                Learn More
              </button>
            </div>
          </div>

          {/* Card Example */}
          <div>
            <h4 className="mb-4">Card on Dark</h4>
            <div className="bg-surface-dark rounded-lg p-8">
              <p className="text-accent-300 font-semibold text-xs tracking-widest uppercase mb-2">
                Case Study
              </p>
              <h3 className="text-white mb-2">Practice Transformation</h3>
              <p className="text-primary-300 text-sm">
                How we helped a 200-person firm restructure for
                sustainable growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="border-neutral-200 mb-16" />

      {/* Spacing Tokens */}
      <section className="mb-16">
        <p className="text-accent-600 font-semibold text-sm tracking-widest uppercase mb-8">
          Spacing Tokens
        </p>

        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <span className="text-sm text-neutral-500 w-32 shrink-0">section-y</span>
            <div className="bg-primary-100 h-4 rounded" style={{ width: 'var(--spacing-section-y)' }} />
            <span className="text-xs text-neutral-400">py-12 mobile / py-20 desktop</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-neutral-500 w-32 shrink-0">container-x</span>
            <div className="bg-primary-100 h-4 rounded" style={{ width: 'var(--spacing-container-x)' }} />
            <span className="text-xs text-neutral-400">px-5 mobile / px-8 desktop</span>
          </div>
        </div>
      </section>

      {/* Dark Section Preview */}
      <section className="bg-surface-dark rounded-xl p-8 md:p-12 mb-16">
        <p className="text-accent-400 font-semibold text-sm tracking-widest uppercase mb-4">
          Dark Section Preview
        </p>
        <h2 className="text-white mb-4">Trusted by leading practices</h2>
        <p className="text-primary-300 max-w-prose">
          For two decades, Innovia Partners has been the strategic advisor of
          choice for architecture firms navigating growth, succession, and
          market transformation. We bring clarity to complexity.
        </p>
        <button className="mt-8 bg-accent-600 hover:bg-accent-500 text-white px-8 py-3 rounded-md font-medium text-sm tracking-wide transition-colors">
          Our Services
        </button>
      </section>
    </main>
  );
}
