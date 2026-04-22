# Your Dedicated Marketer - Astro Marketing Website

A complete, multi-page marketing website built with Astro, featuring a cyber-futuristic dark mode design with electric blue accents, neon glow effects, and glassmorphism styling.

## Features

- **Astro Framework**: Fast, SEO-optimized static site generation with Island Architecture
- **Tailwind CSS v4**: Custom theme with electric blue accent, neon glow, and glassmorphism effects
- **React Integration**: Interactive components for forms, filters, and accordions
- **MDX Support**: Rich content authoring for blog posts and case studies
- **Content Collections**: Type-safe blog and case study content with Zod validation
- **SEO Optimization**: Meta tags, JSON-LD structured data, sitemap, and robots.txt
- **Responsive Design**: Mobile-first approach with optimal UX across devices
- **Performance**: Minimal JavaScript, perfect Lighthouse scores target

## Project Structure

```
your-dedicated-marketer/
├── public/                 # Static assets
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── Button.astro
│   │   ├── CaseStudyCard.astro
│   │   ├── ContactForm.tsx
│   │   ├── FAQAccordion.tsx
│   │   ├── Footer.astro
│   │   ├── Header.astro
│   │   ├── PricingCard.astro
│   │   ├── ProcessStep.astro
│   │   ├── ServiceCard.astro
│   │   ├── TeamCard.astro
│   │   └── ...
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
│   │   ├── industries/   # Industry landing pages
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
├── astro.config.mjs      # Astro configuration
├── tailwind.config.mjs   # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to `http://localhost:4321`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run astro` - Run Astro CLI commands

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
author: "Author Name"
category: "Category"
image: "/path/to/image.jpg"
tags: ["tag1", "tag2"]
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
    improvement: "Improvement"
---
```

### Component Usage

#### Button Component
```astro
<Button href="/contact" variant="primary" size="lg">
  Get Started
</Button>
```

#### Service Card
```astro
<ServiceCard
  title="SEO"
  description="Description"
  icon="seo"
  href="/services/seo"
/>
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

1. Build command: `npm run build`
2. Publish directory: `dist`
3. Add environment variables if needed

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
site: 'https://yourdomain.com',
```

## Performance Optimization

- **Minimal JavaScript**: Only loads React islands where needed
- **Image Optimization**: Use Astro's Image component for automatic optimization
- **CSS Purging**: Tailwind removes unused styles
- **Static Generation**: Pre-rendered HTML for fast initial load
- **Lazy Loading**: Images and components loaded on demand

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is proprietary. All rights reserved.

## Support

For support, contact hello@yourdedicatedmarketer.com
