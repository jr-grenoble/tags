[Tags](../README.md) / [Exports](../modules.md) / tagｰscope

# Enumeration: tagｰscope

Tag options combine structured tag settings with boolean and number simple types.
The string type is not included in these simple types because:
- we use numeric pseudo enums to represemt options
- we want tags to operate on strings the same way they do on template literals.

When a tag requires additional options, it defines a type that extends `tagｰoptions`,
and it exports a new default option constant, e.g. as:

```typescript
type numberingｰoptions = tagｰoptions & {
   readonly numberｰfrom?: number;
   // … additional properties must be readonly and optional
}

const defaultｰnumberingｰoptions : numberingｰoptions = {
   ...defaultｰtagｰoptions,
   numberｰfrom: 1,
   // … other defaults
}
```
Note that options neither include the possibility to define white space (this is `/\s/`)
nor the ability to redefine line terminators (this is `\n`), mainly because standard typescript functions
such as String.trim use these definitions.

## Table of contents

### Enumeration members

- [all](tag_scope.md#all)
- [none](tag_scope.md#none)
- [onlyｰexpressions](tag_scope.md#onlyｰexpressions)
- [onlyｰliterals](tag_scope.md#onlyｰliterals)

## Enumeration members

### all

• **all**: = 3

Defined in: [Dev/projects/tags/libs/tags.ts:195](https://github.com/jr-grenoble/tags/blob/cb7d4c8/libs/tags.ts#L195)

___

### none

• **none**: = 0

Defined in: [Dev/projects/tags/libs/tags.ts:192](https://github.com/jr-grenoble/tags/blob/cb7d4c8/libs/tags.ts#L192)

___

### onlyｰexpressions

• **onlyｰexpressions**: = 2

Defined in: [Dev/projects/tags/libs/tags.ts:194](https://github.com/jr-grenoble/tags/blob/cb7d4c8/libs/tags.ts#L194)

___

### onlyｰliterals

• **onlyｰliterals**: = 1

Defined in: [Dev/projects/tags/libs/tags.ts:193](https://github.com/jr-grenoble/tags/blob/cb7d4c8/libs/tags.ts#L193)
