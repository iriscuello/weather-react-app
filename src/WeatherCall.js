import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  let [temperature, setTemperature] = useState(null);

  function tempDisplay(response) {
    setTemperature(response.data.main.temp);
  }

  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=f6daddd2490e280fc02eb01a9840f82a&units=metric`;

  axios.get(url).then(tempDisplay);

  return (
    <h1>
      The temperature in {props.city} is {Math.round(temperature)}℃
    </h1>
  );
}
