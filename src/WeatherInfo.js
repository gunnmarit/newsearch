import React from "react";
import FormattedDate from "./FormattedDate";
import Temperature from "./Temperature";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="weather">
      <div className="row">
        <div className="col-6">
          <h1 className="city">{props.weather.city}</h1>
          <ul className="normal">
            <li>
              <span className="weather-condition">
                {props.weather.description}
              </span>
            </li>
            <li>
              <span>
                Feels like:{" "}
                <span className="weather-feels-like">
                  {Math.round(props.weather.feelsLike)}°C
                </span>
              </span>
            </li>
            <li>
              Last updated: <FormattedDate date={props.weather.date} />
            </li>
          </ul>
        </div>
        <div className="col-6">
          <div className="temperature-container d-flex justify-content-end">
            <WeatherIcon
              code={props.weather.icon}
              description={props.weather.description}
            />
            <Temperature temperature={props.weather.temperature} />
          </div>
        </div>
      </div>
    </div>
  );
}
