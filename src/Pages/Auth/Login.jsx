import React from 'react';

const Login = ({ onClose, onSignupClick }) => {
  return (
    <div className="relative">
      {/* Close Button - No blue color, only gray */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 cursor-pointer"
        style={{
          background: 'transparent',
          border: 'none',
          padding: '8px',
          margin: '0',
          fontSize: '24px',
          lineHeight: '1',
          color: '#6b7280', // gray-500
          fontWeight: 'bold',
        }}
        onMouseEnter={(e) => {
          e.target.style.color = '#4b5563'; // gray-600 (darker gray)
          e.target.style.background = 'transparent';
        }}
        onMouseLeave={(e) => {
          e.target.style.color = '#6b7280'; // gray-500
          e.target.style.background = 'transparent';
        }}
      >
        ×
      </button>

      {/* Header */}
      <h2 className="text-2xl font-bold text-center text-black mb-2">Welcome Back!</h2>
      <p className="text-black text-center mb-6">Login with your details to continue</p>

      {/* Form */}
      <form className="space-y-5">
        <div>
          <label className="block text-sm text-black mb-1">Email:</label>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-2 border border-blue-300 rounded-md text-black focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm text-black mb-1">Password:</label>
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-blue-300 rounded-md text-black focus:outline-none"
          />
        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full text-white py-2 rounded-md focus:outline-none"
          style={{
            backgroundColor: '#2563eb', // blue-600
            border: 'none',
            padding: '0.5rem',
            fontSize: '1rem',
            fontWeight: '500',
            borderRadius: '6px',
            cursor: 'pointer',
            transition: 'background-color 0.2s',
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#1d4ed8'; // blue-700
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = '#2563eb'; // blue-600
          }}
        >
          Login
        </button>
      </form>

      {/* Switch to Signup */}
      <p className="mt-6 text-center text-sm text-black">
        Don't have an account?{' '}
        <button
          onClick={onSignupClick}
          className="text-blue-700 font-semibold focus:outline-none"
          style={{
            background: 'transparent',
            border: 'none',
            padding: '0',
            fontSize: 'inherit',
            fontWeight: '600',
            color: '#1d4ed8',
            cursor: 'pointer',
            textDecoration: 'none',
          }}
          onMouseEnter={(e) => {
            e.target.style.textDecoration = 'underline';
          }}
          onMouseLeave={(e) => {
            e.target.style.textDecoration = 'none';
          }}
        >
          Sign Up
        </button>
      </p>
    </div>
  );
};

export default Login;