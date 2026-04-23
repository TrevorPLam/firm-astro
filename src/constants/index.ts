/**
 * Shared constants for the application
 * Centralized values to reduce duplication and improve maintainability
 */

// Site information
export const SITE_NAME = "Your Dedicated Marketer" as const;

export const DEFAULT_DESCRIPTION =
  "Your Dedicated Marketer: AI-Powered Growth for the Modern Brand. Expert digital marketing services including SEO, paid media, content marketing, and analytics." as const;

// Footer navigation links
export const FOOTER_LINKS = {
  services: [
    { href: "/services/seo", label: "SEO" },
    { href: "/services/paid-media", label: "Paid Media" },
    { href: "/services/content-marketing", label: "Content Marketing" },
    { href: "/services/email-automation", label: "Email Automation" },
    { href: "/services/analytics-and-reporting", label: "Analytics & Reporting" },
  ] as const,
  company: [
    { href: "/about", label: "About Us" },
    { href: "/team", label: "Our Team" },
    { href: "/work", label: "Case Studies" },
    { href: "/blog", label: "Blog" },
    { href: "/careers", label: "Careers" },
  ] as const,
  resources: [
    { href: "/pricing", label: "Pricing" },
    { href: "/faq", label: "FAQ" },
    { href: "/industries/saas", label: "Industries" },
    { href: "/contact", label: "Contact" },
  ] as const,
  legal: [
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms-of-service", label: "Terms of Service" },
  ] as const,
} as const;

// TypeScript types for constants
export type FooterLink = {
  href: string;
  label: string;
};

export type FooterLinks = typeof FOOTER_LINKS;
