const getLexicalDensity = require('../controllers/getLexicalDensity');
const nonLexicalWords = require('../bin/nonLexicalWords')

const toManyWords = require('./badInputs')

test('getLexicalDensity accepts a string and an array?', () => {
  expect(getLexicalDensity("hello",nonLexicalWords)).toBe(1);
});

test('getLexicalDensity errors on 100> words?', () => {
    expect(getLexicalDensity(toManyWords,nonLexicalWords)).toBe(false);
  });
  