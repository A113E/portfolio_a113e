// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  vite: {
    build: {
      cssMinify: 'esbuild', // Fuerza el uso de esbuild para minificar CSS
    },
  },
});