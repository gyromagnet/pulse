import js from '@eslint/js';
import globals from 'globals';
import json from '@eslint/json';
import markdown from '@eslint/markdown';
import css from '@eslint/css';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: globals.browser,
    },
    plugins: { js },
    rules: {
      ...js.configs.recommended.rules,
      'no-unused-vars': ['error', { varsIgnorePattern: '^_', argsIgnorePattern: '^_' }],
    },
  },
  {
    files: ['**/*.json'],
    plugins: { json },
    languageOptions: {
      parser: json.parsers['json-parser'],
    },
    rules: {
      ...json.configs.recommended.rules,
    },
  },
  {
    files: ['**/*.md'],
    plugins: { markdown },
    languageOptions: {
      parser: markdown.parsers['markdown-parser'],
    },
    rules: {
      ...markdown.configs.recommended.rules,
    },
  },
  {
    files: ['**/*.css'],
    plugins: { css },
    languageOptions: {
      parser: css.parsers['css-parser'],
    },
    rules: {
      ...css.configs.recommended.rules,
    },
  },
]);
