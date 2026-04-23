---
description: End-to-end content publishing workflow from draft to publication with SEO validation
---

# Content Publishing Workflow

This workflow guides you through publishing blog posts and case studies from draft to production.

## Prerequisites

- Content draft created in `src/content/blog/` or `src/content/caseStudies/`
- Content follows frontmatter schema in `src/content/config.ts`
- Content reviewed for accuracy and quality
- Images optimized and added to `public/` directory

---

## Step 1: Content Review

### Review Checklist

Review the content for:
- [ ] Spelling and grammar errors
- [ ] Factual accuracy
- [ ] Up-to-date information
- [ ] Proper heading hierarchy
- [ ] Internal links work
- [ ] External links are valid
- [ ] Code examples are tested
- [ ] Images have alt text
- [ ] Reading time is accurate
- [ ] Author information is correct

### Frontmatter Validation

Verify frontmatter includes all required fields:

**Blog Posts:**
- title
- description
- pubDate
- author
- category
- tags

**Case Studies:**
- title
- client
- industry
- services
- challenge
- solution
- results
- publishedAt

---

## Step 2: SEO Validation

### Title and Description

- Title under 60 characters
- Description 150-160 characters
- Includes target keywords
- Action-oriented language
- Unique from other content

### Meta Tags

Add to page or ensure generated:
- Open Graph tags
- Twitter Card tags
- Canonical URL
- JSON-LD structured data

### Internal Linking

- Link to related content
- Use descriptive anchor text
- Avoid broken links
- Link to service pages

---

## Step 3: Image Optimization

### Image Requirements

- Images compressed (under 200KB preferred)
- WebP format with fallbacks
- Appropriate dimensions (1200x630 for OG)
- Descriptive file names
- Alt text for all images

### Image Placement

- Featured image in frontmatter
- Images in content with alt text
- Responsive images if applicable
- Image paths relative to `public/`

---

## Step 4: Remove Draft Status

If content was drafted with `draft-` prefix or draft status:

1. Remove `draft-` prefix from filename
2. Remove any `draft: true` from frontmatter
3. Set appropriate `pubDate` or `publishedAt`
4. Remove from draft exclusion in config if needed

---

## Step 5: Generate Search Index

### Regenerate Search Index

```bash
npm run generate-search-index
```

This will:
- Load all blog posts and case studies
- Build MiniSearch index
- Write to `public/search-index.json`

### Verify Index

```bash
# Check index file exists
ls public/search-index.json

# Check index size
du -h public/search-index.json
```

---

## Step 6: Build Verification

### Build Project

```bash
npm run build
```

### Verify Build Output

Check that:
- Build completes successfully
- Content page is generated in `dist/`
- No build errors or warnings
- All assets are included

### Test in Development

```bash
npm run dev
```

Navigate to the content page and verify:
- Page loads correctly
- Content displays properly
- Images load
- Links work
- Styling is correct

---

## Step 7: Preview Testing

### Preview Build

```bash
npm run preview
```

Test the production build locally:
- Navigate to content page
- Test all interactive elements
- Verify mobile responsiveness
- Check accessibility
- Test with screen reader

---

## Step 8: Accessibility Check

### Manual Accessibility Testing

- Test keyboard navigation
- Test with screen reader
- Check color contrast
- Verify ARIA attributes
- Test focus indicators
- Check heading hierarchy

### Automated Testing

```bash
# Run accessibility audit if configured
npm run test:e2e
```

---

## Step 9: Final Review

### Content Review

- Read content one final time
- Check for any last-minute edits
- Verify all links work
- Check formatting
- Verify images display

### Technical Review

- Check console for errors
- Verify no broken links
- Check page load time
- Verify SEO meta tags
- Check structured data

---

## Step 10: Commit Changes

### Stage Changes

```bash
git add src/content/blog/new-post.mdx
git add public/search-index.json
git add public/images/new-image.jpg
```

### Commit

```bash
git commit -m "feat(content): publish blog post - SEO Strategies for 2024"
```

Use conventional commit format:
- `feat:` for new content
- `fix:` for content corrections
- `docs:` for documentation updates

---

## Step 11: Push to GitHub

### Push to Branch

```bash
git push origin feature/new-blog-post
```

Or if working on main:
```bash
git push origin main
```

---

## Step 12: Deploy to Production

### Trigger CI/CD

Pushing to main will trigger GitHub Actions:
- Build runs automatically
- Tests run automatically
- Deployment requires manual approval

### Manual Approval

1. Go to GitHub Actions tab
2. Find the workflow run
3. Review build and test results
4. Approve deployment to production
5. Monitor deployment status

---

## Step 13: Post-Deployment Verification

### Verify Live Site

1. Navigate to published content
2. Verify page loads correctly
3. Check all links work
4. Test on mobile devices
5. Verify SEO meta tags
6. Check social sharing preview

### Monitor Analytics

- Track page views
- Monitor engagement
- Check search rankings
- Monitor for errors

---

## Step 14: Content Promotion

### Social Media

- Share on company social media
- Schedule posts for optimal times
- Include relevant hashtags
- Tag relevant accounts

### Email Newsletter

- Include in next newsletter
- Write compelling subject line
- Include featured image
- Link to content

### Internal Sharing

- Share with team
- Add to internal documentation
- Update content calendar

---

## Step 15: Documentation

### Update Content Calendar

- Mark content as published
- Update publish date
- Note performance metrics
- Plan follow-up content

### Update Internal Docs

- Document content creation process
- Note any lessons learned
- Update content guidelines if needed

---

## Troubleshooting

### Build Fails

```bash
# Check content schema
npm run astro check

# Validate frontmatter
cat src/content/blog/new-post.mdx

# Fix frontmatter errors
# Rebuild
npm run build
```

### Search Index Issues

```bash
# Regenerate index
npm run generate-search-index

# Verify index file
cat public/search-index.json

# Rebuild with search
npm run build:with-search
```

### Deployment Fails

```bash
# Check GitHub Actions logs
# Verify build passed
# Check tests passed
# Retry deployment
```

---

## Best Practices

### Content Quality

- Always review content before publishing
- Test all links and code examples
- Verify images are optimized
- Check accessibility
- Ensure SEO best practices

### Publishing Schedule

- Publish during business hours for monitoring
- Avoid publishing during high-traffic events
- Schedule content in advance
- Have contingency plan for issues

### Post-Publishing

- Monitor performance metrics
- Respond to comments and feedback
- Update content if issues found
- Repurpose content for other channels

---

## Quick Reference

### Common Commands

```bash
# Generate search index
npm run generate-search-index

# Build
npm run build

# Build with search
npm run build:with-search

# Dev server
npm run dev

# Preview
npm run preview

# Tests
npm run test
npm run test:e2e
```

### File Locations

- Blog posts: `src/content/blog/`
- Case studies: `src/content/caseStudies/`
- Images: `public/`
- Search index: `public/search-index.json`
- Config: `src/content/config.ts`

---

## After Publishing

1. Verify content is live
2. Test all functionality
3. Monitor analytics
4. Respond to feedback
5. Update documentation
6. Plan follow-up content
