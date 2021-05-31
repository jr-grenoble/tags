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

\+ **new numberingｰcounter**(`options?`: [*numberingｰoptions*](../modules.md#numberingｰoptions)): [*numberingｰcounter*](numbering_counter.md)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `options` | [*numberingｰoptions*](../modules.md#numberingｰoptions) | {} |

**Returns:** [*numberingｰcounter*](numbering_counter.md)

Defined in: [Dev/projects/tags/libs/tags.ts:1313](https://github.com/jr-grenoble/tags/blob/dfb84ad/libs/tags.ts#L1313)

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

Defined in: [Dev/projects/tags/libs/tags.ts:1313](https://github.com/jr-grenoble/tags/blob/dfb84ad/libs/tags.ts#L1313)

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

Defined in: [Dev/projects/tags/libs/tags.ts:1312](https://github.com/jr-grenoble/tags/blob/dfb84ad/libs/tags.ts#L1312)

___

### stringｰpadding

• `Private` `Readonly` **stringｰpadding**: *boolean*

Defined in: [Dev/projects/tags/libs/tags.ts:1311](https://github.com/jr-grenoble/tags/blob/dfb84ad/libs/tags.ts#L1311)

___

### value

• **value**: *number*

Defined in: [Dev/projects/tags/libs/tags.ts:1310](https://github.com/jr-grenoble/tags/blob/dfb84ad/libs/tags.ts#L1310)

## Accessors

### next

• get **next**(): *this*

**Returns:** *this*

Defined in: [Dev/projects/tags/libs/tags.ts:1372](https://github.com/jr-grenoble/tags/blob/dfb84ad/libs/tags.ts#L1372)

___

### pad

• get **pad**(): *string*

**Returns:** *string*

Defined in: [Dev/projects/tags/libs/tags.ts:1379](https://github.com/jr-grenoble/tags/blob/dfb84ad/libs/tags.ts#L1379)

___

### raw

• get **raw**(): *string*

**Returns:** *string*

Defined in: [Dev/projects/tags/libs/tags.ts:1376](https://github.com/jr-grenoble/tags/blob/dfb84ad/libs/tags.ts#L1376)

___

### reset

• get **reset**(): *this*

**Returns:** *this*

Defined in: [Dev/projects/tags/libs/tags.ts:1368](https://github.com/jr-grenoble/tags/blob/dfb84ad/libs/tags.ts#L1368)
