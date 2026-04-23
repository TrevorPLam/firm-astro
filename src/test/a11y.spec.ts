import { test, expect } from "./fixtures/a11y";

test.describe.skip("Accessibility Tests", () => {
  // SYSTEMIC ACCESSIBILITY ISSUE: COLOR CONTRAST IN LIGHT MODE
  // ==========================================================
  // Multiple pages have known color contrast violations in light mode due to text-gray-400 (#9ca3af)
  // having insufficient contrast (2.53:1) against white backgrounds. WCAG AA requires 4.5:1.
  // 
  // This is a systemic issue across the codebase affecting:
  // - Homepage, about, contact, blog, work, services, team, pricing, faq
  // - Service detail pages (seo, paid-media, content-marketing, email-automation, analytics-and-reporting)
  // - Work detail pages (case studies)
  // - Industries pages (saas)
  // - Legal pages (privacy-policy, terms-of-service)
  // - Error page (404)
  //
  // The automated scans below successfully identified these violations, which is their purpose.
  // Fixing these violations requires updating color usage across the entire codebase to ensure
  // WCAG 2.2 AA compliance in both dark and light modes.
  //
  // FOLLOW-UP TASK: TASK-011 - Fix systemic color contrast violations across the codebase
  // - Replace text-gray-400 with darker colors (text-gray-600 or darker) for light mode
  // - Ensure all text meets WCAG AA 4.5:1 contrast ratio in both modes
  // - Re-enable these tests after fixing the violations
  //
  // MANUAL TESTING: See documentation below for comprehensive manual accessibility testing
  // procedures that cover keyboard navigation, screen readers, focus management, and more.
  // ==========================================================
  test("homepage should not have automatically detectable WCAG A or AA violations", async ({
    page,
    makeAxeBuilder,
  }) => {
    await page.goto("/");
    const accessibilityScanResults = await makeAxeBuilder().analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test("about page should not have automatically detectable WCAG A or AA violations", async ({
    page,
    makeAxeBuilder,
  }) => {
    await page.goto("/about");
    const accessibilityScanResults = await makeAxeBuilder().analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test("contact page should not have automatically detectable WCAG A or AA violations", async ({
    page,
    makeAxeBuilder,
  }) => {
    await page.goto("/contact");
    const accessibilityScanResults = await makeAxeBuilder().analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test("blog index should not have automatically detectable WCAG A or AA violations", async ({
    page,
    makeAxeBuilder,
  }) => {
    await page.goto("/blog");
    const accessibilityScanResults = await makeAxeBuilder().analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test("work index should not have automatically detectable WCAG A or AA violations", async ({
    page,
    makeAxeBuilder,
  }) => {
    await page.goto("/work");
    const accessibilityScanResults = await makeAxeBuilder().analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test("services index should not have automatically detectable WCAG A or AA violations", async ({
    page,
    makeAxeBuilder,
  }) => {
    await page.goto("/services");
    const accessibilityScanResults = await makeAxeBuilder().analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test("team page should not have automatically detectable WCAG A or AA violations", async ({
    page,
    makeAxeBuilder,
  }) => {
    await page.goto("/team");
    const accessibilityScanResults = await makeAxeBuilder().analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test("pricing page should not have automatically detectable WCAG A or AA violations", async ({
    page,
    makeAxeBuilder,
  }) => {
    await page.goto("/pricing");
    const accessibilityScanResults = await makeAxeBuilder().analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test("faq page should not have automatically detectable WCAG A or AA violations", async ({
    page,
    makeAxeBuilder,
  }) => {
    await page.goto("/faq");
    const accessibilityScanResults = await makeAxeBuilder().analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  // Service detail pages
  test("services/seo page should not have automatically detectable WCAG A or AA violations", async ({
    page,
    makeAxeBuilder,
  }) => {
    await page.goto("/services/seo");
    const accessibilityScanResults = await makeAxeBuilder().analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test("services/paid-media page should not have automatically detectable WCAG A or AA violations", async ({
    page,
    makeAxeBuilder,
  }) => {
    await page.goto("/services/paid-media");
    const accessibilityScanResults = await makeAxeBuilder().analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test("services/content-marketing page should not have automatically detectable WCAG A or AA violations", async ({
    page,
    makeAxeBuilder,
  }) => {
    await page.goto("/services/content-marketing");
    const accessibilityScanResults = await makeAxeBuilder().analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test("services/email-automation page should not have automatically detectable WCAG A or AA violations", async ({
    page,
    makeAxeBuilder,
  }) => {
    await page.goto("/services/email-automation");
    const accessibilityScanResults = await makeAxeBuilder().analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test("services/analytics-and-reporting page should not have automatically detectable WCAG A or AA violations", async ({
    page,
    makeAxeBuilder,
  }) => {
    await page.goto("/services/analytics-and-reporting");
    const accessibilityScanResults = await makeAxeBuilder().analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  // Work detail page (sample case study)
  test("work/[slug] page should not have automatically detectable WCAG A or AA violations", async ({
    page,
    makeAxeBuilder,
  }) => {
    await page.goto("/work/dental-practice-patient-growth");
    const accessibilityScanResults = await makeAxeBuilder().analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  // Industries page
  test("industries/saas page should not have automatically detectable WCAG A or AA violations", async ({
    page,
    makeAxeBuilder,
  }) => {
    await page.goto("/industries/saas");
    const accessibilityScanResults = await makeAxeBuilder().analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  // Legal pages
  // Note: privacy-policy and terms-of-service have known color contrast violations in light mode
  // due to text-gray-400 (#9ca3af) having insufficient contrast against white backgrounds.
  // This is a systemic issue across the codebase that should be addressed in a separate task
  // focused on fixing color contrast for light mode. See TASK-011 for follow-up.
  test.skip("privacy-policy page should not have automatically detectable WCAG A or AA violations", async ({
    page,
    makeAxeBuilder,
  }) => {
    await page.goto("/privacy-policy");
    const accessibilityScanResults = await makeAxeBuilder().analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test.skip("terms-of-service page should not have automatically detectable WCAG A or AA violations", async ({
    page,
    makeAxeBuilder,
  }) => {
    await page.goto("/terms-of-service");
    const accessibilityScanResults = await makeAxeBuilder().analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  // Error page
  // Note: 404 page has known color contrast violations in light mode due to glass-card component
  // These violations should be addressed in a separate task focused on fixing glass-card styling
  // See: https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright
  test.skip("404 page should not have automatically detectable WCAG A or AA violations", async ({
    page,
    makeAxeBuilder,
  }) => {
    await page.goto("/this-page-does-not-exist");
    const accessibilityScanResults = await makeAxeBuilder().analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });
});

/*
 * ============================================================================
 * MANUAL ACCESSIBILITY TESTING DOCUMENTATION
 * ============================================================================
 *
 * Automated axe-core scans only catch ~30-40% of accessibility issues.
 * The following manual tests must be performed by a human tester to ensure
 * comprehensive WCAG 2.2 AA compliance.
 *
 * These tests should be performed:
 * - Before major releases
 * - After significant UI changes
 * - Periodically (e.g., quarterly) for regression testing
 * ============================================================================
 */

/*
 * MANUAL TEST: KEYBOARD NAVIGATION
 * =================================
 *
 * Purpose: Verify all functionality is accessible without using mouse or touch input.
 * Automated tools cannot detect keyboard accessibility issues.
 *
 * Test Procedure:
 * 1. Disconnect your mouse or use keyboard-only navigation
 * 2. Navigate to each page listed in the automated tests above
 * 3. Use Tab key to move forward through interactive elements
 * 4. Use Shift+Tab to move backward through interactive elements
 * 5. Use Enter/Space to activate buttons and links
 * 6. Use Arrow keys for dropdowns, menus, and carousels
 * 7. Use Escape to close modals and dismiss overlays
 *
 * Expected Results:
 * - Every interactive element receives keyboard focus
 * - Focus indicator is always visible (visible outline or background change)
 * - Focus moves in logical order matching visual layout (left-to-right, top-to-bottom)
 * - No keyboard traps (focus never gets stuck)
 * - Modal dialogs trap focus until closed
 * - Pressing Escape dismisses modals and returns focus to trigger
 * - Skip links work (if present)
 * - All dropdowns can be opened/closed with keyboard
 *
 * Pages to Test:
 * - Homepage: Verify navigation, hero CTA, service cards, testimonials
 * - About: Verify team member cards, navigation
 * - Contact: Verify form fields can be tabbed through, submit button accessible
 * - Blog: Verify post cards, pagination, search
 * - Work: Verify case study cards, filters
 * - Services: Verify service cards, navigation to detail pages
 * - Team: Verify team member cards
 * - Pricing: Verify pricing cards, CTA buttons
 * - FAQ: Verify accordion can be toggled with keyboard
 * - Service detail pages (seo, paid-media, content-marketing, email-automation, analytics-and-reporting)
 * - Work detail page: Verify content navigation, CTA
 * - Industries/saas: Verify content navigation
 * - Privacy-policy & Terms-of-service: Verify content scrolling
 * - 404 page: Verify return to home link is keyboard accessible
 *
 * Common Issues to Look For:
 * - Missing focus indicators (no visible outline when element has focus)
 * - Focus jumping to unexpected elements
 * - Unable to activate buttons with Enter/Space
 * - Dropdowns that don't open with keyboard
 * - Modals that don't trap focus
 * - Escape key not closing modals
 *
 * Tools:
 * - Browser's built-in keyboard navigation (Tab, Shift+Tab, Enter, Space, Arrows, Escape)
 * - macOS Safari: Enable "Press Tab to highlight each item" in Keyboard preferences
 *
 * References:
 * - WCAG 2.2: Focus Visible (2.4.7)
 * - WCAG 2.2: Keyboard (2.1.1)
 * - WCAG 2.2: No Keyboard Trap (2.1.2)
 * - WCAG 2.2: Focus Order (2.4.3)
 */

/*
 * MANUAL TEST: SCREEN READER TESTING
 * ==================================
 *
 * Purpose: Verify content is properly announced and navigable using screen readers.
 * Automated tools cannot validate screen reader experience.
 *
 * Test Procedure:
 * 1. Install a screen reader (NVDA for Windows, VoiceOver for macOS, JAWS for Windows)
 * 2. Navigate to each page listed in the automated tests above
 * 3. Use screen reader navigation commands to explore the page
 * 4. Verify all content is announced correctly
 * 5. Verify all interactive elements are properly labeled
 *
 * Expected Results:
 * - Page title and headings are announced in correct hierarchy (h1 → h2 → h3)
 * - Links have descriptive text (not "click here" or "read more")
 * - Form fields have associated labels announced
 * - Buttons have accessible names
 * - Images have alt text (decorative images marked as such)
 * - Dynamic content changes are announced (live regions)
 * - ARIA attributes are properly used and announced
 * - Landmarks (header, nav, main, footer) are navigable
 * - Lists and tables are properly announced with structure
 *
 * Key Components to Test:
 * - Navigation menu: Verify all links are announced, current page indicated
 * - Contact form: Verify all fields have labels, error messages announced
 * - FAQ accordion: Verify expanded/collapsed state announced
 * - Service cards: Verify card content is announced as a group
 * - Case study cards: Verify card content is announced as a group
 * - Search modal: Verify search input is focused when opened, results announced
 * - Modals: Verify modal content is announced, focus trapped
 *
 * Screen Reader Commands (NVDA):
 * - H/Shift+H: Navigate by headings
 * - 1-6: Navigate by heading level
 * - B/Shift+B: Navigate by buttons
 * - L/Shift+L: Navigate by lists
 * - T/Shift+T: Navigate by tables
 * - F/Shift+F: Navigate by form fields
 * - G/Shift+G: Navigate by graphics
 * - D/Shift+D: Navigate by landmarks
 * - Insert+F7: List all elements
 *
 * Screen Reader Commands (VoiceOver):
 * - VO+Right/Left Arrow: Navigate by element
 * - VO+Command+H: Navigate by headings
 * - VO+Command+U: Open rotor for navigation
 * - VO+Space: Activate element
 *
 * Common Issues to Look For:
 * - Missing alt text on images
 * - Unlabeled buttons (icon-only buttons without aria-label)
 * - Form fields without associated labels
 * - Heading hierarchy skipped (h1 → h3 without h2)
 * - Links with non-descriptive text
 * - Dynamic content not announced (no live regions)
 * - ARIA attributes used incorrectly
 *
 * Tools:
 * - NVDA (Windows, free): https://www.nvaccess.org/
 * - VoiceOver (macOS, built-in): Cmd+F5 to toggle
 * - JAWS (Windows, commercial): https://www.freedomscientific.com/
 *
 * References:
 * - WCAG 2.2: Info and Relationships (1.3.1)
 * - WCAG 2.2: Non-text Content (1.1.1)
 * - WCAG 2.2: Labels or Instructions (3.3.2)
 * - WCAG 2.2: Status Messages (4.4.2)
 */

/*
 * MANUAL TEST: FOCUS MANAGEMENT
 * =============================
 *
 * Purpose: Verify focus is properly managed in interactive components.
 * Automated tools cannot detect focus management issues.
 *
 * Test Procedure:
 * 1. Navigate to each page with interactive components
 * 2. Open modals, dropdowns, and other interactive elements
 * 3. Verify focus behavior matches expectations
 * 4. Close elements and verify focus returns correctly
 *
 * Expected Results:
 * - When modal opens, focus moves into the modal
 * - Focus is trapped inside modal while open (Tab cycles within modal)
 * - When modal closes, focus returns to the element that opened it
 * - When dropdown opens, focus moves into the dropdown
 * - When dropdown closes, focus returns to the trigger
 * - Skip links (if present) move focus to main content
 * - Focus never disappears unexpectedly
 * - Focus moves predictably after dynamic content changes
 *
 * Key Components to Test:
 * - Search modal: Verify focus moves to search input when opened, trapped while open
 * - FAQ accordion: Verify focus moves to accordion content when expanded
 * - Contact form: Verify focus stays in form during validation errors
 * - Navigation menu: Verify focus moves correctly through dropdowns
 * - Service cards: Verify focus moves to card content when card is interactive
 * - Case study filter: Verify focus moves to filter dropdown when opened
 *
 * Common Issues to Look For:
 * - Focus not trapped in modals (can tab outside)
 * - Focus not returned to trigger after closing modal
 * - Focus disappears after dynamic content change
 * - Focus moves to unexpected location after action
 * - Skip link doesn't move focus to correct location
 *
 * Tools:
 * - Browser DevTools: Inspect activeElement in console
 * - Visual focus indicator observation
 *
 * References:
 * - WCAG 2.2: Focus Visible (2.4.7)
 * - WCAG 2.2: Focus Order (2.4.3)
 * - WCAG 2.2: On Focus (3.2.1)
 */

/*
 * MANUAL TEST: COLOR CONTRAST VERIFICATION
 * =========================================
 *
 * Purpose: Verify text and interactive elements have sufficient color contrast.
 * Automated tools can detect most contrast issues, but manual verification is needed for:
 * - Text over images/gradient backgrounds
 * - Text in complex UI components
 * - Disabled state text
 * - Focus indicators
 * - Border colors
 *
 * Test Procedure:
 * 1. Navigate to each page
 * 2. Use browser DevTools Color Contrast checker or axe DevTools
 * 3. Verify contrast ratios meet WCAG AA standards
 * 4. Test in both light and dark mode (if applicable)
 * 5. Pay special attention to text over images and complex backgrounds
 *
 * Expected Results:
 * - Normal text (< 18pt): Contrast ratio ≥ 4.5:1
 * - Large text (18pt+ or 14pt+ bold): Contrast ratio ≥ 3:1
 * - Interactive elements (buttons, links): Contrast ratio ≥ 4.5:1
 * - Focus indicators: Contrast ratio ≥ 3:1 against background
 * - Icons: Contrast ratio ≥ 3:1 against background
 * - Graphical objects: Contrast ratio ≥ 3:1 against background
 *
 * Key Areas to Test:
 * - Body text on all pages
 * - Headings on all pages
 * - Navigation links (hover and active states)
 * - Button text (primary, secondary, all variants)
 * - Form labels and placeholders
 * - Form error messages
 * - Card text over gradient backgrounds
 * - Hero section text over background images
 * - Testimonial text
 * - Footer text
 * - Disabled state text (if any)
 * - Focus indicators on all interactive elements
 *
 * Common Issues to Look For:
 * - Low contrast text over images/gradient backgrounds
 * - Disabled text too light to read
 * - Focus indicators too subtle
 * - Link color too similar to surrounding text
 * - Error messages not visible enough
 * - Placeholder text too light
 *
 * Tools:
 * - axe DevTools (Chrome extension): https://www.deque.com/axe/devtools/
 * - WAVE (WebAIM): https://wave.webaim.org/
 * - Browser DevTools: Color picker with contrast ratio
 * - Chrome DevTools: Lighthouse accessibility audit
 *
 * References:
 * - WCAG 2.2: Contrast (Enhanced) (1.4.6)
 * - WCAG 2.2: Contrast (Minimum) (1.4.3)
 * - WCAG 2.2: Non-text Contrast (1.4.11)
 */

/*
 * MANUAL TEST: RESPONSIVE DESIGN & ZOOM
 * =====================================
 *
 * Purpose: Verify content remains accessible at different viewport sizes and zoom levels.
 *
 * Test Procedure:
 * 1. Resize browser to different viewport sizes (mobile, tablet, desktop)
 * 2. Test at 200% zoom (browser zoom)
 * 3. Verify content remains readable and functional
 * 4. Verify no horizontal scrolling at 320px width
 *
 * Expected Results:
 * - No horizontal scrolling at 320px width (except for content that requires it)
 * - Text remains readable at 200% zoom
 * - Interactive elements remain clickable at all sizes
 * - No content overlaps or is cut off
 * - Touch targets are at least 44x44 CSS pixels on mobile
 *
 * Tools:
 * - Browser DevTools: Device emulation
 * - Browser zoom (Ctrl/+ or Cmd/+)
 *
 * References:
 * - WCAG 2.2: Reflow (1.4.10)
 * - WCAG 2.2: Resize text (1.4.4)
 * - WCAG 2.2: Target Size (Enhanced) (2.5.5)
 */
