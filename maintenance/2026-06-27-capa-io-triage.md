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
- Replaced the unmaintained Hugo-on-Alpine image with the version-pinned official Hugo image and documented the working container mount path.
- Added a local Hugo wrapper so validation falls back to a read-only container when Hugo is not installed.
- Made scroll-reveal content visible without JavaScript or `IntersectionObserver` and respected reduced-motion preferences.
- Repaired stale project, documentation, and community links.
- Removed generated `docs/` artifacts from source control and made CI clean the publish directory before every deployment.

## Validation

- Hugo 0.145.0 official container build: 300 pages generated successfully.
- Six Node regression tests, actionlint, gitleaks, and responsive browser QA passed.
- GitHub Pages published 387 current files with zero references to the retired Pages URL.
- The production custom domain returned HTTP 200 with no browser console errors.

## Follow-Up

- Keep `.env.example`, GitHub Actions, and local/container validation on the same Hugo version.
