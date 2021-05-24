[Tags](../README.md) / [Exports](../modules.md) / numbering%uFF70counter

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

Defined in: [Dev/projects/tags/libs/tags.ts:950](https://github.com/jr-grenoble/tags/blob/1c97e94/libs/tags.ts#L950)

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

Defined in: [Dev/projects/tags/libs/tags.ts:950](https://github.com/jr-grenoble/tags/blob/1c97e94/libs/tags.ts#L950)

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

Defined in: [Dev/projects/tags/libs/tags.ts:949](https://github.com/jr-grenoble/tags/blob/1c97e94/libs/tags.ts#L949)

___

### stringｰpadding

• `Private` `Readonly` **stringｰpadding**: *boolean*

Defined in: [Dev/projects/tags/libs/tags.ts:948](https://github.com/jr-grenoble/tags/blob/1c97e94/libs/tags.ts#L948)

___

### value

• **value**: *number*

Defined in: [Dev/projects/tags/libs/tags.ts:947](https://github.com/jr-grenoble/tags/blob/1c97e94/libs/tags.ts#L947)

## Accessors

### next

• get **next**(): *this*

**Returns:** *this*

Defined in: [Dev/projects/tags/libs/tags.ts:1009](https://github.com/jr-grenoble/tags/blob/1c97e94/libs/tags.ts#L1009)

___

### pad

• get **pad**(): *string*

**Returns:** *string*

Defined in: [Dev/projects/tags/libs/tags.ts:1016](https://github.com/jr-grenoble/tags/blob/1c97e94/libs/tags.ts#L1016)

___

### raw

• get **raw**(): *string*

**Returns:** *string*

Defined in: [Dev/projects/tags/libs/tags.ts:1013](https://github.com/jr-grenoble/tags/blob/1c97e94/libs/tags.ts#L1013)

___

### reset

• get **reset**(): *this*

**Returns:** *this*

Defined in: [Dev/projects/tags/libs/tags.ts:1005](https://github.com/jr-grenoble/tags/blob/1c97e94/libs/tags.ts#L1005)
