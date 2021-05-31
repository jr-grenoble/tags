/**
 * @module Tags - a collection of chainable tags for template string literals
 *
 * @author [Jean-René Bouvier](mailto:24454054+jr-grenoble@users.noreply.github.com)
 *
 * @copyright (c) Jean-René Bouvier, from 2021 on.
 *
 * @license
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * This program is distributed in the hope that it will be useful,
 * but **without any warranty**; without even the implied warranty of
 * merchantability or fitness for a particular purpose.  See the
 * GNU General Public License for more details.
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 *
 *
 * The author hereby grants Facts Haven SAS and its affiliates the right to use and perform any derivative works.
 *
 * Tags
 * ====
 *
 * @overview
 *
 * This library module provides chainable tag functions (or simply _tags_)to modify template literals, along with a few utility functions.
 *
 * - Refer to [MDN template literals]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals} for explanations
 * about native (non chainable) tag functions ;
 * - Refer also to the much more complete [common-tags]{@linkcode https://github.com/zspecza/common-tags} package.
 *
 * Tags allow for prefixing template literals, e.g. as in ```format("bold")`Some ${expression} followed by text`⁠ ```.
 *
 * Native tags implementation
 * --------------------------
 * Native tag function _implementations_ take one mandatory parameter, a `templateｰstrings` array of string literals, and optional printable values.
 * By default (cf. the `identity` tag), the template string is rendered by interleaving the printable values between the template
 * string literals. Hence, a proper call to a tag function must pass one more string literal than there are values.
 *
 * (Chainable) tags
 * ----------------
 * Chainable tag functions allow for composing tags to perform more complex tasks, as in
 * ```typescript
 * indent(4)(paragraph)`Some ${expression}`⁠
 * ```
 *
 * They can also work on a regular string parameter, when using the regular function call, as in
 * ```typescript
 * indent(4)(paragraph)("Some very long string, abbreviated here for documentation purpose")
 * ```
 * See the {@linkcode tag} type for further explanations.
 * ________
 *
 * Tags library
 * ============
 * This libray uses dashes to separate words in identifiers. Because the dash is not allowed in typescript identifiers, we use the half width Hangul
 * letter eu `ｰ`, unicode `\uffda` instead of a real dash.
 * >
 * The library exports types
 *
 * | Types                             | Description                                                                                                    |
 * | :-------------------------------- | :------------------------------------------------------------------------------------------------------------- |
 * | {@linkcode nativeｰtag}            | A function that can be applied to a template string, i.e. that can prefix such a string                        |
 * | {@linkcode numberingｰoptions}     | A set of options that allows control of the `numbering` tag as well as of `numberingｰcounter` objects          |
 * | {@linkcode printable}             | Any expression that produces a printable result, i.e. that can be called with `.toString()`                    |
 * | {@linkcode tag}                   | A tag function that also accepts another tag function or a string as a parameter, for chaining or direct call  |
 * | {@linkcode templateｰstrings}      | An array of readonly strings, augmented with a raw property to iterate over raw equivalent of these strings    |
 *
 */

/*
 * ✅ @todo
 * • use default parameters for space detection, line folding, blank line management.
 *
 * • provide a flush left and right mechanism (by default, flush is left) allowing justification left and right
 *
 * • provide options in outdent so that ${expressions} get processed (or not)
 *
 * • provide fixed decimal, engineering and scientific notation tag for ${expressions}, as well as more general number formatting
 *
 */

// Type definitions /////////////////////////////////////////////////////////
// Basic types and interfaces for tag functions.                           //
/////////////////////////////////////////////////////////////////////////////

/**
 * The `templateｰstrings` type is basically an array of readonly strings augmented with a raw property that stores
 * the same string literals unprocessed for escape sequence.
 */
export interface templateｰstrings extends TemplateStringsArray {
  raw: readonly string[] /** We redefine the raw property here, mainly for readability */;
}
/**
 * Tag functions must be passed printable expressions for substitution
 */
export interface printable {
  toString(): string;
}

/**
 * Native tag functions prefix template literals and access their constituents before processing them.
 * >
 * A native tag function must conforms to this interface. It gets template literal components via
 * a `templateｰstrings` array along with a series of 'printable' expressions. The `templateｰstrings`
 * array iterates over the string literals that surround printable `${expressions}`. By default, these
 * string literals are processed for escape characters such as \n for newlines, but the array is
 * augmented with a `raw` property that contains the unprocessed literals.
 */
export interface nativeｰtag extends Function {
  /**
   * The `templateｰstrings` array has 1 more element then the `values` rest array. E.g. in the following
   * call:
   * ```typescript
   * identity`First value: ${42},\nsecond value: ${Math.PI *2 }`
   * ```
   * the `identity` tag function receives 3 parameters:
   * - a `templateｰstrings` parameter equivalent to the following pseudo array:
   * ```typescript
   * {
   *    0: `First value: `,
   *    1: `
   *    second value: `,
   *    length: 2,
   *    raw: {
   *      0: `First value: `,
   *      1: `\nsecond value: `,
   *      length: 2
   *    }
   * } : templateｰstrings
   * ```
   * - two rest parameters corresponding to the following values:
   *    * 42
   *    * 6.283185307179586
   *
   * In fact, a tag function is not forced to return a string, it can return anything.
   * @see [MDN template literals]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals}
   * for more information.
   */
  (strings: templateｰstrings, ...values: printable[]): any;
}

/**
 * Tag options combine structured tag settings with boolean and number simple types.
 * The string type is not included in these simple types because:
 * - we use numeric pseudo enums to represemt options
 * - we want tags to operate on strings the same way they do on template literals.
 *
 * When a tag requires additional options, it defines a type that extends `tagｰoptions`,
 * and it creates a new default option constant, e.g. as:
 *
 * ```typescript
 * type numberingｰoptions = tagｰoptions & {
 *    readonly numberｰfrom?: number;
 *    // … additional properties must be readonly and optional
 * }
 *
 * const defaultｰnumberingｰoptions : numberingｰoptions = {
 *    ...defaultｰtagｰoptions,
 *    numberｰfrom: 1,
 *    // … other defaults
 * }
 * ```
 */
export type tagｰoptions =
  | boolean
  | number
  | {
      readonly whiteｰspace?: RegExp /** what is to be considered white space, default is /\s/g */;
      readonly lineｰjoiner?: string /** what to put between joined lines, default is a single space " " */;
      readonly foldｰblankｰlinesʔ̣?: boolean /** whether to fold blank line sequences into a single one, default is true */;
      readonly trimｰtrailingｰspace?: boolean /** whether to remove trailing space, default is true */;
    };

/**
 * Default tag settings, used to initialize tag options in tag functions
 * See the {@linkcode tagｰoptions} interface for definitions as well as
 * for how to extend options and defaults.
 */
export const defaultｰtagｰoptions: tagｰoptions = {
  whiteｰspace: /\s/g /** replace by `/ /g` to only handle real space */,
  lineｰjoiner: " " /** replace by ``""`` to remove all space between lines */,
  foldｰblankｰlinesʔ̣: true /** replace by `false` to preserve blank lines */,
  trimｰtrailingｰspace:
    true /** replace by `false` to preserve trailing space */,
} as const;

/**
 * @example
 * We extend native tag functions so that they can be chained and also so that you can call them on regular strings.
 * We also allow these new tag functions to be parametrized via {@linkcode tagｰoptions}
 * >
 * When you compose chaianable tags, the innermost (deepest) tag is applied first, followed by tags of lesser depth,
 * until the outermost tag is called. For instance, if you log the following expression:
 *
 * ```typescript
 *  numbering({ prefix: "" })(paragraph(outdent))`
 *         This is some text with π = ${Math.PI}.
 *         This line has the same indentation as the previous one.
 *             This line has deeper indentation.
 *             This one too. There are 2 blank lines next.
 *
 *
 *         This line has the initial indentation level.
 *         And this is the last line.
 *         `;
 * ```
 * You get the following console output:
 * ```
 *  ₁│This is some text with π = 3.141592653589793.
 *  ₂│
 *  ₃│This line has the same indentation as the previous one.
 *  ₄│
 *  ₅│    This line has deeper indentation.
 *  ₆│
 *  ₇│    This one too. There are 2 blank lines next.
 *  ₈│
 *  ₉│This line has the initial indentation level.
 * ₁₀│
 * ₁₁│And this is the last line.
 * ```
 * Let's decompose this. The chainable tags are `numbering({ prefix: "" })(paragraph(outdent))`,
 * with the deepest tag (at the end of the chain) being the `outdent` tag. Thus the `outdent` tag
 * is the first to process the template literal.
 * >
 * This tag takes a template literal and removes as many spaces from the left of each line as there are in
 *  the least indented line(this tag is useful to keep code properly indented). In the example above, `outdent`
 * produces the following output:
 * ```
 * This is some text with π = 3.141592653589793.
 * This line has the same indentation as the previous one.
 *     This line has deeper indentation.
 *     This one too. There are 2 blank lines next.
 *
 * This line has the initial indentation level.
 * And this is the last line.
 *
 * ```
 * Note that the last line of output is blank, as `outdent` only folds blank lines but doesn't remove trailing ones.
 * >
 * Once the `outdent` tag has finished its job (expanding expressions such `Math.PI` in the process), the next tag
 * in line is the `paragraph` tag. This tag simply takes each line and inserts blank lines around it, then it folds
 * blank lines and removes trailing blank lines. When passed the previous output, it yields:
 * ```
 * This is some text with π = 3.141592653589793.
 *
 * This line has the same indentation as the previous one.
 *
 *     This line has deeper indentation.
 *
 *     This one too. There are 2 blank lines next.
 *
 * This line has the initial indentation level.
 *
 * And this is the last line.
 * ```
 * You can see that each input line has become a single paragraph.
 * >
 * Finally, the shallowest tag is the `numbering` tag. This tag takes some options, in this case, we tell it
 * to use an empty prefix before line numbers. Had we not done that, it would have produced the following output:
 * ```
 * │ ₁│This is some text with π = 3.141592653589793.
 * │ ₂│
 * │ ₃│This line has the same indentation as the previous one.
 * │ ₄│
 * │ ₅│    This line has deeper indentation.
 * │ ₆│
 * │ ₇│    This one too.
 * │ ₈│
 * │ ₉│This line has the initial indentation level.
 * │₁₀│
 * │₁₁│And this is the last line.
 * ```
 */
export interface tag<T extends tagｰoptions> extends nativeｰtag {
  (string: string): any /** apply the base tag to a string */;
  (options?: T): tag<T> /** create a new tag function out of options */;
  (tag: nativeｰtag): nativeｰtag /** compose tags */;
}

/**
 * Rename anything that has a name
 * @returns the modified object or function
 *
 * Note that `rename` uses `Object.defineProperty` to set the name property of its target.
 * This allows it to modify function names, cf.
 * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name#inferred_function_names)
 */
export const rename = <type extends { name: string }>(
  object: type /** the object or function to rename */,
  name: string /** the new name */
): type => Object.defineProperty(object, "name", { value: name });

// Internal utilities  //////////////////////////////////////////////////////
// These utilities perform common work.                                    //
/////////////////////////////////////////////////////////////////////////////

/**
 * Turn an array of readonly strings into a `templateｰstrings` array
 * by adding a `raw` property to the initial array and assigning it
 * the very same array of strings.
 * @returns a `templateｰstring` array
 */
const makeｰraw = (
  strings: readonly string[] // ReadonlyArray<string>,
): templateｰstrings =>
  <readonly string[] & { raw: readonly string[] }>(
    Object.assign(strings, { raw: strings })
  );

/**
 * @todo thoroughly document!!!
 *
 * @param tag
 * @param defaults
 * @returns
 */
export const makeｰtag = <T extends tagｰoptions>(
  tag: (options?: T) => nativeｰtag,
  defaults: T
): tag<T> => {
  const tagｰname = tag.name || "anonymousｰtag";

  const stag = (...args: any[]): any => {
    // ➊ no arguments => return native tag resulting from default options
    if (args.length === 0) return tag(defaults);

    // ➋ first argument is a string => apply the tag to that string
    if (typeof args[0] === "string") return tag(defaults)(makeｰraw([args[0]]));

    // ➌ first argument is a function => compose it with the tag
    if (typeof args[0] === "function")
      return rename(
        (s: templateｰstrings, ...v: printable[]): string =>
          tag(defaults)`${(args[0] as nativeｰtag)(s, ...v)}`,
        `${tagｰname}(${args[0].name})`
      );

    // ➍ first argument is a templateｰstrings array => apply tag to template literal
    if (
      Array.isArray(args[0]) &&
      Array.isArray((args[0] as unknown as templateｰstrings)?.raw)
    ) {
      const strings = args[0] as unknown as templateｰstrings;
      args.shift();
      return tag(defaults)(strings, ...args);
    }

    // ➎ the remaining case is a call to the parametrizable version
    // Note that we create a new function each time it is called with explicit parameters…
    // When a set of options is used often, the library user should alias the tag.
    return makeｰtag(
      rename(() => tag(args[0]), tagｰname),
      {} // no defaults for this new tag
    );
  };
  return rename(stag as tag<T>, tagｰname);
};

const ထ = Infinity;
// type dimensions = {
//   minｰindentation: number;
//   maxｰlineｰlength: number;
// };
const dimensions = (lines: string[], options: tagｰoptions) => {
  const dimensions = {
    maxｰlineｰlength: 0,
    minｰlineｰlength: +ထ,
    maxｰindentation: 0,
    minｰindentation: +ထ,
    maxｰtrailingｰspace: 0,
    minｰtrailingｰspace: +ထ,
  };

  // whiteｰspace?: RegExp /** what is to be considered white space, default is /\s/g */;
  // lineｰjoiner?: string /**  what to put between joined lines, default is a single space " " */;
  // foldｰblankｰlinesʔ̣?: boolean /** whether to fold blank line sequences into a single one, default is true */;
  // trimｰtrailingｰspace?: boolean /** whet

  return dimensions;
};

/**
 * Split text into lines, removing trailing white space and double blank lines
 *
 * @param text - the original text
 * @returns an array of lines without trailing whitespace
 */
const textｰlines = (text: string): string[] =>
  text
    // split into lines
    .split("\n")
    // trim lines at end
    .map((line) => line.replace(/\s*$/, ""))
    // fold multiple spaces
    .map((line) => line.replace(/(\S)\s+/g, "$1 "))
    // remove double blank lines
    .reduce<string[]>(
      (
        textｰlines: string[],
        line: string,
        index: number,
        source: string[]
      ): string[] =>
        line || (index > 0 && source[index - 1]?.trim()) // useless ?. accessor, due to TS limitation
          ? // if the line is not blank or if it is the first one after a blank one, we keep it
            textｰlines.concat(line)
          : // otherwise, we skip it
            textｰlines,
      []
    );
/**
 * Compute the minimum indentation level (in number of space characters) of a set of lines.
 * If lines start with non-blank characters, this is 0.
 * Otherwise, this is the minimum amount of spaces before any non-blank character.
 *
 * @param lines - the set of lines
 * @returns the minimum indentation
 */

const minｰindentation = (lines: string[]): number =>
  lines
    // ignore blank lines
    .filter((line) => line.trim())
    // keep leading space…
    .map((line) => line.match(/ */))
    // …and count how many space characters there are
    .map((spaces) => (spaces && spaces[0]?.length) ?? 0)
    // then find the minimum indentation level
    .reduce(
      (min: number, indentation: number) =>
        indentation < min ? indentation : min,
      +ထ // start big to compute the minimum
    );

/**
 * @todo document! The idea is to split template strings when there's a newline
 * and adjust the values accordingly, by inserting empty strings.
 *
 * @returns a tuple of arrays, the first one being strings, the second being printable values.
 *
 * `normalizeｰstringsｰandｰvalues` warrants that ????
 */
const normalizeｰstringsｰandｰvalues = (
  strings: templateｰstrings,
  values: printable[]
): [string[], (printable | undefined)[]] => {
  return strings.reduce<[string[], (printable | undefined)[]]>(
    ([newｰstrings, newｰvalues], s, index) => {
      const lines = s.split("\n");
      const len = lines.length;
      if (len <= 1)
        return [
          [...newｰstrings, s],
          [...newｰvalues, values[index]],
        ];
      if (len >= 2) newｰvalues = newｰvalues.concat(Array(len - 2).fill(""));
      return [
        [
          ...newｰstrings,
          ...lines
            .filter((_, index) => index !== len - 1)
            .map((line) => line + "\n"),
        ],
        [...newｰvalues, values[index]],
      ];
    },
    [[], []]
  );
};

// Tag functions ////////////////////////////////////////////////////////////
// We define tag functions along with their options.                       //
/////////////////////////////////////////////////////////////////////////////

export type identityｰoptions = tagｰoptions & {
  readonly indentｰvalues?: boolean /** whether ${expressions} must be indented the same as embedding text, default is true */;
};

export const defaultｰidentityｰoptions: identityｰoptions = {
  ...defaultｰtagｰoptions,
  indentｰvalues:
    true /** replace by false, if you want `identity` to ignore indentation */,
};

export const identity = makeｰtag<identityｰoptions>(
  function identity({ indentｰvalues }: identityｰoptions = {}): nativeｰtag {
    return function (
      strings: templateｰstrings,
      ...values: printable[]
    ): string {
      if (strings.length > values.length) values.push(""); // make sure |strings| === |values|
      if (!indentｰvalues)
        return strings.reduce<string>(
          (text, s, i) => `${text}${s}${values[i]}`,
          ""
        );
      // normalize strings by splitting them into lines delimited by \n
      // [strings, values] = normalize(strings, values);
      const [str, val] = normalizeｰstringsｰandｰvalues(strings, values);
      // now map values to

      //         const indentation = minｰindentation(lines);
      //   // remove that minimum indentation from all lines
      //   return lines.map((line) => line.slice(indentation)).join("\n");

      return "not implemented";
    };
  },
  { indentｰvalues: true }
);

// Legacy code ////////////////////////////////////////////////////////
// Common code across tag functions; some of this is generic though.       //
/////////////////////////////////////////////////////////////////////////////

export interface callableｰtagｰfunction extends nativeｰtag {
  (stringｰliteralｰorｰexpression: string): any;
  callable: boolean;
}

type serializeｰoptions = tagｰoptions & {
  readonly indentation?: number | string;
  readonly filter?: (number | string)[] | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  readonly replacer?: (key: string, value: any) => any;
};

export const serialize = makeｰtag<serializeｰoptions>(
  function serialize({
    indentation,
    replacer,
    filter,
  }: serializeｰoptions = {}): nativeｰtag {
    let filterｰreplacer: typeof replacer;
    if (filter && replacer) {
      filter = filter.map((v) => v.toString());
      filterｰreplacer = (key, value) =>
        (filter as string[]).indexOf(key) >= 0 ? value : replacer?.(key, value);
    } else filterｰreplacer = replacer;
    return function (
      strings: templateｰstrings,
      ...values: printable[]
    ): string {
      return identity(
        strings,
        ...values.map((v) =>
          // Would love to do this, but overloading cannot:
          // JSON.stringify(v, replacer ?? filter, indentation)
          filterｰreplacer
            ? JSON.stringify(v, filterｰreplacer, indentation)
            : JSON.stringify(v, filter, indentation)
        )
      );
    };
  },
  { indentation: 2 }
);

export const makeｰcallable = (tag: nativeｰtag): callableｰtagｰfunction => {
  // Record the name of the callable tag, refusing nullish names
  const tagｰname = tag.name || "anoymousｰtag";
  // The return function has 2 overload signatures:
  function callable(strings: templateｰstrings, ...values: printable[]): any;
  function callable(stringｰliteral: string): any;
  function callable( // Here is the overloaded function implementation
    stringｰorｰstrings: string | templateｰstrings,
    ...values: printable[]
  ): any {
    if (typeof stringｰorｰstrings !== "string") {
      return tag(stringｰorｰstrings as templateｰstrings, ...values);
    }
    const strings = [stringｰorｰstrings]; // use same readonly object for strings and raw strings
    return tag(makeｰraw(strings));
  }
  rename(callable, tagｰname);
  callable.callable = true;
  return callable;
};

export interface parametrizableｰtagｰfunction<parameterｰtype extends object>
  extends callableｰtagｰfunction {
  (params?: parameterｰtype): parametrizableｰtagｰfunction<parameterｰtype>;
  parametrizable: boolean;
  defaultｰparameters: parameterｰtype;
  actualｰparameters?: parameterｰtype;
}

export const makeｰparametrizable = <parameterｰtype extends object>(
  parametrizableｰtag: (params: parameterｰtype) => nativeｰtag,
  defaultｰparameters: parameterｰtype
): parametrizableｰtagｰfunction<parameterｰtype> => {
  // Record the name of the callable tag, refusing nullish names
  const tagｰname = parametrizableｰtag.name || "anoymousｰtag";
  // The return function has 3 overload signatures:
  function parametrizable(
    strings: templateｰstrings,
    ...values: printable[]
  ): any;
  function parametrizable(stringｰliteral: string): any;
  function parametrizable(
    actualｰparameters?: parameterｰtype
  ): parametrizableｰtagｰfunction<parameterｰtype>;
  function parametrizable(...args: any[]): any {
    const self = parametrizable as parametrizableｰtagｰfunction<parameterｰtype>;
    const tag = self.actualｰparameters
      ? parametrizableｰtag(self.actualｰparameters)
      : parametrizableｰtag(self.defaultｰparameters);
    // call with default parameters
    if (args.length === 0) {
      function composite(s: templateｰstrings, ...v: printable[]): string {
        return tag`${(tag as nativeｰtag)(s, ...v)}`;
      }
      composite.actualｰparameters = defaultｰparameters;
      rename(composite, `${tagｰname}(${JSON.stringify(defaultｰparameters)})`);
      return composite;
    }
    // call with actual parameters
    const params = args[0];
    if (
      args.length === 1 &&
      !Array.isArray(params) &&
      typeof params !== "string" &&
      typeof params !== "function"
    ) {
      // function composite(s: templateｰstrings, ...v: printable[]): string {
    }
  }
  // function parametrizable<parameterｰtype>( // Here is the overloaded function implementation
  //   stringｰorｰstrings: string | templateｰstrings | parameterｰtype,
  //   ...values: printable[]
  // ): any {
  //   if (typeof stringｰorｰstrings !== "string") {
  //     return tag(stringｰorｰstrings as templateｰstrings, ...values);
  //   }
  //   const strings = [stringｰorｰstrings]; // use same readonly object for strings and raw strings
  //   return tag(makeｰraw(strings));
  // }
  // rename( parametrizable, tagｰname );
  // parametrizable.callable = true;
  // parametrizable.parametrizable = true;
  // switch (typeof defaultｰparameters) {
  //   case "number":
  //   case "string":
  //   case "boolean":
  //   case "undefined":
  //     parametrizable.defaultｰparameters = defaultｰparameters;
  //     break;
  //   default:
  //     // clone object, but beware, this doesn't clone functions nor dates nor complex structures
  //     parametrizable.defaultｰparameters = JSON.parse(
  //       JSON.stringify(defaultｰparameters)
  //     );
  // }
  return parametrizable as parametrizableｰtagｰfunction<parameterｰtype>;
};

// makeｰparametrizable

/**
 * @example
 * We extend tag functions so that they can be chained and also so that you can call them on regular strings.
 * >
 * When you compose chaianable tags, the innermost (deepest) tag is applied first, followed by tags of lesser depth,
 * until the outermost tag is called. For instance, if you log the following expression:
 *
 * ```typescript
 *  numbering({ prefix: "" })(paragraph(outdent))`
 *         This is some text with π = ${Math.PI}.
 *         This line has the same indentation as the previous one.
 *             This line has deeper indentation.
 *             This one too. There are 2 blank lines next.
 *
 *
 *         This line has the initial indentation level.
 *         And this is the last line.
 *         `;
 * ```
 * You get the following console output:
 * ```
 *  ₁│This is some text with π = 3.141592653589793.
 *  ₂│
 *  ₃│This line has the same indentation as the previous one.
 *  ₄│
 *  ₅│    This line has deeper indentation.
 *  ₆│
 *  ₇│    This one too. There are 2 blank lines next.
 *  ₈│
 *  ₉│This line has the initial indentation level.
 * ₁₀│
 * ₁₁│And this is the last line.
 * ```
 * Let's decompose this. The chainable tags are `numbering({ prefix: "" })(paragraph(outdent))`,
 * with the deepest tag (at the end of the chain) being the `outdent` tag. Thus the `outdent` tag
 * is the first to process the template literal.
 * >
 * This tag takes a template literal and removes as many spaces from the left of each line as there are in
 *  the least indented line(this tag is useful to keep code properly indented). In the example above, `outdent`
 * produces the following output:
 * ```
 * This is some text with π = 3.141592653589793.
 * This line has the same indentation as the previous one.
 *     This line has deeper indentation.
 *     This one too. There are 2 blank lines next.
 *
 * This line has the initial indentation level.
 * And this is the last line.
 *
 * ```
 * Note that the last line of output is blank, as `outdent` only folds blank lines but doesn't remove trailing ones.
 * >
 * Once the `outdent` tag has finished its job (expanding expressions such `Math.PI` in the process), the next tag
 * in line is the `paragraph` tag. This tag simply takes each line and inserts blank lines around it, then it folds
 * blank lines and removes trailing blank lines. When passed the previous output, it yields:
 * ```
 * This is some text with π = 3.141592653589793.
 *
 * This line has the same indentation as the previous one.
 *
 *     This line has deeper indentation.
 *
 *     This one too. There are 2 blank lines next.
 *
 * This line has the initial indentation level.
 *
 * And this is the last line.
 * ```
 * You can see that each input line has become a single paragraph.
 * >
 * Finally, the shallowest tag is the `numbering` tag. This tag takes some options, in this case, we tell it
 * to use an empty prefix before line numbers. Had we not done that, it would have produced the following output:
 * ```
 * │ ₁│This is some text with π = 3.141592653589793.
 * │ ₂│
 * │ ₃│This line has the same indentation as the previous one.
 * │ ₄│
 * │ ₅│    This line has deeper indentation.
 * │ ₆│
 * │ ₇│    This one too.
 * │ ₈│
 * │ ₉│This line has the initial indentation level.
 * │₁₀│
 * │₁₁│And this is the last line.
 * ```
 */
export interface chainableｰtagｰfunction extends nativeｰtag {
  /**
   * The chainable tag function interface indicates that a `chainableｰtagｰfunction` behaves as a regular {@linkcode nativeｰtag}
   * but can also take another `nativeｰtag` as input (for chaining) before applying itself to the template literal.
   * >
   * A `chainableｰtagｰfunction` can also process regular strings (either literals, variables or expressions), using the regular
   * function call syntax.
   */
  (nativeｰtag: nativeｰtag): chainableｰtagｰfunction;

  /**
   * {@see {@linkcode chainableｰtagｰfunction}}
   */
  (stringｰliteralｰorｰexpression: string): string;
}

/**
 * When creating a {@linkcode numberingｰcounter}, we pass it severall options, cf. detailed properties.
 */
export type numberingｰoptions = tagｰoptions & {
  /** where to start numbering from, default is 1 */
  numberｰfrom?: number;
  prefix?: string;
  suffix?: string;
  prefixｰzero?: string;
  suffixｰzero?: string;
  padｰwidth?: number;
  padｰwith?: string | number;
  padｰzeroｰwith?: string | number;
  numberingｰscheme?: keyof typeof numberingｰschemes;
  signｰall?: boolean;
};

/**
 * Turn a `(string, ...value) => string` tag function into a function that can accept a
 * chainable tag function in lieu of its string parameter and return a chainable tag function.
 * Furthermore, this makes the tag function callable on regular strings.
 *
 * Assuming you have 2 tag functions, `tag` and `parametrizedｰtag`, the second one taking a numeric parameter,
 * makeｰchainable allows you to call them as follows:
 *
 * ```typescript
 * // regular use:
 * console.log ( tag`Sample text with some ${expression} in it`);
 * console.log ( parametrizedｰtag(4)`Sample text with some ${expression} in it`);
 * // string based use:
 * console.log ( tag(`Sample text with some ${expression} in it`));
 * console.log ( parametrizedｰtag(4)(`Sample text with some ${expression} in it`));
 * // or more likely:
 * const msg = `Sample text with some ${expression} in it`;
 * console.log(tag(msg));
 * console.log(parametrizedｰtag(4)(msg));
 * // combining them, applying the parametrizedｰtag first:
 * console.log(tag(parametrizedｰtag(4))`Sample text with some ${expression} in it`)
 * // or applying the tag first, then the parametrized tag, and then reapplying the tag:
 * console.log(tag(parametrizedｰtag(4)(tag))`Sample text with some ${expression} in it`)
 * ```
 * @param tag - the tag function to be made chainable and callable on strings
 * @returns a chainable and string callable tag function
 */
const makeｰchainable = (tag: nativeｰtag): chainableｰtagｰfunction => {
  // Record the name of the chainable tag, refusing nullish names
  const tagｰname = tag.name || "anoymousｰtag";
  // The return function has 3 overload signatures:
  function chainable(strings: templateｰstrings, ...values: printable[]): string;
  function chainable(tag: nativeｰtag): chainableｰtagｰfunction;
  function chainable(stringｰliteral: string): string;
  // Here is the overloaded function implementation
  function chainable(
    stringsｰorｰtag: nativeｰtag | string | templateｰstrings,
    ...values: printable[]
  ): nativeｰtag | string {
    switch (typeof stringsｰorｰtag) {
      case "function": {
        // eslint-disable-next-line no-inner-declarations
        function composite(s: templateｰstrings, ...v: printable[]): string {
          return tag`${(stringsｰorｰtag as nativeｰtag)(s, ...v)}`;
        }
        rename(composite, `${tagｰname}(${stringsｰorｰtag.name})`);
        return composite;
      }
      case "string":
        return tag`${stringsｰorｰtag}`;
      default:
        return tag(stringsｰorｰtag as templateｰstrings, ...values);
    }
  }
  rename(chainable, tagｰname);
  return chainable;
};

/**
 * The `raw` tag is identical to [`String.raw`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/raw).
 * It isn't chainable with other tag functions, because these other
 * tag functions typically process escape characters. However, if raw is the
 * only tag or the deepest one (the first to be applied), escape characters
 * come out unprocessed.
 *
 * @param {templateｰstrings} strings - an array of string literals (this array is equipped with the raw property)
 * @param {printable[]} values... - the expressions to be substituted in the output
 * @returns a string that interleaves values into the strings array
 *
 * Note that if you use raw as a function, you must pass it an object with the raw property, along with values
 * to be substituted between iterations of that raw property, cf.
 * [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/raw#using_string.raw).
 *
 * Use `raw` either directly or nested the deepest in other tags, e.g.
 *
 * ```typescript
 * console.log ( raw`This is line1\nAnd this is line {1+1}` );
 * // => This is line1\nAnd this is line 2
 * console.log ( identity(raw)`This is line1\nAnd this is line {1+1}` );
 * // => This is line1\nAnd this is line 2
 * // but note that:
 * console.log ( raw(identity)`This is line1\nAnd this is line {1+1}` );
 * // This is line 1
 * // And this is line 2
 * ```
 */
export const raw: nativeｰtag = rename(String.raw, "raw");

/**
 * The `paragraph` tag removes duplicate blank lines and returns a set of paragraphs separated by single blank lines.
 * @returns a string that interleaves values into the strings array and that removes extraneous blank lines.
 */
export const paragraph: chainableｰtagｰfunction = makeｰchainable(
  rename(function (strings: templateｰstrings, ...values: printable[]): string {
    // split text into lines and stitch them with a single blank line inbetween
    return textｰlines(identity(strings, ...values))
      .filter((line) => line.trim())
      .join("\n\n");
  }, "paragraph")
);

/**
 * The `fold` tag removes line breaks. If you want to remove first level indentation too,
 * @see {@link outdent} to remove first level indentation, e.g. with `fold(outdent)`
 * @see {@link flush} to remove all indentation, e.g. with `fold(flush)`.
 */
export const fold: chainableｰtagｰfunction = makeｰchainable(
  rename(function (strings: templateｰstrings, ...values: printable[]): string {
    return textｰlines(identity(strings, ...values)).join("");
  }, "fold")
);

/**
 * The `flush`tag removes all leading spaces (flushes text left).
 * @see {@link outdent} to remove only the first level of indentation.
 */
export const flush: chainableｰtagｰfunction = makeｰchainable(
  rename(function (strings: templateｰstrings, ...values: printable[]): string {
    return textｰlines(identity(strings, ...values))
      .map((line) => line.trim())
      .join("\n");
  }, "flush")
);

/**
 * The `outdent`tag removes first level indentation.
 * @see {@link flush} to remove all indentation.
 */
export const outdent: chainableｰtagｰfunction = makeｰchainable(
  rename(function (strings: templateｰstrings, ...values: printable[]): string {
    const lines = textｰlines(identity(strings, ...values));
    // compute the minimum indentation across text lines
    const indentation = minｰindentation(lines);
    // remove that minimum indentation from all lines
    return lines.map((line) => line.slice(indentation)).join("\n");
  }, "outdent")
);

/**
 * The `indent` tag adds indentation to each line.
 * @see {@link outdent} and {@link flush} for related functions.
 */
export const indent = (n: number): chainableｰtagｰfunction =>
  makeｰchainable(
    rename(
      function (strings: templateｰstrings, ...values: printable[]): string {
        const lines = textｰlines(identity(strings, ...values));
        if (n >= 0) {
          // just add n spaces at head of lines
          const spaces = " ".repeat(n);
          return lines.map((line) => spaces.concat(line)).join("\n");
        }
        // if negative n, remove -n spaces capped by min indentation
        const indentation = Math.min(-n, minｰindentation(lines));
        return lines.map((line) => line.slice(indentation)).join("\n");
      },
      // rename indent function to include its parameter
      `indent(${n})`
    )
  );

/**
 * @todo THE MOST COMPLEX tag is to wrap lines to a max line length
 *
 */
interface jsonｰoptions {
  indentation?: number | string;
  filter?: (number | string)[] | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  replacer?: (key: string, value: any) => any;
}

export const jsonize = ({
  replacer,
  filter,
  indentation,
}: jsonｰoptions = {}): nativeｰtag => {
  let filterｰreplacer: typeof replacer;
  if (filter && replacer) {
    filter = filter.map((v) => v.toString());
    filterｰreplacer = (key, value) =>
      (filter as string[]).indexOf(key) >= 0 ? value : replacer?.(key, value);
  } else filterｰreplacer = replacer;
  if (!filter && !replacer) filter = null;
  return rename(function (
    strings: templateｰstrings,
    ...values: printable[]
  ): string {
    return identity(
      strings,
      ...values.map((v) =>
        // Would love to do this, but overloading cannot:
        // JSON.stringify(v, replacer ?? filter, indentation)
        filterｰreplacer
          ? JSON.stringify(v, filterｰreplacer, indentation)
          : JSON.stringify(v, filter, indentation)
      )
    );
  },
  `json(${JSON.stringify({ replacer, filter, indentation })})`);
};
export const pretty = jsonize({ indentation: 2 });
export const json = jsonize();

/** @todo, use this function whenever we need indentation; is this a candidate for a tag? */
const indentation = (line: string) => /^\s*/.exec(line)?.[0]?.length ?? 0;
type lineｰwithｰindent = {
  indent: number;
  line: string;
};
/** @todo move where appropriate; is this a candidate for a tag? */
const split =
  (n: number) =>
  (lineｰwithｰindent: lineｰwithｰindent): string[] => {
    if (lineｰwithｰindent.line.length <= n) return [lineｰwithｰindent.line];
    let i = lineｰwithｰindent.line.lastIndexOf(" ", n);
    if (i < 0 || i < lineｰwithｰindent.indent)
      i = lineｰwithｰindent.line.indexOf(" ", n);
    if (i < 0) return [lineｰwithｰindent.line]; // can't split line
    return [
      lineｰwithｰindent.line.substr(0, i),
      ...split(n)({
        indent: lineｰwithｰindent.indent,
        line:
          " ".repeat(lineｰwithｰindent.indent) +
          lineｰwithｰindent.line.substr(i + 1),
      }),
    ];
  };

export const wrap = (n: number): chainableｰtagｰfunction =>
  makeｰchainable(
    rename(function (
      strings: templateｰstrings,
      ...values: printable[]
    ): string {
      let [currentｰindentation, previousｰindentation] = [-1, -1];
      return (
        textｰlines(identity(strings, ...values))
          /** @todo create tag function for this */
          // fold multiple whitespaces into one
          .map((line) => line.replace(/\b\s+/g, " "))
          // remove trailing whitespace
          .map((line) => line.replace(/\s$/, ""))
          // join lines that have identical indentation, setting blank lines to empty lines
          .reduce(
            (lines: lineｰwithｰindent[], line: string): lineｰwithｰindent[] => {
              // update indentation levels
              [previousｰindentation, currentｰindentation] = [
                currentｰindentation,
                indentation(line),
              ];
              // preserve blank lines
              if (line.length <= currentｰindentation) {
                // reset indentation level so that nothing gets appended to blank line
                currentｰindentation = -1;
                return lines.concat({ indent: 0, line: "" });
              }
              // handle indentation changes by starting a new line
              if (previousｰindentation !== currentｰindentation)
                return lines.concat({
                  indent: currentｰindentation,
                  line,
                });
              // handle identical indentation by joining with previous line;
              // because initial indentation levels are impossible, we are guaranteed to have a previous line
              (lines[lines.length - 1] as lineｰwithｰindent).line +=
                line.replace(/^\s*/, " ");
              return lines;
            },
            []
          )
          // split lines longer than n characters
          .map(split(n))
          .flat()
          .join("\n")
      );
    },
    `wrap(${n})`)
  );

interface characterｰset {
  uppercase: string[];
  lowercase: string[];
  digits?: string[];
  symbols?: { [k: string]: string };
}

const characterｰbounds = {
  uppercase: {
    min: "A".codePointAt(0) as number,
    max: "Z".codePointAt(0) as number,
  },
  lowercase: {
    min: "a".codePointAt(0) as number,
    max: "z".codePointAt(0) as number,
  },
  digit: {
    min: "0".codePointAt(0) as number,
    max: "9".codePointAt(0) as number,
  },
} as const;

const characterｰsets: { readonly [name: string]: characterｰset } = {
  // serif (the default) must be the first entry!!
  serif: {
    uppercase: [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"],
    lowercase: [..."abcdefghijklmnopqrstuvwxyz"],
    digits: [..."0123456789"],
  },
  circledｰenclosedｰsans: {
    uppercase: [..."ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ"],
    lowercase: [..."ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ"],
    digits: [..."⓪①②③④⑤⑥⑦⑧⑨"],
  },
  fullｰwidthｰsans: {
    uppercase: [..."ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ"],
    lowercase: [..."ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ"],
    digits: [..."０１２３４５６７８９"],
    symbols: {
      $: "＄",
      _: "＿",
      "!": "！",
      "?": "？",
      "#": "＃",
      "¢": "￠",
      "£": "￡",
      "¥": "￥",
      "₩": "￦",
      "%": "％",
      "&": "＆",
      "@": "＠",
      ".": "．",
      ",": "，",
      ":": "：",
      ";": "；",
      "(": "（",
      ")": "）",
      "[": "［",
      "]": "］",
      "{": "｛",
      "}": "｝",
      "⸨": "｟",
      "⸩": "｠",
      "⸢": "「",
      "⸥": "」",
      "/": "／",
      "\\": "＼",
      "¯": "￣",
      "|": "｜",
      "¦": "￤",
      "^": "＾",
      ˆ: "＾",
      "`": "｀",
      "˜": "～",
      "~": "～",
      "'": "＇",
      '"': "＂",
      "+": "＋",
      "-": "－",
      "<": "＜",
      "=": "＝",
      ">": "＞",
      "¬": "￢",
      "*": "＊",
    },
  },
  boldｰserif: {
    uppercase: [..."𝐀𝐁𝐂𝐃𝐄𝐅𝐆𝐇𝐈𝐉𝐊𝐋𝐌𝐍𝐎𝐏𝐐𝐑𝐒𝐓𝐔𝐕𝐖𝐗𝐘𝐙"],
    lowercase: [..."𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳"],
    digits: [..."𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗"],
  },
  italicｰserif: {
    uppercase: [..."𝐴𝐵𝐶𝐷𝐸𝐹𝐺𝐻𝐼𝐽𝐾𝐿𝑀𝑁𝑂𝑃𝑄𝑅𝑆𝑇𝑈𝑉𝑊𝑋𝑌𝑍"],
    lowercase: [..."𝑎𝑏𝑐𝑑𝑒𝑓𝑔ℎ𝑖𝑗𝑘𝑙𝑚𝑛𝑜𝑝𝑞𝑟𝑠𝑡𝑢𝑣𝑤𝑥𝑦𝑧"],
  },
  boldｰitalicｰserif: {
    uppercase: [..."𝑨𝑩𝑪𝑫𝑬𝑭𝑮𝑯𝑰𝑱𝑲𝑳𝑴𝑵𝑶𝑷𝑸𝑹𝑺𝑻𝑼𝑽𝑾𝑿𝒀𝒁"],
    lowercase: [..."𝒂𝒃𝒄𝒅𝒆𝒇𝒈𝒉𝒊𝒋𝒌𝒍𝒎𝒏𝒐𝒑𝒒𝒓𝒔𝒕𝒖𝒗𝒘𝒙𝒚𝒛"],
  },
  italicｰscript: {
    uppercase: [..."𝒜ℬ𝒞𝒟ℰℱ𝒢ℋℐ𝒥𝒦ℒℳ𝒩𝒪𝒫𝒬ℛ𝒮𝒯𝒰𝒱𝒲𝒳𝒴𝒵"],
    lowercase: [..."𝒶𝒷𝒸𝒹ℯ𝒻ℊ𝒽𝒾𝒿𝓀𝓁𝓂𝓃ℴ𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏"],
  },
  boldｰitalicｰscript: {
    uppercase: [..."𝓐𝓑𝓒𝓓𝓔𝓕𝓖𝓗𝓘𝓙𝓚𝓛𝓜𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩"],
    lowercase: [..."𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃"],
  },
  frakturｰitalicｰscript: {
    uppercase: [..."𝔄𝔅ℭ𝔇𝔈𝔉𝔊ℌℑ𝔍𝔎𝔏𝔐𝔑𝔒𝔓𝔔ℜ𝔖𝔗𝔘𝔙𝔚𝔛𝔜ℨ"],
    lowercase: [..."𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷"],
  },
  boldｰfrakturｰitalicｰscript: {
    uppercase: [..."𝕬𝕭𝕮𝕯𝕰𝕱𝕲𝕳𝕴𝕵𝕶𝕷𝕸𝕹𝕺𝕻𝕼𝕽𝕾𝕿𝖀𝖁𝖂𝖃𝖄𝖅"],
    lowercase: [..."𝖆𝖇𝖈𝖉𝖊𝖋𝖌𝖍𝖎𝖏𝖐𝖑𝖒𝖓𝖔𝖕𝖖𝖗𝖘𝖙𝖚𝖛𝖜𝖝𝖞𝖟"],
  },
  doubleｰstruckｰboldｰsans: {
    uppercase: [..."𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ"],
    lowercase: [..."𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫"],
    digits: [..."𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡"],
  },
  sans: {
    uppercase: [..."𝖠𝖡𝖢𝖣𝖤𝖥𝖦𝖧𝖨𝖩𝖪𝖫𝖬𝖭𝖮𝖯𝖰𝖱𝖲𝖳𝖴𝖵𝖶𝖷𝖸𝖹"],
    lowercase: [..."𝖺𝖻𝖼𝖽𝖾𝖿𝗀𝗁𝗂𝗃𝗄𝗅𝗆𝗇𝗈𝗉𝗊𝗋𝗌𝗍𝗎𝗏𝗐𝗑𝗒𝗓"],
    digits: [..."𝟢𝟣𝟤𝟥𝟦𝟧𝟨𝟩𝟪𝟫"],
  },
  boldｰsans: {
    uppercase: [..."𝗔𝗕𝗖𝗗𝗘𝗙𝗚𝗛𝗜𝗝𝗞𝗟𝗠𝗡𝗢𝗣𝗤𝗥𝗦𝗧𝗨𝗩𝗪𝗫𝗬𝗭"],
    lowercase: [..."𝗮𝗯𝗰𝗱𝗲𝗳𝗴𝗵𝗶𝗷𝗸𝗹𝗺𝗻𝗼𝗽𝗾𝗿𝘀𝘁𝘂𝘃𝘄𝘅𝘆𝘇"],
    digits: [..."𝟬𝟭𝟮𝟯𝟰𝟱𝟲𝟳𝟴𝟵"],
  },
  italicｰsans: {
    uppercase: [..."𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡"],
    lowercase: [..."𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻"],
  },
  boldｰitalicｰsans: {
    uppercase: [..."𝘼𝘽𝘾𝘿𝙀𝙁𝙂𝙃𝙄𝙅𝙆𝙇𝙈𝙉𝙊𝙋𝙌𝙍𝙎𝙏𝙐𝙑𝙒𝙓𝙔𝙕"],
    lowercase: [..."𝙖𝙗𝙘𝙙𝙚𝙛𝙜𝙝𝙞𝙟𝙠𝙡𝙢𝙣𝙤𝙥𝙦𝙧𝙨𝙩𝙪𝙫𝙬𝙭𝙮𝙯"],
  },
  monospaceｰitalicｰboldｰserif: {
    uppercase: [..."𝙰𝙱𝙲𝙳𝙴𝙵𝙶𝙷𝙸𝙹𝙺𝙻𝙼𝙽𝙾𝙿𝚀𝚁𝚂𝚃𝚄𝚅𝚆𝚇𝚈𝚉"],
    lowercase: [..."𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣"],
    digits: [..."𝟶𝟷𝟸𝟹𝟺𝟻𝟼𝟽𝟾𝟿"],
  },
};

const formatter = (keywords: string[]): ((text: string) => string) => {
  // prioritize sans-serif over serif
  if (keywords.indexOf("sans") >= 0) {
    const serif = keywords.indexOf("serif");
    if (serif >= 0) keywords.splice(serif, 1);
  }
  const score = (font: string): number =>
    keywords.reduce(
      (score, keyword) => score + (font.indexOf(keyword) >= 0 ? 1 : 0),
      0
    );

  const bestｰfont = Object.keys(characterｰsets)
    .map((font) => [font, score(font)])
    .sort(
      ([, score1], [, score2]) => (score2 as number) - (score1 as number)
    )[0]?.[0];

  const characterｰset = characterｰsets[bestｰfont ?? "serif"] as characterｰset;

  return (text: string) =>
    [...text]
      .map((char: string): string => {
        const c: number = char.codePointAt(0) as number;
        switch (true) {
          case characterｰbounds.uppercase.min <= c &&
            c <= characterｰbounds.uppercase.max:
            return characterｰset.uppercase[
              c - characterｰbounds.uppercase.min
            ] as string;
          case characterｰbounds.lowercase.min <= c &&
            c <= characterｰbounds.lowercase.max:
            return characterｰset.lowercase[
              c - characterｰbounds.lowercase.min
            ] as string;
          case characterｰbounds.digit.min <= c &&
            c <= characterｰbounds.digit.max:
            return (
              (characterｰset.digits?.[
                c - characterｰbounds.digit.min
              ] as string) ?? char
            );
          case char in (characterｰset.symbols ?? {}):
            return characterｰset.symbols?.[char] ?? char;
          default:
            return char;
        }
      })
      .join("");
};

export const format = (format: string): chainableｰtagｰfunction => {
  const keywords = format
    .toLowerCase()
    .replace(/\s*/, "")
    .split(/ｰ|-|\s|,|;/);

  return makeｰchainable(
    rename(
      function (strings: templateｰstrings, ...values: printable[]): string {
        const lines = textｰlines(identity(strings, ...values));
        return lines.map(formatter(keywords)).join("\n");
      },
      // rename indent function to include its parameter
      `format(${keywords})`
    )
  );
};
export const bold = format("bold");
export const italic = format("italic");
export const fraktur = format("fraktur");
export const boldｰsans = format("bold-sans");

export const alphabetize = ({ uppercase = false } = {}): ((
  n: number,
  s?: string
) => string) => {
  // ancillary function to generate alphabetic numbering functions
  const alphaｰbase = (uppercase ? "A" : "a").charCodeAt(0);
  return function alpha(n: number, s = ""): string {
    // tail recursive
    return n < 1
      ? s
      : alpha(
          Math.floor((n - 1) / 26),
          String.fromCharCode(((n - 1) % 26) + alphaｰbase) + s
        );
  };
};

export const romanize = ({ uppercase = true } = {}): ((
  n: number,
  s?: string
) => string) => {
  /**
   * Note that the roman literals below are not Unicode roman digits, but latin letters, as per Unicode recommendation
   * @todo, explain this further. See {@link [Wikipedia](https://en.wikipedia.org/wiki/Roman_numerals)}
   */
  type literal = readonly [string, number];
  const literals: readonly literal[] = (
    [
      ["M", 1000],
      ["CM", 900],
      ["D", 500],
      ["CD", 400],
      ["C", 100],
      ["XC", 90],
      ["L", 50],
      ["XL", 40],
      ["X", 10],
      ["IX", 9],
      ["V", 5],
      ["IV", 4],
      ["I", 1],
    ] as literal[]
  ).map(([roman, arabic]: literal) => [
    uppercase ? roman : roman?.toLowerCase(),
    arabic,
  ]);
  return function roman(n: number, s = ""): string {
    if (n < 0) return "-" + roman(-n, s);
    for (const [key, val] of literals) {
      if (n >= val) {
        return roman(n - val, s + key);
      }
    }
    return s;
  };
};

export const arabize = ({ big = false } = {}): ((n: number) => string) => {
  const smallｰdigits: { [k: string]: string } = {
    "0": "₀",
    "1": "₁",
    "2": "₂",
    "3": "₃",
    "4": "₄",
    "5": "₅",
    "6": "₆",
    "7": "₇",
    "8": "₈",
    "9": "₉",
  };
  const mapper: (c: string) => string = big
    ? (c) => c
    : (c) => smallｰdigits[c] ?? c;
  return function digit(n: number): string {
    return [...`${n}`].map(mapper).join("");
  };
};

export const numberingｰschemes = {
  alpha: alphabetize({ uppercase: false }),
  Alpha: alphabetize({ uppercase: true }),
  roman: romanize({ uppercase: false }),
  Roman: romanize({ uppercase: true }),
  digit: arabize({ big: false }),
  Digit: arabize({ big: true }),
};

export const maxｰpaddingｰwidth = (
  from: number,
  length: number,
  scheme: keyof typeof numberingｰschemes = "digit",
  signed = false
): number => {
  const sign = from < 0 || signed ? 1 : 0;
  const max = Math.max(Math.abs(from), Math.abs(length));
  const base: any = (
    {
      alpha: Math.log(26),
      digit: Math.log(10),
      roman: [1, 2, 3, 8, 18, 28, 38, 88, 188, 288, 388, 888, 1888, 2888, 3888],
    } as Record<string, any>
  )[(scheme ?? "digit").toLocaleLowerCase()];
  if (typeof base === "number") return sign + Math.ceil(Math.log(max) / base);
  return sign + (base as number[]).findIndex((element) => element > max);
};

export class numberingｰcounter {
  public value: number;
  private readonly stringｰpadding: boolean;
  private readonly stringify: (n: number) => string;
  private padder: (n: number) => string = arabize();
  constructor(
    private readonly options: numberingｰoptions = {} // padｰwith: string | number = " ",
  ) {
    this.value = options.numberｰfrom ?? 0;
    this.options.prefix ??= "";
    this.options.suffix ??= "";
    this.options.suffixｰzero ??= this.options.suffix;
    this.options.padｰwidth ??= 0;
    this.options.padｰwith = `${options.padｰwith ?? " "}`;
    this.options.padｰzeroｰwith = `${
      options.padｰzeroｰwith ?? this.options.padｰwith
    }`;
    this.options.signｰall ??= false;
    this.stringｰpadding = isNaN(parseInt(this.options.padｰwith));
    this.stringify = numberingｰschemes[options.numberingｰscheme ?? "digit"];
    // build padding function
    this.padder = (n: number) => {
      const sign = this.options.signｰall
        ? ["-", "±", "+"][Math.sign(n) + 1]
        : n < 0
        ? "-"
        : "";
      const { prefix, suffix } = n
        ? this.options
        : {
            prefix: this.options.prefixｰzero,
            suffix: this.options.suffixｰzero,
          };
      const nｰasｰstring = this.stringify(Math.abs(n));
      const padding = (
        n ? this.options.padｰwith : this.options.padｰzeroｰwith
      ) as string;

      if (this.stringｰpadding) {
        return (
          prefix +
          (sign + nｰasｰstring).padStart(
            this.options.padｰwidth as number,
            padding
          ) +
          suffix
        );
      }
      const width =
        (this.options.padｰwidth as number) -
        (n < 0 && !this.options.signｰall ? 1 : 0);
      return (
        (prefix as string) +
        sign +
        nｰasｰstring.padStart(width, padding) +
        suffix
      );
    };
  }
  get reset(): this {
    this.value = this.options.numberｰfrom ?? 0;
    return this; // for chaining
  }
  get next(): this {
    this.value++;
    return this; // for chaining
  }
  get raw(): string {
    return this.stringify(this.value);
  }
  get pad(): string {
    return this.padder(this.value);
  }
}

/**
 * The `numbering` tag adds numbering to each line.
 * @param numberｰfrom - where to start numbering from
 * @param suffix - numbering suffix
 * @param padｰwith - what to pad numbers to the left
 * @param padｰwidth - width of padded numbering, defaults to number of digits
 * @returns numbered lines
 * @see {@link outdent} and {@link flush} for related functions.
 */
export const numbering = (
  options: numberingｰoptions = {}
): chainableｰtagｰfunction =>
  makeｰchainable(
    rename(
      function (strings: templateｰstrings, ...values: printable[]): string {
        const lines = textｰlines(identity(strings, ...values));
        options.numberｰfrom ??= 0;
        options.prefix ??= "│";
        options.suffix ??= "│";
        options.prefixｰzero ??= "┼";
        options.suffixｰzero ??= "┼";
        options.padｰwith ??= " ";
        options.padｰzeroｰwith ??= "─";

        options.padｰwidth = maxｰpaddingｰwidth(
          options.numberｰfrom,
          lines.length,
          options.numberingｰscheme,
          options.signｰall
        );

        const index = new numberingｰcounter(options);

        return lines.map((line) => `${index.next.pad}${line}`).join("\n");
      },
      // rename indent function to include its parameters
      Object.keys(options).length === 0
        ? `numberｰlines`
        : `number(${JSON.stringify(options)})`
    )
  );
export const numberｰlines = numbering();
