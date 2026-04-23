# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: a11y.spec.ts >> Accessibility Tests >> blog index should not have automatically detectable WCAG A or AA violations
- Location: src\test\a11y.spec.ts:31:3

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  -   1
+ Received  + 761

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
+               "fontSize": "9.0pt (12px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.38 (foreground color: #3385ff, background color: #fafafa, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a href=\"/blog/content-marketing-strategy-2024\" class=\"glass-card overflow-hidden card-hover group\">",
+                 "target": Array [
+                   ".card-hover.glass-card.group:nth-child(1)",
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
+         "html": "<span class=\"text-xs text-electric-400 font-medium\"> Content Marketing </span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".card-hover.glass-card.group:nth-child(1) > .p-6 > .gap-3.mb-3.items-center > .text-electric-400.text-xs.font-medium",
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
+                 "html": "<a href=\"/blog/content-marketing-strategy-2024\" class=\"glass-card overflow-hidden card-hover group\">",
+                 "target": Array [
+                   ".card-hover.glass-card.group:nth-child(1)",
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
+         "html": "<h2 class=\"font-display text-lg font-semibold text-white mb-3 group-hover:text-electric-400 transition-colors\"> Building a Winning Content Marketing Strategy for 2024 </h2>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".card-hover.glass-card.group:nth-child(1) > .p-6 > .group-hover\\:text-electric-400",
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
+                 "html": "<a href=\"/blog/content-marketing-strategy-2024\" class=\"glass-card overflow-hidden card-hover group\">",
+                 "target": Array [
+                   ".card-hover.glass-card.group:nth-child(1)",
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
+         "html": "<p class=\"text-gray-400 text-sm line-clamp-2 mb-4\">Learn how to create a comprehensive content marketing strategy that drives engagement, builds authority, and delivers measurable business results.</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".card-hover.glass-card.group:nth-child(1) > .p-6 > .line-clamp-2.text-gray-400",
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
+                 "html": "<a href=\"/blog/digital-marketing-kpis-guide\" class=\"glass-card overflow-hidden card-hover group\">",
+                 "target": Array [
+                   ".card-hover.glass-card.group:nth-child(2)",
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
+         "html": "<span class=\"text-xs text-electric-400 font-medium\"> Analytics and Reporting </span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".card-hover.glass-card.group:nth-child(2) > .p-6 > .gap-3.mb-3.items-center > .text-electric-400.text-xs.font-medium",
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
+                 "html": "<a href=\"/blog/digital-marketing-kpis-guide\" class=\"glass-card overflow-hidden card-hover group\">",
+                 "target": Array [
+                   ".card-hover.glass-card.group:nth-child(2)",
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
+         "html": "<h2 class=\"font-display text-lg font-semibold text-white mb-3 group-hover:text-electric-400 transition-colors\"> The Ultimate Guide to Digital Marketing KPIs </h2>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".card-hover.glass-card.group:nth-child(2) > .p-6 > .group-hover\\:text-electric-400",
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
+                 "html": "<a href=\"/blog/digital-marketing-kpis-guide\" class=\"glass-card overflow-hidden card-hover group\">",
+                 "target": Array [
+                   ".card-hover.glass-card.group:nth-child(2)",
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
+         "html": "<p class=\"text-gray-400 text-sm line-clamp-2 mb-4\">Master the essential digital marketing KPIs across SEO, social media, paid search, and email marketing to measure performance and drive data-driven decisions.</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".card-hover.glass-card.group:nth-child(2) > .p-6 > .line-clamp-2.text-gray-400",
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
+                 "html": "<a href=\"/blog/social-media-search-optimization\" class=\"glass-card overflow-hidden card-hover group\">",
+                 "target": Array [
+                   ".card-hover.glass-card.group:nth-child(3)",
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
+         "html": "<span class=\"text-xs text-electric-400 font-medium\"> Social Media </span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".card-hover.glass-card.group:nth-child(3) > .p-6 > .gap-3.mb-3.items-center > .text-electric-400.text-xs.font-medium",
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
+                 "html": "<a href=\"/blog/social-media-search-optimization\" class=\"glass-card overflow-hidden card-hover group\">",
+                 "target": Array [
+                   ".card-hover.glass-card.group:nth-child(3)",
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
+         "html": "<h2 class=\"font-display text-lg font-semibold text-white mb-3 group-hover:text-electric-400 transition-colors\"> Social Media Search Optimization: The New Frontier </h2>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".card-hover.glass-card.group:nth-child(3) > .p-6 > .group-hover\\:text-electric-400",
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
+                 "html": "<a href=\"/blog/social-media-search-optimization\" class=\"glass-card overflow-hidden card-hover group\">",
+                 "target": Array [
+                   ".card-hover.glass-card.group:nth-child(3)",
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
+         "html": "<p class=\"text-gray-400 text-sm line-clamp-2 mb-4\">Discover why 40% of Gen-Z uses TikTok and Instagram for search instead of Google, and learn how to optimize your social media content for discoverability.</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".card-hover.glass-card.group:nth-child(3) > .p-6 > .line-clamp-2.text-gray-400",
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
+                 "html": "<a href=\"/blog/marketing-automation-best-practices\" class=\"glass-card overflow-hidden card-hover group\">",
+                 "target": Array [
+                   ".card-hover.glass-card.group:nth-child(4)",
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
+         "html": "<span class=\"text-xs text-electric-400 font-medium\"> Email Automation </span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".card-hover.glass-card.group:nth-child(4) > .p-6 > .gap-3.mb-3.items-center > .text-electric-400.text-xs.font-medium",
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
+                 "html": "<a href=\"/blog/marketing-automation-best-practices\" class=\"glass-card overflow-hidden card-hover group\">",
+                 "target": Array [
+                   ".card-hover.glass-card.group:nth-child(4)",
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
+         "html": "<h2 class=\"font-display text-lg font-semibold text-white mb-3 group-hover:text-electric-400 transition-colors\"> 10 Marketing Automation Best Practices for 2024 </h2>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".card-hover.glass-card.group:nth-child(4) > .p-6 > .group-hover\\:text-electric-400",
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
+                 "html": "<a href=\"/blog/marketing-automation-best-practices\" class=\"glass-card overflow-hidden card-hover group\">",
+                 "target": Array [
+                   ".card-hover.glass-card.group:nth-child(4)",
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
+         "html": "<p class=\"text-gray-400 text-sm line-clamp-2 mb-4\">Learn proven marketing automation strategies including customer journey mapping, behavior-based triggers, segmentation, and A/B testing to boost your ROI.</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".card-hover.glass-card.group:nth-child(4) > .p-6 > .line-clamp-2.text-gray-400",
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
+                 "html": "<a href=\"/blog/ai-powered-seo-strategies\" class=\"glass-card overflow-hidden card-hover group\">",
+                 "target": Array [
+                   ".card-hover.glass-card.group:nth-child(5)",
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
+         "html": "<span class=\"text-xs text-electric-400 font-medium\"> SEO </span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".card-hover.glass-card.group:nth-child(5) > .p-6 > .gap-3.mb-3.items-center > .text-electric-400.text-xs.font-medium",
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
+                 "html": "<a href=\"/blog/ai-powered-seo-strategies\" class=\"glass-card overflow-hidden card-hover group\">",
+                 "target": Array [
+                   ".card-hover.glass-card.group:nth-child(5)",
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
+         "html": "<h2 class=\"font-display text-lg font-semibold text-white mb-3 group-hover:text-electric-400 transition-colors\"> AI-Powered SEO Strategies for 2024 </h2>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".card-hover.glass-card.group:nth-child(5) > .p-6 > .group-hover\\:text-electric-400",
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
+                 "html": "<a href=\"/blog/ai-powered-seo-strategies\" class=\"glass-card overflow-hidden card-hover group\">",
+                 "target": Array [
+                   ".card-hover.glass-card.group:nth-child(5)",
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
+         "html": "<p class=\"text-gray-400 text-sm line-clamp-2 mb-4\">Discover how artificial intelligence is transforming SEO strategies and how you can leverage these tools to improve your search rankings.</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".card-hover.glass-card.group:nth-child(5) > .p-6 > .line-clamp-2.text-gray-400",
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
+                 "html": "<a href=\"/blog/paid-media-optimization\" class=\"glass-card overflow-hidden card-hover group\">",
+                 "target": Array [
+                   "a[href$=\"paid-media-optimization\"]",
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
+         "html": "<span class=\"text-xs text-electric-400 font-medium\"> Paid Media </span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href$=\"paid-media-optimization\"] > .p-6 > .gap-3.mb-3.items-center > .text-electric-400.text-xs.font-medium",
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
+                 "html": "<a href=\"/blog/paid-media-optimization\" class=\"glass-card overflow-hidden card-hover group\">",
+                 "target": Array [
+                   "a[href$=\"paid-media-optimization\"]",
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
+         "html": "<h2 class=\"font-display text-lg font-semibold text-white mb-3 group-hover:text-electric-400 transition-colors\"> Maximizing ROI: A Guide to Paid Media Optimization </h2>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href$=\"paid-media-optimization\"] > .p-6 > .group-hover\\:text-electric-400",
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
+                 "html": "<a href=\"/blog/paid-media-optimization\" class=\"glass-card overflow-hidden card-hover group\">",
+                 "target": Array [
+                   "a[href$=\"paid-media-optimization\"]",
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
+         "html": "<p class=\"text-gray-400 text-sm line-clamp-2 mb-4\">Learn proven strategies for optimizing your paid media campaigns across Google, Meta, and LinkedIn to maximize return on ad spend.</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "a[href$=\"paid-media-optimization\"] > .p-6 > .line-clamp-2.text-gray-400",
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
      - heading "Our Blog" [level=1] [ref=e31]
      - paragraph [ref=e32]: Expert insights, strategies, and tips for digital marketing success. Stay updated with the latest trends in SEO, paid media, content marketing, and more.
    - generic [ref=e35]:
      - link "Content Marketing Feb 14, 2024 Building a Winning Content Marketing Strategy for 2024 Learn how to create a comprehensive content marketing strategy that drives engagement, builds authority, and delivers measurable business results. Marcus Johnson · 8 min read" [ref=e36] [cursor=pointer]:
        - /url: /blog/content-marketing-strategy-2024
        - generic [ref=e37]:
          - generic [ref=e38]:
            - generic [ref=e39]: Content Marketing
            - time [ref=e40]: Feb 14, 2024
          - heading "Building a Winning Content Marketing Strategy for 2024" [level=2] [ref=e41]
          - paragraph [ref=e42]: Learn how to create a comprehensive content marketing strategy that drives engagement, builds authority, and delivers measurable business results.
          - generic [ref=e43]:
            - generic [ref=e44]: Marcus Johnson
            - generic [ref=e45]: ·
            - generic [ref=e46]: 8 min read
      - link "Analytics and Reporting Feb 7, 2024 The Ultimate Guide to Digital Marketing KPIs Master the essential digital marketing KPIs across SEO, social media, paid search, and email marketing to measure performance and drive data-driven decisions. Sarah Mitchell · 10 min read" [ref=e47] [cursor=pointer]:
        - /url: /blog/digital-marketing-kpis-guide
        - generic [ref=e48]:
          - generic [ref=e49]:
            - generic [ref=e50]: Analytics and Reporting
            - time [ref=e51]: Feb 7, 2024
          - heading "The Ultimate Guide to Digital Marketing KPIs" [level=2] [ref=e52]
          - paragraph [ref=e53]: Master the essential digital marketing KPIs across SEO, social media, paid search, and email marketing to measure performance and drive data-driven decisions.
          - generic [ref=e54]:
            - generic [ref=e55]: Sarah Mitchell
            - generic [ref=e56]: ·
            - generic [ref=e57]: 10 min read
      - 'link "Social Media Jan 31, 2024 Social Media Search Optimization: The New Frontier Discover why 40% of Gen-Z uses TikTok and Instagram for search instead of Google, and learn how to optimize your social media content for discoverability. Sarah Mitchell · 7 min read" [ref=e58] [cursor=pointer]':
        - /url: /blog/social-media-search-optimization
        - generic [ref=e59]:
          - generic [ref=e60]:
            - generic [ref=e61]: Social Media
            - time [ref=e62]: Jan 31, 2024
          - 'heading "Social Media Search Optimization: The New Frontier" [level=2] [ref=e63]'
          - paragraph [ref=e64]: Discover why 40% of Gen-Z uses TikTok and Instagram for search instead of Google, and learn how to optimize your social media content for discoverability.
          - generic [ref=e65]:
            - generic [ref=e66]: Sarah Mitchell
            - generic [ref=e67]: ·
            - generic [ref=e68]: 7 min read
      - link "Email Automation Jan 24, 2024 10 Marketing Automation Best Practices for 2024 Learn proven marketing automation strategies including customer journey mapping, behavior-based triggers, segmentation, and A/B testing to boost your ROI. Marcus Johnson · 9 min read" [ref=e69] [cursor=pointer]:
        - /url: /blog/marketing-automation-best-practices
        - generic [ref=e70]:
          - generic [ref=e71]:
            - generic [ref=e72]: Email Automation
            - time [ref=e73]: Jan 24, 2024
          - heading "10 Marketing Automation Best Practices for 2024" [level=2] [ref=e74]
          - paragraph [ref=e75]: Learn proven marketing automation strategies including customer journey mapping, behavior-based triggers, segmentation, and A/B testing to boost your ROI.
          - generic [ref=e76]:
            - generic [ref=e77]: Marcus Johnson
            - generic [ref=e78]: ·
            - generic [ref=e79]: 9 min read
      - link "AI visualization for SEO SEO Jan 14, 2024 AI-Powered SEO Strategies for 2024 Discover how artificial intelligence is transforming SEO strategies and how you can leverage these tools to improve your search rankings. Sarah Mitchell · 8 min read" [ref=e80] [cursor=pointer]:
        - /url: /blog/ai-powered-seo-strategies
        - img "AI visualization for SEO" [ref=e82]
        - generic [ref=e83]:
          - generic [ref=e84]:
            - generic [ref=e85]: SEO
            - time [ref=e86]: Jan 14, 2024
          - heading "AI-Powered SEO Strategies for 2024" [level=2] [ref=e87]
          - paragraph [ref=e88]: Discover how artificial intelligence is transforming SEO strategies and how you can leverage these tools to improve your search rankings.
          - generic [ref=e89]:
            - generic [ref=e90]: Sarah Mitchell
            - generic [ref=e91]: ·
            - generic [ref=e92]: 8 min read
      - 'link "Paid media dashboard Paid Media Jan 9, 2024 Maximizing ROI: A Guide to Paid Media Optimization Learn proven strategies for optimizing your paid media campaigns across Google, Meta, and LinkedIn to maximize return on ad spend. Marcus Johnson · 10 min read" [ref=e93] [cursor=pointer]':
        - /url: /blog/paid-media-optimization
        - img "Paid media dashboard" [ref=e95]
        - generic [ref=e96]:
          - generic [ref=e97]:
            - generic [ref=e98]: Paid Media
            - time [ref=e99]: Jan 9, 2024
          - 'heading "Maximizing ROI: A Guide to Paid Media Optimization" [level=2] [ref=e100]'
          - paragraph [ref=e101]: Learn proven strategies for optimizing your paid media campaigns across Google, Meta, and LinkedIn to maximize return on ad spend.
          - generic [ref=e102]:
            - generic [ref=e103]: Marcus Johnson
            - generic [ref=e104]: ·
            - generic [ref=e105]: 10 min read
  - contentinfo [ref=e106]:
    - generic [ref=e107]:
      - generic [ref=e108]:
        - generic [ref=e109]:
          - link "Y Your Dedicated Marketer" [ref=e110] [cursor=pointer]:
            - /url: /
            - generic [ref=e112]: "Y"
            - generic [ref=e113]: Your Dedicated Marketer
          - paragraph [ref=e114]: AI-powered growth strategies for modern brands. Transform your digital presence with data-driven marketing.
          - generic [ref=e115]:
            - link "Instagram" [ref=e116] [cursor=pointer]:
              - /url: https://instagram.com/YourDedicatedMarketer
              - img [ref=e117]
            - link "Threads" [ref=e119] [cursor=pointer]:
              - /url: https://threads.net/YourDedicatedMarketer
              - img [ref=e120]
            - link "YouTube" [ref=e122] [cursor=pointer]:
              - /url: https://youtube.com/YourDedicatedMarketer
              - img [ref=e123]
        - generic [ref=e125]:
          - heading "Services" [level=4] [ref=e126]
          - list [ref=e127]:
            - listitem [ref=e128]:
              - link "SEO" [ref=e129] [cursor=pointer]:
                - /url: /services/seo
            - listitem [ref=e130]:
              - link "Paid Media" [ref=e131] [cursor=pointer]:
                - /url: /services/paid-media
            - listitem [ref=e132]:
              - link "Content Marketing" [ref=e133] [cursor=pointer]:
                - /url: /services/content-marketing
            - listitem [ref=e134]:
              - link "Email Automation" [ref=e135] [cursor=pointer]:
                - /url: /services/email-automation
            - listitem [ref=e136]:
              - link "Analytics & Reporting" [ref=e137] [cursor=pointer]:
                - /url: /services/analytics-and-reporting
        - generic [ref=e138]:
          - heading "Company" [level=4] [ref=e139]
          - list [ref=e140]:
            - listitem [ref=e141]:
              - link "About Us" [ref=e142] [cursor=pointer]:
                - /url: /about
            - listitem [ref=e143]:
              - link "Our Team" [ref=e144] [cursor=pointer]:
                - /url: /team
            - listitem [ref=e145]:
              - link "Case Studies" [ref=e146] [cursor=pointer]:
                - /url: /work
            - listitem [ref=e147]:
              - link "Blog" [ref=e148] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e149]:
              - link "Careers" [ref=e150] [cursor=pointer]:
                - /url: /careers
        - generic [ref=e151]:
          - heading "Resources" [level=4] [ref=e152]
          - list [ref=e153]:
            - listitem [ref=e154]:
              - link "Pricing" [ref=e155] [cursor=pointer]:
                - /url: /pricing
            - listitem [ref=e156]:
              - link "FAQ" [ref=e157] [cursor=pointer]:
                - /url: /faq
            - listitem [ref=e158]:
              - link "Industries" [ref=e159] [cursor=pointer]:
                - /url: /industries/saas
            - listitem [ref=e160]:
              - link "Contact" [ref=e161] [cursor=pointer]:
                - /url: /contact
        - generic [ref=e162]:
          - heading "Legal" [level=4] [ref=e163]
          - list [ref=e164]:
            - listitem [ref=e165]:
              - link "Privacy Policy" [ref=e166] [cursor=pointer]:
                - /url: /privacy-policy
            - listitem [ref=e167]:
              - link "Terms of Service" [ref=e168] [cursor=pointer]:
                - /url: /terms-of-service
      - generic [ref=e169]:
        - paragraph [ref=e170]: © 2026 Your Dedicated Marketer. All rights reserved.
        - paragraph [ref=e171]: Built with Astro & Tailwind CSS
  - generic [ref=e174]:
    - button "Menu" [ref=e175]:
      - img [ref=e177]
      - generic: Menu
    - button "Inspect" [ref=e181]:
      - img [ref=e183]
      - generic: Inspect
    - button "Audit" [ref=e185]:
      - generic [ref=e186]:
        - img [ref=e187]
        - img [ref=e190]
      - generic: Audit
    - button "Settings" [ref=e193]:
      - img [ref=e195]
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
> 37 |     expect(accessibilityScanResults.violations).toEqual([]);
     |                                                 ^ Error: expect(received).toEqual(expected) // deep equality
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