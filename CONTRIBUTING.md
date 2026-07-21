# Contributing to eleventy-plus-vite

Thanks for your interest in this starter project. A few guidelines to keep contributions smooth.

## What this project is

`eleventy-plus-vite` is an **opinionated Eleventy + Vite starter template** maintained primarily for my own use and shared publicly. Issues and pull requests are welcome, but please understand that:

- The project is small and the cadence is "when I have time."
- Major architectural changes are unlikely to be accepted — this is a starter, not a framework.
- I will generally not add features that the average user of the starter would not want. Keep changes minimal and broadly useful.

## Reporting issues

Before opening an issue:

1. **Search existing issues** to avoid duplicates.
2. **Use a recent commit of `main`.** If your bug is reproducible on an older commit only, mention that explicitly.
3. **For security vulnerabilities**, do **not** open a public issue — follow the process in [`SECURITY.md`](./SECURITY.md).

When filing an issue, please include:

- Node.js version (the project pins via `.nvmrc`)
- Operating system
- Steps to reproduce (ideally with a minimal example repo or a diff against this starter)
- Expected vs. actual behavior
- Relevant logs or screenshots

## Submitting pull requests

1. **Open an issue first** for non-trivial changes so we can agree on direction before you invest time.
2. Fork the repository and create a feature branch off `main`.
3. Match the existing code style:
   - Tabs for indentation (see `.editorconfig`).
   - No semicolons, single quotes, no trailing commas (see `.prettierrc`).
   - `npm run build` should pass locally before you push.
4. Keep commits focused. Use the [Conventional Commits](https://www.conventionalcommits.org/) style — e.g. `feat:`, `fix:`, `docs:`, `chore:`, `deps:`.
5. If your change touches dependencies, run `npm install` and commit `package.json` and `package-lock.json` together.
6. Update the README if you change user-facing behavior.

## Project structure

- `src/` — Eleventy input (templates, includes, layouts, data, assets)
- `public/` — files copied verbatim to the site root
- `utils/` — Eleventy config helpers (filters, shortcodes, transforms)
- `.eleventy.js` — Eleventy config (plugins, Vite middleware, Markdown)
- `postcss.config.js` — PostCSS pipeline (Autoprefixer, cssnano, nesting)
- `netlify.toml` — Netlify build settings

## Local development

```sh
nvm use            # honors .nvmrc
npm install
npm start          # http://localhost:8080 with live reload
```

## Code of conduct

Be kind. Assume good faith. Disagree on ideas, not on people. This is a personal project, and a friendly tone makes the maintainer's life easier. 💙
