/**
 * @module юｰtypes - Core ю types
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
 * The author hereby grants Facts Haven SAS and its affiliates the right to use and perform any derivative works.
 *
 */

/**
 * Native tags have the following signature:
 * `(...юｰtemplateｰliterals): any`
 * To simplify processing, we turn these into {@linkcode юｰparameters}.
 */
export interface printable {
  toString(): string;
}
export type юｰtemplateｰliterals = [TemplateStringsArray, ...printable[]];
/**
 * Test if arguments are юｰtemplateｰliterals
 * @param args - the arguments array to test
 * @returns whether these arguments are юｰtemplateｰliterals
 */
export const юｰtemplateｰliteralsʔ̣ = (args: any) =>
  Array.isArray(args) &&
  args.length > 0 &&
  "length" in args[0] &&
  "raw" in args[0] &&
  "length" in args[0].raw &&
  typeof args[0][0] === "string" &&
  args[0].length === args[0].raw.length &&
  args.length === args[0].length;

/**
 * All tag functions process and return `юｰparameters`
 */
export type юｰparameters = {
  literals: { cooked: string; raw: string }[];
  expressions: printable[];
};

/**
 * Test if arguments are юｰparameters
 * @param args - the arguments array to test
 * @returns whether these arguments are юｰparameters
 */
export const юｰparametersʔ̣ = (args: any) =>
  typeof args === "object" &&
  "literals" in args &&
  Array.isArray(args.literals) &&
  args.literals.length > 0 &&
  typeof args.literals[0] === "object" &&
  "cooked" in args.literals[0] &&
  "expressions" in args &&
  Array.isArray(args.expressions) &&
  args.expressions.length <= args.literals.length;

/**
 * Coerce юｰtemplateｰliterals arguments into юｰparameters.
 * If the arguments are not юｰtemplateｰliterals, return them unchanged
 * @param args - the юｰtemplateｰliterals arguments
 * @returns the corresponding юｰparameters
 */

export const юｰtemplateｰliteralsｰtoｰparametersǃ = (args: any) =>
  юｰtemplateｰliteralsʔ̣(args)
    ? {
        literals: Array.prototype.map.call(
          args[0],
          (s: string, i: number, ts: readonly string[]) => ({
            cooked: s,
            raw: (ts as TemplateStringsArray).raw[i],
          })
        ),
        expressions: args.slice(1),
      }
    : args;
/**
 * Assemble юｰparameters into a string by interleaving literals and expressions
 * @param юｰparameters - the юｰparameters to be stitched together
 * @returns the combined юｰparameters
 */
export const юｰparametersｰtoｰstringǃ = (юｰparameters: юｰparameters) =>
  юｰparameters.expressions.reduce<string>(
    (string: string, expression: printable, index: number) =>
      `${string}${expression}${юｰparameters.literals[index + 1]!.cooked}`,
    юｰparameters.literals[0]!.cooked as string
  );

const tag = (strings, ...values) =>
  values.reduce((s, v, i, strings) => `${s}${v}${strings[i + 1]}`, strings[0]);
