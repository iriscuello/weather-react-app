import React from "react";
import DateTime from "./DateTime";
import WeatherIcon from "./WeatherIcon";
import TempConversion from "./TempConversion";

export default function WeatherInfo(props) {
    return (
      <div className="WeatherInfo">
        <h1 id="city">{props.data.city}</h1>
        <DateTime date={props.data.date} />
        <div className="row">
          <div className="col-6">
            <ul>
              <TempConversion celsius={props.data.temperature} />
              <li id="realFeel">Feels Like: {props.data.realFeel}℃</li>
              <li id="hiTemp">HI: {props.data.hiTemp}℃</li>
              <span id="lowTemp">LOW: {props.data.lowTemp}℃ </span>
            </ul>
          </div>
          <div className="col-6" id="image">
            <WeatherIcon code={props.data.icon} />
            <div>
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
      </div>
    );
}