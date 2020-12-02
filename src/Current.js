import React from "react";

export default function Current() {
  return (
    <div className="row">
      <div className="col-6">
        <ul id="current">
          <li id="currTemp">
            <span id="temperature">6</span>
            <span id="cel">℃</span> |<span id="fer">℉</span>
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
  );
}
