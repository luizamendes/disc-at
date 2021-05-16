const { upperCaseString } = require("./index");

describe("Testing upperCaseString(str)", () => {
  it("should return first letter uppercase - case one uppercase word", () => {
    expect(upperCaseString("HELLO")).toEqual("Hello");
  });

  it("should return first letter uppercase - case one lowercase word", () => {
    expect(upperCaseString("hello")).toEqual("Hello");
  });

  it("should return first letter uppercase - case one word", () => {
    expect(upperCaseString("Hello")).toEqual("Hello");
  });

  it("should return empty string when no string is input", () => {
    expect(upperCaseString("")).toEqual("");
  });

  it("should return all words with first letter uppercase - case more than one word", () => {
    expect(upperCaseString("hello world")).toEqual("Hello World");
  });

  it("should return all words with first letter uppercase - case more than one word 2", () => {
    expect(upperCaseString(" HELLo world ")).toEqual("Hello World");
  });
});
