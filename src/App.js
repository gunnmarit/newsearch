import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Footer from "./Footer";
import Weather from "./Weather";

const App = () => (
  <div className="container">
    <div className="weather-app-wrapper">
      <Weather city="Bergen" />
      <Footer />
    </div>
  </div>
);

export default App;