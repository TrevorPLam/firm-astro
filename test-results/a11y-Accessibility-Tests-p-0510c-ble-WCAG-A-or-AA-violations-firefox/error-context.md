# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: a11y.spec.ts >> Accessibility Tests >> pricing page should not have automatically detectable WCAG A or AA violations
- Location: src\test\a11y.spec.ts:67:3

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  -   1
+ Received  + 149

- Array []
+ Array [
+   Object {
+     "description": "Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds",
+     "help": "Elements must meet minimum color contrast ratio thresholds",
+     "helpUrl": "https://dequeuniversity.com/rules/axe/4.11/color-contrast?application=playwright",
+     "id": "color-contrast",
+     "impact": "serious",
+     "nodes": Array [
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#93b6fc",
+               "contrastRatio": 1.74,
+               "expectedContrastRatio": "3:1",
+               "fgColor": "#3385ff",
+               "fontSize": "27.0pt (36px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+               "shadowColor": "#6195fd",
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.74 (foreground color: #3385ff, background color: #93b6fc, font size: 27.0pt (36px), font weight: bold). Expected contrast ratio of 3:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"glass-card p-8 card-hover relative\">",
+                 "target": Array [
+                   ".p-8.card-hover.relative:nth-child(1)",
+                 ],
+               },
+               Object {
+                 "html": "<body class=\"min-h-screen bg-light text-light-900 dark:bg-dark-900 dark:text-white\">",
+                 "target": Array [
+                   "body",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.74 (foreground color: #3385ff, background color: #93b6fc, font size: 27.0pt (36px), font weight: bold). Expected contrast ratio of 3:1",
+         "html": "<span class=\"text-4xl font-display font-bold text-electric-400 neon-text\">$2,500</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-8.card-hover.relative:nth-child(1) > .mb-6.text-center > .items-baseline.gap-1.justify-center > .text-4xl.neon-text.font-bold",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#93b6fc",
+               "contrastRatio": 1.74,
+               "expectedContrastRatio": "3:1",
+               "fgColor": "#3385ff",
+               "fontSize": "27.0pt (36px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+               "shadowColor": "#6195fd",
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.74 (foreground color: #3385ff, background color: #93b6fc, font size: 27.0pt (36px), font weight: bold). Expected contrast ratio of 3:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"glass-card p-8 card-hover relative border-electric-500/50 shadow-neon-sm\">",
+                 "target": Array [
+                   ".border-electric-500\\/50",
+                 ],
+               },
+               Object {
+                 "html": "<body class=\"min-h-screen bg-light text-light-900 dark:bg-dark-900 dark:text-white\">",
+                 "target": Array [
+                   "body",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.74 (foreground color: #3385ff, background color: #93b6fc, font size: 27.0pt (36px), font weight: bold). Expected contrast ratio of 3:1",
+         "html": "<span class=\"text-4xl font-display font-bold text-electric-400 neon-text\">$7,500</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".border-electric-500\\/50 > .mb-6.text-center > .items-baseline.gap-1.justify-center > .text-4xl.neon-text.font-bold",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#93b6fc",
+               "contrastRatio": 1.74,
+               "expectedContrastRatio": "3:1",
+               "fgColor": "#3385ff",
+               "fontSize": "27.0pt (36px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+               "shadowColor": "#6195fd",
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.74 (foreground color: #3385ff, background color: #93b6fc, font size: 27.0pt (36px), font weight: bold). Expected contrast ratio of 3:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"glass-card p-8 card-hover relative\">",
+                 "target": Array [
+                   ".p-8.card-hover.relative:nth-child(3)",
+                 ],
+               },
+               Object {
+                 "html": "<body class=\"min-h-screen bg-light text-light-900 dark:bg-dark-900 dark:text-white\">",
+                 "target": Array [
+                   "body",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.74 (foreground color: #3385ff, background color: #93b6fc, font size: 27.0pt (36px), font weight: bold). Expected contrast ratio of 3:1",
+         "html": "<span class=\"text-4xl font-display font-bold text-electric-400 neon-text\">Custom</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-8.card-hover.relative:nth-child(3) > .mb-6.text-center > .items-baseline.gap-1.justify-center > .text-4xl.neon-text.font-bold",
+         ],
+       },
+     ],
+     "tags": Array [
+       "cat.color",
+       "wcag2aa",
+       "wcag143",
+       "TTv5",
+       "TT13.c",
+       "EN-301-549",
+       "EN-9.1.4.3",
+       "ACT",
+       "RGAAv4",
+       "RGAA-3.2.1",
+     ],
+   },
+ ]
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - link "Skip to main content" [ref=e2] [cursor=pointer]:
    - /url: "#main"
  - banner [ref=e3]:
    - navigation [ref=e4]:
      - generic [ref=e5]:
        - link "Y Your Dedicated Marketer" [ref=e6] [cursor=pointer]:
          - /url: /
          - generic [ref=e8]: "Y"
          - generic [ref=e9]: Your Dedicated Marketer
        - generic [ref=e10]:
          - link "Services" [ref=e11] [cursor=pointer]:
            - /url: /services
          - link "Work" [ref=e12] [cursor=pointer]:
            - /url: /work
          - link "About" [ref=e13] [cursor=pointer]:
            - /url: /about
          - link "Blog" [ref=e14] [cursor=pointer]:
            - /url: /blog
          - link "Pricing" [ref=e15] [cursor=pointer]:
            - /url: /pricing
          - link "Contact" [ref=e16] [cursor=pointer]:
            - /url: /contact
          - button "Open search" [ref=e17] [cursor=pointer]:
            - img [ref=e18]
          - button "Toggle theme" [ref=e20] [cursor=pointer]:
            - img [ref=e21]
        - link "Get Started" [ref=e24] [cursor=pointer]:
          - /url: /contact
  - main [ref=e26]:
    - generic [ref=e30]:
      - heading "Simple, Transparent Pricing" [level=1] [ref=e31]
      - paragraph [ref=e32]: Choose the package that fits your growth stage. All plans include dedicated support and monthly strategy sessions.
    - generic [ref=e35]:
      - generic [ref=e36]:
        - generic [ref=e37]:
          - heading "Startup" [level=3] [ref=e38]
          - generic [ref=e39]:
            - generic [ref=e40]: $2,500
            - generic [ref=e41]: /month
          - paragraph [ref=e42]: Perfect for early-stage companies looking to establish their digital presence.
        - list [ref=e43]:
          - listitem [ref=e44]:
            - img [ref=e45]
            - generic [ref=e47]: SEO Foundation Package
          - listitem [ref=e48]:
            - img [ref=e49]
            - generic [ref=e51]: Basic Paid Media Setup
          - listitem [ref=e52]:
            - img [ref=e53]
            - generic [ref=e55]: Monthly Content (4 posts)
          - listitem [ref=e56]:
            - img [ref=e57]
            - generic [ref=e59]: Email Automation Setup
          - listitem [ref=e60]:
            - img [ref=e61]
            - generic [ref=e63]: Monthly Reporting
          - listitem [ref=e64]:
            - img [ref=e65]
            - generic [ref=e67]: Dedicated Account Manager
        - link "Get Started" [ref=e68] [cursor=pointer]:
          - /url: /contact
      - generic [ref=e69]:
        - generic [ref=e70]: Most Popular
        - generic [ref=e71]:
          - heading "Scale-Up" [level=3] [ref=e72]
          - generic [ref=e73]:
            - generic [ref=e74]: $7,500
            - generic [ref=e75]: /month
          - paragraph [ref=e76]: Ideal for growing companies ready to accelerate their marketing efforts.
        - list [ref=e77]:
          - listitem [ref=e78]:
            - img [ref=e79]
            - generic [ref=e81]: Advanced SEO Strategy
          - listitem [ref=e82]:
            - img [ref=e83]
            - generic [ref=e85]: Multi-Channel Paid Media
          - listitem [ref=e86]:
            - img [ref=e87]
            - generic [ref=e89]: Content Marketing (8 posts/mo)
          - listitem [ref=e90]:
            - img [ref=e91]
            - generic [ref=e93]: Advanced Email Automation
          - listitem [ref=e94]:
            - img [ref=e95]
            - generic [ref=e97]: Conversion Rate Optimization
          - listitem [ref=e98]:
            - img [ref=e99]
            - generic [ref=e101]: Weekly Reporting & Strategy Calls
          - listitem [ref=e102]:
            - img [ref=e103]
            - generic [ref=e105]: Priority Support
        - link "Most Popular" [ref=e106] [cursor=pointer]:
          - /url: /contact
      - generic [ref=e107]:
        - generic [ref=e108]:
          - heading "Enterprise" [level=3] [ref=e109]
          - generic [ref=e111]: Custom
          - paragraph [ref=e112]: Comprehensive solutions for established brands with complex needs.
        - list [ref=e113]:
          - listitem [ref=e114]:
            - img [ref=e115]
            - generic [ref=e117]: Full-Service Marketing
          - listitem [ref=e118]:
            - img [ref=e119]
            - generic [ref=e121]: Custom Strategy Development
          - listitem [ref=e122]:
            - img [ref=e123]
            - generic [ref=e125]: Unlimited Content Production
          - listitem [ref=e126]:
            - img [ref=e127]
            - generic [ref=e129]: Marketing Automation Suite
          - listitem [ref=e130]:
            - img [ref=e131]
            - generic [ref=e133]: Advanced Analytics & BI
          - listitem [ref=e134]:
            - img [ref=e135]
            - generic [ref=e137]: Dedicated Team
          - listitem [ref=e138]:
            - img [ref=e139]
            - generic [ref=e141]: 24/7 Priority Support
          - listitem [ref=e142]:
            - img [ref=e143]
            - generic [ref=e145]: Quarterly Business Reviews
        - link "Contact Us" [ref=e146] [cursor=pointer]:
          - /url: /contact
    - generic [ref=e151]:
      - heading "Need a Custom Solution?" [level=2] [ref=e152]
      - paragraph [ref=e153]: We understand that every business is unique. Let's create a tailored package that fits your specific needs and budget.
      - link "Request Custom Quote" [ref=e154] [cursor=pointer]:
        - /url: /contact
    - generic [ref=e157]:
      - heading "Pricing FAQ" [level=2] [ref=e158]
      - generic [ref=e161]:
        - generic [ref=e162]:
          - button "Are there any setup fees?" [ref=e163] [cursor=pointer]:
            - generic [ref=e164]: Are there any setup fees?
            - img [ref=e165]
          - generic [ref=e167]: We charge a one-time setup fee of $500 for Startup and Scale-Up packages to cover initial strategy development and account configuration. Enterprise clients have custom arrangements.
        - generic [ref=e168]:
          - button "Can I switch between packages?" [ref=e169] [cursor=pointer]:
            - generic [ref=e170]: Can I switch between packages?
            - img [ref=e171]
          - generic [ref=e173]: Yes, you can upgrade or downgrade your package at any time. Changes take effect at the start of the next billing cycle. We'll work with you to ensure a smooth transition.
        - generic [ref=e174]:
          - button "What's the minimum contract length?" [ref=e175] [cursor=pointer]:
            - generic [ref=e176]: What's the minimum contract length?
            - img [ref=e177]
          - generic [ref=e179]: We offer month-to-month flexibility on all packages. However, we recommend a minimum 3-month commitment to see meaningful results from marketing efforts.
        - generic [ref=e180]:
          - button "Do you offer discounts for annual commitments?" [ref=e181] [cursor=pointer]:
            - generic [ref=e182]: Do you offer discounts for annual commitments?
            - img [ref=e183]
          - generic [ref=e185]: Yes! We offer 15% off for 6-month commitments and 25% off for annual commitments. This reflects the value of long-term partnerships.
        - generic [ref=e186]:
          - button "What's not included in the package price?" [ref=e187] [cursor=pointer]:
            - generic [ref=e188]: What's not included in the package price?
            - img [ref=e189]
          - generic [ref=e191]: Advertising spend (Google Ads, Meta Ads, etc.) is separate and paid directly to platforms. Premium tools or software licenses beyond our standard stack may incur additional costs.
        - generic [ref=e192]:
          - button "How do I know which package is right for me?" [ref=e193] [cursor=pointer]:
            - generic [ref=e194]: How do I know which package is right for me?
            - img [ref=e195]
          - generic [ref=e197]: Schedule a free consultation and we'll assess your needs, goals, and budget to recommend the best fit. We'll never upsell you on services you don't need.
  - contentinfo [ref=e198]:
    - generic [ref=e199]:
      - generic [ref=e200]:
        - generic [ref=e201]:
          - link "Y Your Dedicated Marketer" [ref=e202] [cursor=pointer]:
            - /url: /
            - generic [ref=e204]: "Y"
            - generic [ref=e205]: Your Dedicated Marketer
          - paragraph [ref=e206]: AI-powered growth strategies for modern brands. Transform your digital presence with data-driven marketing.
          - generic [ref=e207]:
            - link "Instagram" [ref=e208] [cursor=pointer]:
              - /url: https://instagram.com/YourDedicatedMarketer
              - img [ref=e209]
            - link "Threads" [ref=e211] [cursor=pointer]:
              - /url: https://threads.net/YourDedicatedMarketer
              - img [ref=e212]
            - link "YouTube" [ref=e214] [cursor=pointer]:
              - /url: https://youtube.com/YourDedicatedMarketer
              - img [ref=e215]
        - generic [ref=e217]:
          - heading "Services" [level=4] [ref=e218]
          - list [ref=e219]:
            - listitem [ref=e220]:
              - link "SEO" [ref=e221] [cursor=pointer]:
                - /url: /services/seo
            - listitem [ref=e222]:
              - link "Paid Media" [ref=e223] [cursor=pointer]:
                - /url: /services/paid-media
            - listitem [ref=e224]:
              - link "Content Marketing" [ref=e225] [cursor=pointer]:
                - /url: /services/content-marketing
            - listitem [ref=e226]:
              - link "Email Automation" [ref=e227] [cursor=pointer]:
                - /url: /services/email-automation
            - listitem [ref=e228]:
              - link "Analytics & Reporting" [ref=e229] [cursor=pointer]:
                - /url: /services/analytics-and-reporting
        - generic [ref=e230]:
          - heading "Company" [level=4] [ref=e231]
          - list [ref=e232]:
            - listitem [ref=e233]:
              - link "About Us" [ref=e234] [cursor=pointer]:
                - /url: /about
            - listitem [ref=e235]:
              - link "Our Team" [ref=e236] [cursor=pointer]:
                - /url: /team
            - listitem [ref=e237]:
              - link "Case Studies" [ref=e238] [cursor=pointer]:
                - /url: /work
            - listitem [ref=e239]:
              - link "Blog" [ref=e240] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e241]:
              - link "Careers" [ref=e242] [cursor=pointer]:
                - /url: /careers
        - generic [ref=e243]:
          - heading "Resources" [level=4] [ref=e244]
          - list [ref=e245]:
            - listitem [ref=e246]:
              - link "Pricing" [ref=e247] [cursor=pointer]:
                - /url: /pricing
            - listitem [ref=e248]:
              - link "FAQ" [ref=e249] [cursor=pointer]:
                - /url: /faq
            - listitem [ref=e250]:
              - link "Industries" [ref=e251] [cursor=pointer]:
                - /url: /industries/saas
            - listitem [ref=e252]:
              - link "Contact" [ref=e253] [cursor=pointer]:
                - /url: /contact
        - generic [ref=e254]:
          - heading "Legal" [level=4] [ref=e255]
          - list [ref=e256]:
            - listitem [ref=e257]:
              - link "Privacy Policy" [ref=e258] [cursor=pointer]:
                - /url: /privacy-policy
            - listitem [ref=e259]:
              - link "Terms of Service" [ref=e260] [cursor=pointer]:
                - /url: /terms-of-service
      - generic [ref=e261]:
        - paragraph [ref=e262]: © 2026 Your Dedicated Marketer. All rights reserved.
        - paragraph [ref=e263]: Built with Astro & Tailwind CSS
  - generic [ref=e266]:
    - button "Menu" [ref=e267]:
      - img [ref=e269]
      - generic: Menu
    - button "Inspect" [ref=e273]:
      - img [ref=e275]
      - generic: Inspect
    - button "Audit" [ref=e277]:
      - img [ref=e279]
      - generic: Audit
    - button "Settings" [ref=e282]:
      - img [ref=e284]
      - generic: Settings
```

# Test source

```ts
  1  | import { test, expect } from "./fixtures/a11y";
  2  | 
  3  | test.describe("Accessibility Tests", () => {
  4  |   test("homepage should not have automatically detectable WCAG A or AA violations", async ({
  5  |     page,
  6  |     makeAxeBuilder,
  7  |   }) => {
  8  |     await page.goto("/");
  9  |     const accessibilityScanResults = await makeAxeBuilder().analyze();
  10 |     expect(accessibilityScanResults.violations).toEqual([]);
  11 |   });
  12 | 
  13 |   test("about page should not have automatically detectable WCAG A or AA violations", async ({
  14 |     page,
  15 |     makeAxeBuilder,
  16 |   }) => {
  17 |     await page.goto("/about");
  18 |     const accessibilityScanResults = await makeAxeBuilder().analyze();
  19 |     expect(accessibilityScanResults.violations).toEqual([]);
  20 |   });
  21 | 
  22 |   test("contact page should not have automatically detectable WCAG A or AA violations", async ({
  23 |     page,
  24 |     makeAxeBuilder,
  25 |   }) => {
  26 |     await page.goto("/contact");
  27 |     const accessibilityScanResults = await makeAxeBuilder().analyze();
  28 |     expect(accessibilityScanResults.violations).toEqual([]);
  29 |   });
  30 | 
  31 |   test("blog index should not have automatically detectable WCAG A or AA violations", async ({
  32 |     page,
  33 |     makeAxeBuilder,
  34 |   }) => {
  35 |     await page.goto("/blog");
  36 |     const accessibilityScanResults = await makeAxeBuilder().analyze();
  37 |     expect(accessibilityScanResults.violations).toEqual([]);
  38 |   });
  39 | 
  40 |   test("work index should not have automatically detectable WCAG A or AA violations", async ({
  41 |     page,
  42 |     makeAxeBuilder,
  43 |   }) => {
  44 |     await page.goto("/work");
  45 |     const accessibilityScanResults = await makeAxeBuilder().analyze();
  46 |     expect(accessibilityScanResults.violations).toEqual([]);
  47 |   });
  48 | 
  49 |   test("services index should not have automatically detectable WCAG A or AA violations", async ({
  50 |     page,
  51 |     makeAxeBuilder,
  52 |   }) => {
  53 |     await page.goto("/services");
  54 |     const accessibilityScanResults = await makeAxeBuilder().analyze();
  55 |     expect(accessibilityScanResults.violations).toEqual([]);
  56 |   });
  57 | 
  58 |   test("team page should not have automatically detectable WCAG A or AA violations", async ({
  59 |     page,
  60 |     makeAxeBuilder,
  61 |   }) => {
  62 |     await page.goto("/team");
  63 |     const accessibilityScanResults = await makeAxeBuilder().analyze();
  64 |     expect(accessibilityScanResults.violations).toEqual([]);
  65 |   });
  66 | 
  67 |   test("pricing page should not have automatically detectable WCAG A or AA violations", async ({
  68 |     page,
  69 |     makeAxeBuilder,
  70 |   }) => {
  71 |     await page.goto("/pricing");
  72 |     const accessibilityScanResults = await makeAxeBuilder().analyze();
> 73 |     expect(accessibilityScanResults.violations).toEqual([]);
     |                                                 ^ Error: expect(received).toEqual(expected) // deep equality
  74 |   });
  75 | 
  76 |   test("faq page should not have automatically detectable WCAG A or AA violations", async ({
  77 |     page,
  78 |     makeAxeBuilder,
  79 |   }) => {
  80 |     await page.goto("/faq");
  81 |     const accessibilityScanResults = await makeAxeBuilder().analyze();
  82 |     expect(accessibilityScanResults.violations).toEqual([]);
  83 |   });
  84 | });
  85 | 
```