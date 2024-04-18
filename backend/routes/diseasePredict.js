const express = require("express");
const router = express.Router();
const Predict = require("../controllers/Predict");

router.route("/predictDisease").post(Predict);

module.exports = router;