const getLexicalDensity = require("../controllers/getLexicalDensity");
const nonLexicalWords = require("../bin/nonLexicalWords");

const toManyWords = require("./badInputs");

test("getLexicalDensity accepts a string from user and a library of words?", () => {
  expect(getLexicalDensity("hello", nonLexicalWords)).toBe(1);
});

test("getLexicalDensity accepts a string from user?", () => {
  expect(getLexicalDensity(5, nonLexicalWords)).toBe(false);
});

test("getLexicalDensity accepts only a stringy?", () => {
  expect(getLexicalDensity(["hello world"], nonLexicalWords)).toBe(false);
});

test("getLexicalDensity accepts only a string", () => {
  expect(getLexicalDensity({"data" : "hello world"}, nonLexicalWords)).toBe(false);
});

test("getLexicalDensity errors on 100> words?", () => {
  expect(getLexicalDensity(toManyWords, nonLexicalWords)).toBe(false);
});

test("getLexicalDensity errors on no input?", () => {
  expect(getLexicalDensity("", nonLexicalWords)).toBe(false);
});

test("getLexicalDensity errors on no non Leixical Words", () => {
  expect(getLexicalDensity("Hello world!")).toBe(false);
});

test("getLexicalDensity errors on 100> words?", () => {
  expect(
    getLexicalDensity("Kim loves going to the cinema", nonLexicalWords)
  ).toEqual(0.67);
});
