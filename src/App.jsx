import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import PatientProfile from "./components/PatientProfile/PatientProfile";
import Reception from "./components/Reception/Reception";
import Login from "./Pages/Auth/login";
import Signup from "./Pages/Auth/Signup";

function App() {
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showSignupPopup, setShowSignupPopup] = useState(false);

  return (
    <Router>
      <Home onLoginClick={() => setShowLoginPopup(true)} />

      <Routes>
        <Route path="/patient-profile" element={<PatientProfile />} />
        <Route path="/reception/*" element={<Reception />} />
      </Routes>

      {showLoginPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="relative bg-white p-6 rounded-md shadow-md w-full max-w-md overflow-y-auto max-h-screen">
            <button
              className="absolute top-2 right-2 text-blue-500 text-lg font-bold focus:outline-none hover:text-blue-500"
              onClick={() => setShowLoginPopup(false)}
            >
              ✕
            </button>
            <Login
              onClose={() => setShowLoginPopup(false)}
              onSignupClick={() => {
                setShowLoginPopup(false);
                setShowSignupPopup(true);
              }}
            />
          </div>
        </div>
      )}

      {showSignupPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="relative bg-white p-6 rounded-md shadow-md w-full max-w-md overflow-y-auto max-h-screen">
            <button
              className="absolute top-2 right-2 text-blue-500 text-lg font-bold focus:outline-none hover:text-blue-500"
              onClick={() => setShowSignupPopup(false)}
            >
              ✕
            </button>
            <Signup
              onClose={() => setShowSignupPopup(false)}
              onLoginClick={() => {
                setShowSignupPopup(false);
                setShowLoginPopup(true);
              }}
            />
          </div>
        </div>
      )}
    </Router>
  );
}

export default App;
