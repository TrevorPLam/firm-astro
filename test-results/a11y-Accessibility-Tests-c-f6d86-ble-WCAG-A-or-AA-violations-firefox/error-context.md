# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: a11y.spec.ts >> Accessibility Tests >> contact page should not have automatically detectable WCAG A or AA violations
- Location: src\test\a11y.spec.ts:22:3

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  -   1
+ Received  + 439

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
+               "bgColor": "#fafafa",
+               "contrastRatio": 1.04,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#ffffff",
+               "fontSize": "15.0pt (20px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.04 (foreground color: #ffffff, background color: #fafafa, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"glass-card p-8\">",
+                 "target": Array [
+                   ".space-y-8 > .p-8.glass-card:nth-child(1)",
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
+   Element has insufficient color contrast of 1.04 (foreground color: #ffffff, background color: #fafafa, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<h3 class=\"font-display text-xl font-semibold text-white mb-6\">Contact Information</h3>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".text-xl.mb-6",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#fafafa",
+               "contrastRatio": 2.43,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#9ca3af",
+               "fontSize": "10.5pt (14px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafafa, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"glass-card p-8\">",
+                 "target": Array [
+                   ".space-y-8 > .p-8.glass-card:nth-child(1)",
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
+   Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafafa, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<p class=\"text-sm text-gray-400\">Email</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".items-start.gap-4.flex:nth-child(1) > div:nth-child(2) > .text-gray-400",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#fafafa",
+               "contrastRatio": 1.04,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#ffffff",
+               "fontSize": "12.0pt (16px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.04 (foreground color: #ffffff, background color: #fafafa, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"glass-card p-8\">",
+                 "target": Array [
+                   ".space-y-8 > .p-8.glass-card:nth-child(1)",
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
+   Element has insufficient color contrast of 1.04 (foreground color: #ffffff, background color: #fafafa, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"mailto:hello@yourdedicatedmarketer.com\" class=\"text-white hover:text-electric-400 transition-colors\">
+ hello@yourdedicatedmarketer.com
+ </a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".items-start.gap-4.flex:nth-child(1) > div:nth-child(2) > .text-white.hover\\:text-electric-400",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#fafafa",
+               "contrastRatio": 2.43,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#9ca3af",
+               "fontSize": "10.5pt (14px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafafa, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"glass-card p-8\">",
+                 "target": Array [
+                   ".space-y-8 > .p-8.glass-card:nth-child(1)",
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
+   Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafafa, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<p class=\"text-sm text-gray-400\">Phone</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".items-start.gap-4.flex:nth-child(2) > div:nth-child(2) > .text-gray-400",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#fafafa",
+               "contrastRatio": 1.04,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#ffffff",
+               "fontSize": "12.0pt (16px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.04 (foreground color: #ffffff, background color: #fafafa, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"glass-card p-8\">",
+                 "target": Array [
+                   ".space-y-8 > .p-8.glass-card:nth-child(1)",
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
+   Element has insufficient color contrast of 1.04 (foreground color: #ffffff, background color: #fafafa, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"tel:+15551234567\" class=\"text-white hover:text-electric-400 transition-colors\">
+ +1 (555) 123-4567
+ </a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href=\"tel:+15551234567\"]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#fafafa",
+               "contrastRatio": 2.43,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#9ca3af",
+               "fontSize": "10.5pt (14px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafafa, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"glass-card p-8\">",
+                 "target": Array [
+                   ".space-y-8 > .p-8.glass-card:nth-child(1)",
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
+   Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafafa, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<p class=\"text-sm text-gray-400\">Address</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".items-start.gap-4.flex:nth-child(3) > div:nth-child(2) > .text-gray-400",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#fafafa",
+               "contrastRatio": 1.04,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#ffffff",
+               "fontSize": "12.0pt (16px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.04 (foreground color: #ffffff, background color: #fafafa, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"glass-card p-8\">",
+                 "target": Array [
+                   ".space-y-8 > .p-8.glass-card:nth-child(1)",
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
+   Element has insufficient color contrast of 1.04 (foreground color: #ffffff, background color: #fafafa, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<p class=\"text-white\">123 Marketing Street<br>San Francisco, CA 94102</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".items-start.gap-4.flex:nth-child(3) > div:nth-child(2) > p:nth-child(2)",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#fafafa",
+               "contrastRatio": 1.04,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#ffffff",
+               "fontSize": "15.0pt (20px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.04 (foreground color: #ffffff, background color: #fafafa, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"glass-card p-8\">",
+                 "target": Array [
+                   ".p-8.glass-card:nth-child(2)",
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
+   Element has insufficient color contrast of 1.04 (foreground color: #ffffff, background color: #fafafa, font size: 15.0pt (20px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<h3 class=\"font-display text-xl font-semibold text-white mb-4\">Schedule a Call</h3>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-8.glass-card:nth-child(2) > .text-xl",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#fafafa",
+               "contrastRatio": 2.43,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#9ca3af",
+               "fontSize": "10.5pt (14px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafafa, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"glass-card p-8\">",
+                 "target": Array [
+                   ".p-8.glass-card:nth-child(2)",
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
+   Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafafa, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<p class=\"text-gray-400 text-sm mb-6\">
+ Book a free 30-minute consultation to discuss your marketing goals.
+ </p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".text-gray-400.mb-6",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#858585",
+               "contrastRatio": 1.04,
+               "expectedContrastRatio": "3:1",
+               "fgColor": "#3385ff",
+               "fontSize": "18.0pt (24px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.04 (foreground color: #3385ff, background color: #858585, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<section class=\"section bg-dark-800/50\">",
+                 "target": Array [
+                   ".bg-dark-800\\/50",
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
+   Element has insufficient color contrast of 1.04 (foreground color: #3385ff, background color: #858585, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+         "html": "<span class=\"text-electric-400\">Questions</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".mb-8 > .text-electric-400",
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
      - heading "Let's Connect" [level=1] [ref=e31]
      - paragraph [ref=e32]: Ready to transform your digital presence? Fill out the form below or schedule a call directly. We'll respond within 24 hours.
    - generic [ref=e35]:
      - generic [ref=e36]:
        - heading "Send Us a Message" [level=2] [ref=e37]
        - generic [ref=e40]:
          - generic [ref=e41]:
            - generic [ref=e42]: Name *
            - textbox "Name *" [ref=e43]:
              - /placeholder: John Doe
          - generic [ref=e44]:
            - generic [ref=e45]: Email *
            - textbox "Email *" [ref=e46]:
              - /placeholder: john@company.com
          - generic [ref=e47]:
            - generic [ref=e48]: Company
            - textbox "Company" [ref=e49]:
              - /placeholder: Company Inc.
          - generic [ref=e50]:
            - generic [ref=e51]: Service Interest
            - combobox "Service Interest" [ref=e52] [cursor=pointer]:
              - option "Select a service" [selected]
              - option "SEO"
              - option "Paid Media"
              - option "Content Marketing"
              - option "Email Automation"
              - option "Analytics & Reporting"
              - option "Full Service"
          - generic [ref=e53]:
            - generic [ref=e54]: Message *
            - textbox "Message *" [ref=e55]:
              - /placeholder: Tell us about your project...
          - button "Send Message" [ref=e56] [cursor=pointer]
      - generic [ref=e57]:
        - generic [ref=e58]:
          - heading "Contact Information" [level=3] [ref=e59]
          - generic [ref=e60]:
            - generic [ref=e61]:
              - img [ref=e63]
              - generic [ref=e65]:
                - paragraph [ref=e66]: Email
                - link "hello@yourdedicatedmarketer.com" [ref=e67] [cursor=pointer]:
                  - /url: mailto:hello@yourdedicatedmarketer.com
            - generic [ref=e68]:
              - img [ref=e70]
              - generic [ref=e72]:
                - paragraph [ref=e73]: Phone
                - link "+1 (555) 123-4567" [ref=e74] [cursor=pointer]:
                  - /url: tel:+15551234567
            - generic [ref=e75]:
              - img [ref=e77]
              - generic [ref=e80]:
                - paragraph [ref=e81]: Address
                - paragraph [ref=e82]:
                  - text: 123 Marketing Street
                  - text: San Francisco, CA 94102
        - generic [ref=e83]:
          - heading "Schedule a Call" [level=3] [ref=e84]
          - paragraph [ref=e85]: Book a free 30-minute consultation to discuss your marketing goals.
          - link "Schedule a 30-Minute Call" [ref=e86] [cursor=pointer]:
            - /url: https://calendly.com/yourdedicatedmarketer/30min
    - generic [ref=e89]:
      - heading "Frequently Asked Questions" [level=2] [ref=e90]
      - generic [ref=e93]:
        - generic [ref=e94]:
          - button "How quickly can you start on my project?" [ref=e95] [cursor=pointer]:
            - generic [ref=e96]: How quickly can you start on my project?
            - img [ref=e97]
          - generic [ref=e99]: We typically begin onboarding within 48 hours of agreement. Full campaign launches usually happen within 1-2 weeks depending on complexity.
        - generic [ref=e100]:
          - button "What industries do you specialize in?" [ref=e101] [cursor=pointer]:
            - generic [ref=e102]: What industries do you specialize in?
            - img [ref=e103]
          - generic [ref=e105]: We work across B2B SaaS, e-commerce, professional services, healthcare, and technology sectors. Our strategies are customized for each industry's unique challenges.
        - generic [ref=e106]:
          - button "Do you offer month-to-month contracts?" [ref=e107] [cursor=pointer]:
            - generic [ref=e108]: Do you offer month-to-month contracts?
            - img [ref=e109]
          - generic [ref=e111]: Yes, we offer flexible month-to-month options for most services. We also provide discounted rates for 6-month and 12-month commitments.
        - generic [ref=e112]:
          - button "How do you measure success?" [ref=e113] [cursor=pointer]:
            - generic [ref=e114]: How do you measure success?
            - img [ref=e115]
          - generic [ref=e117]: We establish clear KPIs at the start of each engagement, typically focusing on revenue impact, lead generation, and ROI. You'll receive regular reports with full transparency.
        - generic [ref=e118]:
          - button "What's your typical client retention rate?" [ref=e119] [cursor=pointer]:
            - generic [ref=e120]: What's your typical client retention rate?
            - img [ref=e121]
          - generic [ref=e123]: We're proud to have a 98% client retention rate. Most clients stay with us for years because we consistently deliver results and maintain strong partnerships.
  - contentinfo [ref=e124]:
    - generic [ref=e125]:
      - generic [ref=e126]:
        - generic [ref=e127]:
          - link "Y Your Dedicated Marketer" [ref=e128] [cursor=pointer]:
            - /url: /
            - generic [ref=e130]: "Y"
            - generic [ref=e131]: Your Dedicated Marketer
          - paragraph [ref=e132]: AI-powered growth strategies for modern brands. Transform your digital presence with data-driven marketing.
          - generic [ref=e133]:
            - link "Instagram" [ref=e134] [cursor=pointer]:
              - /url: https://instagram.com/YourDedicatedMarketer
              - img [ref=e135]
            - link "Threads" [ref=e137] [cursor=pointer]:
              - /url: https://threads.net/YourDedicatedMarketer
              - img [ref=e138]
            - link "YouTube" [ref=e140] [cursor=pointer]:
              - /url: https://youtube.com/YourDedicatedMarketer
              - img [ref=e141]
        - generic [ref=e143]:
          - heading "Services" [level=4] [ref=e144]
          - list [ref=e145]:
            - listitem [ref=e146]:
              - link "SEO" [ref=e147] [cursor=pointer]:
                - /url: /services/seo
            - listitem [ref=e148]:
              - link "Paid Media" [ref=e149] [cursor=pointer]:
                - /url: /services/paid-media
            - listitem [ref=e150]:
              - link "Content Marketing" [ref=e151] [cursor=pointer]:
                - /url: /services/content-marketing
            - listitem [ref=e152]:
              - link "Email Automation" [ref=e153] [cursor=pointer]:
                - /url: /services/email-automation
            - listitem [ref=e154]:
              - link "Analytics & Reporting" [ref=e155] [cursor=pointer]:
                - /url: /services/analytics-and-reporting
        - generic [ref=e156]:
          - heading "Company" [level=4] [ref=e157]
          - list [ref=e158]:
            - listitem [ref=e159]:
              - link "About Us" [ref=e160] [cursor=pointer]:
                - /url: /about
            - listitem [ref=e161]:
              - link "Our Team" [ref=e162] [cursor=pointer]:
                - /url: /team
            - listitem [ref=e163]:
              - link "Case Studies" [ref=e164] [cursor=pointer]:
                - /url: /work
            - listitem [ref=e165]:
              - link "Blog" [ref=e166] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e167]:
              - link "Careers" [ref=e168] [cursor=pointer]:
                - /url: /careers
        - generic [ref=e169]:
          - heading "Resources" [level=4] [ref=e170]
          - list [ref=e171]:
            - listitem [ref=e172]:
              - link "Pricing" [ref=e173] [cursor=pointer]:
                - /url: /pricing
            - listitem [ref=e174]:
              - link "FAQ" [ref=e175] [cursor=pointer]:
                - /url: /faq
            - listitem [ref=e176]:
              - link "Industries" [ref=e177] [cursor=pointer]:
                - /url: /industries/saas
            - listitem [ref=e178]:
              - link "Contact" [ref=e179] [cursor=pointer]:
                - /url: /contact
        - generic [ref=e180]:
          - heading "Legal" [level=4] [ref=e181]
          - list [ref=e182]:
            - listitem [ref=e183]:
              - link "Privacy Policy" [ref=e184] [cursor=pointer]:
                - /url: /privacy-policy
            - listitem [ref=e185]:
              - link "Terms of Service" [ref=e186] [cursor=pointer]:
                - /url: /terms-of-service
      - generic [ref=e187]:
        - paragraph [ref=e188]: © 2026 Your Dedicated Marketer. All rights reserved.
        - paragraph [ref=e189]: Built with Astro & Tailwind CSS
  - generic [ref=e192]:
    - button "Menu" [ref=e193]:
      - img [ref=e195]
      - generic: Menu
    - button "Inspect" [ref=e199]:
      - img [ref=e201]
      - generic: Inspect
    - button "Audit" [ref=e203]:
      - img [ref=e205]
      - generic: Audit
    - button "Settings" [ref=e208]:
      - img [ref=e210]
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
> 28 |     expect(accessibilityScanResults.violations).toEqual([]);
     |                                                 ^ Error: expect(received).toEqual(expected) // deep equality
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
  73 |     expect(accessibilityScanResults.violations).toEqual([]);
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