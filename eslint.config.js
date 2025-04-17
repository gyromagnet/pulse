import js from '@eslint/js';
import globals from 'globals';
import json from '@eslint/json';
import markdown from '@eslint/markdown';
import tseslint from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser';
import prettierPlugin from 'eslint-plugin-prettier';

import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    files: ['eslint.config.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: globals.node,
    },
  },
  {
    files: ['src/**/*.{js,ts,tsx,mjs,cjs}'],
    ignores: ['vite.config.js', 'docs/**/*'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: globals.browser,
      parser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: process.cwd(),
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      prettier: prettierPlugin,
    },
    rules: {
      ...js.configs.recommended.rules,

      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { varsIgnorePattern: '^_', argsIgnorePattern: '^_' },
      ],

      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: ['variableLike', 'function'],
          format: ['camelCase'],
          leadingUnderscore: 'allow',
        },
        {
          selector: 'class',
          format: ['PascalCase'],
        },
        {
          selector: 'variable',
          modifiers: ['const'],
          format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
          leadingUnderscore: 'allow',
          filter: {
            regex: 'Module$|^App$', // Only allow PascalCase for names ending in "Module" or exactly "App"
            match: true,
          },
        },
        {
          selector: 'variable',
          modifiers: ['const'],
          format: ['camelCase', 'UPPER_CASE'],
          leadingUnderscore: 'allow',
          filter: {
            regex: 'Module$|^App$',
            match: false, // For everything else, enforce camelCase or UPPER_CASE only
          },
        },
      ],

      'prettier/prettier': 'error',
    },
  },
  {
    files: ['**/*.json'],
    ignores: ['.stylelintrc.json', 'package-lock.json', 'docs/**/*'],
    plugins: { json },
    language: 'json/jsonc',
    rules: {
      ...json.configs.recommended.rules,
    },
  },
  {
    files: ['**/*.md'],
    ignores: ['docs/**/*'],
    plugins: { markdown },
    language: 'markdown/gfm',
    rules: {
      ...markdown.configs.recommended.rules,
    },
  },
]);
