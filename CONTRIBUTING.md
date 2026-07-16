# Contributing to Capa Documentation

Thank you for improving the Capa website and documentation. Contributions are reviewed through GitHub pull requests in [capa-cloud/capa.io](https://github.com/capa-cloud/capa.io).

## Set up the site

```bash
git clone --recurse-submodules https://github.com/capa-cloud/capa.io.git
cd capa.io
npm ci
npm --prefix themes/docsy install
make dev
```

Hugo Extended `0.145.0` is preferred. If it is not installed, `scripts/hugo.sh` uses the pinned Docker image.

## Make a documentation change

1. Create a branch from `master`.
2. Edit the appropriate file under `content/zh/` or `content/en/`.
3. Add the corresponding translation when the same workflow is available in both languages.
4. Put unfinished pages behind `draft: true`; never publish Docsy template content.
5. Use repository-relative links for files in this repository and canonical HTTPS links for external resources.
6. Run `make check` before opening a pull request.

For website code or build changes, also run:

```bash
npm test
make build
```

## Pull request checklist

- The page explains what the reader can accomplish and includes prerequisites where needed.
- Commands and dependency versions match the source repositories.
- All links and images resolve.
- Chinese and English navigation remain usable.
- Examples contain no credentials, private endpoints, customer data, or personal identifiers.
- Generated `docs/`, `public/`, and `resources/` files are not committed.

## Reporting problems

Use [GitHub Issues](https://github.com/capa-cloud/capa.io/issues) for broken pages, incorrect examples, translation gaps, and build failures. Security-sensitive reports should not include secrets or exploit data in a public issue.

## License

By contributing, you agree that your contribution is licensed under the repository's [Apache License 2.0](LICENSE).
