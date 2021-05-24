[Tags](../README.md) / [Exports](../modules.md) / tag%uFF70function

# Interface: tagｰfunction

Tag functions prefix template literals and access their constituents before processing them.
>
A (plain) tag function must conforms to this interface. It gets template literal components via
a `templateｰstrings` array along with a series of 'printable' expressions. The `templateｰstrings`
array iterates over the string literals that surround printable `${expressions}`. By default, these
string literals are processed for escape characters such as \n for newlines, but the array is
augmented with a `raw` property that contains the unprocessed literals.

## Hierarchy

- **tagｰfunction**

  ↳ [*chainableｰtagｰfunction*](chainable_tag_function.md)

## Callable

▸ **tagｰfunction**(`strings`: [*templateｰstrings*](template_strings.md), ...`values`: [*printable*](printable.md)[]): *string*

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

**Returns:** *string*

Defined in: [Dev/projects/tags/libs/tags.ts:100](https://github.com/jr-grenoble/tags/blob/a1f675c/libs/tags.ts#L100)
