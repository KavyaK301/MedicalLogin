import React from 'react';

const Signup = ({ onClose, onLoginClick }) => {
  return (
    <div className="relative bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="
          modal-close-btn
          absolute top-4 right-4
          text-blue-600 text-3xl font-bold
          p-0 m-0
        "
      >
        ×
      </button>

      {/* Header */}
      <h2 className="text-2xl font-bold text-center text-black mb-2">Create Account</h2>
      <p className="text-black text-center mb-6">Sign up with your details to get started</p>

      {/* Form */}
      <form className="space-y-4">
        {/* Name and Age */}
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="border border-blue-300 px-4 py-2 rounded-md text-black focus:outline-none"
          />
          <input
            type="number"
            placeholder="Age"
            className="border border-blue-300 px-4 py-2 rounded-md text-black focus:outline-none"
          />
        </div>

        {/* Blood Group & Gender */}
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Blood Group"
            className="border border-blue-300 px-4 py-2 rounded-md text-black focus:outline-none"
          />
          <select className="border border-blue-300 px-4 py-2 rounded-md text-black focus:outline-none">
            <option>Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>

        {/* Marital Status & City */}
        <div className="grid grid-cols-2 gap-4">
          <select className="border border-blue-300 px-4 py-2 rounded-md text-black focus:outline-none">
            <option>Marital Status</option>
            <option>Single</option>
            <option>Married</option>
          </select>
          <input
            type="text"
            placeholder="City"
            className="border border-blue-300 px-4 py-2 rounded-md text-black focus:outline-none"
          />
        </div>

        {/* State & Zip Code */}
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="State"
            className="border border-blue-300 px-4 py-2 rounded-md text-black focus:outline-none"
          />
          <input
            type="text"
            placeholder="Zip Code"
            className="border border-blue-300 px-4 py-2 rounded-md text-black focus:outline-none"
          />
        </div>

        {/* Email & Password */}
        <input
          type="email"
          placeholder="Email"
          className="w-full border border-blue-300 px-4 py-2 rounded-md text-black focus:outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border border-blue-300 px-4 py-2 rounded-md text-black focus:outline-none"
        />

        {/* Sign Up Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Sign Up
        </button>
      </form>

      {/* Switch to Login */}
      <p className="mt-6 text-center text-sm text-black">
        Already have an account?{' '}
        <button
          onClick={onLoginClick}
          className="text-blue-700 font-semibold hover:underline focus:outline-none"
        >
          Login
        </button>
      </p>
    </div>
  );
};

export default Signup;
