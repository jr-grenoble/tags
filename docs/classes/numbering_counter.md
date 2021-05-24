[Tags](../README.md) / [Exports](../modules.md) / numberingｰcounter

# Class: numberingｰcounter

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

\+ **new numberingｰcounter**(`options?`: [*numberingｰoptions*](../interfaces/numbering_options.md)): [*numberingｰcounter*](numbering_counter.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `options` | [*numberingｰoptions*](../interfaces/numbering_options.md) | {} |

**Returns:** [*numberingｰcounter*](numbering_counter.md)

Defined in: [Dev/projects/tags/libs/tags.ts:951](https://github.com/jr-grenoble/tags/blob/d82fab7/libs/tags.ts#L951)

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

Defined in: [Dev/projects/tags/libs/tags.ts:951](https://github.com/jr-grenoble/tags/blob/d82fab7/libs/tags.ts#L951)

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

Defined in: [Dev/projects/tags/libs/tags.ts:950](https://github.com/jr-grenoble/tags/blob/d82fab7/libs/tags.ts#L950)

___

### stringｰpadding

• `Private` `Readonly` **stringｰpadding**: *boolean*

Defined in: [Dev/projects/tags/libs/tags.ts:949](https://github.com/jr-grenoble/tags/blob/d82fab7/libs/tags.ts#L949)

___

### value

• **value**: *number*

Defined in: [Dev/projects/tags/libs/tags.ts:948](https://github.com/jr-grenoble/tags/blob/d82fab7/libs/tags.ts#L948)

## Accessors

### next

• get **next**(): *this*

**Returns:** *this*

Defined in: [Dev/projects/tags/libs/tags.ts:1010](https://github.com/jr-grenoble/tags/blob/d82fab7/libs/tags.ts#L1010)

___

### pad

• get **pad**(): *string*

**Returns:** *string*

Defined in: [Dev/projects/tags/libs/tags.ts:1017](https://github.com/jr-grenoble/tags/blob/d82fab7/libs/tags.ts#L1017)

___

### raw

• get **raw**(): *string*

**Returns:** *string*

Defined in: [Dev/projects/tags/libs/tags.ts:1014](https://github.com/jr-grenoble/tags/blob/d82fab7/libs/tags.ts#L1014)

___

### reset

• get **reset**(): *this*

**Returns:** *this*

Defined in: [Dev/projects/tags/libs/tags.ts:1006](https://github.com/jr-grenoble/tags/blob/d82fab7/libs/tags.ts#L1006)
