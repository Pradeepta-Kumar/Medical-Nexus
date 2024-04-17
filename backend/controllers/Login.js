const User = require("../models/userModel");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Login = async(req, res) => {
    try {
        const {email, password} = req.body;
        if(!email || !password) {
            return res.status(401).json({
                message: "Invalid credentials",
                success: false,
            });
        }

        const user = await User.findOne({email});
        if(!user) {
            return res.status(401).json({
                message: "Invalid credentials",
                success: false,
            });
        }

        const isMatch = await bcryptjs.compare(password, user.password);
        if(!isMatch) {
            return res.status(401).json({
                message: "Invalid credentials",
                success: true,
            });
        }
        const tokenData= {
            id: user._id
        }
        const token = await jwt.sign(tokenData, "ShardhaKhapra@123", {expiresIn:"24h"});
        return res.status(200).cookie("token", token, {httpOnly: true}).json({
            message: `Welcome back ${user.fullName}`,
            success: true,
        })
    } catch (e) {
        console.log(e);
    }
}

module.exports = Login;