
import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Details() {
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [bodyTemp, setBodyTemp] = useState("");
  const [pulseRate, setPulseRate] = useState("");
  const [respirationRate, setRespirationRate] = useState("");
  const [bloodPressure, setBloodPressure] = useState("");
  const [bloodOxygenLevel, setBloodOxygenLevel] = useState("");
  const [weight, setWeight] = useState("");
  const [bloodGlucoseLevel, setBloodGlucoseLevel] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  async function getHeathData(e) {
    e.preventDefault();

    const healthData = {
      gender,
      age,
      bodyTemp,
      pulseRate,
      respirationRate,
      bloodPressure,
      bloodOxygenLevel,
      weight,
      bloodGlucoseLevel,
      userEmail: email, // Make sure to include userEmail in the request body
    };

    try {
      const response = await axios.post(
        "http://localhost:8000/user/addhealthdata",
        healthData,
        {
          withCredentials: true, // Include if you're dealing with cookies
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.success) {
        toast.success(response.data.message);
      }
      navigate("/history"); 
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  function viewResults() {
    navigate("/history");
  }

  return (
    <div>
      <Header />
      <main>
        <div className="w-[100vw] h-[140vh] mb-8">
          <div className="flex justify-around">
          <h3 className="text-center mt-4 text-3xl font-bold">
            Please re-enter your details
          </h3>
          <button 
          onClick={viewResults} className="text-sm font-bold bg-blue-300 px-3 py-1 rounded-xl mt-2">view your past searches</button>
          </div>
          <form
            onSubmit={getHeathData}
            className="w-[50%] absolute pt-[3%] ml-[25%]"
          >
            <div className="flex flex-col justify-between items-center shadow-lg rounded-md w-[100%] border-1 border-white mb-4">
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                className="outline-none p-3 rounded-md bg-white text-black w-full pt-4"
              />
            </div>
            <div className="flex flex-col justify-between items-center shadow-lg rounded-md w-[100%] border-1 border-white mb-4">
              <input
                type="text"
                placeholder="Enter gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="outline-none p-3 rounded-md bg-white text-black w-full pt-4"
              />
            </div>
            <div className="flex flex-col justify-between items-center shadow-lg rounded-md w-[100%] border-1 border-white mb-4">
              <input
                type="text"
                placeholder="Enter age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="outline-none p-3 rounded-md bg-white text-black w-full pt-4"
              />
            </div>
            <div className="flex flex-col justify-between items-center shadow-lg rounded-md w-[100%] border-1 border-white mb-4">
              <input
                type="text"
                placeholder="Enter body temprature"
                value={bodyTemp}
                onChange={(e) => setBodyTemp(e.target.value)}
                className="outline-none p-3 rounded-md bg-white text-black w-full pt-4"
              />
            </div>
            <div className="flex flex-col justify-between items-center shadow-lg rounded-md w-[100%] border-1 border-white mb-4">
              <input
                type="text"
                value={pulseRate}
                onChange={(e) => setPulseRate(e.target.value)}
                placeholder="Enter pulse rate"
                className="outline-none p-3 rounded-md bg-white text-black w-full pt-4"
              />
            </div>
            <div className="flex flex-col justify-between items-center shadow-lg rounded-md w-[100%] border-1 border-white mb-4">
              <input
                type="text"
                value={respirationRate}
                onChange={(e) => setRespirationRate(e.target.value)}
                placeholder="Enter breathing rate"
                className="outline-none p-3 rounded-md bg-white text-black w-full pt-4"
              />
            </div>
            <div className="flex flex-col justify-between items-center shadow-lg rounded-md w-[100%] border-1 border-white mb-4">
              <input
                type="text"
                value={bloodPressure}
                onChange={(e) => setBloodPressure(e.target.value)}
                placeholder="Enter blood presure"
                className="outline-none p-3 rounded-md bg-white text-black w-full pt-4"
              />
            </div>
            <div className="flex flex-col justify-between items-center shadow-lg rounded-md w-[100%] border-1 border-white mb-4">
              <input
                type="text"
                value={bloodOxygenLevel}
                onChange={(e) => setBloodOxygenLevel(e.target.value)}
                placeholder="Enter oxygen rate"
                className="outline-none p-3 rounded-md bg-white text-black w-full pt-4"
              />
            </div>
            <div className="flex flex-col justify-between items-center shadow-lg rounded-md w-[100%] border-1 border-white mb-4">
              <input
                type="text"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                placeholder="Enter weight"
                className="outline-none p-3 rounded-md bg-white text-black w-full pt-4"
              />
            </div>
            <div className="flex flex-col justify-between items-center shadow-lg rounded-md w-[100%] border-1 border-white mb-4">
              <input
                type="text"
                value={bloodGlucoseLevel}
                onChange={(e) => setBloodGlucoseLevel(e.target.value)}
                placeholder="Enter blood glucose rate"
                className="outline-none p-3 rounded-md bg-white text-black w-full pt-4"
              />
            </div>

            <button className="text-white text-md font-semibold bg-blue-400 outline-none w-full rounded-md py-3">
              Submit
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
