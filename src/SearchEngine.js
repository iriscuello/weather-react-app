import React, { useState } from "react";
import axios from "axios";

export default function SearchEngine() {
const [ready, setReady] = useState(false);
    const [temperature, setTemperature] = useState(null);
    const [city, setCity] = useState("");

    function tempDisplay(response) {
      setTemperature(response.data.main.temp);
      setReady(true);
    }

    if (ready) {
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
      </div>
    </form>
    <div className="row">
      <div className="col-6">
        <ul id="current">
          <li>
            <span id="temperature">6</span>
            <span id="cel">℃</span><span id="line">|</span> <span id="fer">℉</span>
          </li>
          <li id="realFeel">Feels Like: 4℃</li>
          <li id="hiTemp">HI: 11℃</li>
          <span id="lowTemp">LOW: 2℃ </span>
        </ul>
      </div>
      <div className="col-6" id="image">
        <img
          src="https://d29fhpw069ctt2.cloudfront.net/icon/image/84559/preview.svg"
          alt="Cloudy"
        />
        <ul id="listWH">
          <li id="windSpeed">Wind Speed: 30km/h</li>
          <li id="humidity">Humidity: 30%</li>
          <li id="description">Overcast</li>
        </ul>
      </div>
    </div>
    </div>
  ):
    } 
    else {
let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f6daddd2490e280fc02eb01a9840f82a&units=metric`;

    axios.get(url).then(tempDisplay);

    return "Loading...";
    }
}
