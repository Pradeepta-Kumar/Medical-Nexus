const mongoose = require("mongoose");

const healthDataSchema = mongoose.Schema({
    userEmail: {
        type: String,
        required: true
    },
    data: [
        {
            gender: {
                type: String, 
                required: true
            },
            age: {
                type: Number,
                required: true,
            },
            bodyTemp: {
                type: Number,
                required: true,
            },
            pulseRate: {
                type: Number,
                required: true,
            },
            respirationRate: {
                type: Number,
                required: true,
            },
            bloodPressure: {
                type: Number,
                required: true,
            },
            bloodOxygenLevel: {
                type: Number,
                required: true,
            },
            weight: {
                type: Number,
                required: true,
            },
            bloodGlucoseLevel: {
                type: Number,
                required: true,
            },
            date: {
                type: Date,
                required: true,
            },
            result: {
                type: String,
                required: true
            }
        }
    ]
});

const HealthData = mongoose.model("HealthData", healthDataSchema);
module.exports = HealthData;
