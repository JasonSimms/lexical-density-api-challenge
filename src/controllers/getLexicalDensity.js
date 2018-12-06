// File: getLexicalDensity.js
/* accept string and list of words calculate lexical density
 return lexical density */
const wordList = require("../bin/nonLexicalWords");

const getLexicalDensity = (str, nonLexicalArr) => {
  console.log(`input: `, str.length, `NLD wordlist length: `, nonLexicalArr.length);
  let processStr = str.split(" ");
  console.log('processStr: ',processStr.length)
  if (str.length > 1000 || processStr.length > 100) {
    return false;
  } else {
    return processStr.length;
  }
};

getLexicalDensity("greetings", wordList);

const toManyWords =
  "this is not 5 words this is not 5 words this is not 5 words this is not 5 words this is not 5 words this is not 5 words this is not 5 words this is not 5 words this is not 5 words this is not 5 words this is not 5 words this is not 5 words this is not 5 words this is not 5 words this is not 5 words this is not 5 words this is not 5 words this is not 5 words this is not 5 words this is not 5 words this is not 5 words this is not 5 words";

getLexicalDensity(toManyWords, wordList);

module.exports = getLexicalDensity;