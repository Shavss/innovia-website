# Innovia Partners Website Redesign

Management consultancy website for architecture and AEC practices. Phase 1: frontend prototype with hardcoded content. No CMS integration yet.

## Stack

- Next.js 14+ (App Router, NOT Pages Router)
- JavaScript (JSX) — no TypeScript
- Tailwind CSS for styling
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

## Design Direction

- Premium, sophisticated consultancy aesthetic. Not corporate-generic, not startup-flashy.
- Serif headings (DM Serif Display) + sans-serif body (Inter).
- Dark navy, warm neutrals, muted red/burgundy accent.
- Animations should be subtle and intentional: fade-in-up on scroll, gentle hover states. Nothing flashy.

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
