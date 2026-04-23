# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: a11y.spec.ts >> Accessibility Tests >> team page should not have automatically detectable WCAG A or AA violations
- Location: src\test\a11y.spec.ts:58:3

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  -    1
+ Received  + 2840

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
+                   ".p-6.card-hover.group:nth-child(1) > .flex-col.text-center.items-center > .w-24.h-24.rounded-full",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\">",
+                 "target": Array [
+                   ".p-6.card-hover.group:nth-child(1)",
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
+           ".p-6.card-hover.group:nth-child(1) > .flex-col.text-center.items-center > .w-24.h-24.rounded-full > .text-2xl.font-bold.text-electric-400",
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
+                   ".p-6.card-hover.group:nth-child(1)",
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
+           ".p-6.card-hover.group:nth-child(1) > .flex-col.text-center.items-center > .mb-1.text-white.text-lg",
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
+                   ".p-6.card-hover.group:nth-child(1)",
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
+           ".p-6.card-hover.group:nth-child(1) > .flex-col.text-center.items-center > .mb-3.text-electric-400",
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
+                   ".p-6.card-hover.group:nth-child(1)",
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
+           ".p-6.card-hover.group:nth-child(1) > .flex-col.text-center.items-center > .leading-relaxed",
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
+                   ".p-6.card-hover.group:nth-child(1) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(1)",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\">",
+                 "target": Array [
+                   ".p-6.card-hover.group:nth-child(1)",
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
+           ".p-6.card-hover.group:nth-child(1) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(1)",
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
+                   ".p-6.card-hover.group:nth-child(1) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(2)",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\">",
+                 "target": Array [
+                   ".p-6.card-hover.group:nth-child(1)",
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
+           ".p-6.card-hover.group:nth-child(1) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(2)",
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
+                   ".p-6.card-hover.group:nth-child(1) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(3)",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\">",
+                 "target": Array [
+                   ".p-6.card-hover.group:nth-child(1)",
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
+           ".p-6.card-hover.group:nth-child(1) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(3)",
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
+                   ".p-6.card-hover.group:nth-child(1) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(4)",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\">",
+                 "target": Array [
+                   ".p-6.card-hover.group:nth-child(1)",
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
+           ".p-6.card-hover.group:nth-child(1) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(4)",
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
+                   ".p-6.card-hover.group:nth-child(2) > .flex-col.text-center.items-center > .w-24.h-24.rounded-full",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\">",
+                 "target": Array [
+                   ".p-6.card-hover.group:nth-child(2)",
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
+           ".p-6.card-hover.group:nth-child(2) > .flex-col.text-center.items-center > .w-24.h-24.rounded-full > .text-2xl.font-bold.text-electric-400",
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
+                   ".p-6.card-hover.group:nth-child(2)",
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
+           ".p-6.card-hover.group:nth-child(2) > .flex-col.text-center.items-center > .mb-1.text-white.text-lg",
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
+                   ".p-6.card-hover.group:nth-child(2)",
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
+           ".p-6.card-hover.group:nth-child(2) > .flex-col.text-center.items-center > .mb-3.text-electric-400",
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
+                   ".p-6.card-hover.group:nth-child(2)",
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
+           ".p-6.card-hover.group:nth-child(2) > .flex-col.text-center.items-center > .leading-relaxed",
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
+                   ".p-6.card-hover.group:nth-child(2) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(1)",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\">",
+                 "target": Array [
+                   ".p-6.card-hover.group:nth-child(2)",
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
+           ".p-6.card-hover.group:nth-child(2) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(1)",
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
+                   ".p-6.card-hover.group:nth-child(2) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(2)",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\">",
+                 "target": Array [
+                   ".p-6.card-hover.group:nth-child(2)",
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
+           ".p-6.card-hover.group:nth-child(2) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(2)",
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
+                   ".p-6.card-hover.group:nth-child(2) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(3)",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\">",
+                 "target": Array [
+                   ".p-6.card-hover.group:nth-child(2)",
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
+           ".p-6.card-hover.group:nth-child(2) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(3)",
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
+                   ".p-6.card-hover.group:nth-child(2) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(4)",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\">",
+                 "target": Array [
+                   ".p-6.card-hover.group:nth-child(2)",
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
+           ".p-6.card-hover.group:nth-child(2) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(4)",
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
+                   ".p-6.card-hover.group:nth-child(3) > .flex-col.text-center.items-center > .w-24.h-24.rounded-full",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\">",
+                 "target": Array [
+                   ".p-6.card-hover.group:nth-child(3)",
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
+           ".p-6.card-hover.group:nth-child(3) > .flex-col.text-center.items-center > .w-24.h-24.rounded-full > .text-2xl.font-bold.text-electric-400",
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
+                   ".p-6.card-hover.group:nth-child(3)",
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
+           ".p-6.card-hover.group:nth-child(3) > .flex-col.text-center.items-center > .mb-1.text-white.text-lg",
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
+                   ".p-6.card-hover.group:nth-child(3)",
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
+           ".p-6.card-hover.group:nth-child(3) > .flex-col.text-center.items-center > .mb-3.text-electric-400",
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
+                   ".p-6.card-hover.group:nth-child(3)",
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
+           ".p-6.card-hover.group:nth-child(3) > .flex-col.text-center.items-center > .leading-relaxed",
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
+                   ".p-6.card-hover.group:nth-child(3) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(1)",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\">",
+                 "target": Array [
+                   ".p-6.card-hover.group:nth-child(3)",
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
+           ".p-6.card-hover.group:nth-child(3) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(1)",
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
+                   ".p-6.card-hover.group:nth-child(3) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(2)",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\">",
+                 "target": Array [
+                   ".p-6.card-hover.group:nth-child(3)",
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
+           ".p-6.card-hover.group:nth-child(3) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(2)",
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
+                   ".p-6.card-hover.group:nth-child(3) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(3)",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\">",
+                 "target": Array [
+                   ".p-6.card-hover.group:nth-child(3)",
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
+           ".p-6.card-hover.group:nth-child(3) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(3)",
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
+                   ".p-6.card-hover.group:nth-child(3) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(4)",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\">",
+                 "target": Array [
+                   ".p-6.card-hover.group:nth-child(3)",
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
+           ".p-6.card-hover.group:nth-child(3) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(4)",
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
+                   ".p-6.card-hover.group:nth-child(4) > .flex-col.text-center.items-center > .w-24.h-24.rounded-full",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\">",
+                 "target": Array [
+                   ".p-6.card-hover.group:nth-child(4)",
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
+           ".p-6.card-hover.group:nth-child(4) > .flex-col.text-center.items-center > .w-24.h-24.rounded-full > .text-2xl.font-bold.text-electric-400",
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
+                   ".p-6.card-hover.group:nth-child(4)",
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
+           ".p-6.card-hover.group:nth-child(4) > .flex-col.text-center.items-center > .mb-1.text-white.text-lg",
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
+                   ".p-6.card-hover.group:nth-child(4)",
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
+           ".p-6.card-hover.group:nth-child(4) > .flex-col.text-center.items-center > .mb-3.text-electric-400",
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
+                   ".p-6.card-hover.group:nth-child(4)",
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
+           ".p-6.card-hover.group:nth-child(4) > .flex-col.text-center.items-center > .leading-relaxed",
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
+                   ".p-6.card-hover.group:nth-child(4) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(1)",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\">",
+                 "target": Array [
+                   ".p-6.card-hover.group:nth-child(4)",
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
+           ".p-6.card-hover.group:nth-child(4) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(1)",
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
+                   ".p-6.card-hover.group:nth-child(4) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(2)",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\">",
+                 "target": Array [
+                   ".p-6.card-hover.group:nth-child(4)",
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
+           ".p-6.card-hover.group:nth-child(4) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(2)",
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
+                   ".p-6.card-hover.group:nth-child(4) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(3)",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\">",
+                 "target": Array [
+                   ".p-6.card-hover.group:nth-child(4)",
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
+           ".p-6.card-hover.group:nth-child(4) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(3)",
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
+                   ".p-6.card-hover.group:nth-child(4) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(4)",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\">",
+                 "target": Array [
+                   ".p-6.card-hover.group:nth-child(4)",
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
+           ".p-6.card-hover.group:nth-child(4) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(4)",
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
+                 "html": "<div class=\"w-24 h-24 rounded-full bg-electric-500/20 flex items-center justify-center mb-4 group-hover:shadow-neon-sm transition-shadow overflow-hidden\"> <span class=\"text-2xl font-display font-bold text-electric-400\"> DK </span> </div>",
+                 "target": Array [
+                   ".p-6.card-hover.group:nth-child(5) > .flex-col.text-center.items-center > .w-24.h-24.rounded-full",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\">",
+                 "target": Array [
+                   ".p-6.card-hover.group:nth-child(5)",
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
+         "html": "<span class=\"text-2xl font-display font-bold text-electric-400\"> DK </span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.card-hover.group:nth-child(5) > .flex-col.text-center.items-center > .w-24.h-24.rounded-full > .text-2xl.font-bold.text-electric-400",
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
+                   ".p-6.card-hover.group:nth-child(5)",
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
+         "html": "<h3 class=\"font-display text-lg font-semibold text-white mb-1\">David Kim</h3>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.card-hover.group:nth-child(5) > .flex-col.text-center.items-center > .mb-1.text-white.text-lg",
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
+                   ".p-6.card-hover.group:nth-child(5)",
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
+         "html": "<p class=\"text-electric-400 text-sm mb-3\">Head of Analytics</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.card-hover.group:nth-child(5) > .flex-col.text-center.items-center > .mb-3.text-electric-400",
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
+                   ".p-6.card-hover.group:nth-child(5)",
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
+         "html": "<p class=\"text-gray-400 text-sm leading-relaxed mb-4\">Data scientist with background in machine learning. Transforms complex data into actionable marketing insights.</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.card-hover.group:nth-child(5) > .flex-col.text-center.items-center > .leading-relaxed",
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
+                   ".p-6.card-hover.group:nth-child(5) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(1)",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\">",
+                 "target": Array [
+                   ".p-6.card-hover.group:nth-child(5)",
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
+           ".p-6.card-hover.group:nth-child(5) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(1)",
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
+                 "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\">Data Science</span>",
+                 "target": Array [
+                   ".p-6.card-hover.group:nth-child(5) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(2)",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\">",
+                 "target": Array [
+                   ".p-6.card-hover.group:nth-child(5)",
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
+         "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\">Data Science</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.card-hover.group:nth-child(5) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(2)",
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
+                 "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\">BI</span>",
+                 "target": Array [
+                   ".p-6.card-hover.group:nth-child(5) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(3)",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\">",
+                 "target": Array [
+                   ".p-6.card-hover.group:nth-child(5)",
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
+         "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\">BI</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.card-hover.group:nth-child(5) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(3)",
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
+                 "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\">Python</span>",
+                 "target": Array [
+                   ".p-6.card-hover.group:nth-child(5) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(4)",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\">",
+                 "target": Array [
+                   ".p-6.card-hover.group:nth-child(5)",
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
+         "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\">Python</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.card-hover.group:nth-child(5) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(4)",
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
+                 "html": "<div class=\"w-24 h-24 rounded-full bg-electric-500/20 flex items-center justify-center mb-4 group-hover:shadow-neon-sm transition-shadow overflow-hidden\"> <span class=\"text-2xl font-display font-bold text-electric-400\"> LT </span> </div>",
+                 "target": Array [
+                   ".p-6.card-hover.group:nth-child(6) > .flex-col.text-center.items-center > .w-24.h-24.rounded-full",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\">",
+                 "target": Array [
+                   ".p-6.card-hover.group:nth-child(6)",
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
+         "html": "<span class=\"text-2xl font-display font-bold text-electric-400\"> LT </span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.card-hover.group:nth-child(6) > .flex-col.text-center.items-center > .w-24.h-24.rounded-full > .text-2xl.font-bold.text-electric-400",
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
+                   ".p-6.card-hover.group:nth-child(6)",
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
+         "html": "<h3 class=\"font-display text-lg font-semibold text-white mb-1\">Lisa Thompson</h3>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.card-hover.group:nth-child(6) > .flex-col.text-center.items-center > .mb-1.text-white.text-lg",
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
+                   ".p-6.card-hover.group:nth-child(6)",
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
+         "html": "<p class=\"text-electric-400 text-sm mb-3\">Head of Email Marketing</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.card-hover.group:nth-child(6) > .flex-col.text-center.items-center > .mb-3.text-electric-400",
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
+                   ".p-6.card-hover.group:nth-child(6)",
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
+         "html": "<p class=\"text-gray-400 text-sm leading-relaxed mb-4\">Email automation expert. Built campaigns generating $10M+ in revenue. Specialist in lifecycle marketing and segmentation.</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.card-hover.group:nth-child(6) > .flex-col.text-center.items-center > .leading-relaxed",
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
+                 "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\">Email</span>",
+                 "target": Array [
+                   ".p-6.card-hover.group:nth-child(6) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(1)",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\">",
+                 "target": Array [
+                   ".p-6.card-hover.group:nth-child(6)",
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
+         "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\">Email</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.card-hover.group:nth-child(6) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(1)",
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
+                 "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\">Automation</span>",
+                 "target": Array [
+                   ".p-6.card-hover.group:nth-child(6) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(2)",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\">",
+                 "target": Array [
+                   ".p-6.card-hover.group:nth-child(6)",
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
+         "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\">Automation</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.card-hover.group:nth-child(6) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(2)",
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
+                 "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\">CRM</span>",
+                 "target": Array [
+                   ".p-6.card-hover.group:nth-child(6) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(3)",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\">",
+                 "target": Array [
+                   ".p-6.card-hover.group:nth-child(6)",
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
+         "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\">CRM</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.card-hover.group:nth-child(6) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(3)",
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
+                 "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\">Lifecycle</span>",
+                 "target": Array [
+                   ".p-6.card-hover.group:nth-child(6) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(4)",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\">",
+                 "target": Array [
+                   ".p-6.card-hover.group:nth-child(6)",
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
+         "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\">Lifecycle</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.card-hover.group:nth-child(6) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(4)",
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
+                 "html": "<div class=\"w-24 h-24 rounded-full bg-electric-500/20 flex items-center justify-center mb-4 group-hover:shadow-neon-sm transition-shadow overflow-hidden\"> <span class=\"text-2xl font-display font-bold text-electric-400\"> JW </span> </div>",
+                 "target": Array [
+                   ".p-6.card-hover.group:nth-child(7) > .flex-col.text-center.items-center > .w-24.h-24.rounded-full",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\">",
+                 "target": Array [
+                   ".p-6.card-hover.group:nth-child(7)",
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
+         "html": "<span class=\"text-2xl font-display font-bold text-electric-400\"> JW </span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.card-hover.group:nth-child(7) > .flex-col.text-center.items-center > .w-24.h-24.rounded-full > .text-2xl.font-bold.text-electric-400",
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
+                   ".p-6.card-hover.group:nth-child(7)",
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
+         "html": "<h3 class=\"font-display text-lg font-semibold text-white mb-1\">James Wilson</h3>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.card-hover.group:nth-child(7) > .flex-col.text-center.items-center > .mb-1.text-white.text-lg",
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
+                   ".p-6.card-hover.group:nth-child(7)",
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
+         "html": "<p class=\"text-electric-400 text-sm mb-3\">Senior SEO Strategist</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.card-hover.group:nth-child(7) > .flex-col.text-center.items-center > .mb-3.text-electric-400",
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
+                   ".p-6.card-hover.group:nth-child(7)",
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
+         "html": "<p class=\"text-gray-400 text-sm leading-relaxed mb-4\">Technical SEO expert with 8+ years experience. Specializes in enterprise SEO and international markets.</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.card-hover.group:nth-child(7) > .flex-col.text-center.items-center > .leading-relaxed",
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
+                   ".p-6.card-hover.group:nth-child(7) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(1)",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\">",
+                 "target": Array [
+                   ".p-6.card-hover.group:nth-child(7)",
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
+           ".p-6.card-hover.group:nth-child(7) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(1)",
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
+                 "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\">Enterprise</span>",
+                 "target": Array [
+                   ".p-6.card-hover.group:nth-child(7) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(2)",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\">",
+                 "target": Array [
+                   ".p-6.card-hover.group:nth-child(7)",
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
+         "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\">Enterprise</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.card-hover.group:nth-child(7) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(2)",
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
+                 "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\">International</span>",
+                 "target": Array [
+                   ".p-6.card-hover.group:nth-child(7) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(3)",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\">",
+                 "target": Array [
+                   ".p-6.card-hover.group:nth-child(7)",
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
+         "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\">International</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.card-hover.group:nth-child(7) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(3)",
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
+                 "html": "<div class=\"w-24 h-24 rounded-full bg-electric-500/20 flex items-center justify-center mb-4 group-hover:shadow-neon-sm transition-shadow overflow-hidden\"> <span class=\"text-2xl font-display font-bold text-electric-400\"> RG </span> </div>",
+                 "target": Array [
+                   ".p-6.card-hover.group:nth-child(8) > .flex-col.text-center.items-center > .w-24.h-24.rounded-full",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\">",
+                 "target": Array [
+                   ".p-6.card-hover.group:nth-child(8)",
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
+         "html": "<span class=\"text-2xl font-display font-bold text-electric-400\"> RG </span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.card-hover.group:nth-child(8) > .flex-col.text-center.items-center > .w-24.h-24.rounded-full > .text-2xl.font-bold.text-electric-400",
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
+                   ".p-6.card-hover.group:nth-child(8)",
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
+         "html": "<h3 class=\"font-display text-lg font-semibold text-white mb-1\">Rachel Green</h3>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.card-hover.group:nth-child(8) > .flex-col.text-center.items-center > .mb-1.text-white.text-lg",
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
+                   ".p-6.card-hover.group:nth-child(8)",
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
+         "html": "<p class=\"text-electric-400 text-sm mb-3\">Creative Director</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.card-hover.group:nth-child(8) > .flex-col.text-center.items-center > .mb-3.text-electric-400",
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
+                   ".p-6.card-hover.group:nth-child(8)",
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
+         "html": "<p class=\"text-gray-400 text-sm leading-relaxed mb-4\">Award-winning creative professional. Leads visual identity and brand design projects for enterprise clients.</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.card-hover.group:nth-child(8) > .flex-col.text-center.items-center > .leading-relaxed",
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
+                 "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\">Design</span>",
+                 "target": Array [
+                   ".p-6.card-hover.group:nth-child(8) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(1)",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\">",
+                 "target": Array [
+                   ".p-6.card-hover.group:nth-child(8)",
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
+         "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\">Design</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.card-hover.group:nth-child(8) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(1)",
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
+                 "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\">Branding</span>",
+                 "target": Array [
+                   ".p-6.card-hover.group:nth-child(8) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(2)",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\">",
+                 "target": Array [
+                   ".p-6.card-hover.group:nth-child(8)",
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
+         "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\">Branding</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.card-hover.group:nth-child(8) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(2)",
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
+                   ".p-6.card-hover.group:nth-child(8) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(3)",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\">",
+                 "target": Array [
+                   ".p-6.card-hover.group:nth-child(8)",
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
+           ".p-6.card-hover.group:nth-child(8) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(3)",
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
+                 "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\">UI/UX</span>",
+                 "target": Array [
+                   ".p-6.card-hover.group:nth-child(8) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(4)",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\">",
+                 "target": Array [
+                   ".p-6.card-hover.group:nth-child(8)",
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
+         "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\">UI/UX</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.card-hover.group:nth-child(8) > .flex-col.text-center.items-center > .flex-wrap.gap-2.justify-center > .px-2.py-1.text-xs:nth-child(4)",
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
      - heading "Our Team" [level=1] [ref=e31]
      - paragraph [ref=e32]: Meet the experts behind your growth. Our team combines decades of experience with cutting-edge AI expertise to deliver exceptional results.
    - generic [ref=e35]:
      - generic [ref=e37]:
        - generic [ref=e39]: AC
        - heading "Alex Chen" [level=3] [ref=e40]
        - paragraph [ref=e41]: Founder & CEO
        - paragraph [ref=e42]: 15+ years in digital marketing. Former Head of Growth at Fortune 500 companies. Passionate about leveraging AI to transform marketing strategies.
        - generic [ref=e43]:
          - generic [ref=e44]: Strategy
          - generic [ref=e45]: Growth
          - generic [ref=e46]: AI
          - generic [ref=e47]: Leadership
        - generic [ref=e48]:
          - link "Twitter" [ref=e49] [cursor=pointer]:
            - /url: https://twitter.com/alexchen
            - img [ref=e50]
          - link "LinkedIn" [ref=e52] [cursor=pointer]:
            - /url: https://linkedin.com/in/alexchen
            - img [ref=e53]
      - generic [ref=e56]:
        - generic [ref=e58]: SM
        - heading "Sarah Mitchell" [level=3] [ref=e59]
        - paragraph [ref=e60]: Head of SEO
        - paragraph [ref=e61]: SEO specialist with 10+ years experience. Helped 100+ brands achieve top rankings. Speaker at major marketing conferences.
        - generic [ref=e62]:
          - generic [ref=e63]: SEO
          - generic [ref=e64]: Content
          - generic [ref=e65]: Analytics
          - generic [ref=e66]: Technical SEO
        - link "LinkedIn" [ref=e68] [cursor=pointer]:
          - /url: https://linkedin.com/in/sarahmitchell
          - img [ref=e69]
      - generic [ref=e72]:
        - generic [ref=e74]: MJ
        - heading "Marcus Johnson" [level=3] [ref=e75]
        - paragraph [ref=e76]: Head of Paid Media
        - paragraph [ref=e77]: Managed $50M+ in ad spend. Expert in multi-channel campaign optimization. Google and Meta certified professional.
        - generic [ref=e78]:
          - generic [ref=e79]: PPC
          - generic [ref=e80]: Meta Ads
          - generic [ref=e81]: Google Ads
          - generic [ref=e82]: Programmatic
        - link "Twitter" [ref=e84] [cursor=pointer]:
          - /url: https://twitter.com/marcusj
          - img [ref=e85]
      - generic [ref=e88]:
        - generic [ref=e90]: ER
        - heading "Emily Rodriguez" [level=3] [ref=e91]
        - paragraph [ref=e92]: Head of Content
        - paragraph [ref=e93]: Content strategist and storyteller. Created 1000+ pieces of high-performing content. Former journalist with a passion for brand narratives.
        - generic [ref=e94]:
          - generic [ref=e95]: Content
          - generic [ref=e96]: Copywriting
          - generic [ref=e97]: Video
          - generic [ref=e98]: Storytelling
        - link "LinkedIn" [ref=e100] [cursor=pointer]:
          - /url: https://linkedin.com/in/emilyrodriguez
          - img [ref=e101]
      - generic [ref=e104]:
        - generic [ref=e106]: DK
        - heading "David Kim" [level=3] [ref=e107]
        - paragraph [ref=e108]: Head of Analytics
        - paragraph [ref=e109]: Data scientist with background in machine learning. Transforms complex data into actionable marketing insights.
        - generic [ref=e110]:
          - generic [ref=e111]: Analytics
          - generic [ref=e112]: Data Science
          - generic [ref=e113]: BI
          - generic [ref=e114]: Python
        - link "LinkedIn" [ref=e116] [cursor=pointer]:
          - /url: https://linkedin.com/in/davidkim
          - img [ref=e117]
      - generic [ref=e120]:
        - generic [ref=e122]: LT
        - heading "Lisa Thompson" [level=3] [ref=e123]
        - paragraph [ref=e124]: Head of Email Marketing
        - paragraph [ref=e125]: Email automation expert. Built campaigns generating $10M+ in revenue. Specialist in lifecycle marketing and segmentation.
        - generic [ref=e126]:
          - generic [ref=e127]: Email
          - generic [ref=e128]: Automation
          - generic [ref=e129]: CRM
          - generic [ref=e130]: Lifecycle
        - link "Twitter" [ref=e132] [cursor=pointer]:
          - /url: https://twitter.com/lisathompson
          - img [ref=e133]
      - generic [ref=e136]:
        - generic [ref=e138]: JW
        - heading "James Wilson" [level=3] [ref=e139]
        - paragraph [ref=e140]: Senior SEO Strategist
        - paragraph [ref=e141]: Technical SEO expert with 8+ years experience. Specializes in enterprise SEO and international markets.
        - generic [ref=e142]:
          - generic [ref=e143]: Technical SEO
          - generic [ref=e144]: Enterprise
          - generic [ref=e145]: International
        - link "LinkedIn" [ref=e147] [cursor=pointer]:
          - /url: https://linkedin.com/in/jameswilson
          - img [ref=e148]
      - generic [ref=e151]:
        - generic [ref=e153]: RG
        - heading "Rachel Green" [level=3] [ref=e154]
        - paragraph [ref=e155]: Creative Director
        - paragraph [ref=e156]: Award-winning creative professional. Leads visual identity and brand design projects for enterprise clients.
        - generic [ref=e157]:
          - generic [ref=e158]: Design
          - generic [ref=e159]: Branding
          - generic [ref=e160]: Video
          - generic [ref=e161]: UI/UX
        - link "LinkedIn" [ref=e163] [cursor=pointer]:
          - /url: https://linkedin.com/in/rachelgreen
          - img [ref=e164]
    - generic [ref=e170]:
      - heading "Join Our Team" [level=2] [ref=e171]
      - paragraph [ref=e172]: We're always looking for talented individuals who share our passion for data-driven marketing. Check out our open positions.
      - link "View Open Positions" [ref=e173] [cursor=pointer]:
        - /url: /careers
  - contentinfo [ref=e174]:
    - generic [ref=e175]:
      - generic [ref=e176]:
        - generic [ref=e177]:
          - link "Y Your Dedicated Marketer" [ref=e178] [cursor=pointer]:
            - /url: /
            - generic [ref=e180]: "Y"
            - generic [ref=e181]: Your Dedicated Marketer
          - paragraph [ref=e182]: AI-powered growth strategies for modern brands. Transform your digital presence with data-driven marketing.
          - generic [ref=e183]:
            - link "Twitter" [ref=e184] [cursor=pointer]:
              - /url: https://twitter.com/yourdedicatedmarketer
              - img [ref=e185]
            - link "LinkedIn" [ref=e187] [cursor=pointer]:
              - /url: https://linkedin.com/company/yourdedicatedmarketer
              - img [ref=e188]
            - link "Instagram" [ref=e190] [cursor=pointer]:
              - /url: https://instagram.com/yourdedicatedmarketer
              - img [ref=e191]
        - generic [ref=e193]:
          - heading "Services" [level=4] [ref=e194]
          - list [ref=e195]:
            - listitem [ref=e196]:
              - link "SEO" [ref=e197] [cursor=pointer]:
                - /url: /services/seo
            - listitem [ref=e198]:
              - link "Paid Media" [ref=e199] [cursor=pointer]:
                - /url: /services/paid-media
            - listitem [ref=e200]:
              - link "Content Marketing" [ref=e201] [cursor=pointer]:
                - /url: /services/content-marketing
            - listitem [ref=e202]:
              - link "Email Automation" [ref=e203] [cursor=pointer]:
                - /url: /services/email-automation
            - listitem [ref=e204]:
              - link "Analytics & Reporting" [ref=e205] [cursor=pointer]:
                - /url: /services/analytics-and-reporting
        - generic [ref=e206]:
          - heading "Company" [level=4] [ref=e207]
          - list [ref=e208]:
            - listitem [ref=e209]:
              - link "About Us" [ref=e210] [cursor=pointer]:
                - /url: /about
            - listitem [ref=e211]:
              - link "Our Team" [ref=e212] [cursor=pointer]:
                - /url: /team
            - listitem [ref=e213]:
              - link "Case Studies" [ref=e214] [cursor=pointer]:
                - /url: /work
            - listitem [ref=e215]:
              - link "Blog" [ref=e216] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e217]:
              - link "Careers" [ref=e218] [cursor=pointer]:
                - /url: /careers
        - generic [ref=e219]:
          - heading "Resources" [level=4] [ref=e220]
          - list [ref=e221]:
            - listitem [ref=e222]:
              - link "Pricing" [ref=e223] [cursor=pointer]:
                - /url: /pricing
            - listitem [ref=e224]:
              - link "FAQ" [ref=e225] [cursor=pointer]:
                - /url: /faq
            - listitem [ref=e226]:
              - link "Industries" [ref=e227] [cursor=pointer]:
                - /url: /industries/saas
            - listitem [ref=e228]:
              - link "Contact" [ref=e229] [cursor=pointer]:
                - /url: /contact
        - generic [ref=e230]:
          - heading "Legal" [level=4] [ref=e231]
          - list [ref=e232]:
            - listitem [ref=e233]:
              - link "Privacy Policy" [ref=e234] [cursor=pointer]:
                - /url: /privacy-policy
            - listitem [ref=e235]:
              - link "Terms of Service" [ref=e236] [cursor=pointer]:
                - /url: /terms-of-service
      - generic [ref=e237]:
        - paragraph [ref=e238]: © 2026 Your Dedicated Marketer. All rights reserved.
        - paragraph [ref=e239]: Built with Astro & Tailwind CSS
  - generic [ref=e242]:
    - button "Menu" [ref=e243]:
      - img [ref=e245]
      - generic: Menu
    - button "Inspect" [ref=e249]:
      - img [ref=e251]
      - generic: Inspect
    - button "Audit" [ref=e253]:
      - img [ref=e255]
      - generic: Audit
    - button "Settings" [ref=e258]:
      - img [ref=e260]
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
  55 |     expect(accessibilityScanResults.violations).toEqual([]);
  56 |   });
  57 | 
  58 |   test('team page should not have automatically detectable WCAG A or AA violations', async ({
  59 |     page,
  60 |     makeAxeBuilder,
  61 |   }) => {
  62 |     await page.goto('/team');
  63 |     const accessibilityScanResults = await makeAxeBuilder().analyze();
> 64 |     expect(accessibilityScanResults.violations).toEqual([]);
     |                                                 ^ Error: expect(received).toEqual(expected) // deep equality
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