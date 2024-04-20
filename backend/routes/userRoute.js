const express = require("express");
const router = express.Router();
const Register = require("../controllers/Register");
const Login = require("../controllers/Login");
const Logout = require("../controllers/Logout");
const { addHealthData, getHealthData } = require("../controllers/HealthData");
const Details = require("../controllers/Details");

router.route("/register").post(Register);
router.route("/login").post(Login);
router.route("/logout").get(Logout);
router.route("/addhealthdata").post(addHealthData);
router.route("/gethealthdata").post(getHealthData);
router.route("/details").get(Details);

module.exports = router;