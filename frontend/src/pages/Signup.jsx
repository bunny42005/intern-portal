import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = () => {
    // Add form validation/logic here
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-[url('/background.jpg')] bg-cover bg-center flex items-center justify-center font-inter">
      <div className="bg-white/30 backdrop-blur-lg p-8 rounded-2xl shadow-xl max-w-md w-full text-center animate-fade-in-down">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Create Account</h2>
        <p className="text-gray-700 mb-6">Sign up to get started</p>
        <input
          type="text"
          placeholder="Full Name"
          className="w-full mb-4 px-4 py-2 rounded-md border border-gray-300 focus:outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 px-4 py-2 rounded-md border border-gray-300 focus:outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 px-4 py-2 rounded-md border border-gray-300 focus:outline-none"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full mb-6 px-4 py-2 rounded-md border border-gray-300 focus:outline-none"
        />
        <button
          onClick={handleSignup}
          className="w-full max-w-xs mx-auto bg-blue-600 text-white px-6 py-3 rounded-xl shadow-md hover:bg-blue-700 transition duration-200 text-base sm:text-lg font-medium"
        >
          Sign Up
        </button>
        <p className="mt-4 text-sm text-gray-800">
          Already have an account?{" "}
          <Link to="/" className="text-blue-600 font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
