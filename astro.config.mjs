import { defineConfig } from 'astro/config';

export default defineConfig({
  vite: {
    css: {
      lightningcss: {
        errorRecovery: true,
      },
    },
  },
});