# Capa.io Makefile
# Simplified build commands for Hugo documentation site

.PHONY: dev build check clean deploy help submodule

# Default target
.DEFAULT_GOAL := help

# Initialize git submodules (required for Docsy theme)
submodule:
	git submodule update --init --recursive

# Development server with drafts
dev:
	./scripts/hugo.sh server -D

# Development server binding to all interfaces
dev-all:
	./scripts/hugo.sh server -D --bind 0.0.0.0

# Production build
build:
	HUGO_ENV="production" ./scripts/hugo.sh --gc --minify --cleanDestinationDir

# Validate all pages without changing generated site files
check:
	node --test scripts/*.test.mjs
	HUGO_ENV="production" HUGO_READ_ONLY=1 ./scripts/hugo.sh --gc --minify --renderToMemory --noBuildLock

# Clean build artifacts
clean:
	rm -rf docs/
	rm -rf public/
	rm -rf resources/

# Deploy to GitHub Pages (builds and commits docs folder)
deploy: build
	git add docs/
	git commit -m "Update documentation - $(shell date +%Y-%m-%d-%H:%M:%S)"
	git push origin master

# Check for broken links
link-check:
	hugo server &
	sleep 3
	npx linkinator http://localhost:1313 --recurse --timeout 10000 || true
	pkill -f "hugo server"

# Show help
help:
	@echo "Capa.io Documentation - Available Commands:"
	@echo ""
	@echo "  make submodule  - Initialize git submodules (Docsy theme)"
	@echo "  make dev        - Run development server with drafts"
	@echo "  make dev-all    - Run dev server binding to all interfaces"
	@echo "  make build      - Build production site (outputs to docs/)"
	@echo "  make check      - Validate the production site without writing output"
	@echo "  make clean      - Remove build artifacts"
	@echo "  make deploy     - Build and deploy to GitHub Pages"
	@echo "  make link-check - Check for broken links"
	@echo "  make help       - Show this help message"
