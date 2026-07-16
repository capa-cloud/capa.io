import assert from 'node:assert/strict';
import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import test from 'node:test';

const contentRoot = new URL('../content/', import.meta.url);
const forbiddenPublishedContent = [
  /This is a placeholder/i,
  /Bed and Chair Metrics/i,
  /Porridge Assessment/i,
  /Ponycopters/i,
  /Another Task/i,
  /Vape migas chillwave/i,
];

async function contentFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(entries.map(async (entry) => {
    const child = new URL(`${entry.name}${entry.isDirectory() ? '/' : ''}`, directory);
    if (entry.isDirectory()) return contentFiles(child);
    return /\.(md|html)$/.test(entry.name) ? [child] : [];
  }));
  return files.flat();
}

test('published pages contain no Docsy sample content', async () => {
  const violations = [];

  for (const file of await contentFiles(contentRoot)) {
    const source = await readFile(file, 'utf8');
    const normalizedSource = source.trimStart();
    const frontMatter = normalizedSource.startsWith('---') ? normalizedSource.split('---', 3)[1] : '';
    if (/^draft:\s*true\s*$/m.test(frontMatter)) continue;

    for (const pattern of forbiddenPublishedContent) {
      if (pattern.test(source)) {
        violations.push(`${path.relative(contentRoot.pathname, file.pathname)}: ${pattern}`);
      }
    }
  }

  assert.deepEqual(violations, []);
});

test('known moved source paths are not reintroduced', async () => {
  const sources = await Promise.all((await contentFiles(contentRoot)).map((file) => readFile(file, 'utf8')));
  const combined = sources.join('\n');

  assert.doesNotMatch(combined, /cloud-runtimes-jvm\/blob\/develop/);
  assert.doesNotMatch(combined, /capa\/spi\/config\/(RpcServiceOptions|CapaSpiOptionsLoader)\.java/);
  assert.doesNotMatch(combined, /sdk-spi-demo\/src\/main\/resources\/capa-component\.properties/);
  assert.doesNotMatch(combined, /\.\/docs\/capa-design\/capa-layer\.PNG/);
});
