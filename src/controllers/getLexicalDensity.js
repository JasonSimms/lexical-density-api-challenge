// File: getLexicalDensity.js
/* accept string and list of words calculate lexical density
 return lexical density */
const wordList = require("../bin/nonLexicalWords");

const getLexicalDensity = (str, nonLexicalArr) => {
  // Handle improper inputs
  if (
    str.length > 1000 ||
    typeof str !== "string" ||
    !nonLexicalArr ||
    str.length < 1
  )
    return false;

  //  Make string an array of lower case letters and remove punctuations.
  let processInput = str
    .trim()
    .toLowerCase()
    .replace(/[~`!@#$%^&*(){}\[\];:"'<,.>?\/\\|_+=-]/g, ``)
    .split(" ")
    .filter(item => item !== "");

  console.log(processInput);
  if (processInput.length > 100) {
    return false;
  } else {
    //  Record the initial word count for comparison to the filtered result.
    const wordCount = processInput.length;

    // Filter processInput against library of nonLexicalWords array.
    let result = processInput.filter(word => !nonLexicalArr.includes(word));
    let overall_ld = Number((result.length / wordCount).toFixed(2));
    return overall_ld;
  }
};

// getLexicalDensity("Kim loves going to the movies", wordList);

module.exports = getLexicalDensity;
