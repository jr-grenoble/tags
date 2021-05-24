[Tags](../README.md) / [Exports](../modules.md) / chainable%uFF70tag%uFF70function

# Interface: chainableｰtagｰfunction

**`example`**
We extend tag functions so that they can be chained and also so that you can call them on regular strings.
>
When you compose chaianable tags, the innermost (deepest) tag is applied first, followed by tags of lesser depth,
until the outermost tag is called. For instance, if you log the following expression:

```typescript
 numbering({ prefix: "" })(paragraph(outdent))`
        This is some text with π = ${Math.PI}.
        This line has the same indentation as the previous one.
            This line has deeper indentation.
            This one too. There are 2 blank lines next.

        This line has the initial indentation level.
        And this is the last line.
        `;
```
You get the following console output:
```
 ₁│This is some text with π = 3.141592653589793.
 ₂│
 ₃│This line has the same indentation as the previous one.
 ₄│
 ₅│    This line has deeper indentation.
 ₆│
 ₇│    This one too. There are 2 blank lines next.
 ₈│
 ₉│This line has the initial indentation level.
₁₀│
₁₁│And this is the last line.
```
Let's decompose this. The chainable tags are `numbering({ prefix: "" })(paragraph(outdent))`,
with the deepest tag (at the end of the chain) being the `outdent` tag. Thus the `outdent` tag
is the first to process the template literal.
>
This tag takes a template literal and removes as many spaces from the left of each line as there are in
 the least indented line(this tag is useful to keep code properly indented). In the example above, `outdent`
produces the following output:
```
This is some text with π = 3.141592653589793.
This line has the same indentation as the previous one.
    This line has deeper indentation.
    This one too. There are 2 blank lines next.

This line has the initial indentation level.
And this is the last line.

```
Note that the last line of output is blank, as `outdent` only folds blank lines but doesn't remove trailing ones.
>
Once the `outdent` tag has finished its job (expanding expressions such `Math.PI` in the process), the next tag
in line is the `paragraph` tag. This tag simply takes each line and inserts blank lines around it, then it folds
blank lines and removes trailing blank lines. When passed the previous output, it yields:
```
This is some text with π = 3.141592653589793.

This line has the same indentation as the previous one.

    This line has deeper indentation.

    This one too. There are 2 blank lines next.

This line has the initial indentation level.

And this is the last line.
```
You can see that each input line has become a single paragraph.
>
Finally, the shallowest tag is the `numbering` tag. This tag takes some options, in this case, we tell it
to use an empty prefix before line numbers. Had we not done that, it would have produced the following output:
```
│ ₁│This is some text with π = 3.141592653589793.
│ ₂│
│ ₃│This line has the same indentation as the previous one.
│ ₄│
│ ₅│    This line has deeper indentation.
│ ₆│
│ ₇│    This one too.
│ ₈│
│ ₉│This line has the initial indentation level.
│₁₀│
│₁₁│And this is the last line.
```

## Hierarchy

- [*tagｰfunction*](tag_function.md)

  ↳ **chainableｰtagｰfunction**

## Callable

▸ **chainableｰtagｰfunction**(`tagｰfunction`: [*tagｰfunction*](tag_function.md)): [*chainableｰtagｰfunction*](chainable_tag_function.md)

The chainable tag function interface indicates that a `chainableｰtagｰfunction` behaves as a regular [`tagｰfunction`](tag_function.md)
but can also take another `tagｰfunction` as input (for chaining) before applying itself to the template literal.
>
A `chainableｰtagｰfunction` can also process regular strings (either literals, variables or expressions), using the regular
function call syntax.

#### Parameters

| Name | Type |
| :------ | :------ |
| `tagｰfunction` | [*tagｰfunction*](tag_function.md) |

**Returns:** [*chainableｰtagｰfunction*](chainable_tag_function.md)

Defined in: [Dev/projects/tags/libs/tags.ts:219](https://github.com/jr-grenoble/tags/blob/a1f675c/libs/tags.ts#L219)

▸ **chainableｰtagｰfunction**(`stringｰliteralｰorｰexpression`: *string*): *string*

{@see {@linkcode chainableｰtagｰfunction}}

#### Parameters

| Name | Type |
| :------ | :------ |
| `stringｰliteralｰorｰexpression` | *string* |

**Returns:** *string*

Defined in: [Dev/projects/tags/libs/tags.ts:227](https://github.com/jr-grenoble/tags/blob/a1f675c/libs/tags.ts#L227)

▸ **chainableｰtagｰfunction**(`strings`: [*templateｰstrings*](template_strings.md), ...`values`: [*printable*](printable.md)[]): *string*

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
