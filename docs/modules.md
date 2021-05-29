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
| [`nativeｰtag`](interfaces/native_tag.md)            | A function that can be applied to a template string, i.e. that can prefix such a string                        |
| [`templateｰstrings`](interfaces/template_strings.md)      | An array of readonly strings, augmented with a raw property to iterate over raw equivalent of these strings    |
| [`printable`](interfaces/printable.md)             | Any expression that produces a printable result, i.e. that can be called with `.toString()`                    |
| [`numberingｰoptions`](modules.md#numberingｰoptions)     | A set of options that allows control of the `numbering` tag as well as of `numberingｰcounter` objects          |

## Table of contents

### Classes

- [numberingｰcounter](classes/numbering_counter.md)

### Interfaces

- [callableｰtagｰfunction](interfaces/callable_tag_function.md)
- [chainableｰtagｰfunction](interfaces/chainable_tag_function.md)
- [nativeｰtag](interfaces/native_tag.md)
- [parametrizableｰtagｰfunction](interfaces/parametrizable_tag_function.md)
- [printable](interfaces/printable.md)
- [tag](interfaces/tag.md)
- [templateｰstrings](interfaces/template_strings.md)

### Type aliases

- [numberingｰoptions](modules.md#numberingｰoptions)
- [tagｰoptions](modules.md#tagｰoptions)

### Variables

- [bold](modules.md#bold)
- [boldｰsans](modules.md#boldｰsans)
- [defaultｰtagｰoptions](modules.md#defaultｰtagｰoptions)
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
- [makeｰparametrizable](modules.md#makeｰparametrizable)
- [makeｰtag](modules.md#makeｰtag)
- [maxｰpaddingｰwidth](modules.md#maxｰpaddingｰwidth)
- [numbering](modules.md#numbering)
- [rename](modules.md#rename)
- [romanize](modules.md#romanize)
- [wrap](modules.md#wrap)

## Type aliases

### numberingｰoptions

Ƭ **numberingｰoptions**: [*tagｰoptions*](modules.md#tagｰoptions) & { `numberingｰscheme?`: keyof *typeof* [*numberingｰschemes*](modules.md#numberingｰschemes) ; `numberｰfrom?`: *number* ; `padｰwidth?`: *number* ; `padｰwith?`: *string* \| *number* ; `padｰzeroｰwith?`: *string* \| *number* ; `prefix?`: *string* ; `prefixｰzero?`: *string* ; `signｰall?`: *boolean* ; `suffix?`: *string* ; `suffixｰzero?`: *string*  }

When creating a [`numberingｰcounter`](classes/numbering_counter.md), we pass it severall options, cf. detailed properties.

Defined in: [Dev/projects/tags/libs/tags.ts:527](https://github.com/jr-grenoble/tags/blob/6250c7b/libs/tags.ts#L527)

___

### tagｰoptions

Ƭ **tagｰoptions**: *boolean* \| *number* \| { `foldｰblankｰlinesʔ̣?`: *boolean* ; `lineｰjoiner?`: *string* ; `whiteｰspace?`: RegExp  }

Tag options combine structured tag settings with boolean and number simple types.
The string type is not included in these simple types because:
- we use numeric pseudo enums to represemt options
- we want tags to operate on strings the same way they do on template literals.

When a tag requires additional options, it defines a type that extends `tagｰoptions`,
and it creates a new default option constant, e.g. as:

```typescript
type numberingｰoptions = tagｰoptions & {
   readonly numberｰfrom?: number;
   // … additional properties must be readonly and optional
}

const defaultｰnumberingｰoptions : numberingｰoptions = {
   ...defaultｰtagｰoptions,
   {
     numberｰfrom: 1,
     // … other defaults
   }
}
```

Defined in: [Dev/projects/tags/libs/tags.ts:174](https://github.com/jr-grenoble/tags/blob/6250c7b/libs/tags.ts#L174)

## Variables

### bold

• `Const` **bold**: [*chainableｰtagｰfunction*](interfaces/chainable_tag_function.md)

Defined in: [Dev/projects/tags/libs/tags.ts:1114](https://github.com/jr-grenoble/tags/blob/6250c7b/libs/tags.ts#L1114)

___

### boldｰsans

• `Const` **boldｰsans**: [*chainableｰtagｰfunction*](interfaces/chainable_tag_function.md)

Defined in: [Dev/projects/tags/libs/tags.ts:1117](https://github.com/jr-grenoble/tags/blob/6250c7b/libs/tags.ts#L1117)

___

### defaultｰtagｰoptions

• `Const` **defaultｰtagｰoptions**: [*tagｰoptions*](modules.md#tagｰoptions)

Default tag settings, used to initialize tag options in tag functions
See the [`tagｰoptions`](modules.md#tagｰoptions) interface for definitions as well as
for how to extend options and defaults.

Defined in: [Dev/projects/tags/libs/tags.ts:188](https://github.com/jr-grenoble/tags/blob/6250c7b/libs/tags.ts#L188)

___

### flush

• `Const` **flush**: [*chainableｰtagｰfunction*](interfaces/chainable_tag_function.md)

The `flush`tag removes all leading spaces (flushes text left).

**`see`** [outdent](modules.md#outdent) to remove only the first level of indentation.

Defined in: [Dev/projects/tags/libs/tags.ts:736](https://github.com/jr-grenoble/tags/blob/6250c7b/libs/tags.ts#L736)

___

### fold

• `Const` **fold**: [*chainableｰtagｰfunction*](interfaces/chainable_tag_function.md)

The `fold` tag removes line breaks. If you want to remove first level indentation too,

**`see`** [outdent](modules.md#outdent) to remove first level indentation, e.g. with `fold(outdent)`

**`see`** [flush](modules.md#flush) to remove all indentation, e.g. with `fold(flush)`.

Defined in: [Dev/projects/tags/libs/tags.ts:726](https://github.com/jr-grenoble/tags/blob/6250c7b/libs/tags.ts#L726)

___

### fraktur

• `Const` **fraktur**: [*chainableｰtagｰfunction*](interfaces/chainable_tag_function.md)

Defined in: [Dev/projects/tags/libs/tags.ts:1116](https://github.com/jr-grenoble/tags/blob/6250c7b/libs/tags.ts#L1116)

___

### identity

• `Const` **identity**: [*chainableｰtagｰfunction*](interfaces/chainable_tag_function.md)

The identity tag is not very useful, except to zip strings and values together.
This module uses it internally to stitch string literals and substitution expression.

**`returns`** a string that interleaves values into the strings array

Defined in: [Dev/projects/tags/libs/tags.ts:666](https://github.com/jr-grenoble/tags/blob/6250c7b/libs/tags.ts#L666)

___

### italic

• `Const` **italic**: [*chainableｰtagｰfunction*](interfaces/chainable_tag_function.md)

Defined in: [Dev/projects/tags/libs/tags.ts:1115](https://github.com/jr-grenoble/tags/blob/6250c7b/libs/tags.ts#L1115)

___

### json

• `Const` **json**: [*nativeｰtag*](interfaces/native_tag.md)

Defined in: [Dev/projects/tags/libs/tags.ts:822](https://github.com/jr-grenoble/tags/blob/6250c7b/libs/tags.ts#L822)

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

Defined in: [Dev/projects/tags/libs/tags.ts:1197](https://github.com/jr-grenoble/tags/blob/6250c7b/libs/tags.ts#L1197)

___

### numberｰlines

• `Const` **numberｰlines**: [*chainableｰtagｰfunction*](interfaces/chainable_tag_function.md)

Defined in: [Dev/projects/tags/libs/tags.ts:1341](https://github.com/jr-grenoble/tags/blob/6250c7b/libs/tags.ts#L1341)

___

### outdent

• `Const` **outdent**: [*chainableｰtagｰfunction*](interfaces/chainable_tag_function.md)

The `outdent`tag removes first level indentation.

**`see`** [flush](modules.md#flush) to remove all indentation.

Defined in: [Dev/projects/tags/libs/tags.ts:748](https://github.com/jr-grenoble/tags/blob/6250c7b/libs/tags.ts#L748)

___

### paragraph

• `Const` **paragraph**: [*chainableｰtagｰfunction*](interfaces/chainable_tag_function.md)

The `paragraph` tag removes duplicate blank lines and returns a set of paragraphs separated by single blank lines.

**`returns`** a string that interleaves values into the strings array and that removes extraneous blank lines.

Defined in: [Dev/projects/tags/libs/tags.ts:712](https://github.com/jr-grenoble/tags/blob/6250c7b/libs/tags.ts#L712)

___

### pretty

• `Const` **pretty**: [*nativeｰtag*](interfaces/native_tag.md)

Defined in: [Dev/projects/tags/libs/tags.ts:821](https://github.com/jr-grenoble/tags/blob/6250c7b/libs/tags.ts#L821)

___

### raw

• `Const` **raw**: [*nativeｰtag*](interfaces/native_tag.md)

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

Defined in: [Dev/projects/tags/libs/tags.ts:706](https://github.com/jr-grenoble/tags/blob/6250c7b/libs/tags.ts#L706)

___

### serialize

• `Const` **serialize**: [*tag*](interfaces/tag.md)<serializeｰoptions\>

Defined in: [Dev/projects/tags/libs/tags.ts:291](https://github.com/jr-grenoble/tags/blob/6250c7b/libs/tags.ts#L291)

## Functions

### alphabetize

▸ `Const` **alphabetize**(`__namedParameters?`: { `uppercase`:   }): *function*

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `__namedParameters` | *object* | {} |
| `__namedParameters.uppercase` | - | - |

**Returns:** (`n`: *number*, `s?`: *string*) => *string*

Defined in: [Dev/projects/tags/libs/tags.ts:1119](https://github.com/jr-grenoble/tags/blob/6250c7b/libs/tags.ts#L1119)

___

### arabize

▸ `Const` **arabize**(`__namedParameters?`: { `big`:   }): *function*

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `__namedParameters` | *object* | {} |
| `__namedParameters.big` | - | - |

**Returns:** (`n`: *number*) => *string*

Defined in: [Dev/projects/tags/libs/tags.ts:1176](https://github.com/jr-grenoble/tags/blob/6250c7b/libs/tags.ts#L1176)

___

### format

▸ `Const` **format**(`format`: *string*): [*chainableｰtagｰfunction*](interfaces/chainable_tag_function.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `format` | *string* |

**Returns:** [*chainableｰtagｰfunction*](interfaces/chainable_tag_function.md)

Defined in: [Dev/projects/tags/libs/tags.ts:1097](https://github.com/jr-grenoble/tags/blob/6250c7b/libs/tags.ts#L1097)

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

Defined in: [Dev/projects/tags/libs/tags.ts:762](https://github.com/jr-grenoble/tags/blob/6250c7b/libs/tags.ts#L762)

___

### jsonize

▸ `Const` **jsonize**(`__namedParameters?`: jsonｰoptions): [*nativeｰtag*](interfaces/native_tag.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `__namedParameters` | jsonｰoptions | {} |

**Returns:** [*nativeｰtag*](interfaces/native_tag.md)

Defined in: [Dev/projects/tags/libs/tags.ts:792](https://github.com/jr-grenoble/tags/blob/6250c7b/libs/tags.ts#L792)

___

### makeｰcallable

▸ `Const` **makeｰcallable**(`tag`: [*nativeｰtag*](interfaces/native_tag.md)): [*callableｰtagｰfunction*](interfaces/callable_tag_function.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tag` | [*nativeｰtag*](interfaces/native_tag.md) |

**Returns:** [*callableｰtagｰfunction*](interfaces/callable_tag_function.md)

Defined in: [Dev/projects/tags/libs/tags.ts:322](https://github.com/jr-grenoble/tags/blob/6250c7b/libs/tags.ts#L322)

___

### makeｰparametrizable

▸ `Const` **makeｰparametrizable**<parameterｰtype\>(`parametrizableｰtag`: (`params`: parameterｰtype) => [*nativeｰtag*](interfaces/native_tag.md), `defaultｰparameters`: parameterｰtype): [*parametrizableｰtagｰfunction*](interfaces/parametrizable_tag_function.md)<parameterｰtype\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `parameterｰtype` | *object* |

#### Parameters

| Name | Type |
| :------ | :------ |
| `parametrizableｰtag` | (`params`: parameterｰtype) => [*nativeｰtag*](interfaces/native_tag.md) |
| `defaultｰparameters` | parameterｰtype |

**Returns:** [*parametrizableｰtagｰfunction*](interfaces/parametrizable_tag_function.md)<parameterｰtype\>

Defined in: [Dev/projects/tags/libs/tags.ts:351](https://github.com/jr-grenoble/tags/blob/6250c7b/libs/tags.ts#L351)

___

### makeｰtag

▸ `Const` **makeｰtag**<T\>(`tag`: (`options?`: T) => [*nativeｰtag*](interfaces/native_tag.md), `defaults`: T): [*tag*](interfaces/tag.md)<T\>

**`todo`** thoroughly document!!!

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [*tagｰoptions*](modules.md#tagｰoptions) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `tag` | (`options?`: T) => [*nativeｰtag*](interfaces/native_tag.md) |
| `defaults` | T |

**Returns:** [*tag*](interfaces/tag.md)<T\>

Defined in: [Dev/projects/tags/libs/tags.ts:237](https://github.com/jr-grenoble/tags/blob/6250c7b/libs/tags.ts#L237)

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

Defined in: [Dev/projects/tags/libs/tags.ts:1206](https://github.com/jr-grenoble/tags/blob/6250c7b/libs/tags.ts#L1206)

___

### numbering

▸ `Const` **numbering**(`options?`: [*numberingｰoptions*](modules.md#numberingｰoptions)): [*chainableｰtagｰfunction*](interfaces/chainable_tag_function.md)

The `numbering` tag adds numbering to each line.

**`see`** [outdent](modules.md#outdent) and [flush](modules.md#flush) for related functions.

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `options` | [*numberingｰoptions*](modules.md#numberingｰoptions) | {} |

**Returns:** [*chainableｰtagｰfunction*](interfaces/chainable_tag_function.md)

numbered lines

Defined in: [Dev/projects/tags/libs/tags.ts:1309](https://github.com/jr-grenoble/tags/blob/6250c7b/libs/tags.ts#L1309)

___

### rename

▸ `Const` **rename**<type\>(`object`: type, `name`: *string*): type

Rename anything that has a name

#### Type parameters

| Name | Type |
| :------ | :------ |
| `type` | *object* |
| `type.name` | *string* |

#### Parameters

| Name | Type |
| :------ | :------ |
| `object` | type |
| `name` | *string* |

**Returns:** type

the modified object or function

Note that this `rename` uses `Object.defineProperty` to set the name property of its target.
This allows it to modify function names, cf.
[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name#inferred_function_names)

Defined in: [Dev/projects/tags/libs/tags.ts:212](https://github.com/jr-grenoble/tags/blob/6250c7b/libs/tags.ts#L212)

___

### romanize

▸ `Const` **romanize**(`__namedParameters?`: { `uppercase`:   }): *function*

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `__namedParameters` | *object* | {} |
| `__namedParameters.uppercase` | - | - |

**Returns:** (`n`: *number*, `s?`: *string*) => *string*

Defined in: [Dev/projects/tags/libs/tags.ts:1136](https://github.com/jr-grenoble/tags/blob/6250c7b/libs/tags.ts#L1136)

___

### wrap

▸ `Const` **wrap**(`n`: *number*): [*chainableｰtagｰfunction*](interfaces/chainable_tag_function.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | *number* |

**Returns:** [*chainableｰtagｰfunction*](interfaces/chainable_tag_function.md)

Defined in: [Dev/projects/tags/libs/tags.ts:850](https://github.com/jr-grenoble/tags/blob/6250c7b/libs/tags.ts#L850)
