import SearchEngine from "./SearchEngine";
import Current from "./Current";
import Forecast from "./Forecast";

import "./App.css";
import "./Current.css";
import "./SearchEngine.css";
import "./index.css";
import "./Forecast.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <SearchEngine />
        <h1 id="city">Toronto</h1>
        <h2 id="dateTime">November 26, 2020</h2>
        <div>
          <Current />
          <Forecast />
        </div>
      </div>
      <footer>Coded by Iris Linares
        <a href="https://github.com/iriscuello/weather-react-app">
          Open-sourced 
        </a>
        <span> on GitHub</span>
      </footer>
    </div>
  );
}

export default App;
