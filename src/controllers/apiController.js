// Filename: wordController.js
// HANDLES CRUD requests

// Import model
Word = require(`../models/wordModel`);

// Handle index actions
exports.getWords = function(req, res) {
  Word.find({}).then(words => {
    let nonLexicalWords = words.map(el => el.term)
    res.json({
      nonLexicalWords
    });
  });
};

// // Find Words
// exports.view = (req, res) => {
//   Word.findById(req.params._id, (err, word) => {
//     if (err) {
//       res.json(err);
//       console.log(err.message);
//     } else {
//       res.json({
//         message: `Viewing one word by Id`,
//         data: word
//       });
//     }
//   });
// };
