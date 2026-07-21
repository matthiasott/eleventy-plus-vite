'use strict'

/**
 * ESLint configuration for eleventy-plus-vite.
 *
 * Uses `eslint-config-standard` (legacy / .eslintrc format) because the
 * project is on ESLint 8 and the devDependency is pinned to a version
 * (^17.1.0) that only supports this format. 
 *
 * Prettier (.prettierrc) and EditorConfig (.editorconfig) are the source
 * of truth for formatting. A few style rules that would otherwise
 * conflict with them are overridden below.
 */
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2022: true
  },
  extends: ['standard'],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module'
  },
  rules: {
    indent: ['error', 'tab', { SwitchCase: 1 }],
    'no-tabs': 'off',
    semi: ['error', 'never'],
    quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: false }],
    'comma-dangle': ['error', 'never'],
    // Build scripts and Eleventy plugins use console
    'no-console': 'off',
    'n/no-unsupported-features/node-builtins': 'off'
  },
  ignorePatterns: [
    'node_modules/',
    '_site/',
    '.11ty-vite/',
    'public/',
    'package-lock.json'
  ],
  overrides: [
    {
      files: ['*.config.js', '.eleventy.js'],
      env: { node: true }
    }
  ]
}
