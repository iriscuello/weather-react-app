import React from "react";
import DateTime from "./DateTime";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
    return (
      <div className="WeatherInfo">
        <h1 id="city">{props.data.city}</h1>
        <DateTime date={props.data.date} />
        <div className="row">
          <div className="col-6">
            <ul id="current">
              <li>
                <span id="temperature">
                  {Math.round(props.data.temperature)}
                </span>
                <span id="cel">℃</span>
                <span id="line">|</span> <span id="fer">℉</span>
              </li>
              <li id="realFeel">Feels Like: {props.data.realFeel}℃</li>
              <li id="hiTemp">HI: {props.data.hiTemp}℃</li>
              <span id="lowTemp">LOW: {props.data.lowTemp}℃ </span>
            </ul>
          </div>
          <div className="col-6" id="image">
            <div>
            <WeatherIcon code={props.data.icon}
              />
             </div>
            <ul id="listWH">
              <li id="windSpeed">Wind Speed: {props.data.wind} km/h</li>
              <li id="humidity">Humidity: {props.data.humidity}%</li>
              <li className="text-capitalize" id="description">
                {props.data.description}
              </li>
            </ul>
          </div>
          </div>
      </div>
    );
}