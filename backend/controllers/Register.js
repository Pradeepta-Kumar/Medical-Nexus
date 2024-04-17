const User = require("../models/userModel");
const bcryptjs = require("bcryptjs");

const Register = async(req, res) => {
    try {
        const {fullName, email, password} = req.body;
        if( !fullName || !email || !password) {
            return res.status(401).json({
                message: "Invalid credentials",
                success: false,
            });
        }
        const user = await User.findOne({email});
        if(user) {
            return res.status(401).json({
                message: "Email has already been registered",
                success: false,
            });
        }

        const hashedPassword = await bcryptjs.hash(password, 10);

        await User.create({
            fullName, email, password: hashedPassword
        });
        return res.status(200).json({
            message: "Account created successfully!",
            success: true,
        })
    } catch (e) {
        console.log(e);
    }
}

module.exports = Register;