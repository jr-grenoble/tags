[Tags](../README.md) / [Exports](../modules.md) / tag

# Interface: tag<T\>

**`example`**
We extend native tag functions so that they can be chained and also so that you can call them on regular strings.
We also allow these new tag functions to be parametrized via [`tagｰoptions`](../modules.md#tagｰoptions)
>
When you compose chaianable tags, the innermost (deepest) tag is applied first, followed by tags of lesser depth,
until the outermost tag is called. For instance, if you log the following expression:

```typescript
 numbering({ prefix: "" })(paragraph(outdent))`
        This is some text with π = ${Math.PI}.
        This line has the same indentation as the previous one.
            This line has deeper indentation.
            This one too. There are 2 blank lines next.

        This line has the initial indentation level.
        And this is the last line.
        `;
```
You get the following console output:
```
 ₁│This is some text with π = 3.141592653589793.
 ₂│
 ₃│This line has the same indentation as the previous one.
 ₄│
 ₅│    This line has deeper indentation.
 ₆│
 ₇│    This one too. There are 2 blank lines next.
 ₈│
 ₉│This line has the initial indentation level.
₁₀│
₁₁│And this is the last line.
```
Let's decompose this. The chainable tags are `numbering({ prefix: "" })(paragraph(outdent))`,
with the deepest tag (at the end of the chain) being the `outdent` tag. Thus the `outdent` tag
is the first to process the template literal.
>
This tag takes a template literal and removes as many spaces from the left of each line as there are in
 the least indented line(this tag is useful to keep code properly indented). In the example above, `outdent`
produces the following output:
```
This is some text with π = 3.141592653589793.
This line has the same indentation as the previous one.
    This line has deeper indentation.
    This one too. There are 2 blank lines next.

This line has the initial indentation level.
And this is the last line.

```
Note that the last line of output is blank, as `outdent` only folds blank lines but doesn't remove trailing ones.
>
Once the `outdent` tag has finished its job (expanding expressions such `Math.PI` in the process), the next tag
in line is the `paragraph` tag. This tag simply takes each line and inserts blank lines around it, then it folds
blank lines and removes trailing blank lines. When passed the previous output, it yields:
```
This is some text with π = 3.141592653589793.

This line has the same indentation as the previous one.

    This line has deeper indentation.

    This one too. There are 2 blank lines next.

This line has the initial indentation level.

And this is the last line.
```
You can see that each input line has become a single paragraph.
>
Finally, the shallowest tag is the `numbering` tag. This tag takes some options, in this case, we tell it
to use an empty prefix before line numbers. Had we not done that, it would have produced the following output:
```
│ ₁│This is some text with π = 3.141592653589793.
│ ₂│
│ ₃│This line has the same indentation as the previous one.
│ ₄│
│ ₅│    This line has deeper indentation.
│ ₆│
│ ₇│    This one too.
│ ₈│
│ ₉│This line has the initial indentation level.
│₁₀│
│₁₁│And this is the last line.
```

Note that we provide 2 syntaxes for tag composition:
1. the one described above, e.g. `numbering(paragraph(outdent))`
2. a flattened one, e.g. the equivalent of the above is ` numbering(paragraph, outdent)`
In both cases, tags apply from right to left, i.e. in the example above, `outdent` applies first,
then `paragraph` applies to the result of `outdent`, and finally, `numbering` applies to the resulting string.

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | [*tagｰoptions*](../modules.md#tagｰoptions) |

## Hierarchy

- [*nativeｰtag*](native_tag.md)

  ↳ **tag**

## Callable

▸ **tag**(`string`: *string*): *any*

#### Parameters

| Name | Type |
| :------ | :------ |
| `string` | *string* |

**Returns:** *any*

Defined in: [Dev/projects/tags/libs/tags.ts:312](https://github.com/jr-grenoble/tags/blob/c325ede/libs/tags.ts#L312)

▸ **tag**(`options?`: T): [*tag*](tag.md)<T\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | T |

**Returns:** [*tag*](tag.md)<T\>

Defined in: [Dev/projects/tags/libs/tags.ts:313](https://github.com/jr-grenoble/tags/blob/c325ede/libs/tags.ts#L313)

▸ **tag**(`tag`: [*nativeｰtag*](native_tag.md), ...`otherｰtags`: [*nativeｰtag*](native_tag.md)[]): [*nativeｰtag*](native_tag.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tag` | [*nativeｰtag*](native_tag.md) |
| `...otherｰtags` | [*nativeｰtag*](native_tag.md)[] |

**Returns:** [*nativeｰtag*](native_tag.md)

Defined in: [Dev/projects/tags/libs/tags.ts:314](https://github.com/jr-grenoble/tags/blob/c325ede/libs/tags.ts#L314)

▸ **tag**(...`args`: [*nativeｰtagｰargs*](../modules.md#nativeｰtagｰargs)): *any*

The `templateｰstrings` array has 1 more element then the `values` rest array. E.g. in the following
call:
```typescript
identity`First value: ${42},\nsecond value: ${Math.PI *2 }`
```
the `identity` tag function receives 3 parameters:
- a `templateｰstrings` parameter equivalent to the following pseudo array:
```typescript
{
   0: `First value: `,
   1: `
   second value: `,
   length: 2,
   raw: {
     0: `First value: `,
     1: `\nsecond value: `,
     length: 2
   }
} : templateｰstrings
```
- two rest parameters corresponding to the following values:
   * 42
   * 6.283185307179586

In fact, a tag function is not forced to return a string, it can return anything.

**`see`** [MDN template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
for more information.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [*nativeｰtagｰargs*](../modules.md#nativeｰtagｰargs) |

**Returns:** *any*

Defined in: [Dev/projects/tags/libs/tags.ts:125](https://github.com/jr-grenoble/tags/blob/c325ede/libs/tags.ts#L125)

## Table of contents

### Properties

- [arguments](tag.md#arguments)
- [caller](tag.md#caller)
- [length](tag.md#length)
- [name](tag.md#name)
- [prototype](tag.md#prototype)

### Methods

- [[Symbol.hasInstance]](tag.md#[symbol.hasinstance])
- [apply](tag.md#apply)
- [bind](tag.md#bind)
- [call](tag.md#call)
- [toString](tag.md#tostring)

## Properties

### arguments

• **arguments**: *any*

Inherited from: [nativeｰtag](native_tag.md).[arguments](native_tag.md#arguments)

Defined in: node_modules/typescript/lib/lib.es5.d.ts:302

___

### caller

• **caller**: Function

Inherited from: [nativeｰtag](native_tag.md).[caller](native_tag.md#caller)

Defined in: node_modules/typescript/lib/lib.es5.d.ts:303

___

### length

• `Readonly` **length**: *number*

Inherited from: [nativeｰtag](native_tag.md).[length](native_tag.md#length)

Defined in: node_modules/typescript/lib/lib.es5.d.ts:299

___

### name

• `Readonly` **name**: *string*

Returns the name of the function. Function names are read-only and can not be changed.

Inherited from: [nativeｰtag](native_tag.md).[name](native_tag.md#name)

Defined in: node_modules/typescript/lib/lib.es2015.core.d.ts:97

___

### prototype

• **prototype**: *any*

Inherited from: [nativeｰtag](native_tag.md).[prototype](native_tag.md#prototype)

Defined in: node_modules/typescript/lib/lib.es5.d.ts:298

## Methods

### [Symbol.hasInstance]

▸ **[Symbol.hasInstance]**(`value`: *any*): *boolean*

Determines whether the given value inherits from this function if this function was used
as a constructor function.

A constructor function can control which objects are recognized as its instances by
'instanceof' by overriding this method.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | *any* |

**Returns:** *boolean*

Inherited from: [nativeｰtag](native_tag.md)

Defined in: node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:162

___

### apply

▸ **apply**(`thisArg`: *any*, `argArray?`: *any*): *any*

Calls the function, substituting the specified object for the this value of the function, and the specified array for the arguments of the function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `thisArg` | *any* | The object to be used as the this object. |
| `argArray?` | *any* | A set of arguments to be passed to the function. |

**Returns:** *any*

Inherited from: [nativeｰtag](native_tag.md)

Defined in: node_modules/typescript/lib/lib.es5.d.ts:278

___

### bind

▸ **bind**(`thisArg`: *any*, ...`argArray`: *any*[]): *any*

For a given function, creates a bound function that has the same body as the original function.
The this object of the bound function is associated with the specified object, and has the specified initial parameters.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `thisArg` | *any* | An object to which the this keyword can refer inside the new function. |
| `...argArray` | *any*[] | A list of arguments to be passed to the new function. |

**Returns:** *any*

Inherited from: [nativeｰtag](native_tag.md)

Defined in: node_modules/typescript/lib/lib.es5.d.ts:293

___

### call

▸ **call**(`thisArg`: *any*, ...`argArray`: *any*[]): *any*

Calls a method of an object, substituting another object for the current object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `thisArg` | *any* | The object to be used as the current object. |
| `...argArray` | *any*[] | A list of arguments to be passed to the method. |

**Returns:** *any*

Inherited from: [nativeｰtag](native_tag.md)

Defined in: node_modules/typescript/lib/lib.es5.d.ts:285

___

### toString

▸ **toString**(): *string*

Returns a string representation of a function.

**Returns:** *string*

Inherited from: [nativeｰtag](native_tag.md)

Defined in: node_modules/typescript/lib/lib.es5.d.ts:296
