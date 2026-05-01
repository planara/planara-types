![build](https://github.com/planara/planara-types/actions/workflows/build.yml/badge.svg)
![deploy](https://github.com/planara/planara-types/actions/workflows/deploy.yml/badge.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

[![npm downloads](https://img.shields.io/npm/dm/@planara/types.svg)](https://www.npmjs.com/package/@planara/types)
[![npm total downloads](https://img.shields.io/npm/dt/@planara/types.svg)](https://www.npmjs.com/package/@planara/types)

## Planara Types

Пакет `@planara/types` содержит общие TypeScript-типы, используемые в экосистеме Planara.

Он предназначен для описания контрактов между пакетами `@planara/core`, `@planara/react`, `@planara/three` и пользовательским приложением. Пакет не содержит runtime-логики и не зависит от Three.js, React или других библиотек визуализации.

### Назначение

`@planara/types` используется для централизованного хранения общих типов, связанных с конфигурацией редактора, объектами сцены, инструментами, режимами работы и вспомогательными структурами данных.

Такой подход позволяет переиспользовать типы в разных пакетах без дублирования и без привязки базовых контрактов к конкретной реализации рендеринга или UI.

### Возможности

- Общие типы для конфигурации рендерера.

- Типы для описания цветов, векторов и базовых структур данных.

- Типы для инструментов и режимов работы редактора.

- Вспомогательные utility-типы, например `DeepPartial`.

- Отсутствие runtime-зависимостей.

- Независимость от `Three.js`, `React` и конкретной реализации UI.

### Установка

Установка в проект осуществляется командой:

```bash
npm i @planara/types
```
