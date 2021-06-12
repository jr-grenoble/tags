/**
 * @module юｰoptions.test - Tests for юｰoptions
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
import юｰoptions from "../libs/юｰoptions";

describe("юｰoptions unit tests", () => {
  describe("юｰoptions creation and basic option access", () => {
    specify("empty юｰoptions are not null", () => {
      // Arrange
      юｰoptions.strict(false);
      const options = new юｰoptions({});
      // Act
      let optionsｰobject = options.object;
      // Assert
      expect(optionsｰobject).to.be.not.null;
      expect(optionsｰobject).to.eql({});
    });

    specify(
      "empty юｰoptions don't crash on accessing nonexistent options in non strict mode",
      () => {
        // Arrange
        юｰoptions.strict(false);
        const options = new юｰoptions({});
        // Act
        let optionsｰobject = options.object;
        // Assert
        expect(optionsｰobject).to.be.not.null;
        expect(optionsｰobject).to.eql({});
        expect(() => options.get("nonexistentｰproperty")).to.not.throw(
          Error,
          /nonexistentｰproperty/
        );
        expect(options.get("nonexistentｰproperty")).to.equal(undefined);
      }
    );

    specify(
      "setting strict mode via the юｰoptions constructor doesn't keep the strict option but crashes nevertheless",
      () => {
        // Arrange
        юｰoptions.strict(false);
        const options = new юｰoptions({ strict: true });
        // Act
        let optionsｰobject = options.object;
        // Assert
        expect(optionsｰobject).to.be.not.null;
        expect(optionsｰobject).to.to.eql({});
        expect(() => options.get("nonexistentｰproperty")).to.throw(
          Error,
          /nonexistentｰproperty/
        );
      }
    );

    specify(
      "empty юｰoptions do throw when accessing nonexistent options in strict mode",
      () => {
        // Arrange
        const options = new юｰoptions({});
        // Act
        юｰoptions.strict(true);
        const optionsｰobject = options.object;
        // Assert
        expect(optionsｰobject).to.be.not.null;
        expect(optionsｰobject).to.to.eql({});
        expect(() => options.get("nonexistentｰproperty")).to.throw(
          Error,
          /nonexistentｰproperty/
        );
      }
    );
  });

  describe("юｰoptions options setting and access", () => {
    specify("setting new options in non strict mode works", () => {
      // Arrange
      юｰoptions.strict(false);
      const options = new юｰoptions({});
      // Act
      options.set("newｰoptionｰviaｰset", [1, 2, 3]);
      const optionsｰobject = options.object;
      // Assert
      expect(optionsｰobject?.newｰoptionｰviaｰset).to.eql([1, 2, 3]);
      expect(options.get("newｰoptionｰviaｰset")).to.eql(
        optionsｰobject?.newｰoptionｰviaｰset
      );
      expect(optionsｰobject?.newｰoptionｰviaｰset).to.equal(
        options.get("newｰoptionｰviaｰset")
      );
    });

    specify(
      "modifying options returned by accessors does not affect simple properties but affects юｰoptions object properties",
      () => {
        // Arrange
        юｰoptions.strict(false);
        const options = new юｰoptions({});
        // Act
        options.set("newｰarrayｰoptionｰviaｰset", [1, 2, 3]);
        options.new("newｰbooleanｰoptionｰviaｰnew", true);
        const optionsｰobject = options.object!;
        optionsｰobject.newｰarrayｰoptionｰviaｰset.push(4);
        optionsｰobject.newｰarrayｰoptionｰviaｰset = 3;
        optionsｰobject.newｰbooleanｰoptionｰviaｰnew = false;
        options.get("newｰarrayｰoptionｰviaｰset").push(5);
        // Assert
        expect(optionsｰobject?.newｰarrayｰoptionｰviaｰset).to.eql(3);
        expect(options.get("newｰarrayｰoptionｰviaｰset")).to.eql([1, 2, 3, 4, 5]);
        expect(options.get("newｰbooleanｰoptionｰviaｰnew")).to.equal(true);
        expect(optionsｰobject?.newｰbooleanｰoptionｰviaｰnew).to.equal(false);
      }
    );

    specify(
      "creating already existing options or deleting/setting unknown options in strict mode result in a crash",
      () => {
        // Arrange
        юｰoptions.strict(true);
        const options = new юｰoptions({
          initial: "initial",
          toｰbeｰdeleted: "zombie",
        });
        // Act
        options.delete("toｰbeｰdeleted");
        options.new("newｰboolean", true);
        const optionsｰobject = options.object!;
        optionsｰobject.didｰnotｰexist = "newborn";
        options.object = optionsｰobject;
        options.set("initial", "no longer initial");
        // Assert
        expect(options.object).to.eql({
          initial: "no longer initial",
          newｰboolean: true,
          didｰnotｰexist: "newborn",
        });
        expect(() => options.new("newｰboolean", false)).to.throw(
          Error,
          /create already existing/
        );
        expect(() => options.set("toｰbeｰdeleted", false)).to.throw(
          Error,
          /set unknown/
        );
        expect(() => options.delete("toｰbeｰdeleted")).to.throw(
          Error,
          /delete unknown/
        );
      }
    );
  });
});
