import React, { useState } from "react";
// import LoginImg from '../images/login.jpg'
import SignUp from "./SignUp";

export default function Login() {
  // const [showSignUp, setShowSignUp] = React.useState(false);

  const [showSignUp, setShowSignUp] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const toggleSignUp = () => {
    setShowSignUp(!showSignUp);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", username, password);
  };

  return (


<div className="h-screen w-full bg-gray-700 flex">
{showSignUp ? (
  <div className="w-1/2 flex justify-center items-center">
    <SignUp  toggleSignUp={toggleSignUp} />
  </div>
) : (
  <div className="w-1/2 flex flex-col justify-center items-center">
    <form
      className="max-w-[400px] w-full mx-auto bg-gray-800 p-8 px-8 rounded-xl"
      onSubmit={handleSubmit}
    >
      <h2 className="text-4xl text-white font-bold text-center m-8">
        Sign In
      </h2>
      <div className="flex flex-col text-gray-400 py-2">
        <label>User Name</label>
        <input
          className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <div className="flex flex-col text-gray-400 py-2">
        <label>Password</label>
        <input
          className="rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div className="flex justify-between text gray-400 py-2">
        <p className="flex items-center">
          {" "}
          <input className="mr-2" type="checkbox" /> Remember Me
        </p>
        <p className="flex items-center">
          {" "}
          <input className="mr-2" type="checkbox" />
          Forgot Password
        </p>
      </div>
      <button className="w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 hover:shadow-teal-500/40 text-white font-semibold rounded-lg" 
      type="submit">
        Sign In
      </button>
      <p className="text-white">
        Don't have an account yet?{" "}
        <button className="text-teal-300" onClick={toggleSignUp}>
          Sign Up
        </button>
      </p>
    </form>
  </div>
)}
</div>
);
}
