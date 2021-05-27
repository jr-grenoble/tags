import {
  boldｰsans,
  chainableｰtagｰfunction,
  ctagｰfunction,
  flush,
  fold,
  fraktur,
  identity,
  indent,
  italic,
  numbering,
  numberingｰoptions,
  numberｰlines,
  outdent,
  paragraph,
  pretty,
  printable,
  raw,
  serialize,
  tagｰfunction,
  wrap,
} from "./libs/tags";

const log = (...args: printable[]) =>
  console.log(
    args.reduce(
      (text: string, value: printable) => text.concat(value.toString()),
      ""
    )
  );
const test = (
  tag: chainableｰtagｰfunction | tagｰfunction | ctagｰfunction,
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
  identity,
  serialize`➀ Trying json on ${numberingｰoptions} and on ${[
    1, 2, 3,
  ]} plus on ${ab} and ${{ c: 3, d: { e: 4, f: [5, 6] } } as printable}`
);

test(
  identity,
  serialize(
    `➁ Trying json on ${numberingｰoptions} and on ${[
      1, 2, 3,
    ]} plus on ${ab} and ${{ c: 3, d: { e: 4, f: [5, 6] } } as printable}`
  )
);

test(
  identity,
  serialize({
    indentation: 8,
    filter: ["c", "d", "e"],
  })`➂ Trying json on ${numberingｰoptions} and on ${[
    1, 2, 3,
  ]} plus on ${ab} and ${{ c: 3, d: { e: 4, f: [5, 6] } } as printable}`
);

test(
  identity,
  serialize(indent(5))`➂ Trying json on ${numberingｰoptions} and on ${[
    1, 2, 3,
  ]} plus on ${ab} and ${{ c: 3, d: { e: 4, f: [5, 6] } } as printable}`
);

test(
  identity,
  serialize({
    indentation: 8,
    filter: ["c", "d", "e"],
  })(indent(5))`➂ Trying json on ${numberingｰoptions} and on ${[
    1, 2, 3,
  ]} plus on ${ab} and ${{ c: 3, d: { e: 4, f: [5, 6] } } as printable}`
);
