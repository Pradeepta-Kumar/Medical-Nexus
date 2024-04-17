import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import { API_END_POINT } from "../utils/constants";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginHandler = () => {
    setIsLogin(!isLogin);
  };
  async function getInputData(e) {
    e.preventDefault();

    if (isLogin) {
      //login
      const user = { email, password };
      try {
        const response = await axios.post(`${API_END_POINT}/login`, user, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });
        console.log(response);
        if (response.data.success) {
          toast.success(response.data.message);
        }
        // console.log(response.data);
        navigate("/userdetails");
      } catch (e) {
        toast.error(e.response.data.message);
        console.log(e);
      } 
    } else {
      //signup
      const user = { fullName, email, password };
      try {
        const response = await axios.post(`${API_END_POINT}/register`, user, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });
        console.log(response);
        if (response.data.success) {
          toast.success(response.data.message);
        }
        navigate("/login");
      } catch (e) {
        toast.error(e.response.data.message);
        console.log(e);
      }
    }

    setFullName("");
    setEmail("");
    setPassword("");
  }

  return (
    <div>
      <Header />
      <main>
        <div className="w-[100vw] h-[100vh]">
          <form
            onSubmit={getInputData}
            className="flex flex-col p-12 w-3/12 my-16 left-0 right-0 mx-auto items-center justify-center absolute bg-blue-400 shadow-md opacity-90 rounded-md"
          >
            <h1 className="text-3xl font-bold text-white bg-blue-500 px-2 py-1 rounded">
              HealthQure+
            </h1>
            <h2 className="text-2xl text-white font-bold mb-5 pt-2">
              {isLogin ? "Login" : "Signup"}
            </h2>
            <div className="flex flex-col">
              {!isLogin && (
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Enter your fullname"
                  className="outline-none p-2 my-2 rounded-sm text-black"
                />
              )}
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email"
                className="outline-none p-2 my-2 rounded-sm text-black "
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
                className="outline-none p-2 my-2 rounded-sm text-black "
              />
              <button className="outline-none p-2 my-2 rounded-sm bg-blue-500 text-white">
                {isLogin ? "Login" : "Signup"}
              </button>

              <p className="text-sm text-white mt-1">
                {isLogin ? "New to HeathQure ? " : "Already have an account ? "}
                <span
                  onClick={loginHandler}
                  className="cursor-pointer font-bold"
                >
                  {isLogin ? "Signup" : "Login"}
                </span>
              </p>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}
