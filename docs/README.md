Tags / [Exports](modules.md)

---

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

For reference convenience, we list most of our dependencies here:

[![assertions: chai](https://img.shields.io/badge/bdd-chai-a40802.svg)](https://www.chaijs.com/api/bdd)
[![builder: Gulp](https://img.shields.io/badge/builder-gulp-ff2000.svg)](https://gulpjs.com)
[![documentation: typedoc](https://img.shields.io/badge/doc_gen-typedoc-8000ff.svg)](https://typedoc.org)
[![editor: vscode](https://img.shields.io/badge/edit-vscode-0060ff.svg)](https://code.visualstudio.com/docs/editor/tasks)
[![format: prettier](https://img.shields.io/badge/format-prettier-ffff00.svg)](https://github.com/prettier/prettier)
[![language: TypeScript](https://img.shields.io/badge/%3C%2F%3E-typescript-0080ff.svg)](http://www.typescriptlang.org/)
[![reference: vscode](https://img.shields.io/badge/ref-MDN-80a0ff.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
[![repository: github](https://img.shields.io/badge/repo-tags-black.svg)](https://github.com/jr-grenoble/tags)
[![spelling: cspell](https://img.shields.io/badge/spelling-cspell-40ff50.svg)](https://github.com/streetsidesoftware/vscode-spell-checker/)
[![style: Google](https://img.shields.io/badge/style-google-60ff40.svg)](https://github.com/google/gts)
[![test: mocha](https://img.shields.io/badge/test-mocha-c29d7f.svg)](https://mochajs.org)

Note: this file is hardlinked into the root project directory.

# Ю tags

**Ю tags** are a self contained [Typescript](https://www.typescriptlang.org/) library that provides chainable, parametrizable tags for [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) as well as other text processing utilities.

This is an opinionated library. It provides reasonable (i.e. fitting my taste) options only.

# Usage

The **Tags** library consists of a single typescript module conforming to modern module conventions. You can use the library via `import` statements such as:

```typescript
import ю from "./libs/tags"; // only import the ю tag
import type { printable } from "./libs/tags"; // imported types leave no trace in the executable code

const json = ю.serialize; // rename imported tag
console.log(json`object ${{ a: 1, b: 2, c: { c1: 3.1, c2: 3.2 } }}`);
```

By default, all tag functions must be chained to the default module export, ю. This is Unicode character \u044e, Cyrillic small letter yu, whose shape is reminiscent of a tag. You can rename it `tag` in the import clause if you want, this will not conflict with other names in the library. I personally use a shortcut: `|-o` generates the `ю` character on my machine.

For a complete view of the libray, see the [list tags](#list-of-tags) and [list of options](#list-of-options).

Chained tags operate much like the [chai](https://www.chaijs.com/api/bdd) assertion language, except that the various tags apply right to left to the template literal,i.e. the tag closest to the template literal applies first. The typical use is to prepend a template literal with a chain of tags, each tags being potentially parametrized. For instance, the expression:

```typescript
console.log(ю
  .number
  .trimｰblankｰlines
  .wrap(30)
  .paragraphsｰfromｰlines
  .outdent
  .serialize`
    This is the first non blank line, indented by 4 spaces, and 105 characters long, including the final dot.
    The second non blank line is shorter at 67 characters with the dot.
        The third line is indented a further 4 spaces, for a total of 8 and is 124 characters long including these extra spaces.
        The next one includes a numeric expression: ${
          1 / Math.PI
        } that is followed by text.

        The fifth one includes an object: ${
          // This comment will disappear
          {
            a: 1, b:2,
            c: [3.1, 3.2, 3.3],
            d: {
              e: 4.1,
              f: { g: 4.21 }
            }
          }
        } that we want to serialize.
    Finally, the last line reverts to an indentation of only 4 spaces and ends with a newline.
  `
```

will produce the following output:

<table>
  <colgroup>
    <col span="1" style="width:30em">
    <col span="1" style="width:15em"/>
  </colgroup>
  <tbody>
    <tr>
      <td style="vertical-align: top"><code>
      <pre>
        │ ₁│This is the first non blank
        │ ₂│line, indented by 4 spaces,
        │ ₃│and 105 characters long,
        │ ₄│including the final dot.
        │ ₅│
        │ ₆│The second non blank line is
        │ ₇│shorter at 67 characters with
        │ ₈│the dot.
        │ ₉│
        │₁₀│    The third line is indented
        │₁₁│    a further 4 spaces, for a
        │₁₂│    total of 8 and is 124
        │₁₃│    characters long including
        │₁₄│    these extra spaces.
        │₁₅│
        │₁₆│    The next one includes a
        │₁₇│    numeric expression: 
        │₁₈│    0.3183098861837907
        │₁₉│    that is followed by text.
        │₂₀│
        │₂₁│    The fifth one includes an
        │₂₂│    object: {
        │₂₃│      "a": 1,
        │₂₄│      "b": 2,
        │₂₅│      "c": [
        │₂₆│        3.2,
        │₂₇│        3.1,
        │₂₈│        3.3
        │₂₉│      ],
        │₃₀│      "d": {
        │₃₁│        "e": 4.1,
        │₃₂│        "f": {
        │₃₃│          "g": 4.21
        │₃₄│        }
        │₃₅│      }
        │₃₆│    } that we want to
        │₃₇│    serialize.
        │₃₈│
        │₃₉│Finally, the last line reverts
        │₄₀│to an indentation of only 4
        │₄₁│spaces and ends with a
        │₄₂│newline.
      </pre></code>
      </td>
      <td style="vertical-align: top">
      <p><br>You can see that the whole text is numbered, due to the <code>number</code> tag.</p>
      <p>The first and last blank lines have disappeared,
      and the extra white lines before the fifth line have disappeared
      as a result of using the <code>trimｰblankｰlines</code> option.</p>
      <p>The text folds at 30 characters on each line, due to the <code>wrap(30)</code> tag</p>
      <p>Each line in the initial text was turned into a paragraph separated from the next by a blank line,
      due to the <code>paragraphsｰfromｰlines</code> option</p>
      <p>The initial 4-space indentation has also been eliminated via the <code>outdent</code> tag</p>
      <p>Finally, the object expression that would normally turn as [object Object] has ben serialized,
      obviously thanks to the <code>serialize</code> tag</p>
      </td>
    </tr>
  </tbody>
</table>

# Project structure

The project uses git. The repository is [jr-grenoble/tags](https://github.com/jr-grenoble/tags). Access from my Mac requires a personal access token. The project structure is pretty standard.

    .
    ├── assets                  # Static images, data…
    ├── dist                    # Source files, ignored by git
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
const numberingｰparameters = {
  // a collection, hence the plural name
  startｰat: 1,
  padｰleft: 0,
};

const textｰlines = input.split("\n"); // an array, hence plural for lines
```

Tag functions (and functions) are named with a verb, possibly qualified.

# Reference

## List of tags

#### `outdent`

allows for removing minimal indentation from text

## List of types

#### `printable`

can be

#### `templateｰstrings`

is a template string array, i.e. an array of readonly strings with a `raw` iterator allowing to access

## List of utilities

#### `minｰindentation`

returns the minimal indentation for text

## List of options

#### `all`

apply subsequent tags both to literals and to expressions.

# Todo list

- create input tag allowing to fetch data instead of printing it, similar to C++ cin; syntax would be `` ю.fetch({name,address})`name: ${name}, address: ${address}` ``; this example would require `name` and `address` to be in context.
- look at [XRegExp](https://xregexp.com/) and how it uses raw strings.
- look at [rauschma](https://exploringjs.com/es6/ch_template-literals.html)
- investigate postprocessing, i.e. patterns such as `` ю.tag3.tag2.tag1`template literal`.tag4.tag5.ꮊ ``; the post processing tags operate on strings though, unless you have a terminator such as ꮊ (cherokee me) that would allow for completion.
- use default parameters for line folding, blank line management.
- provide uncomment tag to remove C++-like comments from template-strings
- what about half tags that would only affect template ｰ strings or values ????
- provide a flush left and right mechanism (by default, flush is left) allowing justification left and right
- provide options in outdent so that ${expressions} get processed (or not)
- provide fixed decimal, engineering and scientific notation tag for ${expressions}, as well as more general number formatting
- provide a format generator allowing to input objects/numbers in the template literal and format each individually
- separate such formatting (numbers, bold…) into other module (optional), only keep spacing in this one.
- implement an html escaping tag that eats whitespace, see [rauschma](https://exploringjs.com/es6/ch_template-literals.html#sec_html-tag-function-implementation).

# Design

## Random notes

We use [proxies](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) and of course [Reflect](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Reflect) to implement most tags. As the library is quite large,
we use the [Levenshtein distance](https://en.wikipedia.org/wiki/Levenshtein_distance) to signal misspelling, cf. [chai's proxy](https://github.com/chaijs/chai/blob/main/lib/chai/utils/proxify.js). We [add chainable](https://github.com/chaijs/chai/blob/main/lib/chai/utils/addChainableMethod.js) tags dynamically to the ю object,

In case we need regular expressions, we use the [XRgExp](https://xregexp.com/) library.

## Template parameters `юｰparameters`

    ┌───────────────────────────────────────────────┐
    │ |-o-parameters                                │
    ├───────────────────────────────────────────────┤
    │ literals : [ { cooked: string, raw: string } ]│
    │ expressions : [ printable ]                   │
    └───────────────────────────────────────────────┘

The signature of a native tag is `(templateｰstrings, ...printable[]) => any`, where `templateｰstrings` is an array like object containing readonly cooked strings (the string literals in the initial template literal) as well as a `raw` member containing the corresponding raw strings, i.e. strings where escape characters such as newlines `\n` or unicode characters e.g. `\u00a0` have been left unprocessed.

To simplify processing, the tail tag (i.e. the first one to be really applied) turns these into an `юｰparameters` object:
`{ literals: { cooked: string, raw: string }[], expressions: printable[] }`. Tags closer to the head of the chain receive and process such parameters.

## Singleton head `ю`

`Ю` (in fact, lowercase `ю`) is a singleton object that prepends all chain tags. Its sole role is to react to being called or accessed. In that case, it creates a root tag object (one that will finally return something other than template parameters), and it forwards whatever triggered it to that root tag object.

It is a proxy object derived from functions so that it can trap calls and gets. It also traps sets so that it can be configured with global options (passed to newly created `юｰroot` objects).

## Root class `юｰroot`

The `юｰroot` root class is created by the singleton head `ю` whenever it receives parameters (`apply`) or it is accessed as a chain head (`get`). The head object passe options to these root objects.

These root objects are responsible for assembling template parameters into a resulting string. They also react to `apply` and `get` trigger:

- when being called (`apply` trigger), they either record options and return themselves as a result or they assemble an `юｰparameters` into a resulting string;
- when they are requested to access a property (`get` trigger), they fetch that property (mandatorily an `юｰtag`), and call it with whatever options they have accumulated. When the `юｰtag` returns, they assemble `юｰparameters` elements and return the resulting string.

## Tag class `юｰtag`

All elements of a tag chain (tag objects) are derived from the tag class. All these elements support chaining and direct call.

When a tag chain `` ю(...paramsｰ0).tagｰ1(...paramsｰ1).tagｰ2.…tagｰn(...paramsｰn)`litｰ1 ${epressionｰ1} litｰ2 … litｰn ${expressionｰn} litｰend`  `` is processed, tag processing is pushed on the call stack until the tag chain reaches the template literals. These are available in the form of a `[ templateｰstrings, ...printable[] ]` t-uple. The way this works is the following:

1. all tag _objects_ are derived from functions and thus are callable.
2. when called with a template literal t-uple, they turn that into a `юｰparameters` t-uple and process it.
3. when called with an `юｰparameters` t-uple, they perform their main function and return a modified `юｰparameters`.
4. when called with other types of parameters, they modify their options accordingly and return themselves for chaining.
5. when requested to access a property, they fetch that property, call it as a method by passing it all accumulated options, and when that property returns a `юｰparameters` t-uple, they process it and return it up.

## Options

Options either apply globally (when set on the ю singleton) or down the chain tag, only from the point the options are set.
