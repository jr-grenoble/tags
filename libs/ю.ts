/**
 * @todo explain
 */
import юｰoptions from "./юｰoptions";

// basic types
export interface printable {
  toString(): string;
}
export type юｰparameters = {
  literals: { cooked: string; raw: string }[];
  expressions: printable[];
};
export type юｰtemplateｰliterals = [TemplateStringsArray, ...printable[]];
/**
 * Test if arguments are юｰparameters
 * @param args - the arguments array to test
 * @returns whether these arguments are юｰparameters
 */
export const юｰparametersʔ̣ = (args: any) =>
  Array.isArray(args) &&
  args.length === 1 &&
  typeof args[0] === "object" &&
  "expressions" in args[0] &&
  "literals" in args[0] &&
  "cooked" in args[0].literals;

export const юｰtemplateｰliteralsʔ̣ = (args: any) =>
  Array.isArray(args) &&
  args.length > 0 &&
  "length" in args[0] &&
  "raw" in args[0];

export const юｰtemplateｰliteralsｰtoｰparametersǃ = (args: any) =>
  юｰtemplateｰliteralsʔ̣(args)
    ? {
        literals: args[0].map(
          (s: string, i: number, ts: { raw: string[] }) => ({
            cooked: s,
            raw: ts.raw[i],
          })
        ),
        expressions: args.slice(1),
      }
    : args;

export const юｰparametersｰtoｰstringǃ = (юｰparameters: юｰparameters) =>
  юｰparameters.expressions.reduce<string>(
    (string: string, expression: printable, index: number) =>
      `${string}${expression}${юｰparameters.literals[index + 1]!.cooked}`,
    юｰparameters.literals[0]!.cooked as string
  );

export class юｰroot extends Function {
  // each юｰroot has a unique id
  private static uuid = 0;
  private self: юｰroot;
  public readonly id: string;

  constructor(readonly юｰoptions: юｰoptions) {
    super();
    юｰroot.uuid += 1;
    this.id = `юｰroot «${юｰroot.uuid}»`;

    this.self = new Proxy(this, {
      // use => syntax so that this is in context and can refer to self !
      apply: (target, _ðɪs, args) => {
        console.log(`${target.id} proxy call(${args})`);
        // normalize template literals into ю parameters
        args = юｰtemplateｰliteralsｰtoｰparametersǃ(args);
        // if arguments aren't ю parameters, add them to options and return self for chaining
        if (!юｰparametersʔ̣(args)) {
          this.юｰoptions.object = args;
          return this.self;
        }
        // here we know args are юｰparameters, return a string
        return юｰparametersｰtoｰstringǃ(args as unknown as юｰparameters);
      },
      // use => syntax so that this is in context and can refer to self !
      get: (target, property, _proxy) => {
        console.log(`${target.id} proxy access->${String(property)}`);
        /**
         * @todo fetch tag (from prototype? if so, an addｰtag method on the object would help)
         * then pass it (via new and constructor?) a copy of the options
         */
        return this.self;
      },
    });
    return this.self;
  }
}
