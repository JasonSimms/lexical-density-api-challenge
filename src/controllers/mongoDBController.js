// Filename: wordController.js
// HANDLES CRUD requests

// Import model
Word = require(`../models/wordModel`);



// Handle index actions
exports.index = function(req, res) {
  Word.find({}, "term", (err, words) => {
    if (err) {
      console.log(err);
    }
    res.json({
      status: "success",
      message: "Words retrieved successfully",
      data: words
    });
  });
};

// Create word
exports.new = (req, res) => {
  let word = new Word();
  word.term = req.body.term;

  // save the word and handle errors
  word.save(err => {
    if (err) {
      res.json(err);
      console.log(err.message);
    } else {
      res.json({
        message: `New Word Added to DB`,
        data: word
      });
    }
  });
};

// Find Words
exports.view = (req, res) => {
  Word.findById(req.params._id, (err, word) => {
    if (err) {
      res.json(err);
      console.log(err.message);
    } else {
      res.json({
        message: `Viewing one word by Id`,
        data: word
      });
    }
  });
};

// Delete Word
exports.delete = (req, res) => {
  Word.remove(
    {
      _id: req.body._id
    },
    (err, word) => {
      if (err) {
        res.json(err);
        console.log(err.message);
      } else {
        res.json({
          status: "success",
          message: "Word deleted"
        });
      }
    }
  );
};
