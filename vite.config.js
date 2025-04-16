// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
  },
  resolve: {
    alias: {
      '@': '/src',
    },
    dedupe: ['@codemirror/state', '@codemirror/view', '@codemirror/basic-setup'],
  },
});
