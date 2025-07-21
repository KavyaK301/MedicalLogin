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
          <Login
            onClose={() => setShowLoginPopup(false)}
            onSignupClick={() => {
              setShowLoginPopup(false);
              setShowSignupPopup(true);
            }}
          />
        </div>
      )}

      {showSignupPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <Signup
            onClose={() => setShowSignupPopup(false)}
            onLoginClick={() => {
              setShowSignupPopup(false);
              setShowLoginPopup(true);
            }}
          />
        </div>
      )}
    </Router>
  );
}

export default App;
