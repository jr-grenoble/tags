/**
 * @module ю - Core ю module
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

import юｰoptions from "./юｰoptions";
import {
  юｰparameters,
  юｰparametersʔ̣,
  юｰparametersｰtoｰstringǃ,
  юｰtemplateｰliteralsｰtoｰparametersǃ,
} from "./юｰtypes";

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
