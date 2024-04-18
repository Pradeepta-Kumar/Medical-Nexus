const express = require("express");
const dotenv = require("dotenv");
const dbConnection = require("./utils/database");
const userRoute = require("./routes/userRoute");
const diseasePredict = require("./routes/diseasePredict");
const cookieParser = require("cookie-parser");
const cors = require('cors');

dbConnection();
dotenv.config({
    path: ".env",
});

const app = express();
//middlewares
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cookieParser());
const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true,
}
app.use(cors(corsOptions));

//api
app.use("/user", userRoute); //http://localhost:8000/user/register or /login
app.use("/predict", diseasePredict); //http://localhost:8000/predict/predictDisease

app.listen(process.env.PORT, () => {
    console.log("Server listing to the port, ", process.env.PORT);
});