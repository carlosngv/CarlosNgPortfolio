# Copilot Instructions

## Commands

```bash
npm run dev       # Start dev server at localhost:3000
npm run build     # Production build
npm run lint      # ESLint
npm run seed      # Seed MongoDB with mock blog posts (requires .env.local)
```

There are no tests. Start MongoDB locally before running `seed`:

```bash
docker compose up -d   # Starts MongoDB on port 27017
```

## Architecture

This is a **Next.js 16 App Router** portfolio site with TypeScript and Tailwind CSS v4.

**Page structure** (`app/page.tsx`): A single server component assembles all portfolio sections in order — `HeroSection`, `AboutSection`, `ExperienceSection`, `ProjectsSection`, `BlogPreviewSection`, `ContactSection` — wrapped in `Navigation` / `Footer`. The page itself fetches recent blog posts server-side and passes them down.

**Blog**: Posts are stored in **MongoDB** via Mongoose (`lib/db/mongodb.ts` uses a global cached connection for hot-reload safety). CRUD functions live in `lib/blog/posts.ts`. The `Post` type is bilingual — every text field has an `Es` counterpart (e.g., `title`/`titleEs`, `content`/`contentEs`). A REST API route exists at `app/api/blog/[slug]/route.ts`. Seed data lives in `lib/blog/mock-posts.ts`.

**i18n**: English/Spanish toggle via a custom React context (`lib/i18n/context.tsx`). Language is persisted to `localStorage` with key `portfolio-lang`, and auto-detected from `navigator.language` on first load. Use the `useLanguage()` hook to get `{ lang, setLang, t }`. Translation keys are typed — add new keys to both `lib/i18n/translations/en.ts` and `lib/i18n/translations/es.ts`.

**Contact form**: Handled by a Server Action (`app/actions/contact.ts`) using Resend. If `RESEND_API_KEY` is absent, it logs to console and returns success (safe for local dev).

**Providers** (`components/providers/Providers.tsx`): `ThemeProvider` (next-themes, class-based) wraps `LanguageProvider`. Both are applied at the root layout.

## Required Environment Variables

Copy `.env.local.example` → `.env.local`:

```
MONGODB_URI=mongodb://localhost:27017
MONGODB_DB=portfolio-blog
RESEND_API_KEY=        # Optional — contact form logs to console without it
```

## Design System

The visual design is inspired by ElevenLabs (documented in `DESIGN.MD`). The implementation uses **Cormorant Garamond** (display), **Inter** (body), and **Geist Mono** (code), loaded via `next/font/google` and exposed as CSS variables.

**Typography utility classes** (defined in `app/globals.css` — use these, not ad-hoc font sizing):

| Class | Use |
|---|---|
| `.text-display-hero` | Hero headline — Cormorant 300, clamp 36–56px, tight tracking |
| `.text-section-heading` | Section titles — Cormorant 300, clamp 28–40px |
| `.text-card-heading` | Card titles — Cormorant 300, 32px |
| `.text-body-large` | Intro paragraphs — Inter 400, 20px |
| `.text-body` | Standard reading text — Inter 400, 18px, +0.18px tracking |
| `.text-body-ui` | UI labels — Inter 400, 16px |
| `.text-nav-link` | Navigation — Inter 500, 15px |
| `.text-caption` | Metadata — Inter 400, 14px |
| `.text-cta-uppercase` | Bold CTA labels — Cormorant Bold 700, uppercase, 14px |

**Font utility classes**: `.font-display` (Cormorant weight 300), `.font-display-bold` (Cormorant weight 700).

**Custom shadow utilities**: `.shadow-outline-ring`, `.shadow-card-el`, `.shadow-warm-lift`, `.shadow-inset-border`, `.shadow-edge`. These adapt between light/dark mode via CSS variables.

**Color tokens** (use these in inline styles or Tailwind `bg-*`/`text-*` via the `--color-*` aliases):

- `--bg-primary` / `--bg-secondary` / `--bg-warm` — surface backgrounds
- `--text-primary` / `--text-secondary` / `--text-muted` — text hierarchy
- `--border-default` / `--border-subtle` — borders

Dark mode is **true B&W** — pure `#000000` background, `#ffffff` text. Avoid introducing colors; the palette is intentionally achromatic with warm undertones in light mode.

## Key Component Conventions

**`SectionContainer`** (`components/ui/SectionContainer.tsx`): Wrap every page section with this. It provides `py-24 px-6` padding and `max-w-5xl` centered layout. Pass `warm` prop for a warm/muted background (`--bg-warm`).

**`AnimatedSection`** (`components/ui/AnimatedSection.tsx`): Wraps content in a Framer Motion scroll-triggered fade-in (`opacity 0→1`, `y 24→0`). Use the `delay` prop to stagger sibling elements. Supports `as` prop to change the rendered element tag.

**Section components** in `components/sections/` are **client components** (`"use client"`) because they use `useLanguage()`. Data fetching happens in the parent server component and is passed as props.

**shadcn/ui components** live in `components/ui/` alongside custom components. Add new shadcn components with `npx shadcn add <component>`.
