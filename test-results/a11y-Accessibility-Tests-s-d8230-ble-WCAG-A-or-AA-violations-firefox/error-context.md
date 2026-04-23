# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: a11y.spec.ts >> Accessibility Tests >> services index should not have automatically detectable WCAG A or AA violations
- Location: src\test\a11y.spec.ts:49:3

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  -   1
+ Received  + 645

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
+               "contrastRatio": 3.38,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#3385ff",
+               "fontSize": "10.5pt (14px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.38 (foreground color: #3385ff, background color: #fafafa, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a href=\"/services/seo\" class=\"glass-card p-6 md:p-8 card-hover group block\">",
+                 "target": Array [
+                   ".md\\:p-8.card-hover[href$=\"seo\"]",
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
+   Element has insufficient color contrast of 3.38 (foreground color: #3385ff, background color: #fafafa, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"inline-flex items-center text-sm text-electric-400 font-medium group-hover:neon-text\">",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".md\\:p-8.card-hover[href$=\"seo\"] > .group-hover\\:neon-text.inline-flex.font-medium",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#fafafa",
+               "contrastRatio": 3.38,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#3385ff",
+               "fontSize": "10.5pt (14px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.38 (foreground color: #3385ff, background color: #fafafa, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a href=\"/services/paid-media\" class=\"glass-card p-6 md:p-8 card-hover group block\">",
+                 "target": Array [
+                   ".md\\:p-8.card-hover[href$=\"paid-media\"]",
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
+   Element has insufficient color contrast of 3.38 (foreground color: #3385ff, background color: #fafafa, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"inline-flex items-center text-sm text-electric-400 font-medium group-hover:neon-text\">",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".md\\:p-8.card-hover[href$=\"paid-media\"] > .group-hover\\:neon-text.inline-flex.font-medium",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#fafafa",
+               "contrastRatio": 3.38,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#3385ff",
+               "fontSize": "10.5pt (14px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.38 (foreground color: #3385ff, background color: #fafafa, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a href=\"/services/content-marketing\" class=\"glass-card p-6 md:p-8 card-hover group block\">",
+                 "target": Array [
+                   ".md\\:p-8.card-hover[href$=\"content-marketing\"]",
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
+   Element has insufficient color contrast of 3.38 (foreground color: #3385ff, background color: #fafafa, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"inline-flex items-center text-sm text-electric-400 font-medium group-hover:neon-text\">",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".md\\:p-8.card-hover[href$=\"content-marketing\"] > .group-hover\\:neon-text.inline-flex.font-medium",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#fafafa",
+               "contrastRatio": 3.38,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#3385ff",
+               "fontSize": "10.5pt (14px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.38 (foreground color: #3385ff, background color: #fafafa, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a href=\"/services/email-automation\" class=\"glass-card p-6 md:p-8 card-hover group block\">",
+                 "target": Array [
+                   ".md\\:p-8.card-hover[href$=\"email-automation\"]",
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
+   Element has insufficient color contrast of 3.38 (foreground color: #3385ff, background color: #fafafa, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"inline-flex items-center text-sm text-electric-400 font-medium group-hover:neon-text\">",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".md\\:p-8.card-hover[href$=\"email-automation\"] > .group-hover\\:neon-text.inline-flex.font-medium",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#fafafa",
+               "contrastRatio": 3.38,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#3385ff",
+               "fontSize": "10.5pt (14px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.38 (foreground color: #3385ff, background color: #fafafa, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a href=\"/services/analytics-and-reporting\" class=\"glass-card p-6 md:p-8 card-hover group block\">",
+                 "target": Array [
+                   ".md\\:p-8.card-hover.group:nth-child(5)",
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
+   Element has insufficient color contrast of 3.38 (foreground color: #3385ff, background color: #fafafa, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"inline-flex items-center text-sm text-electric-400 font-medium group-hover:neon-text\">",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".md\\:p-8.card-hover.group:nth-child(5) > .group-hover\\:neon-text.inline-flex.font-medium",
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
+               "fontSize": "27.0pt (36px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.04 (foreground color: #3385ff, background color: #858585, font size: 27.0pt (36px), font weight: bold). Expected contrast ratio of 3:1",
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
+   Element has insufficient color contrast of 1.04 (foreground color: #3385ff, background color: #858585, font size: 27.0pt (36px), font weight: bold). Expected contrast ratio of 3:1",
+         "html": "<span class=\"text-electric-400\">Us</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".text-3xl > span",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#bdbdbd",
+               "contrastRatio": 1.87,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#ffffff",
+               "fontSize": "12.0pt (16px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.87 (foreground color: #ffffff, background color: #bdbdbd, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"glass-card p-6 text-center\">",
+                 "target": Array [
+                   ".text-center.p-6.glass-card:nth-child(1)",
+                 ],
+               },
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
+   Element has insufficient color contrast of 1.87 (foreground color: #ffffff, background color: #bdbdbd, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<h3 class=\"font-display font-semibold text-white mb-2\">AI-Powered</h3>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".text-center.p-6.glass-card:nth-child(1) > .mb-2.text-white",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#bdbdbd",
+               "contrastRatio": 1.35,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#9ca3af",
+               "fontSize": "10.5pt (14px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.35 (foreground color: #9ca3af, background color: #bdbdbd, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"glass-card p-6 text-center\">",
+                 "target": Array [
+                   ".text-center.p-6.glass-card:nth-child(1)",
+                 ],
+               },
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
+   Element has insufficient color contrast of 1.35 (foreground color: #9ca3af, background color: #bdbdbd, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<p class=\"text-sm text-gray-400\">Leveraging cutting-edge AI for smarter campaigns</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".text-center.p-6.glass-card:nth-child(1) > .text-gray-400",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#bdbdbd",
+               "contrastRatio": 1.87,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#ffffff",
+               "fontSize": "12.0pt (16px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.87 (foreground color: #ffffff, background color: #bdbdbd, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"glass-card p-6 text-center\">",
+                 "target": Array [
+                   ".text-center.p-6.glass-card:nth-child(2)",
+                 ],
+               },
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
+   Element has insufficient color contrast of 1.87 (foreground color: #ffffff, background color: #bdbdbd, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<h3 class=\"font-display font-semibold text-white mb-2\">Data-Driven</h3>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".text-center.p-6.glass-card:nth-child(2) > .mb-2.text-white",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#bdbdbd",
+               "contrastRatio": 1.35,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#9ca3af",
+               "fontSize": "10.5pt (14px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.35 (foreground color: #9ca3af, background color: #bdbdbd, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"glass-card p-6 text-center\">",
+                 "target": Array [
+                   ".text-center.p-6.glass-card:nth-child(2)",
+                 ],
+               },
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
+   Element has insufficient color contrast of 1.35 (foreground color: #9ca3af, background color: #bdbdbd, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<p class=\"text-sm text-gray-400\">Every decision backed by real metrics</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".text-center.p-6.glass-card:nth-child(2) > .text-gray-400",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#bdbdbd",
+               "contrastRatio": 1.87,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#ffffff",
+               "fontSize": "12.0pt (16px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.87 (foreground color: #ffffff, background color: #bdbdbd, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"glass-card p-6 text-center\">",
+                 "target": Array [
+                   ".text-center.p-6.glass-card:nth-child(3)",
+                 ],
+               },
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
+   Element has insufficient color contrast of 1.87 (foreground color: #ffffff, background color: #bdbdbd, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<h3 class=\"font-display font-semibold text-white mb-2\">Dedicated Team</h3>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".text-center.p-6.glass-card:nth-child(3) > .mb-2.text-white",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#bdbdbd",
+               "contrastRatio": 1.35,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#9ca3af",
+               "fontSize": "10.5pt (14px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.35 (foreground color: #9ca3af, background color: #bdbdbd, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"glass-card p-6 text-center\">",
+                 "target": Array [
+                   ".text-center.p-6.glass-card:nth-child(3)",
+                 ],
+               },
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
+   Element has insufficient color contrast of 1.35 (foreground color: #9ca3af, background color: #bdbdbd, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<p class=\"text-sm text-gray-400\">Your success is our only priority</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".text-center.p-6.glass-card:nth-child(3) > .text-gray-400",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#bdbdbd",
+               "contrastRatio": 1.87,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#ffffff",
+               "fontSize": "12.0pt (16px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.87 (foreground color: #ffffff, background color: #bdbdbd, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"glass-card p-6 text-center\">",
+                 "target": Array [
+                   ".text-center.p-6.glass-card:nth-child(4)",
+                 ],
+               },
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
+   Element has insufficient color contrast of 1.87 (foreground color: #ffffff, background color: #bdbdbd, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<h3 class=\"font-display font-semibold text-white mb-2\">Proven Results</h3>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".text-center.p-6.glass-card:nth-child(4) > .mb-2.text-white",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#bdbdbd",
+               "contrastRatio": 1.35,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#9ca3af",
+               "fontSize": "10.5pt (14px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.35 (foreground color: #9ca3af, background color: #bdbdbd, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"glass-card p-6 text-center\">",
+                 "target": Array [
+                   ".text-center.p-6.glass-card:nth-child(4)",
+                 ],
+               },
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
+   Element has insufficient color contrast of 1.35 (foreground color: #9ca3af, background color: #bdbdbd, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<p class=\"text-sm text-gray-400\">340% average ROI for our clients</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".text-center.p-6.glass-card:nth-child(4) > .text-gray-400",
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
      - heading "Our Services" [level=1] [ref=e31]
      - paragraph [ref=e32]: Comprehensive digital marketing solutions powered by AI and data-driven strategies. We help brands achieve measurable growth through targeted campaigns and continuous optimization.
    - generic [ref=e35]:
      - link "SEO Dominate search rankings with AI-powered optimization strategies that drive organic growth. Technical SEO, content optimization, and authority building. Learn more" [ref=e36] [cursor=pointer]:
        - /url: /services/seo
        - img [ref=e38]
        - heading "SEO" [level=3] [ref=e40]
        - paragraph [ref=e41]: Dominate search rankings with AI-powered optimization strategies that drive organic growth. Technical SEO, content optimization, and authority building.
        - generic [ref=e42]:
          - text: Learn more
          - img [ref=e43]
      - link "Paid Media Maximize ROI with data-driven paid advertising across Google, Meta, LinkedIn, and more. Campaign strategy, execution, and continuous optimization. Learn more" [ref=e45] [cursor=pointer]:
        - /url: /services/paid-media
        - img [ref=e47]
        - heading "Paid Media" [level=3] [ref=e49]
        - paragraph [ref=e50]: Maximize ROI with data-driven paid advertising across Google, Meta, LinkedIn, and more. Campaign strategy, execution, and continuous optimization.
        - generic [ref=e51]:
          - text: Learn more
          - img [ref=e52]
      - link "Content Marketing Build authority and engage your audience with strategic content that converts. Blog posts, whitepapers, video content, and distribution strategies. Learn more" [ref=e54] [cursor=pointer]:
        - /url: /services/content-marketing
        - img [ref=e56]
        - heading "Content Marketing" [level=3] [ref=e58]
        - paragraph [ref=e59]: Build authority and engage your audience with strategic content that converts. Blog posts, whitepapers, video content, and distribution strategies.
        - generic [ref=e60]:
          - text: Learn more
          - img [ref=e61]
      - link "Email Automation Nurture leads and drive conversions with intelligent email sequences and automation. List building, segmentation, and personalized campaigns. Learn more" [ref=e63] [cursor=pointer]:
        - /url: /services/email-automation
        - img [ref=e65]
        - heading "Email Automation" [level=3] [ref=e67]
        - paragraph [ref=e68]: Nurture leads and drive conversions with intelligent email sequences and automation. List building, segmentation, and personalized campaigns.
        - generic [ref=e69]:
          - text: Learn more
          - img [ref=e70]
      - link "Analytics & Reporting Transform data into actionable insights with comprehensive analytics and custom dashboards. Track KPIs, measure success, and optimize performance. Learn more" [ref=e72] [cursor=pointer]:
        - /url: /services/analytics-and-reporting
        - img [ref=e74]
        - heading "Analytics & Reporting" [level=3] [ref=e76]
        - paragraph [ref=e77]: Transform data into actionable insights with comprehensive analytics and custom dashboards. Track KPIs, measure success, and optimize performance.
        - generic [ref=e78]:
          - text: Learn more
          - img [ref=e79]
    - generic [ref=e82]:
      - heading "Why Choose Us?" [level=2] [ref=e84]
      - generic [ref=e85]:
        - generic [ref=e86]:
          - img [ref=e88]
          - heading "AI-Powered" [level=3] [ref=e90]
          - paragraph [ref=e91]: Leveraging cutting-edge AI for smarter campaigns
        - generic [ref=e92]:
          - img [ref=e94]
          - heading "Data-Driven" [level=3] [ref=e96]
          - paragraph [ref=e97]: Every decision backed by real metrics
        - generic [ref=e98]:
          - img [ref=e100]
          - heading "Dedicated Team" [level=3] [ref=e102]
          - paragraph [ref=e103]: Your success is our only priority
        - generic [ref=e104]:
          - img [ref=e106]
          - heading "Proven Results" [level=3] [ref=e108]
          - paragraph [ref=e109]: 340% average ROI for our clients
    - generic [ref=e114]:
      - heading "Not Sure Which Service You Need?" [level=2] [ref=e115]
      - paragraph [ref=e116]: Let's discuss your goals and challenges. We'll recommend the best approach for your unique situation.
      - link "Schedule a Free Consultation" [ref=e117] [cursor=pointer]:
        - /url: /contact
  - contentinfo [ref=e118]:
    - generic [ref=e119]:
      - generic [ref=e120]:
        - generic [ref=e121]:
          - link "Y Your Dedicated Marketer" [ref=e122] [cursor=pointer]:
            - /url: /
            - generic [ref=e124]: "Y"
            - generic [ref=e125]: Your Dedicated Marketer
          - paragraph [ref=e126]: AI-powered growth strategies for modern brands. Transform your digital presence with data-driven marketing.
          - generic [ref=e127]:
            - link "Twitter" [ref=e128] [cursor=pointer]:
              - /url: https://twitter.com/yourdedicatedmarketer
              - img [ref=e129]
            - link "LinkedIn" [ref=e131] [cursor=pointer]:
              - /url: https://linkedin.com/company/yourdedicatedmarketer
              - img [ref=e132]
            - link "Instagram" [ref=e134] [cursor=pointer]:
              - /url: https://instagram.com/yourdedicatedmarketer
              - img [ref=e135]
        - generic [ref=e137]:
          - heading "Services" [level=4] [ref=e138]
          - list [ref=e139]:
            - listitem [ref=e140]:
              - link "SEO" [ref=e141] [cursor=pointer]:
                - /url: /services/seo
            - listitem [ref=e142]:
              - link "Paid Media" [ref=e143] [cursor=pointer]:
                - /url: /services/paid-media
            - listitem [ref=e144]:
              - link "Content Marketing" [ref=e145] [cursor=pointer]:
                - /url: /services/content-marketing
            - listitem [ref=e146]:
              - link "Email Automation" [ref=e147] [cursor=pointer]:
                - /url: /services/email-automation
            - listitem [ref=e148]:
              - link "Analytics & Reporting" [ref=e149] [cursor=pointer]:
                - /url: /services/analytics-and-reporting
        - generic [ref=e150]:
          - heading "Company" [level=4] [ref=e151]
          - list [ref=e152]:
            - listitem [ref=e153]:
              - link "About Us" [ref=e154] [cursor=pointer]:
                - /url: /about
            - listitem [ref=e155]:
              - link "Our Team" [ref=e156] [cursor=pointer]:
                - /url: /team
            - listitem [ref=e157]:
              - link "Case Studies" [ref=e158] [cursor=pointer]:
                - /url: /work
            - listitem [ref=e159]:
              - link "Blog" [ref=e160] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e161]:
              - link "Careers" [ref=e162] [cursor=pointer]:
                - /url: /careers
        - generic [ref=e163]:
          - heading "Resources" [level=4] [ref=e164]
          - list [ref=e165]:
            - listitem [ref=e166]:
              - link "Pricing" [ref=e167] [cursor=pointer]:
                - /url: /pricing
            - listitem [ref=e168]:
              - link "FAQ" [ref=e169] [cursor=pointer]:
                - /url: /faq
            - listitem [ref=e170]:
              - link "Industries" [ref=e171] [cursor=pointer]:
                - /url: /industries/saas
            - listitem [ref=e172]:
              - link "Contact" [ref=e173] [cursor=pointer]:
                - /url: /contact
        - generic [ref=e174]:
          - heading "Legal" [level=4] [ref=e175]
          - list [ref=e176]:
            - listitem [ref=e177]:
              - link "Privacy Policy" [ref=e178] [cursor=pointer]:
                - /url: /privacy-policy
            - listitem [ref=e179]:
              - link "Terms of Service" [ref=e180] [cursor=pointer]:
                - /url: /terms-of-service
      - generic [ref=e181]:
        - paragraph [ref=e182]: © 2026 Your Dedicated Marketer. All rights reserved.
        - paragraph [ref=e183]: Built with Astro & Tailwind CSS
  - generic [ref=e186]:
    - button "Menu" [ref=e187]:
      - img [ref=e189]
      - generic: Menu
    - button "Inspect" [ref=e193]:
      - img [ref=e195]
      - generic: Inspect
    - button "Audit" [ref=e197]:
      - img [ref=e199]
      - generic: Audit
    - button "Settings" [ref=e202]:
      - img [ref=e204]
      - generic: Settings
```

# Test source

```ts
  1  | import { test, expect } from './fixtures/a11y';
  2  | 
  3  | test.describe('Accessibility Tests', () => {
  4  |   test('homepage should not have automatically detectable WCAG A or AA violations', async ({
  5  |     page,
  6  |     makeAxeBuilder,
  7  |   }) => {
  8  |     await page.goto('/');
  9  |     const accessibilityScanResults = await makeAxeBuilder().analyze();
  10 |     expect(accessibilityScanResults.violations).toEqual([]);
  11 |   });
  12 | 
  13 |   test('about page should not have automatically detectable WCAG A or AA violations', async ({
  14 |     page,
  15 |     makeAxeBuilder,
  16 |   }) => {
  17 |     await page.goto('/about');
  18 |     const accessibilityScanResults = await makeAxeBuilder().analyze();
  19 |     expect(accessibilityScanResults.violations).toEqual([]);
  20 |   });
  21 | 
  22 |   test('contact page should not have automatically detectable WCAG A or AA violations', async ({
  23 |     page,
  24 |     makeAxeBuilder,
  25 |   }) => {
  26 |     await page.goto('/contact');
  27 |     const accessibilityScanResults = await makeAxeBuilder().analyze();
  28 |     expect(accessibilityScanResults.violations).toEqual([]);
  29 |   });
  30 | 
  31 |   test('blog index should not have automatically detectable WCAG A or AA violations', async ({
  32 |     page,
  33 |     makeAxeBuilder,
  34 |   }) => {
  35 |     await page.goto('/blog');
  36 |     const accessibilityScanResults = await makeAxeBuilder().analyze();
  37 |     expect(accessibilityScanResults.violations).toEqual([]);
  38 |   });
  39 | 
  40 |   test('work index should not have automatically detectable WCAG A or AA violations', async ({
  41 |     page,
  42 |     makeAxeBuilder,
  43 |   }) => {
  44 |     await page.goto('/work');
  45 |     const accessibilityScanResults = await makeAxeBuilder().analyze();
  46 |     expect(accessibilityScanResults.violations).toEqual([]);
  47 |   });
  48 | 
  49 |   test('services index should not have automatically detectable WCAG A or AA violations', async ({
  50 |     page,
  51 |     makeAxeBuilder,
  52 |   }) => {
  53 |     await page.goto('/services');
  54 |     const accessibilityScanResults = await makeAxeBuilder().analyze();
> 55 |     expect(accessibilityScanResults.violations).toEqual([]);
     |                                                 ^ Error: expect(received).toEqual(expected) // deep equality
  56 |   });
  57 | 
  58 |   test('team page should not have automatically detectable WCAG A or AA violations', async ({
  59 |     page,
  60 |     makeAxeBuilder,
  61 |   }) => {
  62 |     await page.goto('/team');
  63 |     const accessibilityScanResults = await makeAxeBuilder().analyze();
  64 |     expect(accessibilityScanResults.violations).toEqual([]);
  65 |   });
  66 | 
  67 |   test('pricing page should not have automatically detectable WCAG A or AA violations', async ({
  68 |     page,
  69 |     makeAxeBuilder,
  70 |   }) => {
  71 |     await page.goto('/pricing');
  72 |     const accessibilityScanResults = await makeAxeBuilder().analyze();
  73 |     expect(accessibilityScanResults.violations).toEqual([]);
  74 |   });
  75 | 
  76 |   test('faq page should not have automatically detectable WCAG A or AA violations', async ({
  77 |     page,
  78 |     makeAxeBuilder,
  79 |   }) => {
  80 |     await page.goto('/faq');
  81 |     const accessibilityScanResults = await makeAxeBuilder().analyze();
  82 |     expect(accessibilityScanResults.violations).toEqual([]);
  83 |   });
  84 | });
  85 | 
```