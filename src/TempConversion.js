import React from "react";

export default function TempConversion () { return (
<ul id="current">
  <li>
    <span id="temperature">{Math.round(props.data.temperature)}</span>
    <span id="cel">℃</span>
    <span id="line">|</span> <span id="fer">℉</span>
  </li>
  <li id="realFeel">Feels Like: {props.data.realFeel}℃</li>
  <li id="hiTemp">HI: {props.data.hiTemp}℃</li>
  <span id="lowTemp">LOW: {props.data.lowTemp}℃ </span>
</ul>
);
}