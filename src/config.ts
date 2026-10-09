import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const documental = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/documental' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string().optional(),
    tags: z.array(z.string()).default([]),
    cvFile: z.string().default('/cv/documental.pdf'),
  }),
});

const odoo = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/odoo' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    module: z.string().optional(),
    version: z.string().optional(),
    cvFile: z.string().default('/cv/odoo.pdf'),
  }),
});

const investigador = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/investigador' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publication: z.string().optional(),
    cvFile: z.string().default('/cv/investigador.pdf'),
  }),
});

const profesor = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/profesor' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    institution: z.string().optional(),
    cvFile: z.string().default('/cv/profesor.pdf'),
  }),
});

export const collections = { documental, odoo, investigador, profesor };