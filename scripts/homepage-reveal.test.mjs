import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const layoutPath = new URL('../layouts/partials/hooks/head-end.html', import.meta.url);
const homepagePaths = [
  new URL('../content/zh/_index.html', import.meta.url),
  new URL('../content/en/_index.html', import.meta.url),
];

const layout = await readFile(layoutPath, 'utf8');

test('reveal content stays visible until enhancement is initialized', () => {
  assert.doesNotMatch(layout, /\.capa-reveal\s*\{[^}]*opacity:\s*0/s);
  assert.match(layout, /\.capa-reveal\.is-pending\s*\{[^}]*opacity:\s*0/s);
  assert.match(layout, /!\('IntersectionObserver' in window\)/);
  assert.match(layout, /el\.classList\.add\('is-pending'\)/);
});

test('reveal motion respects the user preference', () => {
  assert.match(layout, /@media \(prefers-reduced-motion: reduce\)/);
  assert.match(layout, /\.capa-hero__eyebrow,/);
  assert.match(layout, /matchMedia\('\(prefers-reduced-motion: reduce\)'\)\.matches/);
});

for (const homepagePath of homepagePaths) {
  test(`${homepagePath.pathname} uses the shared reveal controller`, async () => {
    const homepage = await readFile(homepagePath, 'utf8');
    assert.doesNotMatch(homepage, /new IntersectionObserver/);
    assert.match(homepage, /Video sound toggle/);
  });
}
