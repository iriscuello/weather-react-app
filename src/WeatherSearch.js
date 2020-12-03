import React, { useState } from "react";
import axios from "axios";
import DateTime from "./DateTime";

export default function SearchEngine(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function tempDisplay(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      iconURL:
        "https://d29fhpw069ctt2.cloudfront.net/icon/image/84559/preview.svg",
      temperature: response.data.main.temp,
      realFeel: Math.round(response.data.main.feels_like),
      hiTemp: Math.round(response.data.main.temp_max),
      lowTemp: Math.round(response.data.main.temp_min),
      wind: Math.round(response.data.wind.speed),
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      city: response.data.main.name,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form id="search-form" className="mb-3">
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter City..."
                className="form-control"
                id="searchEngine"
                autoFocus="on"
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
            <div>
              <h1 id="city">Toronto</h1>
              <DateTime date={weatherData.date}/>
            </div>
          </div>
        </form>
        <div className="row">
          <div className="col-6">
            <ul id="current">
              <li>
                <span id="temperature">
                  {Math.round(weatherData.temperature)}
                </span>
                <span id="cel">℃</span>
                <span id="line">|</span> <span id="fer">℉</span>
              </li>
              <li id="realFeel">Feels Like: {weatherData.realFeel}℃</li>
              <li id="hiTemp">HI: {weatherData.hiTemp}℃</li>
              <span id="lowTemp">LOW: {weatherData.lowTemp}℃ </span>
            </ul>
          </div>
          <div className="col-6" id="image">
            <img src={weatherData.iconURL} alt="Cloudy" />
            <ul id="listWH">
              <li id="windSpeed">Wind Speed: {weatherData.wind} km/h</li>
              <li id="humidity">Humidity: {weatherData.humidity}%</li>
              <li className="text-capitalize" id="description">
                {weatherData.description}
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
   let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.cityDefault}&appid=f6daddd2490e280fc02eb01a9840f82a&units=metric`;

    axios.get(url).then(tempDisplay);

    return "Loading...";
  }
}
