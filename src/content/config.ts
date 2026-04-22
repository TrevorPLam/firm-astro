import { defineCollection, z } from 'astro:content';

// Blog collection schema
const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Your Dedicated Marketer'),
    authorImage: z.string().optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    tags: z.array(z.string()).default([]),
    category: z.string(),
    featured: z.boolean().default(false),
    readingTime: z.string().optional(),
  }),
});

// Case Studies collection schema
const caseStudiesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    client: z.string(),
    industry: z.string(),
    services: z.array(z.string()),
    challenge: z.string(),
    solution: z.string(),
    results: z.array(z.object({
      metric: z.string(),
      value: z.string(),
      improvement: z.string().optional(),
    })),
    testimonial: z.object({
      quote: z.string(),
      author: z.string(),
      role: z.string(),
    }).optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    featured: z.boolean().default(false),
    publishedAt: z.coerce.date(),
  }),
});

export const collections = {
  blog: blogCollection,
  caseStudies: caseStudiesCollection,
};
