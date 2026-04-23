# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: example.spec.ts >> homepage loads successfully
- Location: src\test\example.spec.ts:11:1

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: undefined
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
        - 'link "E-commerce Featured StyleHouse E-commerce: $2.4M Revenue Growth StyleHouse +$2.4M Revenue Growth +180% Email Revenue 4.2x ROAS Improvement View Case Study" [ref=e184] [cursor=pointer]':
          - /url: /work/ecommerce-revenue-growth
          - generic [ref=e185]:
            - generic [ref=e186]:
              - generic [ref=e187]: E-commerce
              - generic [ref=e188]: Featured
            - 'heading "StyleHouse E-commerce: $2.4M Revenue Growth" [level=3] [ref=e189]'
            - paragraph [ref=e190]: StyleHouse
            - generic [ref=e191]:
              - generic [ref=e192]:
                - generic [ref=e193]: +$2.4M
                - generic [ref=e194]: Revenue Growth
              - generic [ref=e195]:
                - generic [ref=e196]: +180%
                - generic [ref=e197]: Email Revenue
              - generic [ref=e198]:
                - generic [ref=e199]: 4.2x
                - generic [ref=e200]: ROAS Improvement
            - generic [ref=e201]:
              - generic [ref=e202]: View Case Study
              - img [ref=e203]
        - 'link "SaaS Featured TechFlow SaaS: 280% Increase in Trial Signups TechFlow +280% Trial Signups -45% CAC Reduction +156% Organic Traffic View Case Study" [ref=e205] [cursor=pointer]':
          - /url: /work/techflow-saas-growth
          - generic [ref=e206]:
            - generic [ref=e207]:
              - generic [ref=e208]: SaaS
              - generic [ref=e209]: Featured
            - 'heading "TechFlow SaaS: 280% Increase in Trial Signups" [level=3] [ref=e210]'
            - paragraph [ref=e211]: TechFlow
            - generic [ref=e212]:
              - generic [ref=e213]:
                - generic [ref=e214]: +280%
                - generic [ref=e215]: Trial Signups
              - generic [ref=e216]:
                - generic [ref=e217]: "-45%"
                - generic [ref=e218]: CAC Reduction
              - generic [ref=e219]:
                - generic [ref=e220]: +156%
                - generic [ref=e221]: Organic Traffic
            - generic [ref=e222]:
              - generic [ref=e223]: View Case Study
              - img [ref=e224]
    - generic [ref=e227]:
      - generic [ref=e228]:
        - heading "Our Process" [level=2] [ref=e229]
        - paragraph [ref=e230]: A proven methodology that delivers consistent, measurable results.
      - generic [ref=e231]:
        - generic [ref=e233]:
          - generic [ref=e235]: "01"
          - generic [ref=e236]:
            - heading "Discover" [level=3] [ref=e237]
            - paragraph [ref=e238]: We dive deep into your business, market, and competitors to uncover growth opportunities.
        - generic [ref=e241]:
          - generic [ref=e243]: "02"
          - generic [ref=e244]:
            - heading "Strategize" [level=3] [ref=e245]
            - paragraph [ref=e246]: Our team crafts a custom, data-driven marketing strategy aligned with your goals.
        - generic [ref=e249]:
          - generic [ref=e251]: "03"
          - generic [ref=e252]:
            - heading "Execute" [level=3] [ref=e253]
            - paragraph [ref=e254]: We implement campaigns with precision, using cutting-edge tools and AI optimization.
        - generic [ref=e257]:
          - generic [ref=e259]: "04"
          - generic [ref=e260]:
            - heading "Optimize" [level=3] [ref=e261]
            - paragraph [ref=e262]: Continuous testing and refinement to maximize performance and ROI.
    - generic [ref=e267]:
      - heading "Ready to Accelerate Growth?" [level=2] [ref=e268]
      - paragraph [ref=e269]: Join 150+ brands that have transformed their digital presence with our AI-powered marketing strategies.
      - generic [ref=e270]:
        - link "Get Started Today" [ref=e271] [cursor=pointer]:
          - /url: /contact
        - link "View Pricing" [ref=e272] [cursor=pointer]:
          - /url: /pricing
  - contentinfo [ref=e273]:
    - generic [ref=e274]:
      - generic [ref=e275]:
        - generic [ref=e276]:
          - link "Y Your Dedicated Marketer" [ref=e277] [cursor=pointer]:
            - /url: /
            - generic [ref=e279]: "Y"
            - generic [ref=e280]: Your Dedicated Marketer
          - paragraph [ref=e281]: AI-powered growth strategies for modern brands. Transform your digital presence with data-driven marketing.
          - generic [ref=e282]:
            - link "Twitter" [ref=e283] [cursor=pointer]:
              - /url: https://twitter.com/yourdedicatedmarketer
              - img [ref=e284]
            - link "LinkedIn" [ref=e286] [cursor=pointer]:
              - /url: https://linkedin.com/company/yourdedicatedmarketer
              - img [ref=e287]
            - link "Instagram" [ref=e289] [cursor=pointer]:
              - /url: https://instagram.com/yourdedicatedmarketer
              - img [ref=e290]
        - generic [ref=e292]:
          - heading "Services" [level=4] [ref=e293]
          - list [ref=e294]:
            - listitem [ref=e295]:
              - link "SEO" [ref=e296] [cursor=pointer]:
                - /url: /services/seo
            - listitem [ref=e297]:
              - link "Paid Media" [ref=e298] [cursor=pointer]:
                - /url: /services/paid-media
            - listitem [ref=e299]:
              - link "Content Marketing" [ref=e300] [cursor=pointer]:
                - /url: /services/content-marketing
            - listitem [ref=e301]:
              - link "Email Automation" [ref=e302] [cursor=pointer]:
                - /url: /services/email-automation
            - listitem [ref=e303]:
              - link "Analytics & Reporting" [ref=e304] [cursor=pointer]:
                - /url: /services/analytics-and-reporting
        - generic [ref=e305]:
          - heading "Company" [level=4] [ref=e306]
          - list [ref=e307]:
            - listitem [ref=e308]:
              - link "About Us" [ref=e309] [cursor=pointer]:
                - /url: /about
            - listitem [ref=e310]:
              - link "Our Team" [ref=e311] [cursor=pointer]:
                - /url: /team
            - listitem [ref=e312]:
              - link "Case Studies" [ref=e313] [cursor=pointer]:
                - /url: /work
            - listitem [ref=e314]:
              - link "Blog" [ref=e315] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e316]:
              - link "Careers" [ref=e317] [cursor=pointer]:
                - /url: /careers
        - generic [ref=e318]:
          - heading "Resources" [level=4] [ref=e319]
          - list [ref=e320]:
            - listitem [ref=e321]:
              - link "Pricing" [ref=e322] [cursor=pointer]:
                - /url: /pricing
            - listitem [ref=e323]:
              - link "FAQ" [ref=e324] [cursor=pointer]:
                - /url: /faq
            - listitem [ref=e325]:
              - link "Industries" [ref=e326] [cursor=pointer]:
                - /url: /industries/saas
            - listitem [ref=e327]:
              - link "Contact" [ref=e328] [cursor=pointer]:
                - /url: /contact
        - generic [ref=e329]:
          - heading "Legal" [level=4] [ref=e330]
          - list [ref=e331]:
            - listitem [ref=e332]:
              - link "Privacy Policy" [ref=e333] [cursor=pointer]:
                - /url: /privacy-policy
            - listitem [ref=e334]:
              - link "Terms of Service" [ref=e335] [cursor=pointer]:
                - /url: /terms-of-service
      - generic [ref=e336]:
        - paragraph [ref=e337]: © 2026 Your Dedicated Marketer. All rights reserved.
        - paragraph [ref=e338]: Built with Astro & Tailwind CSS
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test";
  2  | import { HomePage } from "./po/HomePage";
  3  | 
  4  | test("homepage has correct title", async ({ page }) => {
  5  |   const homePage = new HomePage(page);
  6  |   await homePage.goto();
  7  |   const title = await homePage.getTitle();
  8  |   expect(title).toMatch(/Your Dedicated Marketer/);
  9  | });
  10 | 
  11 | test("homepage loads successfully", async ({ page }) => {
  12 |   const homePage = new HomePage(page);
  13 |   const response = await homePage.goto();
> 14 |   expect(response?.status()).toBe(200);
     |                              ^ Error: expect(received).toBe(expected) // Object.is equality
  15 | });
  16 | 
```