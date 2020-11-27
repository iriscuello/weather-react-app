import React from "react";

export default function Current(props) {
  return (
    <div className="col-6">
      <ul id="current">
        <li>
          <span id="temperature">8</span>
          <span>℃</span> |<span>℉</span>
        </li>
        <li id="realFeel">Feels Like: 4℃</li>

        <li id="hiTemp">HI: 8℃</li>
        <span id="lowTemp">LOW: 2℃ </span>
      </ul>
    </div>
  );
}
