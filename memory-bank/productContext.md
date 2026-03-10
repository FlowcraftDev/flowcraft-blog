# Product Context

This file provides a high-level overview of the project and the expected product that will be created. Initially it is based upon projectBrief.md (if provided) and all other available project-related information in the working directory. This file is intended to be updated as the project evolves, and should be used to inform all other modes of the project's goals and context.

2026-03-10 10:49:35 - Initial memory bank creation based on project file analysis.

## Project Goal

**AstroPaper** (v4.2.0) is a minimal, responsive, accessible and SEO-friendly Astro blog theme. It serves as both a deployable personal blog and a reference template for developers building content-focused sites with Astro. The project is self-documenting — the blog posts within it also serve as its own documentation.

- Live demo / deployment target: `https://astro-paper.pages.dev/`
- Author: Sat Naing
- License: MIT

## Key Features

- Type-safe markdown via Astro Content Collections with Zod schema validation
- Super fast performance (near-perfect Lighthouse scores)
- Accessible (keyboard + VoiceOver/TalkBack tested)
- Fully responsive (mobile to desktop)
- SEO-friendly (sitemap, RSS feed, canonical URLs, OG images)
- Light & dark mode (toggle-theme.js in public/)
- Fuzzy search powered by FuseJS
- Draft posts support and pagination (3 posts per page default)
- Dynamic OG image generation (Satori + @resvg/resvg-js)
- Highly customizable via `src/config.ts`
- Deployed to Cloudflare Pages

## Overall Architecture

```
flowcraft-blog/
├── public/                  # Static assets served directly
│   ├── assets/              # Images, logos
│   ├── favicon.svg
│   ├── toggle-theme.js      # Client-side theme switcher
│   └── _redirects           # Cloudflare Pages redirects
├── src/
│   ├── assets/
│   │   ├── socialIcons.ts   # Social icon definitions
│   │   └── images/          # Processed images (AstroPaper version screenshots)
│   ├── components/          # Astro + React components
│   │   ├── Breadcrumbs.astro
│   │   ├── Card.tsx         # Blog post card (React)
│   │   ├── Datetime.tsx     # Date display (React)
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── Hr.astro
│   │   ├── LinkButton.astro
│   │   ├── Pagination.astro
│   │   ├── Search.tsx       # Fuzzy search UI (React + FuseJS)
│   │   ├── ShareLinks.astro
│   │   ├── Socials.astro
│   │   └── Tag.astro
│   ├── content/
│   │   ├── config.ts        # Zod schema for blog collection
│   │   └── blog/            # All blog posts as .md files
│   ├── layouts/
│   │   ├── AboutLayout.astro
│   │   ├── Layout.astro     # Base HTML layout
│   │   ├── Main.astro
│   │   ├── PostDetails.astro
│   │   ├── Posts.astro
│   │   └── TagPosts.astro
│   ├── pages/               # Astro file-based routing
│   │   ├── index.astro
│   │   ├── about.md
│   │   ├── search.astro
│   │   ├── 404.astro
│   │   ├── og.png.ts        # Site-level OG image endpoint
│   │   ├── robots.txt.ts
│   │   ├── rss.xml.ts
│   │   └── posts/           # Blog post routes + per-post OG image
│   │       ├── index.astro
│   │       └── [slug]/
│   │           ├── index.astro
│   │           └── index.png.ts
│   ├── styles/
│   │   └── base.css         # TailwindCSS base styles
│   ├── utils/               # Utility functions
│   │   ├── generateOgImages.tsx
│   │   ├── getPageNumbers.ts
│   │   ├── getPagination.ts
│   │   ├── getPostsByTag.ts
│   │   ├── getSortedPosts.ts
│   │   ├── getUniqueTags.ts
│   │   ├── postFilter.ts
│   │   ├── slugify.ts
│   │   └── og-templates/
│   │       ├── post.tsx     # OG image template for posts
│   │       └── site.tsx     # OG image template for site
│   ├── config.ts            # SITE, LOCALE, LOGO_IMAGE, SOCIALS config
│   ├── env.d.ts
│   └── types.ts             # Site and SocialObjects types
├── astro.config.ts          # Astro config: integrations, markdown, Vite
├── tailwind.config.cjs      # TailwindCSS config
├── tsconfig.json
├── docker-compose.yml       # Docker dev environment
└── .pages.yml               # Cloudflare Pages config
```

### Key Architecture Decisions
- **Framework**: Astro 4.x with Islands Architecture (React only for interactive components)
- **Styling**: TailwindCSS with custom base.css; typography plugin for prose
- **Content**: Astro Content Collections (type-safe, Zod-validated frontmatter)
- **Search**: Client-side fuzzy search via FuseJS (no server needed)
- **OG Images**: Generated at build time using Satori (SVG) + resvg-js (PNG conversion)
- **Deployment**: Cloudflare Pages with jampack post-processing for optimization
- **Markdown enhancements**: remark-toc (auto TOC), remark-collapse (collapsible sections), Shiki (one-dark-pro syntax highlighting)
