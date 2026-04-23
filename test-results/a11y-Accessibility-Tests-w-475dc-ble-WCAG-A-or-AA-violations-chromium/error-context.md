# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: a11y.spec.ts >> Accessibility Tests >> work index should not have automatically detectable WCAG A or AA violations
- Location: src\test\a11y.spec.ts:40:3

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  -    1
+ Received  + 1189

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
+               "bgColor": "#ffffff",
+               "contrastRatio": 1.47,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#d1d5db",
+               "fontSize": "10.5pt (14px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.47 (foreground color: #d1d5db, background color: #ffffff, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<body class=\"min-h-screen bg-light text-light-900 dark:bg-dark-900 dark:text-white\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/layouts/BaseLayout.astro\" data-astro-source-loc=\"166:87\">",
+                 "target": Array [
+                   "body",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.47 (foreground color: #d1d5db, background color: #ffffff, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<label class=\"block text-sm font-medium text-gray-300 mb-2\">Industry</label>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".min-w-\\[200px\\].flex-1:nth-child(1) > label",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 1.47,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#d1d5db",
+               "fontSize": "10.5pt (14px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.47 (foreground color: #d1d5db, background color: #ffffff, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<body class=\"min-h-screen bg-light text-light-900 dark:bg-dark-900 dark:text-white\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/layouts/BaseLayout.astro\" data-astro-source-loc=\"166:87\">",
+                 "target": Array [
+                   "body",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.47 (foreground color: #d1d5db, background color: #ffffff, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<label class=\"block text-sm font-medium text-gray-300 mb-2\">Service</label>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".min-w-\\[200px\\].flex-1:nth-child(2) > label",
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
+               "fontSize": "10.5pt (14px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.53 (foreground color: #9ca3af, background color: #ffffff, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<body class=\"min-h-screen bg-light text-light-900 dark:bg-dark-900 dark:text-white\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/layouts/BaseLayout.astro\" data-astro-source-loc=\"166:87\">",
+                 "target": Array [
+                   "body",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.53 (foreground color: #9ca3af, background color: #ffffff, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<p class=\"text-gray-400 text-sm mb-6\">Showing <!-- -->5<!-- --> of <!-- -->5<!-- --> case studies</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".mb-6.text-gray-400",
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
+                 "html": "<a href=\"/work/dental-practice-patient-growth\" class=\"glass-card overflow-hidden card-hover group block focus-ring\">",
+                 "target": Array [
+                   ".card-hover.group.glass-card:nth-child(1)",
+                 ],
+               },
+               Object {
+                 "html": "<body class=\"min-h-screen bg-light text-light-900 dark:bg-dark-900 dark:text-white\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/layouts/BaseLayout.astro\" data-astro-source-loc=\"166:87\">",
+                 "target": Array [
+                   "body",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.38 (foreground color: #3385ff, background color: #fafafa, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-xs text-electric-400 font-medium uppercase tracking-wider\">Healthcare</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".card-hover.group.glass-card:nth-child(1) > .p-6 > .gap-3.mb-4.items-center > .uppercase.tracking-wider.text-xs",
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
+                 "html": "<a href=\"/work/dental-practice-patient-growth\" class=\"glass-card overflow-hidden card-hover group block focus-ring\">",
+                 "target": Array [
+                   ".card-hover.group.glass-card:nth-child(1)",
+                 ],
+               },
+               Object {
+                 "html": "<body class=\"min-h-screen bg-light text-light-900 dark:bg-dark-900 dark:text-white\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/layouts/BaseLayout.astro\" data-astro-source-loc=\"166:87\">",
+                 "target": Array [
+                   "body",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.04 (foreground color: #ffffff, background color: #fafafa, font size: 13.5pt (18px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<h3 class=\"font-display text-lg font-semibold text-white mb-2 group-hover:text-electric-400 transition-colors\">BrightSmile Dental: 165% Increase in New Patient Appointments</h3>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".card-hover.group.glass-card:nth-child(1) > .p-6 > h3",
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
+                 "html": "<a href=\"/work/dental-practice-patient-growth\" class=\"glass-card overflow-hidden card-hover group block focus-ring\">",
+                 "target": Array [
+                   ".card-hover.group.glass-card:nth-child(1)",
+                 ],
+               },
+               Object {
+                 "html": "<body class=\"min-h-screen bg-light text-light-900 dark:bg-dark-900 dark:text-white\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/layouts/BaseLayout.astro\" data-astro-source-loc=\"166:87\">",
+                 "target": Array [
+                   "body",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafafa, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<p class=\"text-gray-400 text-sm mb-4\">BrightSmile Dental</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".card-hover.group.glass-card:nth-child(1) > .p-6 > .text-gray-400",
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
+                 "html": "<a href=\"/work/dental-practice-patient-growth\" class=\"glass-card overflow-hidden card-hover group block focus-ring\">",
+                 "target": Array [
+                   ".card-hover.group.glass-card:nth-child(1)",
+                 ],
+               },
+               Object {
+                 "html": "<body class=\"min-h-screen bg-light text-light-900 dark:bg-dark-900 dark:text-white\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/layouts/BaseLayout.astro\" data-astro-source-loc=\"166:87\">",
+                 "target": Array [
+                   "body",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.38 (foreground color: #3385ff, background color: #fafafa, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-sm text-electric-400 font-medium\">View Details</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".card-hover.group.glass-card:nth-child(1) > .p-6 > .mt-4.pt-4.border-white\\/5 > span",
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
+                 "html": "<a href=\"/work/fintech-app-user-acquisition\" class=\"glass-card overflow-hidden card-hover group block focus-ring\">",
+                 "target": Array [
+                   ".card-hover.group.glass-card:nth-child(2)",
+                 ],
+               },
+               Object {
+                 "html": "<body class=\"min-h-screen bg-light text-light-900 dark:bg-dark-900 dark:text-white\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/layouts/BaseLayout.astro\" data-astro-source-loc=\"166:87\">",
+                 "target": Array [
+                   "body",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.38 (foreground color: #3385ff, background color: #fafafa, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-xs text-electric-400 font-medium uppercase tracking-wider\">Technology</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".card-hover.group.glass-card:nth-child(2) > .p-6 > .gap-3.mb-4.items-center > .uppercase.tracking-wider.text-xs",
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
+                 "html": "<a href=\"/work/fintech-app-user-acquisition\" class=\"glass-card overflow-hidden card-hover group block focus-ring\">",
+                 "target": Array [
+                   ".card-hover.group.glass-card:nth-child(2)",
+                 ],
+               },
+               Object {
+                 "html": "<body class=\"min-h-screen bg-light text-light-900 dark:bg-dark-900 dark:text-white\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/layouts/BaseLayout.astro\" data-astro-source-loc=\"166:87\">",
+                 "target": Array [
+                   "body",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.04 (foreground color: #ffffff, background color: #fafafa, font size: 13.5pt (18px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<h3 class=\"font-display text-lg font-semibold text-white mb-2 group-hover:text-electric-400 transition-colors\">PayFlow Finance: 195% Increase in App Downloads</h3>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".card-hover.group.glass-card:nth-child(2) > .p-6 > h3",
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
+                 "html": "<a href=\"/work/fintech-app-user-acquisition\" class=\"glass-card overflow-hidden card-hover group block focus-ring\">",
+                 "target": Array [
+                   ".card-hover.group.glass-card:nth-child(2)",
+                 ],
+               },
+               Object {
+                 "html": "<body class=\"min-h-screen bg-light text-light-900 dark:bg-dark-900 dark:text-white\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/layouts/BaseLayout.astro\" data-astro-source-loc=\"166:87\">",
+                 "target": Array [
+                   "body",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafafa, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<p class=\"text-gray-400 text-sm mb-4\">PayFlow Finance</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".card-hover.group.glass-card:nth-child(2) > .p-6 > .text-gray-400",
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
+                 "html": "<a href=\"/work/fintech-app-user-acquisition\" class=\"glass-card overflow-hidden card-hover group block focus-ring\">",
+                 "target": Array [
+                   ".card-hover.group.glass-card:nth-child(2)",
+                 ],
+               },
+               Object {
+                 "html": "<body class=\"min-h-screen bg-light text-light-900 dark:bg-dark-900 dark:text-white\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/layouts/BaseLayout.astro\" data-astro-source-loc=\"166:87\">",
+                 "target": Array [
+                   "body",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.38 (foreground color: #3385ff, background color: #fafafa, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-sm text-electric-400 font-medium\">View Details</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".card-hover.group.glass-card:nth-child(2) > .p-6 > .mt-4.pt-4.border-white\\/5 > span",
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
+                 "html": "<a href=\"/work/ecommerce-revenue-growth\" class=\"glass-card overflow-hidden card-hover group block focus-ring\">",
+                 "target": Array [
+                   "a[href$=\"ecommerce-revenue-growth\"]",
+                 ],
+               },
+               Object {
+                 "html": "<body class=\"min-h-screen bg-light text-light-900 dark:bg-dark-900 dark:text-white\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/layouts/BaseLayout.astro\" data-astro-source-loc=\"166:87\">",
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
+           "a[href$=\"ecommerce-revenue-growth\"] > .p-6 > .gap-3.mb-4.items-center > .uppercase.tracking-wider.text-xs",
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
+                 "html": "<span class=\"px-2 py-1 text-xs bg-electric-500/20 text-electric-400 rounded\">Featured</span>",
+                 "target": Array [
+                   "a[href$=\"ecommerce-revenue-growth\"] > .p-6 > .gap-3.mb-4.items-center > .px-2.py-1.bg-electric-500\\/20",
+                 ],
+               },
+               Object {
+                 "html": "<a href=\"/work/ecommerce-revenue-growth\" class=\"glass-card overflow-hidden card-hover group block focus-ring\">",
+                 "target": Array [
+                   "a[href$=\"ecommerce-revenue-growth\"]",
+                 ],
+               },
+               Object {
+                 "html": "<body class=\"min-h-screen bg-light text-light-900 dark:bg-dark-900 dark:text-white\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/layouts/BaseLayout.astro\" data-astro-source-loc=\"166:87\">",
+                 "target": Array [
+                   "body",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.48 (foreground color: #3385ff, background color: #c8d9fb, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"px-2 py-1 text-xs bg-electric-500/20 text-electric-400 rounded\">Featured</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href$=\"ecommerce-revenue-growth\"] > .p-6 > .gap-3.mb-4.items-center > .px-2.py-1.bg-electric-500\\/20",
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
+                 "html": "<a href=\"/work/ecommerce-revenue-growth\" class=\"glass-card overflow-hidden card-hover group block focus-ring\">",
+                 "target": Array [
+                   "a[href$=\"ecommerce-revenue-growth\"]",
+                 ],
+               },
+               Object {
+                 "html": "<body class=\"min-h-screen bg-light text-light-900 dark:bg-dark-900 dark:text-white\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/layouts/BaseLayout.astro\" data-astro-source-loc=\"166:87\">",
+                 "target": Array [
+                   "body",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.04 (foreground color: #ffffff, background color: #fafafa, font size: 13.5pt (18px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<h3 class=\"font-display text-lg font-semibold text-white mb-2 group-hover:text-electric-400 transition-colors\">StyleHouse E-commerce: $2.4M Revenue Growth</h3>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href$=\"ecommerce-revenue-growth\"] > .p-6 > h3",
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
+                 "html": "<a href=\"/work/ecommerce-revenue-growth\" class=\"glass-card overflow-hidden card-hover group block focus-ring\">",
+                 "target": Array [
+                   "a[href$=\"ecommerce-revenue-growth\"]",
+                 ],
+               },
+               Object {
+                 "html": "<body class=\"min-h-screen bg-light text-light-900 dark:bg-dark-900 dark:text-white\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/layouts/BaseLayout.astro\" data-astro-source-loc=\"166:87\">",
+                 "target": Array [
+                   "body",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafafa, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<p class=\"text-gray-400 text-sm mb-4\">StyleHouse</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href$=\"ecommerce-revenue-growth\"] > .p-6 > .text-gray-400",
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
+                 "html": "<a href=\"/work/ecommerce-revenue-growth\" class=\"glass-card overflow-hidden card-hover group block focus-ring\">",
+                 "target": Array [
+                   "a[href$=\"ecommerce-revenue-growth\"]",
+                 ],
+               },
+               Object {
+                 "html": "<body class=\"min-h-screen bg-light text-light-900 dark:bg-dark-900 dark:text-white\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/layouts/BaseLayout.astro\" data-astro-source-loc=\"166:87\">",
+                 "target": Array [
+                   "body",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.38 (foreground color: #3385ff, background color: #fafafa, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-sm text-electric-400 font-medium\">View Details</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href$=\"ecommerce-revenue-growth\"] > .p-6 > .mt-4.pt-4.border-white\\/5 > span",
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
+                 "html": "<a href=\"/work/legal-consulting-lead-gen\" class=\"glass-card overflow-hidden card-hover group block focus-ring\">",
+                 "target": Array [
+                   ".card-hover.group.glass-card:nth-child(4)",
+                 ],
+               },
+               Object {
+                 "html": "<body class=\"min-h-screen bg-light text-light-900 dark:bg-dark-900 dark:text-white\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/layouts/BaseLayout.astro\" data-astro-source-loc=\"166:87\">",
+                 "target": Array [
+                   "body",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.38 (foreground color: #3385ff, background color: #fafafa, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-xs text-electric-400 font-medium uppercase tracking-wider\">Professional Services</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".card-hover.group.glass-card:nth-child(4) > .p-6 > .gap-3.mb-4.items-center > .uppercase.tracking-wider.text-xs",
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
+                 "html": "<a href=\"/work/legal-consulting-lead-gen\" class=\"glass-card overflow-hidden card-hover group block focus-ring\">",
+                 "target": Array [
+                   ".card-hover.group.glass-card:nth-child(4)",
+                 ],
+               },
+               Object {
+                 "html": "<body class=\"min-h-screen bg-light text-light-900 dark:bg-dark-900 dark:text-white\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/layouts/BaseLayout.astro\" data-astro-source-loc=\"166:87\">",
+                 "target": Array [
+                   "body",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.04 (foreground color: #ffffff, background color: #fafafa, font size: 13.5pt (18px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<h3 class=\"font-display text-lg font-semibold text-white mb-2 group-hover:text-electric-400 transition-colors\">Sterling Legal: 320% Increase in Qualified Leads</h3>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".card-hover.group.glass-card:nth-child(4) > .p-6 > h3",
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
+                 "html": "<a href=\"/work/legal-consulting-lead-gen\" class=\"glass-card overflow-hidden card-hover group block focus-ring\">",
+                 "target": Array [
+                   ".card-hover.group.glass-card:nth-child(4)",
+                 ],
+               },
+               Object {
+                 "html": "<body class=\"min-h-screen bg-light text-light-900 dark:bg-dark-900 dark:text-white\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/layouts/BaseLayout.astro\" data-astro-source-loc=\"166:87\">",
+                 "target": Array [
+                   "body",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafafa, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<p class=\"text-gray-400 text-sm mb-4\">Sterling Legal</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".card-hover.group.glass-card:nth-child(4) > .p-6 > .text-gray-400",
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
+                 "html": "<a href=\"/work/legal-consulting-lead-gen\" class=\"glass-card overflow-hidden card-hover group block focus-ring\">",
+                 "target": Array [
+                   ".card-hover.group.glass-card:nth-child(4)",
+                 ],
+               },
+               Object {
+                 "html": "<body class=\"min-h-screen bg-light text-light-900 dark:bg-dark-900 dark:text-white\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/layouts/BaseLayout.astro\" data-astro-source-loc=\"166:87\">",
+                 "target": Array [
+                   "body",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.38 (foreground color: #3385ff, background color: #fafafa, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-sm text-electric-400 font-medium\">View Details</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".card-hover.group.glass-card:nth-child(4) > .p-6 > .mt-4.pt-4.border-white\\/5 > span",
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
+                 "html": "<a href=\"/work/techflow-saas-growth\" class=\"glass-card overflow-hidden card-hover group block focus-ring\">",
+                 "target": Array [
+                   "a[href$=\"techflow-saas-growth\"]",
+                 ],
+               },
+               Object {
+                 "html": "<body class=\"min-h-screen bg-light text-light-900 dark:bg-dark-900 dark:text-white\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/layouts/BaseLayout.astro\" data-astro-source-loc=\"166:87\">",
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
+           "a[href$=\"techflow-saas-growth\"] > .p-6 > .gap-3.mb-4.items-center > .uppercase.tracking-wider.text-xs",
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
+                 "html": "<span class=\"px-2 py-1 text-xs bg-electric-500/20 text-electric-400 rounded\">Featured</span>",
+                 "target": Array [
+                   "a[href$=\"techflow-saas-growth\"] > .p-6 > .gap-3.mb-4.items-center > .px-2.py-1.bg-electric-500\\/20",
+                 ],
+               },
+               Object {
+                 "html": "<a href=\"/work/techflow-saas-growth\" class=\"glass-card overflow-hidden card-hover group block focus-ring\">",
+                 "target": Array [
+                   "a[href$=\"techflow-saas-growth\"]",
+                 ],
+               },
+               Object {
+                 "html": "<body class=\"min-h-screen bg-light text-light-900 dark:bg-dark-900 dark:text-white\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/layouts/BaseLayout.astro\" data-astro-source-loc=\"166:87\">",
+                 "target": Array [
+                   "body",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.48 (foreground color: #3385ff, background color: #c8d9fb, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"px-2 py-1 text-xs bg-electric-500/20 text-electric-400 rounded\">Featured</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href$=\"techflow-saas-growth\"] > .p-6 > .gap-3.mb-4.items-center > .px-2.py-1.bg-electric-500\\/20",
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
+                 "html": "<a href=\"/work/techflow-saas-growth\" class=\"glass-card overflow-hidden card-hover group block focus-ring\">",
+                 "target": Array [
+                   "a[href$=\"techflow-saas-growth\"]",
+                 ],
+               },
+               Object {
+                 "html": "<body class=\"min-h-screen bg-light text-light-900 dark:bg-dark-900 dark:text-white\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/layouts/BaseLayout.astro\" data-astro-source-loc=\"166:87\">",
+                 "target": Array [
+                   "body",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.04 (foreground color: #ffffff, background color: #fafafa, font size: 13.5pt (18px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<h3 class=\"font-display text-lg font-semibold text-white mb-2 group-hover:text-electric-400 transition-colors\">TechFlow SaaS: 280% Increase in Trial Signups</h3>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href$=\"techflow-saas-growth\"] > .p-6 > h3",
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
+                 "html": "<a href=\"/work/techflow-saas-growth\" class=\"glass-card overflow-hidden card-hover group block focus-ring\">",
+                 "target": Array [
+                   "a[href$=\"techflow-saas-growth\"]",
+                 ],
+               },
+               Object {
+                 "html": "<body class=\"min-h-screen bg-light text-light-900 dark:bg-dark-900 dark:text-white\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/layouts/BaseLayout.astro\" data-astro-source-loc=\"166:87\">",
+                 "target": Array [
+                   "body",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafafa, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<p class=\"text-gray-400 text-sm mb-4\">TechFlow</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href$=\"techflow-saas-growth\"] > .p-6 > .text-gray-400",
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
+                 "html": "<a href=\"/work/techflow-saas-growth\" class=\"glass-card overflow-hidden card-hover group block focus-ring\">",
+                 "target": Array [
+                   "a[href$=\"techflow-saas-growth\"]",
+                 ],
+               },
+               Object {
+                 "html": "<body class=\"min-h-screen bg-light text-light-900 dark:bg-dark-900 dark:text-white\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/layouts/BaseLayout.astro\" data-astro-source-loc=\"166:87\">",
+                 "target": Array [
+                   "body",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.38 (foreground color: #3385ff, background color: #fafafa, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"text-sm text-electric-400 font-medium\">View Details</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href$=\"techflow-saas-growth\"] > .p-6 > .mt-4.pt-4.border-white\\/5 > span",
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
+   Object {
+     "description": "Ensure select element has an accessible name",
+     "help": "Select element must have an accessible name",
+     "helpUrl": "https://dequeuniversity.com/rules/axe/4.11/select-name?application=playwright",
+     "id": "select-name",
+     "impact": "critical",
+     "nodes": Array [
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": null,
+             "id": "implicit-label",
+             "impact": "critical",
+             "message": "Element does not have an implicit (wrapped) <label>",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "explicit-label",
+             "impact": "critical",
+             "message": "Element does not have an explicit <label>",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "aria-label",
+             "impact": "critical",
+             "message": "aria-label attribute does not exist or is empty",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "aria-labelledby",
+             "impact": "critical",
+             "message": "aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": Object {
+               "messageKey": "noAttr",
+             },
+             "id": "non-empty-title",
+             "impact": "critical",
+             "message": "Element has no title attribute",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "presentational-role",
+             "impact": "critical",
+             "message": "Element's default semantics were not overridden with role=\"none\" or role=\"presentation\"",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element does not have an implicit (wrapped) <label>
+   Element does not have an explicit <label>
+   aria-label attribute does not exist or is empty
+   aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty
+   Element has no title attribute
+   Element's default semantics were not overridden with role=\"none\" or role=\"presentation\"",
+         "html": "<select class=\"w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus-ring transition-colors appearance-none cursor-pointer select-arrow\">",
+         "impact": "critical",
+         "none": Array [],
+         "target": Array [
+           ".min-w-\\[200px\\].flex-1:nth-child(1) > select",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": null,
+             "id": "implicit-label",
+             "impact": "critical",
+             "message": "Element does not have an implicit (wrapped) <label>",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "explicit-label",
+             "impact": "critical",
+             "message": "Element does not have an explicit <label>",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "aria-label",
+             "impact": "critical",
+             "message": "aria-label attribute does not exist or is empty",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "aria-labelledby",
+             "impact": "critical",
+             "message": "aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": Object {
+               "messageKey": "noAttr",
+             },
+             "id": "non-empty-title",
+             "impact": "critical",
+             "message": "Element has no title attribute",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "presentational-role",
+             "impact": "critical",
+             "message": "Element's default semantics were not overridden with role=\"none\" or role=\"presentation\"",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element does not have an implicit (wrapped) <label>
+   Element does not have an explicit <label>
+   aria-label attribute does not exist or is empty
+   aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty
+   Element has no title attribute
+   Element's default semantics were not overridden with role=\"none\" or role=\"presentation\"",
+         "html": "<select class=\"w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus-ring transition-colors appearance-none cursor-pointer select-arrow\">",
+         "impact": "critical",
+         "none": Array [],
+         "target": Array [
+           ".min-w-\\[200px\\].flex-1:nth-child(2) > select",
+         ],
+       },
+     ],
+     "tags": Array [
+       "cat.forms",
+       "wcag2a",
+       "wcag412",
+       "section508",
+       "section508.22.n",
+       "TTv5",
+       "TT5.c",
+       "EN-301-549",
+       "EN-9.4.1.2",
+       "ACT",
+       "RGAAv4",
+       "RGAA-11.1.1",
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
      - heading "Our Work" [level=1] [ref=e31]
      - paragraph [ref=e32]: Real results from real clients. Discover how we've helped brands achieve extraordinary growth through data-driven marketing strategies.
    - generic [ref=e36]:
      - generic [ref=e37]:
        - generic [ref=e38]:
          - generic [ref=e39]: Industry
          - combobox [ref=e40] [cursor=pointer]:
            - option "All Industries" [selected]
            - option "Healthcare"
            - option "Technology"
            - option "E-commerce"
            - option "Professional Services"
            - option "SaaS"
        - generic [ref=e41]:
          - generic [ref=e42]: Service
          - combobox [ref=e43] [cursor=pointer]:
            - option "All Services" [selected]
            - option "SEO"
            - option "Paid Media"
            - option "Analytics"
            - option "Content Marketing"
            - option "Email Automation"
      - paragraph [ref=e44]: Showing 5 of 5 case studies
      - generic [ref=e45]:
        - 'link "Healthcare BrightSmile Dental: 165% Increase in New Patient Appointments BrightSmile Dental +165% New Patient Appointments -42% Patient Acquisition Cost View Details" [ref=e46] [cursor=pointer]':
          - /url: /work/dental-practice-patient-growth
          - generic [ref=e47]:
            - generic [ref=e49]: Healthcare
            - 'heading "BrightSmile Dental: 165% Increase in New Patient Appointments" [level=3] [ref=e50]'
            - paragraph [ref=e51]: BrightSmile Dental
            - generic [ref=e52]:
              - generic [ref=e53]:
                - generic [ref=e54]: +165%
                - generic [ref=e55]: New Patient Appointments
              - generic [ref=e56]:
                - generic [ref=e57]: "-42%"
                - generic [ref=e58]: Patient Acquisition Cost
            - generic [ref=e59]:
              - generic [ref=e60]: View Details
              - img [ref=e61]
        - 'link "Technology PayFlow Finance: 195% Increase in App Downloads PayFlow Finance +195% App Downloads -58% User Acquisition Cost View Details" [ref=e63] [cursor=pointer]':
          - /url: /work/fintech-app-user-acquisition
          - generic [ref=e64]:
            - generic [ref=e66]: Technology
            - 'heading "PayFlow Finance: 195% Increase in App Downloads" [level=3] [ref=e67]'
            - paragraph [ref=e68]: PayFlow Finance
            - generic [ref=e69]:
              - generic [ref=e70]:
                - generic [ref=e71]: +195%
                - generic [ref=e72]: App Downloads
              - generic [ref=e73]:
                - generic [ref=e74]: "-58%"
                - generic [ref=e75]: User Acquisition Cost
            - generic [ref=e76]:
              - generic [ref=e77]: View Details
              - img [ref=e78]
        - 'link "E-commerce Featured StyleHouse E-commerce: $2.4M Revenue Growth StyleHouse +$2.4M Revenue Growth +180% Email Revenue View Details" [ref=e80] [cursor=pointer]':
          - /url: /work/ecommerce-revenue-growth
          - generic [ref=e81]:
            - generic [ref=e82]:
              - generic [ref=e83]: E-commerce
              - generic [ref=e84]: Featured
            - 'heading "StyleHouse E-commerce: $2.4M Revenue Growth" [level=3] [ref=e85]'
            - paragraph [ref=e86]: StyleHouse
            - generic [ref=e87]:
              - generic [ref=e88]:
                - generic [ref=e89]: +$2.4M
                - generic [ref=e90]: Revenue Growth
              - generic [ref=e91]:
                - generic [ref=e92]: +180%
                - generic [ref=e93]: Email Revenue
            - generic [ref=e94]:
              - generic [ref=e95]: View Details
              - img [ref=e96]
        - 'link "Professional Services Sterling Legal: 320% Increase in Qualified Leads Sterling Legal +320% Qualified Leads +2,400 Email List Growth View Details" [ref=e98] [cursor=pointer]':
          - /url: /work/legal-consulting-lead-gen
          - generic [ref=e99]:
            - generic [ref=e101]: Professional Services
            - 'heading "Sterling Legal: 320% Increase in Qualified Leads" [level=3] [ref=e102]'
            - paragraph [ref=e103]: Sterling Legal
            - generic [ref=e104]:
              - generic [ref=e105]:
                - generic [ref=e106]: +320%
                - generic [ref=e107]: Qualified Leads
              - generic [ref=e108]:
                - generic [ref=e109]: +2,400
                - generic [ref=e110]: Email List Growth
            - generic [ref=e111]:
              - generic [ref=e112]: View Details
              - img [ref=e113]
        - 'link "SaaS Featured TechFlow SaaS: 280% Increase in Trial Signups TechFlow +280% Trial Signups -45% CAC Reduction View Details" [ref=e115] [cursor=pointer]':
          - /url: /work/techflow-saas-growth
          - generic [ref=e116]:
            - generic [ref=e117]:
              - generic [ref=e118]: SaaS
              - generic [ref=e119]: Featured
            - 'heading "TechFlow SaaS: 280% Increase in Trial Signups" [level=3] [ref=e120]'
            - paragraph [ref=e121]: TechFlow
            - generic [ref=e122]:
              - generic [ref=e123]:
                - generic [ref=e124]: +280%
                - generic [ref=e125]: Trial Signups
              - generic [ref=e126]:
                - generic [ref=e127]: "-45%"
                - generic [ref=e128]: CAC Reduction
            - generic [ref=e129]:
              - generic [ref=e130]: View Details
              - img [ref=e131]
    - generic [ref=e137]:
      - heading "Want Similar Results for Your Business?" [level=2] [ref=e138]
      - paragraph [ref=e139]: Let's discuss how we can help you achieve your growth goals with data-driven marketing strategies.
      - link "Start Your Success Story" [ref=e140] [cursor=pointer]:
        - /url: /contact
  - contentinfo [ref=e141]:
    - generic [ref=e142]:
      - generic [ref=e143]:
        - generic [ref=e144]:
          - link "Y Your Dedicated Marketer" [ref=e145] [cursor=pointer]:
            - /url: /
            - generic [ref=e147]: "Y"
            - generic [ref=e148]: Your Dedicated Marketer
          - paragraph [ref=e149]: AI-powered growth strategies for modern brands. Transform your digital presence with data-driven marketing.
          - generic [ref=e150]:
            - link "Instagram" [ref=e151] [cursor=pointer]:
              - /url: https://instagram.com/YourDedicatedMarketer
              - img [ref=e152]
            - link "Threads" [ref=e154] [cursor=pointer]:
              - /url: https://threads.net/YourDedicatedMarketer
              - img [ref=e155]
            - link "YouTube" [ref=e157] [cursor=pointer]:
              - /url: https://youtube.com/YourDedicatedMarketer
              - img [ref=e158]
        - generic [ref=e160]:
          - heading "Services" [level=4] [ref=e161]
          - list [ref=e162]:
            - listitem [ref=e163]:
              - link "SEO" [ref=e164] [cursor=pointer]:
                - /url: /services/seo
            - listitem [ref=e165]:
              - link "Paid Media" [ref=e166] [cursor=pointer]:
                - /url: /services/paid-media
            - listitem [ref=e167]:
              - link "Content Marketing" [ref=e168] [cursor=pointer]:
                - /url: /services/content-marketing
            - listitem [ref=e169]:
              - link "Email Automation" [ref=e170] [cursor=pointer]:
                - /url: /services/email-automation
            - listitem [ref=e171]:
              - link "Analytics & Reporting" [ref=e172] [cursor=pointer]:
                - /url: /services/analytics-and-reporting
        - generic [ref=e173]:
          - heading "Company" [level=4] [ref=e174]
          - list [ref=e175]:
            - listitem [ref=e176]:
              - link "About Us" [ref=e177] [cursor=pointer]:
                - /url: /about
            - listitem [ref=e178]:
              - link "Our Team" [ref=e179] [cursor=pointer]:
                - /url: /team
            - listitem [ref=e180]:
              - link "Case Studies" [ref=e181] [cursor=pointer]:
                - /url: /work
            - listitem [ref=e182]:
              - link "Blog" [ref=e183] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e184]:
              - link "Careers" [ref=e185] [cursor=pointer]:
                - /url: /careers
        - generic [ref=e186]:
          - heading "Resources" [level=4] [ref=e187]
          - list [ref=e188]:
            - listitem [ref=e189]:
              - link "Pricing" [ref=e190] [cursor=pointer]:
                - /url: /pricing
            - listitem [ref=e191]:
              - link "FAQ" [ref=e192] [cursor=pointer]:
                - /url: /faq
            - listitem [ref=e193]:
              - link "Industries" [ref=e194] [cursor=pointer]:
                - /url: /industries/saas
            - listitem [ref=e195]:
              - link "Contact" [ref=e196] [cursor=pointer]:
                - /url: /contact
        - generic [ref=e197]:
          - heading "Legal" [level=4] [ref=e198]
          - list [ref=e199]:
            - listitem [ref=e200]:
              - link "Privacy Policy" [ref=e201] [cursor=pointer]:
                - /url: /privacy-policy
            - listitem [ref=e202]:
              - link "Terms of Service" [ref=e203] [cursor=pointer]:
                - /url: /terms-of-service
      - generic [ref=e204]:
        - paragraph [ref=e205]: © 2026 Your Dedicated Marketer. All rights reserved.
        - paragraph [ref=e206]: Built with Astro & Tailwind CSS
  - generic [ref=e209]:
    - button "Menu" [ref=e210]:
      - img [ref=e212]
      - generic: Menu
    - button "Inspect" [ref=e216]:
      - img [ref=e218]
      - generic: Inspect
    - button "Audit" [ref=e220]:
      - generic [ref=e221]:
        - img [ref=e222]
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
> 46 |     expect(accessibilityScanResults.violations).toEqual([]);
     |                                                 ^ Error: expect(received).toEqual(expected) // deep equality
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