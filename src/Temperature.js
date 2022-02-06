import React, { useState } from "react";

export default function Temperature(props) {
  const [unit, setUnit] = useState("celcius");

  const setCelcius = (e) => {
    e.preventDefault();
    setUnit("celcius");
  };

  const toFarenheit = (temp) => {
    return Math.round(temp * (9 / 5) + 32);
  };

  const setFarenheit = (e) => {
    e.preventDefault();
    setUnit(toFarenheit("farenheit"));
  };

  if (unit === "celcius") {
    return (
      <div className="temperature-container d-flex justify-content-end">
        <span className="temperature">{Math.round(props.temperature)}</span>
        <span className="unit">
          {" "}
          <span className="inactive-link">°C</span>
          <a href="/" onClick={setFarenheit}>
            {" "}
            °F
          </a>
        </span>
      </div>
    );
  } else {
    let farenheit = Math.round(props.temperature * (9 / 5) + 32);
    return (
      <div className="temperature-container d-flex justify-content-end">
        <span className="temperature">{farenheit}</span>
        <span className="unit">
          {" "}
          <a href="/" onClick={setCelcius}>
            °C{" "}
          </a>
          <span className="inactive-link">°F</span>
        </span>
      </div>
    );
  }
}