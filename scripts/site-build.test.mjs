import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const makefile = await readFile(new URL('../Makefile', import.meta.url), 'utf8');
const workflow = await readFile(new URL('../.github/workflows/deploy.yml', import.meta.url), 'utf8');
const gitignore = await readFile(new URL('../.gitignore', import.meta.url), 'utf8');
const config = await readFile(new URL('../config.toml', import.meta.url), 'utf8');
const readme = await readFile(new URL('../README.md', import.meta.url), 'utf8');

test('production builds remove stale generated pages', () => {
  assert.match(makefile, /^build:\n\t.*--cleanDestinationDir/m);
  assert.match(workflow, /name: "Build"[\s\S]*?run: hugo .*--cleanDestinationDir/);
});

test('Pages deployment runs the project validation suite', () => {
  assert.match(workflow, /name: "Validate"\n\s+run: npm test/);
});

test('generated Pages output is not committed to the source branch', () => {
  assert.match(gitignore, /^\/docs\/$/m);
  assert.doesNotMatch(makefile, /git add docs/);
});

test('Docsy source links target the documentation repository and branch', () => {
  assert.match(config, /^github_repo = "https:\/\/github\.com\/capa-cloud\/capa\.io"$/m);
  assert.match(config, /^github_project_repo = "https:\/\/github\.com\/capa-cloud\/capa"$/m);
  assert.match(config, /^github_branch = "master"$/m);
});

test('site configuration contains no inherited Google privacy policy', () => {
  assert.doesNotMatch(config, /policies\.google\.com\/privacy/);
});

test('README documents the validated development workflow', () => {
  assert.match(readme, /git clone --recurse-submodules/);
  assert.match(readme, /make check/);
  assert.match(readme, /Hugo Extended `0\.145\.0`/);
});

test('link checking crawls the rendered site and propagates failures', () => {
  assert.match(makefile, /linkinator http:\/\/localhost:1313 --recurse/);
  assert.doesNotMatch(makefile, /linkinator[^\n]*\|\| true/);
});
