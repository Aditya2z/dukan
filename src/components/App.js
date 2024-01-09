import React from "react";
import Navbar from "./Navbar";
import Payments from "./Payments";
import "../styles/style.css";


function App() {
  return (
    <div className="flex container-100">
      <Navbar />
      <Payments />
    </div>
  );
}

export default App;
