const HealthData = require("../models/healthData");

const addHealthData = async (req, res) => {
  try {
    const {
      gender,
      age,
      bodyTemp,
      pulseRate,
      respirationRate,
      bloodPressure,
      bloodOxygenLevel,
      weight,
      bloodGlucoseLevel,
      userEmail
    } = req.body;
    if (!gender || !age || !bodyTemp || !pulseRate || !respirationRate || !bloodPressure || !bloodOxygenLevel || !weight || !bloodGlucoseLevel) {
      return res.status(401).json({
        message: "You can't leave any data",
        success: false,
      });
    }
    const newData = {
      gender: gender,
      age: age,
      bodyTemp: bodyTemp,
      pulseRate: pulseRate,
      respirationRate: respirationRate,
      bloodPressure: bloodPressure,
      bloodOxygenLevel: bloodOxygenLevel,
      weight: weight,
      bloodGlucoseLevel: bloodGlucoseLevel,
      date: new Date(),
      result: 'temp'  // make an API call to flask
    };

    const healthData = await HealthData.findOne({ userEmail: userEmail });
    if (!healthData) {
      // If no health data found for the user, create a new document
      const newUserHealthData = new HealthData({
          userEmail: userEmail,
          data: [newData]
      });
      await newUserHealthData.save();
    } else {
      healthData.data.push(newData);
      await healthData.save();
    }
    
    return res.status(200).json({
      message: "Data added successfully!",
      success: true,
    });
  } catch (e) {
    console.log(e);
  }
};

const getHealthData = async (req, res) => {
  const userEmail = req.body.userEmail;
  try {
      const healthData = await HealthData.findOne({ userEmail: userEmail });

      if (!healthData) {
          return res.status(404).json({ message: "Health data not found for the user" });
      }

      res.status(200).json(healthData.data);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};

module.exports = { addHealthData, getHealthData };
