const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config({
    path: ".env",
});

const databaseConnection = () => {
    mongoose.connect(process.env.MONGO_URL).then(() => {
        console.log("MongoDB connection established successfully");
    }).catch(e => {
        console.log(e);
    });
}

module.exports= databaseConnection;