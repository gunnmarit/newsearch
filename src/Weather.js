import axios from "axios";
import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
  let [loaded, setLoaded] = useState(false);
  let [city, setCity] = useState(props.city);
  let [weather, setWeather] = useState({});

  const handleResponse = (res) => {
    setWeather({
      ready: true,
      city: res.data.name,
      temperature: res.data.main.temp,
      description: res.data.weather[0].description,
      humidity: res.data.main.humidity,
      wind: res.data.wind.speed,
      icon: res.data.weather[0].icon,
      date: res.data.dt,
      feelsLike: res.data.main.feels_like,
      coord: res.data.coord,
    });
    setLoaded(true);
    console.log("Weather res", res);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    search();
    // event.target.reset();
  };

  const updateCity = (event) => {
    setCity(event.target.value);
  };

  const search = () => {
    const apiKey = "69181bdb9d5f82f38a07c3cf8a85b271";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  };

  if (loaded) {
    return (
      <div>
            <h3> Wherever you go, <br />
        no matter what the weather, <br />
        always bring your own sunshine. 
      </h3>
        <div>
          <form
            className="weather-search"
            id="weather-search"
            onSubmit={handleSubmit}
          >
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Enter your city.."
                  className="form-control search-input"
                  id="search-input"
                  onChange={updateCity}
                />
              </div>
              <div className="col-3 p-0">
                <input
                  type="submit"
                  className="btn btn-primary w-100 search-btn"
                  value="Search"
                />
              </div>
            </div>
          </form>
        </div>
        <WeatherInfo weather={weather} city={city} />
        <WeatherForecast coord={weather.coord} />
      </div>
    );
  } else {
    search();
    return (
      <div className="loader">
          Loading.....
      </div>
    );
  }
}