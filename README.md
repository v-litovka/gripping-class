# Игры (Angular)

Учебные игры для 3 и 4 класса: таблица умножения, задачи, домашка, русский, белорусский, английский.

- Адрес: **https://v-litovka.github.io/gripping-class/**
- Прежние адреса (копии): https://v-litovka.github.io/uroki/app/ и старый сайт без Angular https://v-litovka.github.io/uroki/

## Быстрый старт

```bash
npm install
npm start          # http://localhost:4200
```

Требуется Node.js 22.12+ (или 24+) и npm 11 (с npm 10.9 бывает ошибка `Cannot read properties of null (reading 'edgesOut')`).
Angular 21. Обновить до свежего: `npx ng update @angular/core @angular/cli`.

## Как устроено

- Слои: `core` (модели, прогресс, хранилище) → `shared/ui` + `engine` (проигрыватель упражнений) → `content` (паки: данные + режимы) → `features` (экраны). Подробно: `docs/architecture.md`.
- Плитки хаба — `src/app/core/catalog/entries.ts`. Все игры 3 и 4 класса — паки на Angular; старые офлайн-HTML лежат в `public/legacy/` (ссылка «Старая версия игры»).
- Переносить игры можно по одной: `docs/migration.md`.

Подробно для работы с Claude: **`CLAUDE.md`**. Описание игр: `docs/games.md`. Хвосты: `docs/open-items.md`.

## Выкладка

Пуш в `main` → GitHub Actions (`.github/workflows/pages.yml`): тесты, сборка с `--base-href /gripping-class/`, выкладка на Pages.
Один раз в настройках репозитория: **Settings → Pages → Source: GitHub Actions**.

```bash
git add -A && git commit -m "..." && git push
```
