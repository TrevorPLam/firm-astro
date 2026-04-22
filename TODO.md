# UI/UX Improvement Tasks

## TASK-001: Add ARIA attributes to FAQ accordion
[ ] 🟡 Pending 🔴 High

- [ ] TASK-001-01: Add `aria-expanded` attribute to accordion button in `src/components/FAQAccordion.tsx`
- [ ] TASK-001-02: Add `aria-controls` attribute to accordion button in `src/components/FAQAccordion.tsx`
- [ ] TASK-001-03: Add unique `id` to accordion content div in `src/components/FAQAccordion.tsx`
- [ ] TASK-001-04: Test accordion with screen reader

### Priority / Urgency
High - Critical accessibility issue affecting keyboard and screen reader users

### Research / Investigation
Review WAI-ARIA Authoring Practices 1.2 for accordion pattern: https://www.w3.org/WAI/ARIA/apg/patterns/accordion/

### Related Files
- `src/components/FAQAccordion.tsx`

### Definition of Done
FAQ accordion component has proper ARIA attributes that allow screen readers to understand the expanded/collapsed state of each accordion item. Keyboard users can navigate and interact with the accordion using standard patterns.

### Acceptance Criteria
- Each accordion button has `aria-expanded` set to `true` when open, `false` when closed
- Each accordion button has `aria-controls` pointing to the content div's id
- Each content div has a unique `id` attribute
- Screen reader announces "collapsed" or "expanded" state
- Keyboard navigation works (Enter/Space to toggle, Tab to navigate)

### Out of Scope
- Visual changes to accordion styling
- Multi-select accordion behavior (keep single-item-open pattern)

### Dependencies
None

### Estimated Effort
1-2 hours

### Testing Requirements
- Manual testing with screen reader (NVDA/JAWS)
- Keyboard navigation testing
- No automated tests required (visual/behavioral component)

### Validation Steps
1. Open FAQ page with screen reader enabled
2. Navigate to first accordion item
3. Verify screen reader announces "collapsed" or "expanded" state
4. Press Enter/Space to toggle
5. Verify state announcement updates
6. Tab through all accordion items
7. Verify each item can be toggled independently

### Strict Rules
- Must maintain existing single-item-open behavior
- Must not break existing animations
- Must use unique IDs that won't conflict with other components

### Existing Code Patterns
```tsx
<button
  onClick={() => toggleItem(index)}
  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
>
```

### Advanced Code Patterns
- Use `useId` hook for generating unique IDs in React 18+
- Consider `useMemo` for ID generation if performance concerns arise

### Anti-Patterns
- Do not use hardcoded IDs that may conflict
- Do not add role="button" to native button elements
- Do not use aria-pressed for accordion (use aria-expanded instead)

---

## TASK-002: Add proper form error accessibility attributes
[ ] 🟡 Pending 🔴 High

- [ ] TASK-002-01: Add `aria-describedby` to error inputs in `src/components/ContactForm.tsx`
- [ ] TASK-002-02: Add `aria-invalid` to error inputs in `src/components/ContactForm.tsx`
- [ ] TASK-002-03: Add unique `id` to error message paragraphs in `src/components/ContactForm.tsx`
- [ ] TASK-002-04: Test form with screen reader

### Priority / Urgency
High - Critical accessibility issue affecting form usability for assistive technology users

### Research / Investigation
Review WCAG 2.1 Level A success criterion 3.3.1 (Error Identification) and WAI-ARIA form practices

### Related Files
- `src/components/ContactForm.tsx`

### Definition of Done
Contact form has proper ARIA attributes that associate error messages with their corresponding inputs, allowing screen readers to announce errors when invalid fields receive focus.

### Acceptance Criteria
- Each input with an error has `aria-describedby` pointing to the error message id
- Each invalid input has `aria-invalid="true"`
- Each error message paragraph has a unique `id` attribute
- Screen reader announces error when focus moves to invalid field
- Error IDs are dynamically generated based on field name

### Out of Scope
- Visual changes to error styling
- Form validation logic changes
- Success message accessibility (separate task)

### Dependencies
None

### Estimated Effort
1-2 hours

### Testing Requirements
- Manual testing with screen reader
- Form validation testing with various error scenarios
- No automated tests required

### Validation Steps
1. Navigate to contact page
2. Submit form without required fields
3. Verify errors appear visually
4. Tab to first error field
5. Verify screen reader announces the error message
6. Fix the error and verify aria-invalid updates to "false"
7. Repeat for all errorable fields

### Strict Rules
- Must maintain existing validation logic
- Must not break existing error clearing behavior
- Error IDs must be unique per form instance

### Existing Code Patterns
```tsx
<input
  type="text"
  id="name"
  name="name"
  value={formData.name}
  onChange={handleChange}
  className="..."
/>
{errors.name && (
  <p className="mt-1 text-sm text-red-400">{errors.name}</p>
)}
```

### Advanced Code Patterns
- Generate error IDs dynamically: `id={`${fieldName}-error`}`
- Use `useRef` for direct DOM manipulation if needed for ARIA updates

### Anti-Patterns
- Do not use aria-invalid on valid fields
- Do not hardcode error IDs that may conflict
- Do not use aria-errormessage (deprecated, use aria-describedby instead)

---

## TASK-003: Add skip-to-content navigation link
[ ] 🟡 Pending 🔴 High

- [ ] TASK-003-01: Create skip link component in `src/components/SkipLink.astro`
- [ ] TASK-003-02: Add skip link to BaseLayout in `src/layouts/BaseLayout.astro`
- [ ] TASK-003-03: Style skip link to be hidden until focused
- [ ] TASK-003-04: Test skip link with keyboard

### Priority / Urgency
High - Critical accessibility feature for keyboard users, WCAG 2.1 Level A requirement

### Research / Investigation
Review WCAG 2.1 Success Criterion 2.4.1 (Bypass Blocks) and skip link best practices

### Related Files
- `src/layouts/BaseLayout.astro`
- `src/styles/global.css`

### Definition of Done
A skip-to-content link is present at the top of the page that allows keyboard users to bypass navigation and jump directly to the main content. The link is visually hidden until focused.

### Acceptance Criteria
- Skip link appears as first focusable element on page
- Link is visually hidden (positioned off-screen) until Tab brings focus
- When focused, link becomes visible and prominently styled
- Link jumps to main content when activated
- Focus lands on main content after skip
- Works consistently across all pages

### Out of Scope
- Skip links for specific sections (e.g., skip to footer)
- Multiple skip links

### Dependencies
None

### Estimated Effort
2-3 hours

### Testing Requirements
- Keyboard navigation testing across all pages
- Screen reader testing
- Cross-browser testing

### Validation Steps
1. Load any page in the application
2. Press Tab key
3. Verify skip link receives focus and becomes visible
4. Press Enter to activate
5. Verify focus moves to main content
6. Verify screen reader announces skip link purpose
7. Test on multiple pages

### Strict Rules
- Must be first element in DOM
- Must use `href="#main"` or similar anchor
- Main content must have matching `id="main"` attribute
- Must not interfere with existing layout

### Existing Code Patterns
```html
<main class="relative">
  <slot />
</main>
```

### Advanced Code Patterns
- Use CSS `:focus-within` for enhanced visibility
- Consider `scroll-margin-top` to account for fixed header
- Use `prefers-reduced-motion` media query for skip animation

### Anti-Patterns
- Do not use JavaScript for skip link behavior
- Do not hide skip link with `display: none` (must remain focusable)
- Do not place skip link after other interactive elements

---

## TASK-004: Implement mobile menu accessibility improvements
[ ] 🟡 Pending 🔴 High

- [ ] TASK-004-01: Add `aria-expanded` to mobile menu button in `src/components/Header.astro`
- [ ] TASK-004-02: Add `aria-controls` to mobile menu button in `src/components/Header.astro`
- [ ] TASK-004-03: Add `id` to mobile menu container in `src/components/Header.astro`
- [ ] TASK-004-04: Implement Escape key to close menu in `src/components/Header.astro`
- [ ] TASK-004-05: Implement focus trap when menu is open in `src/components/Header.astro`
- [ ] TASK-004-06: Close menu on route change in `src/components/Header.astro`
- [ ] TASK-004-07: Test mobile menu with keyboard and screen reader

### Priority / Urgency
High - Critical accessibility issue affecting mobile and keyboard users

### Research / Investigation
Review WAI-ARIA menu pattern and focus trap implementation patterns

### Related Files
- `src/components/Header.astro`

### Definition of Done
Mobile menu has proper ARIA attributes, keyboard support (Escape to close), focus trap when open, and closes automatically on route changes. Screen readers can understand menu state and navigate properly.

### Acceptance Criteria
- Menu button has `aria-expanded` reflecting current state
- Menu button has `aria-controls` pointing to menu container
- Menu container has unique `id`
- Escape key closes menu when open
- Focus is trapped within menu when open (Tab cycles through menu items)
- Focus returns to menu button when menu closes
- Menu closes when navigating to a new page
- Screen reader announces "menu expanded/collapsed"

### Out of Scope
- Visual changes to mobile menu styling
- Desktop menu accessibility (already has proper semantics)

### Dependencies
None

### Estimated Effort
3-4 hours

### Testing Requirements
- Keyboard navigation testing
- Screen reader testing
- Mobile device testing
- Route change testing

### Validation Steps
1. Open site on mobile viewport
2. Tap menu button to open
3. Verify aria-expanded="true"
4. Press Escape - verify menu closes
5. Open menu again
6. Tab through menu items - verify focus stays in menu
7. Activate a menu link
8. Verify menu closes on new page load
9. Test with screen reader

### Strict Rules
- Must maintain existing click-outside-to-close behavior
- Must not break mobile menu animations
- Focus trap must be properly implemented (not just Tab key listener)

### Existing Code Patterns
```astro
<button
  id="mobile-menu-btn"
  class="lg:hidden p-2 text-gray-300 hover:text-white"
  aria-label="Toggle menu"
>
```

### Advanced Code Patterns
- Use `focusin` and `focusout` events for robust focus trap
- Consider using a reusable focus trap hook/component
- Use `requestAnimationFrame` for focus management timing

### Anti-Patterns
- Do not use `e.preventDefault()` on Escape without checking menu state
- Do not trap focus when menu is closed
- Do not use aria-hidden on menu when it should be accessible

---

## TASK-005: Add skeleton loaders for dynamic content
[ ] 🟡 Pending 🟡 Medium

- [ ] TASK-005-01: Create SkeletonCard component in `src/components/SkeletonCard.astro`
- [ ] TASK-005-02: Add skeleton loading state to case studies in `src/pages/index.astro`
- [ ] TASK-005-03: Add skeleton loading state to blog posts in `src/pages/blog/index.astro`
- [ ] TASK-005-04: Test skeleton loaders with slow network

### Priority / Urgency
Medium - Improves perceived performance and user experience

### Research / Investigation
Review existing skeleton pattern in global.css (`.skeleton` class) and content collection loading patterns

### Related Files
- `src/styles/global.css`
- `src/pages/index.astro`
- `src/pages/blog/index.astro`
- `src/components/CaseStudyCard.astro`

### Definition of Done
Skeleton loaders are displayed while dynamic content (case studies, blog posts) is being loaded, providing visual feedback and improving perceived performance.

### Acceptance Criteria
- Skeleton card component matches dimensions of real cards
- Skeleton displays immediately when content is loading
- Skeleton smoothly transitions to real content when loaded
- Skeleton uses pulse animation from existing `.skeleton` class
- Works for both case studies and blog posts
- No layout shift when skeleton is replaced with content

### Out of Scope
- Skeleton loaders for static content
- Skeleton loaders for images (use existing loading="lazy")

### Dependencies
None

### Estimated Effort
2-3 hours

### Testing Requirements
- Visual testing with slow network (Chrome DevTools throttling)
- No automated tests required

### Validation Steps
1. Open Chrome DevTools Network tab
2. Throttle network to "Slow 3G"
3. Navigate to homepage
4. Verify skeleton loaders appear before case studies load
5. Verify smooth transition to real content
6. Repeat for blog index page
7. Verify no layout shift during transition

### Strict Rules
- Must use existing `.skeleton` class for consistency
- Skeleton dimensions must match final content exactly
- Must not add significant bundle size

### Existing Code Patterns
```css
.skeleton {
  @apply animate-pulse bg-white/10 rounded;
}
```

### Advanced Code Patterns
- Use Astro's `<ViewTransition>` for smooth transitions
- Consider using content collection `loading` state if available
- Use CSS aspect-ratio for consistent skeleton dimensions

### Anti-Patterns
- Do not use hardcoded heights that may not match content
- Do not remove skeleton before content is actually ready
- Do not use different animation timing than existing skeleton

---

## TASK-006: Add React error boundaries
[ ] 🟡 Pending 🟡 Medium

- [ ] TASK-006-01: Create ErrorBoundary component in `src/components/ErrorBoundary.tsx`
- [ ] TASK-006-02: Wrap ContactForm with ErrorBoundary in `src/pages/contact.astro`
- [ ] TASK-006-03: Wrap FAQAccordion with ErrorBoundary in `src/pages/contact.astro`
- [ ] TASK-006-04: Wrap CaseStudyFilter with ErrorBoundary in work pages
- [ ] TASK-006-05: Test error boundary with intentional error

### Priority / Urgency
Medium - Improves error handling and prevents white screen of death

### Research / Investigation
Review React error boundary best practices and Astro React integration

### Related Files
- `src/components/ContactForm.tsx`
- `src/components/FAQAccordion.tsx`
- `src/components/CaseStudyFilter.tsx`
- `src/pages/contact.astro`

### Definition of Done
React error boundaries wrap all interactive React components, catching JavaScript errors and displaying a fallback UI instead of crashing the entire page.

### Acceptance Criteria
- ErrorBoundary component displays user-friendly error message
- ErrorBoundary provides "Try again" button to reset component
- ErrorBoundary logs error details to console
- All React components are wrapped with ErrorBoundary
- Error in one component doesn't break other parts of page
- Error boundary styling matches site design (glass-card)

### Out of Scope
- Error logging to external services
- Error reporting to backend
- Error boundaries for Astro components (server-side)

### Dependencies
None

### Estimated Effort
2-3 hours

### Testing Requirements
- Manual testing by introducing errors
- No automated tests required

### Validation Steps
1. Add temporary error to ContactForm (throw new Error)
2. Navigate to contact page
3. Verify ErrorBoundary displays instead of white screen
4. Verify error is logged to console
5. Click "Try again" - verify component resets
6. Remove temporary error
7. Repeat for FAQAccordion and CaseStudyFilter

### Strict Rules
- Must not break existing component functionality
- Error message must be user-friendly (not technical)
- Must maintain component state when possible (reset on retry)

### Existing Code Patterns
```tsx
<ContactForm client:load />
```

### Advanced Code Patterns
- Use class component for ErrorBoundary (React requirement)
- Consider using errorInfo.componentStack for debugging
- Add error context for global error handling

### Anti-Patterns
- Do not use functional component for ErrorBoundary (not supported)
- Do not catch errors in event handlers (use try-catch instead)
- Do not display raw error messages to users

---

## TASK-007: Enhance focus indicators for interactive elements
[ ] 🟡 Pending 🟡 Medium

- [ ] TASK-007-01: Add consistent focus ring to all interactive elements in global.css
- [ ] TASK-007-02: Ensure focus ring is visible on dark background in global.css
- [ ] TASK-007-03: Test focus indicators with keyboard navigation

### Priority / Urgency
Medium - Improves accessibility for keyboard users

### Research / Investigation
Review WCAG 2.1 Success Criterion 2.4.7 (Focus Visible) and existing `.focus-ring` utility

### Related Files
- `src/styles/global.css`
- `src/components/Button.astro`

### Definition of Done
All interactive elements have visible, consistent focus indicators that meet WCAG 2.1 Level AA requirements (3:1 contrast ratio against background).

### Acceptance Criteria
- Focus ring is visible on all buttons, links, and form inputs
- Focus ring has 3:1 contrast ratio against dark background
- Focus ring is consistent across all components
- Focus ring does not rely solely on color change (includes outline/ring)
- Focus ring is visible in both light and dark contexts (though site is dark-only)

### Out of Scope
- Focus indicators for non-interactive elements
- Custom focus indicators that deviate from standard pattern

### Dependencies
None

### Estimated Effort
1-2 hours

### Testing Requirements
- Keyboard navigation testing across all pages
- Contrast ratio verification
- Cross-browser testing

### Validation Steps
1. Tab through homepage interactive elements
2. Verify each element shows visible focus ring
3. Verify focus ring has sufficient contrast
4. Repeat on contact page, blog page, services page
5. Test in multiple browsers (Chrome, Firefox, Safari)

### Strict Rules
- Must not remove focus indicators for mouse users
- Must use existing `.focus-ring` utility where applicable
- Must not break existing hover states

### Existing Code Patterns
```css
.focus-ring {
  @apply focus:outline-none focus:ring-2 focus:ring-electric-500 focus:ring-offset-2 focus:ring-offset-dark-900;
}
```

### Advanced Code Patterns
- Use `:focus-visible` instead of `:focus` to avoid showing focus for mouse clicks
- Consider `:focus-within` for container focus states
- Use CSS custom properties for focus ring customization

### Anti-Patterns
- Do not use `outline: none` without providing alternative focus indicator
- Do not rely on color change alone for focus indication
- Do not use focus indicators that are too subtle

---

## TASK-008: Add dark mode toggle with system preference
[ ] 🟡 Pending 🟢 Low

- [ ] TASK-008-01: Create ThemeToggle component in `src/components/ThemeToggle.astro`
- [ ] TASK-008-02: Add theme toggle to Header in `src/components/Header.astro`
- [ ] TASK-008-03: Implement theme preference in localStorage
- [ ] TASK-008-04: Detect system preference on first visit
- [ ] TASK-008-05: Remove hard-coded dark mode from BaseLayout in `src/layouts/BaseLayout.astro`
- [ ] TASK-008-06: Test theme toggle functionality

### Priority / Urgency
Low - Nice-to-have feature, site currently works well with dark mode only

### Research / Investigation
Review color scheme meta tag usage and localStorage best practices for theme persistence

### Related Files
- `src/layouts/BaseLayout.astro`
- `src/components/Header.astro`
- `src/styles/global.css`

### Definition of Done
Users can toggle between light and dark modes. Theme preference persists in localStorage. System preference is detected on first visit. Site works well in both themes.

### Acceptance Criteria
- Theme toggle button present in header
- Toggle switches between light and dark mode
- Theme preference saved to localStorage
- System preference detected on first visit (no localStorage)
- Site colors work in both light and dark modes
- Theme applies immediately without page reload
- Toggle icon reflects current theme

### Out of Scope
- Automatic theme switching based on time of day
- Custom theme colors beyond light/dark
- Theme-specific content or images

### Dependencies
- May require color palette adjustments for light mode compatibility

### Estimated Effort
4-6 hours

### Testing Requirements
- Manual testing of theme toggle
- localStorage testing
- System preference testing
- Cross-browser testing

### Validation Steps
1. Clear localStorage
2. Visit site with system in dark mode
3. Verify site loads in dark mode
4. Toggle to light mode
5. Verify theme changes and preference saves
6. Refresh page - verify light mode persists
7. Toggle back to dark mode
8. Verify preference updates
9. Test with system in light mode (clear localStorage first)

### Strict Rules
- Must maintain existing dark mode as default
- Must not break existing design in dark mode
- Light mode must have sufficient contrast ratios

### Existing Code Patterns
```html
<html lang="en" class="dark">
```

### Advanced Code Patterns
- Use `prefers-color-scheme` media query for system detection
- Consider using a theme context for React components
- Use View Transitions API for smooth theme switching

### Anti-Patterns
- Do not use cookies for theme preference (localStorage is sufficient)
- Do not force page reload for theme change
- Do not assume dark mode is always preferred

---

## TASK-009: Implement site-wide search functionality
[ ] 🟡 Pending 🟢 Low

- [ ] TASK-009-01: Design search data structure for content indexing
- [ ] TASK-009-02: Create SearchModal component in `src/components/SearchModal.tsx`
- [ ] TASK-009-03: Add keyboard shortcut (Cmd/Ctrl + K) to trigger search
- [ ] TASK-009-04: Add search button to Header in `src/components/Header.astro`
- [ ] TASK-009-05: Index blog posts and case studies for search
- [ ] TASK-009-06: Implement fuzzy search algorithm
- [ ] TASK-009-07: Test search functionality

### Priority / Urgency
Low - Nice-to-have feature for content discovery

### Research / Investigation
Evaluate search libraries (fuse.js, lunr.js) vs. custom implementation

### Related Files
- `src/components/Header.astro`
- `src/content/config.ts`
- All content collection files

### Definition of Done
Users can search blog posts and case studies using a modal search interface. Search is triggered via keyboard shortcut (Cmd/Ctrl + K) or header button. Search uses fuzzy matching for typos.

### Acceptance Criteria
- Search modal opens with Cmd/Ctrl + K
- Search button in header also opens modal
- Search indexes blog posts and case studies
- Search uses fuzzy matching (tolerates typos)
- Search results highlight matching terms
- Keyboard navigation within search results
- Modal closes on Escape or click outside
- Empty state shows helpful message

### Out of Scope
- Full-text search within page content
- Search filters (by category, date, etc.)
- Search analytics
- Search suggestions/autocomplete

### Dependencies
May require adding search library (fuse.js recommended)

### Estimated Effort
8-12 hours

### Testing Requirements
- Manual testing of search functionality
- Keyboard shortcut testing
- Search accuracy testing with various queries

### Validation Steps
1. Press Cmd/Ctrl + K - verify modal opens
2. Type search query - verify results appear
3. Test with typos - verify fuzzy matching works
4. Navigate results with arrow keys
5. Press Enter on result - verify navigation
6. Press Escape - verify modal closes
7. Test with no results - verify empty state
8. Test search button in header

### Strict Rules
- Must be performant (index on build, search client-side)
- Must not block initial page load
- Must work without JavaScript (graceful degradation)

### Existing Code Patterns
```astro
<button
  id="mobile-menu-btn"
  class="lg:hidden p-2 text-gray-300 hover:text-white"
  aria-label="Toggle menu"
>
```

### Advanced Code Patterns
- Use Astro's build-time content collection API for indexing
- Consider using Web Workers for search computation
- Implement debouncing for search input

### Anti-Patterns
- Do not fetch search index on every page load
- Do not use server-side search for static site
- Do not show search results before user types

---

## TASK-010: Add announcement for form success to screen readers
[ ] 🟡 Pending 🟡 Medium

- [ ] TASK-010-01: Add `role="alert"` to success message in `src/components/ContactForm.tsx`
- [ ] TASK-010-02: Add `aria-live="polite"` to success message container in `src/components/ContactForm.tsx`
- [ ] TASK-010-03: Test success message with screen reader

### Priority / Urgency
Medium - Important accessibility improvement for form feedback

### Research / Investigation
Review WAI-ARIA live regions and alert roles

### Related Files
- `src/components/ContactForm.tsx`

### Definition of Done
When form submission succeeds, the success message is announced to screen reader users, providing clear feedback that the message was sent.

### Acceptance Criteria
- Success message container has `role="alert"` or `aria-live="polite"`
- Success message is announced when it appears
- Screen reader announces "Message Sent" and confirmation text
- Announcement does not interrupt user's current task (use polite, not assertive)

### Out of Scope
- Success message visual changes
- Error message announcements (covered in TASK-002)

### Dependencies
TASK-002 (form error accessibility) - should be done together for complete form accessibility

### Estimated Effort
30 minutes - 1 hour

### Testing Requirements
- Screen reader testing
- Form submission testing

### Validation Steps
1. Navigate to contact page with screen reader
2. Fill out form correctly
3. Submit form
4. Verify screen reader announces success message
5. Verify announcement is polite (doesn't interrupt)

### Strict Rules
- Must not use `aria-live="assertive"` (too disruptive)
- Must maintain existing success message styling

### Existing Code Patterns
```tsx
if (isSubmitted) {
  return (
    <div className="glass-card p-8 text-center">
      <h3 className="font-display text-2xl font-bold text-white mb-2">Message Sent!</h3>
      <p className="text-gray-400">
        Thank you for reaching out. We'll get back to you within 24 hours.
      </p>
    </div>
  );
}
```

### Advanced Code Patterns
- Consider using a separate component for accessible announcements
- Use `aria-atomic="true"` if message has multiple parts

### Anti-Patterns
- Do not use both role="alert" and aria-live (redundant)
- Do not place live region on elements that update frequently
- Do not use assertive live regions for non-critical messages

---

## TASK-011: Add custom arrow indicators to select dropdowns
[ ] 🟡 Pending 🟢 Low

- [ ] TASK-011-01: Create custom select wrapper component or CSS class
- [ ] TASK-011-02: Add custom arrow SVG to service select in `src/components/ContactForm.tsx`
- [ ] TASK-011-03: Add custom arrow SVG to industry select in `src/components/CaseStudyFilter.tsx`
- [ ] TASK-011-04: Add custom arrow SVG to service select in `src/components/CaseStudyFilter.tsx`
- [ ] TASK-011-05: Test custom arrows across browsers

### Priority / Urgency
Low - Visual enhancement for consistency

### Research / Investigation
Review cross-browser select dropdown styling limitations

### Related Files
- `src/components/ContactForm.tsx`
- `src/components/CaseStudyFilter.tsx`
- `src/styles/global.css`

### Definition of Done
All select dropdowns have custom arrow indicators that match the site's design language, replacing default browser arrows which can be inconsistent or invisible.

### Acceptance Criteria
- Custom arrow SVG appears on all select dropdowns
- Arrow rotates when dropdown is open (if possible with CSS)
- Arrow color matches electric blue accent
- Arrow works consistently across browsers
- Arrow is positioned correctly on right side of select
- Default browser arrow is hidden (appearance-none)

### Out of Scope
- Custom dropdown implementations (replacing native select)
- Multi-select functionality

### Dependencies
None

### Estimated Effort
1-2 hours

### Testing Requirements
- Cross-browser testing (Chrome, Firefox, Safari, Edge)
- Mobile browser testing

### Validation Steps
1. Open contact page in Chrome
2. Verify custom arrow on service dropdown
3. Click dropdown - verify arrow visibility
4. Repeat in Firefox, Safari, Edge
5. Test on mobile browsers

### Strict Rules
- Must maintain existing select functionality
- Must not break keyboard navigation of selects
- Must use existing electric blue color

### Existing Code Patterns
```tsx
<select
  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-electric-500 focus:ring-1 focus:ring-electric-500 transition-colors appearance-none cursor-pointer"
>
```

### Advanced Code Patterns
- Use CSS `background-image` with SVG data URI for arrow
- Consider using a reusable Select component
- Use `:focus-within` to style arrow on focus

### Anti-Patterns
- Do not use JavaScript to toggle arrow rotation (CSS is sufficient)
- Do not hide the arrow completely without replacement
- Do not use different arrow styles across the site

---

## TASK-012: Optimize reading progress performance
[ ] 🟡 Pending 🟢 Low

- [ ] TASK-012-01: Add throttling to scroll event listener in `src/components/ReadingProgress.astro`
- [ ] TASK-012-02: Use requestAnimationFrame for progress updates in `src/components/ReadingProgress.astro`
- [ ] TASK-012-03: Test performance with Chrome DevTools Performance tab

### Priority / Urgency
Low - Performance optimization, current implementation uses passive listener which is good

### Research / Investigation
Review scroll event optimization patterns and requestAnimationFrame usage

### Related Files
- `src/components/ReadingProgress.astro`

### Definition of Done
Reading progress bar uses optimized scroll event handling with throttling and requestAnimationFrame to minimize performance impact.

### Acceptance Criteria
- Scroll event uses throttling (max 1-2 updates per second)
- Progress updates use requestAnimationFrame
- No jank or frame drops when scrolling
- Progress bar still appears smooth to users
- Passive event listener maintained

### Out of Scope
- Reading progress visual changes
- Reading progress on pages without long content

### Dependencies
None

### Estimated Effort
1 hour

### Testing Requirements
- Performance testing with Chrome DevTools
- Visual testing of progress bar smoothness

### Validation Steps
1. Open Chrome DevTools Performance tab
2. Start recording
3. Scroll through a long blog post
4. Stop recording
5. Verify scroll event handler is not causing frame drops
6. Verify progress bar updates smoothly
7. Check throttling is working (not updating on every scroll event)

### Strict Rules
- Must maintain existing passive event listener
- Must not make progress bar appear choppy
- Must work across all browsers

### Existing Code Patterns
```javascript
window.addEventListener('scroll', updateProgress, { passive: true });
```

### Advanced Code Patterns
- Use a simple throttle function or library
- Consider using Intersection Observer for scroll detection
- Use CSS scroll-driven animations (experimental) as future alternative

### Anti-Patterns
- Do not remove passive event listener
- Do not update progress on every scroll pixel
- Do not use complex debouncing that makes progress bar laggy
