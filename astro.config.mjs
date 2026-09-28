import { defineConfig } from 'astro/config';
import tailwind from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://perkgames.vercel.app',
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  vite: { plugins: [tailwind()] },
});