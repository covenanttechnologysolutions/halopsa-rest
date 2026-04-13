// @ts-check

import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'
import globals from 'globals'

export default tseslint.config(
  {
    ignores: [
      'dist/**',
      'docs/**',
      'generator/spec/**',
      'generator/temp/**',
      'node_modules/**',
      'scratch/**',
      'temp/**',
    ],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  eslintPluginPrettierRecommended,
  {
    rules: {
      curly: 'error',
    },
  },
  {
    files: ['src/**/*.ts'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  {
    files: ['test/**/*.{js,mjs}'],
    languageOptions: {
      sourceType: 'module',
      globals: { ...globals.node, ...globals.mocha },
    },
  },
  {
    files: ['generator/**/*.js'],
    languageOptions: {
      sourceType: 'commonjs',
      globals: { ...globals.node },
    },
    rules: {
      // CJS build scripts use require() by design.
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
)
