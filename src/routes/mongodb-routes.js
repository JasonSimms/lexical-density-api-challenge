// Filename mongodb-routes.js
// Handles CRUD for NonLexical Words DB

let router = require("express").Router();

// Default
router.get("/", function(req, res) {
  res.json({
    status: `DB is OK`,
    message: `Welcome Non Lexical Word Mongo DB`
  });
});

// Import Controller
const dbController = require(`../controllers/mongoDBController`);


// Word routes
router
  .route("/words")
  .get(dbController.index)
  .post(dbController.new);

router
  .route("/words/:word_id")
  .get(dbController.view)
  .delete(dbController.delete);

// Export API routes
module.exports = router;
