// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import vercel from '@astrojs/vercel';
import node from '@astrojs/node';

const isVercel = !!process.env.VERCEL;
const adapter = isVercel ? vercel() : node({
  mode: 'standalone'
});

// https://astro.build/config
export default defineConfig({
  // integrations: [react()]
  vite: {
    build: {
      minify: "esbuild"
    },
    plugins: [tailwindcss()]
  },

  integrations: [react(), mdx({
    shikiConfig: {
      themes: {
        dark: "dracula",
        light: "snazzy-light"
      }
    }
  })],
  adapter
});