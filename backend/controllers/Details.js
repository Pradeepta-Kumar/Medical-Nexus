const User = require("../models/userModel");

const Details = (req, res) => {
    res.status(200).json({
        "message": "success",
        success: true,
    });
}

module.exports = Details;
console.log("hello");