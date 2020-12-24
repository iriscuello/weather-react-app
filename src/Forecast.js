import React, { useState } from "react";
import ForecastPreview from "./ForecastPreview";
import axios from "axios";
import "./Forecast.css";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
   setForecast(response.data);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast.list);
    return (
      <div className="weather-forecast">
        <ForecastPreview data={forecast.list} />
      </div>
    );
  } else {
  let forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=f6daddd2490e280fc02eb01a9840f82a&units=metric`;

  axios.get(forecastUrl).then(handleForecastResponse);

  return null;
  }
}