---
trigger: glob
globs: src/pages/**/*.astro
---

<seo_requirements>

# SEO Requirements for Pages

## Required Meta Tags
Every page must include:
- `<title>` - Page title with site name suffix
- `<meta name="description">` - Page description (150-160 characters)
- `<link rel="canonical">` - Canonical URL
- `<meta name="robots">` - Indexing directives (if needed)

## Open Graph Tags
- `og:type` - website or article
- `og:url` - Page URL
- `og:title` - Page title
- `og:description` - Page description
- `og:image` - Featured image
- `og:site_name` - Site name

## Twitter Cards
- `twitter:card` - summary_large_image
- `twitter:url` - Page URL
- `twitter:title` - Page title
- `twitter:description` - Page description
- `twitter:image` - Featured image

## JSON-LD Structured Data
- Include organization schema for main pages
- Include article schema for blog posts
- Include person schema for author pages
- Include local business schema if applicable
- Use proper schema.org types

## Title Format
- Main page: "Site Name"
- Other pages: "Page Title | Site Name"
- Keep titles under 60 characters
- Use descriptive, keyword-rich titles

## Description Guidelines
- Write unique descriptions for each page
- Include target keywords naturally
- Keep between 150-160 characters
- Write compelling, action-oriented descriptions

## Image Optimization
- Use appropriate image dimensions (1200x630 for OG)
- Use WebP format when possible
- Include alt text for all images
- Use descriptive file names
- Compress images for faster loading

## URL Structure
- Use hyphens to separate words
- Keep URLs short and descriptive
- Use lowercase letters
- Avoid unnecessary parameters
- Use canonical URLs to prevent duplicate content

## Sitemap
- All pages should be in sitemap
- Include lastmod dates
- Use proper priority values
- Update sitemap after adding new pages
- Submit sitemap to Google Search Console

## Robots.txt
- Allow crawling of important pages
- Disallow admin/api areas
- Include sitemap location
- Test robots.txt with Google tools

## Performance
- Optimize page load speed
- Minimize JavaScript
- Use lazy loading for images
- Enable compression
- Use CDN for static assets

## Mobile SEO
- Ensure mobile-friendly design
- Use responsive viewport meta tag
- Test with mobile-friendly test tool
- Optimize touch targets
- Ensure readable font sizes

</seo_requirements>
