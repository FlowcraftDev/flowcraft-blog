# Decision Log

This file records architectural and implementation decisions using a list format.

2026-03-10 10:49:35 - Initial memory bank creation. Decisions inferred from existing project structure and configuration.

## Decision

**Use Astro as the primary framework with React as an Island renderer**

## Rationale

Astro's Islands Architecture means JavaScript is only shipped for interactive components (Search, Card, Datetime). The rest of the blog is pure HTML/CSS, resulting in near-zero JS on most pages and excellent Lighthouse scores.

## Implementation Details

- [`astro.config.ts`](astro.config.ts) integrates `@astrojs/react` for React island support
- Static `.astro` components for layout and non-interactive UI
- React `.tsx` components only for: `Search.tsx`, `Card.tsx`, `Datetime.tsx`

---

## Decision

**Use Astro Content Collections with Zod validation for blog posts**

## Rationale

Type-safe markdown ensures frontmatter errors are caught at build time, not runtime. Provides autocompletion and type inference throughout the codebase.

## Implementation Details

- Schema defined in [`src/content/config.ts`](src/content/config.ts)
- Required fields: `pubDatetime` (Date), `title` (string), `description` (string)
- Optional fields: `modDatetime`, `featured`, `draft`, `tags`, `ogImage`, `canonicalURL`
- Default author pulled from `SITE.author` in [`src/config.ts`](src/config.ts)

---

## Decision

**Generate OG images dynamically at build time using Satori + resvg-js**

## Rationale

Avoids the need for a headless browser or external service. Satori converts JSX/React to SVG, then resvg-js converts SVG to PNG. All happens at build time with zero runtime cost.

## Implementation Details

- Site OG image: [`src/pages/og.png.ts`](src/pages/og.png.ts) using [`src/utils/og-templates/site.tsx`](src/utils/og-templates/site.tsx)
- Per-post OG image: [`src/pages/posts/[slug]/index.png.ts`](src/pages/posts/[slug]/index.png.ts) using [`src/utils/og-templates/post.tsx`](src/utils/og-templates/post.tsx)
- Core logic in [`src/utils/generateOgImages.tsx`](src/utils/generateOgImages.tsx)

---

## Decision

**Deploy to Cloudflare Pages with jampack post-processing**

## Rationale

Cloudflare Pages provides fast global CDN, free tier, and tight GitHub integration. jampack further optimizes the built output (image optimization, script deferral, etc.)

## Implementation Details

- Build script: `astro build && jampack ./dist`
- Config file: [`.pages.yml`](.pages.yml)
- Redirects: [`public/_redirects`](public/_redirects)

---

## Decision

**Client-side fuzzy search with FuseJS (no server/API needed)**

## Rationale

For a static site, server-side search would require a separate service. FuseJS enables full-text fuzzy search entirely in the browser, keeping the architecture simple and serverless.

## Implementation Details

- Search UI: [`src/components/Search.tsx`](src/components/Search.tsx)
- Search page: [`src/pages/search.astro`](src/pages/search.astro)
- FuseJS v7.x installed as a production dependency
