# Security Policy

## About this project

`eleventy-plus-vite` is an **open-source starter template** for the Eleventy static site generator. It does not ship a runtime server, an API, or a production application: the published artifact is a static `_site/` directory that you host on a CDN (e.g. Netlify, Cloudflare Pages, GitHub Pages).

The security surface of this repository is therefore limited to:

- The build-time Node.js dependencies listed in `package.json`.
- The generated static output, which mirrors whatever you add on top of this
  starter (templates, scripts, third-party assets).

## Supported Versions

This project follows a loose rolling-release model. Only the latest commit on the `main` branch receives security updates.

| Version / Branch | Supported           |
| ---------------- | ------------------- |
| `main` (latest)  | :white_check_mark:  |
| Older commits    | :x:                 |

If you have forked an older snapshot, please rebase onto `main` or apply patches manually.

## Reporting a Vulnerability

If you discover a security issue in this starter template or in one of its runtime dependencies, **please do not open a public GitHub issue.**

Use one of the following private channels instead:

1. **GitHub Security Advisories (preferred)**
   Open a private advisory at <https://github.com/matthiasott/eleventy-plus-vite/security/advisories/new>. This keeps the report private until a fix is published.

2. **Email**
   Contact the maintainer at the address listed on <https://matthiasott.com> if GitHub private reporting is unavailable.

Please include:

- A clear description of the issue and its potential impact.
- Steps to reproduce, ideally with a minimal example repository.
- The version / commit hash affected.
- Any known mitigations or workarounds.

## Response Process

- **Acknowledgement** within 7 days.
- **Triage and impact assessment** within 14 days.
- **Coordinated disclosure**: a fix and a public advisory are released together once a patch is available, or a timeline is agreed with the reporter.

## Dependency Updates

This project depends on a number of third-party packages (Eleventy, Vite, PostCSS, ESLint, etc.). Vulnerabilities in those packages should be reported upstream to the respective maintainers. Pull requests that bump a dependency to a patched version are welcome.

## Scope

In scope:

- Vulnerabilities introduced by the contents of this repository (`.eleventy.js`, build configuration, included templates).
- Vulnerabilities in the dependency versions pinned in `package.json` that block a recommended upgrade path.

Out of scope:

- Vulnerabilities in user-added code or content built on top of this starter.
- Issues in end-user deployments (hosting configuration, CDN, DNS, etc.).
- Issues requiring physical access to a maintainer's machine.

Thank you for helping keep this project and its users safe.
