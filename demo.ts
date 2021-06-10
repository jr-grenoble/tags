import {
  boldｰsans,
  chainableｰtagｰfunction,
  flush,
  fold,
  fraktur,
  identity,
  indent,
  italic,
  nativeｰtag,
  numbering,
  numberingｰoptions,
  numberｰlines,
  outdent,
  paragraph,
  pretty,
  printable,
  raw,
  tag,
  wrap,
} from "./libs/tags";

const log = (...args: printable[]) =>
  console.log(
    args.reduce(
      (text: string, value: printable) => text.concat(value.toString()),
      ""
    )
  );
const test = <T>(
  tag: chainableｰtagｰfunction | nativeｰtag | tag<T>,
  text: string
): void => {
  log("\n———Test---\n", tag.name, "\n=>\n", tag`${text}`, "\n<=\n");
};
const text = `
      Mais, vous savez, moi je ne crois pas qu’il y ait de bonne ou de mauvaise situation.
      Moi, si je devais résumer ma vie aujourd’hui avec vous, je dirais que c’est d’abord des rencontres,
      des gens qui m’ont tendu la main, peut-être à un moment où je ne pouvais pas, où j’étais seul chez moi.
          Et c’est assez curieux de se dire que les hasards, les rencontres forgent une destinée…
          Parce que quand on a le goût de la chose, quand on a le goût de la chose bien faite, le beau geste,
          parfois on ne trouve pas l’interlocuteur en face, je dirais, le miroir qui vous aide à avancer.
          Alors ce n’est pas mon cas, comme je le disais là, puisque moi au contraire, j’ai pu ;
          et je dis merci à la vie, je lui dis merci, je chante la vie, je danse la vie… Je ne suis qu’amour !
      Et finalement, quand beaucoup de gens aujourd’hui me disent :
      « Mais comment fais-tu pour avoir cette humanité ? »
      Eh bien je leur réponds très simplement, je leur dis que c’est ce goût de l’amour,
      ce goût donc qui m’a poussé aujourd’hui à entreprendre une construction mécanique, mais demain, qui sait,
      peut-être simplement à me mettre au service de la communauté, à faire le don, le don de soi…
    
      Mais, vous savez, moi je ne crois pas qu’il y ait de bonne ou de mauvaise situation.
      
      Moi, si je devais résumer ma vie aujourd’hui avec vous, je dirais que c’est d’abord des rencontres,
      des gens qui m’ont tendu la main, peut-être à un moment où je ne pouvais pas, où j’étais seul chez moi.
                Et c’est assez curieux de se dire que les hasards, les rencontres forgent une destinée…
                Parce que quand on a le goût de la chose, quand on a le goût de la chose bien faite, le beau geste,
                parfois on ne trouve pas l’interlocuteur en face, je dirais, le miroir qui vous aide à avancer.
                
                
                Alors ce n’est pas mon cas, comme je le disais là, puisque moi au contraire, j’ai pu ;
                et je dis merci à la vie, je lui dis merci, je chante la vie, je danse la vie… Je ne suis qu’amour !
                
      Et finalement, quand beaucoup de gens aujourd’hui me disent :
      « Mais comment fais-tu pour avoir cette humanité ? »
        Eh bien je leur réponds très simplement, je leur dis que c’est ce goût de l’amour,
        ce goût donc qui m’a poussé aujourd’hui à entreprendre une construction mécanique, mais demain,
        qui sait, peut-être simplement à me mettre au service de la communauté, à faire le don, le don de soi…
    
    .
                `;
test(paragraph, text);
test(outdent, text);
test(flush, text);
test(fold, text);
test(identity(fold(flush)), text);
test(indent(10)(outdent), text);
test(identity(indent(-3)), text);
test(
  // Tags.identity,
  raw,
  raw`
        This is a test\n\n\t\nWe are computing π:     
        (and by the    way, \t    this ain't easy)




${Math.PI}
`
);
const ab = { a: 1, b: 2 };
const indentｰtext = `
        This line as minimally indented.
        The next one is also minimal.
                This is some fairly long text: the quick brow fox jumps over the lazy dog.
                This is the deepest.
                This line has the same indentation as the previous one.
                It is indented by 8 spaces compared to the minimum level.
        We are back at minimal level.
        And we stay there.
            This line is deeper indented.
            It has a depth of 4 spaces.
            This one too.
            And that one too.
            Here we insert some array expression ${[1, 2, 3]}
            plus an object ${ab} and an object
            literal ${{ c: 3, d: { e: 4, f: [5, 6] } } as printable}
    
    
        This line has the initial indentation level.
        And this is the last line before a newline.
        `;
const numberingｰoptions: numberingｰoptions = {
  padｰwith: " ",
  numberｰfrom: -25,
  // prefix: "«",
  // suffix: "» ",
  numberingｰscheme: "roman",
};
test(numbering(numberingｰoptions)(wrap(20)(outdent)), indentｰtext);
test(numberｰlines(fraktur(wrap(20)(outdent))), indentｰtext);
test(
  italic,
  `Some text with ${boldｰsans`embedded bold`} and ${fraktur`fraktur text`}`
);
test(
  numbering({})(wrap(20)(outdent)),
  pretty`
         This is some text with π = ${Math.PI}.
         This line has the same indentation as the previous one.
             This line has deeper indentation.
             This one too.  Here we insert some array expression ${[1, 2, 3]}
             plus an object ${ab} and an object
             literal ${{ c: 3, d: { e: 4, f: [5, 6] } } as printable}

             
         This line has the initial indentation level.
         And this is the last line.
         `
);

test(
  identity({ indentｰvalues: false }),
  identity({ indentｰvalues: true })`
            This is line 1   
            This is line 2\n    
            and 3
            This is an ${JSON.stringify(
              {
                expression: true,
                number: 3,
                object: {
                  a: "a",
                  b: { c: "c", d: {} },
                },
                date: undefined,
              },
              null,
              4
            )} plus   
            some trailing text.`
);

test(
  identity,
  identity(identity, identity)`Here's an array${JSON.stringify(
    Array(10).fill(Math.random()),
    null,
    4
  )}`
);
// test(
//   identity,
//   serialize`➀ Trying json on ${numberingｰoptions} and on ${[
//     1, 2, 3,
//   ]} plus on ${ab} and ${{ c: 3, d: { e: 4, f: [5, 6] } } as printable}`
// );

// test(
//   identity,
//   serialize(
//     `➁ Trying json on ${numberingｰoptions} and on ${[
//       1, 2, 3,
//     ]} plus on ${ab} and ${{ c: 3, d: { e: 4, f: [5, 6] } } as printable}`
//   )
// );

// test(
//   identity,
//   serialize({
//     indentation: 8,
//     filter: ["c", "d", "e"],
//   })`➂ Trying json on ${numberingｰoptions} and on ${[
//     1, 2, 3,
//   ]} plus on ${ab} and ${{ c: 3, d: { e: 4, f: [5, 6] } } as printable}`
// );

// test(
//   identity,
//   serialize(indent(5))`➂ Trying json on ${numberingｰoptions} and on ${[
//     1, 2, 3,
//   ]} plus on ${ab} and ${{ c: 3, d: { e: 4, f: [5, 6] } } as printable}`
// );

// test(
//   rename(identity, "cowboy"),
//   serialize({
//     indentation: 8,
//     filter: ["c", "d", "e"],
//   })(indent(5))`➂ Trying json on ${numberingｰoptions} and on ${[
//     1, 2, 3,
//   ]} plus on ${ab} and ${{ c: 3, d: { e: 4, f: [5, 6] } } as printable}`
// );

// core ю object
type юｰꮊ = {
  stack: {
    readonly method: any;
    readonly options: any;
  }[];
  readonly literals: { cooked: string; raw: string }[];
  readonly expressions: any[];
};
const юｰꮊ: юｰꮊ = { stack: [], literals: [], expressions: [] };

interface юｰtag extends Function {
  t: юｰtag;
  (...args: any[]): юｰtag;
}
class юｰtag extends Function {
  // each Ю tag has a unique id
  private static uuid = 0;
  // we keep track of the proxy here
  private self: юｰtag;
  private id: string;
  constructor() {
    super();
    юｰtag.uuid += 1;
    this.id = `юｰtag «${юｰtag.uuid}»`;
    this.self = new Proxy(this, {
      // use => syntax so that this is in context and can refer to self !
      apply: (target, _ðɪs, args) => {
        console.log(`${target.id} proxy call(${args})`);
        return this.self;
      },
      // use => syntax so that this is in context and can refer to self !
      get: (target, property, _proxy) => {
        console.log(`${target.id} proxy access->${String(property)}`);
        return this.self;
      },
    });
    return this.self;
  }
}
class юｰroot extends Function {
  // each юｰroot has a unique id
  private static uuid = 0;
  private self: юｰroot;
  public readonly id: string;
  /**
   *
   * declare a stack here
   */

  constructor() {
    super();
    юｰroot.uuid += 1;
    this.id = `юｰroot «${юｰroot.uuid}»`;
    /**
     * initialize the stack
     */
    this.self = new Proxy(this, {
      // use => syntax so that this is in context and can refer to self !
      apply: (target, _ðɪs, args) => {
        console.log(`${target.id} proxy call(${args})`);
        /**
         * insert logic here to handle either an options record, or template literal args
         * if passed template literals, it's the end of the chain, build and then return a string
         * if passed options, store these in the stack and return self for further processing
         */
        return this.self;
      },
      // use => syntax so that this is in context and can refer to self !
      get: (target, property, _proxy) => {
        console.log(`${target.id} proxy access->${String(property)}`);
        /**
         * fetch tag (from prototype? if so, an addｰtag method on the object would help)
         * then pass it (via new and constructor?) a copy of the options
         */
        return this.self;
      },
    });
    return this.self;
  }
}

void new юｰroot();

const expression = {
  array: [] as number[],
  get next(): number[] {
    this.array.push(this.array.length);
    return this.array;
  },
  toString(): string {
    return JSON.stringify(this.array);
  },
};
const ю = new юｰtag();

const tests = [
  ю`text ${expression.next}`,
  ю(1)`text ${expression.next}`,
  ю.t`text ${expression.next}`,
  ю(3).t`text ${expression.next}`,
  ю.t(4)`text ${expression.next}`,
  ю(5).t(6)`text ${expression.next}`,
  ю.t.t`text ${expression.next}`,
  ю.t`abc`(8),
  // might work the day we have one object per ю:
  // ю.t.t`text ${ ю.t( 9 )`abc` }`,
];
void tests;
