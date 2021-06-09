[Tags](../README.md) / [Exports](../modules.md) / nativeｰtag

# Interface: nativeｰtag

Native tag functions prefix template literals and access their constituents before processing them.
>
A native tag function must conforms to this interface. It gets template literal components via
a `templateｰstrings` array along with a series of 'printable' expressions. The `templateｰstrings`
array iterates over the string literals that surround printable `${expressions}`. By default, these
string literals are processed for escape characters such as \n for newlines, but the array is
augmented with a `raw` property that contains the unprocessed literals.

## Hierarchy

- *Function*

  ↳ **nativeｰtag**

  ↳↳ [*tag*](tag.md)

  ↳↳ [*callableｰtagｰfunction*](callable_tag_function.md)

  ↳↳ [*chainableｰtagｰfunction*](chainable_tag_function.md)

## Callable

▸ **nativeｰtag**(...`args`: [*nativeｰtagｰargs*](../modules.md#nativeｰtagｰargs)): *any*

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

Defined in: [Dev/projects/tags/libs/tags.ts:125](https://github.com/jr-grenoble/tags/blob/75a1afd/libs/tags.ts#L125)

## Table of contents

### Properties

- [arguments](native_tag.md#arguments)
- [caller](native_tag.md#caller)
- [length](native_tag.md#length)
- [name](native_tag.md#name)
- [prototype](native_tag.md#prototype)

### Methods

- [[Symbol.hasInstance]](native_tag.md#[symbol.hasinstance])
- [apply](native_tag.md#apply)
- [bind](native_tag.md#bind)
- [call](native_tag.md#call)
- [toString](native_tag.md#tostring)

## Properties

### arguments

• **arguments**: *any*

Inherited from: Function.arguments

Defined in: node_modules/typescript/lib/lib.es5.d.ts:302

___

### caller

• **caller**: Function

Inherited from: Function.caller

Defined in: node_modules/typescript/lib/lib.es5.d.ts:303

___

### length

• `Readonly` **length**: *number*

Inherited from: Function.length

Defined in: node_modules/typescript/lib/lib.es5.d.ts:299

___

### name

• `Readonly` **name**: *string*

Returns the name of the function. Function names are read-only and can not be changed.

Inherited from: Function.name

Defined in: node_modules/typescript/lib/lib.es2015.core.d.ts:97

___

### prototype

• **prototype**: *any*

Inherited from: Function.prototype

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

Inherited from: Function.\_\_@hasInstance

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

Inherited from: Function.apply

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

Inherited from: Function.bind

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

Inherited from: Function.call

Defined in: node_modules/typescript/lib/lib.es5.d.ts:285

___

### toString

▸ **toString**(): *string*

Returns a string representation of a function.

**Returns:** *string*

Inherited from: Function.toString

Defined in: node_modules/typescript/lib/lib.es5.d.ts:296
