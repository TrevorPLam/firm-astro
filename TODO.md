# Codebase Improvement Tasks

## TASK-001: Implement real form submission backend
[x] � Completed 🔴 High

- [x] TASK-001-01: Create API endpoint or form handler in `src/pages/api/contact.ts` (or similar)
- [x] TASK-001-02: Update `src/components/ContactForm.tsx` to call real API endpoint
- [x] TASK-001-03: Add environment variable for form submission URL
- [x] TASK-001-04: Add form submission success/error handling with user feedback

### Completion Note
**Note**: Task description was outdated - form already had real API integration with Cloudflare Worker. Changes made:
- Created `.env.example` and `.dev.vars` with `VITE_FORM_SUBMISSION_URL` environment variable
- Updated `ContactForm.tsx` to use environment variable instead of hardcoded URL
- Replaced `alert()` error handling with inline error message display with proper ARIA attributes
- Added TypeScript type definitions in `src/env.d.ts`
- Updated `.gitignore` to exclude `.dev.vars`
- All validation logic, loading states, and success messages preserved
- Dev server running successfully at http://localhost:4322/

**Limitations**: Manual browser testing not performed - requires user to test form submission at /contact page. Error scenario simulation requires actual API failure.

### Priority / Urgency
High - Critical functionality currently simulated, prevents production deployment

### Research / Investigation
Research form handling options for static Astro sites:
- Formspree, Formsubmit.co, or similar form-as-a-service providers
- Serverless function options (Vercel Functions, Netlify Functions)
- Astro API routes for form handling

### Related Files
- `src/components/ContactForm.tsx`
- `src/pages/contact.astro`
- `package.json`
- `astro.config.mjs`

### Definition of Done
Contact form successfully submits data to a real backend endpoint with proper error handling, success feedback, and environment variable configuration for the submission URL.

### Acceptance Criteria
- Form submission calls real API endpoint (not setTimeout simulation)
- Environment variable used for submission URL
- Success message displays after successful submission
- Error message displays on submission failure
- Form validation remains intact
- Loading state displays during submission

### Out of Scope
- Email service implementation (can use form-as-a-service)
- Database storage of form submissions
- Admin dashboard for viewing submissions

### Dependencies
None

### Estimated Effort
2-4 hours

### Testing Requirements
- Manual testing of form submission flow
- Test success and error scenarios
- Verify environment variable usage
- No automated tests required initially

### Validation Steps
1. Set up form backend service (e.g., Formspree)
2. Configure environment variable for form endpoint
3. Test form submission with valid data
4. Test form submission with invalid data (validation should still work)
5. Verify success message displays
6. Simulate error scenario and verify error message displays
7. Check browser console for errors

### Strict Rules
- Must maintain existing form validation logic
- Must preserve existing UI/UX (loading states, success message)
- Must not break accessibility improvements (aria attributes)
- Must use environment variable for API endpoint

### Existing Code Patterns
```tsx
const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();
  if (!validateForm()) return;
  setIsSubmitting(true);
  // Simulate form submission
  await new Promise((resolve) => setTimeout(resolve, 1500));
  setIsSubmitting(false);
  setIsSubmitted(true);
};
```

### Advanced Code Patterns
- Use fetch API with proper error handling
- Implement retry logic for failed submissions
- Consider adding rate limiting on client side

### Anti-Patterns
- Do not hardcode API endpoints
- Do not use setTimeout for submission simulation
- Do not expose sensitive data in client-side code

---

## TASK-002: Add automated testing framework
[x] ✅ Completed 🔴 High

- [x] TASK-002-01: Install Vitest for unit testing in `package.json`
- [x] TASK-002-02: Install Playwright for E2E testing in `package.json`
- [x] TASK-002-03: Create vitest.config.ts in repo root
- [x] TASK-002-04: Create playwright.config.ts in repo root
- [x] TASK-002-05: Add test scripts to `package.json` (test, test:e2e)
- [x] TASK-002-06: Create initial test file structure (src/__tests__/)

### Completion Note
**Changes Made:**
- Installed Vitest 4.1.5, @vitest/ui 4.1.5, @vitejs/plugin-react 4.3.4, happy-dom 20.9.0, @testing-library/react 16.3.2, @testing-library/jest-dom 6.9.1
- Installed @playwright/test 1.59.1
- Created vitest.config.ts with getViteConfig() helper for Astro integration, React plugin, happy-dom environment, and path aliases
- Created playwright.config.ts with webServer configuration for automatic dev server startup, baseURL set to localhost:4321
- Added test scripts to package.json: test, test:ui, test:e2e, test:e2e:ui
- Created src/__tests__/ directory with setup.ts and example.test.ts
- Created src/test/ directory with example.spec.ts for E2E tests
- Fixed version compatibility issue by downgrading @vitejs/plugin-react to 4.3.4
- Excluded src/test directory from Vitest to prevent conflict with Playwright tests

**Validation Performed:**
- Vitest configuration verified: 2 sample tests passed
- Playwright configuration verified: 2 E2E tests passed (homepage title and load check)
- TypeScript compatibility confirmed through successful test execution

**Limitations:**
- TypeScript type checking via `npx astro check` requires additional packages (@astrojs/check, typescript) not installed, but tests ran successfully with TypeScript
- Dev server warnings during Playwright tests about ClientLogos component (pre-existing issue, not caused by testing setup)

### Priority / Urgency
High - No automated testing exists, critical for production readiness and confidence in deployments

### Research / Investigation
Research testing best practices for Astro + React projects:
- Vitest configuration for Astro projects
- Playwright setup for static sites
- Testing component libraries in Astro
- Coverage thresholds and reporting

### Related Files
- `package.json`
- `vitest.config.ts` (new)
- `playwright.config.ts` (new)
- `src/__tests__/` (new directory)

### Definition of Done
Automated testing framework configured with Vitest for unit tests and Playwright for E2E tests, including configuration files and test directory structure.

### Acceptance Criteria
- Vitest installed and configured
- Playwright installed and configured
- Test scripts added to package.json
- Test directory structure created
- Sample test file created to verify setup
- Configuration works with existing TypeScript setup

### Out of Scope
- Writing actual tests for existing components
- Setting up CI/CD integration (separate task)
- Test coverage reporting configuration

### Dependencies
None

### Estimated Effort
2-3 hours

### Testing Requirements
- Run Vitest to verify configuration works
- Run Playwright to verify E2E setup works
- Create sample test to validate framework installation

### Validation Steps
1. Run `npm install` to add new dependencies
2. Run `npm run test` to verify Vitest configuration
3. Run `npm run test:e2e` to verify Playwright configuration
4. Check that TypeScript types resolve correctly
5. Verify sample test passes

### Strict Rules
- Must use Vitest (not Jest) for better Astro compatibility
- Must configure Playwright for static site testing
- Must maintain TypeScript strict mode compatibility
- Test files must use .test.ts/.test.tsx naming convention

### Existing Code Patterns
No existing test patterns to follow.

### Advanced Code Patterns
- Configure Vitest to work with Astro components
- Set up Playwright to test static build output
- Configure coverage reporting if needed

### Anti-Patterns
- Do not use Jest (Vitest is better for modern projects)
- Do not configure testing in a way that breaks static builds
- Do not add unnecessary test utilities

---

## TASK-003: Set up CI/CD pipeline
[ ] 🟡 Pending 🔴 High

- [ ] TASK-003-01: Create `.github/workflows/ci.yml` for continuous integration
- [ ] TASK-003-02: Configure build step in CI workflow
- [ ] TASK-003-03: Configure test step in CI workflow
- [ ] TASK-003-04: Configure deployment step (manual approval for production)

### Priority / Urgency
High - No CI/CD exists, critical for automated testing and deployment safety

### Research / Investigation
Research CI/CD options for Astro projects:
- GitHub Actions for Astro static sites
- Vercel deployment from GitHub
- Netlify deployment from GitHub
- Environment variable management in CI/CD

### Related Files
- `.github/workflows/ci.yml` (new)
- `package.json`
- `astro.config.mjs`

### Definition of Done
GitHub Actions workflow configured to run on push/PR that builds the project, runs tests, and allows manual deployment approval.

### Acceptance Criteria
- GitHub Actions workflow file created
- Workflow triggers on push to main and pull requests
- Build step successfully builds Astro project
- Test step runs Vitest and Playwright
- Deployment step requires manual approval
- Workflow uses appropriate Node.js version

### Out of Scope
- Automatic deployment to production (manual approval only)
- Multi-environment deployment (staging/prod)
- Complex deployment matrices

### Dependencies
TASK-002 (testing framework) should be completed first

### Estimated Effort
2-3 hours

### Testing Requirements
- Test CI workflow by pushing to a branch
- Verify build succeeds in CI
- Verify tests run in CI
- Verify manual approval works for deployment

### Validation Steps
1. Create workflow file in .github/workflows/
2. Push changes to trigger workflow
3. Monitor GitHub Actions tab for workflow execution
4. Verify all steps complete successfully
5. Test manual approval process

### Strict Rules
- Must use GitHub Actions (not other CI systems unless specified)
- Must require manual approval for deployment
- Must fail workflow if tests fail
- Must use Node.js version matching package.json engines (if specified)

### Existing Code Patterns
No existing CI/CD patterns.

### Advanced Code Patterns
- Configure caching for node_modules to speed up builds
- Set up parallel job execution if needed
- Configure deployment to Vercel/Netlify from GitHub Actions

### Anti-Patterns
- Do not enable automatic deployment without approval
- Do not skip tests in CI workflow
- Do not hardcode sensitive data in workflow files

---

## TASK-004: Add more blog content
[ ] 🟡 Pending 🔴 High

- [ ] TASK-004-01: Create 3-5 new blog post files in `src/content/blog/`
- [ ] TASK-004-02: Ensure each post has complete frontmatter (title, description, pubDate, author, category, tags)
- [ ] TASK-004-03: Add images or image placeholders for new posts
- [ ] TASK-004-04: Verify new posts appear on blog index page

### Priority / Urgency
High - Only 2 blog posts exist, site appears incomplete and lacks content depth

### Research / Investigation
Research content topics relevant to digital marketing:
- Current SEO trends for 2024
- Social media marketing strategies
- Marketing automation best practices
- Analytics and reporting tips
- Industry case studies and insights

### Related Files
- `src/content/blog/` (new files)
- `src/content/config.ts`

### Definition of Done
Add 3-5 new blog posts with complete frontmatter, engaging content, and proper categorization to make the blog section feel complete.

### Acceptance Criteria
- 3-5 new blog post files created
- Each post has complete frontmatter (all required fields)
- Content is relevant to digital marketing
- Posts are properly categorized and tagged
- Posts appear on blog index page
- Reading time is accurate or calculated

### Out of Scope
- Creating blog post images (can use placeholders)
- Writing extensive long-form content (500-1000 words per post is sufficient)
- Blog post promotion or distribution

### Dependencies
None

### Estimated Effort
3-5 hours

### Testing Requirements
- Manual verification that posts appear on blog index
- Verify post detail pages render correctly
- Check that frontmatter validation passes

### Validation Steps
1. Create new blog post files in src/content/blog/
2. Run dev server
3. Navigate to /blog and verify new posts appear
4. Click on each new post and verify detail page renders
5. Check that categories and tags display correctly
6. Verify reading time displays correctly

### Strict Rules
- Must follow existing frontmatter schema in config.ts
- Must use valid date format for pubDate
- Must include at least one category and one tag per post
- Must not duplicate existing post slugs

### Existing Code Patterns
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

### Advanced Code Patterns
- Use consistent author names from existing posts
- Use relevant categories from existing posts (SEO, Paid Media, Content Marketing, etc.)
- Include reading time estimate in frontmatter

### Anti-Patterns
- Do not create placeholder content with "Lorem ipsum"
- Do not use invalid dates in frontmatter
- Do not skip required frontmatter fields
- Do not create posts without categories or tags

---

## TASK-005: Add more case study content
[ ] 🟡 Pending 🔴 High

- [ ] TASK-005-01: Create 2-3 new case study files in `src/content/caseStudies/`
- [ ] TASK-005-02: Ensure each case study has complete frontmatter (title, client, industry, services, challenge, solution, results)
- [ ] TASK-005-03: Add testimonials for each case study
- [ ] TASK-005-04: Verify new case studies appear on work index page

### Priority / Urgency
High - Only 2 case studies exist, site appears incomplete and lacks social proof

### Research / Investigation
Research case study topics:
- Different industries (healthcare, professional services, technology)
- Different service combinations
- Varying result metrics and improvements
- Realistic client scenarios

### Related Files
- `src/content/caseStudies/` (new files)
- `src/content/config.ts`
- `src/pages/work/index.astro`
- `src/pages/work/[slug].astro`

### Definition of Done
Add 2-3 new case studies with complete frontmatter, realistic client scenarios, measurable results, and testimonials to demonstrate service effectiveness.

### Acceptance Criteria
- 2-3 new case study files created
- Each case study has complete frontmatter (all required fields)
- Each includes realistic challenge, solution, and results
- Each includes a testimonial with quote, author, and role
- Case studies appear on work index page
- Case study detail pages render correctly

### Out of Scope
- Creating case study images (can use placeholders)
- Writing extensive long-form content (structured sections are sufficient)
- Client approval or real data verification

### Dependencies
None

### Estimated Effort
3-4 hours

### Testing Requirements
- Manual verification that case studies appear on work index
- Verify case study filter works with new industries/services
- Check that case study detail pages render correctly

### Validation Steps
1. Create new case study files in src/content/caseStudies/
2. Run dev server
3. Navigate to /work and verify new case studies appear
4. Test industry and service filters with new case studies
5. Click on each case study and verify detail page renders
6. Verify results display correctly
7. Verify testimonials display correctly

### Strict Rules
- Must follow existing frontmatter schema in config.ts
- Must include at least one service per case study
- Must include results array with at least 3 metrics
- Must include testimonial object with all required fields
- Must use valid date format for publishedAt

### Existing Code Patterns
```yaml
---
title: "Case Study Title"
client: "Client Name"
industry: "Industry"
services: ["Service1", "Service2"]
challenge: "The challenge description"
solution: "The solution description"
results:
  - metric: "Metric Name"
    value: "Value"
    improvement: "Improvement"
testimonial:
  quote: "Testimonial quote"
  author: "Author Name"
  role: "Role"
publishedAt: 2024-01-15
---
```

### Advanced Code Patterns
- Use varied industries from existing case studies (E-commerce, SaaS)
- Use realistic result metrics with percentage improvements
- Write testimonials that sound authentic

### Anti-Patterns
- Do not create placeholder case studies with fake data
- Do not skip required frontmatter fields
- Do not create case studies without testimonials
- Do not use unrealistic result metrics

---

## TASK-006: Replace Calendly placeholder with real embed
[ ] 🟡 Pending 🔴 High

- [ ] TASK-006-01: Create Calendly account or obtain Calendly embed code
- [ ] TASK-006-02: Replace placeholder in `src/pages/contact.astro` with real Calendly embed
- [ ] TASK-006-03: Test Calendly embed functionality
- [ ] TASK-006-04: Ensure embed is responsive on mobile devices

### Priority / Urgency
High - Placeholder content prevents users from scheduling consultations, critical for lead generation

### Research / Investigation
Research Calendly integration options:
- Calendly inline embed vs popup embed
- Responsive embed configuration
- Custom styling options
- Alternative scheduling tools (Calendly alternatives if needed)

### Related Files
- `src/pages/contact.astro`

### Definition of Done
Calendly placeholder replaced with functional Calendly embed that allows users to schedule consultations directly from the contact page.

### Acceptance Criteria
- Calendly embed code integrated into contact page
- Embed displays correctly on desktop and mobile
- Users can successfully schedule appointments
- Embed styling matches site theme
- Placeholder text removed

### Out of Scope
- Creating Calendly account (assumes account exists or will be created separately)
- Advanced Calendly customization (branding, custom questions)

### Dependencies
None (assuming Calendly account exists or will be created)

### Estimated Effort
1-2 hours

### Testing Requirements
- Manual testing of Calendly embed on desktop
- Manual testing of Calendly embed on mobile
- Test scheduling flow end-to-end

### Validation Steps
1. Obtain Calendly embed code
2. Replace placeholder div in contact.astro with embed code
3. Run dev server
4. Navigate to /contact and verify Calendly embed displays
5. Test on mobile viewport (responsive design)
6. Attempt to schedule an appointment to verify functionality

### Strict Rules
- Must maintain existing layout structure
- Must not break surrounding content layout
- Must ensure embed is responsive
- Must remove placeholder text completely

### Existing Code Patterns
```astro
<div class="aspect-video bg-white/5 rounded-lg flex items-center justify-center">
  <div class="text-center">
    <p class="text-gray-400 text-sm">Calendly embed will appear here</p>
  </div>
</div>
```

### Advanced Code Patterns
- Use Calendly's responsive embed code
- Consider using Calendly's popup embed if inline causes layout issues
- Add loading state if embed takes time to load

### Anti-Patterns
- Do not leave placeholder text
- Do not use iframe without proper sizing
- Do not hardcode scheduling options that should be configurable

---

## TASK-007: Update social media links to real URLs
[ ] 🟡 Pending 🔴 High

- [ ] TASK-007-01: Update Twitter/X link in `src/components/Footer.astro` to real URL
- [ ] TASK-007-02: Update LinkedIn link in `src/components/Footer.astro` to real URL
- [ ] TASK-007-03: Update Instagram link in `src/components/Footer.astro` to real URL or remove if not used
- [ ] TASK-007-04: Update social links in `src/layouts/BaseLayout.astro` JSON-LD to match
- [ ] TASK-007-05: Update social links in team member data in `src/pages/about.astro` and `src/pages/team.astro`

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
- Must ensure target="_blank" on all social links
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

## TASK-008: Add ESLint and Prettier configuration
[ ] 🟡 Pending 🟡 Medium

- [ ] TASK-008-01: Install ESLint and related packages in `package.json`
- [ ] TASK-008-02: Install Prettier and related packages in `package.json`
- [ ] TASK-008-03: Create `.eslintrc.json` configuration file
- [ ] TASK-008-04: Create `.prettierrc` configuration file
- [ ] TASK-008-05: Create `.prettierignore` file
- [ ] TASK-008-06: Add lint and format scripts to `package.json`

### Priority / Urgency
Medium - No code quality tools exist, important for maintaining code quality and consistency

### Research / Investigation
Research ESLint/Prettier configuration for Astro + React + TypeScript:
- ESLint plugins for Astro
- Prettier plugins for Astro
- TypeScript ESLint configuration
- Prettier vs ESLint conflict resolution

### Related Files
- `package.json`
- `.eslintrc.json` (new)
- `.prettierrc` (new)
- `.prettierignore` (new)
- `.eslintignore` (new)

### Definition of Done
ESLint and Prettier configured with appropriate rules for Astro, React, and TypeScript, with scripts added to package.json for linting and formatting.

### Acceptance Criteria
- ESLint installed and configured
- Prettier installed and configured
- Configuration files work with Astro + React + TypeScript
- Lint script added to package.json
- Format script added to package.json
- No configuration conflicts between ESLint and Prettier

### Out of Scope
- Fixing existing lint errors (can be done in follow-up task)
- Setting up pre-commit hooks (can be done in follow-up task)
- CI/CD integration (separate task)

### Dependencies
None

### Estimated Effort
2-3 hours

### Testing Requirements
- Run lint script to verify configuration works
- Run format script to verify configuration works
- Test that formatting doesn't break existing code

### Validation Steps
1. Install ESLint and Prettier packages
2. Create configuration files
3. Add scripts to package.json
4. Run `npm run lint` to check for errors
5. Run `npm run format` to test formatting
6. Verify no configuration conflicts

### Strict Rules
- Must use TypeScript ESLint parser
- Must include Astro ESLint plugin
- Must configure Prettier to work with ESLint
- Must not use overly strict rules that break existing code

### Existing Code Patterns
No existing linting patterns.

### Advanced Code Patterns
- Configure ESLint to work with .astro files
- Set up Prettier to format Astro files correctly
- Configure auto-fix on save in IDE (documentation only)

### Anti-Patterns
- Do not use default ESLint config without customization
- Do not configure Prettier to conflict with ESLint
- Do not enable rules that would require extensive refactoring

---

## TASK-009: Implement Astro Image component usage
[ ] 🟡 Pending 🟡 Medium

- [ ] TASK-009-01: Identify all `<img>` tags in the codebase
- [ ] TASK-009-02: Replace `<img>` tags in components with Astro `<Image />` component
- [ ] TASK-009-03: Replace `<img>` tags in pages with Astro `<Image />` component
- [ ] TASK-009-04: Test image optimization and lazy loading behavior
- [ ] TASK-009-05: Update content frontmatter to use Image component if needed

### Priority / Urgency
Medium - Images not optimized, affects performance and user experience

### Research / Investigation
Research Astro Image component:
- Astro Image component API and usage
- Image optimization benefits
- Remote image configuration
- Fallback images for content collections

### Related Files
- `src/components/CaseStudyCard.astro`
- `src/components/TeamCard.astro`
- `src/layouts/BlogPostLayout.astro`
- `src/pages/work/[slug].astro`
- `astro.config.mjs`

### Definition of Done
All static `<img>` tags replaced with Astro `<Image />` component for automatic optimization, lazy loading, and improved performance.

### Acceptance Criteria
- All `<img>` tags replaced with `<Image />` component
- Images are optimized automatically
- Lazy loading works correctly
- No visual regressions in image display
- Alt text preserved on all images

### Out of Scope
- Optimizing image files themselves (compression, resizing)
- Creating new images or image assets
- CDN configuration for images

### Dependencies
None

### Estimated Effort
2-3 hours

### Testing Requirements
- Manual testing of all pages with images
- Verify images load correctly
- Check that lazy loading works
- Verify no console errors related to images

### Validation Steps
1. Search codebase for all `<img>` tags
2. Replace each with `<Image />` component
3. Run dev server
4. Navigate to pages with images (blog, case studies, team)
5. Verify images display correctly
6. Check network tab for optimized image formats
7. Verify lazy loading on scroll

### Strict Rules
- Must preserve all alt text
- Must maintain responsive behavior
- Must not break image aspect ratios
- Must handle missing images gracefully

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
- Use Astro Image component with width/height for aspect ratio
- Configure remote image domains in astro.config.mjs
- Use placeholder blur for better UX

### Anti-Patterns
- Do not remove alt text when converting
- Do not hardcode dimensions that break responsiveness
- Do not use Image component for external images without proper configuration

---

## TASK-010: Add analytics integration
[ ] 🟡 Pending 🟡 Medium

- [ ] TASK-010-01: Install Google Analytics or alternative analytics package
- [ ] TASK-010-02: Configure analytics in `astro.config.mjs` or create analytics component
- [ ] TASK-010-03: Add analytics tracking script to `src/layouts/BaseLayout.astro`
- [ ] TASK-010-04: Add environment variable for analytics tracking ID
- [ ] TASK-010-05: Test analytics tracking on page views

### Priority / Urgency
Medium - No analytics exists, cannot measure site performance or user behavior

### Research / Investigation
Research analytics options for Astro:
- Google Analytics 4 integration
- Plausible Analytics (privacy-focused alternative)
- Umami (self-hosted alternative)
- PostHog (product analytics)
- Astro analytics integrations

### Related Files
- `package.json`
- `astro.config.mjs`
- `src/layouts/BaseLayout.astro`
- `.env` (new)

### Definition of Done
Analytics tracking integrated into the site with proper configuration, environment variable for tracking ID, and verification that page views are tracked.

### Acceptance Criteria
- Analytics package installed
- Analytics configured in Astro config or component
- Tracking script added to BaseLayout
- Environment variable used for tracking ID
- Page views are tracked correctly
- No console errors related to analytics

### Out of Scope
- Setting up custom event tracking
- E-commerce tracking
- Goal conversion tracking
- Advanced analytics dashboards

### Dependencies
None

### Estimated Effort
2-3 hours

### Testing Requirements
- Manual verification that analytics loads
- Check browser console for errors
- Verify page views appear in analytics dashboard

### Validation Steps
1. Install analytics package
2. Configure tracking ID in environment variable
3. Add tracking script to BaseLayout
4. Run dev server
5. Navigate to multiple pages
6. Check browser console for errors
7. Verify page views appear in analytics dashboard

### Strict Rules
- Must use environment variable for tracking ID
- Must not expose tracking ID in source code
- Must respect user privacy (GDPR compliance if applicable)
- Must not break existing functionality

### Existing Code Patterns
No existing analytics patterns.

### Advanced Code Patterns
- Consider privacy-focused analytics alternatives
- Implement cookie consent if required by region
- Use Astro's built-in analytics integrations if available

### Anti-Patterns
- Do not hardcode tracking ID in source code
- Do not use analytics without user consent if required
- Do not implement analytics that slow down page load

---

## TASK-011: Add error monitoring (Sentry)
[ ] 🟡 Pending 🟡 Medium

- [ ] TASK-011-01: Install Sentry SDK for JavaScript in `package.json`
- [ ] TASK-011-02: Configure Sentry in `astro.config.mjs` or create Sentry initialization file
- [ ] TASK-011-03: Add environment variable for Sentry DSN
- [ ] TASK-011-04: Test error tracking by triggering a test error
- [ ] TASK-011-05: Verify errors appear in Sentry dashboard

### Priority / Urgency
Medium - No error monitoring exists, cannot track production errors or issues

### Research / Investigation
Research error monitoring options:
- Sentry for JavaScript/Astro
- Alternative error monitoring services
- Sentry configuration for static sites
- Error filtering and alerting

### Related Files
- `package.json`
- `astro.config.mjs`
- `.env` (new)

### Definition of Done
Sentry error monitoring integrated with proper configuration, environment variable for DSN, and verification that errors are tracked and appear in dashboard.

### Acceptance Criteria
- Sentry SDK installed
- Sentry configured for Astro
- Environment variable used for DSN
- Test error triggers successfully
- Errors appear in Sentry dashboard
- No performance impact on page load

### Out of Scope
- Setting up complex error filtering
- Configuring alerting rules
- Performance monitoring (can be added later)
- Session replay

### Dependencies
None

### Estimated Effort
2-3 hours

### Testing Requirements
- Manual testing by triggering test error
- Verify error appears in Sentry dashboard
- Check that page load performance is not affected

### Validation Steps
1. Install Sentry SDK
2. Configure Sentry DSN in environment variable
3. Add Sentry initialization to app
4. Create test error (e.g., throw error in component)
5. Navigate to page with test error
6. Verify error appears in Sentry dashboard
7. Remove test error

### Strict Rules
- Must use environment variable for DSN
- Must not expose DSN in source code
- Must not track errors in development (optional)
- Must not significantly impact performance

### Existing Code Patterns
No existing error monitoring patterns.

### Advanced Code Patterns
- Configure Sentry to filter out common errors
- Set up user context for better error tracking
- Configure release tracking for deployments

### Anti-Patterns
- Do not hardcode DSN in source code
- Do not track errors in development without filtering
- Do not configure overly permissive error tracking

---

## TASK-012: Add environment variables configuration
[ ] 🟡 Pending 🟡 Medium

- [ ] TASK-012-01: Create `.env.example` file with all required environment variables
- [ ] TASK-012-02: Create `.env.local` file with local development values
- [ ] TASK-012-03: Update `.gitignore` to ensure `.env.local` is not committed
- [ ] TASK-012-04: Update code to use environment variables for hardcoded values
- [ ] TASK-012-05: Document environment variables in README

### Priority / Urgency
Medium - No environment variables used, values hardcoded, not secure for production

### Research / Investigation
Research environment variable best practices:
- Astro environment variable usage
- Vite environment variable conventions
- Environment variable naming conventions
- Security best practices for sensitive data

### Related Files
- `.env.example` (new)
- `.env.local` (new)
- `.gitignore`
- `README.md`
- `astro.config.mjs`
- `src/layouts/BaseLayout.astro`
- `src/components/Footer.astro`

### Definition of Done
Environment variables configured with example file, local development file, proper gitignore rules, and code updated to use environment variables instead of hardcoded values.

### Acceptance Criteria
- `.env.example` created with all required variables
- `.env.local` created with local values
- `.gitignore` updated to ignore `.env.local`
- Hardcoded values replaced with environment variables
- README updated with environment variable documentation
- Site builds and runs correctly with environment variables

### Out of Scope
- Creating production environment variables (deployment-specific)
- Setting up environment variable management in deployment platform

### Dependencies
None

### Estimated Effort
2-3 hours

### Testing Requirements
- Test that site builds with environment variables
- Test that site runs in development with environment variables
- Verify that missing environment variables are handled gracefully

### Validation Steps
1. Create .env.example with all variables
2. Create .env.local with local values
3. Update .gitignore
4. Replace hardcoded values with environment variables
5. Run dev server to verify site works
6. Run build to verify build works
7. Update README documentation

### Strict Rules
- Must never commit `.env.local` to git
- Must provide `.env.example` for reference
- Must handle missing environment variables gracefully
- Must use Astro/Vite environment variable conventions

### Existing Code Patterns
```javascript
site: 'https://yourdedicatedmarketer.com' // hardcoded
```

### Advanced Code Patterns
- Use `import.meta.env` for Vite environment variables
- Provide default values for optional environment variables
- Use Astro's `env` schema for type-safe environment variables

### Anti-Patterns
- Do not commit sensitive data to git
- Do not use environment variables for non-sensitive data unnecessarily
- Do not assume environment variables exist without fallbacks

---

## TASK-013: Consolidate duplicate team data
[ ] 🟡 Pending 🟡 Medium

- [ ] TASK-013-01: Create `src/data/team.ts` or JSON file with team member data
- [ ] TASK-013-02: Update `src/pages/about.astro` to import team data from shared file
- [ ] TASK-013-03: Update `src/pages/team.astro` to import team data from shared file
- [ ] TASK-013-04: Verify team pages display correctly with shared data

### Priority / Urgency
Medium - Team data duplicated across pages, maintenance burden and inconsistency risk

### Research / Investigation
Research data organization patterns:
- TypeScript data files vs JSON
- Astro data collection patterns
- Shared data best practices
- Type safety for shared data

### Related Files
- `src/data/team.ts` (new)
- `src/pages/about.astro`
- `src/pages/team.astro`

### Definition of Done
Team member data consolidated into a single shared data file, with both about and team pages importing from this source to eliminate duplication.

### Acceptance Criteria
- Team data consolidated into single file
- About page imports from shared file
- Team page imports from shared file
- Both pages display correctly
- Data is type-safe with TypeScript
- No data inconsistencies between pages

### Out of Scope
- Adding new team members
- Changing team data structure
- Creating admin interface for team data

### Dependencies
None

### Estimated Effort
1-2 hours

### Testing Requirements
- Manual verification that both pages display correctly
- Check that team member data is consistent
- Verify TypeScript types are correct

### Validation Steps
1. Create shared team data file
2. Update about.astro to import from shared file
3. Update team.astro to import from shared file
4. Run dev server
5. Navigate to /about and verify team displays correctly
6. Navigate to /team and verify team displays correctly
7. Verify data is consistent between both pages

### Strict Rules
- Must maintain TypeScript type safety
- Must preserve all existing team member data
- Must not change data structure (only move location)
- Must maintain existing component props

### Existing Code Patterns
```astro
const team = [
  {
    name: 'Alex Chen',
    role: 'Founder & CEO',
    bio: '...',
    expertise: ['Strategy', 'Growth', 'AI'],
    social: { twitter: 'alexchen', linkedin: 'alexchen' },
  },
  // ... more team members
];
```

### Advanced Code Patterns
- Use TypeScript interfaces for team member type
- Consider using content collections for team data
- Export type definitions for reuse

### Anti-Patterns
- Do not change team data structure when consolidating
- Do not lose any team member data
- Do not create inconsistent data between pages

---

## TASK-014: Fix Tailwind version documentation
[ ] 🟡 Pending 🟢 Low

- [ ] TASK-014-01: Update README.md to reflect actual Tailwind version (v3.4.17)
- [ ] TASK-014-02: Verify package.json version is correct
- [ ] TASK-014-03: Consider upgrading to Tailwind v4 if desired (separate decision)

### Priority / Urgency
Low - Documentation inconsistency, no functional impact

### Research / Investigation
Research Tailwind version status:
- Current Tailwind CSS stable version
- Tailwind v4 stability and release status
- Migration considerations from v3 to v4
- Breaking changes between versions

### Related Files
- `README.md`
- `package.json`

### Definition of Done
README.md updated to accurately reflect the Tailwind CSS version used in the project, resolving documentation inconsistency.

### Acceptance Criteria
- README.md Tailwind version matches package.json
- Documentation is accurate
- No other version inconsistencies exist

### Out of Scope
- Upgrading Tailwind to v4 (unless explicitly requested)
- Updating other dependency versions

### Dependencies
None

### Estimated Effort
30 minutes

### Testing Requirements
- None required (documentation only)

### Validation Steps
1. Check package.json for actual Tailwind version
2. Update README.md to match
3. Review README for other version inconsistencies
4. Verify no other documentation errors

### Strict Rules
- Must match package.json exactly
- Must not upgrade versions without explicit request
- Must maintain documentation accuracy

### Existing Code Patterns
```markdown
- **Tailwind CSS v4**: Custom theme with electric blue accent, neon glow, and glassmorphism effects
```

### Advanced Code Patterns
N/A (documentation only)

### Anti-Patterns
- Do not upgrade versions without testing
- Do not leave documentation inconsistencies
- Do not guess version numbers

---

## TASK-015: Replace custom YAML parser with js-yaml
[ ] 🟡 Pending 🟡 Medium

- [ ] TASK-015-01: Install js-yaml package in `package.json`
- [ ] TASK-015-02: Update `scripts/generate-search-index.mjs` to use js-yaml
- [ ] TASK-015-03: Test search index generation with new parser
- [ ] TASK-015-04: Verify search index output is identical

### Priority / Urgency
Medium - Custom regex-based YAML parser is fragile and error-prone

### Research / Investigation
Research js-yaml usage:
- js-yaml API and usage
- YAML parsing best practices
- Error handling for invalid YAML
- Performance considerations

### Related Files
- `scripts/generate-search-index.mjs`
- `package.json`

### Definition of Done
Custom YAML parser replaced with js-yaml library for more robust and maintainable frontmatter parsing in search index generation script.

### Acceptance Criteria
- js-yaml package installed
- Custom parser replaced with js-yaml
- Search index generates correctly
- Output is identical to previous implementation
- Error handling improved for invalid YAML

### Out of Scope
- Changing search index data structure
- Adding new fields to search index

### Dependencies
None

### Estimated Effort
1-2 hours

### Testing Requirements
- Run search index generation script
- Verify output is identical
- Test with valid YAML
- Test error handling with invalid YAML

### Validation Steps
1. Install js-yaml package
2. Update generate-search-index.mjs to use js-yaml
3. Run `npm run generate-search-index`
4. Compare output with previous version
5. Verify search index loads correctly in app

### Strict Rules
- Must maintain identical output format
- Must handle errors gracefully
- Must not break search functionality
- Must maintain all existing fields in output

### Existing Code Patterns
```javascript
// Custom regex-based parser (fragile)
function parseFrontmatter(content) {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = content.match(frontmatterRegex);
  // ... manual parsing logic
}
```

### Advanced Code Patterns
- Use js-yaml's load() method for parsing
- Implement proper error handling for YAML errors
- Add validation for parsed data structure

### Anti-Patterns
- Do not use regex for YAML parsing (use proper library)
- Do not assume YAML is always valid
- Do not ignore parsing errors

---

## TASK-016: Add bundle analysis
[ ] 🟡 Pending 🟢 Low

- [ ] TASK-016-01: Install webpack-bundle-analyzer or similar package
- [ ] TASK-016-02: Configure bundle analyzer in build process
- [ ] TASK-016-03: Add bundle analysis script to `package.json`
- [ ] TASK-016-04: Generate bundle analysis report
- [ ] TASK-016-05: Review bundle size and identify optimization opportunities

### Priority / Urgency
Low - Nice to have for performance optimization, not blocking

### Research / Investigation
Research bundle analysis tools for Astro:
- @rollup/plugin-visualizer (built-in with Rollup)
- webpack-bundle-analyzer alternatives
- Astro-specific bundle analysis
- Bundle size thresholds and goals

### Related Files
- `package.json`
- `astro.config.mjs`

### Definition of Done
Bundle analysis tool configured and integrated into build process, allowing visualization and analysis of JavaScript bundle sizes to identify optimization opportunities.

### Acceptance Criteria
- Bundle analyzer package installed
- Bundle analyzer configured in Astro config
- Bundle analysis script added to package.json
- Bundle report generates successfully
- Bundle sizes are reasonable

### Out of Scope
- Optimizing bundle sizes (follow-up task)
- Setting automated bundle size thresholds
- CI/CD integration for bundle analysis

### Dependencies
None

### Estimated Effort
1-2 hours

### Testing Requirements
- Run bundle analysis script
- Verify report generates
- Review bundle sizes

### Validation Steps
1. Install bundle analyzer package
2. Configure in astro.config.mjs
3. Add script to package.json
4. Run build with bundle analysis
5. Review generated report
6. Identify large bundles for future optimization

### Strict Rules
- Must not significantly impact build time
- Must not break existing build process
- Must provide useful visualization

### Existing Code Patterns
No existing bundle analysis patterns.

### Advanced Code Patterns
- Configure bundle analyzer for production builds only
- Set up automated bundle size reporting
- Use bundle analysis to guide optimization priorities

### Anti-Patterns
- Do not use bundle analyzer in development (slow builds)
- Do not obsess over small bundle size differences
- Do not optimize prematurely without profiling

---

## TASK-017: Add performance monitoring
[ ] 🟡 Pending 🟢 Low

- [ ] TASK-017-01: Install Lighthouse CI or similar performance monitoring tool
- [ ] TASK-017-02: Configure Lighthouse CI for the project
- [ ] TASK-017-03: Add performance monitoring script to `package.json`
- [ ] TASK-017-04: Run initial performance audit
- [ ] TASK-017-05: Document performance baseline and goals

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
[ ] 🟡 Pending 🟢 Low

- [ ] TASK-018-01: Install axe-core or Playwright accessibility testing
- [ ] TASK-018-02: Configure accessibility testing in test suite
- [ ] TASK-018-03: Create accessibility test file for key pages
- [ ] TASK-018-04: Run accessibility tests and document results
- [ ] TASK-018-05: Fix critical accessibility issues found

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
[ ] 🟡 Pending 🟢 Low

- [ ] TASK-019-01: Create `src/constants/index.ts` for shared constants
- [ ] TASK-019-02: Move repeated values (site name, URLs, etc.) to constants file
- [ ] TASK-019-03: Update components to import from constants file
- [ ] TASK-019-04: Update pages to import from constants file
- [ ] TASK-019-05: Verify site still functions correctly

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
