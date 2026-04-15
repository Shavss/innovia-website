# Innovia Partners Website Redesign

Management consultancy website for architecture and AEC practices. Phase 1: frontend prototype with hardcoded content. No CMS integration yet.

## Stack

- Next.js 14+ (App Router, NOT Pages Router)
- JavaScript — no TypeScript
- Tailwind CSS **v4** for styling
- Framer Motion for animations
- Lucide React for icons
- Deployed on Vercel

## Commands

- `npm run dev` — start dev server on port 3000
- `npm run build` — production build (must pass with zero errors)
- `npm run lint` — ESLint check
- `npx prettier --check .` — formatting check

## Architecture

- `/src/app/` — App Router pages and layouts
- `/src/components/ui/` — design system primitives (Button, Card, SectionWrapper, etc.)
- `/src/components/layout/` — Header, Footer, Navigation, MobileMenu
- `/src/components/sections/` — page-specific composed sections, grouped by page name
- `/src/data/` — hardcoded content as JS objects (team, services, stories, news, clients)
- `/src/lib/` — utility functions (fonts, metadata)
- `/public/images/` — static images (team headshots, logos)

## File Extensions

**ALWAYS use `.js` extensions for all component files. NEVER use `.jsx`.** This applies to every file in the project: pages, components, utilities. No exceptions.

## Component Reuse

**ALWAYS import and use existing UI components from `src/components/ui/` when building pages and sections.** Before creating any button, card, badge, form input, divider, or nav link element inline, check what already exists in `src/components/ui/` and use it. NEVER duplicate component styles inline when a reusable component exists.

## Conventions

- Use App Router patterns: metadata exports, generateStaticParams, usePathname from next/navigation. NEVER use getStaticProps, getServerSideProps, or useRouter from next/router.
- All content lives in `/src/data/` as plain JS objects. Components import from data files. This makes CMS integration in Phase 2 a simple swap.
- Use `next/font/google` for font loading. No external font requests at runtime.
- Use `next/image` for all images with explicit width and height.
- Mobile-first responsive design. Base styles are mobile, use sm/md/lg/xl breakpoints to scale up.
- Semantic HTML: header, nav, main, section, article, footer. Headings in logical order (no skipping h1 to h3).
- All interactive elements need focus-visible styles and keyboard accessibility.
- Wrap Framer Motion animations with useReducedMotion check.
- Import Lucide icons individually: `import { TrendingUp } from 'lucide-react'` not `import * as Icons`.
- Use single quotes, semicolons, 2-space indentation, trailing commas (es5).
- All colors must use CSS variables, not hardcoded hex values, so they work with the theme switcher.

## Design Direction

- Premium, sophisticated botique consultancy aesthetic targeting architects and designers. Not corporate-generic, not startup-flashy.
- Serif headings + sans-serif body.
- Animations should be subtle and intentional: fade-in-up on scroll, gentle hover states. Nothing flashy.

## Tailwind CSS v4 Patterns

This project uses **Tailwind CSS v4** (`tailwindcss@^4`), which differs significantly from v3.

### Configuration

- There is **no `tailwind.config.js`**. All theme configuration lives in `src/app/globals.css` inside an `@theme` block.
- The entry point is `@import "tailwindcss";` at the top of `globals.css` (not `@tailwind base/components/utilities`).
- PostCSS is handled via `@tailwindcss/postcss`.

### @theme — Fixed Colour Scheme (Current Approach)

The project uses a **fixed colour scheme** with hex values defined directly in `@theme`. This is the standard, simple Tailwind v4 approach:

```css
@theme {
  --color-primary-500: #627d98;
  --color-accent-600: #8b2635;
  --color-neutral-200: #e2dcd4;
}
```

Tailwind generates utility classes (`bg-primary-500`, `text-accent-600` etc.) from these tokens at build time.

### Using Colour Tokens in Components

**Always use Tailwind utility classes** — never inline `style` with `var(--color-*)`:

```jsx
/* ✅ Correct */
<div className="bg-primary-500 text-white" />

/* ❌ Wrong — var(--color-primary-500) does NOT exist as a standalone
   CSS custom property on :root. It only lives inside Tailwind's generated
   utility classes and will resolve to nothing in an inline style. */
<div style={{ backgroundColor: 'var(--color-primary-500)' }} />
```

If you genuinely need a colour value in an inline `style` (e.g. dynamic/computed colours), reference the raw `:root` variable instead:

```jsx
/* ✅ Correct for inline style — references the actual :root variable */
<div style={{ backgroundColor: 'var(--primary-500)' }} />
```

This requires the raw variable to also be defined on `:root` separately from `@theme`.

### No tailwind.config.js

Do not create or reference `tailwind.config.js`. To extend the theme (new colour, spacing token etc.), add it to the `@theme` block in `globals.css`.

## Pages

Home, Services, Success Stories (listing + detail), Team, News (listing + detail), Contact.

## Performance Targets

- PageSpeed performance: 95+
- Accessibility: 90+
- Speed Index: under 1 second
- Near-zero unused JavaScript

## Important

- This is Phase 1: all content is hardcoded. No API calls, no CMS connection, no environment variables needed.
- The contact form and newsletter signup are UI-only. They do not submit anywhere.
- Team headshot placeholders use colored rectangles with initials, not external placeholder services.