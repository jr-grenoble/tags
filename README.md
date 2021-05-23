[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
[![repository: github](https://img.shields.io/badge/repo-tags-black.svg)](https://github.com/jr-grenoble/tags)
[![builder: Gulp](https://img.shields.io/badge/builder-gulp-ff2000.svg)](https://gulpjs.com)
[![code style: prettier](https://img.shields.io/badge/format-prettier-ffff00.svg)](https://github.com/prettier/prettier)
[![code style: Google](https://img.shields.io/badge/code_style-google-60ff40.svg)](https://github.com/google/gts)
[![language: TypeScript](https://img.shields.io/badge/%3C%2F%3E-typescript-0080ff.svg)](http://www.typescriptlang.org/)
[![documentation: typedoc](https://img.shields.io/badge/doc_gen-typedoc-8000ff.svg)](https://typedoc.org)
[![spelling: cspell](https://img.shields.io/badge/spelling-cspell-40ff50.svg)](https://github.com/streetsidesoftware/vscode-spell-checker/)

Note: this file is hardlinked into the root project directory.

# Tags

**Tags** is a self contained [Typescript](https://www.typescriptlang.org/) library that provides chainable, parametrizable tags for [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) as well as other text processing utilities.

This is an opinionated library. It provides reasonable options only.

# Usage

The _Tags_ library consists of a single typescript module conforming to modern module conventions. You can use the library via `import` statements such as:

```typescript
import * as tags from "./libs/tags"; // tags are usable via their names qualified with "tags"
console.log(tags.json`array ${[1, 2, 3]}`);

import type { printable } from "./libs/tags"; // imported types leave no trace in the executable code
import { json as log } from "./libs/tags"; // rename imported tag
console.log(
  log`object ${{ a: 1, b: 2, c: { c1: 3.1, c2: 3.2 } } as printable}`
);
```

# Project structure

The project uses git. The repository is [jr-grenoble/clasp](https://github.com/jr-grenoble/tags). Access from my Mac requires a personal access token. The project structure is pretty standard.

    .
    ├── assets                  # Static images, data…
    ├── dist                    # Source files
    ├── docs                    # Documentation files
    ├── libs                    # Libraries
    ├── tests                   # Automated tests
    ├── tools                   # Tools | URLs for tools
    ├── LICENSE.md              # License & copyright
    └── README.md               # Hard link to docs

The project uses [typedoc](https://typedoc.org/) for documentation and [gulp](https://gulpjs.com/) for automation.

# Naming conventions

## Pseudo dashes

This library uses pseudo-dashes to separate words in identifiers. Because the dash is not allowed in typescript identifiers, we use the half width Hangul letter eu `ｰ`, unicode `\uffda` instead of a real dash. For instance `chainableｰtag` is a valid identifier. The spell checker is thus configured to ignore corresponding patterns `/(\w+ｰ)+\w+/gim`.

## Types

As types and interfaces have their own scopes, we often use variables named after their type. We will thus not hesitate to write:

```typescript
const number: number = 3;
```

This forces the coder to pay attention.

We **do not** capitalize types nor class names, there's no point doing so.

## Arrays and collections are plural, functions are verbs

To help spot arrays and collections, we give them plural identifiers, e.g.

```typescript
const numberingｰoptions = {
  startｰat: 1,
  padｰleft: 0,
};

const textｰlines = input.split("\n");
```
