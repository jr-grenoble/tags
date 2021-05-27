[Tags](README.md) / Exports

# Tags

**`author`** [Jean-René Bouvier](mailto:24454054+jr-grenoble@users.noreply.github.com)

**`copyright`** (c) Jean-René Bouvier, from 2021 on.

**`license`**

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.
This program is distributed in the hope that it will be useful,
but **without any warranty**; without even the implied warranty of
merchantability or fitness for a particular purpose.  See the
GNU General Public License for more details.
You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.

The author hereby grants Facts Haven SAS and its affiliates the right to use and perform any derivative works.

Tags
====

**`overview`**

This library module provides chainable tag functions (or simply _tags_)to modify template literals, along with a few utility functions.

- Refer to [MDN template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) for explanations
about basic (non chainable) tag functions ;
- Refer also to the much more complete [`common-tags`](https://github.com/zspecza/common-tags) package.

Tags allow for prefixing template literals, e.g. as in ```format("bold")`Some ${expression} followed by text`⁠ ```.

Tags implementation
-------------------
Tag function _implementations_ take one mandatory parameter, a `templateｰstrings` array of string literals, and optional printable values.
By default (cf. the `identity` tag), the template string is rendered by interleaving the printable values between the template
string literals. Hence, a proper call to a tag function must pass one more string literal than there are values.

Chainable tags
--------------
Chainable tag functions allow for composing tags to perform more complex tasks, as in
```typescript
indent(4)(paragraph)`Some ${expression}`⁠
```

They can also work on a regular string parameter, when using the regular function call, as in
```typescript
indent(4)(paragraph)("Some very long string, abbreviated here for documentation purpose")
```
See the [`chainableｰtagｰfunction`](interfaces/chainable_tag_function.md) type for further explanations.
________

Tags library
============
This libray uses dashes to separate words in identifiers. Because the dash is not allowed in typescript identifiers, we use the half width Hangul
letter eu `ｰ`, unicode `\uffda` instead of a real dash.
>
The library exports types

| Types                             | Description                                                                                                    |
| :-------------------------------- | :------------------------------------------------------------------------------------------------------------- |
| [`chainableｰtagｰfunction`](interfaces/chainable_tag_function.md)| A tag function that also accepts another tag function or a string as a parameter, for chaining or direct call  |
| [`tagｰfunction`](interfaces/tag_function.md)          | A function that can be applied to a template string, i.e. that can prefix such a string                        |
| [`templateｰstrings`](interfaces/template_strings.md)      | An array of readonly strings, augmented with a raw property to iterate over raw equivalent of these strings    |
| [`printable`](interfaces/printable.md)             | Any expression that produces a printable result, i.e. that can be called with `.toString()`                    |
| [`numberingｰoptions`](interfaces/numbering_options.md)     | A set of options that allows control of the `numbering` tag as well as of `numberingｰcounter` objects          |

## Table of contents

### Classes

- [numberingｰcounter](classes/numbering_counter.md)

### Interfaces

- [callableｰtagｰfunction](interfaces/callable_tag_function.md)
- [chainableｰtagｰfunction](interfaces/chainable_tag_function.md)
- [ctagｰfunction](interfaces/ctag_function.md)
- [numberingｰoptions](interfaces/numbering_options.md)
- [parametrizableｰtagｰfunction](interfaces/parametrizable_tag_function.md)
- [printable](interfaces/printable.md)
- [tagｰfunction](interfaces/tag_function.md)
- [templateｰstrings](interfaces/template_strings.md)

### Variables

- [bold](modules.md#bold)
- [boldｰsans](modules.md#boldｰsans)
- [flush](modules.md#flush)
- [fold](modules.md#fold)
- [fraktur](modules.md#fraktur)
- [identity](modules.md#identity)
- [italic](modules.md#italic)
- [json](modules.md#json)
- [numberingｰschemes](modules.md#numberingｰschemes)
- [numberｰlines](modules.md#numberｰlines)
- [outdent](modules.md#outdent)
- [paragraph](modules.md#paragraph)
- [pretty](modules.md#pretty)
- [raw](modules.md#raw)
- [serialize](modules.md#serialize)

### Functions

- [alphabetize](modules.md#alphabetize)
- [arabize](modules.md#arabize)
- [format](modules.md#format)
- [indent](modules.md#indent)
- [jsonize](modules.md#jsonize)
- [makeｰcallable](modules.md#makeｰcallable)
- [makeｰctag](modules.md#makeｰctag)
- [makeｰparametrizable](modules.md#makeｰparametrizable)
- [maxｰpaddingｰwidth](modules.md#maxｰpaddingｰwidth)
- [numbering](modules.md#numbering)
- [romanize](modules.md#romanize)
- [wrap](modules.md#wrap)

## Variables

### bold

• `Const` **bold**: [*chainableｰtagｰfunction*](interfaces/chainable_tag_function.md)

Defined in: [Dev/projects/tags/libs/tags.ts:1044](https://github.com/jr-grenoble/tags/blob/37448b8/libs/tags.ts#L1044)

___

### boldｰsans

• `Const` **boldｰsans**: [*chainableｰtagｰfunction*](interfaces/chainable_tag_function.md)

Defined in: [Dev/projects/tags/libs/tags.ts:1047](https://github.com/jr-grenoble/tags/blob/37448b8/libs/tags.ts#L1047)

___

### flush

• `Const` **flush**: [*chainableｰtagｰfunction*](interfaces/chainable_tag_function.md)

The `flush`tag removes all leading spaces (flushes text left).

**`see`** [outdent](modules.md#outdent) to remove only the first level of indentation.

Defined in: [Dev/projects/tags/libs/tags.ts:666](https://github.com/jr-grenoble/tags/blob/37448b8/libs/tags.ts#L666)

___

### fold

• `Const` **fold**: [*chainableｰtagｰfunction*](interfaces/chainable_tag_function.md)

The `fold` tag removes line breaks. If you want to remove first level indentation too,

**`see`** [outdent](modules.md#outdent) to remove first level indentation, e.g. with `fold(outdent)`

**`see`** [flush](modules.md#flush) to remove all indentation, e.g. with `fold(flush)`.

Defined in: [Dev/projects/tags/libs/tags.ts:656](https://github.com/jr-grenoble/tags/blob/37448b8/libs/tags.ts#L656)

___

### fraktur

• `Const` **fraktur**: [*chainableｰtagｰfunction*](interfaces/chainable_tag_function.md)

Defined in: [Dev/projects/tags/libs/tags.ts:1046](https://github.com/jr-grenoble/tags/blob/37448b8/libs/tags.ts#L1046)

___

### identity

• `Const` **identity**: [*chainableｰtagｰfunction*](interfaces/chainable_tag_function.md)

The identity tag is not very useful, except to zip strings and values together.
This module uses it internally to stitch string literals and substitution expression.

**`returns`** a string that interleaves values into the strings array

Defined in: [Dev/projects/tags/libs/tags.ts:596](https://github.com/jr-grenoble/tags/blob/37448b8/libs/tags.ts#L596)

___

### italic

• `Const` **italic**: [*chainableｰtagｰfunction*](interfaces/chainable_tag_function.md)

Defined in: [Dev/projects/tags/libs/tags.ts:1045](https://github.com/jr-grenoble/tags/blob/37448b8/libs/tags.ts#L1045)

___

### json

• `Const` **json**: [*tagｰfunction*](interfaces/tag_function.md)

Defined in: [Dev/projects/tags/libs/tags.ts:752](https://github.com/jr-grenoble/tags/blob/37448b8/libs/tags.ts#L752)

___

### numberingｰschemes

• `Const` **numberingｰschemes**: *object*

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Alpha` | (`n`: *number*, `s?`: *string*) => *string* |
| `Digit` | (`n`: *number*) => *string* |
| `Roman` | (`n`: *number*, `s?`: *string*) => *string* |
| `alpha` | (`n`: *number*, `s?`: *string*) => *string* |
| `digit` | (`n`: *number*) => *string* |
| `roman` | (`n`: *number*, `s?`: *string*) => *string* |

Defined in: [Dev/projects/tags/libs/tags.ts:1127](https://github.com/jr-grenoble/tags/blob/37448b8/libs/tags.ts#L1127)

___

### numberｰlines

• `Const` **numberｰlines**: [*chainableｰtagｰfunction*](interfaces/chainable_tag_function.md)

Defined in: [Dev/projects/tags/libs/tags.ts:1271](https://github.com/jr-grenoble/tags/blob/37448b8/libs/tags.ts#L1271)

___

### outdent

• `Const` **outdent**: [*chainableｰtagｰfunction*](interfaces/chainable_tag_function.md)

The `outdent`tag removes first level indentation.

**`see`** [flush](modules.md#flush) to remove all indentation.

Defined in: [Dev/projects/tags/libs/tags.ts:678](https://github.com/jr-grenoble/tags/blob/37448b8/libs/tags.ts#L678)

___

### paragraph

• `Const` **paragraph**: [*chainableｰtagｰfunction*](interfaces/chainable_tag_function.md)

The `paragraph` tag removes duplicate blank lines and returns a set of paragraphs separated by single blank lines.

**`returns`** a string that interleaves values into the strings array and that removes extraneous blank lines.

Defined in: [Dev/projects/tags/libs/tags.ts:642](https://github.com/jr-grenoble/tags/blob/37448b8/libs/tags.ts#L642)

___

### pretty

• `Const` **pretty**: [*tagｰfunction*](interfaces/tag_function.md)

Defined in: [Dev/projects/tags/libs/tags.ts:751](https://github.com/jr-grenoble/tags/blob/37448b8/libs/tags.ts#L751)

___

### raw

• `Const` **raw**: [*tagｰfunction*](interfaces/tag_function.md)

The `raw` tag is identical to [`String.raw`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/raw).
It isn't chainable with other tag functions, because these other
tag functions typically process escape characters. However, if raw is the
only tag or the deepest one (the first to be applied), escape characters
come out unprocessed.

**`param`** an array of string literals (this array is equipped with the raw property)

**`param`** the expressions to be substituted in the output

**`returns`** a string that interleaves values into the strings array

Note that if you use raw as a function, you must pass it an object with the raw property, along with values
to be substituted between iterations of that raw property, cf.
[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/raw#using_string.raw).

Use `raw` either directly or nested the deepest in other tags, e.g.

```typescript
console.log ( raw`This is line1\nAnd this is line {1+1}` );
// => This is line1\nAnd this is line 2
console.log ( identity(raw)`This is line1\nAnd this is line {1+1}` );
// => This is line1\nAnd this is line 2
// but note that:
console.log ( raw(identity)`This is line1\nAnd this is line {1+1}` );
// This is line 1
// And this is line 2
```

Defined in: [Dev/projects/tags/libs/tags.ts:636](https://github.com/jr-grenoble/tags/blob/37448b8/libs/tags.ts#L636)

___

### serialize

• `Const` **serialize**: [*ctagｰfunction*](interfaces/ctag_function.md)

Defined in: [Dev/projects/tags/libs/tags.ts:220](https://github.com/jr-grenoble/tags/blob/37448b8/libs/tags.ts#L220)

## Functions

### alphabetize

▸ `Const` **alphabetize**(`__namedParameters?`: { `uppercase`:   }): *function*

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `__namedParameters` | *object* | {} |
| `__namedParameters.uppercase` | - | - |

**Returns:** (`n`: *number*, `s?`: *string*) => *string*

Defined in: [Dev/projects/tags/libs/tags.ts:1049](https://github.com/jr-grenoble/tags/blob/37448b8/libs/tags.ts#L1049)

___

### arabize

▸ `Const` **arabize**(`__namedParameters?`: { `big`:   }): *function*

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `__namedParameters` | *object* | {} |
| `__namedParameters.big` | - | - |

**Returns:** (`n`: *number*) => *string*

Defined in: [Dev/projects/tags/libs/tags.ts:1106](https://github.com/jr-grenoble/tags/blob/37448b8/libs/tags.ts#L1106)

___

### format

▸ `Const` **format**(`format`: *string*): [*chainableｰtagｰfunction*](interfaces/chainable_tag_function.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `format` | *string* |

**Returns:** [*chainableｰtagｰfunction*](interfaces/chainable_tag_function.md)

Defined in: [Dev/projects/tags/libs/tags.ts:1027](https://github.com/jr-grenoble/tags/blob/37448b8/libs/tags.ts#L1027)

___

### indent

▸ `Const` **indent**(`n`: *number*): [*chainableｰtagｰfunction*](interfaces/chainable_tag_function.md)

The `indent` tag adds indentation to each line.

**`see`** [outdent](modules.md#outdent) and [flush](modules.md#flush) for related functions.

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | *number* |

**Returns:** [*chainableｰtagｰfunction*](interfaces/chainable_tag_function.md)

Defined in: [Dev/projects/tags/libs/tags.ts:692](https://github.com/jr-grenoble/tags/blob/37448b8/libs/tags.ts#L692)

___

### jsonize

▸ `Const` **jsonize**(`__namedParameters?`: jsonｰoptions): [*tagｰfunction*](interfaces/tag_function.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `__namedParameters` | jsonｰoptions | {} |

**Returns:** [*tagｰfunction*](interfaces/tag_function.md)

Defined in: [Dev/projects/tags/libs/tags.ts:722](https://github.com/jr-grenoble/tags/blob/37448b8/libs/tags.ts#L722)

___

### makeｰcallable

▸ `Const` **makeｰcallable**(`tag`: [*tagｰfunction*](interfaces/tag_function.md)): [*callableｰtagｰfunction*](interfaces/callable_tag_function.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tag` | [*tagｰfunction*](interfaces/tag_function.md) |

**Returns:** [*callableｰtagｰfunction*](interfaces/callable_tag_function.md)

Defined in: [Dev/projects/tags/libs/tags.ts:251](https://github.com/jr-grenoble/tags/blob/37448b8/libs/tags.ts#L251)

___

### makeｰctag

▸ `Const` **makeｰctag**(`tag`: configurableｰtagｰfunction, `defaults`: tagｰoptions): [*ctagｰfunction*](interfaces/ctag_function.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tag` | configurableｰtagｰfunction |
| `defaults` | tagｰoptions |

**Returns:** [*ctagｰfunction*](interfaces/ctag_function.md)

Defined in: [Dev/projects/tags/libs/tags.ts:161](https://github.com/jr-grenoble/tags/blob/37448b8/libs/tags.ts#L161)

___

### makeｰparametrizable

▸ `Const` **makeｰparametrizable**<parameterｰtype\>(`parametrizableｰtag`: (`params`: parameterｰtype) => [*tagｰfunction*](interfaces/tag_function.md), `defaultｰparameters`: parameterｰtype): [*parametrizableｰtagｰfunction*](interfaces/parametrizable_tag_function.md)<parameterｰtype\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `parameterｰtype` | *object* |

#### Parameters

| Name | Type |
| :------ | :------ |
| `parametrizableｰtag` | (`params`: parameterｰtype) => [*tagｰfunction*](interfaces/tag_function.md) |
| `defaultｰparameters` | parameterｰtype |

**Returns:** [*parametrizableｰtagｰfunction*](interfaces/parametrizable_tag_function.md)<parameterｰtype\>

Defined in: [Dev/projects/tags/libs/tags.ts:280](https://github.com/jr-grenoble/tags/blob/37448b8/libs/tags.ts#L280)

___

### maxｰpaddingｰwidth

▸ `Const` **maxｰpaddingｰwidth**(`from`: *number*, `length`: *number*, `scheme?`: ``"alpha"`` \| ``"Alpha"`` \| ``"roman"`` \| ``"Roman"`` \| ``"digit"`` \| ``"Digit"``, `signed?`: *boolean*): *number*

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `from` | *number* | - |
| `length` | *number* | - |
| `scheme` | ``"alpha"`` \| ``"Alpha"`` \| ``"roman"`` \| ``"Roman"`` \| ``"digit"`` \| ``"Digit"`` | "digit" |
| `signed` | *boolean* | false |

**Returns:** *number*

Defined in: [Dev/projects/tags/libs/tags.ts:1136](https://github.com/jr-grenoble/tags/blob/37448b8/libs/tags.ts#L1136)

___

### numbering

▸ `Const` **numbering**(`options?`: [*numberingｰoptions*](interfaces/numbering_options.md)): [*chainableｰtagｰfunction*](interfaces/chainable_tag_function.md)

The `numbering` tag adds numbering to each line.

**`see`** [outdent](modules.md#outdent) and [flush](modules.md#flush) for related functions.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `options` | [*numberingｰoptions*](interfaces/numbering_options.md) | {} |

**Returns:** [*chainableｰtagｰfunction*](interfaces/chainable_tag_function.md)

numbered lines

Defined in: [Dev/projects/tags/libs/tags.ts:1239](https://github.com/jr-grenoble/tags/blob/37448b8/libs/tags.ts#L1239)

___

### romanize

▸ `Const` **romanize**(`__namedParameters?`: { `uppercase`:   }): *function*

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `__namedParameters` | *object* | {} |
| `__namedParameters.uppercase` | - | - |

**Returns:** (`n`: *number*, `s?`: *string*) => *string*

Defined in: [Dev/projects/tags/libs/tags.ts:1066](https://github.com/jr-grenoble/tags/blob/37448b8/libs/tags.ts#L1066)

___

### wrap

▸ `Const` **wrap**(`n`: *number*): [*chainableｰtagｰfunction*](interfaces/chainable_tag_function.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | *number* |

**Returns:** [*chainableｰtagｰfunction*](interfaces/chainable_tag_function.md)

Defined in: [Dev/projects/tags/libs/tags.ts:780](https://github.com/jr-grenoble/tags/blob/37448b8/libs/tags.ts#L780)
