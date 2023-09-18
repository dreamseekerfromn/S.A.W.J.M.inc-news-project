import "./current-weather.css";
import Search from "../search/Search.jsx";

const CurrentWeather = () => {
  return (
    <div className="weather">
      <Search />
      <div className="top"></div>
      <div className="bottom">
        <h1 className="heading">Your Local Weather</h1>
        <p className="city">Belgrade</p>
        <p className="weather-description">Sunny</p>
      </div>
      <img
        alt="weather"
        className="currentWeather-icon"
        src="weather-icons/weather-symbol.png"
      />
    </div>
  );
};

export default CurrentWeather;
