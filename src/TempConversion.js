import React, { useState } from "react";

export default function TempConversion (props) { 
  const [unit, setUnit]  = useState("celsius");
  function conversionToFar (event) {
   event.preventDefault();
    setUnit("fahrenheit");
  }
function conversionToCel (event) {
  event.preventDefault();
  setUnit("celsius");
}

  if(unit === "celsius") {
   return (
<ul id="current">
  <li>
    <span id="temperature">{Math.round(props.celsius)}</span>
    <span className="unit" id="cel">℃ | <a href="/" onClick={conversionToFar}>℉</a></span>
  </li>
</ul>
); 
  }
  else { 
    let far = (props.celsius * 9/5) + 32;
    return (
      <ul id="current">
        <li>
          <span id="temperature">{Math.round(far)}</span>
          <span className="unit" id="cel">
            <a href="/" onClick={conversionToCel}>℃ |</a>{" "}
              ℉
          </span>
        </li>
      </ul>
    );
  }
}
