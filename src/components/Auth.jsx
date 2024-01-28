import React, { useRef, useState } from "react";
import authBG from "../assets/authng.svg";
import logo from "../assets/logo.svg";
import patt from "../assets/pattern.svg";
import socials from "../assets/social.svg";
import google from "../assets/google.svg";
import apple from "../assets/apple.svg";
import {useNavigate } from "react-router-dom";
import { validateForm } from "../utils/validate";

const Auth = () => {
  const email = useRef(null);
  const password = useRef(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate=useNavigate()

  const handleLogin=()=>{
    const isValid = validateForm(email.current.value);
    setErrorMessage(isValid);
    if (isValid) return;
    else{
      navigate('/dashboard')
    }
  }

  return (
    <div className="h-screen md:flex bg-[#605BFF] md:bg-[#F8FAFF]">
      <div className="w-screen md:w-1/2">
        <div className="md:absolute top-8 left-10  ">
          <img className="w-16" src={logo} alt="" />
          <img className="absolute top-5 w-16" src={patt} alt="" />
        </div>
        <h1 className=" md:absolute text-center font-semibold md:left-40 bottom-56 text-3xl md:text-6xl text-white">
          BASE
        </h1>
        <img className="md:absolute bottom-8 left-28 w-44" src={socials} alt="" />
        <img className="hidden md:block object-cover" src={authBG} alt="" />
      </div>

      <div className="ml-0 md:ml-10 md:w-1/2 p-4 md:p-0">
        <h1 className="text-bold font-bold text-xl mb-3  mt-20">Sign In</h1>
        <h1 className="font-semibold mb-4">Sign in to your account</h1>
        <div className="flex mb-4 w-[300px]  md:w-[450px] gap-3">
          <button className="bg-white rounded-md flex justify-center items-center p-2 text-xs w-1/2">
            <img className='mr-4' src={google} alt="" />
            Sign in with google
          </button>
          <button className="bg-white rounded-md flex justify-center items-center text-xs p-2 w-1/2">
            <img className='mr-4' src={apple} alt="" />
            Sign in with apple
          </button>
        </div>

        <form
          className="bg-white w-[300px]  md:w-[450px] p-4 md:p-8 rounded-md"
          onSubmit={(e) => e.preventDefault()}
        >
          <label htmlFor="email" className="font-semibold">Email Address</label>
          <br />
          <input
          ref={email}
            className="bg-gray-300 p-3 rounded-md mb-8 mt-2 w-full focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
            type="email"
            placeholder="email address"
          />
          <br />
          <label htmlFor="email" className="font-semibold">Password</label>
          <br />
          <input
          ref={password}
            className="bg-gray-300 p-3 rounded-md mb-8 w-full mt-3 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
            type="password"
            placeholder="password"
          />
          <h1 className="text-blue-600 mb-3">Forgot password?</h1>
          <p className="text-red-700 font-bold">{errorMessage}</p>
          <button className="bg-blue-600 text-white w-full p-3 rounded-md font-semibold" onClick={handleLogin}>
          Sign In
          </button>
        </form>

        <h1 className="">
          Don’t have an account?{" "}
          <span className="text-blue-600">Register here</span>
        </h1>
      </div>
    </div>
  );
};

export default Auth;
