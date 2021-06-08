[Tags](../README.md) / [Exports](../modules.md) / templateｰstrings

# Interface: templateｰstrings

The `templateｰstrings` type is basically an array of readonly strings augmented with a raw property that stores
the same string literals unprocessed for escape sequence.

## Hierarchy

- *TemplateStringsArray*

  ↳ **templateｰstrings**

## Table of contents

### Properties

- [length](template_strings.md#length)
- [raw](template_strings.md#raw)

### Methods

- [[Symbol.iterator]](template_strings.md#[symbol.iterator])
- [concat](template_strings.md#concat)
- [entries](template_strings.md#entries)
- [every](template_strings.md#every)
- [filter](template_strings.md#filter)
- [find](template_strings.md#find)
- [findIndex](template_strings.md#findindex)
- [flat](template_strings.md#flat)
- [flatMap](template_strings.md#flatmap)
- [forEach](template_strings.md#foreach)
- [includes](template_strings.md#includes)
- [indexOf](template_strings.md#indexof)
- [join](template_strings.md#join)
- [keys](template_strings.md#keys)
- [lastIndexOf](template_strings.md#lastindexof)
- [map](template_strings.md#map)
- [reduce](template_strings.md#reduce)
- [reduceRight](template_strings.md#reduceright)
- [slice](template_strings.md#slice)
- [some](template_strings.md#some)
- [toLocaleString](template_strings.md#tolocalestring)
- [toString](template_strings.md#tostring)
- [values](template_strings.md#values)

## Properties

### length

• `Readonly` **length**: *number*

Gets the length of the array. This is a number one higher than the highest element defined in an array.

Inherited from: TemplateStringsArray.length

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1090

___

### raw

• **raw**: readonly *string*[]

Overrides: TemplateStringsArray.raw

Defined in: [Dev/projects/tags/libs/tags.ts:102](https://github.com/jr-grenoble/tags/blob/cb7d4c8/libs/tags.ts#L102)

## Methods

### [Symbol.iterator]

▸ **[Symbol.iterator]**(): *IterableIterator*<string\>

Iterator of values in the array.

**Returns:** *IterableIterator*<string\>

Inherited from: TemplateStringsArray.\_\_@iterator

Defined in: node_modules/typescript/lib/lib.es2015.iterable.d.ts:96

___

### concat

▸ **concat**(...`items`: *ConcatArray*<string\>[]): *string*[]

Combines two or more arrays.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | *ConcatArray*<string\>[] | Additional items to add to the end of array1. |

**Returns:** *string*[]

Inherited from: TemplateStringsArray.concat

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1103

▸ **concat**(...`items`: (*string* \| *ConcatArray*<string\>)[]): *string*[]

Combines two or more arrays.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | (*string* \| *ConcatArray*<string\>)[] | Additional items to add to the end of array1. |

**Returns:** *string*[]

Inherited from: TemplateStringsArray.concat

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1108

___

### entries

▸ **entries**(): *IterableIterator*<[*number*, *string*]\>

Returns an iterable of key, value pairs for every entry in the array

**Returns:** *IterableIterator*<[*number*, *string*]\>

Inherited from: TemplateStringsArray.entries

Defined in: node_modules/typescript/lib/lib.es2015.iterable.d.ts:101

___

### every

▸ **every**<S\>(`predicate`: (`value`: *string*, `index`: *number*, `array`: readonly *string*[]) => value is S, `thisArg?`: *any*): this is readonly S[]

Determines whether all the members of an array satisfy the specified test.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | *string* |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: *string*, `index`: *number*, `array`: readonly *string*[]) => value is S | A function that accepts up to three arguments. The every method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value false, or until the end of the array. |
| `thisArg?` | *any* | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

**Returns:** this is readonly S[]

Inherited from: TemplateStringsArray.every

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1140

▸ **every**(`predicate`: (`value`: *string*, `index`: *number*, `array`: readonly *string*[]) => *unknown*, `thisArg?`: *any*): *boolean*

Determines whether all the members of an array satisfy the specified test.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: *string*, `index`: *number*, `array`: readonly *string*[]) => *unknown* | A function that accepts up to three arguments. The every method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value false, or until the end of the array. |
| `thisArg?` | *any* | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

**Returns:** *boolean*

Inherited from: TemplateStringsArray.every

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1149

___

### filter

▸ **filter**<S\>(`predicate`: (`value`: *string*, `index`: *number*, `array`: readonly *string*[]) => value is S, `thisArg?`: *any*): S[]

Returns the elements of an array that meet the condition specified in a callback function.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | *string* |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: *string*, `index`: *number*, `array`: readonly *string*[]) => value is S | A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array. |
| `thisArg?` | *any* | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

**Returns:** S[]

Inherited from: TemplateStringsArray.filter

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1176

▸ **filter**(`predicate`: (`value`: *string*, `index`: *number*, `array`: readonly *string*[]) => *unknown*, `thisArg?`: *any*): *string*[]

Returns the elements of an array that meet the condition specified in a callback function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: *string*, `index`: *number*, `array`: readonly *string*[]) => *unknown* | A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array. |
| `thisArg?` | *any* | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

**Returns:** *string*[]

Inherited from: TemplateStringsArray.filter

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1182

___

### find

▸ **find**<S\>(`predicate`: (`value`: *string*, `index`: *number*, `obj`: readonly *string*[]) => value is S, `thisArg?`: *any*): *undefined* \| S

Returns the value of the first element in the array where predicate is true, and undefined
otherwise.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | *string* |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: *string*, `index`: *number*, `obj`: readonly *string*[]) => value is S | find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, find immediately returns that element value. Otherwise, find returns undefined. |
| `thisArg?` | *any* | If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead. |

**Returns:** *undefined* \| S

Inherited from: TemplateStringsArray.find

Defined in: node_modules/typescript/lib/lib.es2015.core.d.ts:352

▸ **find**(`predicate`: (`value`: *string*, `index`: *number*, `obj`: readonly *string*[]) => *unknown*, `thisArg?`: *any*): *undefined* \| *string*

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`value`: *string*, `index`: *number*, `obj`: readonly *string*[]) => *unknown* |
| `thisArg?` | *any* |

**Returns:** *undefined* \| *string*

Inherited from: TemplateStringsArray.find

Defined in: node_modules/typescript/lib/lib.es2015.core.d.ts:353

___

### findIndex

▸ **findIndex**(`predicate`: (`value`: *string*, `index`: *number*, `obj`: readonly *string*[]) => *unknown*, `thisArg?`: *any*): *number*

Returns the index of the first element in the array where predicate is true, and -1
otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: *string*, `index`: *number*, `obj`: readonly *string*[]) => *unknown* | find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, findIndex immediately returns that element index. Otherwise, findIndex returns -1. |
| `thisArg?` | *any* | If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead. |

**Returns:** *number*

Inherited from: TemplateStringsArray.findIndex

Defined in: node_modules/typescript/lib/lib.es2015.core.d.ts:364

___

### flat

▸ **flat**<A, D\>(`depth?`: D): *FlatArray*<A, D\>[]

Returns a new array with all sub-array elements concatenated into it recursively up to the
specified depth.

#### Type parameters

| Name | Type | Default |
| :------ | :------ | :------ |
| `A` | - | - |
| `D` | *number* | ``1`` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `depth?` | D | The maximum recursion depth |

**Returns:** *FlatArray*<A, D\>[]

Inherited from: TemplateStringsArray.flat

Defined in: node_modules/typescript/lib/lib.es2019.array.d.ts:52

___

### flatMap

▸ **flatMap**<U, This\>(`callback`: (`value`: *string*, `index`: *number*, `array`: *string*[]) => U \| readonly U[], `thisArg?`: This): U[]

Calls a defined callback function on each element of an array. Then, flattens the result into
a new array.
This is identical to a map followed by flat with depth 1.

#### Type parameters

| Name | Default |
| :------ | :------ |
| `U` | - |
| `This` | *undefined* |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | (`value`: *string*, `index`: *number*, `array`: *string*[]) => U \| readonly U[] | A function that accepts up to three arguments. The flatMap method calls the callback function one time for each element in the array. |
| `thisArg?` | This | An object to which the this keyword can refer in the callback function. If thisArg is omitted, undefined is used as the this value. |

**Returns:** U[]

Inherited from: TemplateStringsArray.flatMap

Defined in: node_modules/typescript/lib/lib.es2019.array.d.ts:40

___

### forEach

▸ **forEach**(`callbackfn`: (`value`: *string*, `index`: *number*, `array`: readonly *string*[]) => *void*, `thisArg?`: *any*): *void*

Performs the specified action for each element in an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`value`: *string*, `index`: *number*, `array`: readonly *string*[]) => *void* | A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array. |
| `thisArg?` | *any* | An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

**Returns:** *void*

Inherited from: TemplateStringsArray.forEach

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1164

___

### includes

▸ **includes**(`searchElement`: *string*, `fromIndex?`: *number*): *boolean*

Determines whether an array includes a certain element, returning true or false as appropriate.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchElement` | *string* | The element to search for. |
| `fromIndex?` | *number* | The position in this array at which to begin searching for searchElement. |

**Returns:** *boolean*

Inherited from: TemplateStringsArray.includes

Defined in: node_modules/typescript/lib/lib.es2016.array.include.d.ts:36

___

### indexOf

▸ **indexOf**(`searchElement`: *string*, `fromIndex?`: *number*): *number*

Returns the index of the first occurrence of a value in an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchElement` | *string* | The value to locate in the array. |
| `fromIndex?` | *number* | The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0. |

**Returns:** *number*

Inherited from: TemplateStringsArray.indexOf

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1125

___

### join

▸ **join**(`separator?`: *string*): *string*

Adds all the elements of an array separated by the specified separator string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `separator?` | *string* | A string used to separate one element of an array from the next in the resulting String. If omitted, the array elements are separated with a comma. |

**Returns:** *string*

Inherited from: TemplateStringsArray.join

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1113

___

### keys

▸ **keys**(): *IterableIterator*<number\>

Returns an iterable of keys in the array

**Returns:** *IterableIterator*<number\>

Inherited from: TemplateStringsArray.keys

Defined in: node_modules/typescript/lib/lib.es2015.iterable.d.ts:106

___

### lastIndexOf

▸ **lastIndexOf**(`searchElement`: *string*, `fromIndex?`: *number*): *number*

Returns the index of the last occurrence of a specified value in an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchElement` | *string* | The value to locate in the array. |
| `fromIndex?` | *number* | The array index at which to begin the search. If fromIndex is omitted, the search starts at the last index in the array. |

**Returns:** *number*

Inherited from: TemplateStringsArray.lastIndexOf

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1131

___

### map

▸ **map**<U\>(`callbackfn`: (`value`: *string*, `index`: *number*, `array`: readonly *string*[]) => U, `thisArg?`: *any*): U[]

Calls a defined callback function on each element of an array, and returns an array that contains the results.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`value`: *string*, `index`: *number*, `array`: readonly *string*[]) => U | A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array. |
| `thisArg?` | *any* | An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

**Returns:** U[]

Inherited from: TemplateStringsArray.map

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1170

___

### reduce

▸ **reduce**(`callbackfn`: (`previousValue`: *string*, `currentValue`: *string*, `currentIndex`: *number*, `array`: readonly *string*[]) => *string*): *string*

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: *string*, `currentValue`: *string*, `currentIndex`: *number*, `array`: readonly *string*[]) => *string* | A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array. |

**Returns:** *string*

Inherited from: TemplateStringsArray.reduce

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1188

▸ **reduce**(`callbackfn`: (`previousValue`: *string*, `currentValue`: *string*, `currentIndex`: *number*, `array`: readonly *string*[]) => *string*, `initialValue`: *string*): *string*

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`previousValue`: *string*, `currentValue`: *string*, `currentIndex`: *number*, `array`: readonly *string*[]) => *string* |
| `initialValue` | *string* |

**Returns:** *string*

Inherited from: TemplateStringsArray.reduce

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1189

▸ **reduce**<U\>(`callbackfn`: (`previousValue`: U, `currentValue`: *string*, `currentIndex`: *number*, `array`: readonly *string*[]) => U, `initialValue`: U): U

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: U, `currentValue`: *string*, `currentIndex`: *number*, `array`: readonly *string*[]) => U | A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array. |
| `initialValue` | U | If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value. |

**Returns:** U

Inherited from: TemplateStringsArray.reduce

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1195

___

### reduceRight

▸ **reduceRight**(`callbackfn`: (`previousValue`: *string*, `currentValue`: *string*, `currentIndex`: *number*, `array`: readonly *string*[]) => *string*): *string*

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: *string*, `currentValue`: *string*, `currentIndex`: *number*, `array`: readonly *string*[]) => *string* | A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array. |

**Returns:** *string*

Inherited from: TemplateStringsArray.reduceRight

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1201

▸ **reduceRight**(`callbackfn`: (`previousValue`: *string*, `currentValue`: *string*, `currentIndex`: *number*, `array`: readonly *string*[]) => *string*, `initialValue`: *string*): *string*

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`previousValue`: *string*, `currentValue`: *string*, `currentIndex`: *number*, `array`: readonly *string*[]) => *string* |
| `initialValue` | *string* |

**Returns:** *string*

Inherited from: TemplateStringsArray.reduceRight

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1202

▸ **reduceRight**<U\>(`callbackfn`: (`previousValue`: U, `currentValue`: *string*, `currentIndex`: *number*, `array`: readonly *string*[]) => U, `initialValue`: U): U

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: U, `currentValue`: *string*, `currentIndex`: *number*, `array`: readonly *string*[]) => U | A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array. |
| `initialValue` | U | If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value. |

**Returns:** U

Inherited from: TemplateStringsArray.reduceRight

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1208

___

### slice

▸ **slice**(`start?`: *number*, `end?`: *number*): *string*[]

Returns a section of an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start?` | *number* | The beginning of the specified portion of the array. |
| `end?` | *number* | The end of the specified portion of the array. This is exclusive of the element at the index 'end'. |

**Returns:** *string*[]

Inherited from: TemplateStringsArray.slice

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1119

___

### some

▸ **some**(`predicate`: (`value`: *string*, `index`: *number*, `array`: readonly *string*[]) => *unknown*, `thisArg?`: *any*): *boolean*

Determines whether the specified callback function returns true for any element of an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: *string*, `index`: *number*, `array`: readonly *string*[]) => *unknown* | A function that accepts up to three arguments. The some method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value true, or until the end of the array. |
| `thisArg?` | *any* | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

**Returns:** *boolean*

Inherited from: TemplateStringsArray.some

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1158

___

### toLocaleString

▸ **toLocaleString**(): *string*

Returns a string representation of an array. The elements are converted to string using their toLocalString methods.

**Returns:** *string*

Inherited from: TemplateStringsArray.toLocaleString

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1098

___

### toString

▸ **toString**(): *string*

Returns a string representation of an array.

**Returns:** *string*

Inherited from: TemplateStringsArray.toString

Defined in: node_modules/typescript/lib/lib.es5.d.ts:1094

___

### values

▸ **values**(): *IterableIterator*<string\>

Returns an iterable of values in the array

**Returns:** *IterableIterator*<string\>

Inherited from: TemplateStringsArray.values

Defined in: node_modules/typescript/lib/lib.es2015.iterable.d.ts:111
