# Your Dedicated Marketer - AI Agent Guidelines

This is an Astro 5.0.0 marketing website with a cyber-futuristic dark mode design featuring electric blue accents, neon glow effects, and glassmorphism styling.

## Project Overview

- **Framework**: Astro 5.0.0 with React integration and Island Architecture
- **Styling**: Tailwind CSS 3.4.17 with custom electric blue theme
- **Content**: MDX support with Content Collections for blog posts and case studies
- **TypeScript**: Strict mode enabled with path aliases
- **Output**: Static site generation (SSG)

## Technology Stack

- **Core**: Astro, React 18.3.1, Tailwind CSS
- **Content**: MDX, Zod validation
- **SEO**: Meta tags, JSON-LD structured data, sitemap, robots.txt
- **Fonts**: Inter (sans), Space Grotesk (display)

## Code Patterns

### Component Structure
- **Astro Components (.astro)**: Use for static UI components (Button, Footer, Header, ServiceCard, etc.)
- **React Components (.tsx)**: Use for interactive elements (ContactForm, FAQAccordion, CaseStudyFilter, SearchModal)
- **MDX Files**: Use for blog posts and case studies in `src/content/`

### Styling Conventions
- **Dark Mode**: Class-based with `dark:` prefix (always prefer dark mode styling)
- **Accent Color**: Use `electric-*` color palette (electric-500, electric-400, etc.)
- **Glassmorphism**: Use `glass-card` class for frosted glass effects
- **Neon Effects**: Use `shadow-neon-*` for glow effects
- **Grid Pattern**: Background uses `grid-pattern` class

### Path Aliases
- `@/*` → `src/*`
- `@components/*` → `src/components/*`
- `@layouts/*` → `src/layouts/*`
- `@content/*` → `src/content/*`
- `@styles/*` → `src/styles/*`

### Content Collections
- **Blog**: Located in `src/content/blog/` with Zod schema validation
- **Case Studies**: Located in `src/content/caseStudies/` with Zod schema validation
- Always follow the existing schema in `src/content/config.ts` when adding content

## Component Guidelines

### Button Component
```astro
<Button href="/contact" variant="primary" size="lg">
  Get Started
</Button>
```
- Variants: `primary`, `secondary`, `ghost`
- Sizes: `sm`, `md`, `lg`

### Service Card
```astro
<ServiceCard
  title="SEO"
  description="Description"
  icon="seo"
  href="/services/seo"
/>
```

### Contact Form
- Currently uses simulated submission (setTimeout)
- Must maintain form validation logic
- Must preserve accessibility (aria attributes, error handling)

## Page Structure

### Main Pages
- `index.astro` - Landing page
- `about.astro` - About page
- `team.astro` - Team page
- `contact.astro` - Contact page with form and Calendly placeholder
- `pricing.astro` - Pricing page
- `faq.astro` - FAQ page

### Service Pages (src/pages/services/)
- `index.astro` - Services overview
- `seo.astro` - SEO service page
- `paid-media.astro` - Paid Media service page
- `content-marketing.astro` - Content Marketing service page
- `email-automation.astro` - Email Automation service page
- `analytics-and-reporting.astro` - Analytics service page

### Content Pages
- `blog/index.astro` - Blog listing
- `blog/[slug].astro` - Blog post detail
- `work/index.astro` - Case studies listing
- `work/[slug].astro` - Case study detail

## Design System

### Color Usage
- **Primary Accent**: `electric-500` (#0055FF)
- **Dark Background**: `dark-900` (#000000) to `dark-700` (#111111)
- **Light Background**: `light-DEFAULT` (#FFFFFF) to `light-100` (#F5F5F5)
- **Text**: `text-white` (dark mode), `text-light-900` (light mode)

### Typography
- **Headings**: `font-display` (Space Grotesk)
- **Body**: `font-sans` (Inter)
- **Sizes**: Use Tailwind's scale (text-xl, text-2xl, text-3xl, etc.)

### Effects
- **Glassmorphism**: `glass-card` class (backdrop-blur, semi-transparent background)
- **Neon Glow**: `shadow-neon-sm/md/lg/xl` for varying glow intensity
- **Animations**: `animate-float`, `animate-slide-up`, `animate-fade-in`, `animate-glow-pulse`

## Known Issues & TODOs

Refer to `TODO.md` for comprehensive task list. Key items:
- Contact form uses simulated submission (needs real backend)
- No automated testing framework
- No CI/CD pipeline
- Limited blog content (2 posts)
- Limited case study content (2 studies)
- Calendly placeholder needs real embed
- Social media links are placeholders

## Development Workflow

1. **Adding Content**: Create MDX files in appropriate `src/content/` directory
2. **Adding Pages**: Create `.astro` files in `src/pages/` following existing patterns
3. **Adding Components**: Create in `src/components/` - use `.astro` for static, `.tsx` for interactive
4. **Styling**: Use Tailwind with custom theme colors and utilities
5. **Type Safety**: Maintain TypeScript strict mode, use Zod for content validation

## Build & Deployment

- **Development**: `npm run dev`
- **Build**: `npm run build`
- **Preview**: `npm run preview`
- **Build with Search**: `npm run build:with-search`

## SEO Requirements

- All pages must have proper meta tags (title, description, canonical URL)
- Blog posts need article schema with author and published date
- Case studies need proper structured data
- Images must have alt text
- Use semantic HTML elements

## Accessibility Standards

- Use semantic HTML (header, main, nav, footer, article, section)
- Maintain proper heading hierarchy (h1 → h2 → h3)
- All interactive elements must be keyboard accessible
- Forms must have proper labels and aria attributes
- Color contrast must meet WCAG AA standards
- Include skip links for keyboard navigation

## Performance Considerations

- Use Astro's Image component for optimization (not yet implemented)
- Lazy load images where possible
- Minimize JavaScript - only use React islands for interactivity
- Static generation for fast initial load
- Optimize font loading with preconnect

## Strict Rules

- **Never** use setTimeout for production form submissions
- **Never** hardcode API endpoints or sensitive data
- **Never** skip TypeScript strict mode
- **Always** maintain accessibility standards when making changes
- **Always** follow existing component patterns
- **Always** use path aliases instead of relative imports
- **Always** include alt text for images
- **Always** maintain dark mode as primary design
