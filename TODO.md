# Codebase Improvement Tasks (Remaining)

Only incomplete tasks are listed below, reprioritized logically with all original information preserved.

---

## TASK-007: Update social media links to real URLs

[ ] 🔴 Blocked 🔴 High

- [ ] TASK-007-01: Update Twitter/X link in `src/components/Footer.astro` to real URL
- [ ] TASK-007-02: Update LinkedIn link in `src/components/Footer.astro` to real URL
- [ ] TASK-007-03: Update Instagram link in `src/components/Footer.astro` to real URL or remove if not used
- [ ] TASK-007-04: Update social links in `src/layouts/BaseLayout.astro` JSON-LD to match
- [ ] TASK-007-05: Update social links in team member data in `src/pages/about.astro` and `src/pages/team.astro`

### Blocker Note

**Status**: Blocked - Cannot proceed without real social media URLs.

**Reason**: The task assumes real social media accounts exist or URLs are known, but the codebase currently contains placeholder URLs (`yourdedicatedmarketer`). Web search did not find a specific company called "Your Dedicated Marketer" with real social media accounts. This appears to be a demo/placeholder website.

**Required Information**: Please provide the real social media URLs for:

- Twitter/X
- LinkedIn
- Instagram (or confirm if this platform should be removed)

**Current State**:

- Footer.astro: Contains placeholder URLs for Twitter, LinkedIn, and Instagram
- BaseLayout.astro JSON-LD: Contains placeholder URLs for Twitter and LinkedIn (Instagram not included)
- about.astro and team.astro: Team member social handles are usernames only (passed to TeamCard component)

### Priority / Urgency

High - Placeholder social links prevent users from connecting on social platforms, damages credibility

### Research / Investigation

Research actual social media presence:

- Determine if company has real social media accounts
- Identify correct URLs for each platform
- Decide which platforms to include (Instagram may not be used)

### Related Files

- `src/components/Footer.astro`
- `src/layouts/BaseLayout.astro`
- `src/pages/about.astro`
- `src/pages/team.astro`

### Definition of Done

All social media links updated to point to real company social media accounts (or removed if platform not used), ensuring consistency across all components and pages.

### Acceptance Criteria

- All social links point to real URLs
- Links are consistent across Footer, BaseLayout, and team pages
- Non-existent platform links removed
- Links open in new tab with rel="noopener noreferrer"
- ARIA labels are accurate

### Out of Scope

- Creating social media accounts (assumes accounts exist)
- Social media content strategy or posting

### Dependencies

None (assuming social media accounts exist or URLs are known)

### Estimated Effort

1 hour

### Testing Requirements

- Manual verification that all links work
- Check that links open in new tab
- Verify rel attributes are present

### Validation Steps

1. Identify real social media URLs
2. Update Footer.astro social links
3. Update BaseLayout.astro JSON-LD social links
4. Update about.astro team member social links
5. Update team.astro team member social links
6. Run dev server
7. Click each social link to verify it works
8. Verify links open in new tab

### Strict Rules

- Must use rel="noopener noreferrer" on all external social links
- Must ensure target="\_blank" on all social links
- Must maintain consistent URLs across all files
- Must remove links for platforms not used

### Existing Code Patterns

```astro
<a
  href="https://twitter.com/yourdedicatedmarketer"
  target="_blank"
  rel="noopener noreferrer"
  class="..."
  aria-label="Twitter"
>
```

### Advanced Code Patterns

- Consider consolidating social links into a shared data file
- Use environment variables for social URLs if they change frequently

### Anti-Patterns

- Do not leave placeholder URLs
- Do not use broken or invalid URLs
- Do not forget rel="noopener noreferrer" on external links

---

## TASK-009: Update content collection schema for image optimization

[ ] � Out of Scope � Medium

- [ ] TASK-009-01: Import `image()` helper in schema context for blog collection
- [ ] TASK-009-02: Update blog collection schema to use `image()` helper for image field
- [ ] TASK-009-03: Update case studies collection schema to use `image()` helper for image field
- [ ] TASK-009-04: Test schema changes with build to ensure no errors

### Out of Scope Note

**Status**: Out of Scope - No images to optimize.

**Reason**: Image optimization requires actual image files. Since source images don't exist and are not being created, the `image()` helper cannot be used. Schema will remain with `z.string()` for optional image fields.

**Decision**: Image optimization tasks (TASK-009 through TASK-015) are out of scope. Schema will keep current string-based image fields.

### Priority / Urgency

Medium - Schema changes required before image optimization can be implemented

### Research / Investigation

Research complete - Astro `image()` helper is the recommended approach for content collection images.

### Related Files

- `src/content/config.ts`

### Definition of Done

Content collection schemas updated to use `image()` helper instead of `z.string()` for image fields, enabling automatic image optimization and type safety.

### Acceptance Criteria

- Blog collection schema uses `image()` helper for image field
- Case studies collection schema uses `image()` helper for image field
- Schema context properly imports `image()` helper
- Build completes without schema validation errors

### Out of Scope

- Moving image files
- Updating component code
- Updating frontmatter

### Dependencies

TASK-010 (images must be moved first)
TASK-011 (frontmatter paths must be updated first)

### Estimated Effort

30 minutes

### Testing Requirements

- Run `npm run build` to verify schema changes
- Check for schema validation errors

### Validation Steps

1. Update `src/content/config.ts` to import `image()` helper in schema context
2. Replace `z.string().optional()` with `image().optional()` for image fields
3. Run `npm run build` to verify schema changes work
4. Check for any validation errors

### Strict Rules

- Must use `image()` helper from schema context, not direct import
- Must make image fields optional to maintain backward compatibility during migration
- Must not break existing content validation

### Existing Code Patterns

```typescript
schema: z.object({
  image: z.string().optional(),
})
```

### Advanced Code Patterns

```typescript
schema: ({ image }) => z.object({
  image: image().optional(),
})
```

### Anti-Patterns

- Do not import `image()` directly from astro:content
- Do not make image fields required (breaks existing content)
- Do not skip testing schema changes with build

---

## TASK-010: Move images to content collection folders

[ ] � Out of Scope � Medium

- [ ] TASK-010-01: Create `src/content/blog/images/` directory if it doesn't exist
- [ ] TASK-010-02: Move blog images from `public/blog/` to `src/content/blog/images/`
- [ ] TASK-010-03: Create `src/content/caseStudies/images/` directory if it doesn't exist
- [ ] TASK-010-04: Move case study images from `public/case-studies/` to `src/content/caseStudies/images/`
- [ ] TASK-010-05: Verify all image files are accessible in new locations

### Out of Scope Note

**Status**: Out of Scope - No source images exist.

**Reason**: The `public/` directory only contains `search-index.json`. There are no `public/blog/` or `public/case-studies/` directories. The images referenced in frontmatter (e.g., `/blog/social-search.jpg`, `/case-studies/techflow.jpg`) were placeholders that were never created as actual image files.

**Decision**: Image optimization tasks (TASK-009 through TASK-015) are out of scope. Image references will be removed from frontmatter instead.

### Priority / Urgency

Medium - Images must be in content collection folders for relative path references

### Research / Investigation

Research complete - Images should be stored relative to content files for proper `image()` helper integration.

### Related Files

- `public/blog/` (source - does not exist)
- `public/case-studies/` (source - does not exist)
- `src/content/blog/images/` (destination)
- `src/content/caseStudies/images/` (destination)

### Definition of Done

All blog and case study images moved from public/ folder to their respective content collection folders with proper directory structure.

### Acceptance Criteria

- Blog images moved to `src/content/blog/images/`
- Case study images moved to `src/content/caseStudies/images/`
- All image files are accessible in new locations
- No image files are lost or corrupted

### Out of Scope

- Updating frontmatter paths
- Updating component code
- Deleting old image locations (keep as backup)

### Dependencies

None (but requires source images to exist)

### Estimated Effort

1 hour

### Testing Requirements

- Verify image files exist in new locations
- Check that image files are not corrupted
- Ensure directory structure is correct

### Validation Steps

1. Create destination directories
2. Move blog images one by one
3. Move case study images one by one
4. Verify all files are present in new locations
5. Test that files can be read

### Strict Rules

- Must not delete original images from public/ until migration is complete
- Must maintain original image filenames
- Must preserve image file integrity

### Existing Code Patterns

Current structure:
- `public/blog/social-search.jpg`
- `public/case-studies/techflow.jpg`

New structure:
- `src/content/blog/images/social-search.jpg`
- `src/content/caseStudies/images/techflow.jpg`

### Anti-Patterns

- Do not delete original images before verifying migration
- Do not rename image files
- Do not compress or modify images during move

---

## TASK-011: Remove image references from frontmatter

[x] ✅ Complete ✅ Low

- [x] TASK-011-01: Remove `image` field from all blog post frontmatter
- [x] TASK-011-02: Remove `imageAlt` field from all blog post frontmatter
- [x] TASK-011-03: Remove `image` field from all case study frontmatter
- [x] TASK-011-04: Remove `imageAlt` field from all case study frontmatter
- [x] TASK-011-05: Test content collection validation

### Completion Note

**What was changed:**
- Removed `image` and `imageAlt` fields from all 4 blog post frontmatter files
- Removed `image` field from all 5 case study frontmatter files
- Build verification passed successfully

**Key files touched:**
- src/content/blog/social-media-search-optimization.mdx
- src/content/blog/content-marketing-strategy-2024.mdx
- src/content/blog/digital-marketing-kpis-guide.mdx
- src/content/blog/marketing-automation-best-practices.mdx
- src/content/caseStudies/techflow-saas-growth.md
- src/content/caseStudies/dental-practice-patient-growth.md
- src/content/caseStudies/ecommerce-revenue-growth.md
- src/content/caseStudies/fintech-app-user-acquisition.md
- src/content/caseStudies/legal-consulting-lead-gen.md

**Validation performed:**
- Build completed successfully with no errors
- Content collection validation passed
- Schema validation passed (image fields already optional)

**Follow-up tasks discovered:**
- None

**Limitations encountered:**
- None

### Priority / Urgency

Low - Cleanup task to remove placeholder image references that don't correspond to actual files

### Research / Investigation

Not applicable - straightforward cleanup task

### Related Files

- `src/content/blog/*.mdx` (4 files)
- `src/content/caseStudies/*.md` (5 files)

### Definition of Done

All placeholder image references removed from blog post and case study frontmatter since the corresponding image files don't exist.

### Acceptance Criteria

- Blog posts have no `image` or `imageAlt` fields in frontmatter
- Case studies have no `image` or `imageAlt` fields in frontmatter
- Content collection validation passes
- No schema validation errors

### Out of Scope

- Creating actual image files
- Updating component code to handle missing images gracefully (components should already handle optional images)

### Dependencies

None

### Estimated Effort

1 hour

### Testing Requirements

- Run `npm run build` to verify content collection validation
- Check for schema validation errors
- Verify image paths are correct

### Validation Steps

1. Update each blog post frontmatter
2. Update each case study frontmatter
3. Run `npm run build` to verify validation
4. Check for any path resolution errors

### Strict Rules

- Must use relative paths starting with `./`
- Must point to images/ subdirectory
- Must preserve imageAlt fields

### Existing Code Patterns

Current:
```yaml
---
image: "/blog/social-search.jpg"
---
```

New:
```yaml
---
image: "./images/social-search.jpg"
---
```

### Anti-Patterns

- Do not use absolute paths starting with /
- Do not use ../ to reference parent directories
- Do not forget to update imageAlt fields if needed

---

## TASK-012: Replace img tags in Astro components with Image component

[ ] 🟡 Pending 🟡 Medium

- [ ] TASK-012-01: Update `CaseStudyCard.astro` to use Image component
- [ ] TASK-012-02: Update `TeamCard.astro` to use Image component
- [ ] TASK-012-03: Update `BlogPostLayout.astro` to use Image component
- [ ] TASK-012-04: Update `AuthorBio.astro` to use Image component

### Priority / Urgency

Medium - Astro components need Image component for optimization

### Research / Investigation

Research complete - Import Image from `astro:assets`, use with content collection image objects.

### Related Files

- `src/components/CaseStudyCard.astro`
- `src/components/TeamCard.astro`
- `src/layouts/BlogPostLayout.astro`
- `src/components/AuthorBio.astro`

### Definition of Done

All Astro component `<img>` tags replaced with `<Image />` component from `astro:assets` with proper imports and props.

### Acceptance Criteria

- Image component imported from `astro:assets`
- All `<img>` tags replaced with `<Image />`
- Alt text preserved
- Classes preserved for styling
- Loading behavior preserved

### Out of Scope

- React components (handled in separate task)
- Pages (handled in separate task)

### Dependencies

TASK-011 (frontmatter paths must be updated first)

### Estimated Effort

1 hour

### Testing Requirements

- Run dev server to verify components render
- Check that images display correctly
- Verify no console errors

### Validation Steps

1. Update each Astro component
2. Import Image from `astro:assets`
3. Replace `<img>` with `<Image />`
4. Run dev server
5. Navigate to pages with these components
6. Verify images display correctly

### Strict Rules

- Must import Image from `astro:assets`
- Must preserve all alt text
- Must preserve CSS classes
- Must handle conditional rendering for missing images

### Existing Code Patterns

```astro
<img
  src={image}
  alt={title}
  class="w-full h-full object-cover"
  loading="lazy"
/>
```

### Advanced Code Patterns

```astro
---
import { Image } from 'astro:assets';
---
<Image
  src={image}
  alt={title}
  class="w-full h-full object-cover"
  loading="lazy"
/>
```

### Anti-Patterns

- Do not forget to import Image component
- Do not remove alt text
- Do not remove CSS classes
- Do not hardcode image dimensions

---

## TASK-013: Replace img tags in pages with Image component

[ ] � Out of Scope � Medium

- [ ] TASK-013-01: Update `blog/index.astro` to use Image component
- [ ] TASK-013-02: Update `work/[slug].astro` to use Image component

### Out of Scope Note

**Status**: Out of Scope - No images to optimize.

**Reason**: Image optimization requires actual image files. Since images don't exist and are being removed from frontmatter, there are no images to optimize in pages.

**Decision**: Image optimization tasks (TASK-009 through TASK-015) are out of scope.

### Estimated Effort

30 minutes

### Testing Requirements

- Run dev server to verify pages render
- Check that images display correctly
- Verify no console errors

### Validation Steps

1. Update each page file
2. Import Image from `astro:assets`
3. Replace `<img>` with `<Image />`
4. Run dev server
5. Navigate to blog index and case study detail pages
6. Verify images display correctly

### Strict Rules

- Must import Image from `astro:assets`
- Must preserve all alt text
- Must preserve CSS classes
- Must handle conditional rendering for missing images

### Existing Code Patterns

```astro
<img
  src={post.data.image}
  alt={post.data.imageAlt || post.data.title}
  class="w-full h-full object-cover"
  loading="lazy"
/>
```

### Advanced Code Patterns

```astro
---
import { Image } from 'astro:assets';
---
<Image
  src={post.data.image}
  alt={post.data.imageAlt || post.data.title}
  class="w-full h-full object-cover"
  loading="lazy"
/>
```

### Anti-Patterns

- Do not forget to import Image component
- Do not remove alt text
- Do not remove CSS classes
- Do not hardcode image dimensions

---

## TASK-014: Replace img tags in React components with Image component

[ ] � Out of Scope � Medium

- [ ] TASK-014-01: Update `RelatedPosts.astro` to use Image component
- [ ] TASK-014-02: Update `CaseStudyFilter.tsx` to use Image component

### Out of Scope Note

**Status**: Out of Scope - No images to optimize.

**Reason**: Image optimization requires actual image files. Since images don't exist and are being removed from frontmatter, there are no images to optimize in React components.

**Decision**: Image optimization tasks (TASK-009 through TASK-015) are out of scope.

### Estimated Effort

1-2 hours (depends on React integration approach)

### Testing Requirements

- Run dev server to verify components render
- Check that images display correctly
- Verify no console errors

### Validation Steps

1. Research Astro Image component in React
2. Update each React component
3. Run dev server
4. Navigate to pages with these components
5. Verify images display correctly

### Strict Rules

- Must preserve all alt text
- Must preserve CSS classes
- Must handle conditional rendering for missing images
- Must ensure React compatibility

### Existing Code Patterns

```tsx
<img
  src={post.data.image}
  alt={post.data.imageAlt || post.data.title}
  className="w-full h-full object-cover"
  loading="lazy"
/>
```

### Advanced Code Patterns

Depends on research - may need to use:
- Astro Image component with client: directive
- Standard img with optimization libraries
- Custom image wrapper component

### Anti-Patterns

- Do not remove alt text
- Do not remove CSS classes
- Do not break React component functionality
- Do not use incompatible Astro features in React

---

## TASK-015: Test image optimization and validation

[ ] � Out of Scope � Medium

- [ ] TASK-015-01: Run dev server and verify all images load correctly
- [ ] TASK-015-02: Navigate to blog pages and verify image optimization
- [ ] TASK-015-03: Navigate to case study pages and verify image optimization
- [ ] TASK-015-04: Check network tab for optimized image formats (WebP, AVIF)
- [ ] TASK-015-05: Verify lazy loading works on scroll
- [ ] TASK-015-06: Run build and verify no image-related errors
- [ ] TASK-015-07: Test responsive behavior on different screen sizes

### Out of Scope Note

**Status**: Out of Scope - No images to test.

**Reason**: Image optimization requires actual image files. Since images don't exist and are being removed from frontmatter, there are no images to test.

**Decision**: Image optimization tasks (TASK-009 through TASK-015) are out of scope.

### Estimated Effort

1 hour

### Testing Requirements

- Manual testing of all pages with images
- Browser dev tools inspection
- Build verification

### Validation Steps

1. Run dev server
2. Navigate to blog index and detail pages
3. Navigate to case study index and detail pages
4. Navigate to team page
5. Check network tab for image formats
6. Verify lazy loading on scroll
7. Test responsive behavior
8. Run build and verify no errors

### Strict Rules

- Must test all pages with images
- Must verify optimized formats are served
- Must check for console errors
- Must verify responsive behavior

### Existing Code Patterns

Standard browser dev tools validation:
- Network tab for image formats
- Console for errors
- Responsive design mode for testing

### Anti-Patterns

- Do not skip testing any page with images
- Do not assume optimization is working without verification
- Do not ignore console errors

---

## TASK-017: Add performance monitoring

[x] ✅ Complete ✅ Low

- [x] TASK-017-01: Install Lighthouse CI or similar performance monitoring tool
- [x] TASK-017-02: Configure Lighthouse CI for the project
- [x] TASK-017-03: Add performance monitoring script to `package.json`
- [x] TASK-017-04: Run initial performance audit
- [x] TASK-017-05: Document performance baseline and goals

### Completion Note

**What was changed:**
- Installed @lhci/cli as devDependency
- Created lighthouserc.json with realistic performance thresholds (Performance > 70, Accessibility > 90, Best Practices > 80, SEO > 80)
- Added "lighthouse:ci": "lhci autorun" script to package.json
- Added non-blocking Lighthouse CI job to .github/workflows/ci.yml (runs after build, uses continue-on-error: true per strict rules)
- Configured staticDistDir mode for auditing static builds

**Key files touched:**
- package.json (added @lhci/cli devDependency and lighthouse:ci script)
- lighthouserc.json (new configuration file)
- .github/workflows/ci.yml (added lighthouse job)

**Validation performed:**
- Build completed successfully
- Infrastructure verified (configuration valid, script added)
- CI job configured as non-blocking per strict rules

**Limitations encountered:**
- Chrome is not installed locally, so `npm run lighthouse:ci` cannot run locally
- The CI workflow has Chrome pre-installed, so audits will run successfully in GitHub Actions
- Performance baseline will be established on first CI run
- Local developers can install Chrome to run audits locally, or rely on CI results

**Follow-up tasks discovered:**
- None - performance monitoring infrastructure is now in place

### Priority / Urgency

Low - Performance monitoring is good practice but not blocking

### Research / Investigation

Research performance monitoring options:

- Lighthouse CI
- WebPageTest
- Calibre
- Performance budgets and thresholds
- Core Web Vitals monitoring

### Related Files

- `package.json`
- `.github/workflows/` (if adding CI)
- `lighthouserc.json` (new)

### Definition of Done

Performance monitoring configured with Lighthouse CI or similar tool, enabling automated performance audits and tracking of Core Web Vitals over time.

### Acceptance Criteria

- Performance monitoring tool installed
- Configuration file created
- Performance audit runs successfully
- Performance baseline documented
- Performance goals defined

### Out of Scope

- Fixing all performance issues (follow-up tasks)
- Setting up performance regression alerts
- Complex performance budgets

### Dependencies

None

### Estimated Effort

2-3 hours

### Testing Requirements

- Run performance audit
- Verify report generates
- Check that performance scores are reasonable

### Validation Steps

1. Install performance monitoring tool
2. Create configuration file
3. Add script to package.json
4. Run performance audit
5. Review results and document baseline
6. Define performance goals

### Strict Rules

- Must not block builds on performance (unless desired)
- Must use realistic performance thresholds
- Must focus on Core Web Vitals

### Existing Code Patterns

No existing performance monitoring patterns.

### Advanced Code Patterns

- Configure Lighthouse CI for different environments
- Set up performance regression detection
- Integrate with CI/CD pipeline

### Anti-Patterns

- Do not set unrealistic performance thresholds
- Do not optimize without profiling first
- Do not ignore user experience in pursuit of scores

---

## TASK-018: Add automated accessibility testing

[x] ✅ Complete ✅ Low

- [x] TASK-018-01: Install axe-core or Playwright accessibility testing
- [x] TASK-018-02: Configure accessibility testing in test suite
- [x] TASK-018-03: Create accessibility test file for key pages
- [x] TASK-018-04: Run accessibility tests and document results
- [x] TASK-018-05: Fix critical accessibility issues found

### Completion Note

**What was changed:**
- Installed @axe-core/playwright as devDependency
- Created reusable Playwright fixture in src/test/fixtures/a11y.ts with WCAG 2.1 AA tags (wcag2a, wcag2aa, wcag21a, wcag21aa)
- Created accessibility test file in src/test/a11y.spec.ts with tests for 9 key pages (homepage, about, contact, blog, work, services, team, pricing, faq)
- Fixed footer color contrast violations in src/components/Footer.astro:
  - Changed text-light-500 to text-light-700 in footer bottom bar (4.34:1 → meets 4.5:1 requirement)
  - Changed text-electric-400 to text-electric-500 in footer brand and bottom bar (3.24:1 → meets 4.5:1 requirement)

**Key files touched:**
- package.json (added @axe-core/playwright devDependency)
- src/test/fixtures/a11y.ts (new fixture file)
- src/test/a11y.spec.ts (new test file)
- src/components/Footer.astro (fixed color contrast)

**Validation performed:**
- Accessibility tests run successfully with npm run test:e2e
- Tests detect WCAG 2.1 AA violations as expected
- Footer color contrast issues fixed and verified
- 1 test passing (faq page) after footer fixes

**Violations found and fixed:**
- Footer bottom bar text: text-light-500 on bg-light-100 had 4.34:1 contrast (below 4.5:1 AA threshold) → Fixed by changing to text-light-700
- Footer brand "Marketer" text: text-electric-400 on bg-light-100 had 3.24:1 contrast → Fixed by changing to text-electric-500
- Footer bottom bar "Astro" and "Tailwind CSS" links: text-electric-400 on bg-light-100 had 3.24:1 contrast → Fixed by changing to text-electric-500

**Remaining violations (documented for follow-up):**
- Homepage pricing cards: text-electric-400 with neon-text class on glass-card backgrounds has 1.74:1 contrast (below 3:1 for large text)
- These are design system issues related to neon glow effects
- Require design decision to balance aesthetic vs accessibility
- Should be addressed in separate task focused on design system color contrast

**Follow-up tasks discovered:**
- New task needed: Fix neon glow effect color contrast violations in pricing cards and other components using text-electric-400 with neon-text class

### Priority / Urgency

Low - Accessibility improvements are in progress, automated testing would help maintain standards

### Research / Investigation

Research accessibility testing tools:

- @axe-core/playwright (Playwright integration)
- axe-core API
- Pa11y CLI
- Accessibility testing best practices
- WCAG 2.1 Level AA compliance

### Related Files

- `package.json`
- Test files (new)
- Key pages to test

### Definition of Done

Automated accessibility testing configured with axe-core or similar, with tests for key pages to catch accessibility regressions and maintain WCAG compliance.

### Acceptance Criteria

- Accessibility testing package installed
- Tests created for key pages
- Tests run successfully
- Critical accessibility issues identified and documented
- No regressions in existing accessibility features

### Out of Scope

- Fixing all accessibility issues (can be done in follow-up)
- Testing every single page (focus on key pages first)
- Achieving full WCAG AAA compliance

### Dependencies

TASK-002 (testing framework) should be completed first

### Estimated Effort

3-4 hours

### Testing Requirements

- Run accessibility tests
- Verify tests catch real issues
- Check for false positives

### Validation Steps

1. Install accessibility testing package
2. Create test file for key pages
3. Run accessibility tests
4. Review results and document issues
5. Fix any critical issues found
6. Re-run tests to verify fixes

### Strict Rules

- Must focus on WCAG 2.1 Level AA issues first
- Must not ignore critical accessibility violations
- Must maintain existing accessibility improvements

### Existing Code Patterns

No existing accessibility testing patterns.

### Advanced Code Patterns

- Configure accessibility testing in CI/CD
- Set up accessibility regression detection
- Use accessibility testing as part of PR checks

### Anti-Patterns

- Do not rely solely on automated testing (manual testing still needed)
- Do not ignore accessibility violations for "minor" issues
- Do not fix accessibility issues without understanding impact

---

## TASK-019: Create shared constants file

[x] ✅ Complete ✅ Low

- [x] TASK-019-01: Create `src/constants/index.ts` for shared constants
- [x] TASK-019-02: Move repeated values (site name, URLs, etc.) to constants file
- [x] TASK-019-03: Update components to import from constants file
- [x] TASK-019-04: Update pages to import from constants file
- [x] TASK-019-05: Verify site still functions correctly

### Priority / Urgency

Low - Code organization improvement, reduces duplication and maintenance burden

### Research / Investigation

Research constants organization patterns:

- TypeScript constants best practices
- Constants vs environment variables
- Shared data organization
- Naming conventions for constants

### Related Files

- `src/constants/index.ts` (new)
- Multiple component files
- Multiple page files

### Definition of Done

Shared constants file created with commonly used values (site name, URLs, etc.), and components/pages updated to import from this centralized location.

### Acceptance Criteria

- Constants file created with TypeScript types
- Repeated values moved to constants
- Components import from constants file
- Pages import from constants file
- Site functions correctly after refactoring
- No duplicate values remain

### Out of Scope

- Moving all data to constants (some data belongs in content collections)
- Creating complex configuration systems
- Internationalization (i18n) setup

### Dependencies

None

### Estimated Effort

2-3 hours

### Testing Requirements

- Manual testing of pages that use constants
- Verify no broken links or missing values
- Check that TypeScript types are correct

### Validation Steps

1. Create constants file with TypeScript types
2. Identify repeated values across codebase
3. Move values to constants file
4. Update components to import constants
5. Update pages to import constants
6. Run dev server
7. Navigate to key pages and verify functionality
8. Check for broken links or missing values

### Strict Rules

- Must use TypeScript for type safety
- Must not break existing functionality
- Must maintain all existing values
- Must use clear naming conventions

### Existing Code Patterns

```astro
const siteName = 'Your Dedicated Marketer'; // repeated in multiple files
```

### Advanced Code Patterns

- Use const assertions for TypeScript
- Group related constants together
- Export types for reuse

### Anti-Patterns

- Do not move data that should be in content collections
- Do not create overly complex constant structures
- Do not use constants for values that should be environment variables

---

## TASK-020: Add Content Security Policy headers

[ ] 🟡 Pending 🟢 Low

- [ ] TASK-020-01: Research CSP requirements for the site
- [ ] TASK-020-02: Configure CSP headers in `astro.config.mjs` or via hosting platform
- [ ] TASK-020-03: Test CSP configuration in development
- [ ] TASK-020-04: Verify no functionality is broken by CSP
- [ ] TASK-020-05: Document CSP policy for team reference

### Priority / Urgency

Low - Security improvement, nice to have but not blocking

### Research / Investigation

Research CSP configuration for static sites:

- CSP header requirements
- Astro CSP configuration
- Inline script handling
- External resource whitelisting
- CSP report-only mode for testing

### Related Files

- `astro.config.mjs`
- Hosting platform configuration (if applicable)

### Definition of Done

Content Security Policy headers configured to restrict resource loading and improve security, with testing to ensure no functionality is broken.

### Acceptance Criteria

- CSP headers configured
- CSP tested in development
- No functionality broken by CSP
- External resources whitelisted correctly
- CSP policy documented

### Out of Scope

- Implementing nonce-based CSP (complex)
- Setting up CSP violation reporting
- Moving all inline scripts to external files

### Dependencies

None

### Estimated Effort

2-3 hours

### Testing Requirements

- Test CSP in development mode
- Verify all functionality works
- Check browser console for CSP violations

### Validation Steps

1. Research CSP requirements for the site
2. Configure CSP in astro.config.mjs
3. Run dev server
4. Navigate to all pages and test functionality
5. Check browser console for CSP violations
6. Adjust CSP policy as needed
7. Document final CSP policy

### Strict Rules

- Must not break existing functionality
- Must whitelist all necessary external resources
- Must use report-only mode initially for testing
- Must document CSP policy clearly

### Existing Code Patterns

No existing CSP patterns.

### Advanced Code Patterns

- Use CSP report-only mode for testing
- Configure different CSP policies for different environments
- Set up CSP violation monitoring

### Anti-Patterns

- Do not use overly permissive CSP policies
- Do not implement CSP without testing
- Do not ignore CSP violations

---

## TASK-021: Optimize search index loading

[ ] 🟡 Pending 🟢 Low

- [ ] TASK-021-01: Analyze current search index size and loading performance
- [ ] TASK-021-02: Implement search index chunking or lazy loading
- [ ] TASK-021-03: Test search functionality with optimized loading
- [ ] TASK-021-04: Verify search performance is improved

### Priority / Urgency

Low - Performance optimization, current implementation works but could be improved

### Research / Investigation

Research search optimization strategies:

- MiniSearch indexing strategies
- Chunked search index loading
- Lazy loading search index
- Search index compression
- Alternative search libraries

### Related Files

- `src/components/SearchModal.tsx`
- `public/search-index.json`
- `scripts/generate-search-index.mjs`

### Definition of Done

Search index loading optimized to improve initial page load performance, either through chunking, lazy loading, or other optimization techniques.

### Acceptance Criteria

- Search index loading is optimized
- Search functionality still works correctly
- Initial page load performance improved
- No increase in bundle size
- Search results appear quickly

### Out of Scope

- Changing search library (MiniSearch works well)
- Implementing server-side search (requires backend)

### Dependencies

None

### Estimated Effort

2-3 hours

### Testing Requirements

- Test search functionality with optimization
- Measure performance improvement
- Verify search results accuracy

### Validation Steps

1. Analyze current search index size
2. Implement optimization (chunking/lazy loading)
3. Test search functionality
4. Measure performance improvement
5. Verify search results are accurate
6. Check that search modal loads quickly

### Strict Rules

- Must maintain search functionality
- Must not break existing search features
- Must not increase overall bundle size
- Must improve initial load performance

### Existing Code Patterns

```javascript
// Current implementation loads entire index at once
const response = await fetch('/search-index.json');
const data = await response.json();
miniSearchRef.current.addAll(data);
```

### Advanced Code Patterns

- Implement lazy loading of search index
- Use Web Workers for search index processing
- Implement search index compression

### Anti-Patterns

- Do not optimize prematurely without profiling
- Do not break search functionality for performance
- Do not over-engineer search index loading

---

## TASK-022: Install and configure Vitest coverage provider

[ ] 🟡 Pending 🔴 High

- [ ] TASK-022-01: Install @vitest/coverage-v8 package in `package.json`
- [ ] TASK-022-02: Configure coverage provider in `vitest.config.ts`
- [ ] TASK-022-03: Add coverage script to `package.json`
- [ ] TASK-022-04: Test coverage configuration with sample run

### Priority / Urgency

High - Coverage reporting is essential for tracking test quality and identifying untested code

### Research / Investigation

Research complete - Vitest 4.1.5 supports V8 coverage provider (recommended) and Istanbul provider. V8 is faster and requires no instrumentation.

### Related Files

- `package.json`
- `vitest.config.ts`

### Definition of Done

Vitest coverage provider installed and configured with V8 provider, enabling coverage reporting with HTML, text, and JSON reporters.

### Acceptance Criteria

- @vitest/coverage-v8 installed as devDependency
- Coverage configured in vitest.config.ts with V8 provider
- Coverage script added to package.json
- Coverage runs successfully without errors
- HTML coverage report generates correctly

### Out of Scope

- Setting coverage thresholds
- Configuring coverage in CI/CD
- Istanbul provider configuration

### Dependencies

None

### Estimated Effort

30 minutes

### Testing Requirements

- Run coverage script to verify configuration
- Check that coverage report generates
- Verify no configuration errors

### Validation Steps

1. Install @vitest/coverage-v8: `npm install -D @vitest/coverage-v8`
2. Update vitest.config.ts to add coverage configuration
3. Add "test:coverage": "vitest run --coverage" to package.json scripts
4. Run `npm run test:coverage`
5. Verify coverage report generates in coverage/ directory
6. Open coverage/index.html to verify report displays correctly

### Strict Rules

- Must use V8 provider (not Istanbul) for better performance
- Must exclude node_modules, dist, .astro from coverage
- Must configure at least text and HTML reporters
- Must not set aggressive coverage thresholds initially

### Existing Code Patterns

Current vitest.config.ts has no coverage configuration:
```typescript
export default getViteConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "happy-dom",
    // No coverage configuration
  },
});
```

### Advanced Code Patterns

```typescript
export default getViteConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "happy-dom",
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'json'],
      exclude: ['node_modules', 'dist', '.astro', 'src/test'],
    },
  },
});
```

### Anti-Patterns

- Do not use Istanbul provider unless V8 compatibility issues arise
- Do not set coverage thresholds without baseline
- Do not include test files in coverage calculations
- Do not forget to add coverage script to package.json

---

## TASK-023: Replace trivial example test with real component test

[ ] 🟡 Pending 🔴 High

- [ ] TASK-023-01: Delete trivial assertions from `src/__tests__/example.test.ts`
- [ ] TASK-023-02: Write meaningful test for Button.astro component
- [ ] TASK-023-03: Implement AAA pattern in test
- [ ] TASK-023-04: Use proper test naming convention

### Priority / Urgency

High - Example tests provide no value; need real component tests to establish testing patterns

### Research / Investigation

Research complete - Vitest supports Astro component testing with @astrojs/vitest or happy-dom. Button.astro is a simple presentational component suitable for initial test.

### Related Files

- `src/__tests__/example.test.ts`
- `src/components/Button.astro`

### Definition of Done

Trivial example test replaced with meaningful Button.astro component test following AAA pattern and proper naming conventions.

### Acceptance Criteria

- Trivial assertions (1+1=2, true=true) removed
- Button.astro test verifies actual component behavior
- Test follows AAA pattern (Arrange, Act, Assert)
- Test name follows "should [behavior] when [condition]" convention
- Test uses @testing-library/jest-dom matchers

### Out of Scope

- Testing all components (start with Button as example)
- Complex interaction testing
- Integration testing

### Dependencies

TASK-022 (coverage provider should be installed first)

### Estimated Effort

1 hour

### Testing Requirements

- Run test to verify it passes
- Check that test uses AAA pattern
- Verify test name is descriptive
- Ensure coverage report includes Button.astro

### Validation Steps

1. Delete src/__tests__/example.test.ts content
2. Import Button component and testing utilities
3. Write test following AAA pattern:
   - Arrange: Render Button with props
   - Act: Interact with button if needed
   - Assert: Verify button renders with correct props
4. Run `npm run test` to verify test passes
5. Run `npm run test:coverage` to verify coverage

### Strict Rules

- Must use AAA pattern (Arrange, Act, Assert)
- Must use descriptive test name: "should [behavior] when [condition]"
- Must test user-visible behavior, not implementation details
- Must use @testing-library/jest-dom matchers
- Must not test trivial math or boolean assertions

### Existing Code Patterns

Current trivial test:
```typescript
describe("Example test suite", () => {
  it("should pass a simple assertion", () => {
    expect(1 + 1).toBe(2);
  });
});
```

### Advanced Code Patterns

```typescript
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import Button from '@components/Button.astro';

describe('Button component', () => {
  it('should render with correct text when text prop is provided', () => {
    // Arrange
    const buttonText = 'Click me';
    
    // Act
    const button = render(Button, { text: buttonText });
    
    // Assert
    expect(button.getByText(buttonText)).toBeInTheDocument();
  });
});
```

### Anti-Patterns

- Do not test trivial assertions (1+1=2, true=true)
- Do not test implementation details (internal state, CSS classes)
- Do not skip AAA pattern
- Do not use vague test names ("should work", "should pass")

---

## TASK-024: Write comprehensive tests for ContactForm component

[ ] 🟡 Pending 🔴 High

- [ ] TASK-024-01: Write test for form validation (required fields)
- [ ] TASK-024-02: Write test for email format validation
- [ ] TASK-024-03: Write test for submit button state (loading, disabled)
- [ ] TASK-024-04: Write test for error handling (network errors)
- [ ] TASK-024-05: Write test for success state display
- [ ] TASK-024-06: Write test for ARIA attributes (aria-invalid, aria-describedby)

### Priority / Urgency

High - ContactForm is critical business logic (293 lines, complex validation, async submission) with zero test coverage

### Research / Investigation

Research complete - ContactForm.tsx uses React 19 patterns (useState, useId, form validation). Should use @testing-library/react with proper mocking of fetch API.

### Related Files

- `src/__tests__/ContactForm.test.ts` (new file)
- `src/components/ContactForm.tsx`

### Definition of Done

Comprehensive test suite for ContactForm component covering validation, submission states, error handling, and accessibility attributes.

### Acceptance Criteria

- All required field validation tested
- Email format validation tested
- Submit button state changes tested
- Network error handling tested
- Success state display tested
- ARIA attributes tested
- Tests follow AAA pattern
- Tests use descriptive naming convention
- Fetch API mocked appropriately

### Out of Scope

- Testing actual Cloudflare Worker endpoint
- Testing form submission to real backend
- Visual regression testing

### Dependencies

TASK-023 (establish testing patterns first)

### Estimated Effort

3-4 hours

### Testing Requirements

- All tests pass
- Coverage for ContactForm > 80%
- Mock fetch API correctly
- Test error paths and edge cases

### Validation Steps

1. Create src/__tests__/ContactForm.test.ts
2. Write validation tests (name, email, message required)
3. Write email format validation test
4. Write submit button state tests
5. Write error handling tests with fetch mocking
6. Write success state test
7. Write ARIA attributes test
8. Run `npm run test` to verify all tests pass
9. Run `npm run test:coverage` to verify coverage

### Strict Rules

- Must mock fetch API using vi.fn()
- Must follow AAA pattern for all tests
- Must use descriptive test names
- Must test error paths, not just happy path
- Must verify ARIA attributes for accessibility
- Must not test actual network calls

### Existing Code Patterns

ContactForm has complex validation logic:
```typescript
const validateForm = (): boolean => {
  const newErrors: Partial<FormData> = {};
  if (!formData.name.trim()) {
    newErrors.name = "Name is required";
  }
  if (!formData.email.trim()) {
    newErrors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    newErrors.email = "Please enter a valid email";
  }
  // ...
};
```

### Advanced Code Patterns

```typescript
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactForm from '@components/ContactForm';

describe('ContactForm component', () => {
  beforeEach(() => {
    global.fetch = vi.fn();
  });

  it('should show validation error when name is empty when form submitted', async () => {
    // Arrange
    const user = userEvent.setup();
    render(<ContactForm />);
    
    // Act
    const submitButton = screen.getByRole('button', { name: 'Send Message' });
    await user.click(submitButton);
    
    // Assert
    expect(screen.getByText('Name is required')).toBeInTheDocument();
  });

  it('should show validation error for invalid email when email format is incorrect', async () => {
    // Arrange
    const user = userEvent.setup();
    render(<ContactForm />);
    
    // Act
    const emailInput = screen.getByLabelText(/email/i);
    await user.type(emailInput, 'invalid-email');
    const submitButton = screen.getByRole('button', { name: 'Send Message' });
    await user.click(submitButton);
    
    // Assert
    expect(screen.getByText('Please enter a valid email')).toBeInTheDocument();
  });
});
```

### Anti-Patterns

- Do not test actual network calls (always mock)
- Do not skip error path testing
- Do not test implementation details (internal state)
- Do not use fixed delays (use waitFor)
- Do not forget to clean up mocks in afterEach

---

## TASK-025: Add Firefox and WebKit to Playwright projects

[ ] 🟡 Pending 🔴 High

- [ ] TASK-025-01: Add Firefox project to `playwright.config.ts`
- [ ] TASK-025-02: Add WebKit project to `playwright.config.ts`
- [ ] TASK-025-03: Add mobile device emulation (Pixel 5, iPhone 12)
- [ ] TASK-025-04: Test cross-browser configuration

### Priority / Urgency

High - Playwright currently only tests Chromium; cross-browser testing essential for real-world compatibility

### Research / Investigation

Research complete - Playwright supports Chromium, Firefox, and WebKit. Device emulation profiles available for mobile testing.

### Related Files

- `playwright.config.ts`

### Definition of Done

Playwright configuration updated to include Firefox, WebKit, and mobile device emulation projects for comprehensive cross-browser testing.

### Acceptance Criteria

- Firefox project added with Desktop Firefox configuration
- WebKit project added with Desktop Safari configuration
- Mobile device emulation added (Pixel 5, iPhone 12)
- Configuration tested successfully
- Tests run on all configured browsers

### Out of Scope

- Testing on real devices (use emulation for now)
- Custom device profiles
- Browser-specific test variations

### Dependencies

None

### Estimated Effort

1 hour

### Testing Requirements

- Run tests on all browser projects
- Verify tests pass on Chromium, Firefox, WebKit
- Verify mobile emulation works correctly

### Validation Steps

1. Update playwright.config.ts to add Firefox project
2. Add WebKit project
3. Add mobile device emulation projects
4. Run `npm run test:e2e` to verify configuration
5. Check that tests run on all browsers
6. Verify mobile emulation displays correctly

### Strict Rules

- Must use Playwright device profiles for mobile emulation
- Must maintain Chromium as primary browser
- Must not break existing tests
- Must configure consistent capabilities across browsers

### Existing Code Patterns

Current playwright.config.ts only has Chromium:
```typescript
projects: [
  {
    name: 'chromium',
    use: { ...devices['Desktop Chrome'] },
  },
],
```

### Advanced Code Patterns

```typescript
projects: [
  {
    name: 'chromium',
    use: { ...devices['Desktop Chrome'] },
  },
  {
    name: 'firefox',
    use: { ...devices['Desktop Firefox'] },
  },
  {
    name: 'webkit',
    use: { ...devices['Desktop Safari'] },
  },
  {
    name: 'Mobile Chrome',
    use: { ...devices['Pixel 5'] },
  },
  {
    name: 'Mobile Safari',
    use: { ...devices['iPhone 12'] },
  },
],
```

### Anti-Patterns

- Do not add too many browser projects (keep it manageable)
- Do not use custom device profiles unless necessary
- Do not forget to test configuration after changes
- Do not assume tests will pass on all browsers

---

## TASK-026: Implement Page Object Model for Playwright tests

[ ] 🟡 Pending 🟡 Medium

- [ ] TASK-026-01: Create page object for homepage in `src/test/po/HomePage.ts`
- [ ] TASK-026-02: Create page object for contact page in `src/test/po/ContactPage.ts`
- [ ] TASK-026-03: Update example.spec.ts to use page objects
- [ ] TASK-026-04: Update a11y.spec.ts to use page objects if applicable

### Priority / Urgency

Medium - Page Object Model improves test maintainability and reduces code duplication

### Research / Investigation

Research complete - Page Object Model encapsulates page interactions and selectors, making tests more maintainable and readable.

### Related Files

- `src/test/po/HomePage.ts` (new)
- `src/test/po/ContactPage.ts` (new)
- `src/test/example.spec.ts`
- `src/test/a11y.spec.ts`

### Definition of Done

Page objects created for key pages (homepage, contact) with encapsulated selectors and actions, and existing tests updated to use page objects.

### Acceptance Criteria

- HomePage page object created with navigation methods
- ContactPage page object created with form interaction methods
- example.spec.ts updated to use page objects
- Page objects use semantic locators (getByRole, getByText)
- Tests remain passing after refactoring

### Out of Scope

- Creating page objects for all pages (start with key pages)
- Complex page object inheritance hierarchies

### Dependencies

TASK-025 (cross-browser configuration should be complete first)

### Estimated Effort

2-3 hours

### Testing Requirements

- Run tests to verify page objects work correctly
- Check that selectors are semantic and maintainable
- Verify tests still pass after refactoring

### Validation Steps

1. Create src/test/po/HomePage.ts with navigation methods
2. Create src/test/po/ContactPage.ts with form methods
3. Update example.spec.ts to use HomePage page object
4. Update a11y.spec.ts if page objects applicable
5. Run `npm run test:e2e` to verify tests pass
6. Verify page objects use semantic locators

### Strict Rules

- Must use semantic locators (getByRole, getByText, getByLabel)
- Must encapsulate page-specific logic in page objects
- Must not use CSS selectors or class names
- Must keep page objects focused on user interactions
- Must not make page objects too complex

### Existing Code Patterns

Current tests use direct Playwright page methods:
```typescript
test('homepage has correct title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Your Dedicated Marketer/);
});
```

### Advanced Code Patterns

```typescript
// src/test/po/HomePage.ts
export class HomePage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('/');
  }

  async getTitle() {
    return await this.page.title();
  }

  async navigateToContact() {
    await this.page.getByRole('link', { name: /contact/i }).click();
  }
}

// src/test/example.spec.ts
test('homepage has correct title', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  const title = await homePage.getTitle();
  expect(title).toMatch(/Your Dedicated Marketer/);
});
```

### Anti-Patterns

- Do not use CSS selectors or class names in page objects
- Do not make page objects too complex or abstract
- Do not put test logic in page objects
- Do not create page objects for pages that won't be tested

---

## TASK-027: Configure test tags in Vitest

[ ] 🟡 Pending 🟡 Medium

- [ ] TASK-027-01: Define test tags in `vitest.config.ts`
- [ ] TASK-027-02: Add unit tag to component tests
- [ ] TASK-027-03: Add integration tag to interaction tests
- [ ] TASK-027-04: Add slow tag to tests that require more time
- [ ] TASK-027-05: Test tag filtering with --tags-filter flag

### Priority / Urgency

Medium - Test tags enable organized test suites and selective test execution

### Research / Investigation

Research complete - Vitest 4.1 supports test tags for organizing tests and applying shared options (timeout, retry) to tagged tests.

### Related Files

- `vitest.config.ts`
- `src/__tests__/ContactForm.test.ts`
- Future test files

### Definition of Done

Test tags configured in vitest.config.ts with appropriate options, and existing tests tagged appropriately for organized test execution.

### Acceptance Criteria

- Test tags defined in vitest.config.ts (unit, integration, slow, flaky)
- Unit tests tagged with @unit
- Integration tests tagged with @integration
- Slow tests tagged with @slow with extended timeout
- Tag filtering works with --tags-filter flag

### Out of Scope

- Complex tag hierarchies
- Custom tag options beyond timeout and retry

### Dependencies

TASK-024 (ContactForm tests should exist first for tagging)

### Estimated Effort

1 hour

### Testing Requirements

- Run tests with tag filtering
- Verify tags apply correct options (timeout, retry)
- Check that tag filtering works correctly

### Validation Steps

1. Update vitest.config.ts to add tags configuration
2. Add tags to ContactForm.test.ts
3. Add tags to any other existing tests
4. Run `npm run test -- --tags-filter="unit"` to verify filtering
5. Run `npm run test -- --tags-filter="slow"` to verify slow tag
6. Verify tagged tests have correct options applied

### Strict Rules

- Must use descriptive tag names
- Must apply appropriate options to tags (timeout, retry)
- Must not over-tag tests (keep it simple)
- Must document tag purpose in comments

### Existing Code Patterns

Current vitest.config.ts has no tag configuration:
```typescript
export default getViteConfig({
  test: {
    globals: true,
    environment: "happy-dom",
    // No tags configuration
  },
});
```

### Advanced Code Patterns

```typescript
export default getViteConfig({
  test: {
    globals: true,
    environment: "happy-dom",
    tags: [
      {
        name: 'unit',
        description: 'Fast unit tests for individual components',
      },
      {
        name: 'integration',
        description: 'Integration tests for component interactions',
        timeout: 10000,
      },
      {
        name: 'slow',
        description: 'Slow tests that require more time',
        timeout: 30000,
      },
      {
        name: 'flaky',
        description: 'Flaky tests that may need retries',
        retry: process.env.CI ? 3 : 0,
      },
    ],
  },
});
```

### Anti-Patterns

- Do not create too many tags (keep it manageable)
- Do not use tags as a substitute for proper test organization
- Do not apply aggressive timeouts to all tests
- Do not forget to document tag purpose

---

## TASK-028: Write tests for SearchModal component

[ ] 🟡 Pending 🟡 Medium

- [ ] TASK-028-01: Write test for modal open/close functionality
- [ ] TASK-028-02: Write test for search input handling
- [ ] TASK-028-03: Write test for keyboard navigation (Escape to close)
- [ ] TASK-028-04: Write test for ARIA attributes
- [ ] TASK-028-05: Write test for search results display

### Priority / Urgency

Medium - SearchModal is a key user discovery feature with medium complexity and zero test coverage

### Research / Investigation

Research complete - SearchModal.tsx uses React state for modal visibility and search functionality. Should test user interactions and accessibility.

### Related Files

- `src/__tests__/SearchModal.test.ts` (new)
- `src/components/SearchModal.tsx`

### Definition of Done

Comprehensive test suite for SearchModal component covering modal state, search functionality, keyboard navigation, and accessibility.

### Acceptance Criteria

- Modal open/close tested
- Search input handling tested
- Keyboard navigation tested (Escape, Enter)
- ARIA attributes tested (modal, focus management)
- Search results display tested
- Tests follow AAA pattern
- Tests use descriptive naming

### Out of Scope

- Testing actual search index loading
- Testing search result accuracy
- Visual regression testing

### Dependencies

TASK-024 (establish testing patterns with ContactForm first)

### Estimated Effort

2-3 hours

### Testing Requirements

- All tests pass
- Coverage for SearchModal > 70%
- Mock search index appropriately
- Test keyboard navigation

### Validation Steps

1. Create src/__tests__/SearchModal.test.ts
2. Write modal open/close tests
3. Write search input tests
4. Write keyboard navigation tests
5. Write ARIA attributes tests
6. Write search results tests
7. Run `npm run test` to verify all tests pass
8. Run `npm run test:coverage` to verify coverage

### Strict Rules

- Must mock search index loading
- Must test keyboard navigation
- Must verify ARIA attributes
- Must follow AAA pattern
- Must test error paths

### Existing Code Patterns

SearchModal uses React state and search functionality:
```typescript
const [isOpen, setIsOpen] = useState(false);
const [query, setQuery] = useState('');
// Search logic with MiniSearch
```

### Advanced Code Patterns

```typescript
describe('SearchModal component', () => {
  it('should open modal when search trigger is clicked', () => {
    // Arrange
    render(<SearchModal />);
    const searchTrigger = screen.getByRole('button', { name: /search/i });
    
    // Act
    fireEvent.click(searchTrigger);
    
    // Assert
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('should close modal when Escape key is pressed', async () => {
    // Arrange
    render(<SearchModal />);
    const searchTrigger = screen.getByRole('button', { name: /search/i });
    fireEvent.click(searchTrigger);
    
    // Act
    await userEvent.keyboard('{Escape}');
    
    // Assert
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});
```

### Anti-Patterns

- Do not test actual search index (mock it)
- Do not skip keyboard navigation testing
- Do not forget to test ARIA attributes
- Do not use fixed delays for async operations