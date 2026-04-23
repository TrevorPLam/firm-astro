# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: a11y.spec.ts >> Accessibility Tests >> homepage should not have automatically detectable WCAG A or AA violations
- Location: src\test\a11y.spec.ts:4:3

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  -    1
+ Received  + 2198

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
+               "contrastRatio": 2.43,
+               "expectedContrastRatio": "3:1",
+               "fgColor": "#9ca3af",
+               "fontSize": "18.0pt (24px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafafa, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"flex-shrink-0 w-32 h-16 flex items-center justify-center glass-card hover:border-electric-500/30 transition-colors\" data-astro-cid-ctnphsfc=\"\">",
+                 "target": Array [
+                   ".w-32.h-16.hover\\:border-electric-500\\/30:nth-child(1)",
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
+   Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafafa, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+         "html": "<span class=\"text-2xl font-display font-bold text-gray-400 group-hover:text-electric-400 transition-colors\" data-astro-cid-ctnphsfc=\"\"> TC </span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".w-32.h-16.hover\\:border-electric-500\\/30:nth-child(1) > .text-2xl.group-hover\\:text-electric-400.text-gray-400",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#fafafa",
+               "contrastRatio": 2.43,
+               "expectedContrastRatio": "3:1",
+               "fgColor": "#9ca3af",
+               "fontSize": "18.0pt (24px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafafa, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"flex-shrink-0 w-32 h-16 flex items-center justify-center glass-card hover:border-electric-500/30 transition-colors\" data-astro-cid-ctnphsfc=\"\">",
+                 "target": Array [
+                   ".w-32.h-16.hover\\:border-electric-500\\/30:nth-child(2)",
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
+   Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafafa, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+         "html": "<span class=\"text-2xl font-display font-bold text-gray-400 group-hover:text-electric-400 transition-colors\" data-astro-cid-ctnphsfc=\"\"> IL </span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".w-32.h-16.hover\\:border-electric-500\\/30:nth-child(2) > .text-2xl.group-hover\\:text-electric-400.text-gray-400",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#fafafa",
+               "contrastRatio": 2.43,
+               "expectedContrastRatio": "3:1",
+               "fgColor": "#9ca3af",
+               "fontSize": "18.0pt (24px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafafa, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"flex-shrink-0 w-32 h-16 flex items-center justify-center glass-card hover:border-electric-500/30 transition-colors\" data-astro-cid-ctnphsfc=\"\">",
+                 "target": Array [
+                   ".w-32.h-16.hover\\:border-electric-500\\/30:nth-child(3)",
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
+   Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafafa, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+         "html": "<span class=\"text-2xl font-display font-bold text-gray-400 group-hover:text-electric-400 transition-colors\" data-astro-cid-ctnphsfc=\"\"> GC </span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".w-32.h-16.hover\\:border-electric-500\\/30:nth-child(3) > .text-2xl.group-hover\\:text-electric-400.text-gray-400",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#fafafa",
+               "contrastRatio": 2.43,
+               "expectedContrastRatio": "3:1",
+               "fgColor": "#9ca3af",
+               "fontSize": "18.0pt (24px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafafa, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"flex-shrink-0 w-32 h-16 flex items-center justify-center glass-card hover:border-electric-500/30 transition-colors\" data-astro-cid-ctnphsfc=\"\">",
+                 "target": Array [
+                   ".w-32.h-16.hover\\:border-electric-500\\/30:nth-child(4)",
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
+   Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafafa, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+         "html": "<span class=\"text-2xl font-display font-bold text-gray-400 group-hover:text-electric-400 transition-colors\" data-astro-cid-ctnphsfc=\"\"> DD </span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".w-32.h-16.hover\\:border-electric-500\\/30:nth-child(4) > .text-2xl.group-hover\\:text-electric-400.text-gray-400",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#fafafa",
+               "contrastRatio": 2.43,
+               "expectedContrastRatio": "3:1",
+               "fgColor": "#9ca3af",
+               "fontSize": "18.0pt (24px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafafa, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"flex-shrink-0 w-32 h-16 flex items-center justify-center glass-card hover:border-electric-500/30 transition-colors\" data-astro-cid-ctnphsfc=\"\">",
+                 "target": Array [
+                   ".w-32.h-16.hover\\:border-electric-500\\/30:nth-child(5)",
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
+   Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafafa, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+         "html": "<span class=\"text-2xl font-display font-bold text-gray-400 group-hover:text-electric-400 transition-colors\" data-astro-cid-ctnphsfc=\"\"> SU </span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".w-32.h-16.hover\\:border-electric-500\\/30:nth-child(5) > .text-2xl.group-hover\\:text-electric-400.text-gray-400",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#fafafa",
+               "contrastRatio": 2.43,
+               "expectedContrastRatio": "3:1",
+               "fgColor": "#9ca3af",
+               "fontSize": "18.0pt (24px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafafa, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"flex-shrink-0 w-32 h-16 flex items-center justify-center glass-card hover:border-electric-500/30 transition-colors\" data-astro-cid-ctnphsfc=\"\">",
+                 "target": Array [
+                   ".w-32.h-16.hover\\:border-electric-500\\/30:nth-child(6)",
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
+   Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafafa, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+         "html": "<span class=\"text-2xl font-display font-bold text-gray-400 group-hover:text-electric-400 transition-colors\" data-astro-cid-ctnphsfc=\"\"> NG </span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".w-32.h-16.hover\\:border-electric-500\\/30:nth-child(6) > .text-2xl.group-hover\\:text-electric-400.text-gray-400",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#fafafa",
+               "contrastRatio": 2.43,
+               "expectedContrastRatio": "3:1",
+               "fgColor": "#9ca3af",
+               "fontSize": "18.0pt (24px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafafa, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"flex-shrink-0 w-32 h-16 flex items-center justify-center glass-card hover:border-electric-500/30 transition-colors\" data-astro-cid-ctnphsfc=\"\">",
+                 "target": Array [
+                   ".w-32.h-16.hover\\:border-electric-500\\/30:nth-child(7)",
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
+   Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafafa, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+         "html": "<span class=\"text-2xl font-display font-bold text-gray-400 group-hover:text-electric-400 transition-colors\" data-astro-cid-ctnphsfc=\"\"> CF </span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".w-32.h-16.hover\\:border-electric-500\\/30:nth-child(7) > .text-2xl.group-hover\\:text-electric-400.text-gray-400",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 2.53,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#9ca3af",
+               "fontSize": "12.0pt (16px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.53 (foreground color: #9ca3af, background color: #ffffff, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
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
+   Element has insufficient color contrast of 2.53 (foreground color: #9ca3af, background color: #ffffff, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<p class=\"text-gray-400 max-w-2xl mx-auto\">
+ Comprehensive digital marketing solutions designed to accelerate your growth.
+ </p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".section:nth-child(3) > .container-custom > .mb-12.text-center > .max-w-2xl.mx-auto",
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
+                 "html": "<a href=\"/services/seo\" class=\"glass-card p-6 md:p-8 card-hover group block\">",
+                 "target": Array [
+                   ".p-6.md\\:p-8[href$=\"seo\"]",
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
+           ".p-6.md\\:p-8[href$=\"seo\"] > .group-hover\\:neon-text.inline-flex.font-medium",
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
+                   ".p-6.md\\:p-8[href$=\"paid-media\"]",
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
+           ".p-6.md\\:p-8[href$=\"paid-media\"] > .group-hover\\:neon-text.inline-flex.font-medium",
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
+                   ".p-6.md\\:p-8[href$=\"content-marketing\"]",
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
+           ".p-6.md\\:p-8[href$=\"content-marketing\"] > .group-hover\\:neon-text.inline-flex.font-medium",
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
+                   ".p-6.md\\:p-8[href$=\"email-automation\"]",
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
+           ".p-6.md\\:p-8[href$=\"email-automation\"] > .group-hover\\:neon-text.inline-flex.font-medium",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.53,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#3385ff",
+               "fontSize": "10.5pt (14px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.53 (foreground color: #3385ff, background color: #ffffff, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
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
+   Element has insufficient color contrast of 3.53 (foreground color: #3385ff, background color: #ffffff, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/services\" class=\"inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 active:scale-95 focus-ring text-electric-400 hover:text-electric-300 hover:bg-electric-500/10 px-6 py-3 text-sm \">",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".mt-12.text-center > .hover\\:text-electric-300.px-6.py-3",
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
+                   ".bg-dark-800\\/50.section:nth-child(4)",
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
+         "html": "<span class=\"text-electric-400\">Solve</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".lg\\:grid-cols-2 > div:nth-child(1) > h2 > .text-electric-400",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#858585",
+               "contrastRatio": 1.45,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#9ca3af",
+               "fontSize": "12.0pt (16px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.45 (foreground color: #9ca3af, background color: #858585, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<section class=\"section bg-dark-800/50\">",
+                 "target": Array [
+                   ".bg-dark-800\\/50.section:nth-child(4)",
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
+   Element has insufficient color contrast of 1.45 (foreground color: #9ca3af, background color: #858585, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<p class=\"text-gray-400 mb-8 leading-relaxed\">
+ Every business faces unique marketing challenges. We identify the root causes and
+             implement targeted solutions that drive real results.
+ </p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".mb-8.leading-relaxed",
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
+                 "html": "<div class=\"glass-card p-4 flex items-start gap-4\">",
+                 "target": Array [
+                   ".p-4.items-start.gap-4:nth-child(1)",
+                 ],
+               },
+               Object {
+                 "html": "<section class=\"section bg-dark-800/50\">",
+                 "target": Array [
+                   ".bg-dark-800\\/50.section:nth-child(4)",
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
+         "html": "<h3 class=\"font-semibold text-white mb-1\">Low Organic Visibility</h3>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-4.items-start.gap-4:nth-child(1) > div:nth-child(2) > .mb-1",
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
+                 "html": "<div class=\"glass-card p-4 flex items-start gap-4\">",
+                 "target": Array [
+                   ".p-4.items-start.gap-4:nth-child(1)",
+                 ],
+               },
+               Object {
+                 "html": "<section class=\"section bg-dark-800/50\">",
+                 "target": Array [
+                   ".bg-dark-800\\/50.section:nth-child(4)",
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
+         "html": "<p class=\"text-sm text-gray-400\">Your website isn't ranking for key search terms, missing valuable traffic.</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-4.items-start.gap-4:nth-child(1) > div:nth-child(2) > p",
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
+                 "html": "<div class=\"glass-card p-4 flex items-start gap-4\">",
+                 "target": Array [
+                   ".p-4.items-start.gap-4:nth-child(2)",
+                 ],
+               },
+               Object {
+                 "html": "<section class=\"section bg-dark-800/50\">",
+                 "target": Array [
+                   ".bg-dark-800\\/50.section:nth-child(4)",
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
+         "html": "<h3 class=\"font-semibold text-white mb-1\">Inefficient Ad Spend</h3>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-4.items-start.gap-4:nth-child(2) > div:nth-child(2) > .mb-1",
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
+                 "html": "<div class=\"glass-card p-4 flex items-start gap-4\">",
+                 "target": Array [
+                   ".p-4.items-start.gap-4:nth-child(2)",
+                 ],
+               },
+               Object {
+                 "html": "<section class=\"section bg-dark-800/50\">",
+                 "target": Array [
+                   ".bg-dark-800\\/50.section:nth-child(4)",
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
+         "html": "<p class=\"text-sm text-gray-400\">PPC campaigns drain budget without delivering measurable results.</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-4.items-start.gap-4:nth-child(2) > div:nth-child(2) > p",
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
+                 "html": "<div class=\"glass-card p-4 flex items-start gap-4\">",
+                 "target": Array [
+                   ".p-4.items-start.gap-4:nth-child(3)",
+                 ],
+               },
+               Object {
+                 "html": "<section class=\"section bg-dark-800/50\">",
+                 "target": Array [
+                   ".bg-dark-800\\/50.section:nth-child(4)",
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
+         "html": "<h3 class=\"font-semibold text-white mb-1\">Poor Lead Quality</h3>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-4.items-start.gap-4:nth-child(3) > div:nth-child(2) > .mb-1",
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
+                 "html": "<div class=\"glass-card p-4 flex items-start gap-4\">",
+                 "target": Array [
+                   ".p-4.items-start.gap-4:nth-child(3)",
+                 ],
+               },
+               Object {
+                 "html": "<section class=\"section bg-dark-800/50\">",
+                 "target": Array [
+                   ".bg-dark-800\\/50.section:nth-child(4)",
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
+         "html": "<p class=\"text-sm text-gray-400\">Marketing generates volume but leads don't convert to customers.</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-4.items-start.gap-4:nth-child(3) > div:nth-child(2) > p",
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
+                 "html": "<div class=\"glass-card p-4 flex items-start gap-4\">",
+                 "target": Array [
+                   ".p-4.items-start.gap-4:nth-child(4)",
+                 ],
+               },
+               Object {
+                 "html": "<section class=\"section bg-dark-800/50\">",
+                 "target": Array [
+                   ".bg-dark-800\\/50.section:nth-child(4)",
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
+         "html": "<h3 class=\"font-semibold text-white mb-1\">Inconsistent Content</h3>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-4.items-start.gap-4:nth-child(4) > div:nth-child(2) > .mb-1",
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
+                 "html": "<div class=\"glass-card p-4 flex items-start gap-4\">",
+                 "target": Array [
+                   ".p-4.items-start.gap-4:nth-child(4)",
+                 ],
+               },
+               Object {
+                 "html": "<section class=\"section bg-dark-800/50\">",
+                 "target": Array [
+                   ".bg-dark-800\\/50.section:nth-child(4)",
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
+         "html": "<p class=\"text-sm text-gray-400\">No clear content strategy or execution plan to build authority.</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-4.items-start.gap-4:nth-child(4) > div:nth-child(2) > p",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 2.53,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#9ca3af",
+               "fontSize": "12.0pt (16px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.53 (foreground color: #9ca3af, background color: #ffffff, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
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
+   Element has insufficient color contrast of 2.53 (foreground color: #9ca3af, background color: #ffffff, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<p class=\"text-gray-400 max-w-xl\">
+ Real results from real clients. Discover how we've helped brands achieve extraordinary
+             growth.
+ </p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".md\\:items-end > div > .max-w-xl",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.53,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#3385ff",
+               "fontSize": "10.5pt (14px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.53 (foreground color: #3385ff, background color: #ffffff, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
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
+   Element has insufficient color contrast of 3.53 (foreground color: #3385ff, background color: #ffffff, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/work\" class=\"inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 active:scale-95 focus-ring text-electric-400 hover:text-electric-300 hover:bg-electric-500/10 px-6 py-3 text-sm mt-4 md:mt-0\"> View All Work </a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".mt-4",
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
+               "fontSize": "9.0pt (12px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.38 (foreground color: #3385ff, background color: #fafafa, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a href=\"/work/ecommerce-revenue-growth\" class=\"glass-card overflow-hidden card-hover group block md:col-span-2 lg:col-span-2\">",
+                 "target": Array [
+                   "a[href$=\"ecommerce-revenue-growth\"]",
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
+   Element has insufficient color contrast of 3.38 (foreground color: #3385ff, background color: #fafafa, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-xs text-electric-400 font-medium uppercase tracking-wider\">E-commerce</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href$=\"ecommerce-revenue-growth\"] > .p-6.md\\:p-8 > .gap-3.mb-4.flex > .uppercase.tracking-wider.text-xs",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#c8d9fb",
+               "contrastRatio": 2.48,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#3385ff",
+               "fontSize": "9.0pt (12px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.48 (foreground color: #3385ff, background color: #c8d9fb, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<span class=\"px-2 py-1 text-xs bg-electric-500/20 text-electric-400 rounded\">
+ Featured
+ </span>",
+                 "target": Array [
+                   "a[href$=\"ecommerce-revenue-growth\"] > .p-6.md\\:p-8 > .gap-3.mb-4.flex > .px-2.py-1.rounded",
+                 ],
+               },
+               Object {
+                 "html": "<a href=\"/work/ecommerce-revenue-growth\" class=\"glass-card overflow-hidden card-hover group block md:col-span-2 lg:col-span-2\">",
+                 "target": Array [
+                   "a[href$=\"ecommerce-revenue-growth\"]",
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
+   Element has insufficient color contrast of 2.48 (foreground color: #3385ff, background color: #c8d9fb, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"px-2 py-1 text-xs bg-electric-500/20 text-electric-400 rounded\">
+ Featured
+ </span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href$=\"ecommerce-revenue-growth\"] > .p-6.md\\:p-8 > .gap-3.mb-4.flex > .px-2.py-1.rounded",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#9bbbfc",
+               "contrastRatio": 1.83,
+               "expectedContrastRatio": "3:1",
+               "fgColor": "#3385ff",
+               "fontSize": "22.5pt (30px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+               "shadowColor": "#689afd",
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.83 (foreground color: #3385ff, background color: #9bbbfc, font size: 22.5pt (30px), font weight: bold). Expected contrast ratio of 3:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a href=\"/work/ecommerce-revenue-growth\" class=\"glass-card overflow-hidden card-hover group block md:col-span-2 lg:col-span-2\">",
+                 "target": Array [
+                   "a[href$=\"ecommerce-revenue-growth\"]",
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
+   Element has insufficient color contrast of 1.83 (foreground color: #3385ff, background color: #9bbbfc, font size: 22.5pt (30px), font weight: bold). Expected contrast ratio of 3:1",
+         "html": "<div class=\"text-2xl md:text-3xl font-display font-bold text-electric-400 neon-text\"> +$2.4M </div>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href$=\"ecommerce-revenue-growth\"] > .p-6.md\\:p-8 > .md\\:grid-cols-3.grid-cols-2.grid > .text-center:nth-child(1) > .md\\:text-3xl.neon-text.text-2xl",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#9bbbfc",
+               "contrastRatio": 1.83,
+               "expectedContrastRatio": "3:1",
+               "fgColor": "#3385ff",
+               "fontSize": "22.5pt (30px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+               "shadowColor": "#689afd",
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.83 (foreground color: #3385ff, background color: #9bbbfc, font size: 22.5pt (30px), font weight: bold). Expected contrast ratio of 3:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a href=\"/work/ecommerce-revenue-growth\" class=\"glass-card overflow-hidden card-hover group block md:col-span-2 lg:col-span-2\">",
+                 "target": Array [
+                   "a[href$=\"ecommerce-revenue-growth\"]",
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
+   Element has insufficient color contrast of 1.83 (foreground color: #3385ff, background color: #9bbbfc, font size: 22.5pt (30px), font weight: bold). Expected contrast ratio of 3:1",
+         "html": "<div class=\"text-2xl md:text-3xl font-display font-bold text-electric-400 neon-text\"> +180% </div>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href$=\"ecommerce-revenue-growth\"] > .p-6.md\\:p-8 > .md\\:grid-cols-3.grid-cols-2.grid > .text-center:nth-child(2) > .md\\:text-3xl.neon-text.text-2xl",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#9bbbfc",
+               "contrastRatio": 1.83,
+               "expectedContrastRatio": "3:1",
+               "fgColor": "#3385ff",
+               "fontSize": "22.5pt (30px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+               "shadowColor": "#689afd",
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.83 (foreground color: #3385ff, background color: #9bbbfc, font size: 22.5pt (30px), font weight: bold). Expected contrast ratio of 3:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a href=\"/work/ecommerce-revenue-growth\" class=\"glass-card overflow-hidden card-hover group block md:col-span-2 lg:col-span-2\">",
+                 "target": Array [
+                   "a[href$=\"ecommerce-revenue-growth\"]",
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
+   Element has insufficient color contrast of 1.83 (foreground color: #3385ff, background color: #9bbbfc, font size: 22.5pt (30px), font weight: bold). Expected contrast ratio of 3:1",
+         "html": "<div class=\"text-2xl md:text-3xl font-display font-bold text-electric-400 neon-text\"> 4.2x </div>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href$=\"ecommerce-revenue-growth\"] > .p-6.md\\:p-8 > .md\\:grid-cols-3.grid-cols-2.grid > .text-center:nth-child(3) > .md\\:text-3xl.neon-text.text-2xl",
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
+                 "html": "<a href=\"/work/ecommerce-revenue-growth\" class=\"glass-card overflow-hidden card-hover group block md:col-span-2 lg:col-span-2\">",
+                 "target": Array [
+                   "a[href$=\"ecommerce-revenue-growth\"]",
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
+         "html": "<span class=\"text-sm text-electric-400 font-medium group-hover:neon-text\">View Case Study</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href$=\"ecommerce-revenue-growth\"] > .p-6.md\\:p-8 > .mt-6.pt-6.border-light-200 > .group-hover\\:neon-text.font-medium.text-electric-400",
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
+               "fontSize": "9.0pt (12px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.38 (foreground color: #3385ff, background color: #fafafa, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a href=\"/work/techflow-saas-growth\" class=\"glass-card overflow-hidden card-hover group block md:col-span-2 lg:col-span-2\">",
+                 "target": Array [
+                   "a[href$=\"techflow-saas-growth\"]",
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
+   Element has insufficient color contrast of 3.38 (foreground color: #3385ff, background color: #fafafa, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-xs text-electric-400 font-medium uppercase tracking-wider\">SaaS</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href$=\"techflow-saas-growth\"] > .p-6.md\\:p-8 > .gap-3.mb-4.flex > .uppercase.tracking-wider.text-xs",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#c8d9fb",
+               "contrastRatio": 2.48,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#3385ff",
+               "fontSize": "9.0pt (12px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.48 (foreground color: #3385ff, background color: #c8d9fb, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<span class=\"px-2 py-1 text-xs bg-electric-500/20 text-electric-400 rounded\">
+ Featured
+ </span>",
+                 "target": Array [
+                   "a[href$=\"techflow-saas-growth\"] > .p-6.md\\:p-8 > .gap-3.mb-4.flex > .px-2.py-1.rounded",
+                 ],
+               },
+               Object {
+                 "html": "<a href=\"/work/techflow-saas-growth\" class=\"glass-card overflow-hidden card-hover group block md:col-span-2 lg:col-span-2\">",
+                 "target": Array [
+                   "a[href$=\"techflow-saas-growth\"]",
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
+   Element has insufficient color contrast of 2.48 (foreground color: #3385ff, background color: #c8d9fb, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"px-2 py-1 text-xs bg-electric-500/20 text-electric-400 rounded\">
+ Featured
+ </span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href$=\"techflow-saas-growth\"] > .p-6.md\\:p-8 > .gap-3.mb-4.flex > .px-2.py-1.rounded",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#9bbbfc",
+               "contrastRatio": 1.83,
+               "expectedContrastRatio": "3:1",
+               "fgColor": "#3385ff",
+               "fontSize": "22.5pt (30px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+               "shadowColor": "#689afd",
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.83 (foreground color: #3385ff, background color: #9bbbfc, font size: 22.5pt (30px), font weight: bold). Expected contrast ratio of 3:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a href=\"/work/techflow-saas-growth\" class=\"glass-card overflow-hidden card-hover group block md:col-span-2 lg:col-span-2\">",
+                 "target": Array [
+                   "a[href$=\"techflow-saas-growth\"]",
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
+   Element has insufficient color contrast of 1.83 (foreground color: #3385ff, background color: #9bbbfc, font size: 22.5pt (30px), font weight: bold). Expected contrast ratio of 3:1",
+         "html": "<div class=\"text-2xl md:text-3xl font-display font-bold text-electric-400 neon-text\"> +280% </div>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href$=\"techflow-saas-growth\"] > .p-6.md\\:p-8 > .md\\:grid-cols-3.grid-cols-2.grid > .text-center:nth-child(1) > .md\\:text-3xl.neon-text.text-2xl",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#9bbbfc",
+               "contrastRatio": 1.83,
+               "expectedContrastRatio": "3:1",
+               "fgColor": "#3385ff",
+               "fontSize": "22.5pt (30px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+               "shadowColor": "#689afd",
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.83 (foreground color: #3385ff, background color: #9bbbfc, font size: 22.5pt (30px), font weight: bold). Expected contrast ratio of 3:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a href=\"/work/techflow-saas-growth\" class=\"glass-card overflow-hidden card-hover group block md:col-span-2 lg:col-span-2\">",
+                 "target": Array [
+                   "a[href$=\"techflow-saas-growth\"]",
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
+   Element has insufficient color contrast of 1.83 (foreground color: #3385ff, background color: #9bbbfc, font size: 22.5pt (30px), font weight: bold). Expected contrast ratio of 3:1",
+         "html": "<div class=\"text-2xl md:text-3xl font-display font-bold text-electric-400 neon-text\"> -45% </div>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href$=\"techflow-saas-growth\"] > .p-6.md\\:p-8 > .md\\:grid-cols-3.grid-cols-2.grid > .text-center:nth-child(2) > .md\\:text-3xl.neon-text.text-2xl",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#9bbbfc",
+               "contrastRatio": 1.83,
+               "expectedContrastRatio": "3:1",
+               "fgColor": "#3385ff",
+               "fontSize": "22.5pt (30px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+               "shadowColor": "#689afd",
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.83 (foreground color: #3385ff, background color: #9bbbfc, font size: 22.5pt (30px), font weight: bold). Expected contrast ratio of 3:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a href=\"/work/techflow-saas-growth\" class=\"glass-card overflow-hidden card-hover group block md:col-span-2 lg:col-span-2\">",
+                 "target": Array [
+                   "a[href$=\"techflow-saas-growth\"]",
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
+   Element has insufficient color contrast of 1.83 (foreground color: #3385ff, background color: #9bbbfc, font size: 22.5pt (30px), font weight: bold). Expected contrast ratio of 3:1",
+         "html": "<div class=\"text-2xl md:text-3xl font-display font-bold text-electric-400 neon-text\"> +156% </div>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href$=\"techflow-saas-growth\"] > .p-6.md\\:p-8 > .md\\:grid-cols-3.grid-cols-2.grid > .text-center:nth-child(3) > .md\\:text-3xl.neon-text.text-2xl",
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
+                 "html": "<a href=\"/work/techflow-saas-growth\" class=\"glass-card overflow-hidden card-hover group block md:col-span-2 lg:col-span-2\">",
+                 "target": Array [
+                   "a[href$=\"techflow-saas-growth\"]",
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
+         "html": "<span class=\"text-sm text-electric-400 font-medium group-hover:neon-text\">View Case Study</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href$=\"techflow-saas-growth\"] > .p-6.md\\:p-8 > .mt-6.pt-6.border-light-200 > .group-hover\\:neon-text.font-medium.text-electric-400",
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
+                   ".bg-dark-800\\/50.section:nth-child(6)",
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
+         "html": "<span class=\"text-electric-400\">Process</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".bg-dark-800\\/50.section:nth-child(6) > .container-custom > .mb-12.text-center > h2 > .text-electric-400",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#858585",
+               "contrastRatio": 1.45,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#9ca3af",
+               "fontSize": "12.0pt (16px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.45 (foreground color: #9ca3af, background color: #858585, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<section class=\"section bg-dark-800/50\">",
+                 "target": Array [
+                   ".bg-dark-800\\/50.section:nth-child(6)",
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
+   Element has insufficient color contrast of 1.45 (foreground color: #9ca3af, background color: #858585, font size: 12.0pt (16px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<p class=\"text-gray-400 max-w-2xl mx-auto\">
+ A proven methodology that delivers consistent, measurable results.
+ </p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".bg-dark-800\\/50.section:nth-child(6) > .container-custom > .mb-12.text-center > .max-w-2xl.mx-auto",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#6a7b9d",
+               "contrastRatio": 1.2,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#3385ff",
+               "fontSize": "12.0pt (16px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.2 (foreground color: #3385ff, background color: #6a7b9d, font size: 12.0pt (16px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"flex-shrink-0 w-12 h-12 rounded-xl bg-electric-500/20 flex items-center justify-center border border-electric-500/30\"> <span class=\"font-display font-bold text-electric-400\">01</span> </div>",
+                 "target": Array [
+                   ".relative:nth-child(1) > .items-start.gap-4.flex > .w-12.h-12.border-electric-500\\/30",
+                 ],
+               },
+               Object {
+                 "html": "<section class=\"section bg-dark-800/50\">",
+                 "target": Array [
+                   ".bg-dark-800\\/50.section:nth-child(6)",
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
+   Element has insufficient color contrast of 1.2 (foreground color: #3385ff, background color: #6a7b9d, font size: 12.0pt (16px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-display font-bold text-electric-400\">01</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".relative:nth-child(1) > .items-start.gap-4.flex > .w-12.h-12.border-electric-500\\/30 > .font-bold.text-electric-400",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#858585",
+               "contrastRatio": 3.69,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#ffffff",
+               "fontSize": "13.5pt (18px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.69 (foreground color: #ffffff, background color: #858585, font size: 13.5pt (18px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<section class=\"section bg-dark-800/50\">",
+                 "target": Array [
+                   ".bg-dark-800\\/50.section:nth-child(6)",
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
+   Element has insufficient color contrast of 3.69 (foreground color: #ffffff, background color: #858585, font size: 13.5pt (18px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<h3 class=\"font-display text-lg font-semibold text-white mb-2\">Discover</h3>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".relative:nth-child(1) > .items-start.gap-4.flex > .pb-8.flex-1 > .mb-2.text-lg",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#858585",
+               "contrastRatio": 1.45,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#9ca3af",
+               "fontSize": "10.5pt (14px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.45 (foreground color: #9ca3af, background color: #858585, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<section class=\"section bg-dark-800/50\">",
+                 "target": Array [
+                   ".bg-dark-800\\/50.section:nth-child(6)",
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
+   Element has insufficient color contrast of 1.45 (foreground color: #9ca3af, background color: #858585, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<p class=\"text-gray-400 text-sm leading-relaxed\">We dive deep into your business, market, and competitors to uncover growth opportunities.</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".relative:nth-child(1) > .items-start.gap-4.flex > .pb-8.flex-1 > .leading-relaxed",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#6a7b9d",
+               "contrastRatio": 1.2,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#3385ff",
+               "fontSize": "12.0pt (16px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.2 (foreground color: #3385ff, background color: #6a7b9d, font size: 12.0pt (16px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"flex-shrink-0 w-12 h-12 rounded-xl bg-electric-500/20 flex items-center justify-center border border-electric-500/30\"> <span class=\"font-display font-bold text-electric-400\">02</span> </div>",
+                 "target": Array [
+                   ".relative:nth-child(2) > .items-start.gap-4.flex > .w-12.h-12.border-electric-500\\/30",
+                 ],
+               },
+               Object {
+                 "html": "<section class=\"section bg-dark-800/50\">",
+                 "target": Array [
+                   ".bg-dark-800\\/50.section:nth-child(6)",
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
+   Element has insufficient color contrast of 1.2 (foreground color: #3385ff, background color: #6a7b9d, font size: 12.0pt (16px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-display font-bold text-electric-400\">02</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".relative:nth-child(2) > .items-start.gap-4.flex > .w-12.h-12.border-electric-500\\/30 > .font-bold.text-electric-400",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#858585",
+               "contrastRatio": 3.69,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#ffffff",
+               "fontSize": "13.5pt (18px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.69 (foreground color: #ffffff, background color: #858585, font size: 13.5pt (18px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<section class=\"section bg-dark-800/50\">",
+                 "target": Array [
+                   ".bg-dark-800\\/50.section:nth-child(6)",
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
+   Element has insufficient color contrast of 3.69 (foreground color: #ffffff, background color: #858585, font size: 13.5pt (18px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<h3 class=\"font-display text-lg font-semibold text-white mb-2\">Strategize</h3>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".relative:nth-child(2) > .items-start.gap-4.flex > .pb-8.flex-1 > .mb-2.text-lg",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#858585",
+               "contrastRatio": 1.45,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#9ca3af",
+               "fontSize": "10.5pt (14px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.45 (foreground color: #9ca3af, background color: #858585, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<section class=\"section bg-dark-800/50\">",
+                 "target": Array [
+                   ".bg-dark-800\\/50.section:nth-child(6)",
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
+   Element has insufficient color contrast of 1.45 (foreground color: #9ca3af, background color: #858585, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<p class=\"text-gray-400 text-sm leading-relaxed\">Our team crafts a custom, data-driven marketing strategy aligned with your goals.</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".relative:nth-child(2) > .items-start.gap-4.flex > .pb-8.flex-1 > .leading-relaxed",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#6a7b9d",
+               "contrastRatio": 1.2,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#3385ff",
+               "fontSize": "12.0pt (16px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.2 (foreground color: #3385ff, background color: #6a7b9d, font size: 12.0pt (16px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"flex-shrink-0 w-12 h-12 rounded-xl bg-electric-500/20 flex items-center justify-center border border-electric-500/30\"> <span class=\"font-display font-bold text-electric-400\">03</span> </div>",
+                 "target": Array [
+                   ".relative:nth-child(3) > .items-start.gap-4.flex > .w-12.h-12.border-electric-500\\/30",
+                 ],
+               },
+               Object {
+                 "html": "<section class=\"section bg-dark-800/50\">",
+                 "target": Array [
+                   ".bg-dark-800\\/50.section:nth-child(6)",
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
+   Element has insufficient color contrast of 1.2 (foreground color: #3385ff, background color: #6a7b9d, font size: 12.0pt (16px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-display font-bold text-electric-400\">03</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".relative:nth-child(3) > .items-start.gap-4.flex > .w-12.h-12.border-electric-500\\/30 > .font-bold.text-electric-400",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#858585",
+               "contrastRatio": 3.69,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#ffffff",
+               "fontSize": "13.5pt (18px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.69 (foreground color: #ffffff, background color: #858585, font size: 13.5pt (18px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<section class=\"section bg-dark-800/50\">",
+                 "target": Array [
+                   ".bg-dark-800\\/50.section:nth-child(6)",
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
+   Element has insufficient color contrast of 3.69 (foreground color: #ffffff, background color: #858585, font size: 13.5pt (18px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<h3 class=\"font-display text-lg font-semibold text-white mb-2\">Execute</h3>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".relative:nth-child(3) > .items-start.gap-4.flex > .pb-8.flex-1 > .mb-2.text-lg",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#858585",
+               "contrastRatio": 1.45,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#9ca3af",
+               "fontSize": "10.5pt (14px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.45 (foreground color: #9ca3af, background color: #858585, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<section class=\"section bg-dark-800/50\">",
+                 "target": Array [
+                   ".bg-dark-800\\/50.section:nth-child(6)",
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
+   Element has insufficient color contrast of 1.45 (foreground color: #9ca3af, background color: #858585, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<p class=\"text-gray-400 text-sm leading-relaxed\">We implement campaigns with precision, using cutting-edge tools and AI optimization.</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".relative:nth-child(3) > .items-start.gap-4.flex > .pb-8.flex-1 > .leading-relaxed",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#6a7b9d",
+               "contrastRatio": 1.2,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#3385ff",
+               "fontSize": "12.0pt (16px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.2 (foreground color: #3385ff, background color: #6a7b9d, font size: 12.0pt (16px), font weight: bold). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"flex-shrink-0 w-12 h-12 rounded-xl bg-electric-500/20 flex items-center justify-center border border-electric-500/30\"> <span class=\"font-display font-bold text-electric-400\">04</span> </div>",
+                 "target": Array [
+                   ".relative:nth-child(4) > .items-start.gap-4.flex > .w-12.h-12.border-electric-500\\/30",
+                 ],
+               },
+               Object {
+                 "html": "<section class=\"section bg-dark-800/50\">",
+                 "target": Array [
+                   ".bg-dark-800\\/50.section:nth-child(6)",
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
+   Element has insufficient color contrast of 1.2 (foreground color: #3385ff, background color: #6a7b9d, font size: 12.0pt (16px), font weight: bold). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"font-display font-bold text-electric-400\">04</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".relative:nth-child(4) > .items-start.gap-4.flex > .w-12.h-12.border-electric-500\\/30 > .font-bold.text-electric-400",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#858585",
+               "contrastRatio": 3.69,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#ffffff",
+               "fontSize": "13.5pt (18px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.69 (foreground color: #ffffff, background color: #858585, font size: 13.5pt (18px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<section class=\"section bg-dark-800/50\">",
+                 "target": Array [
+                   ".bg-dark-800\\/50.section:nth-child(6)",
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
+   Element has insufficient color contrast of 3.69 (foreground color: #ffffff, background color: #858585, font size: 13.5pt (18px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<h3 class=\"font-display text-lg font-semibold text-white mb-2\">Optimize</h3>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".relative:nth-child(4) > .items-start.gap-4.flex > .pb-8.flex-1 > .mb-2.text-lg",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#858585",
+               "contrastRatio": 1.45,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#9ca3af",
+               "fontSize": "10.5pt (14px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.45 (foreground color: #9ca3af, background color: #858585, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<section class=\"section bg-dark-800/50\">",
+                 "target": Array [
+                   ".bg-dark-800\\/50.section:nth-child(6)",
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
+   Element has insufficient color contrast of 1.45 (foreground color: #9ca3af, background color: #858585, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<p class=\"text-gray-400 text-sm leading-relaxed\">Continuous testing and refinement to maximize performance and ROI.</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".relative:nth-child(4) > .items-start.gap-4.flex > .pb-8.flex-1 > .leading-relaxed",
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
      - generic [ref=e33]: AI-Powered Marketing Solutions
      - heading "Your Dedicated Marketer" [level=1] [ref=e34]:
        - text: Your Dedicated
        - text: Marketer
      - paragraph [ref=e35]: AI-Powered Growth for the Modern Brand. Transform your digital presence with data-driven strategies that deliver measurable results.
      - generic [ref=e36]:
        - link "Start Your Growth Journey" [ref=e37] [cursor=pointer]:
          - /url: /contact
        - link "View Case Studies" [ref=e38] [cursor=pointer]:
          - /url: /work
      - generic [ref=e39]:
        - generic [ref=e40]:
          - generic [ref=e41]: 150+
          - generic [ref=e42]: Clients Served
        - generic [ref=e43]:
          - generic [ref=e44]: $50M+
          - generic [ref=e45]: Revenue Generated
        - generic [ref=e46]:
          - generic [ref=e47]: 340%
          - generic [ref=e48]: Avg. ROI
        - generic [ref=e49]:
          - generic [ref=e50]: 98%
          - generic [ref=e51]: Client Retention
    - generic [ref=e53]:
      - paragraph [ref=e54]: Trusted by innovative brands
      - generic [ref=e56]:
        - generic [ref=e58]: TC
        - generic [ref=e60]: IL
        - generic [ref=e62]: GC
        - generic [ref=e64]: DD
        - generic [ref=e66]: SU
        - generic [ref=e68]: NG
        - generic [ref=e70]: CF
        - generic [ref=e72]: DE
        - generic [ref=e74]: TC
        - generic [ref=e76]: IL
        - generic [ref=e78]: GC
        - generic [ref=e80]: DD
        - generic [ref=e82]: SU
        - generic [ref=e84]: NG
        - generic [ref=e86]: CF
        - generic [ref=e88]: DE
    - generic [ref=e90]:
      - generic [ref=e91]:
        - heading "Our Services" [level=2] [ref=e92]
        - paragraph [ref=e93]: Comprehensive digital marketing solutions designed to accelerate your growth.
      - generic [ref=e94]:
        - link "SEO Dominate search rankings with AI-powered optimization strategies that drive organic growth. Learn more" [ref=e95] [cursor=pointer]:
          - /url: /services/seo
          - img [ref=e97]
          - heading "SEO" [level=3] [ref=e99]
          - paragraph [ref=e100]: Dominate search rankings with AI-powered optimization strategies that drive organic growth.
          - generic [ref=e101]:
            - text: Learn more
            - img [ref=e102]
        - link "Paid Media Maximize ROI with data-driven paid advertising across Google, Meta, LinkedIn, and more. Learn more" [ref=e104] [cursor=pointer]:
          - /url: /services/paid-media
          - img [ref=e106]
          - heading "Paid Media" [level=3] [ref=e108]
          - paragraph [ref=e109]: Maximize ROI with data-driven paid advertising across Google, Meta, LinkedIn, and more.
          - generic [ref=e110]:
            - text: Learn more
            - img [ref=e111]
        - link "Content Marketing Build authority and engage your audience with strategic content that converts. Learn more" [ref=e113] [cursor=pointer]:
          - /url: /services/content-marketing
          - img [ref=e115]
          - heading "Content Marketing" [level=3] [ref=e117]
          - paragraph [ref=e118]: Build authority and engage your audience with strategic content that converts.
          - generic [ref=e119]:
            - text: Learn more
            - img [ref=e120]
        - link "Email Automation Nurture leads and drive conversions with intelligent email sequences and automation. Learn more" [ref=e122] [cursor=pointer]:
          - /url: /services/email-automation
          - img [ref=e124]
          - heading "Email Automation" [level=3] [ref=e126]
          - paragraph [ref=e127]: Nurture leads and drive conversions with intelligent email sequences and automation.
          - generic [ref=e128]:
            - text: Learn more
            - img [ref=e129]
      - link "View All Services" [ref=e132] [cursor=pointer]:
        - /url: /services
        - text: View All Services
        - img [ref=e133]
    - generic [ref=e137]:
      - generic [ref=e138]:
        - heading "Problems We Solve" [level=2] [ref=e139]
        - paragraph [ref=e140]: Every business faces unique marketing challenges. We identify the root causes and implement targeted solutions that drive real results.
        - generic [ref=e141]:
          - generic [ref=e142]:
            - img [ref=e144]
            - generic [ref=e146]:
              - heading "Low Organic Visibility" [level=3] [ref=e147]
              - paragraph [ref=e148]: Your website isn't ranking for key search terms, missing valuable traffic.
          - generic [ref=e149]:
            - img [ref=e151]
            - generic [ref=e153]:
              - heading "Inefficient Ad Spend" [level=3] [ref=e154]
              - paragraph [ref=e155]: PPC campaigns drain budget without delivering measurable results.
          - generic [ref=e156]:
            - img [ref=e158]
            - generic [ref=e160]:
              - heading "Poor Lead Quality" [level=3] [ref=e161]
              - paragraph [ref=e162]: Marketing generates volume but leads don't convert to customers.
          - generic [ref=e163]:
            - img [ref=e165]
            - generic [ref=e167]:
              - heading "Inconsistent Content" [level=3] [ref=e168]
              - paragraph [ref=e169]: No clear content strategy or execution plan to build authority.
      - generic [ref=e172]:
        - heading "Ready to Transform?" [level=3] [ref=e173]
        - paragraph [ref=e174]: Let's discuss how we can help overcome your marketing challenges and unlock new growth opportunities.
        - link "Schedule a Free Consultation" [ref=e175] [cursor=pointer]:
          - /url: /contact
    - generic [ref=e177]:
      - generic [ref=e178]:
        - generic [ref=e179]:
          - heading "Featured Case Studies" [level=2] [ref=e180]
          - paragraph [ref=e181]: Real results from real clients. Discover how we've helped brands achieve extraordinary growth.
        - link "View All Work" [ref=e182] [cursor=pointer]:
          - /url: /work
      - generic [ref=e183]:
        - 'link "StyleHouse E-commerce: $2.4M Revenue Growth E-commerce Featured StyleHouse E-commerce: $2.4M Revenue Growth StyleHouse +$2.4M Revenue Growth +180% Email Revenue 4.2x ROAS Improvement View Case Study" [ref=e184] [cursor=pointer]':
          - /url: /work/ecommerce-revenue-growth
          - 'img "StyleHouse E-commerce: $2.4M Revenue Growth" [ref=e186]'
          - generic [ref=e187]:
            - generic [ref=e188]:
              - generic [ref=e189]: E-commerce
              - generic [ref=e190]: Featured
            - 'heading "StyleHouse E-commerce: $2.4M Revenue Growth" [level=3] [ref=e191]'
            - paragraph [ref=e192]: StyleHouse
            - generic [ref=e193]:
              - generic [ref=e194]:
                - generic [ref=e195]: +$2.4M
                - generic [ref=e196]: Revenue Growth
              - generic [ref=e197]:
                - generic [ref=e198]: +180%
                - generic [ref=e199]: Email Revenue
              - generic [ref=e200]:
                - generic [ref=e201]: 4.2x
                - generic [ref=e202]: ROAS Improvement
            - generic [ref=e203]:
              - generic [ref=e204]: View Case Study
              - img [ref=e205]
        - 'link "TechFlow SaaS: 280% Increase in Trial Signups SaaS Featured TechFlow SaaS: 280% Increase in Trial Signups TechFlow +280% Trial Signups -45% CAC Reduction +156% Organic Traffic View Case Study" [ref=e207] [cursor=pointer]':
          - /url: /work/techflow-saas-growth
          - 'img "TechFlow SaaS: 280% Increase in Trial Signups" [ref=e209]'
          - generic [ref=e210]:
            - generic [ref=e211]:
              - generic [ref=e212]: SaaS
              - generic [ref=e213]: Featured
            - 'heading "TechFlow SaaS: 280% Increase in Trial Signups" [level=3] [ref=e214]'
            - paragraph [ref=e215]: TechFlow
            - generic [ref=e216]:
              - generic [ref=e217]:
                - generic [ref=e218]: +280%
                - generic [ref=e219]: Trial Signups
              - generic [ref=e220]:
                - generic [ref=e221]: "-45%"
                - generic [ref=e222]: CAC Reduction
              - generic [ref=e223]:
                - generic [ref=e224]: +156%
                - generic [ref=e225]: Organic Traffic
            - generic [ref=e226]:
              - generic [ref=e227]: View Case Study
              - img [ref=e228]
    - generic [ref=e231]:
      - generic [ref=e232]:
        - heading "Our Process" [level=2] [ref=e233]
        - paragraph [ref=e234]: A proven methodology that delivers consistent, measurable results.
      - generic [ref=e235]:
        - generic [ref=e237]:
          - generic [ref=e239]: "01"
          - generic [ref=e240]:
            - heading "Discover" [level=3] [ref=e241]
            - paragraph [ref=e242]: We dive deep into your business, market, and competitors to uncover growth opportunities.
        - generic [ref=e245]:
          - generic [ref=e247]: "02"
          - generic [ref=e248]:
            - heading "Strategize" [level=3] [ref=e249]
            - paragraph [ref=e250]: Our team crafts a custom, data-driven marketing strategy aligned with your goals.
        - generic [ref=e253]:
          - generic [ref=e255]: "03"
          - generic [ref=e256]:
            - heading "Execute" [level=3] [ref=e257]
            - paragraph [ref=e258]: We implement campaigns with precision, using cutting-edge tools and AI optimization.
        - generic [ref=e261]:
          - generic [ref=e263]: "04"
          - generic [ref=e264]:
            - heading "Optimize" [level=3] [ref=e265]
            - paragraph [ref=e266]: Continuous testing and refinement to maximize performance and ROI.
    - generic [ref=e271]:
      - heading "Ready to Accelerate Growth?" [level=2] [ref=e272]
      - paragraph [ref=e273]: Join 150+ brands that have transformed their digital presence with our AI-powered marketing strategies.
      - generic [ref=e274]:
        - link "Get Started Today" [ref=e275] [cursor=pointer]:
          - /url: /contact
        - link "View Pricing" [ref=e276] [cursor=pointer]:
          - /url: /pricing
  - contentinfo [ref=e277]:
    - generic [ref=e278]:
      - generic [ref=e279]:
        - generic [ref=e280]:
          - link "Y Your Dedicated Marketer" [ref=e281] [cursor=pointer]:
            - /url: /
            - generic [ref=e283]: "Y"
            - generic [ref=e284]: Your Dedicated Marketer
          - paragraph [ref=e285]: AI-powered growth strategies for modern brands. Transform your digital presence with data-driven marketing.
          - generic [ref=e286]:
            - link "Twitter" [ref=e287] [cursor=pointer]:
              - /url: https://twitter.com/yourdedicatedmarketer
              - img [ref=e288]
            - link "LinkedIn" [ref=e290] [cursor=pointer]:
              - /url: https://linkedin.com/company/yourdedicatedmarketer
              - img [ref=e291]
            - link "Instagram" [ref=e293] [cursor=pointer]:
              - /url: https://instagram.com/yourdedicatedmarketer
              - img [ref=e294]
        - generic [ref=e296]:
          - heading "Services" [level=4] [ref=e297]
          - list [ref=e298]:
            - listitem [ref=e299]:
              - link "SEO" [ref=e300] [cursor=pointer]:
                - /url: /services/seo
            - listitem [ref=e301]:
              - link "Paid Media" [ref=e302] [cursor=pointer]:
                - /url: /services/paid-media
            - listitem [ref=e303]:
              - link "Content Marketing" [ref=e304] [cursor=pointer]:
                - /url: /services/content-marketing
            - listitem [ref=e305]:
              - link "Email Automation" [ref=e306] [cursor=pointer]:
                - /url: /services/email-automation
            - listitem [ref=e307]:
              - link "Analytics & Reporting" [ref=e308] [cursor=pointer]:
                - /url: /services/analytics-and-reporting
        - generic [ref=e309]:
          - heading "Company" [level=4] [ref=e310]
          - list [ref=e311]:
            - listitem [ref=e312]:
              - link "About Us" [ref=e313] [cursor=pointer]:
                - /url: /about
            - listitem [ref=e314]:
              - link "Our Team" [ref=e315] [cursor=pointer]:
                - /url: /team
            - listitem [ref=e316]:
              - link "Case Studies" [ref=e317] [cursor=pointer]:
                - /url: /work
            - listitem [ref=e318]:
              - link "Blog" [ref=e319] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e320]:
              - link "Careers" [ref=e321] [cursor=pointer]:
                - /url: /careers
        - generic [ref=e322]:
          - heading "Resources" [level=4] [ref=e323]
          - list [ref=e324]:
            - listitem [ref=e325]:
              - link "Pricing" [ref=e326] [cursor=pointer]:
                - /url: /pricing
            - listitem [ref=e327]:
              - link "FAQ" [ref=e328] [cursor=pointer]:
                - /url: /faq
            - listitem [ref=e329]:
              - link "Industries" [ref=e330] [cursor=pointer]:
                - /url: /industries/saas
            - listitem [ref=e331]:
              - link "Contact" [ref=e332] [cursor=pointer]:
                - /url: /contact
        - generic [ref=e333]:
          - heading "Legal" [level=4] [ref=e334]
          - list [ref=e335]:
            - listitem [ref=e336]:
              - link "Privacy Policy" [ref=e337] [cursor=pointer]:
                - /url: /privacy-policy
            - listitem [ref=e338]:
              - link "Terms of Service" [ref=e339] [cursor=pointer]:
                - /url: /terms-of-service
      - generic [ref=e340]:
        - paragraph [ref=e341]: © 2026 Your Dedicated Marketer. All rights reserved.
        - paragraph [ref=e342]: Built with Astro & Tailwind CSS
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
> 10 |     expect(accessibilityScanResults.violations).toEqual([]);
     |                                                 ^ Error: expect(received).toEqual(expected) // deep equality
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
  55 |     expect(accessibilityScanResults.violations).toEqual([]);
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