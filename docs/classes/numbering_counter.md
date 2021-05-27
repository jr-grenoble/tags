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

Defined in: [Dev/projects/tags/libs/tags.ts:1159](https://github.com/jr-grenoble/tags/blob/37448b8/libs/tags.ts#L1159)

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

Defined in: [Dev/projects/tags/libs/tags.ts:1159](https://github.com/jr-grenoble/tags/blob/37448b8/libs/tags.ts#L1159)

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

Defined in: [Dev/projects/tags/libs/tags.ts:1158](https://github.com/jr-grenoble/tags/blob/37448b8/libs/tags.ts#L1158)

___

### stringｰpadding

• `Private` `Readonly` **stringｰpadding**: *boolean*

Defined in: [Dev/projects/tags/libs/tags.ts:1157](https://github.com/jr-grenoble/tags/blob/37448b8/libs/tags.ts#L1157)

___

### value

• **value**: *number*

Defined in: [Dev/projects/tags/libs/tags.ts:1156](https://github.com/jr-grenoble/tags/blob/37448b8/libs/tags.ts#L1156)

## Accessors

### next

• get **next**(): *this*

**Returns:** *this*

Defined in: [Dev/projects/tags/libs/tags.ts:1218](https://github.com/jr-grenoble/tags/blob/37448b8/libs/tags.ts#L1218)

___

### pad

• get **pad**(): *string*

**Returns:** *string*

Defined in: [Dev/projects/tags/libs/tags.ts:1225](https://github.com/jr-grenoble/tags/blob/37448b8/libs/tags.ts#L1225)

___

### raw

• get **raw**(): *string*

**Returns:** *string*

Defined in: [Dev/projects/tags/libs/tags.ts:1222](https://github.com/jr-grenoble/tags/blob/37448b8/libs/tags.ts#L1222)

___

### reset

• get **reset**(): *this*

**Returns:** *this*

Defined in: [Dev/projects/tags/libs/tags.ts:1214](https://github.com/jr-grenoble/tags/blob/37448b8/libs/tags.ts#L1214)
