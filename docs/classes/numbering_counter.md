[Tags](../README.md) / [Exports](../modules.md) / numberingｰcounter

# Class: numberingｰcounter

**`todo`** break the numbering logic from the formatting logic, plus move all numbering into its own module

## Table of contents

### Constructors

- [constructor](numbering_counter.md#constructor)

### Properties

- [padder](numbering_counter.md#padder)
- [stringify](numbering_counter.md#stringify)
- [stringｰpadding](numbering_counter.md#stringｰpadding)
- [value](numbering_counter.md#value)

### Accessors

- [next](numbering_counter.md#next)
- [pad](numbering_counter.md#pad)
- [raw](numbering_counter.md#raw)
- [reset](numbering_counter.md#reset)

## Constructors

### constructor

\+ **new numberingｰcounter**(`options?`: [*numberingｰoptions*](../modules.md#numberingｰoptions)): [*numberingｰcounter*](numbering_counter.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `options` | [*numberingｰoptions*](../modules.md#numberingｰoptions) | {} |

**Returns:** [*numberingｰcounter*](numbering_counter.md)

Defined in: [Dev/projects/tags/libs/tags.ts:1497](https://github.com/jr-grenoble/tags/blob/c325ede/libs/tags.ts#L1497)

## Properties

### padder

• `Private` **padder**: (`n`: *number*) => *string*

#### Type declaration

▸ (`n`: *number*): *string*

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | *number* |

**Returns:** *string*

Defined in: [Dev/projects/tags/libs/tags.ts:1497](https://github.com/jr-grenoble/tags/blob/c325ede/libs/tags.ts#L1497)

___

### stringify

• `Private` `Readonly` **stringify**: (`n`: *number*) => *string*

#### Type declaration

▸ (`n`: *number*): *string*

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | *number* |

**Returns:** *string*

Defined in: [Dev/projects/tags/libs/tags.ts:1496](https://github.com/jr-grenoble/tags/blob/c325ede/libs/tags.ts#L1496)

___

### stringｰpadding

• `Private` `Readonly` **stringｰpadding**: *boolean*

Defined in: [Dev/projects/tags/libs/tags.ts:1495](https://github.com/jr-grenoble/tags/blob/c325ede/libs/tags.ts#L1495)

___

### value

• **value**: *number*

Defined in: [Dev/projects/tags/libs/tags.ts:1494](https://github.com/jr-grenoble/tags/blob/c325ede/libs/tags.ts#L1494)

## Accessors

### next

• get **next**(): *this*

**Returns:** *this*

Defined in: [Dev/projects/tags/libs/tags.ts:1556](https://github.com/jr-grenoble/tags/blob/c325ede/libs/tags.ts#L1556)

___

### pad

• get **pad**(): *string*

**Returns:** *string*

Defined in: [Dev/projects/tags/libs/tags.ts:1563](https://github.com/jr-grenoble/tags/blob/c325ede/libs/tags.ts#L1563)

___

### raw

• get **raw**(): *string*

**Returns:** *string*

Defined in: [Dev/projects/tags/libs/tags.ts:1560](https://github.com/jr-grenoble/tags/blob/c325ede/libs/tags.ts#L1560)

___

### reset

• get **reset**(): *this*

**Returns:** *this*

Defined in: [Dev/projects/tags/libs/tags.ts:1552](https://github.com/jr-grenoble/tags/blob/c325ede/libs/tags.ts#L1552)
