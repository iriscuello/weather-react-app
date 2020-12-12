import React, { useState } from "react";
import axios from "axios";
import "./Forecast.css";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setLoaded(true);
    setForecast(response.data);
    
  }

  if (loaded) {
    console.log(forecast);
        return "loaded";
  } else {
  let forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=f6daddd2490e280fc02eb01a9840f82a&units=metric`;

  axios.get(forecastUrl).then(handleForecastResponse);

  return null;
  }
}
// <div className="row weather-forecast">
// <div className="col-2">
//   <h3>Tues</h3>
//   <image src="" alt="clear" id="fIconTues" />
//   <div className="weather-forecast-temperature">
//     <strong className="tues">22°</strong> <span id="tues">17°</span>
//   </div>
// </div>
// <div className="col-2">
//   <h3>Wed</h3>
//   <image src="" alt="clear" id="fIconWed" />
//   <div className="weather-forecast-temperature">
//     <strong className="wed">22°</strong><span id="wed">17°</span>
//   </div>
// </div>
// <div className="col-3">
//   <h3>Thurs</h3>
//   <image src="" alt="clear" id="fIconThurs" />
//   <div className="weather-forecast-temperature">
//     <strong className="thurs">22°</strong><span id="thurs">17°</span>
//   </div>
// </div>
// <div className="col-2">
//   <h3>Fri</h3>
//   <image src="" alt="clear" id="fIconFri" />
//   <div className="weather-forecast-temperature">
//     <strong className="fri">22°</strong><span id="fri">17°</span>
//   </div>
// </div>
// <div className="col-2">
//   <h3>Sat</h3>
//   <image src="" alt="clear" id="fIconSat" />
//   <div className="weather-forecast-temperature">
//     <strong className="sat">22°</strong> <span id="sat">17°</span>
//   </div>
// </div>
// </div>
// );
// }
