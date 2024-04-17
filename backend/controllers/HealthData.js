const HealthData = require("../models/healthData");

const healthData = async (req, res) => {
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
      bloodGlucoseLevel
    } = req.body;
    if (
      !gender ||
      !age ||
      !bodyTemp ||
      !pulseRate ||
      !respirationRate ||
      !bloodPressure ||
      !bloodOxygenLevel ||
      !weight ||
      !bloodGlucoseLevel
    ) {
      return res.status(401).json({
        message: "You can't leave any data",
        success: false,
      });
    }

    await HealthData.create({
      gender, 
      age,
      bodyTemp,
      pulseRate,
      respirationRate,
      bloodPressure,
      bloodOxygenLevel,
      weight,
      bloodGlucoseLevel
    });
    return res.status(200).json({
      message: "Data added successfully!",
      success: true,
    });
  } catch (e) {
    console.log(e);
  }
};
module.exports = healthData;
