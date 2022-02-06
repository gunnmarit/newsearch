import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function formattedDay() {
    const date = new Date(props.data.dt * 1000);
    const day = date.getDay();
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day +1];
  }

  return (
    <div>
      <div className="WeatherForecast-day">{formattedDay()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={40} />
      <div className="WeatherForecast-temp">
        <span className="WeatherForecast-temp-max">{maxTemperature()}C</span>
        <span className="WeatherForecast-temp-min">{minTemperature()}C</span>
      </div>
    </div>
  );
}