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

Defined in: [Dev/projects/tags/libs/tags.ts:1440](https://github.com/jr-grenoble/tags/blob/525f4c3/libs/tags.ts#L1440)

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

Defined in: [Dev/projects/tags/libs/tags.ts:1440](https://github.com/jr-grenoble/tags/blob/525f4c3/libs/tags.ts#L1440)

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

Defined in: [Dev/projects/tags/libs/tags.ts:1439](https://github.com/jr-grenoble/tags/blob/525f4c3/libs/tags.ts#L1439)

___

### stringｰpadding

• `Private` `Readonly` **stringｰpadding**: *boolean*

Defined in: [Dev/projects/tags/libs/tags.ts:1438](https://github.com/jr-grenoble/tags/blob/525f4c3/libs/tags.ts#L1438)

___

### value

• **value**: *number*

Defined in: [Dev/projects/tags/libs/tags.ts:1437](https://github.com/jr-grenoble/tags/blob/525f4c3/libs/tags.ts#L1437)

## Accessors

### next

• get **next**(): *this*

**Returns:** *this*

Defined in: [Dev/projects/tags/libs/tags.ts:1499](https://github.com/jr-grenoble/tags/blob/525f4c3/libs/tags.ts#L1499)

___

### pad

• get **pad**(): *string*

**Returns:** *string*

Defined in: [Dev/projects/tags/libs/tags.ts:1506](https://github.com/jr-grenoble/tags/blob/525f4c3/libs/tags.ts#L1506)

___

### raw

• get **raw**(): *string*

**Returns:** *string*

Defined in: [Dev/projects/tags/libs/tags.ts:1503](https://github.com/jr-grenoble/tags/blob/525f4c3/libs/tags.ts#L1503)

___

### reset

• get **reset**(): *this*

**Returns:** *this*

Defined in: [Dev/projects/tags/libs/tags.ts:1495](https://github.com/jr-grenoble/tags/blob/525f4c3/libs/tags.ts#L1495)
