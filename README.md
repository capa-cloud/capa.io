# Capa Documentation

Source for the [Capa documentation site](https://capa.rxcloud.group/). The site is built with Hugo and Docsy, supports Simplified Chinese and English, and is published from the `master` branch through GitHub Pages.

This repository contains the website and documentation sources. Product code lives in [capa](https://github.com/capa-cloud/capa) and [capa-java](https://github.com/capa-cloud/capa-java).

## Quick start

```bash
git clone --recurse-submodules https://github.com/capa-cloud/capa.io.git
cd capa.io
npm ci
npm --prefix themes/docsy install
make dev
```

Open <http://localhost:1313/>. Draft content is included by `make dev` but excluded from production builds.

## Prerequisites

- Git, including submodule support
- Node.js 22 and npm
- Hugo Extended `0.145.0`, or Docker as the fallback used by `scripts/hugo.sh`

If the repository was cloned without submodules, run:

```bash
make submodule
```

## Commands

| Command | Purpose |
| --- | --- |
| `make dev` | Start the local server with drafts on `localhost:1313` |
| `make dev-all` | Start the local server on all interfaces |
| `make check` | Run source checks and an in-memory production build |
| `make build` | Build the production site into the ignored `docs/` directory |
| `make link-check` | Crawl the locally rendered site and fail on broken links |
| `make clean` | Remove generated Hugo output and resources |

Run the same source checks used by CI without invoking Hugo:

```bash
node --test scripts/*.test.mjs
```

## Content structure

```text
content/
├── zh/                 # Default Simplified Chinese site
│   ├── docs/
│   └── blog/
└── en/                 # English site
    ├── docs/
    └── blog/
```

Keep translated pages under matching paths where practical. Store page-specific images in a page bundle or under `content/images/`; do not commit generated `docs/`, `public/`, or `resources/` output.

Pages that are not ready for publication must use `draft: true` in their front matter. The validation suite rejects known Docsy sample text on published pages.

## Deployment

Pull requests run validation and a production build. A push to `master` also publishes the generated site to the `gh-pages` branch through [the Pages workflow](.github/workflows/deploy.yml). Do not commit generated site files or deploy them manually.

The custom domain is declared in [`static/CNAME`](static/CNAME).

## Contributing

Read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request. Documentation changes should include both language variants when the same user journey exists in Chinese and English.

Never place credentials, private endpoints, customer data, or local machine paths in examples. Use placeholders for all environment-specific values.

## License

Apache License 2.0. See [LICENSE](LICENSE).
