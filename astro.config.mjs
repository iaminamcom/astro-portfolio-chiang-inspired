import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://github.com/minamme',
  base: '/astro-portfolio-chiang-inspired',
  integrations: [tailwind()]
});