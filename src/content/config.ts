import { defineCollection, z } from 'astro:content';

const documental_manager = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string().optional(),
    tags: z.array(z.string()).default([]),
    cvFile: z.string().default('/cv/documental_manager.pdf'),
  }),
});

const odoo_dev = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    module: z.string().optional(),
    version: z.string().optional(),
    cvFile: z.string().default('/cv/odoo_dev.pdf'),
  }),
});

const researcher = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publication: z.string().optional(),
    cvFile: z.string().default('/cv/researcher.pdf'),
  }),
});

const teacher = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    institution: z.string().optional(),
    cvFile: z.string().default('/cv/teacher.pdf'),
  }),
});

export const collections = { documental_manager, odoo_dev, researcher, teacher };