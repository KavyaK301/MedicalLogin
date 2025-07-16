import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer"; // ✅ Add this line

function App() {
  return (
    <>
      <Header />
    
      <Footer /> {/* ✅ Make sure Footer is correctly placed */}
    </>
  );
}

export default App;
