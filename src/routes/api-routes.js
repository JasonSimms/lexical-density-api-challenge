// Filename api-routes.js
// Handles user interaction with API

let router = require("express").Router();

// Default
router.get("/", function(req, res) {
  res.json({
    status: `Api is OK`,
    message: `Welcome to Lexical Density Calculator`
  });
});

// Import Controller
const apiController = require(`../controllers/apiController`);



// Word routes
router
  .route("/complexity")
  .get(apiController.getWords)
  // .post(dbController.calculate);

// Export API routes
module.exports = router;
