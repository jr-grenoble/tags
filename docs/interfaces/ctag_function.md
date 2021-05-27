[Tags](../README.md) / [Exports](../modules.md) / ctagｰfunction

# Interface: ctagｰfunction

## Hierarchy

- [*tagｰfunction*](tag_function.md)

  ↳ **ctagｰfunction**

## Callable

▸ **ctagｰfunction**(`string`: *string*): *any*

#### Parameters

| Name | Type |
| :------ | :------ |
| `string` | *string* |

**Returns:** *any*

Defined in: [Dev/projects/tags/libs/tags.ts:153](https://github.com/jr-grenoble/tags/blob/37448b8/libs/tags.ts#L153)

▸ **ctagｰfunction**(`options?`: tagｰoptions): [*ctagｰfunction*](ctag_function.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | tagｰoptions |

**Returns:** [*ctagｰfunction*](ctag_function.md)

Defined in: [Dev/projects/tags/libs/tags.ts:154](https://github.com/jr-grenoble/tags/blob/37448b8/libs/tags.ts#L154)

▸ **ctagｰfunction**(`tag`: [*tagｰfunction*](tag_function.md)): [*ctagｰfunction*](ctag_function.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tag` | [*tagｰfunction*](tag_function.md) |

**Returns:** [*ctagｰfunction*](ctag_function.md)

Defined in: [Dev/projects/tags/libs/tags.ts:155](https://github.com/jr-grenoble/tags/blob/37448b8/libs/tags.ts#L155)

▸ **ctagｰfunction**(`strings`: [*templateｰstrings*](template_strings.md), ...`values`: [*printable*](printable.md)[]): *any*

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
for more information

#### Parameters

| Name | Type |
| :------ | :------ |
| `strings` | [*templateｰstrings*](template_strings.md) |
| `...values` | [*printable*](printable.md)[] |

**Returns:** *any*

Defined in: [Dev/projects/tags/libs/tags.ts:107](https://github.com/jr-grenoble/tags/blob/37448b8/libs/tags.ts#L107)

## Table of contents

### Properties

- [arguments](ctag_function.md#arguments)
- [caller](ctag_function.md#caller)
- [length](ctag_function.md#length)
- [name](ctag_function.md#name)
- [prototype](ctag_function.md#prototype)

### Methods

- [[Symbol.hasInstance]](ctag_function.md#[symbol.hasinstance])
- [apply](ctag_function.md#apply)
- [bind](ctag_function.md#bind)
- [call](ctag_function.md#call)
- [toString](ctag_function.md#tostring)

## Properties

### arguments

• **arguments**: *any*

Inherited from: [tagｰfunction](tag_function.md).[arguments](tag_function.md#arguments)

Defined in: node_modules/typescript/lib/lib.es5.d.ts:302

___

### caller

• **caller**: Function

Inherited from: [tagｰfunction](tag_function.md).[caller](tag_function.md#caller)

Defined in: node_modules/typescript/lib/lib.es5.d.ts:303

___

### length

• `Readonly` **length**: *number*

Inherited from: [tagｰfunction](tag_function.md).[length](tag_function.md#length)

Defined in: node_modules/typescript/lib/lib.es5.d.ts:299

___

### name

• `Readonly` **name**: *string*

Returns the name of the function. Function names are read-only and can not be changed.

Inherited from: [tagｰfunction](tag_function.md).[name](tag_function.md#name)

Defined in: node_modules/typescript/lib/lib.es2015.core.d.ts:97

___

### prototype

• **prototype**: *any*

Inherited from: [tagｰfunction](tag_function.md).[prototype](tag_function.md#prototype)

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

Inherited from: [tagｰfunction](tag_function.md)

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

Inherited from: [tagｰfunction](tag_function.md)

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

Inherited from: [tagｰfunction](tag_function.md)

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

Inherited from: [tagｰfunction](tag_function.md)

Defined in: node_modules/typescript/lib/lib.es5.d.ts:285

___

### toString

▸ **toString**(): *string*

Returns a string representation of a function.

**Returns:** *string*

Inherited from: [tagｰfunction](tag_function.md)

Defined in: node_modules/typescript/lib/lib.es5.d.ts:296