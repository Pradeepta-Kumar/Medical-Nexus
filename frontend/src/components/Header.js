import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { API_END_POINT } from "../utils/constants";

export default function Header() {
  const navigate = useNavigate();
  const [user, setUser] = useState(false);

  const loginHandler = () => {
    setUser(true);
    navigate("/login");
  };
  const homepage = () => {
    navigate("/");
  };
  const aboutUsHandler = () => {
    navigate("/aboutus");
  };
  const logout = async() => {
    try {
     const response = await axios.get(`${API_END_POINT}/logout`);
     console.log(response);
     if(response.data.success) {
       toast.success(response.data.message);
     }
     
     navigate("/");
    } catch (error) {
     toast.error(error.response.data.message);
     console.log(error);
    }
   }

  return (
    <div className="bg-blue-500 h-[70px] flex justify-between">
      <div className="my-2 ml-8 cursor-pointer" onClick={homepage}>
        <h1 className="text-3xl font-bold text-white px-8">HealthQure+</h1>
        <p className="text-sm text-white ml-12">your health matters</p>
      </div>
      <div className="flex text-white text-sm items-center mr-8">
        <button
          onClick={aboutUsHandler}
          className="mr-2 bg-white opacity-80 text-black py-1 px-2 rounded-xl cursor-pointer"
        >
          About us
        </button>
        {user && (
          <button onClick={logout} 
           className="flex justify-center items-center mr-2 bg-white opacity-80 text-black py-1 px-2 rounded-xl cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-4 h-4 mr-2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM4 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 10.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
              />
            </svg>
            log out
          </button>
        )}
        {!user && (
          <button 
            onClick={loginHandler} 
            className="flex items-center mr-2 bg-white opacity-80 text-black py-1 px-2 rounded-xl cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-4 h-4 mr-1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
            Hello, Login?
          </button>
        )}
      </div>
    </div>
  );
}
