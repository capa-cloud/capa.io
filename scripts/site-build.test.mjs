import assert from 'node:assert/strict';
import { execFile } from 'node:child_process';
import { chmod, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { promisify } from 'node:util';
import test from 'node:test';

const execFileAsync = promisify(execFile);
const makefile = await readFile(new URL('../Makefile', import.meta.url), 'utf8');
const workflow = await readFile(new URL('../.github/workflows/deploy.yml', import.meta.url), 'utf8');
const gitignore = await readFile(new URL('../.gitignore', import.meta.url), 'utf8');
const config = await readFile(new URL('../config.toml', import.meta.url), 'utf8');
const readme = await readFile(new URL('../README.md', import.meta.url), 'utf8');
const hugoScript = fileURLToPath(new URL('./hugo.sh', import.meta.url));

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

test('Docker fallback publishes Hugo server ports to the requested host', async (t) => {
  const binDir = await mkdtemp(join(tmpdir(), 'capa-hugo-test-'));
  t.after(() => rm(binDir, { recursive: true, force: true }));

  const fakeDocker = join(binDir, 'docker');
  await writeFile(fakeDocker, '#!/bin/sh\nprintf "%s\\n" "$@"\n');
  await chmod(fakeDocker, 0o755);

  const { stdout } = await execFileAsync(
    hugoScript,
    ['server', '--bind', 'localhost', '--port', '1414'],
    {
      env: {
        ...process.env,
        PATH: `${binDir}:/usr/bin:/bin`,
      },
    },
  );

  assert.match(stdout, /^--publish\n127\.0\.0\.1:1414:1414$/m);
  assert.match(stdout, /server\n--bind\nlocalhost\n--port\n1414\n--bind\n0\.0\.0\.0$/m);

  const allInterfaces = await execFileAsync(
    hugoScript,
    ['server', '--bind=0.0.0.0', '--port=1515'],
    {
      env: {
        ...process.env,
        PATH: `${binDir}:/usr/bin:/bin`,
      },
    },
  );

  assert.match(allInterfaces.stdout, /^--publish\n0\.0\.0\.0:1515:1515$/m);
});
