import { expect } from "chai";
import юｰoptions from "../libs/юｰoptions";

describe("юｰoptions unit tests", () => {
  describe("юｰoptions creation", () => {
    specify("empty юｰoptions are not null", () => {
      // Arrange
      const options = new юｰoptions({});
      // Act
      let optionsｰobject = options.object!;
      // Assert
      expect(optionsｰobject).to.be.not.null.and.to.equal({});
    });
  });
});
