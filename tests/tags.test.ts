/**
 * @module Tags.test - Tests for Tags
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
 */

import { expect } from "chai";
import {
  makeｰtag,
  nativeｰtag,
  printable,
  tagｰoptions,
  templateｰstrings,
} from "../libs/tags";

describe("tag types", () => {
  type tagｰoutput = {
    string: string;
    number: number;
    options?: tagｰoptions;
  };
  // Return an object containing all strings joined by newlines and 42 plus the sum of its parameters
  const simpleｰnativeｰtag: nativeｰtag = function simpleｰnativeｰtag(
    strings: templateｰstrings,
    ...values: printable[]
  ): tagｰoutput {
    return {
      string: strings.join("\n"),
      number: values.reduce<number>(
        (sum: number, n) => sum + parseFloat(n.toString()),
        42
      ),
    };
  };
  const simpleｰcallableｰtag = makeｰtag(function simpleｰcallableｰtag(
    options?: tagｰoptions
  ): nativeｰtag {
    return (strings: templateｰstrings, ...values: printable[]): tagｰoutput => {
      return { options, ...simpleｰnativeｰtag(strings, ...values) };
    };
  },
  {});

  specify("tags are properly named", () => {
    //
    expect(simpleｰnativeｰtag.name).to.equal("simpleｰnativeｰtag");
    expect(simpleｰcallableｰtag.name).to.equal("simpleｰcallableｰtag");
  });

  specify("tags return proper output", () => {
    //
    expect(simpleｰnativeｰtag`This should be ${10} + ${-10}`).to.deep.equal({
      string: "This should be \n + \n", // the trailing \n is due to joining an empty string after the last expression
      number: 42,
    });
    //
    expect(simpleｰcallableｰtag`This should be [${41 + 1}]`).to.deep.equal({
      string: "This should be [\n]", // here the string following the last expresson is non empty, hence no trailing \n
      number: 42 * 2,
      options: {},
    });
    //
    expect(simpleｰcallableｰtag(`This should be ${43 - 1}`)).to.deep.equal({
      string: "This should be 42", // the template literal is evaluated to a string before being passed to the callable tag
      number: 42, // there are no values to reduce, hence it returns the initial value (42)
      options: {},
    });
    //
    expect(simpleｰcallableｰtag({})`This should be [${41 + 1}]`).to.deep.equal({
      string: "This should be [\n]", // here the string following the last expresson is non empty, hence no trailing \n
      number: 42 * 2,
      options: {},
    });
  });
});
