import SearchEngine from "./SearchEngine";
import Current from "./Current";
import Description from "./Description";

import "./App.css";
import "./Current.css";
import "./Description.css";
import "./SearchEngine.css";
import "./index.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <SearchEngine />
        <h1 id="city">Toronto</h1>
        <h2 id="dateTime">October 26, 2020</h2>
        <div className="row">
          <Current />
          <Description />
          <footer>
          <a href="https://github.com/iriscuello/weather-react-app" target="_blank" >Open-soured on GitHub</a></footer>
        </div>
      </div>
    </div>
  );
}

export default App;
