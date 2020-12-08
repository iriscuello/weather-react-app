import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function SearchEngine(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState (props.cityDefault);

  function tempDisplay(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      iconURL:
        `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      temperature: response.data.main.temp,
      realFeel: Math.round(response.data.main.feels_like),
      hiTemp: Math.round(response.data.main.temp_max),
      lowTemp: Math.round(response.data.main.temp_min),
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      city: response.data.name,
    });
  }

  function search() {
let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f6daddd2490e280fc02eb01a9840f82a&units=metric`;
    axios.get(url).then(tempDisplay);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
   setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit} id="search-form" className="mb-3">
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter City..."
                className="form-control"
                id="searchEngine"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Let's See"
                id="button"
                className="btn btn-primary w-100"
                
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    return "Loading...";
  }
}
