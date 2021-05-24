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

Tags
====
The author hereby grants Facts Haven SAS and its affiliates the right to use and perform any derivative works

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

- [chainableｰtagｰfunction](interfaces/chainable_tag_function.md)
- [numberingｰoptions](interfaces/numbering_options.md)
- [printable](interfaces/printable.md)
- [tagｰfunction](interfaces/tag_function.md)
- [templateｰstrings](interfaces/template_strings.md)

### Variables

- [numberingｰschemes](modules.md#numberingｰschemes)

### Functions

- [alphabetize](modules.md#alphabetize)
- [arabize](modules.md#arabize)
- [bold](modules.md#bold)
- [boldｰsans](modules.md#boldｰsans)
- [flush](modules.md#flush)
- [fold](modules.md#fold)
- [format](modules.md#format)
- [fraktur](modules.md#fraktur)
- [identity](modules.md#identity)
- [indent](modules.md#indent)
- [italic](modules.md#italic)
- [json](modules.md#json)
- [jsonize](modules.md#jsonize)
- [maxｰpaddingｰwidth](modules.md#maxｰpaddingｰwidth)
- [numbering](modules.md#numbering)
- [numberｰlines](modules.md#numberｰlines)
- [outdent](modules.md#outdent)
- [paragraph](modules.md#paragraph)
- [pretty](modules.md#pretty)
- [raw](modules.md#raw)
- [romanize](modules.md#romanize)
- [wrap](modules.md#wrap)

## Variables

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

Defined in: [Dev/projects/tags/libs/tags.ts:918](https://github.com/jr-grenoble/tags/blob/a1f675c/libs/tags.ts#L918)

## Functions

### alphabetize

▸ `Const` **alphabetize**(`__namedParameters?`: { `uppercase`:   }): *function*

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `__namedParameters` | *object* | {} |
| `__namedParameters.uppercase` | - | - |

**Returns:** (`n`: *number*, `s?`: *string*) => *string*

Defined in: [Dev/projects/tags/libs/tags.ts:840](https://github.com/jr-grenoble/tags/blob/a1f675c/libs/tags.ts#L840)

___

### arabize

▸ `Const` **arabize**(`__namedParameters?`: { `big`:   }): *function*

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `__namedParameters` | *object* | {} |
| `__namedParameters.big` | - | - |

**Returns:** (`n`: *number*) => *string*

Defined in: [Dev/projects/tags/libs/tags.ts:897](https://github.com/jr-grenoble/tags/blob/a1f675c/libs/tags.ts#L897)

___

### bold

▸ `Const` **bold**(`tagｰfunction`: [*tagｰfunction*](interfaces/tag_function.md)): [*chainableｰtagｰfunction*](interfaces/chainable_tag_function.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tagｰfunction` | [*tagｰfunction*](interfaces/tag_function.md) |

**Returns:** [*chainableｰtagｰfunction*](interfaces/chainable_tag_function.md)

Defined in: [Dev/projects/tags/libs/tags.ts:835](https://github.com/jr-grenoble/tags/blob/a1f675c/libs/tags.ts#L835)

▸ `Const` **bold**(`stringｰliteralｰorｰexpression`: *string*): *string*

#### Parameters

| Name | Type |
| :------ | :------ |
| `stringｰliteralｰorｰexpression` | *string* |

**Returns:** *string*

Defined in: [Dev/projects/tags/libs/tags.ts:835](https://github.com/jr-grenoble/tags/blob/a1f675c/libs/tags.ts#L835)

▸ `Const` **bold**(`strings`: [*templateｰstrings*](interfaces/template_strings.md), ...`values`: [*printable*](interfaces/printable.md)[]): *string*

#### Parameters

| Name | Type |
| :------ | :------ |
| `strings` | [*templateｰstrings*](interfaces/template_strings.md) |
| `...values` | [*printable*](interfaces/printable.md)[] |

**Returns:** *string*

Defined in: [Dev/projects/tags/libs/tags.ts:835](https://github.com/jr-grenoble/tags/blob/a1f675c/libs/tags.ts#L835)

___

### boldｰsans

▸ `Const` **boldｰsans**(`tagｰfunction`: [*tagｰfunction*](interfaces/tag_function.md)): [*chainableｰtagｰfunction*](interfaces/chainable_tag_function.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tagｰfunction` | [*tagｰfunction*](interfaces/tag_function.md) |

**Returns:** [*chainableｰtagｰfunction*](interfaces/chainable_tag_function.md)

Defined in: [Dev/projects/tags/libs/tags.ts:838](https://github.com/jr-grenoble/tags/blob/a1f675c/libs/tags.ts#L838)

▸ `Const` **boldｰsans**(`stringｰliteralｰorｰexpression`: *string*): *string*

#### Parameters

| Name | Type |
| :------ | :------ |
| `stringｰliteralｰorｰexpression` | *string* |

**Returns:** *string*

Defined in: [Dev/projects/tags/libs/tags.ts:838](https://github.com/jr-grenoble/tags/blob/a1f675c/libs/tags.ts#L838)

▸ `Const` **boldｰsans**(`strings`: [*templateｰstrings*](interfaces/template_strings.md), ...`values`: [*printable*](interfaces/printable.md)[]): *string*

#### Parameters

| Name | Type |
| :------ | :------ |
| `strings` | [*templateｰstrings*](interfaces/template_strings.md) |
| `...values` | [*printable*](interfaces/printable.md)[] |

**Returns:** *string*

Defined in: [Dev/projects/tags/libs/tags.ts:838](https://github.com/jr-grenoble/tags/blob/a1f675c/libs/tags.ts#L838)

___

### flush

▸ `Const` **flush**(`tagｰfunction`: [*tagｰfunction*](interfaces/tag_function.md)): [*chainableｰtagｰfunction*](interfaces/chainable_tag_function.md)

The `flush`tag removes all leading spaces (flushes text left).

**`see`** [outdent](modules.md#outdent) to remove only the first level of indentation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `tagｰfunction` | [*tagｰfunction*](interfaces/tag_function.md) |

**Returns:** [*chainableｰtagｰfunction*](interfaces/chainable_tag_function.md)

Defined in: [Dev/projects/tags/libs/tags.ts:457](https://github.com/jr-grenoble/tags/blob/a1f675c/libs/tags.ts#L457)

▸ `Const` **flush**(`stringｰliteralｰorｰexpression`: *string*): *string*

The `flush`tag removes all leading spaces (flushes text left).

**`see`** [outdent](modules.md#outdent) to remove only the first level of indentation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `stringｰliteralｰorｰexpression` | *string* |

**Returns:** *string*

Defined in: [Dev/projects/tags/libs/tags.ts:457](https://github.com/jr-grenoble/tags/blob/a1f675c/libs/tags.ts#L457)

▸ `Const` **flush**(`strings`: [*templateｰstrings*](interfaces/template_strings.md), ...`values`: [*printable*](interfaces/printable.md)[]): *string*

The `flush`tag removes all leading spaces (flushes text left).

**`see`** [outdent](modules.md#outdent) to remove only the first level of indentation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `strings` | [*templateｰstrings*](interfaces/template_strings.md) |
| `...values` | [*printable*](interfaces/printable.md)[] |

**Returns:** *string*

Defined in: [Dev/projects/tags/libs/tags.ts:457](https://github.com/jr-grenoble/tags/blob/a1f675c/libs/tags.ts#L457)

___

### fold

▸ `Const` **fold**(`tagｰfunction`: [*tagｰfunction*](interfaces/tag_function.md)): [*chainableｰtagｰfunction*](interfaces/chainable_tag_function.md)

The `fold` tag removes line breaks. If you want to remove first level indentation too,

**`see`** [outdent](modules.md#outdent) to remove first level indentation, e.g. with `fold(outdent)`

**`see`** [flush](modules.md#flush) to remove all indentation, e.g. with `fold(flush)`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `tagｰfunction` | [*tagｰfunction*](interfaces/tag_function.md) |

**Returns:** [*chainableｰtagｰfunction*](interfaces/chainable_tag_function.md)

Defined in: [Dev/projects/tags/libs/tags.ts:447](https://github.com/jr-grenoble/tags/blob/a1f675c/libs/tags.ts#L447)

▸ `Const` **fold**(`stringｰliteralｰorｰexpression`: *string*): *string*

The `fold` tag removes line breaks. If you want to remove first level indentation too,

**`see`** [outdent](modules.md#outdent) to remove first level indentation, e.g. with `fold(outdent)`

**`see`** [flush](modules.md#flush) to remove all indentation, e.g. with `fold(flush)`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `stringｰliteralｰorｰexpression` | *string* |

**Returns:** *string*

Defined in: [Dev/projects/tags/libs/tags.ts:447](https://github.com/jr-grenoble/tags/blob/a1f675c/libs/tags.ts#L447)

▸ `Const` **fold**(`strings`: [*templateｰstrings*](interfaces/template_strings.md), ...`values`: [*printable*](interfaces/printable.md)[]): *string*

The `fold` tag removes line breaks. If you want to remove first level indentation too,

**`see`** [outdent](modules.md#outdent) to remove first level indentation, e.g. with `fold(outdent)`

**`see`** [flush](modules.md#flush) to remove all indentation, e.g. with `fold(flush)`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `strings` | [*templateｰstrings*](interfaces/template_strings.md) |
| `...values` | [*printable*](interfaces/printable.md)[] |

**Returns:** *string*

Defined in: [Dev/projects/tags/libs/tags.ts:447](https://github.com/jr-grenoble/tags/blob/a1f675c/libs/tags.ts#L447)

___

### format

▸ `Const` **format**(`format`: *string*): [*chainableｰtagｰfunction*](interfaces/chainable_tag_function.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `format` | *string* |

**Returns:** [*chainableｰtagｰfunction*](interfaces/chainable_tag_function.md)

Defined in: [Dev/projects/tags/libs/tags.ts:818](https://github.com/jr-grenoble/tags/blob/a1f675c/libs/tags.ts#L818)

___

### fraktur

▸ `Const` **fraktur**(`tagｰfunction`: [*tagｰfunction*](interfaces/tag_function.md)): [*chainableｰtagｰfunction*](interfaces/chainable_tag_function.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tagｰfunction` | [*tagｰfunction*](interfaces/tag_function.md) |

**Returns:** [*chainableｰtagｰfunction*](interfaces/chainable_tag_function.md)

Defined in: [Dev/projects/tags/libs/tags.ts:837](https://github.com/jr-grenoble/tags/blob/a1f675c/libs/tags.ts#L837)

▸ `Const` **fraktur**(`stringｰliteralｰorｰexpression`: *string*): *string*

#### Parameters

| Name | Type |
| :------ | :------ |
| `stringｰliteralｰorｰexpression` | *string* |

**Returns:** *string*

Defined in: [Dev/projects/tags/libs/tags.ts:837](https://github.com/jr-grenoble/tags/blob/a1f675c/libs/tags.ts#L837)

▸ `Const` **fraktur**(`strings`: [*templateｰstrings*](interfaces/template_strings.md), ...`values`: [*printable*](interfaces/printable.md)[]): *string*

#### Parameters

| Name | Type |
| :------ | :------ |
| `strings` | [*templateｰstrings*](interfaces/template_strings.md) |
| `...values` | [*printable*](interfaces/printable.md)[] |

**Returns:** *string*

Defined in: [Dev/projects/tags/libs/tags.ts:837](https://github.com/jr-grenoble/tags/blob/a1f675c/libs/tags.ts#L837)

___

### identity

▸ `Const` **identity**(`tagｰfunction`: [*tagｰfunction*](interfaces/tag_function.md)): [*chainableｰtagｰfunction*](interfaces/chainable_tag_function.md)

The identity tag is not very useful, except to zip strings and values together.
This module uses it internally to stitch string literals and substitution expression.

#### Parameters

| Name | Type |
| :------ | :------ |
| `tagｰfunction` | [*tagｰfunction*](interfaces/tag_function.md) |

**Returns:** [*chainableｰtagｰfunction*](interfaces/chainable_tag_function.md)

a string that interleaves values into the strings array

Defined in: [Dev/projects/tags/libs/tags.ts:387](https://github.com/jr-grenoble/tags/blob/a1f675c/libs/tags.ts#L387)

▸ `Const` **identity**(`stringｰliteralｰorｰexpression`: *string*): *string*

The identity tag is not very useful, except to zip strings and values together.
This module uses it internally to stitch string literals and substitution expression.

#### Parameters

| Name | Type |
| :------ | :------ |
| `stringｰliteralｰorｰexpression` | *string* |

**Returns:** *string*

a string that interleaves values into the strings array

Defined in: [Dev/projects/tags/libs/tags.ts:387](https://github.com/jr-grenoble/tags/blob/a1f675c/libs/tags.ts#L387)

▸ `Const` **identity**(`strings`: [*templateｰstrings*](interfaces/template_strings.md), ...`values`: [*printable*](interfaces/printable.md)[]): *string*

The identity tag is not very useful, except to zip strings and values together.
This module uses it internally to stitch string literals and substitution expression.

#### Parameters

| Name | Type |
| :------ | :------ |
| `strings` | [*templateｰstrings*](interfaces/template_strings.md) |
| `...values` | [*printable*](interfaces/printable.md)[] |

**Returns:** *string*

a string that interleaves values into the strings array

Defined in: [Dev/projects/tags/libs/tags.ts:387](https://github.com/jr-grenoble/tags/blob/a1f675c/libs/tags.ts#L387)

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

Defined in: [Dev/projects/tags/libs/tags.ts:483](https://github.com/jr-grenoble/tags/blob/a1f675c/libs/tags.ts#L483)

___

### italic

▸ `Const` **italic**(`tagｰfunction`: [*tagｰfunction*](interfaces/tag_function.md)): [*chainableｰtagｰfunction*](interfaces/chainable_tag_function.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tagｰfunction` | [*tagｰfunction*](interfaces/tag_function.md) |

**Returns:** [*chainableｰtagｰfunction*](interfaces/chainable_tag_function.md)

Defined in: [Dev/projects/tags/libs/tags.ts:836](https://github.com/jr-grenoble/tags/blob/a1f675c/libs/tags.ts#L836)

▸ `Const` **italic**(`stringｰliteralｰorｰexpression`: *string*): *string*

#### Parameters

| Name | Type |
| :------ | :------ |
| `stringｰliteralｰorｰexpression` | *string* |

**Returns:** *string*

Defined in: [Dev/projects/tags/libs/tags.ts:836](https://github.com/jr-grenoble/tags/blob/a1f675c/libs/tags.ts#L836)

▸ `Const` **italic**(`strings`: [*templateｰstrings*](interfaces/template_strings.md), ...`values`: [*printable*](interfaces/printable.md)[]): *string*

#### Parameters

| Name | Type |
| :------ | :------ |
| `strings` | [*templateｰstrings*](interfaces/template_strings.md) |
| `...values` | [*printable*](interfaces/printable.md)[] |

**Returns:** *string*

Defined in: [Dev/projects/tags/libs/tags.ts:836](https://github.com/jr-grenoble/tags/blob/a1f675c/libs/tags.ts#L836)

___

### json

▸ `Const` **json**(`strings`: [*templateｰstrings*](interfaces/template_strings.md), ...`values`: [*printable*](interfaces/printable.md)[]): *string*

#### Parameters

| Name | Type |
| :------ | :------ |
| `strings` | [*templateｰstrings*](interfaces/template_strings.md) |
| `...values` | [*printable*](interfaces/printable.md)[] |

**Returns:** *string*

Defined in: [Dev/projects/tags/libs/tags.ts:543](https://github.com/jr-grenoble/tags/blob/a1f675c/libs/tags.ts#L543)

___

### jsonize

▸ `Const` **jsonize**(`__namedParameters?`: jsonｰoptions): [*tagｰfunction*](interfaces/tag_function.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `__namedParameters` | jsonｰoptions | {} |

**Returns:** [*tagｰfunction*](interfaces/tag_function.md)

Defined in: [Dev/projects/tags/libs/tags.ts:513](https://github.com/jr-grenoble/tags/blob/a1f675c/libs/tags.ts#L513)

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

Defined in: [Dev/projects/tags/libs/tags.ts:927](https://github.com/jr-grenoble/tags/blob/a1f675c/libs/tags.ts#L927)

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

Defined in: [Dev/projects/tags/libs/tags.ts:1030](https://github.com/jr-grenoble/tags/blob/a1f675c/libs/tags.ts#L1030)

___

### numberｰlines

▸ `Const` **numberｰlines**(`tagｰfunction`: [*tagｰfunction*](interfaces/tag_function.md)): [*chainableｰtagｰfunction*](interfaces/chainable_tag_function.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tagｰfunction` | [*tagｰfunction*](interfaces/tag_function.md) |

**Returns:** [*chainableｰtagｰfunction*](interfaces/chainable_tag_function.md)

Defined in: [Dev/projects/tags/libs/tags.ts:1062](https://github.com/jr-grenoble/tags/blob/a1f675c/libs/tags.ts#L1062)

▸ `Const` **numberｰlines**(`stringｰliteralｰorｰexpression`: *string*): *string*

#### Parameters

| Name | Type |
| :------ | :------ |
| `stringｰliteralｰorｰexpression` | *string* |

**Returns:** *string*

Defined in: [Dev/projects/tags/libs/tags.ts:1062](https://github.com/jr-grenoble/tags/blob/a1f675c/libs/tags.ts#L1062)

▸ `Const` **numberｰlines**(`strings`: [*templateｰstrings*](interfaces/template_strings.md), ...`values`: [*printable*](interfaces/printable.md)[]): *string*

#### Parameters

| Name | Type |
| :------ | :------ |
| `strings` | [*templateｰstrings*](interfaces/template_strings.md) |
| `...values` | [*printable*](interfaces/printable.md)[] |

**Returns:** *string*

Defined in: [Dev/projects/tags/libs/tags.ts:1062](https://github.com/jr-grenoble/tags/blob/a1f675c/libs/tags.ts#L1062)

___

### outdent

▸ `Const` **outdent**(`tagｰfunction`: [*tagｰfunction*](interfaces/tag_function.md)): [*chainableｰtagｰfunction*](interfaces/chainable_tag_function.md)

The `outdent`tag removes first level indentation.

**`see`** [flush](modules.md#flush) to remove all indentation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `tagｰfunction` | [*tagｰfunction*](interfaces/tag_function.md) |

**Returns:** [*chainableｰtagｰfunction*](interfaces/chainable_tag_function.md)

Defined in: [Dev/projects/tags/libs/tags.ts:469](https://github.com/jr-grenoble/tags/blob/a1f675c/libs/tags.ts#L469)

▸ `Const` **outdent**(`stringｰliteralｰorｰexpression`: *string*): *string*

The `outdent`tag removes first level indentation.

**`see`** [flush](modules.md#flush) to remove all indentation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `stringｰliteralｰorｰexpression` | *string* |

**Returns:** *string*

Defined in: [Dev/projects/tags/libs/tags.ts:469](https://github.com/jr-grenoble/tags/blob/a1f675c/libs/tags.ts#L469)

▸ `Const` **outdent**(`strings`: [*templateｰstrings*](interfaces/template_strings.md), ...`values`: [*printable*](interfaces/printable.md)[]): *string*

The `outdent`tag removes first level indentation.

**`see`** [flush](modules.md#flush) to remove all indentation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `strings` | [*templateｰstrings*](interfaces/template_strings.md) |
| `...values` | [*printable*](interfaces/printable.md)[] |

**Returns:** *string*

Defined in: [Dev/projects/tags/libs/tags.ts:469](https://github.com/jr-grenoble/tags/blob/a1f675c/libs/tags.ts#L469)

___

### paragraph

▸ `Const` **paragraph**(`tagｰfunction`: [*tagｰfunction*](interfaces/tag_function.md)): [*chainableｰtagｰfunction*](interfaces/chainable_tag_function.md)

The `paragraph` tag removes duplicate blank lines and returns a set of paragraphs separated by single blank lines.

#### Parameters

| Name | Type |
| :------ | :------ |
| `tagｰfunction` | [*tagｰfunction*](interfaces/tag_function.md) |

**Returns:** [*chainableｰtagｰfunction*](interfaces/chainable_tag_function.md)

a string that interleaves values into the strings array and that removes extraneous blank lines.

Defined in: [Dev/projects/tags/libs/tags.ts:433](https://github.com/jr-grenoble/tags/blob/a1f675c/libs/tags.ts#L433)

▸ `Const` **paragraph**(`stringｰliteralｰorｰexpression`: *string*): *string*

The `paragraph` tag removes duplicate blank lines and returns a set of paragraphs separated by single blank lines.

#### Parameters

| Name | Type |
| :------ | :------ |
| `stringｰliteralｰorｰexpression` | *string* |

**Returns:** *string*

a string that interleaves values into the strings array and that removes extraneous blank lines.

Defined in: [Dev/projects/tags/libs/tags.ts:433](https://github.com/jr-grenoble/tags/blob/a1f675c/libs/tags.ts#L433)

▸ `Const` **paragraph**(`strings`: [*templateｰstrings*](interfaces/template_strings.md), ...`values`: [*printable*](interfaces/printable.md)[]): *string*

The `paragraph` tag removes duplicate blank lines and returns a set of paragraphs separated by single blank lines.

#### Parameters

| Name | Type |
| :------ | :------ |
| `strings` | [*templateｰstrings*](interfaces/template_strings.md) |
| `...values` | [*printable*](interfaces/printable.md)[] |

**Returns:** *string*

a string that interleaves values into the strings array and that removes extraneous blank lines.

Defined in: [Dev/projects/tags/libs/tags.ts:433](https://github.com/jr-grenoble/tags/blob/a1f675c/libs/tags.ts#L433)

___

### pretty

▸ `Const` **pretty**(`strings`: [*templateｰstrings*](interfaces/template_strings.md), ...`values`: [*printable*](interfaces/printable.md)[]): *string*

#### Parameters

| Name | Type |
| :------ | :------ |
| `strings` | [*templateｰstrings*](interfaces/template_strings.md) |
| `...values` | [*printable*](interfaces/printable.md)[] |

**Returns:** *string*

Defined in: [Dev/projects/tags/libs/tags.ts:542](https://github.com/jr-grenoble/tags/blob/a1f675c/libs/tags.ts#L542)

___

### raw

▸ `Const` **raw**(`strings`: [*templateｰstrings*](interfaces/template_strings.md), ...`values`: [*printable*](interfaces/printable.md)[]): *string*

The `raw` tag is identical to [`String.raw`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/raw).
It isn't chainable with other tag functions, because these other
tag functions typically process escape characters. However, if raw is the
only tag or the deepest one (the first to be applied), escape characters
come out unprocessed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `strings` | [*templateｰstrings*](interfaces/template_strings.md) | an array of string literals (this array is equipped with the raw property) |
| `...values` | [*printable*](interfaces/printable.md)[] | - |

**Returns:** *string*

a string that interleaves values into the strings array

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

Defined in: [Dev/projects/tags/libs/tags.ts:427](https://github.com/jr-grenoble/tags/blob/a1f675c/libs/tags.ts#L427)

___

### romanize

▸ `Const` **romanize**(`__namedParameters?`: { `uppercase`:   }): *function*

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `__namedParameters` | *object* | {} |
| `__namedParameters.uppercase` | - | - |

**Returns:** (`n`: *number*, `s?`: *string*) => *string*

Defined in: [Dev/projects/tags/libs/tags.ts:857](https://github.com/jr-grenoble/tags/blob/a1f675c/libs/tags.ts#L857)

___

### wrap

▸ `Const` **wrap**(`n`: *number*): [*chainableｰtagｰfunction*](interfaces/chainable_tag_function.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | *number* |

**Returns:** [*chainableｰtagｰfunction*](interfaces/chainable_tag_function.md)

Defined in: [Dev/projects/tags/libs/tags.ts:571](https://github.com/jr-grenoble/tags/blob/a1f675c/libs/tags.ts#L571)
