import React from "react";

export default function Description() {
  return (
    <div className="col-6">
      <i className="fas fa-cloud"></i>
      <ul id="listWH">
        <li id="windSpeed">Wind Speed: 30km/h</li>
        <li id="humidity">Humidity: 30%</li>
        <li id="description">Overcast</li>
      </ul>
    </div>
  );
}