const axios = require('axios');
const cors = require('cors');
const express = require("express");

const app = express();
//middlewares
app.use(express.urlencoded({extended: true}));
app.use(express.json());
const corsOptions = {
    origin: "http://localhost:3000",
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
}
app.use(cors(corsOptions));

const predictDisease = async (req, res) => {
  try {
    /* example body:
    {
      "gender": "male",
      "age": 35,
      "bodyTemp": 37.2,
      "pulseRate": 80,
      "respirationRate": 16,
      "bloodPressure": 120,
      "bloodOxygenLevel": 98,
      "weight": 75,
      "bloodGlucoseLevel": 5.2
    }
    */
    // Replace with your actual API endpoint URL

    const apiUrl = 'http://localhost:5000/api/predict';
    
    const body = {
      gender: req.body.gender,
      age: req.body.age,
      bodyTemp: req.body.bodyTemp,
      pulseRate: req.body.pulseRate,
      respirationRate: req.body.respirationRate,
      bloodPressure: req.body.bloodPressure,
      bloodOxygenLevel: req.body.bloodOxygenLevel,
      weight: req.body.weight,
      bloodGlucoseLevel: req.body.bloodGlucoseLevel
    };
    const response = await axios.post(apiUrl, body, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const predictionData = response.data;

    res.json({
      message: 'Disease prediction successful!',
      prediction: predictionData 
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Error: Disease prediction failed' });
  }
};

module.exports = predictDisease;
