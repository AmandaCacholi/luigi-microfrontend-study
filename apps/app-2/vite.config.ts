/// <reference types='vitest' />
import { defineConfig } from 'vite';

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/apps/app-2',

  server: {
    port: 3002,
    host: 'localhost',
  },

  preview: {
    port: 4300,
    host: 'localhost',
  },

  build: {
    outDir: './dist',
  },
});
