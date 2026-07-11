# Capa.io Triage - 2026-06-27

## Repository

- GitHub: `capa-cloud/capa.io`
- Production URL: `https://capa.rxcloud.group` (HTTP 200).
- GitHub Pages project URL: `https://capa-cloud.github.io/capa.io/` redirects to the production custom domain.
- `https://capa.io` is a third-party parked/for-sale domain and is not a Capa project deployment; the organization Pages root is not used.
- Category: Hugo/Docsy documentation site

## Actions Taken

- Added npm aliases for Makefile-backed dev, build, lint, and test flows.
- Added `.env.example` for Hugo and public site metadata.
- Corrected npm repository, issue, and homepage metadata.
- Migrated deprecated Docsy settings, removed the fake Universal Analytics ID, and removed a duplicate blog menu declaration.
- Scoped gitleaks away from the pinned Docsy submodule, whose upstream search documentation contains example keys.
- Updated checkout, Node setup, Hugo, and Pages actions to their current Node 24-based major versions; the build runtime now uses Node 22 to satisfy Docsy's engine requirement.

## Validation

- Hugo 0.145.0 official container build: 300 pages and 408 output files generated successfully.
- A second production build completed without Hugo/Docsy configuration warnings.
- `gitleaks dir . --no-banner --redact`: passed.
- GitHub Pages workflow: passed on the exact dependency-fix commit after the action runtime upgrade.

## Follow-Up

- Keep `.env.example`, GitHub Actions, and local/container validation on the same Hugo version.
