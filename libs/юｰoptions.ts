/**
 * Any object can be used as юｰoptions. Simple types cannot.
 * However, specific tags can overload their `apply` trigger to accept simple parameters.
 * In that case, they must name these parameters and add them to their юｰoptions.
 */

export interface юｰoptionsｰobject {
  [k: string]: any;
}
/**
 * All ю options conform to the юｰoption class
 */
export default class юｰoptions {
  // Default crash functions do nothing, but in strict mode they throw up an error
  private crashｰifｰunknown = (_юｰoption: string, _attempt: string) => {};
  private crashｰifｰpresent = (юｰoption: string, attempt: string) =>
    this.crashｰifｰunknown(юｰoption, attempt);

  /**
   * Build an юｰoption object
   * @param юｰoptions - initial options
   * @param strict - whether to throw up when attempting to access non existent options or overwriting existing options
   */
  constructor(private юｰoptions: юｰoptionsｰobject, strict: boolean = false) {
    if (strict) {
      this.crashｰifｰunknown = (юｰoption: string, attempt: string) => {
        if (юｰoption in this.юｰoptions)
          throw Error(`attempt to ${attempt} юｰoption`);
      };
    }
  }

  /**
   * Copy юｰoptions properties
   * @returns a copy of all юｰoptions
   */
  get object() {
    return { ...this.юｰoptions };
  }
  /**
   * Set additional юｰoptions (or erase them all if null)
   * @param юｰoptions - either null (to reset юｰoptions) or additional options
   */
  set object(юｰoptions: юｰoptionsｰobject | null) {
    if (юｰoptions === null) this.юｰoptions = {};
    else
      Object.entries(юｰoptions).forEach(
        ([key, val]) => (this.юｰoptions[key] = val)
      );
  }
  /**
   * Get value of a specific option
   * @param юｰoption - the option to fetch
   * @returns the value of that option or undefined if no such option exists
   * @throws in strict mode when attempting to access nonexistent options
   */
  get(юｰoption: string) {
    this.crashｰifｰunknown(юｰoption, "get unknown");
    return юｰoption in this.юｰoptions ? this.юｰoptions.юｰoption : undefined;
  }
  /**
   * Set value of specific option
   * @param юｰoption - the option to set
   * @param val - the value for that option
   * @throws in strict mode when attempting to set nonexistent options
   */
  set(юｰoption: string, val: any) {
    this.crashｰifｰunknown(юｰoption, "set unknown");
    this.юｰoptions[юｰoption] = val;
  }
  /**
   * Add a new option
   * @param юｰoption - the name of the new option
   * @param val - the value of the new option
   * @throws on strict mode when attempting to re-create an existing option
   */
  new(юｰoption: string, val: any) {
    this.crashｰifｰpresent(юｰoption, "create already existing");
    this.юｰoptions[юｰoption] = val;
  }
  /**
   * Remove (delete) an option
   * @param юｰoption - the name of the option to remove
   * @throws in strict mode when attempting to delete a nonexistent option
   */
  delete(юｰoption: string) {
    this.crashｰifｰunknown(юｰoption, "delete unknown");
    delete this.юｰoptions[юｰoption];
  }
}
