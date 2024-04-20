const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({
    path: ".env",
});

const databaseConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connection established successfully");
    } catch (error) {
        console.error("MongoDB connection error:", error);
    }
};

module.exports = databaseConnection;
