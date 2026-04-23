# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: a11y.spec.ts >> Accessibility Tests >> about page should not have automatically detectable WCAG A or AA violations
- Location: src\test\a11y.spec.ts:13:3

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  -    1
+ Received  + 2308

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
+                   ".bg-dark-800\\/50.section:nth-child(2)",
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
+         "html": "<span class=\"text-electric-400\">Different</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".bg-dark-800\\/50.section:nth-child(2) > .container-custom > .mb-12.text-center > .text-3xl.md\\:text-4xl > .text-electric-400",
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
+                   ".bg-dark-800\\/50.section:nth-child(2)",
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
+ We're not just another marketing agency. We're your dedicated growth partners.
+ </p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".bg-dark-800\\/50.section:nth-child(2) > .container-custom > .mb-12.text-center > .max-w-2xl.mx-auto",
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
+                   ".p-6.text-center.glass-card:nth-child(1)",
+                 ],
+               },
+               Object {
+                 "html": "<section class=\"section bg-dark-800/50\">",
+                 "target": Array [
+                   ".bg-dark-800\\/50.section:nth-child(2)",
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
+           ".p-6.text-center.glass-card:nth-child(1) > .mb-2",
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
+                   ".p-6.text-center.glass-card:nth-child(1)",
+                 ],
+               },
+               Object {
+                 "html": "<section class=\"section bg-dark-800/50\">",
+                 "target": Array [
+                   ".bg-dark-800\\/50.section:nth-child(2)",
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
+         "html": "<p class=\"text-sm text-gray-400\">Every decision backed by metrics and insights, not assumptions.</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.text-center.glass-card:nth-child(1) > p",
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
+                   ".p-6.text-center.glass-card:nth-child(2)",
+                 ],
+               },
+               Object {
+                 "html": "<section class=\"section bg-dark-800/50\">",
+                 "target": Array [
+                   ".bg-dark-800\\/50.section:nth-child(2)",
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
+         "html": "<h3 class=\"font-display font-semibold text-white mb-2\">Transparent</h3>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.text-center.glass-card:nth-child(2) > .mb-2",
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
+                   ".p-6.text-center.glass-card:nth-child(2)",
+                 ],
+               },
+               Object {
+                 "html": "<section class=\"section bg-dark-800/50\">",
+                 "target": Array [
+                   ".bg-dark-800\\/50.section:nth-child(2)",
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
+         "html": "<p class=\"text-sm text-gray-400\">Full visibility into strategies, spend, and results at all times.</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.text-center.glass-card:nth-child(2) > p",
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
+                   ".p-6.text-center.glass-card:nth-child(3)",
+                 ],
+               },
+               Object {
+                 "html": "<section class=\"section bg-dark-800/50\">",
+                 "target": Array [
+                   ".bg-dark-800\\/50.section:nth-child(2)",
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
+         "html": "<h3 class=\"font-display font-semibold text-white mb-2\">Innovative</h3>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.text-center.glass-card:nth-child(3) > .mb-2",
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
+                   ".p-6.text-center.glass-card:nth-child(3)",
+                 ],
+               },
+               Object {
+                 "html": "<section class=\"section bg-dark-800/50\">",
+                 "target": Array [
+                   ".bg-dark-800\\/50.section:nth-child(2)",
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
+         "html": "<p class=\"text-sm text-gray-400\">Constantly exploring new technologies and methodologies.</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.text-center.glass-card:nth-child(3) > p",
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
+                   ".p-6.text-center.glass-card:nth-child(4)",
+                 ],
+               },
+               Object {
+                 "html": "<section class=\"section bg-dark-800/50\">",
+                 "target": Array [
+                   ".bg-dark-800\\/50.section:nth-child(2)",
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
+         "html": "<h3 class=\"font-display font-semibold text-white mb-2\">Results-Focused</h3>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.text-center.glass-card:nth-child(4) > .mb-2",
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
+                   ".p-6.text-center.glass-card:nth-child(4)",
+                 ],
+               },
+               Object {
+                 "html": "<section class=\"section bg-dark-800/50\">",
+                 "target": Array [
+                   ".bg-dark-800\\/50.section:nth-child(2)",
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
+         "html": "<p class=\"text-sm text-gray-400\">Your success is our only metric that matters.</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.text-center.glass-card:nth-child(4) > p",
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
+         "html": "<p class=\"text-gray-400 max-w-2xl mx-auto\">Meet the experts behind your growth.</p>",
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
+               "bgColor": "#c8d9fb",
+               "contrastRatio": 2.48,
+               "expectedContrastRatio": "3:1",
+               "fgColor": "#3385ff",
+               "fontSize": "18.0pt (24px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.48 (foreground color: #3385ff, background color: #c8d9fb, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"w-24 h-24 rounded-full bg-electric-500/20 flex items-center justify-center mb-4 group-hover:shadow-neon-sm transition-shadow overflow-hidden\"> <span class=\"text-2xl font-display font-bold text-electric-400\"> AC </span> </div>",
+                 "target": Array [
+                   ".card-hover.group.p-6:nth-child(1) > .flex-col.text-center.items-center > .w-24.h-24.rounded-full",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\">",
+                 "target": Array [
+                   ".card-hover.group.p-6:nth-child(1)",
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
+   Element has insufficient color contrast of 2.48 (foreground color: #3385ff, background color: #c8d9fb, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+         "html": "<span class=\"text-2xl font-display font-bold text-electric-400\"> AC </span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".card-hover.group.p-6:nth-child(1) > .flex-col.text-center.items-center > .w-24.h-24.rounded-full > .text-2xl.font-bold.text-electric-400",
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
+               "fontSize": "13.5pt (18px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.04 (foreground color: #ffffff, background color: #fafafa, font size: 13.5pt (18px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\">",
+                 "target": Array [
+                   ".card-hover.group.p-6:nth-child(1)",
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
+   Element has insufficient color contrast of 1.04 (foreground color: #ffffff, background color: #fafafa, font size: 13.5pt (18px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<h3 class=\"font-display text-lg font-semibold text-white mb-1\">Alex Chen</h3>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".card-hover.group.p-6:nth-child(1) > .flex-col.text-center.items-center > .mb-1.text-lg",
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
+                 "html": "<div class=\"glass-card p-6 card-hover group\">",
+                 "target": Array [
+                   ".card-hover.group.p-6:nth-child(1)",
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
+         "html": "<p class=\"text-electric-400 text-sm mb-3\">Founder &amp; CEO</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".card-hover.group.p-6:nth-child(1) > .flex-col.text-center.items-center > .mb-3.text-electric-400",
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
+                 "html": "<div class=\"glass-card p-6 card-hover group\">",
+                 "target": Array [
+                   ".card-hover.group.p-6:nth-child(1)",
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
+         "html": "<p class=\"text-gray-400 text-sm leading-relaxed mb-4\">15+ years in digital marketing. Former Head of Growth at Fortune 500 companies. Passionate about leveraging AI to transform marketing strategies.</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".card-hover.group.p-6:nth-child(1) > .flex-col.text-center.items-center > .leading-relaxed",
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
+               "fontSize": "9.0pt (12px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafafa, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\">Strategy</span>",
+                 "target": Array [
+                   ".card-hover.group.p-6:nth-child(1) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(1)",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\">",
+                 "target": Array [
+                   ".card-hover.group.p-6:nth-child(1)",
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
+   Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafafa, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\">Strategy</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".card-hover.group.p-6:nth-child(1) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(1)",
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
+               "fontSize": "9.0pt (12px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafafa, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\">Growth</span>",
+                 "target": Array [
+                   ".card-hover.group.p-6:nth-child(1) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(2)",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\">",
+                 "target": Array [
+                   ".card-hover.group.p-6:nth-child(1)",
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
+   Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafafa, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\">Growth</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".card-hover.group.p-6:nth-child(1) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(2)",
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
+               "fontSize": "9.0pt (12px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafafa, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\">AI</span>",
+                 "target": Array [
+                   ".card-hover.group.p-6:nth-child(1) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(3)",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\">",
+                 "target": Array [
+                   ".card-hover.group.p-6:nth-child(1)",
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
+   Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafafa, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\">AI</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".card-hover.group.p-6:nth-child(1) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(3)",
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
+               "fontSize": "9.0pt (12px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafafa, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\">Leadership</span>",
+                 "target": Array [
+                   ".card-hover.group.p-6:nth-child(1) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(4)",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\">",
+                 "target": Array [
+                   ".card-hover.group.p-6:nth-child(1)",
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
+   Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafafa, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\">Leadership</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".card-hover.group.p-6:nth-child(1) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(4)",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#c8d9fb",
+               "contrastRatio": 2.48,
+               "expectedContrastRatio": "3:1",
+               "fgColor": "#3385ff",
+               "fontSize": "18.0pt (24px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.48 (foreground color: #3385ff, background color: #c8d9fb, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"w-24 h-24 rounded-full bg-electric-500/20 flex items-center justify-center mb-4 group-hover:shadow-neon-sm transition-shadow overflow-hidden\"> <span class=\"text-2xl font-display font-bold text-electric-400\"> SM </span> </div>",
+                 "target": Array [
+                   ".card-hover.group.p-6:nth-child(2) > .flex-col.text-center.items-center > .w-24.h-24.rounded-full",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\">",
+                 "target": Array [
+                   ".card-hover.group.p-6:nth-child(2)",
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
+   Element has insufficient color contrast of 2.48 (foreground color: #3385ff, background color: #c8d9fb, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+         "html": "<span class=\"text-2xl font-display font-bold text-electric-400\"> SM </span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".card-hover.group.p-6:nth-child(2) > .flex-col.text-center.items-center > .w-24.h-24.rounded-full > .text-2xl.font-bold.text-electric-400",
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
+               "fontSize": "13.5pt (18px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.04 (foreground color: #ffffff, background color: #fafafa, font size: 13.5pt (18px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\">",
+                 "target": Array [
+                   ".card-hover.group.p-6:nth-child(2)",
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
+   Element has insufficient color contrast of 1.04 (foreground color: #ffffff, background color: #fafafa, font size: 13.5pt (18px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<h3 class=\"font-display text-lg font-semibold text-white mb-1\">Sarah Mitchell</h3>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".card-hover.group.p-6:nth-child(2) > .flex-col.text-center.items-center > .mb-1.text-lg",
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
+                 "html": "<div class=\"glass-card p-6 card-hover group\">",
+                 "target": Array [
+                   ".card-hover.group.p-6:nth-child(2)",
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
+         "html": "<p class=\"text-electric-400 text-sm mb-3\">Head of SEO</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".card-hover.group.p-6:nth-child(2) > .flex-col.text-center.items-center > .mb-3.text-electric-400",
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
+                 "html": "<div class=\"glass-card p-6 card-hover group\">",
+                 "target": Array [
+                   ".card-hover.group.p-6:nth-child(2)",
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
+         "html": "<p class=\"text-gray-400 text-sm leading-relaxed mb-4\">SEO specialist with 10+ years experience. Helped 100+ brands achieve top rankings. Speaker at major marketing conferences.</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".card-hover.group.p-6:nth-child(2) > .flex-col.text-center.items-center > .leading-relaxed",
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
+               "fontSize": "9.0pt (12px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafafa, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\">SEO</span>",
+                 "target": Array [
+                   ".card-hover.group.p-6:nth-child(2) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(1)",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\">",
+                 "target": Array [
+                   ".card-hover.group.p-6:nth-child(2)",
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
+   Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafafa, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\">SEO</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".card-hover.group.p-6:nth-child(2) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(1)",
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
+               "fontSize": "9.0pt (12px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafafa, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\">Content</span>",
+                 "target": Array [
+                   ".card-hover.group.p-6:nth-child(2) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(2)",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\">",
+                 "target": Array [
+                   ".card-hover.group.p-6:nth-child(2)",
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
+   Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafafa, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\">Content</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".card-hover.group.p-6:nth-child(2) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(2)",
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
+               "fontSize": "9.0pt (12px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafafa, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\">Analytics</span>",
+                 "target": Array [
+                   ".card-hover.group.p-6:nth-child(2) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(3)",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\">",
+                 "target": Array [
+                   ".card-hover.group.p-6:nth-child(2)",
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
+   Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafafa, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\">Analytics</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".card-hover.group.p-6:nth-child(2) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(3)",
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
+               "fontSize": "9.0pt (12px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafafa, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\">Technical SEO</span>",
+                 "target": Array [
+                   ".card-hover.group.p-6:nth-child(2) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(4)",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\">",
+                 "target": Array [
+                   ".card-hover.group.p-6:nth-child(2)",
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
+   Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafafa, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\">Technical SEO</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".card-hover.group.p-6:nth-child(2) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(4)",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#c8d9fb",
+               "contrastRatio": 2.48,
+               "expectedContrastRatio": "3:1",
+               "fgColor": "#3385ff",
+               "fontSize": "18.0pt (24px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.48 (foreground color: #3385ff, background color: #c8d9fb, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"w-24 h-24 rounded-full bg-electric-500/20 flex items-center justify-center mb-4 group-hover:shadow-neon-sm transition-shadow overflow-hidden\"> <span class=\"text-2xl font-display font-bold text-electric-400\"> MJ </span> </div>",
+                 "target": Array [
+                   ".card-hover.group.p-6:nth-child(3) > .flex-col.text-center.items-center > .w-24.h-24.rounded-full",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\">",
+                 "target": Array [
+                   ".card-hover.group.p-6:nth-child(3)",
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
+   Element has insufficient color contrast of 2.48 (foreground color: #3385ff, background color: #c8d9fb, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+         "html": "<span class=\"text-2xl font-display font-bold text-electric-400\"> MJ </span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".card-hover.group.p-6:nth-child(3) > .flex-col.text-center.items-center > .w-24.h-24.rounded-full > .text-2xl.font-bold.text-electric-400",
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
+               "fontSize": "13.5pt (18px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.04 (foreground color: #ffffff, background color: #fafafa, font size: 13.5pt (18px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\">",
+                 "target": Array [
+                   ".card-hover.group.p-6:nth-child(3)",
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
+   Element has insufficient color contrast of 1.04 (foreground color: #ffffff, background color: #fafafa, font size: 13.5pt (18px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<h3 class=\"font-display text-lg font-semibold text-white mb-1\">Marcus Johnson</h3>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".card-hover.group.p-6:nth-child(3) > .flex-col.text-center.items-center > .mb-1.text-lg",
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
+                 "html": "<div class=\"glass-card p-6 card-hover group\">",
+                 "target": Array [
+                   ".card-hover.group.p-6:nth-child(3)",
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
+         "html": "<p class=\"text-electric-400 text-sm mb-3\">Head of Paid Media</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".card-hover.group.p-6:nth-child(3) > .flex-col.text-center.items-center > .mb-3.text-electric-400",
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
+                 "html": "<div class=\"glass-card p-6 card-hover group\">",
+                 "target": Array [
+                   ".card-hover.group.p-6:nth-child(3)",
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
+         "html": "<p class=\"text-gray-400 text-sm leading-relaxed mb-4\">Managed $50M+ in ad spend. Expert in multi-channel campaign optimization. Google and Meta certified professional.</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".card-hover.group.p-6:nth-child(3) > .flex-col.text-center.items-center > .leading-relaxed",
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
+               "fontSize": "9.0pt (12px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafafa, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\">PPC</span>",
+                 "target": Array [
+                   ".card-hover.group.p-6:nth-child(3) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(1)",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\">",
+                 "target": Array [
+                   ".card-hover.group.p-6:nth-child(3)",
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
+   Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafafa, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\">PPC</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".card-hover.group.p-6:nth-child(3) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(1)",
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
+               "fontSize": "9.0pt (12px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafafa, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\">Meta Ads</span>",
+                 "target": Array [
+                   ".card-hover.group.p-6:nth-child(3) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(2)",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\">",
+                 "target": Array [
+                   ".card-hover.group.p-6:nth-child(3)",
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
+   Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafafa, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\">Meta Ads</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".card-hover.group.p-6:nth-child(3) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(2)",
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
+               "fontSize": "9.0pt (12px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafafa, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\">Google Ads</span>",
+                 "target": Array [
+                   ".card-hover.group.p-6:nth-child(3) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(3)",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\">",
+                 "target": Array [
+                   ".card-hover.group.p-6:nth-child(3)",
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
+   Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafafa, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\">Google Ads</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".card-hover.group.p-6:nth-child(3) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(3)",
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
+               "fontSize": "9.0pt (12px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafafa, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\">Programmatic</span>",
+                 "target": Array [
+                   ".card-hover.group.p-6:nth-child(3) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(4)",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\">",
+                 "target": Array [
+                   ".card-hover.group.p-6:nth-child(3)",
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
+   Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafafa, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\">Programmatic</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".card-hover.group.p-6:nth-child(3) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(4)",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#c8d9fb",
+               "contrastRatio": 2.48,
+               "expectedContrastRatio": "3:1",
+               "fgColor": "#3385ff",
+               "fontSize": "18.0pt (24px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.48 (foreground color: #3385ff, background color: #c8d9fb, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"w-24 h-24 rounded-full bg-electric-500/20 flex items-center justify-center mb-4 group-hover:shadow-neon-sm transition-shadow overflow-hidden\"> <span class=\"text-2xl font-display font-bold text-electric-400\"> ER </span> </div>",
+                 "target": Array [
+                   ".card-hover.group.p-6:nth-child(4) > .flex-col.text-center.items-center > .w-24.h-24.rounded-full",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\">",
+                 "target": Array [
+                   ".card-hover.group.p-6:nth-child(4)",
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
+   Element has insufficient color contrast of 2.48 (foreground color: #3385ff, background color: #c8d9fb, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+         "html": "<span class=\"text-2xl font-display font-bold text-electric-400\"> ER </span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".card-hover.group.p-6:nth-child(4) > .flex-col.text-center.items-center > .w-24.h-24.rounded-full > .text-2xl.font-bold.text-electric-400",
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
+               "fontSize": "13.5pt (18px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.04 (foreground color: #ffffff, background color: #fafafa, font size: 13.5pt (18px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\">",
+                 "target": Array [
+                   ".card-hover.group.p-6:nth-child(4)",
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
+   Element has insufficient color contrast of 1.04 (foreground color: #ffffff, background color: #fafafa, font size: 13.5pt (18px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<h3 class=\"font-display text-lg font-semibold text-white mb-1\">Emily Rodriguez</h3>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".card-hover.group.p-6:nth-child(4) > .flex-col.text-center.items-center > .mb-1.text-lg",
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
+                 "html": "<div class=\"glass-card p-6 card-hover group\">",
+                 "target": Array [
+                   ".card-hover.group.p-6:nth-child(4)",
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
+         "html": "<p class=\"text-electric-400 text-sm mb-3\">Head of Content</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".card-hover.group.p-6:nth-child(4) > .flex-col.text-center.items-center > .mb-3.text-electric-400",
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
+                 "html": "<div class=\"glass-card p-6 card-hover group\">",
+                 "target": Array [
+                   ".card-hover.group.p-6:nth-child(4)",
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
+         "html": "<p class=\"text-gray-400 text-sm leading-relaxed mb-4\">Content strategist and storyteller. Created 1000+ pieces of high-performing content. Former journalist with a passion for brand narratives.</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".card-hover.group.p-6:nth-child(4) > .flex-col.text-center.items-center > .leading-relaxed",
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
+               "fontSize": "9.0pt (12px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafafa, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\">Content</span>",
+                 "target": Array [
+                   ".card-hover.group.p-6:nth-child(4) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(1)",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\">",
+                 "target": Array [
+                   ".card-hover.group.p-6:nth-child(4)",
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
+   Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafafa, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\">Content</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".card-hover.group.p-6:nth-child(4) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(1)",
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
+               "fontSize": "9.0pt (12px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafafa, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\">Copywriting</span>",
+                 "target": Array [
+                   ".card-hover.group.p-6:nth-child(4) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(2)",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\">",
+                 "target": Array [
+                   ".card-hover.group.p-6:nth-child(4)",
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
+   Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafafa, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\">Copywriting</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".card-hover.group.p-6:nth-child(4) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(2)",
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
+               "fontSize": "9.0pt (12px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafafa, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\">Video</span>",
+                 "target": Array [
+                   ".card-hover.group.p-6:nth-child(4) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(3)",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\">",
+                 "target": Array [
+                   ".card-hover.group.p-6:nth-child(4)",
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
+   Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafafa, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\">Video</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".card-hover.group.p-6:nth-child(4) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(3)",
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
+               "fontSize": "9.0pt (12px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafafa, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\">Storytelling</span>",
+                 "target": Array [
+                   ".card-hover.group.p-6:nth-child(4) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(4)",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\">",
+                 "target": Array [
+                   ".card-hover.group.p-6:nth-child(4)",
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
+   Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafafa, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\">Storytelling</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".card-hover.group.p-6:nth-child(4) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(4)",
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
+         "html": "<a href=\"/team\" class=\"inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 active:scale-95 focus-ring text-electric-400 hover:text-electric-300 hover:bg-electric-500/10 px-6 py-3 text-sm \">View Full Team</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".hover\\:text-electric-300",
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
+         "html": "<span class=\"text-electric-400\">Certifications</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".bg-dark-800\\/50.section:nth-child(4) > .container-custom > .mb-12.text-center > .text-3xl.md\\:text-4xl > .text-electric-400",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#bdbdbd",
+               "contrastRatio": 1.27,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#d1d5db",
+               "fontSize": "10.5pt (14px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.27 (foreground color: #d1d5db, background color: #bdbdbd, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"px-6 py-3 glass-card text-sm font-medium text-gray-300 hover:text-electric-400 transition-colors\"> Google Partner </div>",
+                 "target": Array [
+                   ".px-6.py-3.text-gray-300:nth-child(1)",
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
+   Element has insufficient color contrast of 1.27 (foreground color: #d1d5db, background color: #bdbdbd, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<div class=\"px-6 py-3 glass-card text-sm font-medium text-gray-300 hover:text-electric-400 transition-colors\"> Google Partner </div>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".px-6.py-3.text-gray-300:nth-child(1)",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#bdbdbd",
+               "contrastRatio": 1.27,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#d1d5db",
+               "fontSize": "10.5pt (14px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.27 (foreground color: #d1d5db, background color: #bdbdbd, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"px-6 py-3 glass-card text-sm font-medium text-gray-300 hover:text-electric-400 transition-colors\"> Meta Business Partner </div>",
+                 "target": Array [
+                   ".px-6.py-3.text-gray-300:nth-child(2)",
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
+   Element has insufficient color contrast of 1.27 (foreground color: #d1d5db, background color: #bdbdbd, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<div class=\"px-6 py-3 glass-card text-sm font-medium text-gray-300 hover:text-electric-400 transition-colors\"> Meta Business Partner </div>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".px-6.py-3.text-gray-300:nth-child(2)",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#bdbdbd",
+               "contrastRatio": 1.27,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#d1d5db",
+               "fontSize": "10.5pt (14px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.27 (foreground color: #d1d5db, background color: #bdbdbd, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"px-6 py-3 glass-card text-sm font-medium text-gray-300 hover:text-electric-400 transition-colors\"> HubSpot Certified </div>",
+                 "target": Array [
+                   ".px-6.py-3.text-gray-300:nth-child(3)",
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
+   Element has insufficient color contrast of 1.27 (foreground color: #d1d5db, background color: #bdbdbd, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<div class=\"px-6 py-3 glass-card text-sm font-medium text-gray-300 hover:text-electric-400 transition-colors\"> HubSpot Certified </div>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".px-6.py-3.text-gray-300:nth-child(3)",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#bdbdbd",
+               "contrastRatio": 1.27,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#d1d5db",
+               "fontSize": "10.5pt (14px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.27 (foreground color: #d1d5db, background color: #bdbdbd, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"px-6 py-3 glass-card text-sm font-medium text-gray-300 hover:text-electric-400 transition-colors\"> Semrush Certified </div>",
+                 "target": Array [
+                   ".px-6.py-3.text-gray-300:nth-child(4)",
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
+   Element has insufficient color contrast of 1.27 (foreground color: #d1d5db, background color: #bdbdbd, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<div class=\"px-6 py-3 glass-card text-sm font-medium text-gray-300 hover:text-electric-400 transition-colors\"> Semrush Certified </div>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".px-6.py-3.text-gray-300:nth-child(4)",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#bdbdbd",
+               "contrastRatio": 1.27,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#d1d5db",
+               "fontSize": "10.5pt (14px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.27 (foreground color: #d1d5db, background color: #bdbdbd, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"px-6 py-3 glass-card text-sm font-medium text-gray-300 hover:text-electric-400 transition-colors\"> Top Marketing Agency 2024 </div>",
+                 "target": Array [
+                   ".px-6.py-3.text-gray-300:nth-child(5)",
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
+   Element has insufficient color contrast of 1.27 (foreground color: #d1d5db, background color: #bdbdbd, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<div class=\"px-6 py-3 glass-card text-sm font-medium text-gray-300 hover:text-electric-400 transition-colors\"> Top Marketing Agency 2024 </div>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".px-6.py-3.text-gray-300:nth-child(5)",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#bdbdbd",
+               "contrastRatio": 1.27,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#d1d5db",
+               "fontSize": "10.5pt (14px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.27 (foreground color: #d1d5db, background color: #bdbdbd, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"px-6 py-3 glass-card text-sm font-medium text-gray-300 hover:text-electric-400 transition-colors\"> Best SEO Agency </div>",
+                 "target": Array [
+                   ".px-6.py-3.text-gray-300:nth-child(6)",
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
+   Element has insufficient color contrast of 1.27 (foreground color: #d1d5db, background color: #bdbdbd, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<div class=\"px-6 py-3 glass-card text-sm font-medium text-gray-300 hover:text-electric-400 transition-colors\"> Best SEO Agency </div>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".px-6.py-3.text-gray-300:nth-child(6)",
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
      - generic [ref=e31]:
        - heading "About Us" [level=1] [ref=e32]
        - paragraph [ref=e33]: "We're a team of marketing experts, data scientists, and creative strategists united by one mission: helping modern brands achieve extraordinary growth through AI-powered marketing."
        - link "Work With Us" [ref=e34] [cursor=pointer]:
          - /url: /contact
      - generic [ref=e35]:
        - heading "Our Story" [level=3] [ref=e36]
        - paragraph [ref=e37]: "Founded in 2020, Your Dedicated Marketer emerged from a simple observation: most marketing agencies were stuck in outdated playbooks while the digital landscape evolved rapidly. We set out to build something different."
        - paragraph [ref=e38]: Today, we combine cutting-edge AI technology with human expertise to deliver marketing strategies that actually work. Our data-driven approach has helped 150+ brands transform their digital presence and achieve measurable growth.
    - generic [ref=e40]:
      - generic [ref=e41]:
        - heading "Why We're Different" [level=2] [ref=e42]
        - paragraph [ref=e43]: We're not just another marketing agency. We're your dedicated growth partners.
      - generic [ref=e44]:
        - generic [ref=e45]:
          - img [ref=e47]
          - heading "Data-Driven" [level=3] [ref=e49]
          - paragraph [ref=e50]: Every decision backed by metrics and insights, not assumptions.
        - generic [ref=e51]:
          - img [ref=e53]
          - heading "Transparent" [level=3] [ref=e55]
          - paragraph [ref=e56]: Full visibility into strategies, spend, and results at all times.
        - generic [ref=e57]:
          - img [ref=e59]
          - heading "Innovative" [level=3] [ref=e61]
          - paragraph [ref=e62]: Constantly exploring new technologies and methodologies.
        - generic [ref=e63]:
          - img [ref=e65]
          - heading "Results-Focused" [level=3] [ref=e67]
          - paragraph [ref=e68]: Your success is our only metric that matters.
    - generic [ref=e70]:
      - generic [ref=e71]:
        - heading "Our Team" [level=2] [ref=e72]
        - paragraph [ref=e73]: Meet the experts behind your growth.
      - generic [ref=e74]:
        - generic [ref=e76]:
          - generic [ref=e78]: AC
          - heading "Alex Chen" [level=3] [ref=e79]
          - paragraph [ref=e80]: Founder & CEO
          - paragraph [ref=e81]: 15+ years in digital marketing. Former Head of Growth at Fortune 500 companies. Passionate about leveraging AI to transform marketing strategies.
          - generic [ref=e82]:
            - generic [ref=e83]: Strategy
            - generic [ref=e84]: Growth
            - generic [ref=e85]: AI
            - generic [ref=e86]: Leadership
        - generic [ref=e88]:
          - generic [ref=e90]: SM
          - heading "Sarah Mitchell" [level=3] [ref=e91]
          - paragraph [ref=e92]: Head of SEO
          - paragraph [ref=e93]: SEO specialist with 10+ years experience. Helped 100+ brands achieve top rankings. Speaker at major marketing conferences.
          - generic [ref=e94]:
            - generic [ref=e95]: SEO
            - generic [ref=e96]: Content
            - generic [ref=e97]: Analytics
            - generic [ref=e98]: Technical SEO
        - generic [ref=e100]:
          - generic [ref=e102]: MJ
          - heading "Marcus Johnson" [level=3] [ref=e103]
          - paragraph [ref=e104]: Head of Paid Media
          - paragraph [ref=e105]: Managed $50M+ in ad spend. Expert in multi-channel campaign optimization. Google and Meta certified professional.
          - generic [ref=e106]:
            - generic [ref=e107]: PPC
            - generic [ref=e108]: Meta Ads
            - generic [ref=e109]: Google Ads
            - generic [ref=e110]: Programmatic
        - generic [ref=e112]:
          - generic [ref=e114]: ER
          - heading "Emily Rodriguez" [level=3] [ref=e115]
          - paragraph [ref=e116]: Head of Content
          - paragraph [ref=e117]: Content strategist and storyteller. Created 1000+ pieces of high-performing content. Former journalist with a passion for brand narratives.
          - generic [ref=e118]:
            - generic [ref=e119]: Content
            - generic [ref=e120]: Copywriting
            - generic [ref=e121]: Video
            - generic [ref=e122]: Storytelling
      - link "View Full Team" [ref=e124] [cursor=pointer]:
        - /url: /team
    - generic [ref=e126]:
      - heading "Awards & Certifications" [level=2] [ref=e128]
      - generic [ref=e129]:
        - generic [ref=e130]: Google Partner
        - generic [ref=e131]: Meta Business Partner
        - generic [ref=e132]: HubSpot Certified
        - generic [ref=e133]: Semrush Certified
        - generic [ref=e134]: Top Marketing Agency 2024
        - generic [ref=e135]: Best SEO Agency
    - generic [ref=e140]:
      - heading "Ready to Work Together?" [level=2] [ref=e141]
      - paragraph [ref=e142]: Let's discuss how our team can help your brand achieve extraordinary growth.
      - link "Get in Touch" [ref=e143] [cursor=pointer]:
        - /url: /contact
  - contentinfo [ref=e144]:
    - generic [ref=e145]:
      - generic [ref=e146]:
        - generic [ref=e147]:
          - link "Y Your Dedicated Marketer" [ref=e148] [cursor=pointer]:
            - /url: /
            - generic [ref=e150]: "Y"
            - generic [ref=e151]: Your Dedicated Marketer
          - paragraph [ref=e152]: AI-powered growth strategies for modern brands. Transform your digital presence with data-driven marketing.
          - generic [ref=e153]:
            - link "Instagram" [ref=e154] [cursor=pointer]:
              - /url: https://instagram.com/YourDedicatedMarketer
              - img [ref=e155]
            - link "Threads" [ref=e157] [cursor=pointer]:
              - /url: https://threads.net/YourDedicatedMarketer
              - img [ref=e158]
            - link "YouTube" [ref=e160] [cursor=pointer]:
              - /url: https://youtube.com/YourDedicatedMarketer
              - img [ref=e161]
        - generic [ref=e163]:
          - heading "Services" [level=4] [ref=e164]
          - list [ref=e165]:
            - listitem [ref=e166]:
              - link "SEO" [ref=e167] [cursor=pointer]:
                - /url: /services/seo
            - listitem [ref=e168]:
              - link "Paid Media" [ref=e169] [cursor=pointer]:
                - /url: /services/paid-media
            - listitem [ref=e170]:
              - link "Content Marketing" [ref=e171] [cursor=pointer]:
                - /url: /services/content-marketing
            - listitem [ref=e172]:
              - link "Email Automation" [ref=e173] [cursor=pointer]:
                - /url: /services/email-automation
            - listitem [ref=e174]:
              - link "Analytics & Reporting" [ref=e175] [cursor=pointer]:
                - /url: /services/analytics-and-reporting
        - generic [ref=e176]:
          - heading "Company" [level=4] [ref=e177]
          - list [ref=e178]:
            - listitem [ref=e179]:
              - link "About Us" [ref=e180] [cursor=pointer]:
                - /url: /about
            - listitem [ref=e181]:
              - link "Our Team" [ref=e182] [cursor=pointer]:
                - /url: /team
            - listitem [ref=e183]:
              - link "Case Studies" [ref=e184] [cursor=pointer]:
                - /url: /work
            - listitem [ref=e185]:
              - link "Blog" [ref=e186] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e187]:
              - link "Careers" [ref=e188] [cursor=pointer]:
                - /url: /careers
        - generic [ref=e189]:
          - heading "Resources" [level=4] [ref=e190]
          - list [ref=e191]:
            - listitem [ref=e192]:
              - link "Pricing" [ref=e193] [cursor=pointer]:
                - /url: /pricing
            - listitem [ref=e194]:
              - link "FAQ" [ref=e195] [cursor=pointer]:
                - /url: /faq
            - listitem [ref=e196]:
              - link "Industries" [ref=e197] [cursor=pointer]:
                - /url: /industries/saas
            - listitem [ref=e198]:
              - link "Contact" [ref=e199] [cursor=pointer]:
                - /url: /contact
        - generic [ref=e200]:
          - heading "Legal" [level=4] [ref=e201]
          - list [ref=e202]:
            - listitem [ref=e203]:
              - link "Privacy Policy" [ref=e204] [cursor=pointer]:
                - /url: /privacy-policy
            - listitem [ref=e205]:
              - link "Terms of Service" [ref=e206] [cursor=pointer]:
                - /url: /terms-of-service
      - generic [ref=e207]:
        - paragraph [ref=e208]: © 2026 Your Dedicated Marketer. All rights reserved.
        - paragraph [ref=e209]: Built with Astro & Tailwind CSS
  - generic [ref=e212]:
    - button "Menu" [ref=e213]:
      - img [ref=e215]
      - generic: Menu
    - button "Inspect" [ref=e219]:
      - img [ref=e221]
      - generic: Inspect
    - button "Audit" [ref=e223]:
      - img [ref=e225]
      - generic: Audit
    - button "Settings" [ref=e228]:
      - img [ref=e230]
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
> 19 |     expect(accessibilityScanResults.violations).toEqual([]);
     |                                                 ^ Error: expect(received).toEqual(expected) // deep equality
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