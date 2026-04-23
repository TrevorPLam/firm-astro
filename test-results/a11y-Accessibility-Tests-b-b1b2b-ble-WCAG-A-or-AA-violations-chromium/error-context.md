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
+           ".card-hover.glass-card.group:nth-child(1) > .p-6 > h2",
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
+           ".card-hover.glass-card.group:nth-child(2) > .p-6 > h2",
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
+           ".card-hover.glass-card.group:nth-child(3) > .p-6 > h2",
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
+           ".card-hover.glass-card.group:nth-child(4) > .p-6 > h2",
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
+           ".card-hover.glass-card.group:nth-child(5) > .p-6 > h2",
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
+           "a[href$=\"paid-media-optimization\"] > .p-6 > h2",
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
      - link "Content marketing strategy planning Content Marketing Feb 14, 2024 Building a Winning Content Marketing Strategy for 2024 Learn how to create a comprehensive content marketing strategy that drives engagement, builds authority, and delivers measurable business results. Marcus Johnson · 8 min read" [ref=e36] [cursor=pointer]:
        - /url: /blog/content-marketing-strategy-2024
        - img "Content marketing strategy planning" [ref=e38]
        - generic [ref=e39]:
          - generic [ref=e40]:
            - generic [ref=e41]: Content Marketing
            - time [ref=e42]: Feb 14, 2024
          - heading "Building a Winning Content Marketing Strategy for 2024" [level=2] [ref=e43]
          - paragraph [ref=e44]: Learn how to create a comprehensive content marketing strategy that drives engagement, builds authority, and delivers measurable business results.
          - generic [ref=e45]:
            - generic [ref=e46]: Marcus Johnson
            - generic [ref=e47]: ·
            - generic [ref=e48]: 8 min read
      - link "Digital marketing analytics dashboard Analytics and Reporting Feb 7, 2024 The Ultimate Guide to Digital Marketing KPIs Master the essential digital marketing KPIs across SEO, social media, paid search, and email marketing to measure performance and drive data-driven decisions. Sarah Mitchell · 10 min read" [ref=e49] [cursor=pointer]:
        - /url: /blog/digital-marketing-kpis-guide
        - img "Digital marketing analytics dashboard" [ref=e51]
        - generic [ref=e52]:
          - generic [ref=e53]:
            - generic [ref=e54]: Analytics and Reporting
            - time [ref=e55]: Feb 7, 2024
          - heading "The Ultimate Guide to Digital Marketing KPIs" [level=2] [ref=e56]
          - paragraph [ref=e57]: Master the essential digital marketing KPIs across SEO, social media, paid search, and email marketing to measure performance and drive data-driven decisions.
          - generic [ref=e58]:
            - generic [ref=e59]: Sarah Mitchell
            - generic [ref=e60]: ·
            - generic [ref=e61]: 10 min read
      - 'link "Social media search optimization Social Media Jan 31, 2024 Social Media Search Optimization: The New Frontier Discover why 40% of Gen-Z uses TikTok and Instagram for search instead of Google, and learn how to optimize your social media content for discoverability. Sarah Mitchell · 7 min read" [ref=e62] [cursor=pointer]':
        - /url: /blog/social-media-search-optimization
        - img "Social media search optimization" [ref=e64]
        - generic [ref=e65]:
          - generic [ref=e66]:
            - generic [ref=e67]: Social Media
            - time [ref=e68]: Jan 31, 2024
          - 'heading "Social Media Search Optimization: The New Frontier" [level=2] [ref=e69]'
          - paragraph [ref=e70]: Discover why 40% of Gen-Z uses TikTok and Instagram for search instead of Google, and learn how to optimize your social media content for discoverability.
          - generic [ref=e71]:
            - generic [ref=e72]: Sarah Mitchell
            - generic [ref=e73]: ·
            - generic [ref=e74]: 7 min read
      - link "Marketing automation dashboard Email Automation Jan 24, 2024 10 Marketing Automation Best Practices for 2024 Learn proven marketing automation strategies including customer journey mapping, behavior-based triggers, segmentation, and A/B testing to boost your ROI. Marcus Johnson · 9 min read" [ref=e75] [cursor=pointer]:
        - /url: /blog/marketing-automation-best-practices
        - img "Marketing automation dashboard" [ref=e77]
        - generic [ref=e78]:
          - generic [ref=e79]:
            - generic [ref=e80]: Email Automation
            - time [ref=e81]: Jan 24, 2024
          - heading "10 Marketing Automation Best Practices for 2024" [level=2] [ref=e82]
          - paragraph [ref=e83]: Learn proven marketing automation strategies including customer journey mapping, behavior-based triggers, segmentation, and A/B testing to boost your ROI.
          - generic [ref=e84]:
            - generic [ref=e85]: Marcus Johnson
            - generic [ref=e86]: ·
            - generic [ref=e87]: 9 min read
      - link "AI visualization for SEO SEO Jan 14, 2024 AI-Powered SEO Strategies for 2024 Discover how artificial intelligence is transforming SEO strategies and how you can leverage these tools to improve your search rankings. Sarah Mitchell · 8 min read" [ref=e88] [cursor=pointer]:
        - /url: /blog/ai-powered-seo-strategies
        - img "AI visualization for SEO" [ref=e90]
        - generic [ref=e91]:
          - generic [ref=e92]:
            - generic [ref=e93]: SEO
            - time [ref=e94]: Jan 14, 2024
          - heading "AI-Powered SEO Strategies for 2024" [level=2] [ref=e95]
          - paragraph [ref=e96]: Discover how artificial intelligence is transforming SEO strategies and how you can leverage these tools to improve your search rankings.
          - generic [ref=e97]:
            - generic [ref=e98]: Sarah Mitchell
            - generic [ref=e99]: ·
            - generic [ref=e100]: 8 min read
      - 'link "Paid media dashboard Paid Media Jan 9, 2024 Maximizing ROI: A Guide to Paid Media Optimization Learn proven strategies for optimizing your paid media campaigns across Google, Meta, and LinkedIn to maximize return on ad spend. Marcus Johnson · 10 min read" [ref=e101] [cursor=pointer]':
        - /url: /blog/paid-media-optimization
        - img "Paid media dashboard" [ref=e103]
        - generic [ref=e104]:
          - generic [ref=e105]:
            - generic [ref=e106]: Paid Media
            - time [ref=e107]: Jan 9, 2024
          - 'heading "Maximizing ROI: A Guide to Paid Media Optimization" [level=2] [ref=e108]'
          - paragraph [ref=e109]: Learn proven strategies for optimizing your paid media campaigns across Google, Meta, and LinkedIn to maximize return on ad spend.
          - generic [ref=e110]:
            - generic [ref=e111]: Marcus Johnson
            - generic [ref=e112]: ·
            - generic [ref=e113]: 10 min read
  - contentinfo [ref=e114]:
    - generic [ref=e115]:
      - generic [ref=e116]:
        - generic [ref=e117]:
          - link "Y Your Dedicated Marketer" [ref=e118] [cursor=pointer]:
            - /url: /
            - generic [ref=e120]: "Y"
            - generic [ref=e121]: Your Dedicated Marketer
          - paragraph [ref=e122]: AI-powered growth strategies for modern brands. Transform your digital presence with data-driven marketing.
          - generic [ref=e123]:
            - link "Twitter" [ref=e124] [cursor=pointer]:
              - /url: https://twitter.com/yourdedicatedmarketer
              - img [ref=e125]
            - link "LinkedIn" [ref=e127] [cursor=pointer]:
              - /url: https://linkedin.com/company/yourdedicatedmarketer
              - img [ref=e128]
            - link "Instagram" [ref=e130] [cursor=pointer]:
              - /url: https://instagram.com/yourdedicatedmarketer
              - img [ref=e131]
        - generic [ref=e133]:
          - heading "Services" [level=4] [ref=e134]
          - list [ref=e135]:
            - listitem [ref=e136]:
              - link "SEO" [ref=e137] [cursor=pointer]:
                - /url: /services/seo
            - listitem [ref=e138]:
              - link "Paid Media" [ref=e139] [cursor=pointer]:
                - /url: /services/paid-media
            - listitem [ref=e140]:
              - link "Content Marketing" [ref=e141] [cursor=pointer]:
                - /url: /services/content-marketing
            - listitem [ref=e142]:
              - link "Email Automation" [ref=e143] [cursor=pointer]:
                - /url: /services/email-automation
            - listitem [ref=e144]:
              - link "Analytics & Reporting" [ref=e145] [cursor=pointer]:
                - /url: /services/analytics-and-reporting
        - generic [ref=e146]:
          - heading "Company" [level=4] [ref=e147]
          - list [ref=e148]:
            - listitem [ref=e149]:
              - link "About Us" [ref=e150] [cursor=pointer]:
                - /url: /about
            - listitem [ref=e151]:
              - link "Our Team" [ref=e152] [cursor=pointer]:
                - /url: /team
            - listitem [ref=e153]:
              - link "Case Studies" [ref=e154] [cursor=pointer]:
                - /url: /work
            - listitem [ref=e155]:
              - link "Blog" [ref=e156] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e157]:
              - link "Careers" [ref=e158] [cursor=pointer]:
                - /url: /careers
        - generic [ref=e159]:
          - heading "Resources" [level=4] [ref=e160]
          - list [ref=e161]:
            - listitem [ref=e162]:
              - link "Pricing" [ref=e163] [cursor=pointer]:
                - /url: /pricing
            - listitem [ref=e164]:
              - link "FAQ" [ref=e165] [cursor=pointer]:
                - /url: /faq
            - listitem [ref=e166]:
              - link "Industries" [ref=e167] [cursor=pointer]:
                - /url: /industries/saas
            - listitem [ref=e168]:
              - link "Contact" [ref=e169] [cursor=pointer]:
                - /url: /contact
        - generic [ref=e170]:
          - heading "Legal" [level=4] [ref=e171]
          - list [ref=e172]:
            - listitem [ref=e173]:
              - link "Privacy Policy" [ref=e174] [cursor=pointer]:
                - /url: /privacy-policy
            - listitem [ref=e175]:
              - link "Terms of Service" [ref=e176] [cursor=pointer]:
                - /url: /terms-of-service
      - generic [ref=e177]:
        - paragraph [ref=e178]: © 2026 Your Dedicated Marketer. All rights reserved.
        - paragraph [ref=e179]: Built with Astro & Tailwind CSS
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
> 37 |     expect(accessibilityScanResults.violations).toEqual([]);
     |                                                 ^ Error: expect(received).toEqual(expected) // deep equality
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