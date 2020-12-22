import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastPreview(props){
    return (
      <div className="col-2">
        <h3>Tues</h3>
        <WeatherIcon code={props.data[0].weather[0].icon} />
        <div className="weather-forecast-temperature">
          <strong className="tues">
            {Math.round(props.data[0].main.temp_min)}℃
          </strong>{" "}
          <span id="tues">{Math.round(props.data[0].main.temp_max)}℃</span>
        </div>
        </div>
        <div className="col-2">
          <h3>Wed</h3>
          <WeatherIcon code={props.data[11].weather[0].icon} />
          <div className="weather-forecast-temperature">
            <strong className="wed">
              {Math.round(props.data[11].main.temp_min)}℃
            </strong>{" "}
            <span id="wed">{Math.round(props.data[0].main.temp_max)}℃</span>
          </div>
        </div>
        <div className="col-2">
          <h3>Thurs</h3>
          <WeatherIcon code={props.data[19].weather[0].icon} />
          <div className="weather-forecast-temperature">
            <strong className="thurs">
              {Math.round(props.data[19].main.temp_min)}℃
            </strong>{" "}
            <span id="thurs">{Math.round(props.data[19].main.temp_max)}℃</span>
          </div>
        </div>
        <div className="col-2">
          <h3 id="fri">Fri</h3>
          <WeatherIcon code={props.data[27].weather[0].icon} />
          <div className="weather-forecast-temperature">
            <strong className="fri">
              {Math.round(props.data[27].main.temp_min)}℃
            </strong>{" "}
            <span id="fri">{Math.round(props.data[27].main.temp_max)}℃</span>
          </div>
        </div>
        <div className="col-2">
          <h3>Sat</h3>
          <WeatherIcon code={props.data[35].weather[0].icon} />
          <div className="weather-forecast-temperature">
            <strong className="sat">
              {Math.round(props.data[35].main.temp_min)}℃
            </strong>{" "}
            <span id="sat">{Math.round(props.data[35].main.temp_max)}℃</span>
          </div>
        </div>
        <div className="col-2">
          <h3>Sun</h3>
          <WeatherIcon code={props.data[39].weather[0].icon} />
          <div className="weather-forecast-temperature">
            <strong className="sun">
              {Math.round(props.data[39].main.temp_min)}℃
            </strong>{" "}
            <span id="sun">{Math.round(props.data[39].main.temp_max)}℃</span>
          </div>
        </div>
    );
}
