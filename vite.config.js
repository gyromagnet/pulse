// vite.config.js
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  base: '/pulse/',
  build: {
    outDir: 'docs',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@py': path.resolve(__dirname, './src/py'),
      '@public': path.resolve(__dirname, './public'),
    },
  },
  dedupe: ['@codemirror/state', '@codemirror/view'],
});
