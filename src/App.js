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
        <h2 id="dateTime">November 26, 2020</h2>
        <div className="row">
          <Current />
          <Description />
        </div>
      </div>
      <footer>
        <a href="https://github.com/iriscuello/weather-react-app">
          Open-sourced 
        </a>
        on GitHub
      </footer>
    </div>
  );
}

export default App;
