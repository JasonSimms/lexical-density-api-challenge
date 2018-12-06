// Filename: wordController.js
// HANDLES CRUD requests

// Import model
Word = require(`../models/wordModel`);
// Import calculator
getLD = require(`./getLexicalDensity`);

// Handle index actions
exports.getWords = function(req, res) {
  Word.find({}).then(words => {
    let nonLexicalWords = words.map(el => el.term);
    res.json({
      message: "These are the non lexical words",
      data: nonLexicalWords
    });
  });
};

exports.calculate = function(req, res) {
  let { userInput } = req.body;
  if (!userInput) res.status(400).send({ error: "No userInput Recieved." });
  Word.find({}).then(words => {
    let nonLexicalWords = words.map(el => el.term);
    let overall_ld = getLD(userInput, nonLexicalWords);
    res.json({
      data: { overall_ld }
    });
  });
};

exports.calculateVerbose = function(req, res) {
  let overall_ld;
  let { userInput } = req.body;
  if (!userInput) res.status(400).send({ error: "No userInput Recieved." });
  splitInput = userInput.match(/[^\.!\?]+[\.!\?]+/g);
  // Bugged
  splitInput.forEach(element => {
    let sentence_ld;
    Word.find({}).then(words => {
      let nonLexicalWords = words.map(el => el.term);
      sentence_ld.push(getLD(element, nonLexicalWords));
    });
    // overall_ld = sentence_ld.reduce((a, b) => a + b, 0) / sentence_ld.length;
    res.json({
      data: {
        sentence_ld
        // overall_ld
      }
    });
  });
};
