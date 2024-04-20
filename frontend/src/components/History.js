import React, {useState} from 'react';
import axios from "axios";
import toast from "react-hot-toast";
import Header from "../components/Header";

export default function History() {
  const [userEmail, setUserEmail] = useState('');
  const [healthData, setHealthData] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleVerify = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:8000/user/gethealthdata',
        { userEmail: userEmail },
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      if (response.data.success) {
        setHealthData(response.data.data); // Store health data in state
        toast.success(response.data.message);
        setFormSubmitted(true); // Set formSubmitted to true on success
      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.error(error);
    }
  };

  const toggleRow = (index) => {
    const newData = healthData.map((data, i) => {
      if (index === i) {
        return { ...data, expanded: !data.expanded }; // Toggle expanded state
      } else {
        return data;
      }
    });
    setHealthData(newData);
  };

  return (
    <div>
      <Header />
      <main>
        {!formSubmitted && ( // Render form only if form is not submitted
          <form
            onSubmit={handleVerify}
            className='flex flex-col p-12 w-3/12 my-16 left-0 right-0 mx-auto items-center justify-center absolute bg-blue-400 shadow-md opacity-90 rounded-md'
          >
            <h3 className='text-xl font-bold'>User Verification</h3>
            <input
              type='email'
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              placeholder='Verify your E-mail'
              className='outline-none p-2 my-2 rounded-sm text-black '
            />
            <button
              type='submit'
              className='outline-none p-2 my-2 rounded-sm bg-blue-500 text-white'
            >
              Verify
            </button>
          </form>
        )}
        {!!healthData.length && ( // Render health data only if it exists
          <div className='mt-10'>
            <h2 className='text-xl font-bold mb-3'>Health Data</h2>
            {healthData.map((data, index) => (
              <div key={index} className='border-b border-gray-300 pb-3'>
                <div
                  className='flex justify-between cursor-pointer'
                  onClick={() => toggleRow(index)}
                >
                  <span>Date: {new Date(data.date).toLocaleDateString()}</span>
                  {/* <span>Body Temperature: {data.bodyTemp}</span> */}
                </div>
                {data.expanded && (
                  <div className='mt-3'>
                    <p>Gender: {data.gender}</p>
                    <p>Age: {data.age}</p>
                    {/* <p>Body Temperature: {data.bodyTemp}</p> */}
                    <p>Pulse Rate: {data.pulseRate}</p>
                    <p>Respiration Rate: {data.respirationRate}</p>
                    <p>Blood Pressure: {data.bloodPressure}</p>
                    <p>Blood Oxygen Level: {data.bloodOxygenLevel}</p>
                    <p>Weight: {data.weight}</p>
                    <p>Blood Glucose Level: {data.bloodGlucoseLevel}</p>
                    <p>Result: {data.result}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}