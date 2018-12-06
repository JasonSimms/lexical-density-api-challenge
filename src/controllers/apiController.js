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
