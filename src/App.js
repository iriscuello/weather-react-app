import WeatherSearch from "./WeatherSearch";



import "./App.css";
import "./WeatherSearch.css";
import "./index.css";

function App() {
  return (
    <div className="App">
      <div className="container">
 
        <WeatherSearch cityDefault="Toronto"/>
      </div>
      <footer>
        Coded by Iris Linares
        <a href="https://github.com/iriscuello/weather-react-app">
          Open-sourced
        </a>
        <span> on GitHub</span>
      </footer>
    </div>
  );
}

export default App;
