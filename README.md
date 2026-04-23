# Your Dedicated Marketer - Astro Marketing Website

A complete, multi-page marketing website built with Astro, featuring a cyber-futuristic dark mode design with electric blue accents, neon glow effects, and glassmorphism styling.

## Features

- **Astro Framework v5.18.1**: Fast, SEO-optimized static site generation with Island Architecture
- **Tailwind CSS v3.4.17**: Custom theme with electric blue accent, neon glow, and glassmorphism effects
- **React Integration**: Interactive components for forms, filters, and accordions
- **MDX Support**: Rich content authoring for blog posts and case studies
- **Content Collections**: Type-safe blog and case study content with Zod validation
- **Search Functionality**: Client-side search with MiniSearch for blog posts and case studies
- **SEO Optimization**: Meta tags, JSON-LD structured data, sitemap, and robots.txt
- **Responsive Design**: Mobile-first approach with optimal UX across devices
- **Performance**: Minimal JavaScript, perfect Lighthouse scores target

## Project Structure

```text
your-dedicated-marketer/
├── public/                 # Static assets
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── AuthorBio.astro
│   │   ├── Button.astro
│   │   ├── CaseStudyCard.astro
│   │   ├── CaseStudyFilter.tsx
│   │   ├── ClientLogos.astro
│   │   ├── ContactForm.tsx
│   │   ├── ErrorBoundary.tsx
│   │   ├── FAQAccordion.tsx
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── PricingCard.astro
│   │   ├── ProcessStep.astro
│   │   ├── ReadingProgress.astro
│   │   ├── RelatedPosts.astro
│   │   ├── SearchModal.tsx
│   │   ├── ServiceCard.astro
│   │   ├── TeamCard.astro
│   │   └── ThemeToggle.astro
│   ├── content/           # Content collections
│   │   ├── blog/         # Blog posts (MDX)
│   │   ├── caseStudies/  # Case studies (MDX)
│   │   └── config.ts     # Zod schemas
│   ├── layouts/          # Layout components
│   │   ├── BaseLayout.astro
│   │   └── BlogPostLayout.astro
│   ├── pages/            # Route pages
│   │   ├── index.astro
│   │   ├── services/     # Service pages
│   │   ├── work/         # Case studies
│   │   ├── blog/         # Blog listing & posts
│   │   ├── industries/   # Industry landing pages (SaaS)
│   │   ├── about.astro
│   │   ├── team.astro
│   │   ├── contact.astro
│   │   ├── pricing.astro
│   │   ├── faq.astro
│   │   ├── 404.astro
│   │   ├── privacy-policy.astro
│   │   └── terms-of-service.astro
│   └── styles/           # Global styles
│       └── global.css
├── scripts/              # Build and utility scripts
│   └── generate-search-index.mjs
├── worker/               # Cloudflare Worker for contact form
│   └── index.js
├── migrations/           # Database migrations
│   └── 0001_create_form_submissions.sql
├── astro.config.mjs      # Astro configuration
├── tailwind.config.mjs   # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
├── wrangler.toml         # Cloudflare Workers configuration
└── package.json          # Dependencies and scripts
```

## Path Aliases

TypeScript path aliases are configured in `tsconfig.json` for cleaner imports:

- `@/*` → `src/*`
- `@components/*` → `src/components/*`
- `@layouts/*` → `src/layouts/*`
- `@content/*` → `src/content/*`
- `@styles/*` → `src/styles/*`

Example usage:

```typescript
import Button from "@components/Button.astro";
import BaseLayout from "@layouts/BaseLayout.astro";
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

- Install dependencies

```bash
npm install
```

- Start the development server

```bash
npm run dev
```

- Open your browser to <http://localhost:4321>

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:with-search` - Build with search index generation
- `npm run preview` - Preview production build locally
- `npm run astro` - Run Astro CLI commands
- `npm run generate-search-index` - Generate search index for blog and case studies
- `npm run test` - Run unit tests with Vitest
- `npm run test:ui` - Run unit tests with Vitest UI
- `npm run test:e2e` - Run end-to-end tests with Playwright
- `npm run test:e2e:ui` - Run end-to-end tests with Playwright UI

## Customization

### Theme Colors

The theme uses a strict dark mode with electric blue accent. Customize in `tailwind.config.mjs`:

```javascript
colors: {
  dark: {
    DEFAULT: '#0A0A0A',
    900: '#000000',
    800: '#0A0A0A',
    // ...
  },
  electric: {
    DEFAULT: '#0055FF',
    // ...
  }
}
```

### Content Collections

Add new blog posts in `src/content/blog/` with frontmatter:

```yaml
---
title: "Post Title"
description: "Post description"
pubDate: 2024-01-15
updatedDate: 2024-02-01 # Optional
author: "Author Name"
authorImage: "/path/to/author.jpg" # Optional
image: "/path/to/image.jpg" # Optional
imageAlt: "Image description" # Optional
category: "Category"
tags: ["tag1", "tag2"]
featured: false # Optional, defaults to false
readingTime: "5 min read" # Optional
---
```

Add new case studies in `src/content/caseStudies/` with frontmatter:

```yaml
---
title: "Case Study Title"
client: "Client Name"
industry: "Industry"
services: ["SEO", "Paid Media"]
challenge: "The challenge description"
solution: "The solution description"
results:
  - metric: "Metric Name"
    value: "Value"
    improvement: "Improvement" # Optional
testimonial: # Optional
  quote: "Client testimonial"
  author: "Client Name"
  role: "Client Role"
image: "/path/to/image.jpg" # Optional
imageAlt: "Image description" # Optional
featured: false # Optional, defaults to false
publishedAt: 2024-01-15
---
```

### Component Usage

#### Button Component

```astro
<Button href="/contact" variant="primary" size="lg"> Get Started </Button>
```

#### Service Card

```astro
<ServiceCard title="SEO" description="Description" icon="seo" href="/services/seo" />
```

#### Pricing Card

```astro
<PricingCard
  name="Scale-Up"
  price="$7,500"
  description="Package description"
  features={["Feature 1", "Feature 2"]}
  highlighted={true}
/>
```

## Deployment

### Vercel

1. Push your code to GitHub
2. Import project in Vercel
3. Vercel will automatically detect Astro and configure settings
4. Deploy!

### Netlify

- Build command

```bash
npm run build
```

- Publish directory: `dist`

- Add environment variables if needed

### Cloudflare Pages

- Build command: `npm run build`
- Output directory: `dist`
- Environment variables: Configure as needed
- Use `wrangler.toml` for Cloudflare Workers deployment

### Static Hosting

Build the site and deploy the `dist` folder to any static hosting service:

```bash
npm run build
# Upload dist/ folder to your hosting provider
```

## SEO Features

- **Meta Tags**: Dynamic meta tags for each page
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Twitter-specific sharing
- **JSON-LD**: Structured data for rich snippets
- **Sitemap**: Auto-generated XML sitemap
- **Robots.txt**: Search engine crawling directives

Update site URL in `astro.config.mjs`:

```javascript
site: "https://yourdomain.com";
```

## Testing

- **Unit Tests**: Vitest with React Testing Library for component testing
- **E2E Tests**: Playwright for end-to-end browser testing
- **Test UI**: Interactive test interfaces for both Vitest and Playwright

## Performance Optimization

- **Minimal JavaScript**: Only loads React islands where needed
- **Image Optimization**: Use Astro's Image component for automatic optimization
- **CSS Purging**: Tailwind removes unused styles
- **Static Generation**: Pre-rendered HTML for fast initial load
- **Lazy Loading**: Images and components loaded on demand
- **Search Index**: Client-side search with MiniSearch for fast content lookup

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

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

## License

This project is proprietary. All rights reserved.

## Support

For support, contact hello@yourdedicatedmarketer.com
