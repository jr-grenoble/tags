/**
 * @module юｰoptions - юｰoptions encapsulation
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
 * Any object can be used to set юｰoptions, including arrays or functions.Simple types cannot.
 * However, specific tags can overload their `apply` trigger to accept simple parameters.
 * In that case, they must name these parameters and add them to their юｰoptions.
 */
export interface юｰoptionsｰobject {
  [k: string]: any;
}

// In strict mode,crash functions throw an error in case of illegal access
const crashｰifｰunknown = (
  юｰoptionsｰobject: юｰoptionsｰobject,
  юｰoption: string,
  attempt: string
) =>
  crashｰon(!(юｰoption in юｰoptionsｰobject), `${attempt} unknown «${юｰoption}»`);

const crashｰifｰpresent = (
  юｰoptionsｰobject: юｰoptionsｰobject,
  юｰoption: string,
  attempt: string
) =>
  crashｰon(
    юｰoption in юｰoptionsｰobject,
    `${attempt} already existing «${юｰoption}»`
  );

/*
 * `crashｰon` is private to the юｰoptions module. By default it does nothing.
 * However, the static `юｰoptions.strict` can change it so that it crashes when its condition parameter
 * is true.
 */
let crashｰon = (_condition: boolean, _attempt: string) => {};

/**
 * All ю options must conform to the юｰoption class
 */
export default class юｰoptions implements юｰoptionsｰobject {
  /**
   * Set or deactivate strict mode
   * @param strictｰmode - whether to crash on accessing nonexistent options or on overwriting existing ones
   * This is a global setting that affects all option objects. In other words, when this setting is turned on,
   * accessors will crash in case of illegal access, even on option objects that were created before strict mode
   * was turned on.
   */
  public static strict = (strictｰmode: boolean = true) => {
    crashｰon = strictｰmode
      ? (condition: boolean, attempt: string) => {
          if (condition) throw Error(`attempt to ${attempt} юｰoption`);
        }
      : (_: boolean, __: string) => {};
  };

  /**
   * Build an юｰoption object
   * @param юｰoptionsｰobject - initial options
   * Note that if the юｰoptionsｰobject contains a boolean property named
   * `strict` or `strictｰmode`, the constructor sets `strictｰmode` accordingly
   * but then deletes that property from the set.
   */
  constructor(private юｰoptionsｰobject: юｰoptionsｰobject) {
    if (typeof юｰoptionsｰobject?.strict === "boolean") {
      юｰoptions.strict(юｰoptionsｰobject?.strict);
      delete юｰoptionsｰobject.strict;
    } else if (typeof юｰoptionsｰobject?.strictｰmode === "boolean") {
      юｰoptions.strict(юｰoptionsｰobject?.strictｰmode);
      delete юｰoptionsｰobject.strictｰmode;
    }
  }

  /**
   * Get a copy of юｰoptions properties
   * @returns a shallow copy of all юｰoptions
   * Beware! While modifying the returned object does not modify the юｰoptions object,
   * modifying its object properties does affect the corresponding юｰoptions object properties.
   */
  get object() {
    // the returned object is never null;
    return { ...this.юｰoptionsｰobject }!;
  }
  /**
   * Set additional юｰoptions (or erase them all if null)
   * @param юｰoptions - either null (to reset юｰoptions) or additional options
   */
  set object(юｰoptions: юｰoptionsｰobject | null) {
    if (юｰoptions === null) this.юｰoptionsｰobject = {};
    else
      Object.entries(юｰoptions).forEach(
        ([key, val]) => (this.юｰoptionsｰobject[key] = val)
      );
  }
  /**
   * Get value of a specific option
   * @param юｰoption - the option to fetch
   * @returns the value of that option or undefined if no such option exists
   * @throws in strict mode when attempting to access nonexistent options
   */
  get(юｰoption: string) {
    const юｰoptionsｰobject = this.юｰoptionsｰobject;
    crashｰifｰunknown(юｰoptionsｰobject, юｰoption, "get");
    return юｰoption in юｰoptionsｰobject
      ? юｰoptionsｰobject[юｰoption]
      : undefined;
  }
  /**
   * Set value of specific option
   * @param юｰoption - the option to set
   * @param val - the value for that option
   * @throws in strict mode when attempting to set nonexistent options
   */
  set(юｰoption: string, val: any) {
    const юｰoptionsｰobject = this.юｰoptionsｰobject;
    crashｰifｰunknown(юｰoptionsｰobject, юｰoption, "set");
    юｰoptionsｰobject[юｰoption] = val;
  }
  /**
   * Add a new option
   * @param юｰoption - the name of the new option
   * @param val - the value of the new option
   * @throws on strict mode when attempting to re-create an existing option
   */
  new(юｰoption: string, val: any) {
    const юｰoptionsｰobject = this.юｰoptionsｰobject;
    crashｰifｰpresent(юｰoptionsｰobject, юｰoption, "create");
    юｰoptionsｰobject[юｰoption] = val;
  }
  /**
   * Remove (delete) an option
   * @param юｰoption - the name of the option to remove
   * @throws in strict mode when attempting to delete a nonexistent option
   */
  delete(юｰoption: string) {
    const юｰoptionsｰobject = this.юｰoptionsｰobject;
    crashｰifｰunknown(юｰoptionsｰobject, юｰoption, "delete");
    delete юｰoptionsｰobject[юｰoption];
  }
}
