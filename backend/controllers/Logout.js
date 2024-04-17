const Logout = async(req, res) => {
    return res.status(200).cookie("token", "", {expiresIn: new Date(Date.now()), httpOnly: true}).json({
        message: "User logged out successfully",
        success: true,
    });
}

module.exports = Logout;