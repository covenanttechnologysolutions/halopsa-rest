// @ts-check

import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  eslintPluginPrettierRecommended,
  {
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
    files: ['src/**/*.ts'],
  },
)

// module.exports = {
//   'parser': '@typescript-eslint/parser',
//   'parserOptions': {
//     'ecmaVersion': 'latest',
//   },
//   'plugins': ['@typescript-eslint', 'prettier'],
//   'env': {
//     'node': true,
//     'mocha': true,
//     'es6': true,
//   },
//   'extends': [
//     'plugin:@typescript-eslint/eslint-recommended',
//     'plugin:@typescript-eslint/recommended',
//     'plugin:prettier/recommended',
//   ],
//   'rules': {},
// }
