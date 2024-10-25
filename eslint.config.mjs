import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';
import globals from 'globals';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import parser from 'vue-eslint-parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

export default [
  ...compat.extends('eslint:recommended', 'plugin:vue/vue3-recommended', 'plugin:@typescript-eslint/recommended'),
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      },

      parser: parser,
      ecmaVersion: 2020,
      sourceType: 'module',

      parserOptions: {
        parser: '@typescript-eslint/parser'
      }
    },

    rules: {
      'vue/multi-word-component-names': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      'no-console': 'off',
      'vue/max-attributes-per-line': 'off',
      'no-undef': 'off',
      'vue/singleline-html-element-content-newline': 'off',
      'vue/attributes-order': 'off',
      'vue/no-unused-vars': 'warn',
      '@typescript-eslint/no-empty-object-type': 'off'
    }
  },
  {
    files: ['**/*.ts', '**/*.vue'],
    rules: {}
  },
  {
    ignores: ['.nuxt/*']
  }
];
