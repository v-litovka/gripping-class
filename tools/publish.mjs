// Ручная сборка в папку (обычно не нужна: сайт выкладывает GitHub Actions, см. .github/workflows/pages.yml).
// Так собиралась копия для v-litovka/uroki (папка app/ → https://v-litovka.github.io/uroki/app/).
//
// Запуск: npm run publish
// Другая папка/адрес: PAGES_DIR=../somewhere BASE_HREF=/uroki/somewhere/ npm run publish
import { execSync } from 'node:child_process';
import { cpSync, rmSync, existsSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const base = process.env.BASE_HREF || '/uroki/app/';
const out = resolve(process.env.PAGES_DIR || '../app');

execSync(`npx ng build --base-href ${base}`, { stdio: 'inherit' });
const dist = resolve('dist/uroki-ng/browser');
if (!existsSync(dist)) throw new Error('нет сборки: ' + dist);
rmSync(out, { recursive: true, force: true });
cpSync(dist, out, { recursive: true });
writeFileSync(resolve(out, '.nojekyll'), '');
console.log('Готово:', out, '→', base);
