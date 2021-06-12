/**
 * @module юｰtypes.test - Tests for юｰtypes
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
  printable,
  юｰparametersʔ̣,
  юｰtemplateｰliteralsʔ̣,
  юｰtemplateｰliteralsｰtoｰparametersǃ,
} from "../libs/юｰtypes";

describe("юｰtypes unit tests", () => {
  // Arrange
  const tagｰextractor = (...args: any[]): any[] => args;
  const templateｰliterals = tagｰextractor`\nnumber1 ${1}, string2 ${"string2"}, array3 ${[
    1, 2, 3,
  ]}, object4 ${{ a: 1, b: { c: 2, d: [3, 4] } }}`;
  const clone = <T>(arg: T): T => JSON.parse(JSON.stringify(arg));
  // Act (fake template literals)
  const fakeｰliteralｰstrings = {
    length: 3,
    0: "\n1",
    1: "2",
    2: "3",
    raw: ["\\n1", "2", "3"],
  };
  const goodｰfakeｰtemplateｰliterals: [
    typeof fakeｰliteralｰstrings,
    ...printable[]
  ] = [fakeｰliteralｰstrings, 4, 5];
  // Assert
  describe("юｰtypes interface contracts", () => {
    specify("native tag expressions conform to юｰtemplateｰliterals", () => {
      // Arrange
      const poorｰfakeｰtemplateｰliterals = clone(goodｰfakeｰtemplateｰliterals);
      // Act: literal strings and expressions won't match
      poorｰfakeｰtemplateｰliterals.pop();
      // Assert
      expect(юｰtemplateｰliteralsʔ̣(templateｰliterals)).to.be.true;
      expect(юｰtemplateｰliteralsʔ̣(goodｰfakeｰtemplateｰliterals)).to.be.true;
      expect(юｰtemplateｰliteralsʔ̣(poorｰfakeｰtemplateｰliterals)).to.be.false;
      // Act: raw strings and cooked strings won't match
      poorｰfakeｰtemplateｰliterals[0].length -= 1;
      // Assert
      expect(юｰtemplateｰliteralsʔ̣(poorｰfakeｰtemplateｰliterals)).to.be.false;
      // Act: make dimensions match again
      poorｰfakeｰtemplateｰliterals[0].raw.length -= 1;
      // Assert
      expect(юｰtemplateｰliteralsʔ̣(poorｰfakeｰtemplateｰliterals)).to.be.true;
    });
    specify("conversion to юｰparameters is predictable", () => {
      // Arrange
      const poorｰfakeｰtemplateｰliterals = clone(goodｰfakeｰtemplateｰliterals);
      // Act
      const parameters = юｰtemplateｰliteralsｰtoｰparametersǃ(templateｰliterals);
      const goodｰfakeｰparameters = юｰtemplateｰliteralsｰtoｰparametersǃ(
        goodｰfakeｰtemplateｰliterals
      );
      poorｰfakeｰtemplateｰliterals.pop();
      const poorｰfakeｰparameters = юｰtemplateｰliteralsｰtoｰparametersǃ(
        poorｰfakeｰtemplateｰliterals
      );
      // Assert
      expect(юｰparametersʔ̣(parameters)).to.be.true;
      expect(юｰparametersʔ̣(goodｰfakeｰparameters)).to.be.true;
      expect(юｰparametersʔ̣(poorｰfakeｰparameters)).to.be.false;
    });
  });
});
