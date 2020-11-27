import React from "react";

export default function Description() {
  return (
    <div className="col-6">
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
  );
}
