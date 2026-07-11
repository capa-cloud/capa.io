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

## Validation

- Hugo 0.145.0 official container build: 300 pages and 408 output files generated successfully.
- A second production build completed without Hugo/Docsy configuration warnings.
- `gitleaks dir . --no-banner --redact`: passed.

## Follow-Up

- Keep `.env.example`, GitHub Actions, and local/container validation on the same Hugo version.
