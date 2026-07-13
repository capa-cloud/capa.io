import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const makefile = await readFile(new URL('../Makefile', import.meta.url), 'utf8');
const workflow = await readFile(new URL('../.github/workflows/deploy.yml', import.meta.url), 'utf8');
const gitignore = await readFile(new URL('../.gitignore', import.meta.url), 'utf8');

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
