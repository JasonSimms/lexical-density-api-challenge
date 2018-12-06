// Filename api-routes.js
// Handles user interaction with API

let router = require("express").Router();

// Default
router.get("/", function(req, res) {
  res.json({
    status: `Api is OK`,
    message: `Welcome to Lexical Density Calculator`,
    instructions: `please submit a post request with key userInput`
  });
});

// Import Controller
const apiController = require(`../controllers/apiController`);



// complexity routes
router
  .route("/complexity")
  .get(apiController.getWords)
  .post(apiController.calculate);

  router
  .route("/complexity/verbose")
  .post(apiController.calculateVerbose);



// Export API routes
module.exports = router;
