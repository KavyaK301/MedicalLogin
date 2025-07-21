import React from 'react';

const Login = ({ onClose, onSignupClick }) => {
  return (
    <div className="relative bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      {/* Close Button - Gray only, no blue */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-gray-500 text-2xl font-bold"
        style={{
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          padding: '0',
          margin: '0',
        }}
        onMouseEnter={(e) => {
          e.target.style.color = '#4b5563'; // darker gray
        }}
        onMouseLeave={(e) => {
          e.target.style.color = '#6b7280'; // default gray
        }}
      >
        ×
      </button>

      <h2 className="text-2xl font-bold text-center text-black mb-2">Welcome Back!</h2>
      <p className="text-black text-center mb-6">Login with your details to continue</p>

      <form className="space-y-5">
        <div>
          <label className="block text-sm text-black mb-1">Email:</label>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-2 border border-gray-300 rounded-md text-black focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm text-black mb-1">Password:</label>
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md text-black focus:outline-none"
          />
        </div>

        {/* Neutral (gray) Login button */}
        <button
          type="submit"
          className="w-full bg-gray-700 hover:bg-gray-800 text-white py-2 rounded-md transition"
        >
          Login
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-black">
        Don't have an account?{' '}
        <button
          onClick={onSignupClick}
          className="text-sm text-gray-700  font-normal"
          // style={{
          //   background: 'transparent',
          //   border: 'none',
          //   padding: '0',
          //   cursor: 'pointer',
          // }}
        >
          Sign Up
        </button>
      </p>
    </div>
  );
};

export default Login;  