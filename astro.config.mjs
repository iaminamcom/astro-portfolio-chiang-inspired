import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://minamme.github.com/',
  base: '/astro-portfolio-chiang-inspired',
  integrations: [tailwind()]
});
