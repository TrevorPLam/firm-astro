# Your Dedicated Marketer - AI Agent Guidelines

Astro 5.18.1 marketing website with cyber-futuristic dark mode design, electric blue accents, neon glow effects, and glassmorphism styling.

## Build & Test

- Build: `npm run build`
- Build with search: `npm run build:with-search`
- Dev server: `npm run dev`
- Preview: `npm run preview`
- Unit tests: `npm run test`
- Unit tests UI: `npm run test:ui`
- E2E tests: `npm run test:e2e`
- E2E tests UI: `npm run test:e2e:ui`
- Generate search index: `npm run generate-search-index`

## Tech Stack

- **Core**: Astro 5.18.1, React 18.3.1, Tailwind CSS 3.4.17
- **Content**: MDX, Zod validation, Content Collections
- **Testing**: Vitest 4.1.5, Playwright 1.59.1
- **Deployment**: Cloudflare Workers, GitHub Actions CI/CD
- **Fonts**: Inter (sans), Space Grotesk (display)

## Architecture Overview

Static site generation (SSG) with Island Architecture. Content managed via MDX in `src/content/` with Zod schema validation. Interactive components use React islands. Contact form submits to Cloudflare Worker.

## File Structure

```text
src/
├── components/       # Reusable UI components (.astro for static, .tsx for interactive)
├── content/
│   ├── blog/        # Blog posts (MDX)
│   ├── caseStudies/ # Case studies (MDX)
│   └── config.ts   # Zod schemas
├── layouts/         # Layout components
├── pages/           # Route pages
└── styles/         # Global styles
```

## Git Workflows

- Branch from `main` for features
- PR triggers CI/CD: build, test (Vitest), test-e2e (Playwright)
- Deployment to GitHub Pages requires manual approval via "production" environment
- Commit messages should be descriptive

## Security

- Environment variables: `VITE_FORM_SUBMISSION_URL`, `VITE_CALENDLY_URL`
- Cloudflare Worker handles form submissions (see `worker/index.js`)
- Never commit `.dev.vars` or `.env` files
- Secrets managed via Cloudflare Workers environment

## Code Patterns

### Component Structure

- **Astro (.astro)**: Static UI (Button, Footer, Header, ServiceCard)
- **React (.tsx)**: Interactive (ContactForm, FAQAccordion, CaseStudyFilter, SearchModal)
- **MDX**: Blog posts and case studies in `src/content/`

### Styling

```astro
<!-- Dark mode first, electric blue accent -->
<div class="dark:bg-dark-900 text-white electric-500">
  <div class="glass-card shadow-neon-md">
    <Button variant="primary" size="lg">Action</Button>
  </div>
</div>
```

### Path Aliases

- `@/*` → `src/*`
- `@components/*` → `src/components/*`
- `@layouts/*` → `src/layouts/*`
- `@content/*` → `src/content/*`
- `@styles/*` → `src/styles/*`

### Content Collections

Follow schema in `src/content/config.ts`. Blog posts in `src/content/blog/`, case studies in `src/content/caseStudies/`.

## Page Structure

**Main Pages**: index, about, team, contact, pricing, faq, 404, privacy-policy, terms-of-service
**Services**: index, seo, paid-media, content-marketing, email-automation, analytics-and-reporting
**Content**: blog/index, blog/[slug], work/index, work/[slug]
**Industries**: saas

## Boundaries

- ✅ **Always do**: Use path aliases, maintain dark mode, include alt text, follow existing component patterns
- ⚠️ **Ask first**: Before modifying core layouts, before changing design system colors
- 🚫 **Never do**: Hardcode API endpoints, skip TypeScript strict mode, use setTimeout for forms, commit secrets

## SEO & Accessibility

- All pages need meta tags (title, description, canonical URL)
- Blog posts need article schema with author and published date
- Images must have alt text
- Use semantic HTML (header, main, nav, footer, article, section)
- Maintain heading hierarchy (h1 → h2 → h3)
- All interactive elements must be keyboard accessible
- Color contrast must meet WCAG AA standards

## Security

### CVE-2026-41067 Mitigation (April 22, 2026)

**Status**: ✅ MITIGATED - No vulnerability present

CVE-2026-41067 is a critical XSS vulnerability in Astro 5's `define:vars` that allows arbitrary JavaScript injection via case-variant script tags (e.g., `</Script>`). This project has been audited and found to have **zero `define:vars` usage** across all 35 `.astro` files, rendering it immune to this vulnerability.

**Audit Results**:
- No `define:vars` usage found in any component or page
- No `<script>` tags with client-side variable passing
- All data flows use React islands or static content rendering
- CI pipeline now includes `npm audit --omit=dev` to monitor production dependencies

**Additional Mitigations Implemented**:
- Tailwind CSS pinned to `~3.4.17` to prevent accidental upgrade to v4 before Astro 6 migration
- CI pipeline audits only production dependencies to eliminate false-positive dev-only vulnerabilities

**Environment variables**: `VITE_FORM_SUBMISSION_URL`, `VITE_CALENDLY_URL`
- Cloudflare Worker handles form submissions (see `worker/index.js`)
- Never commit `.dev.vars` or `.env` files
- Secrets managed via Cloudflare Workers environment

## Dependency Compatibility

**Last Checked**: April 22, 2026

### Current Stack Status
- **Astro**: 5.18.1 (Stable, compatible with all integrations)
- **React**: 18.3.1 (Compatible with @astrojs/react 4.4.2)
- **Tailwind CSS**: 3.4.19 (Compatible with @astrojs/tailwind 6.0.2)
- **Node.js**: v24.13.0 (Compatible with Astro 5)

### Known Compatibility Issues
- **@astrojs/cloudflare**: Currently at 13.2.0 (incompatible with Astro 5). Downgraded to 12.2.0 for Astro 5 compatibility.
- **Astro 6 Upgrade**: Deferred. Current stack stable on Astro 5. Migration to Astro 6 would require:
  - Upgrading @astrojs/cloudflare to 13.2.0 (requires Astro 6)
  - Migrating Tailwind to @tailwindcss/vite + Tailwind 4
  - Migrating Zod schemas from 3 to 4
  - Upgrading @astrojs/react to 5.0.4 and @astrojs/mdx to 5.0.4

### Safe Minor Updates Available
- @astrojs/sitemap: 3.2.1 → 3.7.2
- @fontsource/inter: 5.1.0 → 5.2.8
- @fontsource/space-grotesk: 5.1.0 → 5.2.10

### Upgrade Strategy
Staying on Astro 5 for stability. Plan to evaluate Astro 6 upgrade in 6-12 months when:
- Astro 6 has more maturity
- Clear need for new features emerges
- Time available for thorough migration (4-8 hours estimated)
