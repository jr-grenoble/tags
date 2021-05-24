import { expect } from "chai";
import { identity } from "../libs/tags";

describe("tag tests", () => {
  it("checks that the identity tag is indeed indempotent", function () {
    expect(identity`
        This line starts after a newline and is indented with 8 spaces.
        This other line is indented the same.

        There is a blank line just above.
                Here we have indented by 8 more spaces.
                And here we have an expression: ${Math.PI} showing π.
        We are back to the previous indentation.
        And we finish without a new line.`).to.have.string(" ".repeat(16));
  });
});
