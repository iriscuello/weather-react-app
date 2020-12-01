import React from "react";

export default function Current() {
  return (
    <div className="col-6">
      <ul id="current">
        <li>
          <span id="temperature">6</span>
          <span>℃</span> |<span>℉</span>
        </li>
        <li id="realFeel">Feels Like: 4℃</li>

        <li id="hiTemp">HI: 11℃</li>
        <span id="lowTemp">LOW: 2℃ </span>
      </ul>
    </div>
  );
}
