# System Patterns

This file documents recurring patterns and standards used in the project.

2026-03-10 10:49:35 - Initial documentation based on project file analysis.

## Coding Patterns

- **TypeScript throughout**: All `.ts` / `.tsx` / `.astro` files use TypeScript. Path aliases configured in `tsconfig.json` (e.g., `@assets/`, `@config`, `@utils/`).
- **Zod schema validation**: Blog post frontmatter is validated via Zod schema in [`src/content/config.ts`](src/content/config.ts). Required fields: `pubDatetime`, `title`, `description`. Optional: `modDatetime`, `featured`, `draft`, `tags`, `ogImage`, `canonicalURL`.
- **Utility functions**: Reusable helpers in `src/utils/` — all pure functions (no side effects), single responsibility.
- **React Islands**: Interactive components (Search, Card, Datetime) are React `.tsx` files. Static UI uses `.astro` components.
- **Conventional Commits**: Git commits follow Conventional Commits spec, enforced by Commitizen + Husky pre-commit hooks.
- **Code formatting**: Prettier with `prettier-plugin-astro` and `prettier-plugin-tailwindcss`. Format on commit via lint-staged.

## Architectural Patterns

- **Astro Content Collections**: Blog posts live in `src/content/blog/` and are accessed via `getCollection('blog')`. Schema enforced at build time.
- **File-based routing**: Pages in `src/pages/` map directly to URL routes. Dynamic routes use `[slug]` and `[tag]` brackets.
- **OG Image generation pipeline**: Each blog post has a dynamic OG image at `/posts/[slug]/index.png` generated via Satori (JSX → SVG) then resvg-js (SVG → PNG). Site-level OG image at `/og.png`.
- **Post filtering utility**: [`src/utils/postFilter.ts`](src/utils/postFilter.ts) handles draft filtering and scheduled post logic using `SITE.scheduledPostMargin`.
- **Tag system**: Tags extracted via [`src/utils/getUniqueTags.ts`](src/utils/getUniqueTags.ts), slugified via [`src/utils/slugify.ts`](src/utils/slugify.ts) using `github-slugger`. Tag pages at `/tags/[tag]/[page]`.
- **Pagination**: [`src/utils/getPagination.ts`](src/utils/getPagination.ts) and [`src/utils/getPageNumbers.ts`](src/utils/getPageNumbers.ts) handle paginated post listing. Default 3 posts per page (`SITE.postPerPage`).
- **Theme switching**: Client-side JS in `public/toggle-theme.js` handles light/dark mode without framework overhead.
- **RSS + Sitemap**: Auto-generated at `/rss.xml` and sitemap via `@astrojs/sitemap` integration.

## Testing Patterns

- No automated test suite present — relies on TypeScript type checking (`astro check`) and ESLint for static analysis.
- Accessibility tested manually with VoiceOver (Mac) and TalkBack (Android).
- Performance validated via Lighthouse (near-perfect scores documented in `AstroPaper-lighthouse-score.svg`).
- `npm run build` includes jampack post-processing (`jampack ./dist`) for additional optimization/validation.
