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
+                 "html": "<div class=\"w-24 h-24 rounded-full bg-electric-500/20 flex items-center justify-center mb-4 group-hover:shadow-neon-sm transition-shadow overflow-hidden\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"21:6\">",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(1) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .w-24.h-24.rounded-full",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"17:46\">",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(1)",
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
+   Element has insufficient color contrast of 2.48 (foreground color: #3385ff, background color: #c8d9fb, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+         "html": "<span class=\"text-2xl font-display font-bold text-electric-400\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"26:75\"> AC </span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(1) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .w-24.h-24.rounded-full > .text-2xl.font-bold[data-astro-source-loc=\"26:75\"]",
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
+                 "html": "<div class=\"glass-card p-6 card-hover group\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"17:46\">",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(1)",
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
+         "html": "<h3 class=\"font-display text-lg font-semibold text-white mb-1\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"35:68\">Alex Chen</h3>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(1) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > h3",
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
+                 "html": "<div class=\"glass-card p-6 card-hover group\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"17:46\">",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(1)",
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
+         "html": "<p class=\"text-electric-400 text-sm mb-3\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"36:47\">Founder &amp; CEO</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(1) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .mb-3.text-electric-400[data-astro-source-loc=\"36:47\"]",
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
+                 "html": "<div class=\"glass-card p-6 card-hover group\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"17:46\">",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(1)",
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
+         "html": "<p class=\"text-gray-400 text-sm leading-relaxed mb-4\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"37:59\">",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(1) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .leading-relaxed[data-astro-source-loc=\"37:59\"]",
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
+                 "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"43:78\">Strategy</span>",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(1) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .flex-wrap.gap-2[data-astro-source-loc=\"41:63\"] > .px-2.py-1.text-xs:nth-child(1)",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"17:46\">",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(1)",
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
+   Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafafa, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"43:78\">Strategy</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(1) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .flex-wrap.gap-2[data-astro-source-loc=\"41:63\"] > .px-2.py-1.text-xs:nth-child(1)",
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
+                 "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"43:78\">Growth</span>",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(1) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .flex-wrap.gap-2[data-astro-source-loc=\"41:63\"] > .px-2.py-1.text-xs:nth-child(2)",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"17:46\">",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(1)",
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
+   Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafafa, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"43:78\">Growth</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(1) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .flex-wrap.gap-2[data-astro-source-loc=\"41:63\"] > .px-2.py-1.text-xs:nth-child(2)",
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
+                 "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"43:78\">AI</span>",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(1) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .flex-wrap.gap-2[data-astro-source-loc=\"41:63\"] > .px-2.py-1.text-xs:nth-child(3)",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"17:46\">",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(1)",
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
+   Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafafa, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"43:78\">AI</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(1) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .flex-wrap.gap-2[data-astro-source-loc=\"41:63\"] > .px-2.py-1.text-xs:nth-child(3)",
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
+                 "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"43:78\">Leadership</span>",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(1) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .flex-wrap.gap-2[data-astro-source-loc=\"41:63\"] > .px-2.py-1.text-xs:nth-child(4)",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"17:46\">",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(1)",
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
+   Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafafa, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"43:78\">Leadership</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(1) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .flex-wrap.gap-2[data-astro-source-loc=\"41:63\"] > .px-2.py-1.text-xs:nth-child(4)",
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
+                 "html": "<div class=\"w-24 h-24 rounded-full bg-electric-500/20 flex items-center justify-center mb-4 group-hover:shadow-neon-sm transition-shadow overflow-hidden\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"21:6\">",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(2) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .w-24.h-24.rounded-full",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"17:46\">",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(2)",
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
+   Element has insufficient color contrast of 2.48 (foreground color: #3385ff, background color: #c8d9fb, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+         "html": "<span class=\"text-2xl font-display font-bold text-electric-400\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"26:75\"> SM </span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(2) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .w-24.h-24.rounded-full > .text-2xl.font-bold[data-astro-source-loc=\"26:75\"]",
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
+                 "html": "<div class=\"glass-card p-6 card-hover group\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"17:46\">",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(2)",
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
+         "html": "<h3 class=\"font-display text-lg font-semibold text-white mb-1\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"35:68\">Sarah Mitchell</h3>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(2) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > h3",
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
+                 "html": "<div class=\"glass-card p-6 card-hover group\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"17:46\">",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(2)",
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
+         "html": "<p class=\"text-electric-400 text-sm mb-3\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"36:47\">Head of SEO</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(2) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .mb-3.text-electric-400[data-astro-source-loc=\"36:47\"]",
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
+                 "html": "<div class=\"glass-card p-6 card-hover group\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"17:46\">",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(2)",
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
+         "html": "<p class=\"text-gray-400 text-sm leading-relaxed mb-4\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"37:59\">SEO specialist with 10+ years experience. Helped 100+ brands achieve top rankings. Speaker at major marketing conferences.</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(2) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .leading-relaxed[data-astro-source-loc=\"37:59\"]",
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
+                 "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"43:78\">SEO</span>",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(2) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .flex-wrap.gap-2[data-astro-source-loc=\"41:63\"] > .px-2.py-1.text-xs:nth-child(1)",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"17:46\">",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(2)",
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
+   Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafafa, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"43:78\">SEO</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(2) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .flex-wrap.gap-2[data-astro-source-loc=\"41:63\"] > .px-2.py-1.text-xs:nth-child(1)",
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
+                 "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"43:78\">Content</span>",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(2) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .flex-wrap.gap-2[data-astro-source-loc=\"41:63\"] > .px-2.py-1.text-xs:nth-child(2)",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"17:46\">",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(2)",
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
+   Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafafa, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"43:78\">Content</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(2) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .flex-wrap.gap-2[data-astro-source-loc=\"41:63\"] > .px-2.py-1.text-xs:nth-child(2)",
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
+                 "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"43:78\">Analytics</span>",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(2) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .flex-wrap.gap-2[data-astro-source-loc=\"41:63\"] > .px-2.py-1.text-xs:nth-child(3)",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"17:46\">",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(2)",
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
+   Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafafa, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"43:78\">Analytics</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(2) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .flex-wrap.gap-2[data-astro-source-loc=\"41:63\"] > .px-2.py-1.text-xs:nth-child(3)",
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
+                 "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"43:78\">Technical SEO</span>",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(2) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .flex-wrap.gap-2[data-astro-source-loc=\"41:63\"] > .px-2.py-1.text-xs:nth-child(4)",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"17:46\">",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(2)",
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
+   Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafafa, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"43:78\">Technical SEO</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(2) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .flex-wrap.gap-2[data-astro-source-loc=\"41:63\"] > .px-2.py-1.text-xs:nth-child(4)",
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
+                 "html": "<div class=\"w-24 h-24 rounded-full bg-electric-500/20 flex items-center justify-center mb-4 group-hover:shadow-neon-sm transition-shadow overflow-hidden\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"21:6\">",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(3) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .w-24.h-24.rounded-full",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"17:46\">",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(3)",
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
+   Element has insufficient color contrast of 2.48 (foreground color: #3385ff, background color: #c8d9fb, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+         "html": "<span class=\"text-2xl font-display font-bold text-electric-400\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"26:75\"> MJ </span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(3) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .w-24.h-24.rounded-full > .text-2xl.font-bold[data-astro-source-loc=\"26:75\"]",
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
+                 "html": "<div class=\"glass-card p-6 card-hover group\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"17:46\">",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(3)",
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
+         "html": "<h3 class=\"font-display text-lg font-semibold text-white mb-1\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"35:68\">Marcus Johnson</h3>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(3) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > h3",
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
+                 "html": "<div class=\"glass-card p-6 card-hover group\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"17:46\">",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(3)",
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
+         "html": "<p class=\"text-electric-400 text-sm mb-3\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"36:47\">Head of Paid Media</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(3) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .mb-3.text-electric-400[data-astro-source-loc=\"36:47\"]",
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
+                 "html": "<div class=\"glass-card p-6 card-hover group\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"17:46\">",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(3)",
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
+         "html": "<p class=\"text-gray-400 text-sm leading-relaxed mb-4\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"37:59\">Managed $50M+ in ad spend. Expert in multi-channel campaign optimization. Google and Meta certified professional.</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(3) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .leading-relaxed[data-astro-source-loc=\"37:59\"]",
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
+                 "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"43:78\">PPC</span>",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(3) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .flex-wrap.gap-2[data-astro-source-loc=\"41:63\"] > .px-2.py-1.text-xs:nth-child(1)",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"17:46\">",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(3)",
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
+   Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafafa, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"43:78\">PPC</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(3) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .flex-wrap.gap-2[data-astro-source-loc=\"41:63\"] > .px-2.py-1.text-xs:nth-child(1)",
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
+                 "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"43:78\">Meta Ads</span>",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(3) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .flex-wrap.gap-2[data-astro-source-loc=\"41:63\"] > .px-2.py-1.text-xs:nth-child(2)",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"17:46\">",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(3)",
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
+   Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafafa, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"43:78\">Meta Ads</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(3) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .flex-wrap.gap-2[data-astro-source-loc=\"41:63\"] > .px-2.py-1.text-xs:nth-child(2)",
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
+                 "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"43:78\">Google Ads</span>",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(3) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .flex-wrap.gap-2[data-astro-source-loc=\"41:63\"] > .px-2.py-1.text-xs:nth-child(3)",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"17:46\">",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(3)",
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
+   Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafafa, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"43:78\">Google Ads</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(3) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .flex-wrap.gap-2[data-astro-source-loc=\"41:63\"] > .px-2.py-1.text-xs:nth-child(3)",
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
+                 "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"43:78\">Programmatic</span>",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(3) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .flex-wrap.gap-2[data-astro-source-loc=\"41:63\"] > .px-2.py-1.text-xs:nth-child(4)",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"17:46\">",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(3)",
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
+   Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafafa, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"43:78\">Programmatic</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(3) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .flex-wrap.gap-2[data-astro-source-loc=\"41:63\"] > .px-2.py-1.text-xs:nth-child(4)",
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
+                 "html": "<div class=\"w-24 h-24 rounded-full bg-electric-500/20 flex items-center justify-center mb-4 group-hover:shadow-neon-sm transition-shadow overflow-hidden\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"21:6\">",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(4) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .w-24.h-24.rounded-full",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"17:46\">",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(4)",
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
+   Element has insufficient color contrast of 2.48 (foreground color: #3385ff, background color: #c8d9fb, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+         "html": "<span class=\"text-2xl font-display font-bold text-electric-400\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"26:75\"> ER </span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(4) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .w-24.h-24.rounded-full > .text-2xl.font-bold[data-astro-source-loc=\"26:75\"]",
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
+                 "html": "<div class=\"glass-card p-6 card-hover group\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"17:46\">",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(4)",
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
+         "html": "<h3 class=\"font-display text-lg font-semibold text-white mb-1\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"35:68\">Emily Rodriguez</h3>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(4) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > h3",
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
+                 "html": "<div class=\"glass-card p-6 card-hover group\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"17:46\">",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(4)",
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
+         "html": "<p class=\"text-electric-400 text-sm mb-3\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"36:47\">Head of Content</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(4) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .mb-3.text-electric-400[data-astro-source-loc=\"36:47\"]",
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
+                 "html": "<div class=\"glass-card p-6 card-hover group\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"17:46\">",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(4)",
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
+         "html": "<p class=\"text-gray-400 text-sm leading-relaxed mb-4\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"37:59\">",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(4) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .leading-relaxed[data-astro-source-loc=\"37:59\"]",
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
+                 "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"43:78\">Content</span>",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(4) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .flex-wrap.gap-2[data-astro-source-loc=\"41:63\"] > .px-2.py-1.text-xs:nth-child(1)",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"17:46\">",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(4)",
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
+   Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafafa, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"43:78\">Content</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(4) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .flex-wrap.gap-2[data-astro-source-loc=\"41:63\"] > .px-2.py-1.text-xs:nth-child(1)",
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
+                 "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"43:78\">Copywriting</span>",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(4) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .flex-wrap.gap-2[data-astro-source-loc=\"41:63\"] > .px-2.py-1.text-xs:nth-child(2)",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"17:46\">",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(4)",
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
+   Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafafa, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"43:78\">Copywriting</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(4) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .flex-wrap.gap-2[data-astro-source-loc=\"41:63\"] > .px-2.py-1.text-xs:nth-child(2)",
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
+                 "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"43:78\">Video</span>",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(4) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .flex-wrap.gap-2[data-astro-source-loc=\"41:63\"] > .px-2.py-1.text-xs:nth-child(3)",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"17:46\">",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(4)",
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
+   Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafafa, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"43:78\">Video</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(4) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .flex-wrap.gap-2[data-astro-source-loc=\"41:63\"] > .px-2.py-1.text-xs:nth-child(3)",
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
+                 "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"43:78\">Storytelling</span>",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(4) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .flex-wrap.gap-2[data-astro-source-loc=\"41:63\"] > .px-2.py-1.text-xs:nth-child(4)",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"17:46\">",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(4)",
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
+   Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafafa, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"43:78\">Storytelling</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(4) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .flex-wrap.gap-2[data-astro-source-loc=\"41:63\"] > .px-2.py-1.text-xs:nth-child(4)",
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
+                 "html": "<div class=\"w-24 h-24 rounded-full bg-electric-500/20 flex items-center justify-center mb-4 group-hover:shadow-neon-sm transition-shadow overflow-hidden\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"21:6\">",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(5) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .w-24.h-24.rounded-full",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"17:46\">",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(5)",
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
+   Element has insufficient color contrast of 2.48 (foreground color: #3385ff, background color: #c8d9fb, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+         "html": "<span class=\"text-2xl font-display font-bold text-electric-400\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"26:75\"> DK </span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(5) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .w-24.h-24.rounded-full > .text-2xl.font-bold[data-astro-source-loc=\"26:75\"]",
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
+                 "html": "<div class=\"glass-card p-6 card-hover group\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"17:46\">",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(5)",
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
+         "html": "<h3 class=\"font-display text-lg font-semibold text-white mb-1\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"35:68\">David Kim</h3>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(5) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > h3",
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
+                 "html": "<div class=\"glass-card p-6 card-hover group\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"17:46\">",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(5)",
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
+         "html": "<p class=\"text-electric-400 text-sm mb-3\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"36:47\">Head of Analytics</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(5) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .mb-3.text-electric-400[data-astro-source-loc=\"36:47\"]",
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
+                 "html": "<div class=\"glass-card p-6 card-hover group\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"17:46\">",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(5)",
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
+         "html": "<p class=\"text-gray-400 text-sm leading-relaxed mb-4\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"37:59\">Data scientist with background in machine learning. Transforms complex data into actionable marketing insights.</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(5) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .leading-relaxed[data-astro-source-loc=\"37:59\"]",
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
+                 "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"43:78\">Analytics</span>",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(5) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .flex-wrap.gap-2[data-astro-source-loc=\"41:63\"] > .px-2.py-1.text-xs:nth-child(1)",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"17:46\">",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(5)",
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
+   Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafafa, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"43:78\">Analytics</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(5) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .flex-wrap.gap-2[data-astro-source-loc=\"41:63\"] > .px-2.py-1.text-xs:nth-child(1)",
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
+                 "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"43:78\">Data Science</span>",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(5) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .flex-wrap.gap-2[data-astro-source-loc=\"41:63\"] > .px-2.py-1.text-xs:nth-child(2)",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"17:46\">",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(5)",
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
+   Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafafa, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"43:78\">Data Science</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(5) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .flex-wrap.gap-2[data-astro-source-loc=\"41:63\"] > .px-2.py-1.text-xs:nth-child(2)",
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
+                 "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"43:78\">BI</span>",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(5) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .flex-wrap.gap-2[data-astro-source-loc=\"41:63\"] > .px-2.py-1.text-xs:nth-child(3)",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"17:46\">",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(5)",
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
+   Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafafa, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"43:78\">BI</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(5) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .flex-wrap.gap-2[data-astro-source-loc=\"41:63\"] > .px-2.py-1.text-xs:nth-child(3)",
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
+                 "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"43:78\">Python</span>",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(5) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .flex-wrap.gap-2[data-astro-source-loc=\"41:63\"] > .px-2.py-1.text-xs:nth-child(4)",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"17:46\">",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(5)",
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
+   Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafafa, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"43:78\">Python</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(5) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .flex-wrap.gap-2[data-astro-source-loc=\"41:63\"] > .px-2.py-1.text-xs:nth-child(4)",
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
+                 "html": "<div class=\"w-24 h-24 rounded-full bg-electric-500/20 flex items-center justify-center mb-4 group-hover:shadow-neon-sm transition-shadow overflow-hidden\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"21:6\">",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(6) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .w-24.h-24.rounded-full",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"17:46\">",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(6)",
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
+   Element has insufficient color contrast of 2.48 (foreground color: #3385ff, background color: #c8d9fb, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+         "html": "<span class=\"text-2xl font-display font-bold text-electric-400\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"26:75\"> LT </span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(6) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .w-24.h-24.rounded-full > .text-2xl.font-bold[data-astro-source-loc=\"26:75\"]",
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
+                 "html": "<div class=\"glass-card p-6 card-hover group\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"17:46\">",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(6)",
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
+         "html": "<h3 class=\"font-display text-lg font-semibold text-white mb-1\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"35:68\">Lisa Thompson</h3>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(6) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > h3",
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
+                 "html": "<div class=\"glass-card p-6 card-hover group\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"17:46\">",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(6)",
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
+         "html": "<p class=\"text-electric-400 text-sm mb-3\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"36:47\">Head of Email Marketing</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(6) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .mb-3.text-electric-400[data-astro-source-loc=\"36:47\"]",
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
+                 "html": "<div class=\"glass-card p-6 card-hover group\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"17:46\">",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(6)",
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
+         "html": "<p class=\"text-gray-400 text-sm leading-relaxed mb-4\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"37:59\">Email automation expert. Built campaigns generating $10M+ in revenue. Specialist in lifecycle marketing and segmentation.</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(6) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .leading-relaxed[data-astro-source-loc=\"37:59\"]",
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
+                 "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"43:78\">Email</span>",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(6) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .flex-wrap.gap-2[data-astro-source-loc=\"41:63\"] > .px-2.py-1.text-xs:nth-child(1)",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"17:46\">",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(6)",
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
+   Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafafa, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"43:78\">Email</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(6) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .flex-wrap.gap-2[data-astro-source-loc=\"41:63\"] > .px-2.py-1.text-xs:nth-child(1)",
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
+                 "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"43:78\">Automation</span>",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(6) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .flex-wrap.gap-2[data-astro-source-loc=\"41:63\"] > .px-2.py-1.text-xs:nth-child(2)",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"17:46\">",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(6)",
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
+   Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafafa, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"43:78\">Automation</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(6) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .flex-wrap.gap-2[data-astro-source-loc=\"41:63\"] > .px-2.py-1.text-xs:nth-child(2)",
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
+                 "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"43:78\">CRM</span>",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(6) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .flex-wrap.gap-2[data-astro-source-loc=\"41:63\"] > .px-2.py-1.text-xs:nth-child(3)",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"17:46\">",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(6)",
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
+   Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafafa, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"43:78\">CRM</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(6) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .flex-wrap.gap-2[data-astro-source-loc=\"41:63\"] > .px-2.py-1.text-xs:nth-child(3)",
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
+                 "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"43:78\">Lifecycle</span>",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(6) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .flex-wrap.gap-2[data-astro-source-loc=\"41:63\"] > .px-2.py-1.text-xs:nth-child(4)",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"17:46\">",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(6)",
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
+   Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafafa, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"43:78\">Lifecycle</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(6) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .flex-wrap.gap-2[data-astro-source-loc=\"41:63\"] > .px-2.py-1.text-xs:nth-child(4)",
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
+                 "html": "<div class=\"w-24 h-24 rounded-full bg-electric-500/20 flex items-center justify-center mb-4 group-hover:shadow-neon-sm transition-shadow overflow-hidden\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"21:6\">",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(7) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .w-24.h-24.rounded-full",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"17:46\">",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(7)",
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
+   Element has insufficient color contrast of 2.48 (foreground color: #3385ff, background color: #c8d9fb, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+         "html": "<span class=\"text-2xl font-display font-bold text-electric-400\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"26:75\"> JW </span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(7) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .w-24.h-24.rounded-full > .text-2xl.font-bold[data-astro-source-loc=\"26:75\"]",
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
+                 "html": "<div class=\"glass-card p-6 card-hover group\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"17:46\">",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(7)",
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
+         "html": "<h3 class=\"font-display text-lg font-semibold text-white mb-1\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"35:68\">James Wilson</h3>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(7) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > h3",
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
+                 "html": "<div class=\"glass-card p-6 card-hover group\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"17:46\">",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(7)",
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
+         "html": "<p class=\"text-electric-400 text-sm mb-3\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"36:47\">Senior SEO Strategist</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(7) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .mb-3.text-electric-400[data-astro-source-loc=\"36:47\"]",
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
+                 "html": "<div class=\"glass-card p-6 card-hover group\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"17:46\">",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(7)",
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
+         "html": "<p class=\"text-gray-400 text-sm leading-relaxed mb-4\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"37:59\">Technical SEO expert with 8+ years experience. Specializes in enterprise SEO and international markets.</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(7) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .leading-relaxed[data-astro-source-loc=\"37:59\"]",
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
+                 "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"43:78\">Technical SEO</span>",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(7) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .flex-wrap.gap-2[data-astro-source-loc=\"41:63\"] > .px-2.py-1.text-xs:nth-child(1)",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"17:46\">",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(7)",
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
+   Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafafa, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"43:78\">Technical SEO</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(7) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .flex-wrap.gap-2[data-astro-source-loc=\"41:63\"] > .px-2.py-1.text-xs:nth-child(1)",
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
+                 "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"43:78\">Enterprise</span>",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(7) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .flex-wrap.gap-2[data-astro-source-loc=\"41:63\"] > .px-2.py-1.text-xs:nth-child(2)",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"17:46\">",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(7)",
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
+   Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafafa, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"43:78\">Enterprise</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(7) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .flex-wrap.gap-2[data-astro-source-loc=\"41:63\"] > .px-2.py-1.text-xs:nth-child(2)",
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
+                 "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"43:78\">International</span>",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(7) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .flex-wrap.gap-2[data-astro-source-loc=\"41:63\"] > .px-2.py-1.text-xs:nth-child(3)",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"17:46\">",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(7)",
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
+   Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafafa, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"43:78\">International</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(7) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .flex-wrap.gap-2[data-astro-source-loc=\"41:63\"] > .px-2.py-1.text-xs:nth-child(3)",
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
+                 "html": "<div class=\"w-24 h-24 rounded-full bg-electric-500/20 flex items-center justify-center mb-4 group-hover:shadow-neon-sm transition-shadow overflow-hidden\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"21:6\">",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(8) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .w-24.h-24.rounded-full",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"17:46\">",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(8)",
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
+   Element has insufficient color contrast of 2.48 (foreground color: #3385ff, background color: #c8d9fb, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+         "html": "<span class=\"text-2xl font-display font-bold text-electric-400\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"26:75\"> RG </span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(8) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .w-24.h-24.rounded-full > .text-2xl.font-bold[data-astro-source-loc=\"26:75\"]",
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
+                 "html": "<div class=\"glass-card p-6 card-hover group\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"17:46\">",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(8)",
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
+         "html": "<h3 class=\"font-display text-lg font-semibold text-white mb-1\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"35:68\">Rachel Green</h3>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(8) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > h3",
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
+                 "html": "<div class=\"glass-card p-6 card-hover group\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"17:46\">",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(8)",
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
+         "html": "<p class=\"text-electric-400 text-sm mb-3\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"36:47\">Creative Director</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(8) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .mb-3.text-electric-400[data-astro-source-loc=\"36:47\"]",
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
+                 "html": "<div class=\"glass-card p-6 card-hover group\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"17:46\">",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(8)",
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
+         "html": "<p class=\"text-gray-400 text-sm leading-relaxed mb-4\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"37:59\">Award-winning creative professional. Leads visual identity and brand design projects for enterprise clients.</p>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(8) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .leading-relaxed[data-astro-source-loc=\"37:59\"]",
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
+                 "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"43:78\">Design</span>",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(8) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .flex-wrap.gap-2[data-astro-source-loc=\"41:63\"] > .px-2.py-1.text-xs:nth-child(1)",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"17:46\">",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(8)",
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
+   Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafafa, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"43:78\">Design</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(8) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .flex-wrap.gap-2[data-astro-source-loc=\"41:63\"] > .px-2.py-1.text-xs:nth-child(1)",
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
+                 "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"43:78\">Branding</span>",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(8) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .flex-wrap.gap-2[data-astro-source-loc=\"41:63\"] > .px-2.py-1.text-xs:nth-child(2)",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"17:46\">",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(8)",
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
+   Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafafa, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"43:78\">Branding</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(8) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .flex-wrap.gap-2[data-astro-source-loc=\"41:63\"] > .px-2.py-1.text-xs:nth-child(2)",
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
+                 "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"43:78\">Video</span>",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(8) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .flex-wrap.gap-2[data-astro-source-loc=\"41:63\"] > .px-2.py-1.text-xs:nth-child(3)",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"17:46\">",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(8)",
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
+   Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafafa, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"43:78\">Video</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(8) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .flex-wrap.gap-2[data-astro-source-loc=\"41:63\"] > .px-2.py-1.text-xs:nth-child(3)",
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
+                 "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"43:78\">UI/UX</span>",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(8) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .flex-wrap.gap-2[data-astro-source-loc=\"41:63\"] > .px-2.py-1.text-xs:nth-child(4)",
+                 ],
+               },
+               Object {
+                 "html": "<div class=\"glass-card p-6 card-hover group\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"17:46\">",
+                 "target": Array [
+                   ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(8)",
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
+   Element has insufficient color contrast of 2.43 (foreground color: #9ca3af, background color: #fafafa, font size: 9.0pt (12px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"px-2 py-1 text-xs bg-white/5 text-gray-400 rounded\" data-astro-source-file=\"C:/Users/trevo/Desktop/firm-astro/src/components/TeamCard.astro\" data-astro-source-loc=\"43:78\">UI/UX</span>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".p-6.card-hover[data-astro-source-loc=\"17:46\"]:nth-child(8) > .flex-col.text-center[data-astro-source-loc=\"18:55\"] > .flex-wrap.gap-2[data-astro-source-loc=\"41:63\"] > .px-2.py-1.text-xs:nth-child(4)",
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
      - generic [ref=e49]:
        - generic [ref=e51]: SM
        - heading "Sarah Mitchell" [level=3] [ref=e52]
        - paragraph [ref=e53]: Head of SEO
        - paragraph [ref=e54]: SEO specialist with 10+ years experience. Helped 100+ brands achieve top rankings. Speaker at major marketing conferences.
        - generic [ref=e55]:
          - generic [ref=e56]: SEO
          - generic [ref=e57]: Content
          - generic [ref=e58]: Analytics
          - generic [ref=e59]: Technical SEO
      - generic [ref=e61]:
        - generic [ref=e63]: MJ
        - heading "Marcus Johnson" [level=3] [ref=e64]
        - paragraph [ref=e65]: Head of Paid Media
        - paragraph [ref=e66]: Managed $50M+ in ad spend. Expert in multi-channel campaign optimization. Google and Meta certified professional.
        - generic [ref=e67]:
          - generic [ref=e68]: PPC
          - generic [ref=e69]: Meta Ads
          - generic [ref=e70]: Google Ads
          - generic [ref=e71]: Programmatic
      - generic [ref=e73]:
        - generic [ref=e75]: ER
        - heading "Emily Rodriguez" [level=3] [ref=e76]
        - paragraph [ref=e77]: Head of Content
        - paragraph [ref=e78]: Content strategist and storyteller. Created 1000+ pieces of high-performing content. Former journalist with a passion for brand narratives.
        - generic [ref=e79]:
          - generic [ref=e80]: Content
          - generic [ref=e81]: Copywriting
          - generic [ref=e82]: Video
          - generic [ref=e83]: Storytelling
      - generic [ref=e85]:
        - generic [ref=e87]: DK
        - heading "David Kim" [level=3] [ref=e88]
        - paragraph [ref=e89]: Head of Analytics
        - paragraph [ref=e90]: Data scientist with background in machine learning. Transforms complex data into actionable marketing insights.
        - generic [ref=e91]:
          - generic [ref=e92]: Analytics
          - generic [ref=e93]: Data Science
          - generic [ref=e94]: BI
          - generic [ref=e95]: Python
      - generic [ref=e97]:
        - generic [ref=e99]: LT
        - heading "Lisa Thompson" [level=3] [ref=e100]
        - paragraph [ref=e101]: Head of Email Marketing
        - paragraph [ref=e102]: Email automation expert. Built campaigns generating $10M+ in revenue. Specialist in lifecycle marketing and segmentation.
        - generic [ref=e103]:
          - generic [ref=e104]: Email
          - generic [ref=e105]: Automation
          - generic [ref=e106]: CRM
          - generic [ref=e107]: Lifecycle
      - generic [ref=e109]:
        - generic [ref=e111]: JW
        - heading "James Wilson" [level=3] [ref=e112]
        - paragraph [ref=e113]: Senior SEO Strategist
        - paragraph [ref=e114]: Technical SEO expert with 8+ years experience. Specializes in enterprise SEO and international markets.
        - generic [ref=e115]:
          - generic [ref=e116]: Technical SEO
          - generic [ref=e117]: Enterprise
          - generic [ref=e118]: International
      - generic [ref=e120]:
        - generic [ref=e122]: RG
        - heading "Rachel Green" [level=3] [ref=e123]
        - paragraph [ref=e124]: Creative Director
        - paragraph [ref=e125]: Award-winning creative professional. Leads visual identity and brand design projects for enterprise clients.
        - generic [ref=e126]:
          - generic [ref=e127]: Design
          - generic [ref=e128]: Branding
          - generic [ref=e129]: Video
          - generic [ref=e130]: UI/UX
    - generic [ref=e135]:
      - heading "Join Our Team" [level=2] [ref=e136]
      - paragraph [ref=e137]: We're always looking for talented individuals who share our passion for data-driven marketing. Check out our open positions.
      - link "View Open Positions" [ref=e138] [cursor=pointer]:
        - /url: /careers
  - contentinfo [ref=e139]:
    - generic [ref=e140]:
      - generic [ref=e141]:
        - generic [ref=e142]:
          - link "Y Your Dedicated Marketer" [ref=e143] [cursor=pointer]:
            - /url: /
            - generic [ref=e145]: "Y"
            - generic [ref=e146]: Your Dedicated Marketer
          - paragraph [ref=e147]: AI-powered growth strategies for modern brands. Transform your digital presence with data-driven marketing.
          - generic [ref=e148]:
            - link "Instagram" [ref=e149] [cursor=pointer]:
              - /url: https://instagram.com/YourDedicatedMarketer
              - img [ref=e150]
            - link "Threads" [ref=e152] [cursor=pointer]:
              - /url: https://threads.net/YourDedicatedMarketer
              - img [ref=e153]
            - link "YouTube" [ref=e155] [cursor=pointer]:
              - /url: https://youtube.com/YourDedicatedMarketer
              - img [ref=e156]
        - generic [ref=e158]:
          - heading "Services" [level=4] [ref=e159]
          - list [ref=e160]:
            - listitem [ref=e161]:
              - link "SEO" [ref=e162] [cursor=pointer]:
                - /url: /services/seo
            - listitem [ref=e163]:
              - link "Paid Media" [ref=e164] [cursor=pointer]:
                - /url: /services/paid-media
            - listitem [ref=e165]:
              - link "Content Marketing" [ref=e166] [cursor=pointer]:
                - /url: /services/content-marketing
            - listitem [ref=e167]:
              - link "Email Automation" [ref=e168] [cursor=pointer]:
                - /url: /services/email-automation
            - listitem [ref=e169]:
              - link "Analytics & Reporting" [ref=e170] [cursor=pointer]:
                - /url: /services/analytics-and-reporting
        - generic [ref=e171]:
          - heading "Company" [level=4] [ref=e172]
          - list [ref=e173]:
            - listitem [ref=e174]:
              - link "About Us" [ref=e175] [cursor=pointer]:
                - /url: /about
            - listitem [ref=e176]:
              - link "Our Team" [ref=e177] [cursor=pointer]:
                - /url: /team
            - listitem [ref=e178]:
              - link "Case Studies" [ref=e179] [cursor=pointer]:
                - /url: /work
            - listitem [ref=e180]:
              - link "Blog" [ref=e181] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e182]:
              - link "Careers" [ref=e183] [cursor=pointer]:
                - /url: /careers
        - generic [ref=e184]:
          - heading "Resources" [level=4] [ref=e185]
          - list [ref=e186]:
            - listitem [ref=e187]:
              - link "Pricing" [ref=e188] [cursor=pointer]:
                - /url: /pricing
            - listitem [ref=e189]:
              - link "FAQ" [ref=e190] [cursor=pointer]:
                - /url: /faq
            - listitem [ref=e191]:
              - link "Industries" [ref=e192] [cursor=pointer]:
                - /url: /industries/saas
            - listitem [ref=e193]:
              - link "Contact" [ref=e194] [cursor=pointer]:
                - /url: /contact
        - generic [ref=e195]:
          - heading "Legal" [level=4] [ref=e196]
          - list [ref=e197]:
            - listitem [ref=e198]:
              - link "Privacy Policy" [ref=e199] [cursor=pointer]:
                - /url: /privacy-policy
            - listitem [ref=e200]:
              - link "Terms of Service" [ref=e201] [cursor=pointer]:
                - /url: /terms-of-service
      - generic [ref=e202]:
        - paragraph [ref=e203]: © 2026 Your Dedicated Marketer. All rights reserved.
        - paragraph [ref=e204]: Built with Astro & Tailwind CSS
  - generic [ref=e207]:
    - button "Menu" [ref=e208]:
      - img [ref=e210]
      - generic: Menu
    - button "Inspect" [ref=e214]:
      - img [ref=e216]
      - generic: Inspect
    - button "Audit" [ref=e218]:
      - img [ref=e220]
      - generic: Audit
    - button "Settings" [ref=e223]:
      - img [ref=e225]
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
> 64 |     expect(accessibilityScanResults.violations).toEqual([]);
     |                                                 ^ Error: expect(received).toEqual(expected) // deep equality
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