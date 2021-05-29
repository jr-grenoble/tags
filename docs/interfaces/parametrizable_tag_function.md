[Tags](../README.md) / [Exports](../modules.md) / parametrizableｰtagｰfunction

# Interface: parametrizableｰtagｰfunction<parameterｰtype\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `parameterｰtype` | *object* |

## Hierarchy

- [*callableｰtagｰfunction*](callable_tag_function.md)

  ↳ **parametrizableｰtagｰfunction**

## Callable

▸ **parametrizableｰtagｰfunction**(`params?`: parameterｰtype): [*parametrizableｰtagｰfunction*](parametrizable_tag_function.md)<parameterｰtype\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `params?` | parameterｰtype |

**Returns:** [*parametrizableｰtagｰfunction*](parametrizable_tag_function.md)<parameterｰtype\>

Defined in: [Dev/projects/tags/libs/tags.ts:344](https://github.com/jr-grenoble/tags/blob/6250c7b/libs/tags.ts#L344)

▸ **parametrizableｰtagｰfunction**(`stringｰliteralｰorｰexpression`: *string*): *any*

#### Parameters

| Name | Type |
| :------ | :------ |
| `stringｰliteralｰorｰexpression` | *string* |

**Returns:** *any*

Defined in: [Dev/projects/tags/libs/tags.ts:279](https://github.com/jr-grenoble/tags/blob/6250c7b/libs/tags.ts#L279)

▸ **parametrizableｰtagｰfunction**(`strings`: [*templateｰstrings*](template_strings.md), ...`values`: [*printable*](printable.md)[]): *any*

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
| `strings` | [*templateｰstrings*](template_strings.md) |
| `...values` | [*printable*](printable.md)[] |

**Returns:** *any*

Defined in: [Dev/projects/tags/libs/tags.ts:117](https://github.com/jr-grenoble/tags/blob/6250c7b/libs/tags.ts#L117)

## Table of contents

### Properties

- [actualｰparameters](parametrizable_tag_function.md#actualｰparameters)
- [arguments](parametrizable_tag_function.md#arguments)
- [callable](parametrizable_tag_function.md#callable)
- [caller](parametrizable_tag_function.md#caller)
- [defaultｰparameters](parametrizable_tag_function.md#defaultｰparameters)
- [length](parametrizable_tag_function.md#length)
- [name](parametrizable_tag_function.md#name)
- [parametrizable](parametrizable_tag_function.md#parametrizable)
- [prototype](parametrizable_tag_function.md#prototype)

### Methods

- [[Symbol.hasInstance]](parametrizable_tag_function.md#[symbol.hasinstance])
- [apply](parametrizable_tag_function.md#apply)
- [bind](parametrizable_tag_function.md#bind)
- [call](parametrizable_tag_function.md#call)
- [toString](parametrizable_tag_function.md#tostring)

## Properties

### actualｰparameters

• `Optional` **actualｰparameters**: parameterｰtype

Defined in: [Dev/projects/tags/libs/tags.ts:348](https://github.com/jr-grenoble/tags/blob/6250c7b/libs/tags.ts#L348)

___

### arguments

• **arguments**: *any*

Inherited from: [callableｰtagｰfunction](callable_tag_function.md).[arguments](callable_tag_function.md#arguments)

Defined in: node_modules/typescript/lib/lib.es5.d.ts:302

___

### callable

• **callable**: *boolean*

Inherited from: [callableｰtagｰfunction](callable_tag_function.md).[callable](callable_tag_function.md#callable)

Defined in: [Dev/projects/tags/libs/tags.ts:281](https://github.com/jr-grenoble/tags/blob/6250c7b/libs/tags.ts#L281)

___

### caller

• **caller**: Function

Inherited from: [callableｰtagｰfunction](callable_tag_function.md).[caller](callable_tag_function.md#caller)

Defined in: node_modules/typescript/lib/lib.es5.d.ts:303

___

### defaultｰparameters

• **defaultｰparameters**: parameterｰtype

Defined in: [Dev/projects/tags/libs/tags.ts:347](https://github.com/jr-grenoble/tags/blob/6250c7b/libs/tags.ts#L347)

___

### length

• `Readonly` **length**: *number*

Inherited from: [callableｰtagｰfunction](callable_tag_function.md).[length](callable_tag_function.md#length)

Defined in: node_modules/typescript/lib/lib.es5.d.ts:299

___

### name

• `Readonly` **name**: *string*

Returns the name of the function. Function names are read-only and can not be changed.

Inherited from: [callableｰtagｰfunction](callable_tag_function.md).[name](callable_tag_function.md#name)

Defined in: node_modules/typescript/lib/lib.es2015.core.d.ts:97

___

### parametrizable

• **parametrizable**: *boolean*

Defined in: [Dev/projects/tags/libs/tags.ts:346](https://github.com/jr-grenoble/tags/blob/6250c7b/libs/tags.ts#L346)

___

### prototype

• **prototype**: *any*

Inherited from: [callableｰtagｰfunction](callable_tag_function.md).[prototype](callable_tag_function.md#prototype)

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

Inherited from: [callableｰtagｰfunction](callable_tag_function.md)

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

Inherited from: [callableｰtagｰfunction](callable_tag_function.md)

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

Inherited from: [callableｰtagｰfunction](callable_tag_function.md)

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

Inherited from: [callableｰtagｰfunction](callable_tag_function.md)

Defined in: node_modules/typescript/lib/lib.es5.d.ts:285

___

### toString

▸ **toString**(): *string*

Returns a string representation of a function.

**Returns:** *string*

Inherited from: [callableｰtagｰfunction](callable_tag_function.md)

Defined in: node_modules/typescript/lib/lib.es5.d.ts:296
